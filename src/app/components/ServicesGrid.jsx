"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- TECHNICAL DATA ---
const SERVICES_DATA = [
    {
        id: "01",
        title: "Single Phase Transformers",
        category: "Manufacturing",
        image: "/assets/Stats/singlePhase.jpg",
        desc: "Expertly crafted Single Phase Transformers designed for high durability and efficiency, meeting the power demands of residential and rural distribution networks across Bangladesh.",
        link: "/services/single-phase",
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
        link: "/services/three-phase",
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
        link: "/services/substation",
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

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16">

                {/* --- HEADER --- */}
                <div className="max-w-3xl mb-24">
                    <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">Industrial Excellence</span>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 mt-4 leading-tight">
                        Our Core <br /><span className="text-blue-600">Electrical</span> Divisions
                    </h2>
                </div>

                {/* --- SERVICES GRID --- */}
                <div className="space-y-32">
                    {SERVICES_DATA.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* --- IMAGE PART --- */}
                            <div className="relative w-full lg:w-1/2">
                                <div className={`absolute -top-16 ${index % 2 !== 0 ? '-right-10' : '-left-10'} text-[150px] font-black text-slate-100 leading-none select-none z-0`}>
                                    {service.id}
                                </div>

                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-100"
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover hover:scale-110 transition-transform duration-[2s]"
                                        priority={index === 0}
                                    />
                                </motion.div>
                            </div>

                            {/* --- TEXT CONTENT --- */}
                            <motion.div
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="w-full lg:w-1/2 space-y-8"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-10 h-1 bg-blue-600 rounded-full"></span>
                                        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">{service.category}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="text-slate-600 text-xl leading-relaxed max-w-xl">
                                    {service.desc}
                                </p>

                                <div className="pt-6">
                                    <button
                                        onClick={() => setSelectedService(service)}
                                        className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-200 group"
                                    >
                                        Explore Technical Specs
                                        <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- ANIMATED MODAL --- */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />

                        {/* Modal Card */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">Technical Datasheet</p>
                                        <h4 className="text-2xl font-black text-slate-900">{selectedService.title}</h4>
                                    </div>
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {selectedService.specs.map((spec, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-3 text-slate-700 font-medium border-b border-slate-50 pb-3"
                                        >
                                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                            {spec}
                                        </motion.div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100"
                                >
                                    Close Specifications
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}