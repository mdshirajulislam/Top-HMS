"use client";

import React, { useState } from "react";
import { CheckCircle2, Lock, PhoneCall, Send, ShieldCheck, MessageCircle } from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export function ContactSection() {
  const [name, setName] = useState("");
  const [hospital, setHospital] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !hospital.trim() || !phone.trim()) {
      setError("Please fill in your name, hospital name, and mobile number.");
      return;
    }
    setSubmitting(true);
    setError("");
    const ref = `THMS-${Date.now().toString().slice(-6)}`;
    setReferenceId(ref);
    setSubmitted(true);
    setSubmitting(false);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Top HMS Team, I requested a 14-day free trial (${referenceId || "New Inquiry"}).\nName: ${name}\nHospital: ${hospital}\nPhone: ${phone}${email ? `\nEmail: ${email}` : ""}`
  );
  const whatsappLink = `${SITE_INFO.whatsappHref}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="bg-[#f8fbff] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-gradient overflow-hidden rounded-3xl px-6 py-12 text-white shadow-2xl shadow-[#0f347a]/20 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left CTA Copy */}
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full border border-white/30 bg-white/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Launch in Days
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to Upgrade Your Hospital Operations?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-blue-100/95">
                Experience Top HMS with a 14-day full-feature trial. No credit card required, and
                our onboarding engineers handle your complete setup.
              </p>

              <ul className="mt-7 space-y-3 text-sm font-medium text-white/95">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-teal-300 shrink-0" />
                  Dedicated onboarding &amp; hands-on staff training
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-teal-300 shrink-0" />
                  Zero-downtime legacy data migration
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-teal-300 shrink-0" />
                  Flexible monthly billing with no lock-in
                </li>
              </ul>

              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xs">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-teal-200">
                  <PhoneCall className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-slate-100">Prefer to talk directly?</p>
                  <a
                    href={SITE_INFO.phoneHref}
                    className="font-display text-base font-bold text-white hover:text-teal-200"
                  >
                    {SITE_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white p-7 text-slate-900 shadow-2xl sm:p-9">
                {submitted ? (
                  <div className="py-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">
                      Trial Request Received!
                    </h3>
                    {referenceId && (
                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#1546a0]">
                        Reference ID: {referenceId}
                      </p>
                    )}
                    <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
                      Thank you, <span className="font-semibold text-slate-900">{name}</span>. Our
                      Top HMS onboarding specialist will call{" "}
                      <span className="font-semibold text-slate-900">{phone}</span> shortly to
                      activate your 14-day workspace for{" "}
                      <span className="font-semibold text-slate-900">{hospital}</span>.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#0d9488] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0f766e]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Fast-Track on WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setName("");
                          setHospital("");
                          setPhone("");
                          setEmail("");
                          setReferenceId("");
                        }}
                        className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-[#1546a0] hover:bg-slate-50 cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      Schedule Your Free Trial
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Share your hospital details and our specialists will activate your workspace
                      the same day.
                    </p>

                    {error && (
                      <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-semibold text-rose-700">
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="trial-name"
                            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                          >
                            Your Name *
                          </label>
                          <input
                            id="trial-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Dr. Mahmudul Hasan"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#1a56db] focus:ring-2 focus:ring-[#1a56db]/15"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="trial-hospital"
                            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                          >
                            Hospital / Clinic Name *
                          </label>
                          <input
                            id="trial-hospital"
                            type="text"
                            required
                            value={hospital}
                            onChange={(e) => setHospital(e.target.value)}
                            placeholder="City General Hospital"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#1a56db] focus:ring-2 focus:ring-[#1a56db]/15"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="trial-phone"
                            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                          >
                            Mobile Number *
                          </label>
                          <input
                            id="trial-phone"
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="01XXXXXXXXX"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#1a56db] focus:ring-2 focus:ring-[#1a56db]/15"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="trial-email"
                            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                          >
                            Email Address (Optional)
                          </label>
                          <input
                            id="trial-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@hospital.com"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#1a56db] focus:ring-2 focus:ring-[#1a56db]/15"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1a56db] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1a56db]/25 transition-all hover:bg-[#1546a0] disabled:opacity-60 cursor-pointer"
                      >
                        <Send className="h-4 w-4" />
                        {submitting ? "Activating Request..." : "Activate 14-Day Trial"}
                      </button>

                      <p className="flex items-center justify-center gap-1.5 text-xs text-slate-600">
                        <Lock className="h-3.5 w-3.5 text-[#0d9488]" />
                        Your information is safe. We never share your data.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
