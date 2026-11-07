"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sun, PlugZap, Wrench } from 'lucide-react';

const FEATURES = [
    {
        icon: Sun,
        title: "Commercial & Industrial Rooftop Solar",
        text: "Custom-engineered high-efficiency photovoltaic systems designed to significantly cut industrial energy overhead and carbon footprints.",
    },
    {
        icon: PlugZap,
        title: "Grid-Tie & Hybrid Inverter Integration",
        text: "Seamless synchronization with existing 33/11kV substations and national utility lines ensuring uninterrupted power flow.",
    },
    {
        icon: Wrench,
        title: "Turnkey EPC & Maintenance",
        text: "Complete structural mounting, DC/AC cabling, smart monitoring, and certified Class-A government execution.",
    },
];

export default function SolarSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    // ভিডিও চলাকালীন Esc চাপলে বন্ধ
    useEffect(() => {
        if (!isPlaying) return;
        const onKey = (e) => { if (e.key === 'Escape') setIsPlaying(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isPlaying]);

    return (
        <section className="py-12 md:py-16 bg-[#05070B] text-slate-100 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 lg:px-16 relative z-10">
                <div className="max-w-3xl mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-lg">
                        <span>Renewable Energy & Solar EPC</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
                        Powering The Future <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">With Advanced Solar Systems</span>
                    </h2>
                    <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
                        Mission Power Land Limited extends its engineering expertise into large-scale commercial and industrial solar PV installations, hybrid mini-grids, and sustainable green energy solutions across Bangladesh.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Video / Image */}
                    <div className="lg:col-span-7 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[260px] sm:h-[420px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-slate-800 bg-slate-900 group"
                        >
                            {!isPlaying ? (
                                <>
                                    <Image
                                        src="/assets/solar-home-page/solar-pic.png"
                                        alt="Mission Power Land solar installation"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 58vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                    <button
                                        onClick={() => setIsPlaying(true)}
                                        className="absolute inset-0 flex flex-col items-center justify-center gap-3 group/btn"
                                        aria-label="Play solar site operation video"
                                    >
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.5)] group-hover/btn:scale-110 transition-transform">
                                            <svg className="w-8 h-8 ml-1 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs sm:text-sm font-extrabold text-white tracking-widest uppercase bg-black/60 px-4 py-1.5 rounded-full border border-amber-500/30 backdrop-blur-md">
                                            Watch Site Operation Video
                                        </span>
                                    </button>
                                </>
                            ) : (
                                <div className="absolute inset-0 bg-black flex items-center justify-center">
                                    {/* playsInline: iPhone-এ পুরো স্ক্রিনে না গিয়ে এখানেই চলে */}
                                    <video
                                        controls
                                        autoPlay
                                        playsInline
                                        preload="metadata"
                                        poster="/assets/solar-home-page/solar-pic.png"
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/assets/solar-home-page/solar-works.mp4" type="video/mp4" />
                                        Your browser cannot play this video.
                                    </video>
                                    <button
                                        onClick={() => setIsPlaying(false)}
                                        className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 text-white rounded-full border border-slate-700 hover:bg-amber-500 hover:text-black transition-colors z-30"
                                        aria-label="Close video"
                                    >
                                        ✕
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Feature cards */}
                    <div className="lg:col-span-5 space-y-4 md:space-y-6">
                        {FEATURES.map(({ icon: Icon, title, text }) => (
                            <div
                                key={title}
                                className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-colors shadow-xl"
                            >
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                                    <Icon size={20} aria-hidden="true" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-2">{title}</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
                            </div>
                        ))}

                        <Link
                            href="/contact?type=quote"
                            className="flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-950 font-extrabold rounded-xl text-sm shadow-[0_0_20px_rgba(245,158,11,0.25)] active:scale-95 transition-all"
                        >
                            Request a solar quotation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}