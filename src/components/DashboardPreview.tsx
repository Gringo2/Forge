"use client";

import React, { useEffect, useState } from "react";
import { useSystem } from "@/context/SystemContext";
import { motion } from "framer-motion";

export default function DashboardPreview() {
    const { heat } = useSystem();
    const [activeShape, setActiveShape] = useState<"rect" | "circle" | "text">("rect");
    const [codeLines, setCodeLines] = useState<string[]>([]);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [logs, setLogs] = useState<string[]>(["[SYS] COMPILER_IDLE", "[SYS] READY_FOR_INPUT"]);

    const handleCanvasMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({
            x: Math.floor(e.clientX - rect.left),
            y: Math.floor(e.clientY - rect.top)
        });
    };

    // Simulate code generation based on active shape
    useEffect(() => {
        const shapeToCode = {
            rect: [
                '<Button',
                '  className="px-4 py-2 rounded-lg"',
                '  variant="primary"',
                '>',
                '  Click Me',
                '</Button>'
            ],
            circle: [
                '<Avatar',
                '  size="md"',
                '  src="/user.png"',
                '  className="rounded-full"',
                '/>'
            ],
            text: [
                '<Text',
                '  variant="heading"',
                '  className="text-2xl font-bold"',
                '>',
                '  Hello World',
                '</Text>'
            ]
        };

        setCodeLines(shapeToCode[activeShape]);

        // Add compile log
        setLogs(prev => [
            ...prev.slice(-3),
            `[COMP] ${activeShape.toUpperCase()}_EMISSION_START`,
            `[IR] NODES_GENERATED: ${Math.floor(Math.random() * 50 + 20)}`,
            `[SYS] EMIT_SUCCESS`
        ]);
    }, [activeShape]);

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
                <div className="text-[10px] uppercase font-mono text-text-secondary tracking-widest flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-magma-start animate-pulse" />
                        Vector_Engine.forge
                    </div>
                    <div className="px-2 py-0.5 border border-magma-start/30 text-magma-start text-[8px] font-black rounded bg-magma-start/5 animate-pulse">
                        AI_SYNTHESIS_ACTIVE
                    </div>
                </div>
                <div className="w-8" />
            </div>

            {/* Main Split View */}
            <div className="flex-1 flex overflow-hidden relative z-30">
                {/* LEFT: Vector Canvas Simulator */}
                <div
                    className="flex-1 bg-[#0D0E11] relative overflow-hidden border-r border-zinc-border cursor-crosshair"
                    onMouseMove={handleCanvasMouseMove}
                >
                    {/* Canvas Grid */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
                            {Array.from({ length: 144 }).map((_, i) => (
                                <div key={i} className="border-[0.5px] border-zinc-700" />
                            ))}
                        </div>
                    </div>

                    <div className="absolute top-4 left-4 flex gap-6 items-center">
                        <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                            VECTOR_CANVAS
                        </div>
                        <div className="text-[9px] font-mono text-magma-start flex gap-3">
                            <span>X: {coords.x}</span>
                            <span>Y: {coords.y}</span>
                        </div>
                    </div>

                    {/* Shape Toolbar */}
                    <div className="absolute top-4 right-4 flex gap-2 bg-surface/80 backdrop-blur-sm border border-zinc-border/50 rounded-lg p-2">
                        <button
                            onClick={() => setActiveShape("rect")}
                            className={`w-8 h-8 rounded flex items-center justify-center transition-all ${activeShape === "rect"
                                ? "bg-magma-start text-void"
                                : "bg-void text-zinc-500 hover:text-white"
                                }`}
                        >
                            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="3" width="10" height="10" rx="2" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setActiveShape("circle")}
                            className={`w-8 h-8 rounded flex items-center justify-center transition-all ${activeShape === "circle"
                                ? "bg-magma-start text-void"
                                : "bg-void text-zinc-500 hover:text-white"
                                }`}
                        >
                            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="8" cy="8" r="5" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setActiveShape("text")}
                            className={`w-8 h-8 rounded flex items-center justify-center transition-all ${activeShape === "text"
                                ? "bg-magma-start text-void"
                                : "bg-void text-zinc-500 hover:text-white"
                                }`}
                        >
                            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M4 3h8M8 3v10M6 13h4" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Drawn Shape */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            key={activeShape}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            {activeShape === "rect" && (
                                <div className="w-32 h-16 rounded-lg border-2 border-magma-start bg-magma-start/10 flex items-center justify-center">
                                    <span className="text-xs text-white font-medium">Button</span>
                                </div>
                            )}
                            {activeShape === "circle" && (
                                <div className="w-24 h-24 rounded-full border-2 border-blue-500 bg-blue-500/10 flex items-center justify-center">
                                    <span className="text-xs text-white font-medium">Avatar</span>
                                </div>
                            )}
                            {activeShape === "text" && (
                                <div className="text-2xl font-bold text-white">
                                    Hello World
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Compilation Arrow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-50">
                        <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-8 h-8 rounded-full bg-magma-start flex items-center justify-center shadow-[0_0_20px_rgba(255,61,0,0.5)]"
                        >
                            <svg viewBox="0 0 16 16" className="w-4 h-4 text-void" fill="currentColor">
                                <path d="M6 3l6 5-6 5V3z" />
                            </svg>
                        </motion.div>
                    </div>
                </div>

                {/* RIGHT: Generated Code */}
                <div className="flex-1 bg-[#0D0E11] p-6 font-mono text-xs text-text-secondary leading-loose overflow-hidden relative">
                    <div className="absolute top-4 right-4 text-zinc-700 select-none text-[9px] uppercase tracking-widest">
                        REACT_OUTPUT
                    </div>

                    <motion.div
                        key={activeShape}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {codeLines.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="mb-1"
                            >
                                {line.includes("<") ? (
                                    <>
                                        <span className="text-zinc-600">{line.match(/^\s*/)?.[0]}</span>
                                        <span className="text-blue-400">{line.match(/<\/?[A-Z][a-zA-Z]*/)?.[0]}</span>
                                        <span className="text-purple-400">{line.match(/\s+\w+=/g)?.join("")}</span>
                                        <span className="text-green-400">{line.match(/"[^"]*"/g)?.join("")}</span>
                                        <span className="text-white">{line.match(/[>{}]/g)?.join("")}</span>
                                    </>
                                ) : (
                                    <span className="text-zinc-400">{line}</span>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="w-1.5 h-4 bg-magma-start inline-block ml-1 shadow-[0_0_8px_rgba(255,61,0,0.8)]"
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                    />

                    {/* Live Logs Overlay */}
                    <div className="absolute bottom-4 left-6 right-6">
                        <div className="flex flex-col gap-1">
                            {logs.map((log, i) => (
                                <div key={i} className="text-[8px] font-mono text-zinc-600 uppercase tracking-tight flex gap-2">
                                    <span className="text-zinc-800">[{1240 + i}]</span>
                                    <span className={log.includes("SUCCESS") ? "text-magma-start" : ""}>{log}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="h-8 border-t border-zinc-border bg-surface/50 backdrop-blur-sm px-4 flex items-center justify-between text-[9px] font-mono text-zinc-500 uppercase tracking-widest relative z-30">
                <div className="flex items-center gap-4">
                    <span className="text-magma-start">● COMPILING</span>
                    <span>SHAPE: {activeShape.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>HEAT: {heat}%</span>
                    <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-magma-start transition-all duration-300"
                            style={{ width: `${heat}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
