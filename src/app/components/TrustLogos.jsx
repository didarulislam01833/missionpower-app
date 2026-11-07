"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TrustLogos() {
    const logos = [
        {
            name: "BREB",
            full: "Bangladesh Rural Electrification Board",
            badge: "Enlisted Partner",
            image: "/assets/trust-logo/reb-logo.png"
        },
        {
            name: "BPDB",
            full: "Bangladesh Power Development Board",
            badge: "Grid Supplier",
            image: "/assets/trust-logo/reb-logo.png"
        },
        {
            name: "DESCO",
            full: "Dhaka Electric Supply Company Ltd.",
            badge: "Utility Network",
            image: "/assets/trust-logo/desco.png"
        },
        {
            name: "DPDC",
            full: "Dhaka Power Distribution Company Ltd.",
            badge: "Power Partner",
            image: "/assets/trust-logo/dpdc.jpg"
        },
        {
            name: "BMDA",
            full: "Barind Multipurpose Development Authority",
            badge: "Agricultural Grid",
            image: "/assets/trust-logo/bmda.jpg"
        },
        {
            name: "BADC",
            full: "Bangladesh Agricultural Development Corporation",
            badge: "Enlisted Contractor",
            image: "/assets/trust-logo/badc.png"
        },
        {
            name: "PBS",
            full: "Palli Bidyut Samity (80+ Units)",
            badge: "Active Units",
            image: "/assets/trust-logo/pbs.png"
        },
    ];

    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="py-20 md:py-28 bg-[#070A11] relative overflow-hidden">
            {/* Background Glow Accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-4 shadow-lg"
                    >
                        Official Enlistments
                    </motion.div>

                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
                        Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">National</span> Infrastructure
                    </h3>
                    <p className="mt-3 text-slate-400 font-medium max-w-xl text-sm sm:text-base">
                        Working alongside Bangladesh's most vital electrical and agricultural power organizations.
                    </p>
                </div>

                {/* Infinite Cinematic Slider */}
                <div className="relative mt-8">
                    {/* Cinematic Side Blurs */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#070A11] via-[#070A11]/80 to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#070A11] via-[#070A11]/80 to-transparent z-20 pointer-events-none" />

                    <motion.div
                        className="flex gap-6 py-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 35,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.04, y: -4 }}
                                className="flex-shrink-0"
                            >
                                {/* Organization Card - Dark Glassmorphism Design */}
                                <div className="w-72 sm:w-80 h-48 sm:h-52 flex flex-col items-center justify-between bg-slate-900/90 border border-slate-800 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-amber-500/50 hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)] transition-all duration-300 relative group overflow-hidden px-4 py-5 text-center">

                                    {/* Hover Top Border Glow */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                    {/* Logo Image */}
                                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl p-1.5 shadow-md flex items-center justify-center overflow-hidden shrink-0">
                                        <Image
                                            src={logo.image}
                                            alt={logo.name}
                                            fill
                                            className="object-contain p-1"
                                        />
                                    </div>

                                    {/* Name & Full Name Showcase */}
                                    <div className="flex flex-col items-center justify-center w-full px-2 my-1">
                                        <span className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-amber-400 transition-colors uppercase">
                                            {logo.name}
                                        </span>
                                        <span className="mt-1 text-[11px] sm:text-xs font-semibold text-slate-300 leading-snug">
                                            {logo.full}
                                        </span>
                                    </div>

                                    {/* Status Badge */}
                                    <span className="px-3 py-1 rounded-full bg-slate-800 text-[9px] font-extrabold text-amber-400 uppercase tracking-widest border border-slate-700 shrink-0">
                                        {logo.badge}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Trust Indicators */}
                <div className="mt-16 pt-12 border-t border-slate-800/80 flex flex-wrap justify-center gap-10 md:gap-20">
                    <div className="text-center group cursor-default">
                        <p className="text-2xl sm:text-4xl font-black text-white group-hover:text-amber-400 transition-colors">80+</p>
                        <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Active PBS Partners</p>
                    </div>
                    <div className="text-center group cursor-default">
                        <p className="text-2xl sm:text-4xl font-black text-white group-hover:text-amber-400 transition-colors">Class-A</p>
                        <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Govt. Contractor</p>
                    </div>
                    <div className="text-center group cursor-default">
                        <p className="text-2xl sm:text-4xl font-black text-white group-hover:text-amber-400 transition-colors">ISO 9001</p>
                        <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Quality Standards</p>
                    </div>
                </div>
            </div>
        </section>
    );
}