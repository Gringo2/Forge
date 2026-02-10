"use client";

import { useEffect, useState } from "react";
import { useSystem } from "@/context/SystemContext";

export default function SystemFooter() {
    const { heat, structure } = useSystem();
    const [time, setTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toISOString().split('T')[1].split('.')[0]);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="bg-void border-t border-zinc-border py-12 px-6 font-mono text-[10px] text-zinc-500 uppercase">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand / Status */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-white font-bold tracking-widest">
                        <span className="w-2 h-2 bg-magma-start animate-pulse" />
                        FORGE_SYSTEMS_INC
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between">
                            <span>STATUS:</span>
                            <span className="text-magma-start">OPERATIONAL</span>
                        </div>
                        <div className="flex justify-between">
                            <span>UPTIME:</span>
                            <span>99.998%</span>
                        </div>
                        <div className="flex justify-between">
                            <span>VERSION:</span>
                            <span>v3.0.1-rc</span>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-4">
                    <div className="text-white font-bold tracking-widest">NAVIGATION_TREE</div>
                    <nav className="flex flex-col gap-2">
                        {["Documentation", "API_Reference", "Status_Page", "Legacy_Systems"].map((link) => (
                            <a key={link} href="#" className="hover:text-magma-start hover:translate-x-1 transition-all">
                                &gt; {link}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Legal / Compliance */}
                <div className="flex flex-col gap-4">
                    <div className="text-white font-bold tracking-widest">LEGAL_PROTOCOLS</div>
                    <nav className="flex flex-col gap-2">
                        {["Privacy_Policy", "Terms_of_Service", "SLA_Agreement"].map((link) => (
                            <a key={link} href="#" className="hover:text-magma-start hover:translate-x-1 transition-all">
                                &gt; {link}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Live Telemetry */}
                <div className="flex flex-col gap-4 border border-zinc-border p-4 bg-zinc-900/20 rounded">
                    <div className="text-white font-bold tracking-widest mb-2">LIVE_TELEMETRY</div>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <div className="text-[8px] text-zinc-600">HEAT_VECTOR</div>
                            <div className="text-magma-start">{heat.toFixed(1)}°</div>
                        </div>
                        <div>
                            <div className="text-[8px] text-zinc-600">CORE_SYNC</div>
                            <div className="text-iron-light">{(structure / 10).toFixed(2)}ms</div>
                        </div>
                        <div>
                            <div className="text-[8px] text-zinc-600">LOCAL_TIME</div>
                            <div>{time}00Z</div>
                        </div>
                        <div>
                            <div className="text-[8px] text-zinc-600">REGION</div>
                            <div>US-EAST-1</div>
                        </div>
                    </div>
                    <div className="w-full h-1 bg-zinc-800 mt-2 overflow-hidden rounded-full">
                        <div className="h-full bg-magma-start animate-pulse" style={{ width: `${Math.random() * 50 + 50}%` }} />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-border/30 flex justify-between items-center opacity-50">
                <div>© 2026 FORGE SYSTEMS INC. ALL RIGHTS RESERVED.</div>
                <div className="tracking-[0.5em]">SYSTEM_ZERO_COMPLIANT</div>
            </div>
        </footer>
    );
}
