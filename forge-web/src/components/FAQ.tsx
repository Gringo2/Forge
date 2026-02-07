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
            q: "What is the 'Heat' metaphor?",
            a: "Heat represents the thermodynamic transformation of static logic into reactive matter. It is the core kinetic engine that drives our 'Iron' layout algorithm. High heat correlates with complex state transitions and high-frequency UI updates."
        },
        {
            id: "Q.003",
            q: "Is Forge compliant with industrial standards?",
            a: "Forge is natively built for the System Zero ecosystem, adhering to strict 'Iron' structural protocols. It supports high-integrity exports to standard web and mobile stacks while maintaining sub-millisecond latency in state propagation."
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
