export default function BentoGrid() {
    const features = [
        {
            title: "Reactive Logic",
            description: "Define interface state that compiles into pure reactive streams.",
            className: "md:col-span-2 md:row-span-2",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-magma-start" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
        },
        {
            title: "Strict Structure",
            description: "Iron-clad component hierarchies that never leak.",
            className: "md:col-span-1 md:row-span-2",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-iron-light" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                </svg>
            ),
        },
        {
            title: "Heat Transformation",
            description: "Instant hot-module compilation for immediate visual feedback.",
            className: "md:col-span-1 md:row-span-1",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-magma-end" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 12h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                </svg>
            ),
        },
        {
            title: "Assembly Engine",
            description: "Proprietary layout engine optimized for deterministic rendering.",
            className: "md:col-span-2 md:row-span-1",
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v19M5 8l14 8M19 8L5 16" />
                </svg>
            ),
        },
    ];

    return (
        <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-12 border-b border-zinc-border pb-4">
                01. Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className={`forge-glass p-8 rounded-2xl flex flex-col justify-between hover:border-magma-start transition-colors group ${feature.className}`}
                    >
                        <div>
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-xs font-bold text-magma-start opacity-0 group-hover:opacity-100 transition-opacity">
                            Explore Module <span className="text-lg">→</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
