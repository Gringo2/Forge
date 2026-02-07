export default function Pricing() {
    const tiers = [
        {
            name: "Iron Worker",
            price: "$0",
            description: "For individual engineers building structural experiments.",
            features: ["Single Project", "Local Compilation", "Basic Reactivity", "Void Export"],
            cta: "Start Building",
            highlight: false
        },
        {
            name: "Industrial",
            price: "$49",
            description: "Professional grade tools for production interface teams.",
            features: ["Unlimited Projects", "Cloud Refinement", "Advanced Heat Logic", "Priority Transmission"],
            cta: "Get Licensed",
            highlight: true
        },
        {
            name: "Infrastructure",
            price: "Custom",
            description: "Deep-scale integration for ecosystem-wide deployments.",
            features: ["Custom Engines", "99.9% Up-time SLA", "24/7 Heat Support", "On-Prem Transmission"],
            cta: "Contact Ops",
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-24 px-6 bg-surface">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-16 border-b border-zinc-border pb-4">
                    05. Licensing Tiers
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col p-8 rounded-2xl border ${tier.highlight ? 'border-magma-start bg-magma-start/5' : 'border-zinc-border bg-void'} transition-transform hover:-translate-y-2`}
                        >
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">{tier.description}</p>
                            </div>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-black text-white">{tier.price}</span>
                                {tier.price !== "Custom" && <span className="text-text-secondary font-mono text-xs">/monthly</span>}
                            </div>

                            <ul className="flex-1 flex flex-col gap-4 mb-12">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-sm text-text-secondary">
                                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-magma-start shrink-0">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn-forge py-4 text-xs font-bold uppercase tracking-widest ${tier.highlight ? 'magma-bg text-void' : 'bg-surface border border-zinc-border text-white hover:border-magma-start'}`}>
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
