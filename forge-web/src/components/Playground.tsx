"use client";

import { motion } from "framer-motion";
import { useSystem } from "@/context/SystemContext";

export default function Playground() {
    const { heat, structure, setHeat, setStructure } = useSystem();

    return (
        <section id="playground" className="py-32 px-6 bg-void relative overflow-hidden">
            {/* Background Heat Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-magma-start/50 to-transparent" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center relative z-10">
                <div className="flex-1 space-y-12">
                    <div className="relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-px bg-zinc-800" />
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-magma-start mb-6 px-4">
                            [TERMINAL_SESSION_09] // PARAMETRIC_MODULATION
                        </h2>
                        <h3 className={`text-5xl md:text-6xl font-black text-white tracking-tighter transition-all duration-300 ${heat > 95 ? "text-stress scale-[0.98]" : ""}`}>
                            System <span className="magma-text">Override.</span>
                        </h3>
                        <p className="mt-8 text-zinc-500 text-lg leading-relaxed max-w-xl font-medium">
                            Forge is a reactive compiler. Manipulate the core thermodynamic and structural constants to stress-test the interface integrity.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Heat Control (Analog Style) */}
                        <div className="group">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-magma-start uppercase flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-magma-start animate-pulse" />
                                    THERMAL_INTENSITY
                                </span>
                                <span className="text-3xl font-mono text-white tracking-tighter tabular-nums">{heat}K</span>
                            </div>
                            <div className="relative h-12 flex items-center">
                                {/* Tick marks */}
                                <div className="absolute inset-0 flex justify-between items-center pointer-events-none px-1">
                                    {Array.from({ length: 21 }).map((_, i) => (
                                        <div key={i} className={`h-2 w-px ${i % 5 === 0 ? "h-4 bg-magma-start/50" : "bg-zinc-800"}`} />
                                    ))}
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={heat}
                                    onChange={(e) => setHeat(parseInt(e.target.value))}
                                    className="w-full appearance-none bg-transparent cursor-crosshair z-10 h-full"
                                />
                                <div className="absolute inset-y-0 left-0 bg-magma-start/20 border-r border-magma-start transition-all" style={{ width: `${heat}%` }} />
                            </div>
                        </div>

                        {/* Structure Control (Analog Style) */}
                        <div className="group">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                                    STRCT_DENSITY
                                </span>
                                <span className="text-3xl font-mono text-white tracking-tighter tabular-nums">{structure}%</span>
                            </div>
                            <div className="relative h-12 flex items-center">
                                <div className="absolute inset-0 flex justify-between items-center pointer-events-none px-1">
                                    {Array.from({ length: 21 }).map((_, i) => (
                                        <div key={i} className={`h-2 w-px ${i % 5 === 0 ? "h-4 bg-zinc-500/50" : "bg-zinc-800"}`} />
                                    ))}
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={structure}
                                    onChange={(e) => setStructure(parseInt(e.target.value))}
                                    className="w-full appearance-none bg-transparent cursor-crosshair z-10 h-full"
                                />
                                <div className="absolute inset-y-0 left-0 bg-white/10 border-r border-white transition-all" style={{ width: `${structure}%` }} />
                            </div>
                        </div>

                        {/* Meltdown Trigger (Restored) */}
                        <div className="pt-4">
                            <button
                                onClick={() => setHeat(100)}
                                className={`w-full py-5 font-mono text-[10px] font-black tracking-[0.4em] uppercase border-2 transition-all duration-500 overflow-hidden relative group shadow-2xl ${heat > 95 ? "bg-magma-start text-white border-magma-start animate-pulse" : "border-zinc-800 text-zinc-500 hover:border-magma-start hover:text-magma-start"}`}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-4">
                                    {heat > 95 ? "SYSTEM_SUPERCRITICAL" : "INITIATE_THERMAL_STRESS"}
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                        <path d="M13 2L3 14h9v8l10-12h-9l10-10z" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-magma-start/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-20" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-20" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Advanced Visualizer HUD */}
                <div className="flex-1 w-full max-w-xl aspect-square relative group">
                    <div className="absolute -inset-4 bg-magma-start/10 rounded-[2.5rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />

                    <div className="relative w-full h-full bg-surface border border-zinc-border/50 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                        {/* Digital Grain & Scanline Effect */}
                        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('/assets/noise.png')] mix-blend-overlay" />
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-magma-start/5 to-transparent animate-scanline" />

                        {/* Dynamic Grid */}
                        <motion.div
                            className="grid gap-6 p-12"
                            style={{
                                gridTemplateColumns: `repeat(${Math.floor(structure / 20) + 2}, 1fr)`,
                                scale: 1 + (heat / 1000)
                            }}
                        >
                            {Array.from({ length: 16 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-14 h-14 border border-zinc-800 rounded-lg flex items-center justify-center bg-black/40 backdrop-blur-sm relative group/cell"
                                    animate={{
                                        borderColor: heat > 90 ? "#FF3D0044" : "#27272a",
                                        rotateX: heat / 10,
                                        rotateY: (100 - structure) / 5
                                    }}
                                >
                                    <div className="w-1 h-1 rounded-full bg-magma-start" style={{ opacity: heat / 100 }} />
                                    {heat > 95 && <div className="absolute inset-0 border border-magma-start animate-ping opacity-20" />}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Supercritical Overlay */}
                        {heat > 95 && (
                            <div className="absolute inset-0 bg-magma-start/10 flex items-center justify-center pointer-events-none">
                                <div className="text-[120px] font-black text-magma-start/10 select-none animate-pulse">WARNING</div>
                            </div>
                        )}

                        {/* Visualizer Footer HUD */}
                        <div className="absolute inset-x-0 bottom-0 p-8 border-t border-zinc-border/20 flex justify-between items-center bg-void/80 backdrop-blur-xl">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${heat > 90 ? "bg-magma-start animate-ping" : "bg-green-500"}`} />
                                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">MONITOR_01</span>
                                </div>
                                <div className="text-xl font-mono font-bold text-white tracking-tight">
                                    {heat > 90 ? "CRITICAL_MASS" : "STABLE_OPS"}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-1">DATA_FLOW</div>
                                <div className="flex gap-1 h-4 items-end">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-1 bg-magma-start/50"
                                            style={{ height: `${Math.random() * 100}%` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
