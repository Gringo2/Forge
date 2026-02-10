"use client";

import React, { useState } from "react";
import { useSystem } from "@/context/SystemContext";
import { motion, AnimatePresence } from "framer-motion";

export default function StructuralInsight() {
    const { heat, structure } = useSystem();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-mono">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 rounded-full border border-zinc-border bg-surface flex items-center justify-center text-text-secondary hover:text-magma-start hover:border-magma-start transition-all shadow-2xl"
                title="SYS_METRICS"
            >
                {isOpen ? "×" : "Σ"}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-16 right-0 w-64 forge-glass p-6 text-[10px] space-y-4 border border-zinc-border"
                    >
                        <div className="border-b border-zinc-border/30 pb-2 flex justify-between">
                            <span className="text-text-secondary uppercase">SYS_INSIGHT v4</span>
                            <span className="text-magma-start animate-pulse">● LIVE</span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-text-secondary">HEAT_VECTOR</span>
                                <span className="text-white">{heat.toFixed(4)}</span>
                            </div>
                            <div className="w-full h-1 bg-zinc-border/30">
                                <div className="h-full bg-magma-start transition-all duration-300" style={{ width: `${heat}%` }} />
                            </div>

                            <div className="flex justify-between">
                                <span className="text-text-secondary">STRUCT_STRENGTH</span>
                                <span className="text-white">{structure.toFixed(4)}</span>
                            </div>
                            <div className="w-full h-1 bg-zinc-border/30">
                                <div className="h-full bg-white transition-all duration-300" style={{ width: `${structure}%` }} />
                            </div>
                        </div>

                        <div className="pt-2 border-t border-zinc-border/30 text-[8px] space-y-1 opacity-50">
                            <div>MEMORY: [ALLOC: 1.2GB/8GB]</div>
                            <div>THREADS: [POOL: 12]</div>
                            <div>COMPILER: [IDLE]</div>
                        </div>

                        <div className="text-[7px] text-zinc-500 uppercase leading-tight">
                            Critical safety protocols operational. Structural integrity verified against forge benchmark 0xAF.
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
