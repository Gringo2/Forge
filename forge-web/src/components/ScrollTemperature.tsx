"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollTemperature() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-[60] flex items-center">
            <motion.div
                className="h-full bg-magma-start shadow-[0_0_10px_var(--magma-start)]"
                style={{ scaleX, transformOrigin: "0%" }}
            />
            <div className="absolute top-4 right-6 flex items-center gap-2 px-2 py-1 rounded border border-zinc-border bg-void/80 backdrop-blur-sm pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full bg-magma-start animate-pulse" />
                <span className="font-mono text-[8px] text-text-secondary uppercase tracking-widest leading-none">
                    HEAT_LEVEL
                </span>
            </div>
        </div>
    );
}
