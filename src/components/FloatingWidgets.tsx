"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, MessageSquareText } from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 450);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col items-center gap-2.5 sm:gap-3">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1546a0] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#1546a0] hover:text-white cursor-pointer"
        >
          <ArrowUp className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
        </button>
      )}

      <a
        href={SITE_INFO.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Top HMS support"
        className="relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#1a56db] text-white shadow-xl shadow-[#1a56db]/35 transition-all hover:-translate-y-0.5 hover:bg-[#1546a0]"
      >
        <MessageSquareText className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="absolute right-0.5 top-0.5 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full border-2 border-white bg-emerald-400" />
      </a>
    </div>
  );
}
