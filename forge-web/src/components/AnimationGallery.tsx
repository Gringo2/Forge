"use client";

import { motion } from "framer-motion";
import { useSystem } from "@/context/SystemContext";

export default function AnimationGallery() {
    const { heat } = useSystem();
    const animations = [
        {
            name: "Hydraulic Press",
            content: (
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="30" y="20" width="40" height="20" fill="#374151">
                        <animate attributeName="y" values="20;50;20" dur="1.5s" repeatCount="indefinite" />
                    </rect>
                    <rect x="30" y="60" width="40" height="20" fill="#FF3D00" opacity="0.8" />
                </svg>
            )
        },
        {
            name: "Welding Arc",
            content: (
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M30 70 L50 50" stroke="#374151" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="2" fill="#fff">
                        <animate attributeName="r" values="2;8;2;15;2" dur="0.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.5;1;0;1" dur="0.5s" repeatCount="indefinite" />
                    </circle>
                    <path d="M50 50 L70 30" stroke="transparent" strokeWidth="1">
                        <animate attributeName="stroke" values="#FF9100;transparent" dur="0.1s" repeatCount="indefinite" />
                        <animate attributeName="d" values="M50 50 L60 40; M50 50 L70 30; M50 50 L65 35" dur="0.2s" repeatCount="indefinite" />
                    </path>
                </svg>
            )
        },
        {
            name: "Molten Core",
            content: (
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="30" fill="url(#magmaAnim)">
                        <animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <defs>
                        <linearGradient id="magmaAnim" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#FF3D00" />
                            <stop offset="100%" stopColor="#FF9100" />
                        </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="15" fill="#FF9100">
                        <animate attributeName="r" values="15;10;15" dur="3s" repeatCount="indefinite" />
                    </circle>
                </svg>
            )
        },
        {
            name: "Robotic Arm",
            content: (
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="90" r="10" fill="#374151" />
                    <g style={{ transformOrigin: "50% 90%" }}>
                        <animateTransform attributeName="transform" type="rotate" values="-15 50 90; 15 50 90; -15 50 90" dur="2s" repeatCount="indefinite" />
                        <rect x="45" y="50" width="10" height="40" fill="#555" />
                        <circle cx="50" cy="50" r="5" fill="#FF3D00" />
                    </g>
                </svg>
            )
        }
    ];

    return (
        <section id="gallery" className="py-24 px-6 bg-surface">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-16 border-b border-zinc-border pb-4">
                    03. Industrial Motion Language
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {animations.map((anim, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="aspect-square bg-void rounded-xl border border-zinc-border flex items-center justify-center p-8 group-hover:border-magma-start transition-colors relative overflow-hidden">
                                <motion.div
                                    className="w-full h-full"
                                    animate={{
                                        scale: 1 + (heat / 500),
                                        filter: `hue-rotate(${heat / 2}deg) saturate(${1 + heat / 100})`
                                    }}
                                >
                                    {anim.content}
                                </motion.div>
                                <div className="absolute inset-0 bg-magma-start/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="mt-4 font-mono text-xs text-text-secondary uppercase tracking-widest">
                                {anim.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
