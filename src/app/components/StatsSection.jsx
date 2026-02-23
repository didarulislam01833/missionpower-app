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

    return (<span ref={nodeRef}><motion.span>{rounded}</motion.span>{suffix}</span>);
}

export default function StatsSection() {
    const stats = [
        { id: 1, number: "15+", label: "Years Experience", sublabel: "Industrial Leader" },
        { id: 2, number: "120+", label: "Projects Done", sublabel: "Govt. & Private" },
        { id: 3, number: "500+", label: "MW Capacity", sublabel: "Grid Integration" },
        { id: 4, number: "Class-A", label: "Contractor", sublabel: "Verified Status" }
    ];

    return (
        /* z-50 ensures it's above the banner. -mt-16 fits in the banner's bottom padding. */
        <section className="relative z-50 -mt-16 md:-mt-24 px-4 lg:px-16">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
                        {stats.map((stat) => (
                            <div key={stat.id} className="p-8 lg:p-12 group hover:bg-slate-50 transition-all duration-300">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-2">
                                        {/[0-9]/.test(stat.number) ? <Counter value={stat.number} /> : stat.number}
                                    </h2>
                                    <div className="h-1 w-8 bg-blue-600 mb-4 group-hover:w-16 transition-all duration-500"></div>
                                    <p className="text-[10px] md:text-xs font-bold text-slate-800 uppercase tracking-widest">{stat.label}</p>
                                    <p className="text-[9px] font-bold text-blue-500 mt-1 uppercase opacity-70">{stat.sublabel}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}