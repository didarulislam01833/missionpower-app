"use client";

import React, { useState, useEffect } from 'react'; // Added useState and useEffect
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutSection() {
    const [showComingSoon, setShowComingSoon] = useState(false);

    // Auto-hide the message after 3 seconds
    useEffect(() => {
        if (showComingSoon) {
            const timer = setTimeout(() => setShowComingSoon(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showComingSoon]);

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
            {/* Background Decorative Element */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 20 }}
                transition={{ duration: 1.5 }}
                className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/80 -skew-x-12 translate-x-20 z-0"
            />

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Left Side: Transformer/Factory Composition */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Floating Experience Badge */}
                        <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.8 }}
                            className="absolute -top-10 -right-5 md:-right-10 w-32 h-32 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white z-30 shadow-2xl border-4 border-white"
                        >
                            <span className="text-3xl font-black">15+</span>
                            <span className="text-[10px] font-bold uppercase tracking-tighter text-center">Years of<br />Excellence</span>
                        </motion.div>

                        {/* Main Image Frame */}
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
                                    src="/assets/Stats/threePhase.jpg"
                                    alt="Mission Power Land Transformer Factory"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Side: Electrical Content */}
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
                                Powering <span className="text-blue-600 italic">Excellence</span> in Electrical Engineering.
                            </motion.h2>
                        </div>

                        <motion.p
                            variants={fadeInSide("up", 0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-slate-600 text-xl leading-relaxed font-medium"
                        >
                            Mission Power Land is a premier **Class-A Government Contractor** specializing
                            in the manufacturing of high-quality transformers and 33/11kV substation solutions.
                        </motion.p>

                        {/* Final CTA Action */}
                        <motion.div
                            variants={fadeInSide("up", 0.9)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-8 items-center pt-4 relative"
                        >
                            {/* DOWNLOAD BUTTON WITH NOTIFICATION */}
                            <div className="relative group">
                                <AnimatePresence>
                                    {showComingSoon && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: -60, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                            className="absolute left-0 right-0 mx-auto w-max px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-xl z-50 pointer-events-none"
                                        >
                                            🚀 Coming Soon! We're updating our profile.
                                            {/* Small Arrow */}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-600 rotate-45" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <motion.button
                                    onClick={() => setShowComingSoon(true)}
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(59 130 246 / 0.5)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-5 bg-slate-900 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
                                >
                                    Download Company Profile
                                </motion.button>
                            </div>

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
                                            <Image src={`/assets/Stats/singlePhase.jpg`} alt="engineer" fill className="object-cover" />
                                        </motion.div>
                                    ))}
                                </div>
                                <Link href="/about#employee" className="flex flex-col group cursor-pointer">
                                    <span className="text-xs font-black text-slate-900 uppercase tracking-tighter group-hover:text-blue-600 transition-colors">Engineering Team</span>
                                    <span className="text-[10px] font-bold text-blue-600 underline group-hover:text-slate-900 transition-colors">Licensed BPDB/BREB Experts</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}