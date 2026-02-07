export default function Ecosystem() {
    const products = [
        { name: "Prod Control", tag: "Management", icon: "PC" },
        { name: "The Operator", tag: "Automation", icon: "OP" },
        { name: "ADR", tag: "Decisions", icon: "AD" },
        { name: "Codestellation", tag: "Intelligence", icon: "CS" },
        { name: "System Zero", tag: "Infrastructure", icon: "S0" },
    ];

    return (
        <section id="ecosystem" className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-12 border-b border-zinc-border pb-4 text-center">
                04. System Zero Ecosystem
            </h2>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
                {products.map((prop, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3 group cursor-crosshair">
                        <div className="w-16 h-16 rounded-xl border border-zinc-border flex items-center justify-center font-mono text-xl font-bold bg-surface group-hover:border-magma-start group-hover:magma-text transition-all">
                            {prop.icon}
                        </div>
                        <div className="text-center">
                            <div className="text-xs font-bold text-white uppercase tracking-tighter">{prop.name}</div>
                            <div className="text-[10px] text-zinc-500 uppercase">{prop.tag}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
