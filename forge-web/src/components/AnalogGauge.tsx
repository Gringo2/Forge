"use client";

import { motion } from "framer-motion";

interface AnalogGaugeProps {
    value: number;
    label: string;
    max?: number;
}

export default function AnalogGauge({ value, label, max = 100 }: AnalogGaugeProps) {
    const percentage = (value / max) * 100;
    const rotation = (percentage / 100) * 180 - 90; // -90 to 90 degrees

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-24 h-12 overflow-hidden">
                {/* Gauge Background */}
                <div className="absolute inset-0 border-[3px] border-zinc-border rounded-t-full border-b-0" />

                {/* Needle */}
                <motion.div
                    className="absolute bottom-0 left-1/2 w-0.5 h-10 bg-magma-start origin-bottom"
                    animate={{ rotate: rotation }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                />

                {/* Center Point */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-border border border-void" />

                {/* Scale Markers */}
                <div className="absolute inset-0 flex justify-between px-1 items-end pb-1 opacity-30 text-[6px] font-mono text-white">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                </div>
            </div>
            <div className="space-y-1 text-center">
                <div className="text-[8px] font-mono uppercase tracking-[0.2em] text-zinc-500">{label}</div>
                <div className="text-xs font-mono text-white font-bold tracking-tighter">{value.toFixed(1)}</div>
            </div>
        </div>
    );
}
