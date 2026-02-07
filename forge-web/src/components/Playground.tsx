"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Playground() {
    const [heat, setHeat] = useState(50);
    const [structure, setStructure] = useState(50);

    return (
        <section id="playground" className="py-24 px-6 bg-void relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1 space-y-8">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-4 border-b border-zinc-border pb-4 inline-block">
                            09. Reactive Playground
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Adjust the <span className="magma-text">Variables.</span>
                        </h3>
                        <p className="mt-6 text-text-secondary text-lg leading-relaxed max-w-xl">
                            Forge is not a static tool. It's a dynamic system. Use the controls to manipulate the base constants and see the interface react.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Heat Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-mono font-bold tracking-widest text-magma-start uppercase">HEAT_LEVEL</span>
                                <span className="text-2xl font-mono text-white tracking-tighter">{heat}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={heat}
                                onChange={(e) => setHeat(parseInt(e.target.value))}
                                className="w-full appearance-none bg-zinc-800 h-1.5 rounded-full accent-magma-start cursor-pointer hover:bg-zinc-700 transition-colors"
                                style={{
                                    background: `linear-gradient(90deg, #FF3D00 ${heat}%, #1F2937 ${heat}%)`
                                }}
                            />
                            <div className="flex justify-between text-[8px] font-mono text-text-secondary uppercase tracking-[0.2em]">
                                <span>Absolute Zero</span>
                                <span>Plasma State</span>
                            </div>
                        </div>

                        {/* Structure Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">STRUCT_STRENGTH</span>
                                <span className="text-2xl font-mono text-white tracking-tighter">{structure}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={structure}
                                onChange={(e) => setStructure(parseInt(e.target.value))}
                                className="w-full appearance-none bg-zinc-800 h-1.5 rounded-full accent-white cursor-pointer hover:bg-zinc-700 transition-colors"
                                style={{
                                    background: `linear-gradient(90deg, #FFFFFF ${structure}%, #1F2937 ${structure}%)`
                                }}
                            />
                            <div className="flex justify-between text-[8px] font-mono text-text-secondary uppercase tracking-[0.2em]">
                                <span>Malleable</span>
                                <span>Reinforced Iron</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visualizer */}
                <div className="flex-1 w-full max-w-xl aspect-square relative">
                    <div className="absolute inset-0 bg-magma-start blur-[120px]" style={{ opacity: heat / 400 }} />
                    <div className="relative w-full h-full forge-glass rounded-3xl border border-zinc-border flex items-center justify-center overflow-hidden">
                        {/* Dynamic SVG Grid Based on Structure and Heat */}
                        <motion.div
                            className="grid gap-4"
                            style={{
                                gridTemplateColumns: `repeat(${Math.floor(structure / 20) + 1}, 1fr)`,
                                opacity: 0.8
                            }}
                        >
                            {Array.from({ length: 16 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-12 h-12 border border-zinc-border/50 rounded flex items-center justify-center bg-void"
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                        scale: [1, 1 + (heat / 500), 1],
                                        borderColor: heat > 80 ? "#FF3D0088" : "#374151"
                                    }}
                                    transition={{
                                        duration: 3 - (heat / 40),
                                        repeat: Infinity,
                                        delay: i * 0.1
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-magma-start" style={{ opacity: heat / 100 }} />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Technical Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-8 backdrop-blur-sm border-t border-zinc-border/30 flex justify-between items-center bg-void/50">
                            <div className="space-y-1">
                                <div className="text-[10px] font-mono text-magma-start uppercase tracking-widest">Compiler_State</div>
                                <div className="text-lg font-bold text-white tracking-tight">
                                    {heat > 90 ? "SUPERCRITICAL" : heat > 50 ? "ACTIVE_REACTION" : "STABLE_IDLE"}
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded border border-zinc-border flex items-center justify-center font-mono text-xs text-text-secondary">
                                {Math.floor(heat * 23.4)}K
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
