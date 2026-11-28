import type { Metadata } from "next";
import { Hind_Siliguri, Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  variable: "--font-bangla",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
  title: "Top HMS — আধুনিক হসপিটাল ম্যানেজমেন্ট ও হেলথকেয়ার ERP প্ল্যাটফর্ম",
  description:
    "OPD কিউ, IPD বেড ম্যানেজমেন্ট, ডায়াগনস্টিক ল্যাব, ফার্মেসি POS এবং অডিট-প্রুফ বিলিং — সম্পূর্ণ হসপিটাল পরিচালনার জন্য একটি সমন্বিত ও অফলাইন-সক্ষম প্ল্যাটফর্ম।",
  keywords: [
    "Top HMS",
    "হসপিটাল ম্যানেজমেন্ট সফটওয়্যার",
    "Hospital Management System Bangladesh",
    "OPD IPD Software",
    "ডায়াগনস্টিক ল্যাব সফটওয়্যার",
    "ফার্মেসি POS",
    "Healthcare ERP",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} ${jakarta.variable} ${sora.variable}`}
    >
      <body className="antialiased selection:bg-[#0d9488]/20 selection:text-[#203272]">
        {children}
      </body>
    </html>
  );
}
