import React from "react";
import Image from "next/image";
import logoImg from "@/assets/top-hms-logo.png";

interface BrandLogoProps {
  variant?: "light" | "dark";
}

export function BrandLogo({ variant = "light" }: BrandLogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-[#203272]";
  const subColor = variant === "dark" ? "text-teal-300" : "text-[#0d9488]";

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <Image
        src={logoImg}
        alt="Top HMS Logo"
        width={42}
        height={42}
        priority
        className="h-10 w-10 object-contain rounded-lg"
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-bold tracking-tight ${textColor}`}>
          Top <span className={subColor}>HMS</span>
        </span>
      </span>
    </span>
  );
}
