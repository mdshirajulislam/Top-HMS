"use client";

import React, { useState } from "react";
import { ArrowUpRight, Clock, Calendar, X, CheckCircle2 } from "lucide-react";
import { INSIGHTS, InsightItem } from "@/data/siteData";

const PLAYBOOK_DETAILS: Record<string, { summary: string; takeaways: string[] }> = {
  "Hospital Operations": {
    summary:
      "High-volume outpatient clinics lose hours every day to handwritten tokens, overcrowded waiting rooms, and missed consultant slots. Switching to a unified digital queue cuts bottlenecks within the first week.",
    takeaways: [
      "Pre-register walk-in and online patients in under 45 seconds with QR or mobile lookup.",
      "Stream live chamber tokens to waiting-area TVs so patients know exact wait times.",
      "Trigger automated VoIP and SMS reminders 2 hours prior to reduce no-shows by up to 35%.",
      "Sync digital prescriptions directly to Pharmacy POS and Diagnostic Lab without paper slips.",
    ],
  },
  "Revenue Protection": {
    summary:
      "When OPD, IPD nursing stations, lab analyzers, and pharmacy counters run on separate spreadsheets, unbilled consumables and manual discharge errors silently drain 8–12% of hospital revenue.",
    takeaways: [
      "Capture every lab test, ward bed charge, and pharmacy dispense automatically to the patient folio.",
      "Enforce double-entry ledger reconciliation on every cash, card, and bKash/Nagad collection.",
      "Lock discount and refund permissions with role-based approval trails.",
      "Close daily shift cash sheets in minutes with real-time department revenue dashboards.",
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
            <span className="inline-block rounded-full border border-teal-300/70 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0f5156] shadow-2xs">
              Clinical Playbooks
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Guides for Modern <span className="text-brand-gradient">Hospital Leaders</span>
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Actionable strategies for reducing wait times, automating diagnostics, and protecting
              hospital revenue.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {INSIGHTS.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-2xs transition-all hover:-translate-y-1 hover:border-[#1546a0]/30 hover:shadow-lg"
              >
                <div>
                  <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-[#0f347a]">
                    {post.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900 transition-colors group-hover:text-[#1546a0]">
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
                    className="inline-flex whitespace-nowrap items-center gap-1 font-bold text-[#1a56db] hover:text-[#1546a0] cursor-pointer"
                  >
                    Read Playbook
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
              aria-label="Close playbook"
              className="absolute right-5 top-5 rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-[#0f347a]">
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
              <p className="text-xs font-bold uppercase tracking-wider text-[#0f347a]">
                Key Implementation Steps
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
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedPost(null)}
                className="rounded-xl bg-[#1a56db] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1546a0]"
              >
                Book Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
