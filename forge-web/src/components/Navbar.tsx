"use client";

import Link from "next/link";
import { useSystem } from "@/context/SystemContext";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { heat, structure } = useSystem();
    const [hex, setHex] = useState("0x88AF3");
    const [util, setUtil] = useState(42.5);
    const [flux, setFlux] = useState(124);

    useEffect(() => {
        const interval = setInterval(() => {
            setHex(`0x${Math.floor(Math.random() * 0xFFFFF).toString(16).toUpperCase()}`);
            setUtil(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 5)));
            setFlux(prev => Math.max(10, Math.min(999, prev + (Math.random() - 0.5) * 20)));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-transform duration-75 ${heat > 95 ? "animate-jitter" : ""}`}>
            {/* Live Telemetry Bar (Tactical Command) */}
            <div className={`w-full bg-void/90 backdrop-blur-md border-b border-zinc-border/30 px-6 py-1 flex justify-between items-center font-mono text-[8px] uppercase tracking-[0.2em] transition-colors ${heat > 90 ? "text-magma-start" : "text-text-secondary"}`}>
                <div className="flex gap-6 items-center">
                    <span className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${heat > 90 ? "bg-magma-start animate-ping" : "bg-green-500 animate-pulse"}`} />
                        <span className={heat > 95 ? "animate-flicker" : ""}>
                            SYS_STATUS: {heat > 90 ? "SUPERCRITICAL" : "OPERATIONAL"}
                        </span>
                    </span>
                    <span className="hidden sm:inline opacity-60">CPU_CORE_UTIL: {util.toFixed(1)}%</span>
                    <span className="hidden sm:inline opacity-60">MEM_FLUX: {flux.toFixed(0)}MB/s</span>
                    <span className="hidden lg:inline opacity-60">SYNC_VECT: [ {structure.toFixed(0)} : {heat.toFixed(0)} ]</span>
                </div>

                <div className="flex gap-6 items-center">
                    {/* Triangular Signal Meter */}
                    <div className="flex gap-0.5 items-end h-2.5 px-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div
                                key={i}
                                className={`w-0.5 transition-all duration-300 ${i < 5 - (heat / 20) ? (heat > 90 ? "bg-magma-start shadow-[0_0_5px_rgba(255,61,0,0.5)]" : "bg-white") : "bg-zinc-800"}`}
                                style={{ height: `${(i + 1) * 20}%` }}
                            />
                        ))}
                    </div>
                    <span className="font-bold tracking-widest">{hex}</span>
                    <span className="hidden md:inline opacity-40">T+ {Math.floor(Date.now() / 1000) % 100000}</span>
                </div>
            </div>

            <div className="forge-glass flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full mt-4 border border-white/5 transition-all duration-500 hover:shadow-magma-start/5 relative group/nav">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-surface border border-zinc-border flex items-center justify-center overflow-hidden transition-all group-hover:border-magma-start/50 relative">
                        <svg viewBox="0 0 100 100" className={`w-6 h-6 transition-all duration-1000 ${heat > 90 ? "scale-110 drop-shadow-[0_0_8px_rgba(255,61,0,0.5)]" : ""}`}>
                            <path d="M20 12V88H44V12H20Z" fill="currentColor" className="text-zinc-700" />
                            <path d="M50 12H88V44H50V12Z" fill="currentColor" className="text-magma-start" />
                            <path d="M50 50H80V82H50V50Z" fill="currentColor" className="text-magma-end" />
                        </svg>
                        {/* Internal Power Pulse */}
                        <div className="absolute inset-0 bg-magma-start/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-white group-hover:magma-text transition-all uppercase">
                        Forge
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary">
                    {[
                        { label: "Features", href: "#features" },
                        { label: "Process", href: "#process" },
                        { label: "Compilation", href: "#compilation" },
                        { label: "Gallery", href: "#gallery" },
                        { label: "Ecosystem", href: "#ecosystem" },
                        { label: "Playground", href: "#playground" },
                        { label: "Pricing", href: "#pricing" }
                    ].map((item) => (
                        <Link key={item.label} href={item.href} className="hover:text-white transition-colors relative group/link">
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-magma-start group-hover/link:w-full transition-all" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-[10px] font-bold text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">SignIn</button>
                    <button className="btn-forge magma-bg text-void text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-lg hover:shadow-magma-start/40 active:scale-95 transition-all relative overflow-hidden group/btn">
                        <span className="relative z-10 transition-transform group-hover/btn:-translate-y-px">Compile_Now</span>
                        {/* Tactical Grid Overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity pointer-events-none"
                            style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 0)", backgroundSize: "4px 4px" }} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
