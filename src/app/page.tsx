import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Modules } from "@/components/Modules";
import { StatsBar } from "@/components/StatsBar";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Insights } from "@/components/Insights";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Modules />
        <StatsBar />
        <Pricing />
        <Testimonials />
        <Faq />
        <Insights />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
