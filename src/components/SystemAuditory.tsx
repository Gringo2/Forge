"use client";

import { useEffect, useRef } from "react";
import { useSystem } from "@/context/SystemContext";

export default function SystemAuditory() {
    const { heat } = useSystem();
    const audioCtx = useRef<AudioContext | null>(null);
    const oscillator = useRef<OscillatorNode | null>(null);
    const gainNode = useRef<GainNode | null>(null);
    const noiseNode = useRef<AudioWorkletNode | ScriptProcessorNode | null>(null);

    useEffect(() => {
        // Initialize Audio Context on first interaction/mount
        const initAudio = () => {
            if (audioCtx.current) return;

            audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();

            // Industrial Hum
            oscillator.current = audioCtx.current.createOscillator();
            oscillator.current.type = "triangle";

            gainNode.current = audioCtx.current.createGain();

            oscillator.current.connect(gainNode.current);
            gainNode.current.connect(audioCtx.current.destination);

            oscillator.current.start();
            gainNode.current.gain.setValueAtTime(0, audioCtx.current.currentTime);
        };

        const handleInteraction = () => {
            initAudio();
            if (audioCtx.current?.state === "suspended") {
                audioCtx.current.resume();
            }
        };

        window.addEventListener("mousedown", handleInteraction);
        window.addEventListener("keydown", handleInteraction);

        return () => {
            window.removeEventListener("mousedown", handleInteraction);
            window.removeEventListener("keydown", handleInteraction);
        };
    }, []);

    useEffect(() => {
        if (!audioCtx.current || !oscillator.current || !gainNode.current) return;

        const now = audioCtx.current.currentTime;

        // Map heat (0-100) to frequency (50Hz - 150Hz)
        const freq = 50 + (heat);
        oscillator.current.frequency.exponentialRampToValueAtTime(freq, now + 0.1);

        // Map heat to volume (0.01 - 0.05)
        const volume = (heat / 2000) + 0.001;
        gainNode.current.gain.linearRampToValueAtTime(volume, now + 0.1);

    }, [heat]);

    return null; // Purely auditory component
}
