"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
    const transmissions = [
        {
            id: "TR_8829",
            source: "ELIAS_VANCE",
            role: "DIR_UI_INFRA",
            org: "NEXUS_CORE",
            packet: "Forge is the first tool that treats interface design with the same rigor as systems programming. The reactive streams are unmatched.",
            latency: "12ms"
        },
        {
            id: "TR_9910",
            source: "SARAH_JENKS",
            role: "FOUNDER",
            org: "HEAT_STACK",
            packet: "No more artboards. No more guesswork. We compile our specs directly to the edge. Deterministic IR compilation is the future.",
            latency: "8ms"
        },
        {
            id: "TR_1102",
            source: "MARCUS_THORNE",
            role: "SYS_OP",
            org: "VECTOR_DYN",
            packet: "Structural integrity finally comes to the frontend. The Iron Engine caught three critical layout leaks using semantic geometry parsing.",
            latency: "24ms"
        }
    ];

    return (
        <section className="py-32 px-6 bg-void max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-border pb-4 gap-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-text-secondary">
                    06. FIELD TRANSMISSIONS
                </h2>
                <div className="font-mono text-[9px] text-zinc-500 flex gap-6">
                    <span>ENCRYPTION: AES_256</span>
                    <span className="text-magma-start animate-pulse">LIVE_FEED_ACTIVE</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {transmissions.map((tr, idx) => (
                    <motion.div
                        key={idx}
                        className="group relative bg-surface border border-zinc-border/50 p-6 rounded-sm hover:border-magma-start/50 transition-colors overflow-hidden"
                        whileHover={{ y: -5 }}
                    >
                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none" />

                        {/* Header ID */}
                        <div className="flex justify-between items-center mb-6 border-b border-zinc-border/30 pb-2">
                            <span className="font-mono text-[9px] text-magma-start tracking-widest">{tr.id}</span>
                            <span className="font-mono text-[9px] text-zinc-600">LAT: {tr.latency}</span>
                        </div>

                        {/* Content Packet */}
                        <p className="font-mono text-xs text-text-primary leading-relaxed mb-8 opacity-80">
                            &quot;{tr.packet}&quot;
                        </p>

                        {/* Source Metadata */}
                        <div className="mt-auto">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-1 h-1 bg-magma-start rounded-full" />
                                <span className="font-bold text-xs text-white uppercase tracking-wider">{tr.source}</span>
                            </div>
                            <div className="text-[9px] text-zinc-500 font-mono pl-3">
                                {tr.role} @ {tr.org}
                            </div>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-500 opacity-20 group-hover:opacity-100 group-hover:border-magma-start transition-all" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-500 opacity-20 group-hover:opacity-100 group-hover:border-magma-start transition-all" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
