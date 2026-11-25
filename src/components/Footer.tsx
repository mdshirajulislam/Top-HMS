"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { SITE_INFO, NAV_LINKS, MODULES } from "@/data/siteData";

type PolicyKey = "privacy" | "terms" | "refund";

const POLICIES: Record<PolicyKey, { title: string; points: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    points: [
      "All hospital operational and clinical records remain 100% owned by your healthcare institution.",
      "Data is encrypted in transit (TLS/SSL) and at rest, with automated daily backups and role-based access control.",
      "We never sell, rent, or share hospital or patient contact information with third-party advertisers.",
    ],
  },
  terms: {
    title: "Terms of Service",
    points: [
      "Subscriptions include cloud hosting, regular security patches, and 24/7 technical support according to your selected plan.",
      "Hospitals may upgrade, downgrade, or export their complete clinical and billing data at any time with zero lock-in.",
      "Authorized administrators manage staff roles, billing permissions, and branch access inside their Top HMS workspace.",
    ],
  },
  refund: {
    title: "Refund Policy",
    points: [
      "Every new hospital starts with a 14-day full-access free trial with no credit card required.",
      "Monthly plans can be canceled anytime before the next billing cycle with no cancellation penalties.",
      "Annual plans are eligible for a prorated refund within the first 30 days if the platform does not meet your operational needs.",
    ],
  },
};

export function Footer() {
  const [activePolicy, setActivePolicy] = useState<PolicyKey | null>(null);

  return (
    <>
      <footer className="bg-[#071a38] text-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* Col 1: Brand */}
            <div className="lg:col-span-4">
              <a href="#hero" aria-label="Top HMS Home">
                <BrandLogo variant="dark" />
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-200">
                Modern, offline-resilient Hospital Management System built for clinics, diagnostic
                centers, and multi-specialty hospitals.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-200 transition-colors hover:text-teal-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Modules */}
            <div className="lg:col-span-3">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Modules
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {MODULES.map((mod) => (
                  <li key={mod.id}>
                    <a
                      href="#modules"
                      className="text-slate-200 transition-colors hover:text-teal-300"
                    >
                      {mod.tabLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div className="lg:col-span-3">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Contact Us
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                  <span className="leading-relaxed">{SITE_INFO.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-teal-300" />
                  <a href={SITE_INFO.phoneHref} className="hover:text-teal-300 transition-colors">
                    {SITE_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-teal-300" />
                  <a href={SITE_INFO.emailHref} className="hover:text-teal-300 transition-colors">
                    {SITE_INFO.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 pb-6 text-xs text-slate-200 sm:flex-row sm:pr-44">
            <p>{SITE_INFO.copyright}</p>
            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => setActivePolicy("privacy")}
                className="hover:text-teal-300 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActivePolicy("terms")}
                className="hover:text-teal-300 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                type="button"
                onClick={() => setActivePolicy("refund")}
                className="hover:text-teal-300 transition-colors cursor-pointer"
              >
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {activePolicy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-modal-title"
          onClick={() => setActivePolicy(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePolicy(null)}
              aria-label="Close policy dialog"
              className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 id="policy-modal-title" className="font-display text-xl font-bold text-slate-900">
              Top HMS — {POLICIES[activePolicy].title}
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              {POLICIES[activePolicy].points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActivePolicy(null)}
                className="rounded-xl bg-[#1a56db] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1546a0] cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
