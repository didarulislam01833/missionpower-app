"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- TECHNICAL DATA ---
// স্পেকগুলো কারখানার ইঞ্জিনিয়ারের কাছ থেকে নিশ্চিত করে নিন
const SERVICES_DATA = [
    {
        id: "01",
        title: "Single Phase Transformers",
        category: "Manufacturing",
        image: "/assets/Stats/singlePhase.jpg",
        desc: "Expertly crafted Single Phase Transformers designed for high durability and efficiency, meeting the power demands of residential and rural distribution networks across Bangladesh.",
        specs: [
            "Capacity Range: 5kVA to 50kVA",
            "Voltage Ratio: 6.35kV / 0.24kV (Standard)",
            "Cooling Method: ONAN (Oil Natural Air Natural)",
            "Core Material: CRGO Silicon Steel (Low Loss)",
            "Compliance: IEC 60076 / ANSI C57 Standards"
        ]
    },
    {
        id: "02",
        title: "Three Phase Power Solutions",
        category: "Industrial Grid",
        image: "/assets/Stats/threePhase.jpg",
        desc: "High-capacity Three Phase Transformers engineered for heavy industrial use. Built with precision to ensure stable power delivery for large-scale factories and urban grids.",
        specs: [
            "Capacity Range: 100kVA to 5000kVA",
            "Voltage Class: 11kV / 0.415kV or 33kV / 11kV",
            "Vector Group: Dyn11 (Standard Distribution)",
            "Efficiency: >98% with optimized load loss",
            "Features: Off-circuit Tap Changer / Buchholz Relay"
        ]
    },
    {
        id: "03",
        title: "Substation & HT/LT Panels",
        category: "Engineering",
        image: "/assets/Stats/substation.jpg",
        desc: "Complete 33/11KV substation setup featuring advanced HT/LT switchgear and automated control panels for reliable and safe power management.",
        specs: [
            "Panel Type: HT (VCB/LBS) and LT (MCCB/ACB)",
            "Rated Current: Up to 4000A (LT) / 630A (HT)",
            "Protection: IP44/54 Enclosure Rating",
            "Automation: Intelligent PFI & Relay Coordination",
            "Busbar: High Conductivity Electrolytic Copper"
        ]
    }
];

export default function ElectricalServices() {
    const [selectedService, setSelectedService] = useState(null);

    // Esc চাপলে মডাল বন্ধ, মডাল খোলা থাকলে পেছনের পেজ স্ক্রল হবে না
    useEffect(() => {
        if (!selectedService) return;
        const onKey = (e) => { if (e.key === 'Escape') setSelectedService(null); };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [selectedService]);

    return (
        <section className="py-16 md:py-24 bg-[#070A11] text-slate-100 overflow-hidden relative">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-8 lg:px-16 relative z-10">

                {/* --- HEADER --- */}
                <div className="max-w-3xl mb-14 md:mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <span>⚡ Industrial Excellence</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight uppercase">
                        Our Core <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Electrical</span> Divisions
                    </h2>
                </div>

                {/* --- SERVICES GRID --- */}
                <div className="space-y-16 md:space-y-32">
                    {SERVICES_DATA.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* --- IMAGE --- */}
                            <div className="relative w-full lg:w-1/2">
                                <div className={`absolute -top-10 ${index % 2 !== 0 ? 'right-4' : 'left-4'} text-[100px] md:text-[150px] font-black text-slate-800/40 leading-none select-none z-0`} aria-hidden="true">
                                    {service.id}
                                </div>

                                <motion.div
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="relative h-[280px] sm:h-[400px] md:h-[480px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-10 border border-slate-800 bg-slate-900"
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-transparent to-transparent opacity-80" />
                                </motion.div>
                            </div>

                            {/* --- TEXT --- */}
                            <motion.div
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="w-full lg:w-1/2 space-y-6"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-1 bg-amber-400 rounded-full"></span>
                                        <span className="text-amber-400 font-bold uppercase tracking-widest text-xs md:text-sm">{service.category}</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
                                    {service.desc}
                                </p>

                                <div className="pt-2">
                                    <button
                                        onClick={() => setSelectedService(service)}
                                        className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-950 font-extrabold rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] active:scale-95 group"
                                    >
                                        <span>Explore Technical Specs</span>
                                        <span className="ml-2 transition-transform group-hover:translate-x-1.5 font-bold">→</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- SPECS MODAL --- */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-label={`${selectedService.title} specifications`}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-lg max-h-[90dvh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl z-10"
                        >
                            <div className="p-6 sm:p-8">
                                <div className="flex justify-between items-start mb-6 gap-3">
                                    <div>
                                        <p className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-1">⚡ Typical Specifications</p>
                                        <h4 className="text-xl sm:text-2xl font-black text-white uppercase">{selectedService.title}</h4>
                                    </div>
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full transition-colors shrink-0"
                                        aria-label="Close"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="space-y-3 mb-4">
                                    {selectedService.specs.map((spec, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.08 }}
                                            className="flex items-center gap-3 text-slate-200 font-medium text-sm sm:text-base border-b border-slate-800 pb-3"
                                        >
                                            <div className="w-2 h-2 bg-amber-400 rounded-full shrink-0" />
                                            <span>{spec}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <p className="text-xs text-slate-400 mb-6">
                                    Exact ratings are made to your requirement. Contact us for the full datasheet.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link
                                        href="/contact?type=quote"
                                        onClick={() => setSelectedService(null)}
                                        className="flex-1 py-3.5 text-center bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-extrabold rounded-xl hover:from-amber-600 hover:to-yellow-700 transition-colors shadow-lg shadow-amber-500/20 active:scale-95"
                                    >
                                        Request a quote
                                    </Link>
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="flex-1 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors active:scale-95"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}