import React from "react";
import Image from "next/image";
import logoImg from "@/assets/top-hms-logo.png";

interface BrandLogoProps {
  variant?: "light" | "dark";
}

export function BrandLogo({ variant = "light" }: BrandLogoProps) {
  const topColor = variant === "dark" ? "text-white" : "text-[#192150]";
  const subTagColor = variant === "dark" ? "text-blue-200/80" : "text-slate-500";

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <Image
        src={logoImg}
        alt="Top HMS Logo"
        width={52}
        height={40}
        priority
        className={`h-10 w-auto object-contain ${variant === "light" ? "mix-blend-multiply" : "rounded-md"}`}
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-extrabold tracking-tight leading-none">
          <span className={topColor}>Top</span>{" "}
          <span className="bg-gradient-to-r from-[#0055cc] to-[#0099ff] bg-clip-text text-transparent">
            HMS
          </span>
        </span>
        <span className={`mt-0.5 text-[9px] font-bold uppercase tracking-[0.2em] ${subTagColor}`}>
          Healthcare ERP
        </span>
      </span>
    </span>
  );
}
