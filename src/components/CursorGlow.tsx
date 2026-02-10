"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useSystem } from "@/context/SystemContext";

export default function CursorGlow() {
    const { heat } = useSystem();
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

    const springX = useSpring(-100, { stiffness: 150, damping: 25 });
    const springY = useSpring(-100, { stiffness: 150, damping: 25 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            springX.set(e.clientX);
            springY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [springX, springY]);

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
            style={{
                background: `radial-gradient(600px circle at var(--x) var(--y), rgba(255, 61, 0, 0.05), transparent 80%)`,
            }}
        >
            <motion.div
                className="absolute rounded-full bg-magma-start blur-[100px]"
                animate={{
                    width: 400 + (heat * 2),
                    height: 400 + (heat * 2),
                    opacity: 0.1 + (heat / 500)
                }}
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </motion.div>
    );
}
