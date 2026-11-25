"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, X } from "lucide-react";
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
      <footer className="border-t border-slate-200 bg-white text-slate-600">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-12 lg:gap-10">
            {/* Col 1: Brand + Social Icons */}
            <div className="col-span-2 lg:col-span-4">
              <a href="#hero" aria-label="Top HMS Home">
                <BrandLogo variant="light" />
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
                Modern, offline-resilient Hospital Management System built for clinics, diagnostic
                centers, and multi-specialty hospitals.
              </p>

              {/* Social Circle Links matching reference */}
              <div className="mt-5 flex items-center gap-2.5">
                <a
                  href="#contact"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50/70 text-slate-600 transition-colors hover:border-[#1a56db] hover:bg-blue-50 hover:text-[#1a56db]"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.5l.5-3H13v-1.5c0-.28.22-.5.5-.5Z" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50/70 text-slate-600 transition-colors hover:border-[#1a56db] hover:bg-blue-50 hover:text-[#1a56db]"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.94 8.5H4.25V18h2.69V8.5ZM5.6 4.25a1.56 1.56 0 1 0 0 3.12 1.56 1.56 0 0 0 0-3.12ZM19.75 18h-2.68v-4.95c0-1.18-.42-1.98-1.48-1.98-.81 0-1.29.54-1.5 1.07-.08.19-.1.45-.1.72V18H11.3s.04-8.04 0-9.5h2.69v1.35c.36-.55 1-1.34 2.43-1.34 1.77 0 3.33 1.16 3.33 3.65V18Z" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  aria-label="X"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50/70 text-slate-600 transition-colors hover:border-[#1a56db] hover:bg-blue-50 hover:text-[#1a56db]"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50/70 text-slate-600 transition-colors hover:border-[#1a56db] hover:bg-blue-50 hover:text-[#1a56db]"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77c.28-1.58.42-3.2.42-4.81s-.14-3.23-.42-4.81ZM10 15V9l5.2 3L10 15Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-600 transition-colors hover:text-[#1a56db]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Modules */}
            <div className="col-span-1 lg:col-span-3">
              <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                Modules
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {MODULES.map((mod) => (
                  <li key={mod.id}>
                    <a
                      href="#modules"
                      className="text-slate-600 transition-colors hover:text-[#1a56db]"
                    >
                      {mod.tabLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact & Support */}
            <div className="col-span-2 border-t border-slate-200 pt-7 pr-14 lg:col-span-3 lg:border-t-0 lg:pt-0 lg:pr-0">
              <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                Contact &amp; Support
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1a56db]" />
                  <span className="leading-relaxed">{SITE_INFO.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#1a56db]" />
                  <a href={SITE_INFO.emailHref} className="hover:text-[#1a56db] transition-colors">
                    {SITE_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#1a56db]" />
                  <a href={SITE_INFO.phoneHref} className="hover:text-[#1a56db] transition-colors">
                    {SITE_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#0d9488]" />
                  <a
                    href={SITE_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#0d9488] hover:text-[#0f5156] transition-colors"
                  >
                    {SITE_INFO.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 pb-24 sm:pb-6 text-xs text-slate-600 sm:flex-row sm:pr-44">
            <p>{SITE_INFO.copyright}</p>
            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => setActivePolicy("privacy")}
                className="font-medium hover:text-[#1a56db] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActivePolicy("terms")}
                className="font-medium hover:text-[#1a56db] transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                type="button"
                onClick={() => setActivePolicy("refund")}
                className="font-medium hover:text-[#1a56db] transition-colors cursor-pointer"
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
