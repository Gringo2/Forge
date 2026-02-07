import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <div className="forge-glass flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-surface border border-zinc-border flex items-center justify-center overflow-hidden">
                        <svg viewBox="0 0 100 100" className="w-6 h-6">
                            <path d="M20 12V88H44V12H20Z" fill="#374151" />
                            <path d="M50 12H88V44H50V12Z" fill="#FF3D00" />
                            <path d="M50 50H80V82H50V50Z" fill="#FF9100" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white group-hover:magma-text transition-all">
                        Forge
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
                    <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#process" className="hover:text-white transition-colors">Process</Link>
                    <Link href="#gallery" className="hover:text-white transition-colors">Animations</Link>
                    <Link href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</Link>
                </div>

                <button className="btn-forge magma-bg text-void text-xs font-bold uppercase tracking-widest px-6 py-2">
                    Compile Now
                </button>
            </div>
        </nav>
    );
}
