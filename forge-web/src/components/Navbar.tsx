"use client";

import Link from "next/link";
import { useSystem } from "@/context/SystemContext";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { heat } = useSystem();
    const [hex, setHex] = useState("0x88AF3");

    useEffect(() => {
        const interval = setInterval(() => {
            setHex(`0x${Math.floor(Math.random() * 0xFFFFF).toString(16).toUpperCase()}`);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
            {/* Live Telemetry Bar */}
            <div className={`w-full bg-void/80 backdrop-blur-md border-b border-zinc-border/30 px-6 py-1 flex justify-between items-center font-mono text-[8px] uppercase tracking-[0.2em] transition-colors ${heat > 90 ? "text-magma-start" : "text-text-secondary"}`}>
                <div className="flex gap-6">
                    <span className="flex items-center gap-1.5">
                        <span className={`w-1 h-1 rounded-full ${heat > 90 ? "bg-magma-start animate-ping" : "bg-green-500 animate-pulse"}`} />
                        SYS_STATUS: {heat > 90 ? "SUPERCRITICAL" : "OPERATIONAL"}
                    </span>
                    <span className="hidden sm:inline">LATENCY: {Math.floor(12 + heat / 10)}ms</span>
                    <span className="hidden sm:inline">THERMAL_FLUX: {Math.floor(heat * 4.2)}W/m²</span>
                </div>

                <div className="flex gap-6 items-center">
                    <div className="flex gap-0.5 items-end h-2">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div
                                key={i}
                                className={`w-0.5 ${i < 4 - (heat / 25) ? (heat > 90 ? "bg-magma-start" : "bg-white") : "bg-zinc-800"}`}
                                style={{ height: `${(i + 1) * 25}%` }}
                            />
                        ))}
                    </div>
                    <span className="font-bold">{hex}</span>
                    <span className="hidden md:inline">REF: {new Date().toLocaleTimeString()}</span>
                </div>
            </div>

            <div className="forge-glass flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full mt-4 transition-all duration-500 hover:shadow-magma-start/5">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-surface border border-zinc-border flex items-center justify-center overflow-hidden transition-all group-hover:border-magma-start/50">
                        <svg viewBox="0 0 100 100" className="w-6 h-6">
                            <path d="M20 12V88H44V12H20Z" fill="currentColor" className="text-zinc-700" />
                            <path d="M50 12H88V44H50V12Z" fill="currentColor" className="text-magma-start" />
                            <path d="M50 50H80V82H50V50Z" fill="currentColor" className="text-magma-end" />
                        </svg>
                    </div>
                    <span className="text-xl font-black tracking-tighter text-white group-hover:magma-text transition-all uppercase">
                        Forge
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                    <Link href="#features" className="hover:text-white transition-colors relative group/link">
                        Features
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-magma-start group-hover/link:w-full transition-all" />
                    </Link>
                    <Link href="#process" className="hover:text-white transition-colors relative group/link">
                        Process
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-magma-start group-hover/link:w-full transition-all" />
                    </Link>
                    <Link href="#gallery" className="hover:text-white transition-colors relative group/link">
                        Animations
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-magma-start group-hover/link:w-full transition-all" />
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-[10px] font-bold text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">SignIn</button>
                    <button className="btn-forge magma-bg text-void text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-lg hover:shadow-magma-start/40 active:scale-95 transition-all">
                        Compile_Now
                    </button>
                </div>
            </div>
        </nav>
    );
}
