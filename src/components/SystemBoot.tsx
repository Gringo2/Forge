"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSystem } from "@/context/SystemContext";

export default function SystemBoot({ onBootComplete }: { onBootComplete: () => void }) {
    const { setHeat, setStructure } = useSystem();
    const [bootStep, setBootStep] = useState(0);

    const bootSequence = [
        "INITIALIZING_KERNEL...",
        "LOADING_THERMAL_MODULES...",
        "VERIFYING_STRUCTURAL_INTEGRITY...",
        "ESTABLISHING_UPLINK...",
        "SYSTEM_READY"
    ];

    useEffect(() => {
        const runBoot = async () => {
            // Reset system state
            setHeat(0);
            setStructure(0);

            // Step 1: Kernel Init
            await new Promise(r => setTimeout(r, 600));
            setBootStep(1);

            // Step 2: Thermal Ramp Up
            await new Promise(r => setTimeout(r, 800));
            setBootStep(2);
            setHeat(50); // Restore default heat

            // Step 3: Structural Verification
            await new Promise(r => setTimeout(r, 800));
            setBootStep(3);
            setStructure(50); // Restore default structure

            // Step 4: Uplink
            await new Promise(r => setTimeout(r, 600));
            setBootStep(4);

            // Complete
            await new Promise(r => setTimeout(r, 400));
            onBootComplete();
        };

        runBoot();
    }, [setHeat, setStructure, onBootComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-void flex items-center justify-center font-mono text-xs"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="w-64 space-y-4">
                <div className="flex justify-between border-b border-zinc-border/30 pb-2 mb-4">
                    <span className="text-text-secondary">FORGE_BIOS_v3.0</span>
                    <span className="text-magma-start animate-pulse">● BOOTING</span>
                </div>

                <div className="space-y-1">
                    {bootSequence.map((msg, idx) => (
                        <div key={idx} className={`${idx <= bootStep ? "opacity-100" : "opacity-0"} transition-opacity duration-200 flex items-center gap-2`}>
                            <span className="text-magma-start">{idx < bootStep ? "✓" : ">"}</span>
                            <span className={idx === bootStep ? "text-white animate-pulse" : "text-text-secondary"}>
                                {msg}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="h-1 bg-zinc-border/30 mt-8 overflow-hidden rounded-full">
                    <motion.div
                        className="h-full bg-magma-start"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(bootStep / (bootSequence.length - 1)) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                <div className="text-[8px] text-zinc-600 uppercase pt-2">
                    Memory Check: 32GB OK | Threads: 16 OK | GPU: ACTIVE
                </div>
            </div>
        </motion.div>
    );
}
