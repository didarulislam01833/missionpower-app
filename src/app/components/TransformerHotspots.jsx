"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// বর্ণনাগুলো শুধু সাইটের Manufacturing পেজে যা আছে সেখান থেকে নেওয়া
const PARTS = [
    { id: "bushing", label: "HT bushing", x: 37.5, y: 22.5, text: "The high-tension terminals where the supply line connects to the transformer." },
    { id: "core", label: "CRGO core", x: 50, y: 41, text: "Cold-rolled grain-oriented silicon steel, slit, cut and vacuum annealed in our plant to keep energy loss low." },
    { id: "winding", label: "Copper winding", x: 43, y: 59, text: "Copper from our up-casting line, paper-covered or enamelled, wound under controlled tension for exact voltage ratios." },
    { id: "oil", label: "Dielectric oil", x: 72.5, y: 62.5, text: "Vacuum tanking is followed by dielectric oil filling, which insulates the active part and carries heat away." },
    { id: "tank", label: "Sealed steel tank", x: 25, y: 80, text: "Welded, leak-proof tank with an electrostatic powder coating for long-term corrosion protection." },
];

function TransformerDrawing() {
    return (
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" role="img" aria-label="Cutaway drawing of a distribution transformer">
            <defs>
                <linearGradient id="mplCopper" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#b45309" />
                </linearGradient>
            </defs>

            {/* HT bushings */}
            {[150, 250].map((cx) => (
                <g key={cx}>
                    <rect x={cx - 8} y="70" width="16" height="50" rx="3" fill="#cbd5e1" />
                    {[78, 92, 106].map((y) => (
                        <rect key={y} x={cx - 13} y={y} width="26" height="6" rx="3" fill="#e2e8f0" />
                    ))}
                    <circle cx={cx} cy="66" r="7" fill="#f59e0b" />
                </g>
            ))}

            {/* Lid */}
            <rect x="80" y="118" width="240" height="16" rx="6" fill="#475569" />

            {/* Tank */}
            <rect x="90" y="132" width="220" height="214" rx="14" fill="#0f172a" stroke="#f59e0b" strokeOpacity="0.6" strokeWidth="3" />

            {/* Oil */}
            <rect x="96" y="148" width="208" height="192" rx="10" fill="#f59e0b" fillOpacity="0.1" />

            {/* Core (two legs and two yokes) */}
            <g fill="#94a3b8">
                <rect x="128" y="160" width="144" height="14" rx="2" />
                <rect x="128" y="300" width="144" height="14" rx="2" />
                <rect x="158" y="160" width="14" height="154" />
                <rect x="228" y="160" width="14" height="154" />
            </g>

            {/* Windings */}
            <rect x="143" y="184" width="44" height="106" rx="8" fill="url(#mplCopper)" />
            <rect x="213" y="184" width="44" height="106" rx="8" fill="url(#mplCopper)" />
            {[200, 216, 232, 248, 264].map((y) => (
                <g key={y} stroke="#78350f" strokeOpacity="0.5">
                    <line x1="143" y1={y} x2="187" y2={y} />
                    <line x1="213" y1={y} x2="257" y2={y} />
                </g>
            ))}

            {/* Base */}
            <rect x="100" y="346" width="200" height="10" rx="3" fill="#475569" />
        </svg>
    );
}

export default function TransformerHotspots() {
    const [activeId, setActiveId] = useState("core");
    const active = PARTS.find((p) => p.id === activeId);

    return (
        <section className="py-16 md:py-24 bg-[#0A0F1D] border-y border-slate-800 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-8 lg:px-16 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Drawing + hotspots */}
                <div className="relative mx-auto w-full max-w-md aspect-square rounded-3xl bg-slate-900/70 border border-slate-800">
                    <TransformerDrawing />
                    {PARTS.map((p) => {
                        const on = p.id === activeId;
                        return (
                            <button
                                key={p.id}
                                type="button"
                                aria-label={p.label}
                                aria-pressed={on}
                                onClick={() => setActiveId(p.id)}
                                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                                className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-amber-300 rounded-full"
                            >
                                <span className={`relative flex w-5 h-5 rounded-full border-2 border-white transition-colors ${on ? 'bg-amber-500' : 'bg-amber-500/40'}`}>
                                    {on && <span className="absolute inset-0 rounded-full bg-amber-400 opacity-60 animate-ping motion-reduce:hidden" />}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Text */}
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                        What is inside our transformers
                    </h2>
                    <p className="mt-3 text-slate-300 text-sm sm:text-base">
                        Tap a point on the drawing, or pick a part below.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Transformer parts">
                        {PARTS.map((p) => (
                            <button
                                key={p.id}
                                type="button"
                                onClick={() => setActiveId(p.id)}
                                aria-pressed={p.id === activeId}
                                className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${p.id === activeId
                                    ? 'bg-amber-500 text-slate-950 border-amber-500'
                                    : 'bg-slate-900 text-slate-200 border-slate-700 hover:border-amber-500/60'}`}
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>

                    <div aria-live="polite" className="mt-6 p-5 rounded-2xl bg-slate-900/90 border border-amber-500/20 min-h-[130px]">
                        <h3 className="text-xl font-black text-amber-400">{active.label}</h3>
                        <p className="mt-2 text-slate-200 leading-relaxed">{active.text}</p>
                    </div>

                    <Link href="/manufacture-excellence" className="inline-block mt-6 text-amber-400 font-bold hover:text-amber-300 underline underline-offset-4">
                        See how we build them, step by step
                    </Link>
                </div>
            </div>
        </section>
    );
}