import React from "react";
import { Building2, Activity, Zap, Headphones } from "lucide-react";
import { STATS } from "@/data/siteData";

const STAT_STYLES = {
  building: {
    icon: <Building2 className="h-5 w-5" />,
    badge: "bg-teal-50 text-[#0d9488] ring-1 ring-teal-200/70",
  },
  activity: {
    icon: <Activity className="h-5 w-5" />,
    badge: "bg-blue-50 text-[#1546a0] ring-1 ring-blue-200/70",
  },
  zap: {
    icon: <Zap className="h-5 w-5" />,
    badge: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/70",
  },
  headset: {
    icon: <Headphones className="h-5 w-5" />,
    badge: "bg-sky-50 text-sky-700 ring-1 ring-sky-200/70",
  },
};

export function StatsBar() {
  return (
    <section id="stats" className="bg-[#f8fbff] py-6 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/85 bg-white px-6 py-10 shadow-lg shadow-[#1546a0]/6 sm:px-10 lg:py-12">
          {/* Subtle top brand accent line */}
          <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1546a0] via-[#0d9488] to-[#14b8a6]" />

          <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-slate-200/80">
            {STATS.map((stat) => {
              const style = STAT_STYLES[stat.icon];
              return (
                <div key={stat.label} className="flex flex-col items-center px-6 text-center">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${style.badge}`}
                  >
                    {style.icon}
                  </div>
                  <p className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-gradient sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-slate-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
