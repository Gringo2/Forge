"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-magma-start/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
                        THE END OF HANDOFF. <br />
                        <span className="magma-text">THE START OF EMISSION.</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        The start and end of your UI lifecycle. Design your product intent and emit directly into your repository. Eliminate translation drift forever.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="relative group w-full md:w-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-magma-start to-magma-end rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                        <input
                            type="email"
                            placeholder="operator@systemzero.io"
                            className="relative w-full md:w-80 bg-surface border border-zinc-border px-6 py-4 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-magma-start transition-all font-mono text-sm"
                        />
                    </div>
                    <button className="btn-forge magma-bg text-void font-bold uppercase tracking-[0.2em] px-10 py-4 rounded-xl text-sm shadow-[0_0_40px_rgba(255,61,0,0.3)] hover:shadow-[0_0_60px_rgba(255,61,0,0.5)] transition-all">
                        Initialize Access
                    </button>
                </div>

                <div className="pt-12 flex flex-wrap justify-center gap-x-12 gap-y-6">
                    <div className="flex items-center gap-2 group cursor-default">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-magma-start transition-colors" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors text-zinc-500">Secure Protocol v2.4</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-default">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-magma-start transition-colors" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors text-zinc-500">Encrypted Metadata</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-default">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-magma-start transition-colors" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors text-zinc-500">Coordinate-Driven Design</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
