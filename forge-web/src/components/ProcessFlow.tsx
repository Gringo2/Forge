export default function ProcessFlow() {
    const steps = [
        {
            number: "01",
            title: "Define Logic",
            description: "Map out state transitions and functional invariants using Forge's reactive DSL.",
            image: (
                <div className="w-full h-full bg-zinc-900/50 flex items-center justify-center p-8">
                    <div className="font-mono text-sm text-magma-start bg-void p-6 rounded border border-zinc-border/50 w-full">
                        <span className="text-zinc-500">// Define state</span><br />
                        interface ForgeState &#123;<br />
                        &nbsp;&nbsp;heat: number;<br />
                        &nbsp;&nbsp;structure: string;<br />
                        &#125;
                    </div>
                </div>
            )
        },
        {
            number: "02",
            title: "Compile Structure",
            description: "The Iron Engine analyzes dependencies and generates a strictly-typed layout plan.",
            image: (
                <div className="w-full h-full bg-zinc-900/50 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-iron-light animate-pulse">
                        <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                        <path d="M50 20V80M20 50H80" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
            )
        },
        {
            number: "03",
            title: "Frame View",
            description: "Projected into a high-performance visual environment with sub-millisecond updates.",
            image: (
                <div className="w-full h-full bg-zinc-900/50 flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="h-20 bg-magma-start/20 border border-magma-start/50 rounded" />
                        <div className="h-20 bg-surface border border-zinc-border rounded" />
                        <div className="h-20 bg-surface border border-zinc-border rounded" />
                        <div className="h-20 bg-magma-end/20 border border-magma-end/50 rounded" />
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="process" className="py-24 px-6 bg-void relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                {/* Central Connector Line */}
                <div className="absolute left-[50%] top-32 bottom-32 w-px bg-zinc-800 hidden md:block -translate-x-1/2">
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-magma-start to-transparent animate-pulse" />
                </div>

                <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-24 border-b border-zinc-border pb-4 w-full">
                    02. The Compilation Lifecycle
                </h2>

                <div className="flex flex-col gap-32 relative z-10">
                    {steps.map((step, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 group`}>
                            <div className="flex-1">
                                <div className="text-5xl font-black text-white/10 mb-4 group-hover:text-magma-start/20 transition-colors">{step.number}</div>
                                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-magma-text transition-colors">{step.title}</h3>
                                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                                    {step.description}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-[1px] flex-1 bg-zinc-border group-hover:bg-magma-start transition-colors" />
                                    <span className="font-mono text-xs text-magma-start">READY_FOR_FRAME</span>
                                </div>
                            </div>
                            <div className="flex-1 w-full aspect-square md:aspect-video forge-glass rounded-2xl overflow-hidden border border-zinc-border/50 group-hover:border-magma-start/50 transition-colors shadow-2xl relative">
                                <div className="absolute inset-0 bg-magma-start/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                {step.image}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
