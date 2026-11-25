"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="bg-slate-50/80 py-20 lg:py-24 border-y border-slate-200/70"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full border border-teal-300/70 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0f5156] shadow-2xs">
            Designed for Care Teams
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trusted Across <span className="text-brand-gradient">Every Department</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Empowering physicians, finance directors, and nursing teams with role-focused workflows
            that save hours every shift.
          </p>
        </div>

        <div className="relative mt-12 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-lg shadow-slate-900/5 sm:p-12">
          <div className="flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f3b7c]/8 text-[#0f3b7c]">
              <Quote className="h-6 w-6" />
            </span>
          </div>

          <blockquote className="mt-6 text-center font-display text-lg font-medium leading-relaxed text-slate-800 sm:text-xl">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <div className="mt-7 flex flex-col items-center text-center">
            <span className="rounded-full border border-[#0d9488]/30 bg-teal-50 px-4 py-1 text-xs font-bold text-[#0f5156]">
              {current.impact}
            </span>
            <p className="mt-3 font-display text-base font-bold text-[#0f3b7c]">{current.role}</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              {current.departments}
            </p>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous role"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-[#0f3b7c] hover:text-[#0f3b7c] cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.role}
                  type="button"
                  onClick={() => setIndex(idx)}
                  aria-label={`View slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === index ? "w-8 bg-[#0f3b7c]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next role"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-[#0f3b7c] hover:text-[#0f3b7c] cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
