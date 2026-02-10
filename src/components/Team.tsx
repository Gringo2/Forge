export default function Team() {
    const members = [
        { name: "Sylas Vane", role: "Vector Compiler Architect", vision: "Engineering zero-drift design-to-code pipelines for high-integrity native systems." },
        { name: "Kore Molten", role: "Design System Engineer", vision: "Codifying visual intent into deterministic layout models across heterogenous platforms." },
        { name: "Iron Maiden", role: "Determinism Lead", vision: "Ensuring binary-exact replication of design intent through formal layout verification." },
    ];

    return (
        <section id="team" className="py-24 px-6 bg-surface">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-16 border-b border-zinc-border pb-4">
                    07. The Core Operators
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {members.map((member, idx) => (
                        <div key={idx} className="group cursor-default">
                            <div className="aspect-[4/5] bg-void rounded-2xl border border-zinc-border overflow-hidden relative mb-6 group-hover:border-magma-start transition-colors">
                                <img
                                    src={`/assets/${member.name.toLowerCase().split(' ')[0]}.png`}
                                    alt={member.name}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-void via-void/50 to-transparent">
                                    <div className="w-12 h-1 bg-zinc-border group-hover:bg-magma-start transition-colors mb-4" />
                                </div>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                            <div className="text-magma-start text-[10px] font-mono uppercase tracking-widest mb-4">{member.role}</div>
                            <p className="text-text-secondary text-sm italic font-serif opacity-70 italic">&ldquo;{member.vision}&rdquo;</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
