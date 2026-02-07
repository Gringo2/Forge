export default function ProcessFlow() {
    const steps = [
        {
            number: "01",
            title: "Symbolic Specification",
            description: "Declare interface logic using a strictly-typed reactive DSL. Forge maps state invariants across the platform boundary.",
            image: (
                <div className="w-full h-full bg-zinc-900/50 flex items-center justify-center p-8">
                    <div className="font-mono text-sm text-magma-start bg-void p-6 rounded border border-zinc-border/50 w-full shadow-inner">
                        <span className="text-zinc-500 opacity-50">// SYMBOLIC_DECLARATION</span><br />
                        <span className="text-blue-400">const</span> <span className="text-white">ForgeCore</span> = <span className="text-yellow-400">compile</span>(&#123;<br />
                        &nbsp;&nbsp;platform: <span className="text-green-400">'MULTI_TARGET'</span>,<br />
                        &nbsp;&nbsp;state: <span className="text-magma-start">HEAT_DYNAMIC</span><br />
                        &#125;);
                    </div>
                </div>
            )
        },
        {
            number: "02",
            title: "Thermal Orchestration",
            description: "The Iron Engine analyzes the dependency graph, optimizing for deterministic execution and zero memory leakage.",
            image: (
                <div className="w-full h-full bg-zinc-900/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-10">
                        {Array.from({ length: 100 }).map((_, i) => <div key={i} className="border-[0.5px] border-magma-start" />)}
                    </div>
                    <svg viewBox="0 0 100 100" className="w-40 h-40 text-magma-start/40">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="animate-spin-slow" />
                        <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="0.5" />
                        <rect x="35" y="35" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
                    </svg>
                </div>
            )
        },
        {
            number: "03",
            title: "Targeted Transmission",
            description: "Binary-equivalent compilation to React, React Native, and Flutter. Zero-overhead deployment to any production environment.",
            image: (
                <div className="w-full h-full bg-zinc-900/50 flex items-center justify-center p-8">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex justify-between items-center px-4 py-2 bg-void border border-zinc-border/50 rounded-lg group-hover:border-magma-start transition-colors">
                            <span className="font-mono text-[10px] text-text-secondary uppercase">Target: REACT_WEB</span>
                            <span className="text-magma-start text-[10px] animate-pulse">● COMPILING</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-2 bg-void border border-zinc-border/50 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity">
                            <span className="font-mono text-[10px] text-text-secondary uppercase">Target: REACT_NATIVE</span>
                            <span className="text-magma-start text-[10px]">● SYNCING</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-2 bg-void border border-zinc-border/50 rounded-lg opacity-30 group-hover:opacity-100 transition-opacity">
                            <span className="font-mono text-[10px] text-text-secondary uppercase">Target: FLUTTER</span>
                            <span className="text-magma-start text-[10px]">● READY</span>
                        </div>
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
                                <div className="text-5xl font-black text-white/10 mb-4 group-hover:text-magma-start/20 transition-colors uppercase tracking-widest">{step.number}</div>
                                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-magma-start transition-colors uppercase">{step.title}</h3>
                                <p className="text-text-secondary text-lg leading-relaxed mb-8 font-medium">
                                    {step.description}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-[1px] flex-1 bg-zinc-border group-hover:bg-magma-start transition-colors" />
                                    <span className="font-mono text-xs text-magma-start tracking-widest">OPS_STATUS: READY_FOR_TRANSMISSION</span>
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
