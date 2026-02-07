"use client";


import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Ecosystem() {
    const products = [
        {
            name: "Prod Control",
            tag: "Management",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:text-magma-start transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16v16H4zM4 9h16M4 14h16M9 4v16M14 4v16" />
                </svg>
            )
        },
        {
            name: "The Operator",
            tag: "Automation",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:text-magma-start transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                    <path d="M8 12h.01M16 12h.01" />
                </svg>
            )
        },
        {
            name: "ADR",
            tag: "Decisions",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:text-magma-start transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                    <path d="M12 22V12M12 12l8-5M12 12L4 7" />
                </svg>
            )
        },
        {
            name: "Codestellation",
            tag: "Intelligence",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:text-magma-start transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
                    <path d="M12 8v8M8 12h8M12 3v3M12 18v3M3 12h3M18 12h3" />
                </svg>
            )
        },
        {
            name: "System Zero",
            tag: "Infrastructure",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:text-magma-start transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
    ];

    return (
        <section id="ecosystem" className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-12 border-b border-zinc-border pb-4 text-center">
                04. System Zero Ecosystem
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
                {products.map((prop, idx) => (
                    <EcosystemNode key={idx} prop={prop} index={idx} />
                ))}
            </div>
        </section>
    );
}



function EcosystemNode({ prop, index }: { prop: any, index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

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
            className="flex flex-col items-center gap-6 group cursor-crosshair relative"
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative w-24 h-24 rounded-2xl border border-zinc-border bg-surface flex items-center justify-center group-hover:border-magma-start transition-colors duration-500 shadow-2xl group-hover:shadow-magma-start/20 z-10" style={{ transform: "translateZ(20px)" }}>
                <div className="absolute inset-0 bg-magma-start/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {prop.icon}
                </div>

                {/* Connector Nodes */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-500 rounded-full opacity-50" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-500 rounded-full opacity-50" />
            </div>

            <div className="text-center relative z-10" style={{ transform: "translateZ(10px)" }}>
                <div className="text-xs font-bold text-white uppercase tracking-tighter mb-1 group-hover:text-magma-start transition-colors">{prop.name}</div>
                <div className="text-[10px] text-zinc-500 uppercase font-mono">{prop.tag}</div>
            </div>

            {/* Connection Line Trace (Visual Only) */}
            <div className="absolute top-12 left-1/2 w-px h-24 bg-gradient-to-b from-zinc-800 to-transparent -z-10 group-hover:from-magma-start/50 transition-colors" />
        </motion.div>
    );
}
