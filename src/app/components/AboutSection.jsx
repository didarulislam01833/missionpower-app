"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
    // এনিমেশন ভেরিয়েন্টস
    const fadeInSide = (direction = "up", delay = 0) => ({
        hidden: {
            opacity: 0,
            x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.8, delay, ease: "easeOut" }
        }
    });

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Decorative Element - Animated */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 20 }}
                transition={{ duration: 1.5 }}
                className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/80 -skew-x-12 translate-x-20 z-0"
            />

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Left Side: Creative Image Composition */}
                    <div className="w-full lg:w-1/2 relative">

                        {/* Floating Experience Badge - Unique Pop Animation */}
                        <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.8 }}
                            className="absolute -top-10 -right-5 md:-right-10 w-32 h-32 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white z-30 shadow-2xl border-4 border-white"
                        >
                            <span className="text-3xl font-black">15+</span>
                            <span className="text-[10px] font-bold uppercase tracking-tighter">Years Exp.</span>
                        </motion.div>

                        {/* Main Image Frame - Morphing Animation */}
                        <motion.div
                            variants={fadeInSide("left", 0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative h-[550px] w-full overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white z-10 rounded-3xl"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                                className="h-full w-full relative"
                            >
                                <Image
                                    src="/assets/All/01-01.jpg"
                                    alt="Mission Power Land Leadership"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent" />
                            </motion.div>
                        </motion.div>

                        {/* Behind Decor: Animated Dots */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.4 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-10 -left-10 w-40 h-40 z-0"
                        >
                            <div className="grid grid-cols-4 gap-4">
                                {[...Array(16)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ repeat: Infinity, duration: 3, delay: i * 0.1 }}
                                        className="w-2 h-2 bg-blue-600 rounded-full"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Elite Content */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "80px" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="h-1.5 bg-blue-600 rounded-full"
                            />
                            <motion.h2
                                variants={fadeInSide("up", 0.3)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]"
                            >
                                Defining <span className="text-blue-600 italic">Integrity</span> in Engineering.
                            </motion.h2>
                        </div>

                        <motion.p
                            variants={fadeInSide("up", 0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-slate-600 text-xl leading-relaxed font-medium"
                        >
                            Mission Power Land is more than a Class-A contractor. We are the architects of
                            resilience, powering Bangladesh through innovative electrical grids and
                            sustainable land development solutions.
                        </motion.p>

                        {/* Staggered Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Technical Mastery", label: "Govt. Grade", icon: "💎" },
                                { title: "Risk Management", label: "ISO Standard", icon: "🛡️" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + (i * 0.2) }}
                                    whileHover={{ y: -8, backgroundColor: "#eff6ff" }}
                                    className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 transition-colors"
                                >
                                    <span className="text-3xl">{item.icon}</span>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-xs font-bold text-blue-500 uppercase tracking-widest">{item.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Final CTA Action */}
                        <motion.div
                            variants={fadeInSide("up", 0.9)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-8 items-center pt-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(59 130 246 / 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-slate-900 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
                            >
                                View Company Profile
                            </motion.button>

                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.2 + (i * 0.1) }}
                                            className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden relative shadow-sm"
                                        >
                                            <Image src={`/assets/All/01-0${i}.jpg`} alt="worker" fill className="object-cover" />
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-black text-slate-900 uppercase tracking-tighter">Expert Team</span>
                                    <span className="text-[10px] font-bold text-blue-600 underline cursor-pointer hover:text-slate-900 transition-colors">Meet Our Engineers</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}