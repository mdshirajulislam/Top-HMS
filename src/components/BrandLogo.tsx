import React from "react";

interface BrandLogoProps {
  variant?: "light" | "dark";
}

export function BrandLogo({ variant = "light" }: BrandLogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-[#0f3b7c]";
  const subColor = variant === "dark" ? "text-teal-300" : "text-[#0d9488]";

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f3b7c] to-[#0d9488] shadow-sm shadow-[#0f3b7c]/20">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 3.5V20.5M3.5 12H20.5"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="2.2" fill="#5eead4" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-bold tracking-tight ${textColor}`}>
          Top <span className={subColor}>HMS</span>
        </span>
      </span>
    </span>
  );
}
