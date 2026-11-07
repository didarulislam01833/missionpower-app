"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView } from 'framer-motion';

function Counter({ value }) {
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-30px" });
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");

    // সার্ভারেও আসল সংখ্যা দেখাবে, তাই "0+" আর আসবে না
    const [display, setDisplay] = useState(numericValue);

    useEffect(() => {
        if (!isInView) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        // ৭০% থেকে আসল সংখ্যা পর্যন্ত ছোট অ্যানিমেশন
        const controls = animate(Math.floor(numericValue * 0.7), numericValue, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate: (latest) => setDisplay(Math.round(latest)),
        });
        return () => controls.stop();
    }, [isInView, numericValue]);

    return (
        <span ref={nodeRef}>
            {display}
            {suffix}
        </span>
    );
}

// মালিকের কাছ থেকে নিশ্চিত হয়ে সংখ্যাগুলো এখানে বদলান
const STATS = [
    { id: 1, number: "15+", label: "Years Experience", sublabel: "Industrial Leader" },
    { id: 2, number: "120+", label: "Projects Done", sublabel: "Govt. & Private" },
    { id: 3, number: "500+", label: "MW Capacity", sublabel: "Grid Integration" },
    { id: 4, number: "Class-A", label: "Contractor", sublabel: "Verified Status" },
];

export default function StatsSection() {
    return (
        <section className="relative z-30 -mt-12 sm:-mt-16 md:-mt-20 px-4 sm:px-6 lg:px-16">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-amber-500/20 overflow-hidden"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-800">
                        {STATS.map((stat) => (
                            <div key={stat.id} className="p-6 sm:p-8 lg:p-10 group hover:bg-slate-800/60 transition-all duration-300">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1.5 tracking-tight">
                                        {/[0-9]/.test(stat.number) ? <Counter value={stat.number} /> : stat.number}
                                    </h3>
                                    <div className="h-1 w-8 bg-amber-400 mb-3 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                                    <p className="text-[11px] sm:text-xs font-extrabold text-slate-200 uppercase tracking-widest">{stat.label}</p>
                                    <p className="text-[10px] font-bold text-amber-400 mt-1 uppercase tracking-wider opacity-90">{stat.sublabel}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}