"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0" />

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Left Side: Creative Image Composition */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Floating Experience Badge */}
                        <motion.div
                            initial={{ scale: 0, rotate: -20 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                            className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white z-30 shadow-2xl border-4 border-white"
                        >
                            <span className="text-3xl font-black">15+</span>
                            <span className="text-[10px] font-bold uppercase tracking-tighter">Years Exp.</span>
                        </motion.div>

                        {/* Main Image Frame */}
                        <motion.div
                            initial={{ opacity: 0, rounded: "100px" }}
                            whileInView={{ opacity: 1, rounded: "30px" }}
                            transition={{ duration: 1 }}
                            className="relative h-[600px] w-full overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[12px] border-white z-10"
                        >
                            <Image
                                src="/assets/All/01-01.jpg"
                                alt="Mission Power Land Leadership"
                                fill
                                className="object-cover"
                            />
                            {/* Subtle Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
                        </motion.div>

                        {/* Behind Decor: Dots Pattern */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-20 z-0">
                            <div className="grid grid-cols-4 gap-4">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 bg-blue-600 rounded-full" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Elite Content */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "80px" }}
                                transition={{ duration: 0.8 }}
                                className="h-1.5 bg-blue-600 rounded-full"
                            />
                            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                                Defining <span className="text-blue-600 italic">Integrity</span> in Engineering.
                            </h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-slate-600 text-xl leading-relaxed font-medium"
                        >
                            Mission Power Land is more than a Class-A contractor. We are the architects of
                            resilience, powering Bangladesh through innovative electrical grids and
                            sustainable land development solutions.
                        </motion.p>

                        {/* Glassmorphism Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Technical Mastery", label: "Govt. Grade", icon: "💎" },
                                { title: "Risk Management", label: "ISO Standard", icon: "🛡️" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 transition-all"
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
                        <div className="flex flex-wrap gap-6 items-center pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-slate-900 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200"
                            >
                                View Company Profile
                            </motion.button>

                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                                        <Image src={`/assets/All/01-0${i}.jpg`} alt="worker" fill className="object-cover" />
                                    </div>
                                ))}
                                <div className="pl-6 flex items-center">
                                    <span className="text-xs font-bold text-slate-500 underline uppercase tracking-tighter cursor-pointer">Meet Our Engineers</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}