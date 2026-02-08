"use client";

import { motion } from "framer-motion";
import { useSystem } from "@/context/SystemContext";

export default function TargetOutput() {
    const { heat, structure } = useSystem();

    const targets = [
        {
            name: "React Web",
            format: "DESKTOP_DOM",
            icon: (
                <svg viewBox="0 0 100 60" className="w-full h-full text-zinc-700">
                    <rect x="5" y="5" width="90" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="5" y="5" width="90" height="8" rx="2" fill="currentColor" fillOpacity="0.1" />
                    <circle cx="12" cy="9" r="1.5" fill="currentColor" />
                    <circle cx="17" cy="9" r="1.5" fill="currentColor" />
                    <circle cx="22" cy="9" r="1.5" fill="currentColor" />
                    {/* Inner Content */}
                    <g className="text-magma-start" opacity={0.6}>
                        <rect x="15" y="20" width="30" height="5" rx="1" fill="currentColor" />
                        <rect x="55" y="20" width="30" height="5" rx="1" fill="currentColor" />
                        <rect x="15" y="30" width="70" height="15" rx="2" fill="currentColor" />
                    </g>
                </svg>
            )
        },
        {
            name: "React Native",
            format: "IOS_NATIVE",
            icon: (
                <svg viewBox="0 0 50 100" className="w-full h-full text-zinc-700">
                    <rect x="5" y="5" width="40" height="90" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="18" y="10" width="14" height="4" rx="2" fill="currentColor" />
                    {/* Inner Content */}
                    <g className="text-magma-start" opacity={0.6}>
                        <circle cx="25" cy="30" r="10" fill="currentColor" />
                        <rect x="10" y="50" width="30" height="4" rx="1" fill="currentColor" />
                        <rect x="10" y="58" width="30" height="4" rx="1" fill="currentColor" />
                        <rect x="10" y="66" width="30" height="4" rx="1" fill="currentColor" />
                    </g>
                </svg>
            )
        },
        {
            name: "Flutter",
            format: "AOT_BINARY",
            icon: (
                <svg viewBox="0 0 50 100" className="w-full h-full text-zinc-700">
                    <rect x="5" y="5" width="40" height="90" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
                    {/* Flutter Logo approximation */}
                    <path d="M25 20 L40 35 L25 50 L10 35 Z" fill="currentColor" fillOpacity="0.1" />
                    {/* Inner Content */}
                    <g className="text-magma-start" opacity={0.6}>
                        <rect x="12" y="60" width="26" height="10" rx="2" fill="currentColor" />
                        <rect x="12" y="75" width="26" height="10" rx="2" fill="currentColor" />
                    </g>
                </svg>
            )
        }
    ];

    return (
        <section id="compilation" className="py-32 px-6 bg-void relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-zinc-border pb-4 gap-4">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-text-secondary">
                        06. TARGET_OUTPUT_SYNC
                    </h2>
                    <div className="font-mono text-[9px] text-magma-start flex gap-6">
                        <span>BINARY_SPEC: MT_77A</span>
                        <span>COMPRESSION: {heat > 50 ? "BROT_LVL_9" : "LZ4_FAST"}</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Source: Molten UI */}
                    <div className="flex-1 w-full max-w-md aspect-square relative forge-glass rounded-3xl border border-magma-start/30 p-12 overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-[0.05] pointer-events-none" />
                        <div className="absolute top-4 left-6 font-mono text-[8px] text-magma-start uppercase tracking-widest">
                            [SOURCE: MOLTEN_ARCHITEC]
                        </div>

                        {/* Molten Animation Area */}
                        <div className="w-full h-full flex items-center justify-center relative">
                            {/* Fluid background paths */}
                            <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-magma-start/10">
                                <motion.path
                                    d="M20 20 Q50 10 80 20 T80 80 Q50 90 20 80 T20 20"
                                    fill="currentColor"
                                    animate={{
                                        d: [
                                            "M20 20 Q50 10 80 20 T80 80 Q50 90 20 80 T20 20",
                                            "M25 15 Q55 15 75 25 T85 75 Q45 95 15 75 T25 15",
                                            "M20 20 Q50 10 80 20 T80 80 Q50 90 20 80 T20 20"
                                        ]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </svg>

                            {/* Architectural Elements (The "Iron" in the lava) */}
                            <div className="relative z-10 w-full grid grid-cols-2 gap-4">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="h-20 border border-magma-start/40 rounded-lg bg-void/40 backdrop-blur-sm flex items-center justify-center"
                                        animate={{
                                            y: [0, -5, 0],
                                            rotate: [(i - 1.5) * 5, (i - 1.5) * -5, (i - 1.5) * 5]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                                    >
                                        <div className="w-4 h-1 bg-magma-start/20 rounded" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Telemetry HUD */}
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between font-mono text-[8px] text-text-secondary">
                            <div className="flex flex-col">
                                <span className="text-magma-start">VISCOSITY</span>
                                <span>{(1.2 + heat / 50).toFixed(2)} cP</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-magma-start">STRESS_GEOM</span>
                                <span>{structure}% L_FIXED</span>
                            </div>
                        </div>
                    </div>

                    {/* Central Compilation Beam */}
                    <div className="hidden lg:flex flex-col items-center justify-center gap-4">
                        <div className="w-12 h-1 bg-gradient-to-r from-magma-start to-transparent animate-pulse" />
                        <div className="text-[10px] font-black font-mono text-magma-start -rotate-90 py-12 tracking-[0.5em] whitespace-nowrap">
                            COMPILING_STREAM
                        </div>
                        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-magma-start animate-pulse" />
                    </div>

                    {/* Output Targets */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                        {targets.map((target, idx) => (
                            <motion.div
                                key={idx}
                                className="forge-glass p-6 rounded-2xl border border-zinc-border/50 flex flex-col items-center group/card hover:border-magma-start/50 transition-all cursor-pointer"
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-full aspect-[3/4] mb-6 flex items-center justify-center p-4">
                                    <div className="w-full h-full relative">
                                        {target.icon}
                                        {/* Glow Layer */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-magma-start/10 blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[9px] font-bold text-text-secondary mb-1 tracking-widest">{target.format}</div>
                                    <div className="text-xs font-black text-white uppercase group-hover/card:magma-text transition-all">{target.name}</div>
                                </div>
                                {/* Technical Specs Hook */}
                                <div className="mt-6 w-full pt-4 border-t border-zinc-border/30 flex justify-between font-mono text-[7px] text-zinc-600 opacity-60">
                                    <span>PKG: {Math.floor(25 + Math.random() * 10)}KB</span>
                                    <span>LAT: 12ms</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
