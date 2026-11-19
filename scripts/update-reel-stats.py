#!/usr/bin/env python3
"""Refresh the featured reel's public stats (views, likes) on the profile page.

Runs every 2 days via launchd (~/Library/LaunchAgents/com.collabswithshade.reel-stats.plist).
Reads the reel with yt-dlp using Chrome's Instagram login, updates src/content/site.ts,
and if anything changed: builds, commits, and pushes to my-world and main (live).

Insights-only stats (viewers, reposts, shares, saves, follows, avg watch) aren't public,
so they stay as they are until updated by hand from a Reel Insights screenshot.
"""
import datetime, re, subprocess, sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SITE = REPO / "src/content/site.ts"
REEL = "https://www.instagram.com/reel/DfqTpashb68/"


def log(msg):
    print(f"[{datetime.datetime.now():%Y-%m-%d %H:%M}] {msg}", flush=True)


def compact(n):
    """Instagram-style: 269, 67.4K, 534K, 1M, 1.2M."""
    if n < 1000:
        return str(n)
    for div, suf in ((1_000_000, "M"), (1000, "K")):
        if n >= div:
            v = n / div
            s = f"{v:.0f}" if v >= 100 else f"{int(v * 10) / 10:.1f}".rstrip("0").rstrip(".")
            return s + suf
    return str(n)


def parse(s):
    m = re.fullmatch(r"([\d.]+)([KM]?)", s)
    return float(m.group(1)) * {"": 1, "K": 1e3, "M": 1e6}[m.group(2)] if m else 0


def git(*args):
    return subprocess.run(["git", *args], cwd=REPO, capture_output=True, text=True, check=True).stdout.strip()


def main():
    from yt_dlp import YoutubeDL

    with YoutubeDL({"quiet": True, "skip_download": True, "cookiesfrombrowser": ("chrome",)}) as ydl:
        info = ydl.extract_info(REEL, download=False)
    fresh = {"Views": info.get("view_count"), "Likes": info.get("like_count"), "Comments": info.get("comment_count")}
    log(f"Instagram: {fresh}")

    if git("rev-parse", "--abbrev-ref", "HEAD") != "my-world":
        log("Not on my-world branch; skipping so other work isn't touched.")
        return

    text = SITE.read_text()
    start = text.index("featuredVideo:")
    end = text.index("],", text.index("stats: [", start))
    block = text[start:end]
    new_block = block
    for label, num in fresh.items():
        if not num:
            continue
        m = re.search(r'\{ value: "([^"]+)", label: "%s" \}' % label, new_block)
        if not m:
            continue
        old = m.group(1)
        # Views/likes only go up; Instagram's public view count can lag Insights.
        if label != "Comments" and num < parse(old):
            continue
        new_block = new_block.replace(m.group(0), m.group(0).replace(f'"{old}"', f'"{compact(num)}"'))

    if new_block == block:
        log("No change.")
        return

    today = datetime.date.today().strftime("%b %-d %Y")
    new_block = re.sub(r"(Views, likes auto-updated )[A-Za-z]+ \d+ \d{4}", rf"\g<1>{today}", new_block)
    SITE.write_text(text[:start] + new_block + text[end:])
    log("Updated site.ts; building…")

    for attempt in (1, 2):  # Next sometimes fails the first build with a transient error.
        r = subprocess.run(["npm", "run", "build"], cwd=REPO, capture_output=True, text=True)
        if r.returncode == 0:
            break
    else:
        git("checkout", "--", str(SITE))
        log("Build failed; reverted.\n" + r.stdout[-1500:] + r.stderr[-1500:])
        sys.exit(1)

    git("add", str(SITE))
    git("commit", "-m", f"Auto-update featured reel stats ({today})", "--", str(SITE))
    git("push", "origin", "my-world")
    git("push", "origin", "my-world:main")
    log("Pushed live.")


if __name__ == "__main__":
    main()
