"use client";

import React, { useEffect, useState, useRef } from "react";
import { useSystem } from "@/context/SystemContext";
import { motion } from "framer-motion";

export default function DashboardPreview() {
    const { heat } = useSystem();
    const [lines, setLines] = useState<string[]>([
        "> FORGE_COMPILER_V3_INIT",
        "> LOADING_MODULES...",
        "> CORE_SERVICES: OK",
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Terminal Typewriter Effect
    useEffect(() => {
        const interval = setInterval(() => {
            const msgs = [
                `> OPTIMIZING_ROUTE: 0x${Math.floor(Math.random() * 9999).toString(16)}`,
                `> HEAT_DISSIPATION: ${heat}%`,
                "> COMPILING_TARGET: REACT_NATIVE",
                "> COMPILING_TARGET: FLUTTER",
                "> SYNCING_NODES...",
                `> ALLOCATING_MEMORY: ${Math.floor(Math.random() * 500)}MB`
            ];
            const newMsg = msgs[Math.floor(Math.random() * msgs.length)];

            setLines(prev => {
                const newLines = [...prev, newMsg];
                if (newLines.length > 8) return newLines.slice(1);
                return newLines;
            });

        }, 1200 - (heat * 10)); // Speed up with heat

        return () => clearInterval(interval);
    }, [heat]);

    // Auto-scroll terminal
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div className="w-full h-full bg-void rounded-xl border border-zinc-border overflow-hidden flex flex-col shadow-2xl relative group/dashboard">
            {/* Glass Reflection Overlay */}
            <div className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/dashboard:opacity-100 transition-opacity duration-700" />

            {/* Window Header */}
            <div className="h-8 bg-surface border-b border-zinc-border flex items-center px-4 justify-between relative z-40">
                <div className="flex gap-2 group/controls">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover/controls:bg-red-500 transition-colors duration-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover/controls:bg-yellow-500 transition-colors duration-300 delay-75" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover/controls:bg-green-500 transition-colors duration-300 delay-150" />
                </div>
                <div className="text-[10px] uppercase font-mono text-text-secondary tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-magma-start animate-pulse" />
                    Forge_Studio.exe
                </div>
                <div className="w-8" />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden relative z-30">
                {/* Sidebar */}
                <div className="w-12 border-r border-zinc-border flex flex-col items-center py-4 gap-4 bg-surface/50">
                    {["F", "P", "A", "S"].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-lg bg-surface border border-zinc-border flex items-center justify-center text-[10px] text-text-secondary font-mono hover:text-magma-start hover:border-magma-start cursor-pointer transition-colors relative group/icon">
                            {i}
                            <div className="absolute left-full ml-2 px-2 py-1 bg-zinc-800 text-white text-[9px] rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                                Module {i}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Code Editor */}
                <div className="flex-1 bg-[#0D0E11] p-6 font-mono text-[10px] md:text-xs text-text-secondary leading-loose overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-2 text-zinc-700 select-none text-[9px]">MODE: READ_ONLY</div>
                    <span className="text-magma-start">import</span> Forge <span className="text-magma-start">from</span> <span className="text-green-500">'@sys-zero/forge'</span>;
                    <br />
                    <br />
                    <span className="text-blue-400">export default</span> <span className="text-magma-start">function</span> <span className="text-yellow-400">Interface</span>() {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-magma-start">const</span> heat = <span className="text-purple-400">useThermalState</span>();
                    <br />
                    &nbsp;&nbsp;<span className="text-magma-start">return</span> (
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;{"<"}<span className="text-yellow-400">Container</span> heat={"{"}heat{"}"}{">"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<"}<span className="text-yellow-400">StructuralGrid</span> / {">"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<"}<span className="text-yellow-400">Emitter</span> intensity={"{"}<span className="text-blue-400">0.8</span>{"}"} / {">"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;{"</"}<span className="text-yellow-400">Container</span>{">"}
                    <br />
                    &nbsp;&nbsp;);
                    <br />
                    {"}"}
                    <motion.div
                        className="w-1.5 h-4 bg-magma-start inline-block ml-1 shadow-[0_0_8px_rgba(255,61,0,0.8)]"
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                    />
                </div>

                {/* Visual Preview (Right Split) */}
                <div className="w-1/3 border-l border-zinc-border bg-surface relative overflow-hidden hidden md:block group/graph">
                    <div className="absolute inset-0 bg-void/50 grid grid-cols-6 grid-rows-6 opacity-30">
                        {Array.from({ length: 36 }).map((_, i) => (
                            <div key={i} className="border-[0.5px] border-zinc-border/10" />
                        ))}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            <motion.div
                                className="w-20 h-20 rounded-xl border border-magma-start bg-magma-start/10 backdrop-blur-sm"
                                animate={{ scale: [1, 1.05, 1], rotate: heat > 90 ? [0, 2, -2, 0] : 0 }}
                                transition={{ duration: 2 - (heat / 100) }}
                            />
                            {/* Connecting Nodes */}
                            <div className="absolute -top-12 left-1/2 w-0.5 h-12 bg-zinc-border -translate-x-1/2" />
                            <div className="absolute -bottom-12 left-1/2 w-0.5 h-12 bg-zinc-border -translate-x-1/2" />

                            <motion.div
                                className="absolute -top-14 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover/graph:scale-150 transition-transform"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Terminal */}
            <div className="h-32 border-t border-zinc-border bg-[#0D0E11] p-3 font-mono text-[9px] text-zinc-400 overflow-y-auto relative z-30" ref={scrollRef}>
                {lines.map((line, i) => (
                    <div key={i} className="mb-1 border-l-2 border-transparent hover:border-zinc-700 pl-2 transition-colors">{line}</div>
                ))}
                <div className="animate-pulse text-magma-start">_</div>
            </div>
        </div>
    );
}
