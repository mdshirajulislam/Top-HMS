import React from "react";
import { Zap, Cloud, ShieldCheck, BarChart3, Globe, Headphones } from "lucide-react";
import { FEATURES, FeatureItem } from "@/data/siteData";

const ICON_MAP: Record<FeatureItem["icon"], React.ReactNode> = {
  zap: <Zap className="h-5 w-5" />,
  cloud: <Cloud className="h-5 w-5" />,
  shield: <ShieldCheck className="h-5 w-5" />,
  chart: <BarChart3 className="h-5 w-5" />,
  globe: <Globe className="h-5 w-5" />,
  headset: <Headphones className="h-5 w-5" />,
};

const CARD_META: Record<
  FeatureItem["id"],
  { tag: string; iconBg: string; iconHover: string; tagStyle: string }
> = {
  "offline-fast": {
    tag: "Offline-First",
    iconBg: "bg-teal-50 text-[#0f5156] ring-1 ring-teal-300/70",
    iconHover: "group-hover:bg-[#0d9488] group-hover:text-white group-hover:ring-[#0d9488]",
    tagStyle: "bg-teal-50 text-[#0f5156] border-teal-300/80",
  },
  "cloud-multi": {
    tag: "Multi-Branch",
    iconBg: "bg-blue-50 text-[#1546a0] ring-1 ring-blue-200/80",
    iconHover: "group-hover:bg-[#1546a0] group-hover:text-white group-hover:ring-[#1546a0]",
    tagStyle: "bg-blue-50 text-[#0f347a] border-blue-200",
  },
  "zero-leakage": {
    tag: "256-Bit SSL",
    iconBg: "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/80",
    iconHover: "group-hover:bg-emerald-600 group-hover:text-white group-hover:ring-emerald-600",
    tagStyle: "bg-emerald-50 text-emerald-900 border-emerald-200",
  },
  "realtime-reports": {
    tag: "Live KPIs",
    iconBg: "bg-indigo-50 text-indigo-800 ring-1 ring-indigo-200/80",
    iconHover: "group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-600",
    tagStyle: "bg-indigo-50 text-indigo-900 border-indigo-200",
  },
  "bangla-voip": {
    tag: "Bangla & VoIP",
    iconBg: "bg-orange-50 text-[#b83714] ring-1 ring-orange-200/80",
    iconHover: "group-hover:bg-[#e85227] group-hover:text-white group-hover:ring-[#e85227]",
    tagStyle: "bg-orange-50 text-[#b83714] border-orange-300/80",
  },
  "support-247": {
    tag: "24/7 SLA",
    iconBg: "bg-sky-50 text-sky-800 ring-1 ring-sky-200/80",
    iconHover: "group-hover:bg-sky-600 group-hover:text-white group-hover:ring-sky-600",
    tagStyle: "bg-sky-50 text-sky-900 border-sky-200",
  },
};

export function Features() {
  return (
    <section id="features" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0f347a]">
            Core Capabilities
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Built for <span className="text-brand-gradient">Clinical Excellence</span>
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Engineered for high-volume clinics, diagnostic networks, and multi-specialty hospitals
            that demand speed and accuracy.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const meta = CARD_META[feature.id];
            return (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/85 bg-gradient-to-b from-white to-slate-50/50 p-7 shadow-sm shadow-slate-900/4 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1546a0]/30 hover:shadow-xl hover:shadow-[#1546a0]/8"
              >
                {/* Top gradient accent reveal on hover */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1546a0] via-[#0d9488] to-[#14b8a6] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Top row: Icon + Subtle Capability Pill */}
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${meta.iconBg} ${meta.iconHover}`}
                  >
                    {ICON_MAP[feature.icon]}
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-tight ${meta.tagStyle}`}
                  >
                    {meta.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-lg font-bold text-slate-900 transition-colors group-hover:text-[#1546a0]">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
