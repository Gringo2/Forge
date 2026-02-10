"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ProcessFlow from "@/components/ProcessFlow";
import TargetOutput from "@/components/TargetOutput";
import AnimationGallery from "@/components/AnimationGallery";
import Ecosystem from "@/components/Ecosystem";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Playground from "@/components/Playground";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollTemperature from "@/components/ScrollTemperature";
import StatusTicker from "@/components/StatusTicker";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SystemBoot from "@/components/SystemBoot";
import SystemAuditory from "@/components/SystemAuditory";

export default function Home() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <main className="min-h-screen bg-void selection:bg-magma-start/30 overflow-hidden">
      <AnimatePresence mode="wait">
        {!isBooted && (
          <SystemBoot key="boot" onBootComplete={() => setIsBooted(true)} />
        )}
      </AnimatePresence>

      <div className={!isBooted ? "hidden" : "contents"}>
        <CursorGlow />
        <ScrollTemperature />
        <SystemAuditory />
        <Navbar />
        <Hero />
        <StatusTicker />
        <BentoGrid />
        <ProcessFlow />
        <TargetOutput />
        <Playground />
        <AnimationGallery />
        <Testimonials />
        <Ecosystem />
        <Pricing />
        <FAQ />
        <Team />
        <CTASection />
        <Footer />
      </div>

      {/* Scroll Background Decorations */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-magma-start/5 blur-[150px] animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-[500px] h-[500px] bg-magma-end/5 blur-[150px] animate-pulse delay-700" />
      </div>

      {/* Global Technical Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('/assets/noise.png')]" />
        <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-scanline" />
      </div>
    </main>
  );
}
