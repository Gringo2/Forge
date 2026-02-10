"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useSystem } from "@/context/SystemContext";
import AnalogGauge from "./AnalogGauge";

export default function BentoGrid() {
    const { heat, structure } = useSystem();
    const features = [
        {
            title: "Vector-First Canvas",
            description: "A sophisticated design environment built for deterministic synchrony. No handoff, no drift.",
            className: "md:col-span-2 md:row-span-1",
            tag: "DESIGN_CORE",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-magma-start" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                </svg>
            ),
        },
        {
            title: "AI Semantic Synthesis",
            description: "Vibedraw your product intent. Our AI semantic engine generates structured, production-ready vector layouts from simple text prompts.",
            className: "md:col-span-1 md:row-span-1",
            tag: "VIBEDRAW",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-magma-start animate-pulse" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    <path d="M12 7l1 2h2l-1.5 1.5.5 2.5-2-1.5-2 1.5.5-2.5L10 9h2V7z" fill="currentColor" />
                </svg>
            ),
        },
        {
            title: "Pro-Grade Design Surface",
            description: "A full-spectrum UI/UX environment that matches Figma's expressiveness with the precision of a compiler. Draw, prototype, and emit—all in one viewport.",
            className: "md:col-span-1 md:row-span-1",
            tag: "UX_ENV",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-magma-end" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2v20M2 12h20" />
                    <path d="M12 12l7-7" />
                    <circle cx="19" cy="5" r="2" />
                </svg>
            ),
        },
        {
            title: "Deterministic Layouts",
            description: "Vector geometry is converted directly into flexbox and grid logic. No guessing, just math.",
            className: "md:col-span-1 md:row-span-2",
            tag: "CORE",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-iron-light" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                </svg>
            ),
        },
        {
            title: "Direct Repo Synchronization",
            description: "Your UI/UX is the repository. Forge emits production-grade views directly into your codebase with binary-level precision.",
            className: "md:col-span-2 md:row-span-1",
            tag: "REPO_SYNC",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v19M5 8l14 8M19 8L5 16" />
                    <rect x="9" y="10" width="6" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />
                </svg>
            ),
        },
    ];

    return (
        <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-12 border-b border-zinc-border pb-4">
                01. Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                    <FeatureCard key={idx} feature={feature} index={idx} heat={heat} structure={structure} />
                ))}
            </div>
        </section>
    );
}

function FeatureCard({ feature, index, heat, structure }: { feature: any, index: number, heat: number, structure: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-0.5, 0.5], [2, -2]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-2, 2]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className={`relative p-8 border border-zinc-border rounded-2xl group overflow-hidden ${feature.className} bg-void`}
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Active Circuit Border */}
            <div className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-magma-start to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-magma-start to-transparent" />
                <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-magma-start to-transparent" />
                <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-magma-start to-transparent" />

                {/* Spotlight Cursor Trace */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,61,0,0.1),transparent_50%)]"
                    style={{
                        //@ts-ignore
                        "--mouse-x": `${(x.get() + 0.5) * 100}%`,
                        //@ts-ignore
                        "--mouse-y": `${(y.get() + 0.5) * 100}%`
                    }}
                />
            </div>

            {/* Glass Background */}
            <div className="absolute inset-0 bg-surface/50 backdrop-blur-sm z-0" />

            <div className="relative z-10 h-full flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
                <div className="flex justify-between items-start mb-8">
                    <div className="text-magma-start text-[10px] font-mono uppercase tracking-[0.3em] border border-zinc-border/50 px-2 py-1 rounded">
                        {feature.tag}
                    </div>
                    <AnalogGauge
                        value={feature.tag === "REACTIVE" ? heat : structure}
                        label={feature.tag === "REACTIVE" ? "HEAT" : "CORE"}
                    />
                </div>

                <div>
                    <div className="mb-6 p-4 rounded-xl bg-void border border-zinc-border group-hover:border-magma-start/50 transition-colors w-16 h-16 flex items-center justify-center shadow-lg">
                        {feature.icon}
                    </div>
                    <h3 className={`text-2xl font-bold text-white mb-4 tracking-tight transition-all duration-300 ${heat > 95 ? "text-stress" : ""}`}>
                        {feature.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-xs font-medium">{feature.description}</p>
                </div>
            </div>

            {/* Interactive Background Decoration */}
            <div className="absolute -bottom-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ transform: "translateZ(10px)" }}>
                <div className={`w-48 h-48 border border-magma-start rounded-full flex items-center justify-center ${heat > 80 ? "animate-spin" : "animate-spin-slow"}`}>
                    <div className="w-32 h-32 border border-zinc-border rounded-full" />
                </div>
            </div>
        </motion.div>
    );
}
