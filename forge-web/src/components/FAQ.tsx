"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
    const faqs = [
        {
            q: "Why use a compiler for interfaces?",
            a: "Traditional tools treat design as drawing. Forge treats it as system coordination. By compiling specifications, we ensure perfect reactivity and structural integrity across all viewports."
        },
        {
            q: "What is the 'Heat' metaphor?",
            a: "Heat represents transformation. It's the engine that takes logic and projects it into a visual frame. High heat means high energy, complex interactions, and rapid transformation."
        },
        {
            q: "Does Forge support legacy web stacks?",
            a: "Forge is built for the System Zero ecosystem. While it can export to standard Void frameworks, it performs best when integrated with Iron-compliant engines."
        }
    ];

    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-12 border-b border-zinc-border pb-4">
                08. System Queries
            </h2>

            <div className="flex flex-col gap-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-zinc-border rounded-xl bg-surface/50 overflow-hidden">
                        <button
                            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-surface transition-colors"
                        >
                            <span className="text-white font-bold text-sm tracking-tight">{faq.q}</span>
                            <span className={`text-magma-start transition-transform ${openIdx === idx ? 'rotate-45' : ''}`}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </span>
                        </button>
                        <AnimatePresence>
                            {openIdx === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-text-secondary text-sm leading-relaxed border-t border-zinc-border/30 mx-6 mt-0">
                                        {faq.a}
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
