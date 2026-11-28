"use client";

import React, { useState } from "react";
import { ArrowUpRight, Clock, Calendar, X, CheckCircle2 } from "lucide-react";
import { INSIGHTS, InsightItem } from "@/data/siteData";

const PLAYBOOK_DETAILS: Record<string, { summary: string; takeaways: string[] }> = {
  "হসপিটাল অপারেশন": {
    summary:
      "ব্যস্ত আউটডোর ক্লিনিকগুলোতে হাতে লেখা টোকেন, অতিরিক্ত ভিড় এবং অগোছালো সিরিয়ালের কারণে প্রতিদিন বহু কর্মঘণ্টা নষ্ট হয়। সমন্বিত ডিজিটাল কিউ চালু করলে প্রথম সপ্তাহ থেকেই রোগী সেবা অনেক দ্রুত হয়।",
    takeaways: [
      "মোবাইল নম্বর বা QR স্ক্যানের মাধ্যমে ৪৫ সেকেন্ডের কম সময়ে রোগী রেজিস্ট্রেশন।",
      "ওয়েটিং এরিয়ার টিভিতে লাইভ চেম্বার টোকেন প্রদর্শন, যাতে রোগীরা সঠিক সময় জানতে পারেন।",
      "অ্যাপয়েন্টমেন্টের ২ ঘণ্টা আগে স্বয়ংক্রিয় VoIP ও SMS রিমাইন্ডার, যা অনুপস্থিতি ৩৫% পর্যন্ত কমায়।",
      "ডিজিটাল প্রেসক্রিপশন সরাসরি ফার্মেসি POS ও ডায়াগনস্টিক ল্যাবে সিঙ্ক হওয়ার সুবিধা।",
    ],
  },
  "আয় সুরক্ষা": {
    summary:
      "OPD, IPD নার্সিং স্টেশন, ল্যাব অ্যানালাইজার এবং ফার্মেসি কাউন্টার আলাদা আলাদা স্প্রেডশিটে চললে বিল না হওয়া সামগ্রী ও ডিসচার্জের ভুলের কারণে হসপিটালের ১০-১২% রাজস্ব নীরবে হারিয়ে যায়।",
    takeaways: [
      "প্রতিটি ল্যাব টেস্ট, ওয়ার্ড বেড চার্জ ও ফার্মেসি বিল স্বয়ংক্রিয়ভাবে রোগীর ফোলিওতে যুক্ত হয়।",
      "ক্যাশ, কার্ড এবং bKash/Nagad কালেকশনে ডাবল-এন্ট্রি লেজার মিলিয়ে নেওয়া।",
      "রোল-ভিত্তিক অনুমোদন ও অডিট ট্রেইল দিয়ে ডিসকাউন্ট ও রিফান্ড নিয়ন্ত্রণ।",
      "রিয়েল-টাইম ডিপার্টমেন্ট রিপোর্টের মাধ্যমে কয়েক মিনিটেই দৈনিক ক্যাশ ক্লোজিং।",
    ],
  },
};

export function Insights() {
  const [selectedPost, setSelectedPost] = useState<InsightItem | null>(null);

  return (
    <>
      <section id="insights" className="bg-slate-50/80 py-20 border-t border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-teal-300/70 bg-white px-4 py-1 text-xs font-bold tracking-wider text-[#0f5156] shadow-2xs">
              ক্লিনিক্যাল গাইড
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              হসপিটাল পরিচালনার <span className="text-brand-gradient">কার্যকর পরামর্শ</span>
            </h2>
            <p className="mt-3 text-base text-slate-600">
              রোগীর অপেক্ষার সময় কমানো, ডায়াগনস্টিক অটোমেশন এবং হসপিটালের আয় সুরক্ষার বাস্তবমুখী
              কৌশল।
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {INSIGHTS.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-2xs transition-all hover:-translate-y-1 hover:border-[#192150]/30 hover:shadow-lg"
              >
                <div>
                  <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-[#192150]">
                    {post.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900 transition-colors group-hover:text-[#192150]">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                </div>

                <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-600">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="inline-flex whitespace-nowrap items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-[#0d9488]" />
                      {post.date}
                    </span>
                    <span className="inline-flex whitespace-nowrap items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#0d9488]" />
                      {post.readTime}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex whitespace-nowrap items-center gap-1 font-bold text-[#203272] hover:text-[#192150] cursor-pointer"
                  >
                    বিস্তারিত পড়ুন
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="playbook-modal-title"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              aria-label="বন্ধ করুন"
              className="absolute right-5 top-5 rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-[#192150]">
              {selectedPost.category}
            </span>
            <h3
              id="playbook-modal-title"
              className="mt-3 pr-8 font-display text-xl font-bold text-slate-900 sm:text-2xl"
            >
              {selectedPost.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {PLAYBOOK_DETAILS[selectedPost.category]?.summary ?? selectedPost.excerpt}
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-slate-50 p-5">
              <p className="text-xs font-bold tracking-wider text-[#192150]">
                বাস্তবায়নের মূল ধাপসমূহ
              </p>
              <ul className="mt-3 space-y-2.5">
                {(PLAYBOOK_DETAILS[selectedPost.category]?.takeaways ?? []).map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0d9488]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                বন্ধ করুন
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedPost(null)}
                className="rounded-xl bg-[#203272] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#192150]"
              >
                লাইভ ডেমো বুক করুন
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
