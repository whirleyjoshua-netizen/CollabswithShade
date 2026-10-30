"use client";

import { useState } from "react";

// Waitlist sign-ups go to Shade's inbox through Web3Forms, the same as the contact form.
// Without NEXT_PUBLIC_WEB3FORMS_KEY it opens the visitor's email app instead.
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export function GuideWaitlist({ email, guide }: { email: string; guide: string }) {
  const [from, setFrom] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `${guide} waitlist`;

    if (!accessKey) {
      const body = `Please add me to the waitlist for ${guide}.\n\n${from}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: accessKey, subject, email: from, replyto: from, message: `Waitlist sign-up for ${guide}` }),
      });
      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <p className="rounded-2xl bg-lavender-light px-5 py-4 font-serif text-lg">You&apos;re on the list! I&apos;ll email you the moment it&apos;s ready.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="waitlist-email">Email address</label>
      <input
        id="waitlist-email"
        type="email"
        autoComplete="email"
        required
        placeholder="Your email address"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="min-w-0 flex-1 rounded-full border border-taupe bg-white/80 px-5 py-3 text-base text-ink placeholder:text-muted/60 focus:border-lavender focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full border-2 border-gold bg-[radial-gradient(circle_at_35%_25%,#c7aee0_0%,#9a76bd_55%,#7a589e_100%)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_8px_18px_-8px_rgba(110,80,150,0.7)] [text-shadow:0_1px_2px_rgba(80,50,110,0.45)] transition hover:-translate-y-0.5 hover:brightness-105 disabled:opacity-60"
      >
        {status === "sending" ? "Joining…" : "Join the waitlist"}
      </button>
      {status === "error" && <p className="text-sm text-mocha sm:basis-full">Something went wrong. Please try again.</p>}
    </form>
  );
}
