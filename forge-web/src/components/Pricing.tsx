"use client";

import { motion } from "framer-motion";

export default function Pricing() {
    const contracts = [
        {
            name: "DEVELOPER_LICENSE",
            model: "NODE_LOCKED",
            spec: "Indiv. Research Environment",
            terms: ["1x Project Context", "Local Runtime Only", "Standard Reactivity", "Void Export Access"],
            cta: "Acquire License",
            highlight: false
        },
        {
            name: "INDUSTRIAL_CONTRACT",
            model: "TEAM_WIDE",
            spec: "Production Grade Tools",
            terms: ["∞ Project Context", "Compiling Cloud Sync", "Advanced Heat Vectoring", "High-Priority Transmission"],
            cta: "Execute Contract",
            highlight: true
        },
        {
            name: "INFRASTRUCTURE_PARTNER",
            model: "ECOSYSTEM_WIDE",
            spec: "Deep-Scale Integration",
            terms: ["Proprietary Compilers", "99.9% Up-time SLA", "Thermal Recovery Support", "On-Prem Transmission"],
            cta: "Establish Link",
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-24 px-6 bg-surface relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16 border-b border-zinc-border pb-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary">
                        05. License Acquisition & Deployment
                    </h2>
                    <span className="font-mono text-[10px] text-magma-start">CONTRACT_REV: 2026.4.1</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contracts.map((contract, idx) => (
                        <PricingCard key={idx} contract={contract} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}



function PricingCard({ contract, index }: { contract: any, index: number }) {
    return (
        <motion.div
            className={`relative flex flex-col p-8 rounded-2xl border ${contract.highlight ? 'border-magma-start bg-magma-start/5' : 'border-zinc-border bg-void'} transition-all group overflow-hidden`}
            whileHover={{ y: -5 }}
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/assets/noise.png')" }} />
            <div className={`absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-bl from-magma-start to-transparent rounded-bl-full`} />

            <div className="mb-8 font-mono relative z-10">
                <div className="text-[10px] text-text-secondary mb-1 flex justify-between">
                    <span>TYPE: {contract.model}</span>
                    <span className={`w-2 h-2 rounded-full ${contract.highlight ? "bg-magma-start animate-pulse" : "bg-zinc-800"}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tighter">{contract.name}</h3>
                <p className="text-xs text-magma-start uppercase tracking-widest">{contract.spec}</p>
            </div>

            <div className="h-px bg-zinc-border/30 w-full mb-8" />

            <ul className="flex-1 flex flex-col gap-4 mb-12 relative z-10">
                {contract.terms.map((term: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-center gap-3 text-[10px] font-mono text-text-secondary uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 border border-zinc-border group-hover:border-magma-start transition-colors bg-void" />
                        {term}
                    </li>
                ))}
            </ul>

            <button className={`btn-forge py-4 text-xs font-bold uppercase tracking-[0.3em] font-mono relative overflow-hidden group/btn ${contract.highlight ? 'magma-bg text-void shadow-[0_0_20px_rgba(255,61,0,0.4)]' : 'bg-surface border border-zinc-border text-white hover:border-magma-start'}`}>
                <span className="relative z-10 group-hover/btn:hidden">[ {contract.cta} ]</span>
                <span className="relative z-10 hidden group-hover/btn:inline-block animate-pulse">&gt;&gt; INITIALIZE_TRANSACTION</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </button>
        </motion.div>
    );
}
