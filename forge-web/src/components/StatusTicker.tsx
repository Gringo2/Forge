"use client";

import { motion } from "framer-motion";

export default function StatusTicker() {
    const messages = [
        "LOG: COMPILER_READY",
        "TEMP: 1450K (STABLE)",
        "MODULE: IRON_STORAGE (OK)",
        "ENGINE: REACTIVE_SYMMETRY_CORE_v4.2",
        "TRANS: HEAT_VECTOR_0xAF32",
        "STATUS: RADIATING...",
        "OPS: SYSTEM_ZERO_LINK_ACTIVE",
        "MEM: 12.4GB TOTAL/STRUCT",
    ];

    return (
        <div className="w-full bg-surface border-y border-zinc-border/50 py-2 overflow-hidden flex items-center">
            <motion.div
                className="flex gap-12 whitespace-nowrap px-12"
                animate={{ x: [0, -1000] }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {[...messages, ...messages].map((msg, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-magma-start shadow-[0_0_5px_var(--magma-start)]" />
                        <span className="font-mono text-[9px] text-text-secondary uppercase tracking-[0.2em]">
                            {msg}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
