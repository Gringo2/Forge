"use client";

import { useSystem } from "@/context/SystemContext";

import DashboardPreview from "./DashboardPreview";

export default function Hero() {
    const { heat } = useSystem();
    return (
        <section className={`relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden pt-32 ${heat > 90 ? "heat-jitter" : ""}`}>
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magma-start blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-magma-end blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* NEW Badge */}
            <div className="flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-bold tracking-widest uppercase border rounded-full bg-surface border-zinc-border text-magma-start animate-pulse-magma">
                <span className="w-1.5 h-1.5 rounded-full bg-magma-start" />
                Forge Core v3.0 Released
            </div>

            <h1 className={`text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85] text-center transition-all duration-300 ${heat > 95 ? "text-stress" : ""}`}>
                UI/UX TO <br />
                <span className="magma-text">NATIVE CODE.</span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-center text-text-secondary mb-12 leading-relaxed font-medium">
                The <span className="text-white">AI-Native Design Environment</span>. <br />
                Compiles directly to production <span className="text-white">React</span>, <span className="text-white">SwiftUI</span>, and <span className="text-white">Compose</span>.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
                <button className="btn-forge magma-bg text-void text-sm font-bold uppercase tracking-widest px-10 py-4 shadow-[0_0_30px_rgba(255,61,0,0.3)] hover:shadow-[0_0_40px_rgba(255,61,0,0.5)]">
                    Start Designing
                </button>
                <button className="btn-forge bg-transparent border-2 border-zinc-border text-white text-sm font-bold uppercase tracking-widest px-10 py-4 hover:border-magma-start hover:text-magma-start transition-all">
                    See the Compiler
                </button>
            </div>

            {/* Dashboard Live Preview */}
            <div className="relative mt-20 w-full max-w-5xl group h-[500px] md:h-[600px]">
                <div className="absolute inset-0 bg-magma-start opacity-5 blur-3xl group-hover:opacity-10 transition-opacity" />
                <DashboardPreview />
            </div>

            {/* Trusted By / Logo Bar */}
            {/* Supported Frameworks / MOAT */}
            <div className="mt-24 w-full max-w-7xl pt-12 border-t border-zinc-border/30">
                <p className="text-[10px] font-bold text-center uppercase tracking-[0.4em] text-zinc-600 mb-8">
                    NATIVE EMISSION TARGETS
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    {/* React */}
                    <div className="flex flex-col items-center gap-2 group/icon">
                        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-[#61DAFB]" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" /><circle cx="12" cy="12" r="2" /></svg>
                        <span className="text-[8px] font-bold tracking-widest uppercase opacity-0 group-hover/icon:opacity-100 transition-opacity">React</span>
                    </div>

                    {/* React Native */}
                    <div className="flex flex-col items-center gap-2 group/icon">
                        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-[#61DAFB]" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" /><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" opacity="0.5" /></svg>
                        <span className="text-[8px] font-bold tracking-widest uppercase opacity-0 group-hover/icon:opacity-100 transition-opacity">React Native</span>
                    </div>

                    {/* Flutter */}
                    <div className="flex flex-col items-center gap-2 group/icon">
                        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-[#02569B]" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 2L6 9.5l7.5 7.5L21 9.5 13.5 2zM6 14.5L13.5 22H21l-7.5-7.5L6 14.5z" /></svg>
                        <span className="text-[8px] font-bold tracking-widest uppercase opacity-0 group-hover/icon:opacity-100 transition-opacity">Flutter</span>
                    </div>

                    {/* SwiftUI */}
                    <div className="flex flex-col items-center gap-2 group/icon">
                        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-[#007AFF]" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v4z" /></svg>
                        <span className="text-[8px] font-bold tracking-widest uppercase opacity-0 group-hover/icon:opacity-100 transition-opacity">SwiftUI</span>
                    </div>

                    {/* Compose */}
                    <div className="flex flex-col items-center gap-2 group/icon">
                        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-[#3DDC84]" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                        <span className="text-[8px] font-bold tracking-widest uppercase opacity-0 group-hover/icon:opacity-100 transition-opacity">Compose</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
