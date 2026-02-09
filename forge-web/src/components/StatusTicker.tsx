"use client";

import { motion } from "framer-motion";
import { useSystem } from "@/context/SystemContext";
import { useEffect, useState } from "react";

export default function StatusTicker() {
    const { heat } = useSystem();
    const duration = 40 - (heat / 4); // Range: 40s (cool) to 15s (hot)

    // Simulated Live Metrics
    const [stats, setStats] = useState({
        vectors: 1245890,
        compiles: 432,
        uptime: 99.998
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                vectors: prev.vectors + Math.floor(Math.random() * 50),
                compiles: prev.compiles + (Math.random() > 0.7 ? 1 : 0),
                uptime: prev.uptime
            }));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const messages = [
        `GLOBAL_VECTORS: ${stats.vectors.toLocaleString()}`,
        `ACTIVE_COMPILES: ${stats.compiles}`,
        `SYSTEM_STATUS: NOMINAL`,
        `UPTIME_SLA: ${stats.uptime}%`,
        "TARGET_SYNC: REACT_NATIVE_v0.74",
        "ARCH: ARM64_OPTIMIZED",
        "BUILD_QUEUE: CLEAR",
    ];

    return (
        <div className="w-full bg-surface border-y border-zinc-border/50 py-2 overflow-hidden flex items-center relative z-20">
            <motion.div
                className="flex gap-12 whitespace-nowrap px-12"
                animate={{ x: [0, -1000] }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {[...messages, ...messages, ...messages].map((msg, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-magma-start shadow-[0_0_5px_var(--magma-start)] ${heat > 90 ? "animate-ping" : "opacity-70"}`} />
                        <span
                            className="font-mono text-[9px] uppercase tracking-[0.2em] transition-colors duration-500"
                            style={{ color: heat > 80 ? "#FF3D00" : "#71717a" }}
                        >
                            {msg}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
