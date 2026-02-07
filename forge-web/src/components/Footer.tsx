import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-20 px-6 border-t border-zinc-border bg-void">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="col-span-2 md:col-span-1">
                    <Link href="/" className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-surface border border-zinc-border flex items-center justify-center overflow-hidden">
                            <svg viewBox="0 0 100 100" className="w-6 h-6">
                                <path d="M20 12V88H44V12H20Z" fill="#374151" />
                                <path d="M50 12H88V44H50V12Z" fill="#FF3D00" />
                                <path d="M50 50H80V82H50V50Z" fill="#FF9100" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Forge</span>
                    </Link>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                        The collaborative interface compiler for the System Zero ecosystem.
                        Projecting structure into reality.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-sm">Product</h4>
                    <ul className="flex flex-col gap-4 text-sm text-text-secondary font-mono">
                        <li><Link href="#" className="hover:text-magma-start">Compiler CLI</Link></li>
                        <li><Link href="#" className="hover:text-magma-start">Iron Engine</Link></li>
                        <li><Link href="#" className="hover:text-magma-start">Heat Reactive Tools</Link></li>
                        <li><Link href="#" className="hover:text-magma-start">Documentation</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-sm">Ecosystem</h4>
                    <ul className="flex flex-col gap-4 text-sm text-text-secondary font-mono">
                        <li><Link href="#" className="hover:text-magma-start">System Zero</Link></li>
                        <li><Link href="#" className="hover:text-magma-start">Prod Control</Link></li>
                        <li><Link href="#" className="hover:text-magma-start">The Operator</Link></li>
                        <li><Link href="#" className="hover:text-magma-start">Codestellation</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-sm">Legal & Connect</h4>
                    <ul className="flex flex-col gap-4 text-sm text-text-secondary font-mono">
                        <li><Link href="#" className="hover:text-magma-start">Terms of Transit</Link></li>
                        <li><Link href="#" className="hover:text-magma-start">Void Policy</Link></li>
                        <li><Link href="#" className="hover:text-magma-start">GitHub</Link></li>
                        <li><Link href="#" className="hover:text-magma-start">Discord</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-border/30 flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>&copy; {(new Date()).getFullYear()} System Zero Inc.</span>
                <span>Transmission Protocol v4.2.0</span>
            </div>
        </footer>
    );
}
