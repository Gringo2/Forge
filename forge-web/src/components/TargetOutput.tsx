"use client";

import { motion } from "framer-motion";
import { useSystem } from "@/context/SystemContext";

export default function TargetOutput() {
    const { heat } = useSystem();

    return (
        <section id="compilation" className="py-32 px-6 bg-void relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-border pb-4 gap-4">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-text-secondary">
                        05. NATIVE VIEW EMISSION
                    </h2>
                    <div className="font-mono text-[9px] text-magma-start flex gap-6">
                        <span>BINARY_SPEC: MT_77A</span>
                        <span>COMPRESSION: {heat > 50 ? "BROT_LVL_9" : "LZ4_FAST"}</span>
                    </div>
                </div>

                {/* Unified SVG Diagram */}
                <div className="w-full aspect-[16/9] md:aspect-[21/9] relative">
                    <svg viewBox="0 0 1400 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Background Grid */}
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(39 39 42)" strokeWidth="0.5" opacity="0.2" />
                            </pattern>
                            <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgb(255 61 0)" stopOpacity="0.1" />
                                <stop offset="50%" stopColor="rgb(255 61 0)" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="rgb(255 61 0)" stopOpacity="0.1" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <rect width="1400" height="600" fill="url(#grid)" />

                        {/* SOURCE: Vector IR (Left) */}
                        <g transform="translate(50, 150)">
                            {/* Source Container */}
                            <rect x="0" y="0" width="240" height="300" rx="16" stroke="rgb(255 61 0)" strokeWidth="2" fill="rgb(9 9 11)" opacity="0.8" />

                            {/* Molten Core Animation */}
                            <motion.path
                                d="M60 80 Q120 60 180 80 T180 220 Q120 240 60 220 T60 80"
                                fill="rgb(255 61 0)"
                                fillOpacity="0.1"
                                stroke="rgb(255 61 0)"
                                strokeWidth="1"
                                strokeOpacity="0.3"
                                animate={{
                                    d: [
                                        "M60 80 Q120 60 180 80 T180 220 Q120 240 60 220 T60 80",
                                        "M70 70 Q130 70 170 90 T190 210 Q110 250 50 210 T70 70",
                                        "M60 80 Q120 60 180 80 T180 220 Q120 240 60 220 T60 80"
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Source Label */}
                            <text x="120" y="30" textAnchor="middle" fill="rgb(255 61 0)" fontSize="10" fontWeight="bold" fontFamily="monospace">
                                VECTOR_IR_SOURCE
                            </text>

                            {/* Telemetry */}
                            <text x="20" y="275" fill="rgb(113 113 122)" fontSize="7" fontFamily="monospace">IR_STABILITY: 0.9847</text>
                            <text x="140" y="275" fill="rgb(113 113 122)" fontSize="7" fontFamily="monospace" textAnchor="end">EMIT_READY</text>
                        </g>

                        {/* COMPILER BEAM (Center) */}
                        <g transform="translate(320, 285)">
                            {/* Main Beam Path */}
                            <motion.line
                                x1="0"
                                y1="15"
                                x2="580"
                                y2="15"
                                stroke="url(#beam-gradient)"
                                strokeWidth="3"
                                filter="url(#glow)"
                                animate={{ strokeOpacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            {/* Data Packets */}
                            <motion.circle cx="0" cy="15" r="4" fill="rgb(255 61 0)" filter="url(#glow)"
                                animate={{ cx: [0, 580], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.circle cx="0" cy="15" r="4" fill="rgb(255 61 0)" filter="url(#glow)"
                                animate={{ cx: [0, 580], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                            />

                            {/* Compiler Label */}
                            <text x="290" y="-10" textAnchor="middle" fill="rgb(255 61 0)" fontSize="9" fontWeight="900" fontFamily="monospace" letterSpacing="3">
                                DETERMINISTIC_TRANSMISSION
                            </text>
                        </g>

                        {/* OUTPUT TARGETS (Right - Grid Layout) */}
                        <g transform="translate(950, 50)">

                            {/* React (Web) */}
                            <g transform="translate(0, 0)">
                                <rect width="180" height="100" rx="8" stroke="rgb(113 113 122)" fill="rgb(9 9 11)" opacity="0.6" />
                                <text x="90" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">REACT (WEB)</text>
                                <text x="90" y="75" textAnchor="middle" fill="rgb(113 113 122)" fontSize="6" fontFamily="monospace">DOM / Tailwind</text>
                            </g>

                            {/* React Native */}
                            <g transform="translate(200, 0)">
                                <rect width="180" height="100" rx="8" stroke="rgb(113 113 122)" fill="rgb(9 9 11)" opacity="0.6" />
                                <text x="90" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">REACT NATIVE</text>
                                <text x="90" y="75" textAnchor="middle" fill="rgb(113 113 122)" fontSize="6" fontFamily="monospace">Yoga / Native Mod</text>
                            </g>

                            {/* Flutter */}
                            <g transform="translate(0, 120)">
                                <rect width="180" height="100" rx="8" stroke="rgb(113 113 122)" fill="rgb(9 9 11)" opacity="0.6" />
                                <text x="90" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">FLUTTER</text>
                                <text x="90" y="75" textAnchor="middle" fill="rgb(113 113 122)" fontSize="6" fontFamily="monospace">Skia / Impeller</text>
                            </g>

                            {/* SwiftUI */}
                            <g transform="translate(200, 120)">
                                <rect width="180" height="100" rx="8" stroke="rgb(113 113 122)" fill="rgb(9 9 11)" opacity="0.6" />
                                <text x="90" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">SWIFTUI</text>
                                <text x="90" y="75" textAnchor="middle" fill="rgb(113 113 122)" fontSize="6" fontFamily="monospace">VStack / ZStack</text>
                            </g>

                            {/* Compose */}
                            <g transform="translate(100, 240)">
                                <rect width="180" height="100" rx="8" stroke="rgb(113 113 122)" fill="rgb(9 9 11)" opacity="0.6" />
                                <text x="90" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">COMPOSE</text>
                                <text x="90" y="75" textAnchor="middle" fill="rgb(113 113 122)" fontSize="6" fontFamily="monospace">Modifier / Box</text>
                            </g>
                        </g>

                        {/* Connection Lines */}
                        <g stroke="rgb(255 61 0)" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3">
                            {/* To React */}
                            <motion.path d="M900 300 L950 100" animate={{ strokeDashoffset: [0, 8] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} />
                            {/* To RN */}
                            <motion.path d="M900 300 L1150 100" animate={{ strokeDashoffset: [0, 8] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} />
                            {/* To Flutter */}
                            <motion.path d="M900 300 L950 220" animate={{ strokeDashoffset: [0, 8] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} />
                            {/* To SwiftUI */}
                            <motion.path d="M900 300 L1150 220" animate={{ strokeDashoffset: [0, 8] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} />
                            {/* To Compose */}
                            <motion.path d="M900 300 L1050 340" animate={{ strokeDashoffset: [0, 8] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} />
                        </g>

                    </svg>
                </div>

                {/* Technical Summary */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 border border-zinc-border/30 rounded-lg">
                        <div className="text-magma-start font-mono text-xs font-bold mb-2">ZERO TRANSLATION DRIFT</div>
                        <div className="text-text-secondary text-sm">Binary-level deterministic emission ensures 1:1 fidelity from design intent to production code.</div>
                    </div>
                    <div className="p-6 border border-zinc-border/30 rounded-lg">
                        <div className="text-magma-start font-mono text-xs font-bold mb-2">NATIVE PLATFORM PRIMITIVES</div>
                        <div className="text-text-secondary text-sm">Direct emission to platform-specific component trees: DOM, UIKit, Compose.</div>
                    </div>
                    <div className="p-6 border border-zinc-border/30 rounded-lg">
                        <div className="text-magma-start font-mono text-xs font-bold mb-2">LOSSLESS IR TRANSFORMATION</div>
                        <div className="text-text-secondary text-sm">Maintains semantic integrity across all compilation stages and target platforms.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
