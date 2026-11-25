"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { NAV_LINKS } from "@/data/siteData";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const ids = ["features", "modules", "pricing", "faq", "contact"];
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-sm border-b border-slate-200/80" : "border-b border-slate-100"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" aria-label="Top HMS Home" className="focus:outline-none">
          <BrandLogo variant="light" />
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1.5 text-[15px] font-medium transition-colors ${
                  isActive ? "text-[#1546a0]" : "text-slate-700 hover:text-[#1546a0]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#1546a0] to-[#14b8a6]" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="rounded-xl bg-[#1a56db] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#1a56db]/25 transition-all hover:bg-[#1546a0]"
          >
            Start Free Trial
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden cursor-pointer"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#1546a0]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 border-t border-slate-100 pt-4">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-xl bg-[#1a56db] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1546a0]"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
