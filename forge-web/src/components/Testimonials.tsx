export default function Testimonials() {
    const feedback = [
        {
            quote: "Forge is the first tool that treats interface design with the same rigor as systems programming. The reactive streams are unmatched.",
            author: "Elias Vance",
            role: "Lead Systems Architect, Void-X",
            initials: "EV"
        },
        {
            quote: "No more artboards. No more guesswork. We compile our specs directly to the edge. Heat-driven development is the future.",
            author: "Sarah Jenks",
            role: "Founder, Heat-Stack",
            initials: "SJ"
        },
        {
            quote: "Structural integrity finally comes to the frontend. The Iron Engine caught three critical layout leaks before we even shipped.",
            author: "Marcus Thorne",
            role: "Ecosystem Operator",
            initials: "MT"
        }
    ];

    return (
        <section className="py-24 px-6 bg-void max-w-7xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-16 border-b border-zinc-border pb-4">
                06. Field Transmissions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {feedback.map((item, idx) => (
                    <div key={idx} className="forge-glass p-8 rounded-2xl border border-zinc-border/50 relative group">
                        <div className="absolute -top-4 -left-4 w-8 h-8 rounded bg-surface border border-zinc-border flex items-center justify-center font-mono text-[10px] text-magma-start group-hover:bg-magma-start group-hover:text-void transition-colors">
                            &ldquo;
                        </div>
                        <p className="text-text-primary mb-8 leading-relaxed italic">
                            &ldquo;{item.quote}&rdquo;
                        </p>
                        <div className="flex items-center gap-4 border-t border-zinc-border/30 pt-6">
                            <div className="w-10 h-10 rounded-full bg-surface border border-zinc-border flex items-center justify-center font-bold text-xs">
                                {item.initials}
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">{item.author}</div>
                                <div className="text-[10px] text-text-secondary uppercase tracking-tight">{item.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
