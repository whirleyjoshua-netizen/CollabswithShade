"use client";

import { useState } from "react";

// Sends messages straight to Shade's inbox through Web3Forms (free).
// Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local to turn it on; until then,
// the form opens the visitor's email app with the message pre-filled.
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [brand, setBrand] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = brand ? `Collab idea from ${name} (${brand})` : `Collab idea from ${name}`;

    if (!accessKey) {
      const body = `${message}\n\n${name}${brand ? `, ${brand}` : ""}\nReply to: ${from}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          name,
          email: from,
          brand,
          replyto: from,
          message,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl bg-lavender-light p-8 text-center">
        <p className="font-serif text-2xl">Thank you!</p>
        <p className="mt-2 text-muted">Your message is on its way. I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  const label = "grid gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mocha";
  const field =
    "w-full rounded-xl border border-taupe bg-white/70 px-4 py-3 text-base font-normal normal-case tracking-normal text-ink placeholder:text-muted/60 focus:border-lavender focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <label className={label}>
        Your Name
        <input className={field} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label className={label}>
        Email Address
        <input className={field} type="email" autoComplete="email" value={from} onChange={(e) => setFrom(e.target.value)} required />
      </label>
      <label className={label}>
        Brand / Company
        <input className={field} autoComplete="organization" value={brand} onChange={(e) => setBrand(e.target.value)} />
      </label>
      <label className={label}>
        Tell Me About Your Idea
        <textarea className={`${field} min-h-40`} value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full border-2 border-gold bg-[radial-gradient(circle_at_35%_25%,#c7aee0_0%,#9a76bd_55%,#7a589e_100%)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_8px_18px_-8px_rgba(110,80,150,0.7)] [text-shadow:0_1px_2px_rgba(80,50,110,0.45)] transition hover:-translate-y-0.5 hover:brightness-105 disabled:opacity-60 sm:justify-self-start"
      >
        {status === "sending" ? "Sending…" : "Let’s Collaborate"}
      </button>
      {status === "error" && (
        <p className="text-sm text-mocha">
          Something went wrong. Please try again, or email me at{" "}
          <a href={`mailto:${email}`} className="underline">{email}</a>.
        </p>
      )}
    </form>
  );
}
