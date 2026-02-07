"use client";

import { motion } from "framer-motion";
import { useSystem } from "@/context/SystemContext";

export default function StatusTicker() {
    const { heat } = useSystem();
    const duration = 40 - (heat / 4); // Range: 40s (cool) to 15s (hot)

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
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {[...messages, ...messages].map((msg, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-magma-start shadow-[0_0_5px_var(--magma-start)] ${heat > 90 ? "animate-ping" : ""}`} />
                        <span
                            className="font-mono text-[9px] uppercase tracking-[0.2em] transition-colors duration-500"
                            style={{ color: heat > 80 ? "#FF3D00" : "#8b949e" }}
                        >
                            {msg}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
