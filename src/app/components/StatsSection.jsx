"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

function Counter({ value }) {
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, count, numericValue]);

    return (
        <span ref={nodeRef}>
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
}

export default function StatsSection() {
    const stats = [
        { id: 1, number: "15+", label: "Years Experience", sublabel: "Industry Leader" },
        { id: 2, number: "120+", label: "Projects", sublabel: "Govt. & Private" },
        { id: 3, number: "500+", label: "MW Capacity", sublabel: "Grid Ready" },
        { id: 4, number: "Class-A", label: "Contractor", sublabel: "Enlisted" }
    ];

    return (
        /* CHANGED: 
           - Adjusted -mt-12 (less aggressive pull-up)
           - Added pt-0 to ensure no extra internal gap
        */
        <section className="relative z-30 -mt-12 md:-mt-16 px-6 lg:px-16">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
                        {stats.map((stat) => (
                            <div key={stat.id} className="p-6 md:p-10 group hover:bg-blue-50/50 transition-colors text-center lg:text-left">
                                <div className="flex flex-col items-center lg:items-start">
                                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-2">
                                        {/[0-9]/.test(stat.number) ? (
                                            <Counter value={stat.number} />
                                        ) : (
                                            <span className="text-2xl md:text-4xl">{stat.number}</span>
                                        )}
                                    </h2>
                                    <div className="h-1 w-6 bg-blue-600 mb-3 group-hover:w-12 transition-all duration-300"></div>
                                    <p className="text-[10px] md:text-xs font-bold text-slate-800 uppercase tracking-widest leading-tight">
                                        {stat.label}
                                    </p>
                                    <p className="hidden md:block text-[9px] font-bold text-blue-500 mt-1 uppercase tracking-tighter opacity-70">
                                        {stat.sublabel}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}