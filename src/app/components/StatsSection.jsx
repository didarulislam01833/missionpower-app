"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

// আলাদা একটি কম্পোনেন্ট নাম্বার কাউন্টিং হ্যান্ডেল করার জন্য
function Counter({ value, direction = "up" }) {
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    // শুধু সংখ্যাটি আলাদা করে নেওয়া (যেমন: "15+" থেকে 15)
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, ""); // "+" বা অন্য সাইন রাখার জন্য

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericValue, {
                duration: 2,
                ease: "easeOut"
            });
            return controls.stop;
        }
    }, [isInView, count, numericValue]);

    return (
        <span ref={nodeRef}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

export default function StatsSection() {
    const stats = [
        { id: 1, number: "15+", label: "Years of Experience", sublabel: "Founded in Bangladesh" },
        { id: 2, number: "120+", label: "Projects Completed", sublabel: "Government Tenders" },
        { id: 3, number: "500+", label: "MW Power Capacity", sublabel: "Grid Integration" },
        { id: 4, number: "Class-A", label: "Enlisted Contractor", sublabel: "Verified Category" }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, duration: 0.6 }
        }
    };

    return (
        <section className="relative z-30 -mt-16 px-6 lg:px-16">
            <div className="container mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                        {stats.map((stat) => (
                            <div key={stat.id} className="p-10 group hover:bg-slate-50 transition-colors">
                                <div className="flex flex-col items-center lg:items-start">
                                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 flex items-center">
                                        {/* যদি নাম্বার হয় তবে কাউন্টার দেখাবে, নাহলে নরমাল টেক্সট */}
                                        {/[0-9]/.test(stat.number) ? (
                                            <Counter value={stat.number} />
                                        ) : (
                                            stat.number
                                        )}
                                    </h2>
                                    <div className="h-1 w-8 bg-blue-600 mt-3 mb-4 group-hover:w-16 transition-all duration-500"></div>
                                    <p className="text-sm font-bold text-slate-800 uppercase tracking-wide text-center lg:text-left">
                                        {stat.label}
                                    </p>
                                    <p className="text-xs font-semibold text-blue-500 mt-1 uppercase tracking-tighter opacity-70">
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