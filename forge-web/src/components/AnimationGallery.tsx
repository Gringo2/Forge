"use client";

import { motion } from "framer-motion";
import { useSystem } from "@/context/SystemContext";

export default function AnimationGallery() {
    const { heat, structure } = useSystem();

    const animations = [
        {
            name: "Layout Stamping Engine",
            tag: "STRUCTURAL_ALIGNMENT",
            telemetry: `TOLERANCE: ${(0.001 + (100 - structure) / 5000).toFixed(4)}mm`,
            content: (
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* The "Iron" Wireframe Grid */}
                    <g opacity="0.4">
                        <rect x="25" y="60" width="15" height="15" fill="none" stroke="#374151" strokeWidth="0.5" />
                        <rect x="42" y="60" width="15" height="15" fill="none" stroke="#374151" strokeWidth="0.5" />
                        <rect x="60" y="60" width="15" height="15" fill="none" stroke="#374151" strokeWidth="0.5" />
                        <rect x="25" y="77" width="50" height="10" fill="none" stroke="#374151" strokeWidth="0.5" />
                    </g>
                    {/* The Industrial Stamper */}
                    <g>
                        <rect x="20" y="5" width="60" height="10" fill="#1F2937" rx="1" />
                        <rect x="48" y="15" width="4" height="30" fill="#374151">
                            <animate attributeName="height" values="30;55;30" dur={`${1.5 / (1 + heat / 100)}s`} repeatCount="indefinite" />
                        </rect>
                        <g>
                            <animateTransform attributeName="transform" type="translate" values="0 0; 0 25; 0 0" dur={`${1.5 / (1 + heat / 100)}s`} repeatCount="indefinite" />
                            <rect x="30" y="45" width="40" height="8" fill="#FF3D00" rx="1" />
                            <path d="M35 49 H65" stroke="#fff" strokeWidth="0.5" opacity="0.5" />
                        </g>
                    </g>
                    {/* Reactive "Spark" on Impact */}
                    <circle cx="50" cy="85" r="0" fill="#FF3D00" opacity="0.6">
                        <animate attributeName="r" values="0;15;0" dur={`${1.5 / (1 + heat / 100)}s`} repeatCount="indefinite" begin="0.6s" />
                    </circle>
                </svg>
            )
        },
        {
            name: "Style Fusion Arc",
            tag: "VISUAL_FUSION",
            telemetry: `PROP_SYNC: ${(85 + heat / 8).toFixed(1)}%`,
            content: (
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* CSS Line */}
                    <path d="M20 70 L80 70" stroke="#374151" strokeWidth="1" strokeDasharray="3 3" />
                    {/* Fusion Head */}
                    <g style={{ transformOrigin: "50% 20%" }}>
                        <animateTransform attributeName="transform" type="rotate" values="-15;15;-15" dur="3s" repeatCount="indefinite" />
                        <rect x="48" y="10" width="4" height="40" fill="#374151" />
                        <circle cx="50" cy="50" r="4" fill="#FF9100">
                            <animate attributeName="opacity" values="1;0.5;1" dur="0.12s" repeatCount="indefinite" />
                        </circle>
                        {/* Plasma Arc */}
                        <path d="M50 50 L50 70" stroke="#fff" strokeWidth="0.5" opacity="0.8">
                            <animate attributeName="strokeWidth" values="0.5;2;0.5" dur="0.1s" repeatCount="indefinite" />
                        </path>
                    </g>
                    {/* "Heat" Particles (Styles) */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <circle key={i} r="1.5" fill="#FF3D00">
                            <animate attributeName="cx" values="50;20;80;50" dur={`${3 + i}s`} repeatCount="indefinite" />
                            <animate attributeName="cy" values="50;70;70;50" dur={`${3 + i}s`} repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;1;0" dur={`${3 + i}s`} repeatCount="indefinite" />
                        </circle>
                    ))}
                </svg>
            )
        },
        {
            name: "Logic Sync Core",
            tag: "LATENCY_DISSOLUTION",
            telemetry: `SYNC_LATENCY: ${(12 - heat / 10).toFixed(2)}ms`,
            content: (
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#1F2937" strokeWidth="1" strokeDasharray="10 5" />
                    <g className="animate-spin-slow" style={{ transformOrigin: "50% 50%" }}>
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur={`${10 / (1 + heat / 50)}s`} repeatCount="indefinite" />
                        {/* State Logic Nodes */}
                        <circle cx="50" cy="10" r="4" fill="#FF3D00" />
                        <circle cx="50" cy="90" r="4" fill="#FF9100" />
                        <circle cx="10" cy="50" r="4" fill="#374151" />
                        <circle cx="90" cy="50" r="4" fill="#374151" />
                    </g>
                    {/* Center Reactor */}
                    <circle cx="50" cy="50" r="15" fill="url(#coreGlow)">
                        <animate attributeName="r" values="15;18;15" dur="0.5s" repeatCount="indefinite" />
                    </circle>
                    <defs>
                        <radialGradient id="coreGlow">
                            <stop offset="0%" stopColor="#FF3D00" />
                            <stop offset="100%" stopColor="transparent" />
                        </radialGradient>
                    </defs>
                </svg>
            )
        },
        {
            name: "Platform Extruder",
            tag: "BINARY_EXTRUSAL",
            telemetry: `READY_STATE: ${Math.floor(heat + structure / 2)}%`,
            content: (
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Platform Tray */}
                    <rect x="20" y="80" width="60" height="4" fill="#1F2937" rx="2" />
                    {/* The Extruder Head */}
                    <g>
                        <animateTransform attributeName="transform" type="translate" values="-20 0; 20 0; -20 0" dur="4s" repeatCount="indefinite" />
                        <rect x="45" y="10" width="10" height="30" fill="#374151" />
                        <circle cx="50" cy="40" r="6" fill="#FF3D00" />
                        {/* "Printing" Material */}
                        <rect x="49" y="40" width="2" height="40" fill="#FF3D00" opacity="0.6">
                            <animate attributeName="height" values="0;40;0" dur="2s" repeatCount="indefinite" />
                        </rect>
                    </g>
                    {/* Platform Icons being "printed" */}
                    <g opacity="0.5">
                        <path d="M30 70 L35 75 L30 80" stroke="#fff" fill="none" strokeWidth="1" />
                        <rect x="45" y="72" width="10" height="10" fill="none" stroke="#fff" strokeWidth="1" />
                        <circle cx="70" cy="75" r="4" fill="none" stroke="#fff" strokeWidth="1" />
                    </g>
                </svg>
            )
        }
    ];

    return (
        <section id="gallery" className="py-32 px-6 bg-surface relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('/assets/noise.png')" }} />

            <div className="max-w-7xl mx-auto relative">
                <div className="flex justify-between items-end mb-24 border-b border-zinc-border pb-4">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-text-secondary">
                        03. Industrial Motion Language
                    </h2>
                    <span className="font-mono text-[10px] text-magma-start animate-pulse">SYSTEM_ACTIVE: HYPER_DRIVE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {animations.map((anim, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="aspect-square bg-void rounded-2xl border border-zinc-border/50 flex items-center justify-center p-12 group-hover:border-magma-start/50 transition-all duration-500 relative overflow-hidden shadow-2xl">
                                {/* Technical Grid Overlay */}
                                <div className="absolute inset-0 opacity-[0.05] pointer-events-none grid grid-cols-6 grid-rows-6">
                                    {Array.from({ length: 36 }).map((_, i) => <div key={i} className="border-[0.5px] border-magma-start" />)}
                                </div>

                                <motion.div
                                    className="w-full h-full relative z-10"
                                    animate={{
                                        filter: `brightness(${1 + heat / 200}) saturate(${1 + heat / 100})`,
                                        scale: heat > 95 ? [1, 1.02, 1] : 1
                                    }}
                                    transition={{ duration: 0.1, repeat: heat > 95 ? Infinity : 0 }}
                                >
                                    {anim.content}
                                </motion.div>

                                {/* Telemetry HUD */}
                                <div className="absolute top-4 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="font-mono text-[8px] text-magma-start tracking-wider">{anim.tag}</span>
                                    <span className="font-mono text-[8px] text-white opacity-50 tracking-widest">{anim.telemetry}</span>
                                </div>

                                <div className="absolute inset-0 bg-magma-start/[0.02] group-hover:bg-magma-start/[0.05] transition-colors" />
                            </div>

                            <div className="mt-6 flex flex-col items-center">
                                <span className="font-bold text-sm text-white uppercase tracking-tighter mb-1 group-hover:text-magma-start transition-colors">
                                    {anim.name}
                                </span>
                                <div className="h-px w-12 bg-zinc-border group-hover:w-full group-hover:bg-magma-start transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
