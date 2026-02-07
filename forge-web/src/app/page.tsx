import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ProcessFlow from "@/components/ProcessFlow";
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

export default function Home() {
  return (
    <main className="min-h-screen bg-void selection:bg-magma-start/30">
      <CursorGlow />
      <ScrollTemperature />
      <Navbar />
      <Hero />
      <StatusTicker />
      <BentoGrid />
      <ProcessFlow />
      <AnimationGallery />
      <Ecosystem />
      <Testimonials />
      <Team />
      <FAQ />
      <Playground />
      <Pricing />
      <CTASection />
      <Footer />

      {/* Scroll Background Decorations */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-magma-start/5 blur-[120px]" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-magma-end/5 blur-[120px]" />
      </div>
    </main>
  );
}
