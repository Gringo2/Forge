"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
    const faqs = [
        {
            id: "Q.001",
            q: "Why use a compiler for interfaces?",
            a: "Traditional tools treat design as drawing. Forge treats it as system coordination. By compiling specifications into a binary-first structural logic, we ensure zero-drift synchronization across React, React Native, and Flutter targets."
        },
        {
            id: "Q.002",
            q: "Is this a design tool?",
            a: "Yes. Forge integrates a pro-grade vector editor. Unlike traditional tools, your drawings are treated as structural logic and compiled instantly to React, SwiftUI, and Compose."
        },
        {
            id: "Q.003",
            q: "How does Forge handle complex UI states?",
            a: "Forge uses a high-performance reactivity engine that treats complex state transitions as kinetic energy. The higher the layout complexity, the more the engine prioritizes deterministic rendering and state synchronization to ensure a glitch-free interface."
        },
        {
            id: "Q.004",
            q: "How is this different from Figma or Penpot?",
            a: "Figma and Penpot are design tools that export assets. Forge is a design tool that compiles code. Your drawings become the actual source of truth for your React, SwiftUI, and Compose components—no handoff, no drift."
        },
        {
            id: "Q.005",
            q: "Can I use Forge with custom component libraries?",
            a: "Absolutely. Forge is built with extensibility at its core. You can define custom mapping rules for your own UI primitives, ensuring that your unique design system is compiled exactly as intended across all platforms."
        },
        {
            id: "Q.006",
            q: "How does Forge handle sensitive enterprise data?",
            a: "Forge can be fully containerized and deployed on-prem. All compilation happens locally within your secure infrastructure. We do not ingest or transmit your proprietary vector data to external servers."
        },
        {
            id: "Q.007",
            q: "Can Forge handle large-scale design systems?",
            a: "Yes. Forge is built for high-scale token management and component orchestration. It and can handle thousands of nodes with sub-millisecond latency, ensuring your massive design system remains performant during compilation."
        },
        {
            id: "Q.008",
            q: "Does Forge require an internet connection?",
            a: "No. The Forge compiler operates entirely offline. Once licensed, you can design and emit code in air-gapped environments, ensuring maximum security and zero dependency on cloud availability."
        }
    ];

    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 px-6 max-w-4xl mx-auto relative">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-text-secondary border-b border-zinc-border/30 pb-4 mb-2">
                    08. System Queries
                </h2>
                <div className="text-zinc-600 font-mono text-[8px] uppercase tracking-widest">PEER_TO_PEER_DISSOLUTION</div>
            </div>

            <div className="flex flex-col gap-6">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="group border border-zinc-border/50 rounded-2xl bg-surface/30 backdrop-blur-sm overflow-hidden transition-all hover:border-magma-start/30">
                        <button
                            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-8 text-left transition-colors relative"
                        >
                            <div className="flex items-center gap-6">
                                <span className="font-mono text-xs text-magma-start opacity-50 group-hover:opacity-100 transition-opacity">
                                    [{faq.id}]
                                </span>
                                <span className="text-white font-bold text-base tracking-tight group-hover:text-magma-text transition-colors">{faq.q}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`text-[8px] font-mono font-bold tracking-widest uppercase transition-all duration-500 ${openIdx === idx ? "text-magma-start opacity-100" : "text-zinc-600 opacity-0 transform translate-x-4"}`}>
                                    STATUS: RESOLVED
                                </span>
                                <span className={`text-magma-start transition-transform duration-500 ${openIdx === idx ? 'rotate-135' : ''}`}>
                                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </span>
                            </div>
                        </button>
                        <AnimatePresence>
                            {openIdx === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-8 pb-8 text-zinc-400 text-sm leading-relaxed font-medium">
                                        <div className="pl-6 border-l border-magma-start/30">
                                            {faq.a}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
