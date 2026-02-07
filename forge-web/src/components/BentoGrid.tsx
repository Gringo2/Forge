"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useSystem } from "@/context/SystemContext";
import AnalogGauge from "./AnalogGauge";

export default function BentoGrid() {
    const { heat, structure } = useSystem();
    const features = [
        {
            title: "Reactive Logic",
            description: "Define interface state that compiles into pure reactive streams.",
            className: "md:col-span-2 md:row-span-2",
            tag: "REACTIVE",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-magma-start" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
        },
        {
            title: "Strict Structure",
            description: "Iron-clad component hierarchies that never leak.",
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
            title: "Multi-Platform Export",
            description: "Compile directly to React, React Native, and Flutter with zero overhead.",
            className: "md:col-span-1 md:row-span-1",
            tag: "TRANSPILE",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-magma-end" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 7h12m0 0l-4-4m4 4l-4 4m-8 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
        },
        {
            title: "Assembly Engine",
            description: "Proprietary layout engine optimized for deterministic rendering.",
            className: "md:col-span-2 md:row-span-1",
            tag: "CORE",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v19M5 8l14 8M19 8L5 16" />
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
            className={`relative p-8 border border-zinc-border rounded-2xl group overflow-hidden ${index === 0 ? "md:col-span-2 md:row-span-2" : index === 1 ? "md:col-span-1 md:row-span-2" : "md:col-span-1 md:row-span-1"} bg-void`}
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
