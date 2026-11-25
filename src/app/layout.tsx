import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Top HMS — Modern Hospital Management & Clinical Operations Platform",
  description:
    "Unify outpatient queues, inpatient bed care, diagnostic labs, pharmacy POS, and audit-proof billing in one resilient healthcare platform.",
  keywords: [
    "Top HMS",
    "Hospital Management System",
    "Clinical Operations Platform",
    "OPD IPD Software",
    "Diagnostic Lab Software",
    "Pharmacy POS",
    "Healthcare ERP",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${sora.variable}`}>
      <body className="antialiased selection:bg-[#0d9488]/20 selection:text-[#0f3b7c]">
        {children}
      </body>
    </html>
  );
}
