"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutSection() {
    const [showComingSoon, setShowComingSoon] = useState(false);

    useEffect(() => {
        if (showComingSoon) {
            const timer = setTimeout(() => setShowComingSoon(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showComingSoon]);

    const fadeInSide = (direction = "up", delay = 0) => ({
        hidden: {
            opacity: 0,
            x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.7, delay, ease: "easeOut" }
        }
    });

    return (
        <section className="relative py-20 md:py-28 bg-[#070A11] text-slate-100 overflow-hidden">
            {/* Background Glow Accents */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* Left Side: Transformer & Factory Composition */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Floating Experience Badge */}
                        <motion.div
                            initial={{ scale: 0, rotate: -30 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
                            className="absolute -top-6 -right-3 md:-right-8 w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex flex-col items-center justify-center text-slate-950 z-30 shadow-[0_0_25px_rgba(245,158,11,0.4)] border-4 border-[#070A11]"
                        >
                            <span className="text-2xl md:text-3xl font-black">15+</span>
                            <span className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-tighter text-center">Years of<br />Excellence</span>
                        </motion.div>

                        {/* Main Image Frame */}
                        <motion.div
                            variants={fadeInSide("left", 0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative h-[360px] sm:h-[460px] md:h-[520px] w-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-4 border-slate-800 z-10 rounded-3xl bg-slate-900"
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
                                    className="object-cover filter brightness-[0.9]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#070A11]/90 via-[#070A11]/40 to-transparent" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Side: Electrical Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "70px" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="h-1.5 bg-amber-400 rounded-full"
                            />
                            <motion.h2
                                variants={fadeInSide("up", 0.3)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.1]"
                            >
                                Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Excellence</span> in Electrical Engineering.
                            </motion.h2>
                        </div>

                        <motion.p
                            variants={fadeInSide("up", 0.4)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-slate-300 text-base md:text-lg leading-relaxed font-normal"
                        >
                            Mission Power Land is a premier <strong className="text-white">Class-A Government Contractor</strong> specializing in the manufacturing of high-quality transformers, renewable solar systems, and 33/11kV substation solutions.
                        </motion.p>

                        {/* Final CTA Action */}
                        <motion.div
                            variants={fadeInSide("up", 0.6)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row flex-wrap gap-6 items-start sm:items-center pt-2 relative"
                        >
                            {/* DOWNLOAD BUTTON WITH NOTIFICATION */}
                            <div className="relative group w-full sm:w-auto">
                                <AnimatePresence>
                                    {showComingSoon && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: -55, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                            className="absolute left-0 right-0 mx-auto w-max px-4 py-2 bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider rounded-lg shadow-xl z-50 pointer-events-none"
                                        >
                                            🚀 Coming Soon! Profile updating.
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-500 rotate-45" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <motion.button
                                    onClick={() => setShowComingSoon(true)}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 rounded-xl font-black text-xs uppercase tracking-widest hover:from-amber-600 hover:to-yellow-700 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] text-center"
                                >
                                    Download Company Profile
                                </motion.button>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-800 overflow-hidden relative shadow-md"
                                        >
                                            <Image src={`/assets/Stats/singlePhase.jpg`} alt="engineer" fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <Link href="/about#employee" className="flex flex-col group cursor-pointer">
                                    <span className="text-xs font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">Engineering Team</span>
                                    <span className="text-[10px] font-bold text-amber-400 underline group-hover:text-white transition-colors">Licensed BPDB/BREB Experts</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}