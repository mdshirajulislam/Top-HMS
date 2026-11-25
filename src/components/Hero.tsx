import React from "react";
import {
  Rocket,
  PlayCircle,
  ShieldCheck,
  CalendarCheck,
  Star,
  BedDouble,
  FlaskConical,
  Receipt,
  UserRoundCheck,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-grid-bg relative overflow-hidden pt-12 pb-16 lg:min-h-[calc(100vh-4.5rem)] lg:flex lg:items-center lg:py-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold text-[#1546a0] shadow-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 fill-emerald-500 text-emerald-500" />
              <span className="whitespace-nowrap">Next-Gen Healthcare ERP · Cloud &amp; Offline</span>
            </div>

            <h1 className="mt-6 sm:mt-7 font-display text-[2.2rem] leading-[1.15] font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
              Modern Healthcare,
              <span className="text-brand-gradient block">Effortless Control</span>
            </h1>

            <p className="mt-4 sm:mt-5 max-w-lg text-[15px] leading-relaxed text-slate-600 sm:text-lg">
              Run every clinical and financial workflow — from OPD queues and ICU beds to
              diagnostics, pharmacy POS, and audit-proof billing — in one unified platform.
            </p>

            <div className="mt-7 sm:mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a56db] px-4 py-3 sm:px-7 sm:py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1a56db]/25 transition-all hover:-translate-y-0.5 hover:bg-[#1546a0]"
              >
                <Rocket className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">Book Free Trial</span>
              </a>
              <a
                href="#modules"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 sm:px-7 sm:py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                <PlayCircle className="h-4 w-4 shrink-0 text-slate-900" />
                <span className="whitespace-nowrap">Explore Platform</span>
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#0d9488]" />
                Zero Setup Fees
              </span>
              <span className="text-slate-300">|</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarCheck className="h-4 w-4 text-[#0d9488]" />
                14-Day Full Access
              </span>
            </div>
          </div>

          {/* Right Column: Light-Mode Teal-Bordered Dashboard + 4 Floating Cards */}
          <div className="relative lg:col-span-6 py-6">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Teal-Bordered Browser Frame matching reference */}
              <div className="overflow-hidden rounded-3xl border-2 border-[#0d9488]/65 bg-white shadow-2xl shadow-[#1546a0]/12">
                {/* Browser Header */}
                <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-semibold text-slate-500">
                      Top HMS Dashboard
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-600">
                    app.tophms.com
                  </span>
                </div>

                {/* Light-Mode Dashboard Inner Body */}
                <div className="grid grid-cols-12 bg-[#f8fafc]">
                  {/* Clean White Mini Sidebar */}
                  <div className="hidden sm:flex sm:col-span-3 flex-col gap-1 border-r border-slate-200/80 bg-white p-3 text-[11px]">
                    {[
                      { label: "Dashboard", active: true },
                      { label: "Doctors & Staff", active: false },
                      { label: "OPD & Tokens", active: false },
                      { label: "IPD Bed Grid", active: false },
                      { label: "Appointments", active: false },
                      { label: "Pharmacy POS", active: false },
                      { label: "Diagnostic Lab", active: false },
                      { label: "Billing Ledger", active: false },
                      { label: "VoIP & SMS", active: false },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-lg px-2.5 py-1.5 font-medium ${
                          item.active
                            ? "bg-blue-50 text-[#1546a0] font-semibold"
                            : "text-slate-500"
                        }`}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>

                  {/* Main Light Workspace */}
                  <div className="col-span-12 sm:col-span-9 p-4 space-y-3">
                    {/* Blue Welcome Banner */}
                    <div className="flex items-center justify-between gap-2 rounded-xl bg-gradient-to-r from-[#1a6fd4] to-[#2884e8] px-3.5 py-2.5 sm:px-4 sm:py-3 text-white shadow-xs">
                      <div className="min-w-0">
                        <p className="font-display text-xs font-bold">Good morning, Medical Director</p>
                        <p className="text-[10px] text-blue-100">
                          Top HMS Command Center · 6 Units Live
                        </p>
                      </div>
                      <span className="shrink-0 whitespace-nowrap rounded-lg bg-white/20 px-2.5 py-1 text-[10px] font-semibold">
                        Offline Ready
                      </span>
                    </div>

                    {/* 3 White KPI Cards */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                      <div className="rounded-xl border border-slate-200/80 bg-white p-2 sm:p-2.5">
                        <p className="text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wide text-slate-600">
                          Active Beds
                        </p>
                        <p className="mt-1 font-display text-base sm:text-lg font-bold text-slate-900">342</p>
                        <p className="text-[9px] sm:text-[10px] font-semibold text-emerald-700 whitespace-nowrap">88% Full</p>
                      </div>
                      <div className="rounded-xl border border-slate-200/80 bg-white p-2 sm:p-2.5">
                        <p className="text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wide text-slate-600">
                          OPD Today
                        </p>
                        <p className="mt-1 font-display text-base sm:text-lg font-bold text-slate-900">148</p>
                        <p className="text-[9px] sm:text-[10px] font-semibold text-[#1546a0] whitespace-nowrap">Wait 6.4m</p>
                      </div>
                      <div className="rounded-xl border border-slate-200/80 bg-white p-2 sm:p-2.5">
                        <p className="text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wide text-slate-600">
                          Daily Billing
                        </p>
                        <p className="mt-1 font-display text-base sm:text-lg font-bold text-slate-900">৳ 4.8L</p>
                        <p className="text-[9px] sm:text-[10px] font-semibold text-emerald-700 whitespace-nowrap">Zero Leak</p>
                      </div>
                    </div>

                    {/* Smooth Teal Line Chart matching screenshot */}
                    <div className="rounded-xl border border-slate-200/80 bg-white p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-bold text-slate-900">Monthly Revenue</p>
                          <p className="text-[9px] font-medium text-slate-600">Last 12 months · Auto-synced</p>
                        </div>
                        <span className="rounded-full border border-teal-300/80 bg-teal-50 px-2.5 py-0.5 text-[10px] font-bold text-[#0f5156]">
                          +18.4%
                        </span>
                      </div>

                      <div className="mt-2.5 h-28 w-full">
                        <svg
                          viewBox="0 0 360 100"
                          className="h-full w-full overflow-visible"
                          preserveAspectRatio="none"
                          aria-label="Monthly revenue trend chart"
                        >
                          <defs>
                            <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.22" />
                              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {/* Subtle horizontal grid lines */}
                          <line x1="0" y1="20" x2="360" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                          <line x1="0" y1="50" x2="360" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                          <line x1="0" y1="80" x2="360" y2="80" stroke="#f1f5f9" strokeWidth="1" />
                          {/* Area Fill */}
                          <path
                            d="M 0 85 C 40 85, 60 85, 95 82 C 130 79, 150 45, 180 48 C 210 51, 225 82, 255 62 C 285 42, 315 58, 360 16 L 360 95 L 0 95 Z"
                            fill="url(#revFill)"
                          />
                          {/* Smooth Teal Line */}
                          <path
                            d="M 0 85 C 40 85, 60 85, 95 82 C 130 79, 150 45, 180 48 C 210 51, 225 82, 255 62 C 285 42, 315 58, 360 16"
                            fill="none"
                            stroke="#0d9488"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                          <circle cx="360" cy="16" r="4" fill="#0d9488" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1: Top-Left (Teal badge) */}
              <div className="animate-float-slow hidden sm:flex absolute -left-4 -top-12 items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-xl shadow-slate-900/8">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0d9488] text-white">
                  <BedDouble className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Ward Assigned</p>
                  <p className="text-[11px] text-slate-500">ICU Suite 04 · Floor 2</p>
                </div>
              </div>

              {/* Floating Card 2: Top-Right (Royal Blue badge) */}
              <div className="animate-float-delayed hidden sm:flex absolute -right-4 -top-12 items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-xl shadow-slate-900/8">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1a56db] text-white">
                  <FlaskConical className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Pathology Verified</p>
                  <p className="text-[11px] text-slate-500">Lipid Panel · ID #4812</p>
                </div>
              </div>

              {/* Floating Card 3: Bottom-Right (Emerald badge) */}
              <div className="animate-float-slow hidden sm:flex absolute -right-5 -bottom-7 items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-xl shadow-slate-900/8">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <Receipt className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Settlement Cleared</p>
                  <p className="text-[11px] text-slate-500">৳3,850 · IPD Desk</p>
                </div>
              </div>

              {/* Floating Card 4: Bottom-Left (Indigo badge) */}
              <div className="animate-float-delayed hidden sm:flex absolute left-4 -bottom-7 items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-xl shadow-slate-900/8">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                  <UserRoundCheck className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Consultant Active</p>
                  <p className="text-[11px] text-slate-500">Dr. Tasnim · Chamber 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
