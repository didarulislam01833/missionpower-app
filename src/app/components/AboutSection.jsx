"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ---- মালিকের কাছ থেকে নিশ্চিত করে বদলান ----
const PROFILE_PDF = null;          // PDF থাকলে যেমন: "/company-profile.pdf" (public ফোল্ডারে রাখুন)
const WHATSAPP = "8801810098909";
const YEARS = "15+";               // StatsSection-এর সঙ্গে একই রাখুন

const fadeIn = (delay = 0, direction = "up") => ({
    hidden: { opacity: 0, x: direction === "left" ? -40 : 0, y: direction === "up" ? 30 : 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" } },
});

const profileBtnClass =
    "w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-950 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] text-center active:scale-95";

export default function AboutSection() {
    const whatsappHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hello, please send me the Mission Power Land company profile."
    )}`;

    return (
        <section className="relative py-16 md:py-28 bg-[#070A11] text-slate-100 overflow-hidden">
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

                    {/* Left: factory photo */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ scale: 0, rotate: -30 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
                            className="absolute -top-6 right-2 md:-right-8 w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex flex-col items-center justify-center text-slate-950 z-30 shadow-[0_0_25px_rgba(245,158,11,0.4)] border-4 border-[#070A11]"
                        >
                            <span className="text-2xl md:text-3xl font-black">{YEARS}</span>
                            <span className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-tighter text-center">Years of<br />Excellence</span>
                        </motion.div>

                        <motion.div
                            variants={fadeIn(0.2, "left")}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative h-[300px] sm:h-[460px] md:h-[520px] w-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-4 border-slate-800 z-10 rounded-3xl bg-slate-900"
                        >
                            {/* Manufacturing পেজের আসল ফ্যাক্টরির ছবি */}
                            <Image
                                src="/assets/manufacturing-excellence/banner-img-2.jpg"
                                alt="Mission Power Land transformer manufacturing plant"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover filter brightness-[0.9]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#070A11]/80 via-[#070A11]/30 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Right: content */}
                    <div className="w-full lg:w-1/2 space-y-7">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "70px" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="h-1.5 bg-amber-400 rounded-full"
                            />
                            <motion.h2
                                variants={fadeIn(0.2)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.1]"
                            >
                                Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Excellence</span> in Electrical Engineering.
                            </motion.h2>
                        </div>

                        <motion.p
                            variants={fadeIn(0.3)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-slate-300 text-base md:text-lg leading-relaxed"
                        >
                            Mission Power Land is a premier <strong className="text-white">Class-A Government Contractor</strong> specializing in the manufacturing of high-quality transformers, renewable solar systems, and 33/11kV substation solutions.
                        </motion.p>

                        <motion.div
                            variants={fadeIn(0.4)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row flex-wrap gap-6 items-start sm:items-center pt-2"
                        >
                            {PROFILE_PDF ? (
                                <a href={PROFILE_PDF} download className={profileBtnClass}>
                                    Download Company Profile
                                </a>
                            ) : (
                                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={profileBtnClass}>
                                    Request Company Profile
                                </a>
                            )}

                            {/* Leadership: আসল ছবি (আগে ট্রান্সফরমারের ছবি তিনবার ছিল) */}
                            <Link href="/about#employee" className="flex items-center gap-3 group">
                                <div className="flex -space-x-3">
                                    {["/assets/employee/5.jpeg", "/assets/employee/3.jpg"].map((src) => (
                                        <div key={src} className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-800 overflow-hidden relative shadow-md">
                                            <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <span className="flex flex-col">
                                    <span className="text-xs font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">Meet our team</span>
                                    <span className="text-[11px] font-bold text-amber-400 underline group-hover:text-white transition-colors">Leadership & engineers</span>
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}