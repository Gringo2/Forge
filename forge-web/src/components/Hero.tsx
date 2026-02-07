export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden pt-20">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magma-start blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-magma-end blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* NEW Badge */}
            <div className="flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-bold tracking-widest uppercase border rounded-full bg-surface border-zinc-border text-magma-start animate-pulse-magma">
                <span className="w-1.5 h-1.5 rounded-full bg-magma-start" />
                Forge Core v3.0 Released
            </div>

            <h1 className="max-w-4xl text-5xl md:text-8xl font-bold tracking-tight text-center text-white mb-6">
                The Interface <br />
                <span className="magma-text">Compiler.</span>
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-center text-text-secondary mb-12 leading-relaxed">
                Forge transforms interface logic into optimized reactive views.
                Structure + Heat. No artboards, just pure coordination.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
                <button className="btn-forge magma-bg text-void text-sm font-bold uppercase tracking-widest px-10 py-4 shadow-[0_0_30px_rgba(255,61,0,0.3)] hover:shadow-[0_0_40px_rgba(255,61,0,0.5)]">
                    Start Compiling
                </button>
                <button className="btn-forge bg-transparent border-2 border-zinc-border text-white text-sm font-bold uppercase tracking-widest px-10 py-4 hover:border-magma-start hover:text-magma-start transition-all">
                    View Docs
                </button>
            </div>

            {/* Dashboard Preview Mockup */}
            <div className="relative mt-20 w-full max-w-5xl group">
                <div className="absolute inset-0 bg-magma-start opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
                <div className="relative forge-glass rounded-2xl border border-zinc-border overflow-hidden">
                    <img
                        src="/assets/dashboard.svg"
                        alt="Forge Compiler Interface"
                        className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>
        </section>
    );
}
