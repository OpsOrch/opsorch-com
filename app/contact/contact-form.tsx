"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mldyzgrw", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-[#2c4c52] bg-[#0d1416] px-4 py-2 text-white placeholder-slate-500 focus:border-[#55cfd0] focus:outline-none focus:ring-1 focus:ring-[#55cfd0]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full rounded-lg border border-[#2c4c52] bg-[#0d1416] px-4 py-2 text-white placeholder-slate-500 focus:border-[#55cfd0] focus:outline-none focus:ring-1 focus:ring-[#55cfd0]"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="mt-1 w-full rounded-lg border border-[#2c4c52] bg-[#0d1416] px-4 py-2 text-white placeholder-slate-500 focus:border-[#55cfd0] focus:outline-none focus:ring-1 focus:ring-[#55cfd0]"
          placeholder="How can we help?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-1 w-full rounded-lg border border-[#2c4c52] bg-[#0d1416] px-4 py-2 text-white placeholder-slate-500 focus:border-[#55cfd0] focus:outline-none focus:ring-1 focus:ring-[#55cfd0]"
          placeholder="Tell us more..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg border border-[#55cfd0] bg-[#10333a] px-6 py-3 font-semibold text-white transition hover:bg-[#14454e] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm text-[#72e0e0]">
          Thanks for your message! We&rsquo;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Oops! Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
