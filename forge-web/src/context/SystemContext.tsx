"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SystemContextType {
    heat: number;
    structure: number;
    setHeat: (v: number) => void;
    setStructure: (v: number) => void;
}

const SystemContext = createContext<SystemContextType | undefined>(undefined);

export function SystemProvider({ children }: { children: ReactNode }) {
    const [heat, setHeat] = useState(50);
    const [structure, setStructure] = useState(50);

    return (
        <SystemContext.Provider value={{ heat, structure, setHeat, setStructure }}>
            {children}
        </SystemContext.Provider>
    );
}

export function useSystem() {
    const context = useContext(SystemContext);
    if (context === undefined) {
        throw new Error("useSystem must be used within a SystemProvider");
    }
    return context;
}
