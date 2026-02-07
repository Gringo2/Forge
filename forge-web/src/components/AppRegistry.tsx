"use client";

import React, { useEffect, useState } from "react";
import { SystemProvider, useSystem } from "@/context/SystemContext";
import SystemAuditory from "./SystemAuditory";
import StructuralInsight from "./StructuralInsight";
import SystemBoot from "./SystemBoot";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";

function VisualWrapper({ children }: { children: React.ReactNode }) {
    const { heat } = useSystem();
    const [isBooted, setIsBooted] = useState(false);

    useEffect(() => {
        if (isBooted) {
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
            });

            function raf(time: number) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            return () => {
                lenis.destroy();
            };
        }
    }, [isBooted]);

    return (
        <>
            <AnimatePresence mode="wait">
                {!isBooted && <SystemBoot onBootComplete={() => setIsBooted(true)} />}
            </AnimatePresence>

            {isBooted && (
                <div className={`relative transition-transform duration-100 ${heat > 95 ? "heat-jitter meltdown-active" : ""}`}>
                    <div className="scanlines" />
                    <div className="crt-overlay" />
                    {children}
                </div>
            )}
        </>
    );
}

export function AppRegistry({ children }: { children: React.ReactNode }) {
    return (
        <SystemProvider>
            <SystemAuditory />
            <StructuralInsight />
            <VisualWrapper>
                {children}
            </VisualWrapper>
        </SystemProvider>
    );
}
