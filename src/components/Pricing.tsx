"use client";

import React, { useState } from "react";
import { Check, X, Star } from "lucide-react";
import { PRICING_TIERS } from "@/data/siteData";

const YEARLY_PRICES: Record<string, { BDT: string; USD: string }> = {
  starter: { BDT: "2,000", USD: "40" },
  professional: { BDT: "6,000", USD: "119" },
};

export function Pricing() {
  const [currency, setCurrency] = useState<"BDT" | "USD">("BDT");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="bg-[#f8fbff] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            স্বচ্ছ ও সাশ্রয়ী <span className="text-brand-gradient">প্যাকেজ</span>
            <span className="text-brand-gradient block">প্রতিটি হসপিটালের জন্য</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            কোনো গোপন চার্জ নেই। যেকোনো সময় পরিবর্তনযোগ্য। প্রতিটি প্ল্যানে বিনামূল্যে স্টাফ
            ট্রেনিং ও ডেটা মাইগ্রেশন অন্তর্ভুক্ত।
          </p>

          {/* Billing Cycle + Currency Controls */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-2xs">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  billingCycle === "monthly"
                    ? "bg-[#203272] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                মাসিক
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  billingCycle === "yearly"
                    ? "bg-[#203272] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                বার্ষিক
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    billingCycle === "yearly"
                      ? "bg-white/20 text-white"
                      : "bg-teal-50 text-[#0f5156]"
                  }`}
                >
                  ২০% সাশ্রয়
                </span>
              </button>
            </div>

            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-2xs">
              <button
                type="button"
                onClick={() => setCurrency("BDT")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  currency === "BDT"
                    ? "bg-[#203272] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                বাংলাদেশ (BDT)
              </button>
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  currency === "USD"
                    ? "bg-[#203272] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                আন্তর্জাতিক (USD)
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-3 lg:items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isCustom = tier.priceBDT === "যোগাযোগ করুন";
            const monthlyAmount =
              currency === "BDT"
                ? tier.priceBDT.replace("৳ ", "")
                : tier.priceUSD.replace("$", "");
            const numericAmount =
              !isCustom && billingCycle === "yearly" && YEARLY_PRICES[tier.id]
                ? YEARLY_PRICES[tier.id][currency]
                : monthlyAmount;
            const prefix = currency === "BDT" ? "BDT" : "USD $";

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-3xl bg-white p-8 transition-all ${
                  tier.featured
                    ? "border-2 border-[#203272] shadow-2xl shadow-[#203272]/14 lg:-translate-y-3"
                    : "border border-slate-200/85 shadow-sm hover:shadow-md"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#192150] to-[#0d9488] px-4 py-1.5 text-xs font-bold text-white shadow-md shadow-[#192150]/30">
                      <Star className="h-3.5 w-3.5 fill-white text-white" />
                      সবচেয়ে জনপ্রিয়
                    </span>
                  </div>
                )}

                <div>
                  <p
                    className={`text-xs font-bold uppercase tracking-widest ${
                      tier.featured ? "text-[#203272]" : "text-[#192150]"
                    }`}
                  >
                    {tier.name}
                  </p>

                  <div className="mt-4 flex items-baseline gap-1.5">
                    {isCustom ? (
                      <span className="font-display text-3xl font-extrabold text-[#192150]">
                        যোগাযোগ করুন
                      </span>
                    ) : (
                      <>
                        <span className="text-sm font-semibold text-slate-600">{prefix}</span>
                        <span className="font-display text-4xl font-extrabold tracking-tight text-slate-950">
                          {numericAmount}
                        </span>
                        <span className="text-xs font-medium text-slate-600">{tier.period}</span>
                      </>
                    )}
                  </div>

                  <p className="mt-2 text-xs font-medium text-slate-600">
                    {tier.tagline}
                    {!isCustom && billingCycle === "yearly" ? " · বার্ষিক বিলিং" : ""}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3.5 border-t border-slate-100 pt-6">
                  {tier.features.map((feat) => (
                    <li
                      key={feat.label}
                      className={`flex items-center gap-2.5 text-sm ${
                        feat.included ? "text-slate-800 font-medium" : "text-slate-500"
                      }`}
                    >
                      {feat.included ? (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-white">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                      ) : (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                          <X className="h-3 w-3 stroke-[2.5]" />
                        </span>
                      )}
                      <span>{feat.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`block w-full rounded-xl px-5 py-3.5 text-center text-sm font-semibold transition-all ${
                      tier.featured
                        ? "bg-[#203272] text-white shadow-md shadow-[#203272]/25 hover:bg-[#192150]"
                        : "border border-slate-300 bg-white text-[#192150] hover:border-[#192150] hover:bg-slate-50"
                    }`}
                  >
                    {tier.ctaLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
