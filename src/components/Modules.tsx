"use client";

import React, { useState } from "react";
import {
  Check,
  Stethoscope,
  BedDouble,
  Pill,
  FlaskConical,
  Receipt,
  Users,
  Sparkles,
} from "lucide-react";
import { MODULES } from "@/data/siteData";

const TAB_ICONS: Record<string, React.ReactNode> = {
  opd: <Stethoscope className="h-4 w-4" />,
  ipd: <BedDouble className="h-4 w-4" />,
  pharmacy: <Pill className="h-4 w-4" />,
  lab: <FlaskConical className="h-4 w-4" />,
  billing: <Receipt className="h-4 w-4" />,
  staff: <Users className="h-4 w-4" />,
};

const TONE_BADGE = {
  emerald: "bg-emerald-50 text-emerald-800 border-emerald-200",
  blue: "bg-blue-50 text-[#1546a0] border-blue-200",
  amber: "bg-amber-50 text-amber-800 border-amber-200",
};

export function Modules() {
  const [activeId, setActiveId] = useState(MODULES[0].id);
  const activeModule = MODULES.find((m) => m.id === activeId) ?? MODULES[0];

  return (
    <section id="modules" className="bg-[#f8fbff] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            Every Department,
            <span className="text-brand-gradient block">Connected in Real Time</span>
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Eliminate paper handoffs and disconnected spreadsheets with six tightly integrated
            hospital modules.
          </p>
        </div>

        {/* Pill Tab Bar with Icons: clean 2-col grid on mobile, centered pills on desktop */}
        <div
          className="mt-8 sm:mt-10 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3"
          role="tablist"
        >
          {MODULES.map((mod) => {
            const isActive = mod.id === activeModule.id;
            return (
              <button
                key={mod.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(mod.id)}
                className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full px-3 py-2.5 sm:px-5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#1a56db] text-white shadow-lg shadow-[#1a56db]/30"
                    : "border border-slate-200/90 bg-white text-slate-700 shadow-2xs hover:border-[#1a56db]/40 hover:text-[#1a56db]"
                }`}
              >
                {TAB_ICONS[mod.id]}
                <span className="truncate">{mod.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Elevated White Showcase Card */}
        <div className="mt-8 sm:mt-10 rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xl shadow-slate-900/5 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12">
            {/* Left High-Contrast Light Workspace Preview */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-[#f4f8fd] shadow-lg shadow-[#1546a0]/8">
                {/* Brand Gradient Window Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 bg-gradient-to-r from-[#1546a0] to-[#0d9488] px-3.5 py-2.5 sm:px-4 sm:py-3 text-white">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="hidden sm:inline-block h-2.5 w-2.5 rounded-full bg-white/50" />
                    <span className="hidden sm:inline-block h-2.5 w-2.5 rounded-full bg-white/50" />
                    <span className="hidden sm:inline-block h-2.5 w-2.5 rounded-full bg-white/50" />
                    <span className="sm:ml-2 truncate text-xs font-bold tracking-tight text-white">
                      Top HMS · {activeModule.tabLabel}
                    </span>
                  </div>
                  <span className="inline-flex shrink-0 whitespace-nowrap items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-[#1546a0] shadow-xs">
                    <Sparkles className="h-3 w-3 text-[#e85227]" />
                    {activeModule.badge}
                  </span>
                </div>

                {/* High-Contrast White Metrics + Activity Feed */}
                <div className="p-3.5 sm:p-5 space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="rounded-xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-2xs">
                      <p className="text-[11px] sm:text-xs font-semibold text-slate-500">
                        {activeModule.metricLabel}
                      </p>
                      <p className="mt-1 whitespace-nowrap font-display text-xl sm:text-2xl font-extrabold text-[#1546a0]">
                        {activeModule.metricValue}
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-2xs">
                      <p className="text-[11px] sm:text-xs font-semibold text-slate-500">
                        {activeModule.secondaryMetricLabel}
                      </p>
                      <p className="mt-1 whitespace-nowrap font-display text-xl sm:text-2xl font-extrabold text-[#0d9488]">
                        {activeModule.secondaryMetricValue}
                      </p>
                    </div>
                  </div>

                  {/* Live Clinical Feed Rows */}
                  <div className="space-y-2.5">
                    {activeModule.previewRows.map((row) => (
                      <div
                        key={row.label}
                        className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 rounded-xl border border-slate-200/90 bg-white px-3.5 py-3 sm:px-4 shadow-2xs"
                      >
                        <div className="min-w-0 w-full sm:w-auto">
                          <p className="text-sm font-bold text-slate-900 sm:truncate">{row.label}</p>
                          <p className="text-xs font-medium text-slate-500 sm:truncate">{row.meta}</p>
                        </div>
                        <span
                          className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-0.5 sm:py-1 text-[11px] font-bold ${TONE_BADGE[row.tone]}`}
                        >
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Module Copy & Mint-Teal Checklist */}
            <div className="lg:col-span-6">
              <h3 className="font-display text-2xl font-extrabold text-slate-950 sm:text-[1.75rem]">
                {activeModule.title}
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-slate-600">
                {activeModule.description}
              </p>

              <ul className="mt-6 space-y-3.5">
                {activeModule.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-slate-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e6f7f4] text-[#0d9488]">
                      <Check className="h-3.5 w-3.5 stroke-[2.75]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
