"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Ecosystem() {
    const products = [
        {
            name: "Prod Control",
            tag: "LOGISTICS_ENGINE",
            meta: "CORE_V4.8",
            color: "#FF3D00",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:text-magma-start transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16v16H4z M4 9h16 M4 14h16 M9 4v16 M14 4v16" strokeDasharray="1 2" />
                    <rect x="9" y="9" width="5" height="5" fill="currentColor" fillOpacity="0.1" />
                </svg>
            )
        },
        {
            name: "The Operator",
            tag: "AUTOMATION_KERNEL",
            meta: "SYNC_ACTIVE",
            color: "#FF9100",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:text-magma-start transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
                    <path d="M12 7v5l3 3" strokeLinecap="square" />
                    <path d="M8 12h.01M16 12h.01" strokeWidth="3" />
                </svg>
            )
        },
        {
            name: "ADR",
            tag: "DECISION_LOG",
            meta: "TRACE_READ",
            color: "#FF3D00",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:text-magma-start transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                    <path d="M12 22V12M12 12l8-5M12 12L4 7" opacity="0.5" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
            )
        },
        {
            name: "Codestellation",
            tag: "INTELLIGENCE_GRID",
            meta: "NODE_CLUSTER",
            color: "#FF9100",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:text-magma-start transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
                    <path d="M12 8v8M8 12h8" strokeLinecap="square" />
                    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" opacity="0.6" />
                </svg>
            )
        },
        {
            name: "System Zero",
            tag: "ROOT_INFRA",
            meta: "UPTIME_99.9",
            color: "#FF3D00",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:text-magma-start transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="square" />
                    <path d="M12 22V12" opacity="0.4" />
                </svg>
            )
        },
    ];

    return (
        <section id="ecosystem" className="py-32 px-6 max-w-7xl mx-auto relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-zinc-800 to-transparent" />

            <div className="flex flex-col items-center mb-16">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-text-secondary mb-4">
                    04. System Zero Ecosystem
                </h2>
                <div className="h-px w-24 bg-magma-start/50" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
                {products.map((prop, idx) => (
                    <EcosystemNode key={idx} prop={prop} index={idx} />
                ))}
            </div>

            <div className="mt-24 pt-8 border-t border-zinc-border/30 flex justify-between items-center opacity-30">
                <span className="font-mono text-[8px] uppercase tracking-widest text-text-secondary">ESTABLISHING_PEER_LINK...</span>
                <div className="flex gap-4">
                    <div className="w-1 h-1 rounded-full bg-magma-start animate-pulse" />
                    <div className="w-1 h-1 rounded-full bg-magma-start animate-ping delay-75" />
                    <div className="w-1 h-1 rounded-full bg-magma-start animate-pulse delay-150" />
                </div>
            </div>
        </section>
    );
}

function EcosystemNode({ prop, index }: { prop: any, index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

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
            className="flex flex-col items-center group cursor-crosshair relative py-8"
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Visual Trace Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-zinc-800/50 -z-10 group-hover:bg-magma-start/30 transition-colors" />

            <div className="relative w-28 h-28 rounded-2xl border border-zinc-border bg-surface flex items-center justify-center group-hover:border-magma-start/50 transition-all duration-500 shadow-2xl group-hover:shadow-magma-start/10 z-10 overflow-hidden" style={{ transform: "translateZ(30px)" }}>
                {/* Circuit background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)] from-magma-start" />
                </div>

                <div className="transform group-hover:scale-110 transition-transform duration-500 relative z-20">
                    {prop.icon}
                </div>

                {/* Status Indicator */}
                <div className="absolute top-3 right-3 flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-magma-start opacity-30 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Metadata HUD (Visible on hover) */}
                <div className="absolute bottom-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="font-mono text-[7px] text-magma-start tracking-[0.2em]">{prop.meta}</span>
                </div>
            </div>

            <div className="mt-8 text-center relative z-10" style={{ transform: "translateZ(15px)" }}>
                <div className="text-sm font-black text-white uppercase tracking-tight mb-2 group-hover:text-magma-text transition-colors duration-300">{prop.name}</div>
                <div className="px-3 py-1 border border-zinc-border/50 rounded-full group-hover:border-magma-start/30 group-hover:bg-magma-start/5 transition-colors">
                    <div className="text-[9px] text-zinc-500 group-hover:text-magma-start uppercase font-bold tracking-widest">{prop.tag}</div>
                </div>
            </div>

            {/* Hover Data Stream Line */}
            <div className="absolute top-[6.5rem] left-1/2 w-px h-32 bg-gradient-to-b from-magma-start to-transparent opacity-0 group-hover:opacity-100 group-hover:h-48 transition-all duration-700 -z-20" />
        </motion.div>
    );
}
