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
      setError("অনুগ্রহ করে আপনার নাম, হসপিটালের নাম এবং মোবাইল নম্বর লিখুন।");
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
    `আসসালামু আলাইকুম Top HMS টিম, আমি ১৪ দিনের ফ্রি ট্রায়ালের জন্য আবেদন করেছি (${referenceId || "নতুন আবেদন"})।\nনাম: ${name}\nহসপিটাল: ${hospital}\nমোবাইল: ${phone}${email ? `\nইমেইল: ${email}` : ""}`
  );
  const whatsappLink = `${SITE_INFO.whatsappHref}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="bg-[#f8fbff] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-gradient overflow-hidden rounded-3xl px-6 py-12 text-white shadow-2xl shadow-[#192150]/20 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left CTA Copy */}
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full border border-white/30 bg-white/15 px-3.5 py-1 text-xs font-bold tracking-wider text-white">
                দ্রুত শুরু করুন
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                আজই আপনার হসপিটালকে ডিজিটাল করুন
              </h2>
              <p className="mt-4 text-base leading-relaxed text-blue-100/95">
                কোনো ক্রেডিট কার্ড ছাড়াই ১৪ দিনের পূর্ণাঙ্গ ফ্রি ট্রায়াল নিন। আমাদের অভিজ্ঞ
                ইঞ্জিনিয়াররাই আপনার সম্পূর্ণ সেটআপ করে দেবেন।
              </p>

              <ul className="mt-7 space-y-3 text-sm font-medium text-white/95">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-teal-300 shrink-0" />
                  বিনামূল্যে অনবোর্ডিং ও সরাসরি স্টাফ ট্রেনিং
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-teal-300 shrink-0" />
                  কোনো ডাউনটাইম ছাড়াই পুরোনো ডেটা মাইগ্রেশন
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-teal-300 shrink-0" />
                  সহজ মাসিক বিলিং — কোনো দীর্ঘমেয়াদি বাধ্যবাধকতা নেই
                </li>
              </ul>

              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xs">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-teal-200">
                  <PhoneCall className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-slate-100">সরাসরি কথা বলতে চান?</p>
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
                      আপনার আবেদন গৃহীত হয়েছে!
                    </h3>
                    {referenceId && (
                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#192150]">
                        রেফারেন্স আইডি: {referenceId}
                      </p>
                    )}
                    <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
                      ধন্যবাদ, <span className="font-semibold text-slate-900">{name}</span>। আমাদের
                      Top HMS প্রতিনিধি শীঘ্রই{" "}
                      <span className="font-semibold text-slate-900">{phone}</span> নম্বরে কল করে{" "}
                      <span className="font-semibold text-slate-900">{hospital}</span>-এর ১৪ দিনের
                      ফ্রি ট্রায়াল চালু করে দেবেন।
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#0d9488] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0f766e]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp-এ দ্রুত যোগাযোগ করুন
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
                        className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-[#192150] hover:bg-slate-50 cursor-pointer"
                      >
                        নতুন আবেদন করুন
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      ফ্রি ট্রায়ালের জন্য আবেদন করুন
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      আপনার হসপিটালের তথ্য দিন — আমাদের টিম আজই আপনার ওয়ার্কস্পেস চালু করে দেবে।
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
                            className="mb-1.5 block text-xs font-semibold text-slate-700"
                          >
                            আপনার নাম *
                          </label>
                          <input
                            id="trial-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="ডা. মাহমুদুল হাসান"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#203272] focus:ring-2 focus:ring-[#203272]/15"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="trial-hospital"
                            className="mb-1.5 block text-xs font-semibold text-slate-700"
                          >
                            হসপিটাল / ক্লিনিকের নাম *
                          </label>
                          <input
                            id="trial-hospital"
                            type="text"
                            required
                            value={hospital}
                            onChange={(e) => setHospital(e.target.value)}
                            placeholder="সিটি জেনারেল হসপিটাল"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#203272] focus:ring-2 focus:ring-[#203272]/15"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="trial-phone"
                            className="mb-1.5 block text-xs font-semibold text-slate-700"
                          >
                            মোবাইল নম্বর *
                          </label>
                          <input
                            id="trial-phone"
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="01XXXXXXXXX"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#203272] focus:ring-2 focus:ring-[#203272]/15"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="trial-email"
                            className="mb-1.5 block text-xs font-semibold text-slate-700"
                          >
                            ইমেইল ঠিকানা (ঐচ্ছিক)
                          </label>
                          <input
                            id="trial-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@hospital.com"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#203272] focus:ring-2 focus:ring-[#203272]/15"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#203272] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#203272]/25 transition-all hover:bg-[#192150] disabled:opacity-60 cursor-pointer"
                      >
                        <Send className="h-4 w-4" />
                        {submitting ? "আবেদন পাঠানো হচ্ছে..." : "১৪ দিনের ফ্রি ট্রায়াল চালু করুন"}
                      </button>

                      <p className="flex items-center justify-center gap-1.5 text-xs text-slate-600">
                        <Lock className="h-3.5 w-3.5 text-[#0d9488]" />
                        আপনার তথ্য সম্পূর্ণ নিরাপদ। আমরা কখনোই কারও সাথে ডেটা শেয়ার করি না।
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
