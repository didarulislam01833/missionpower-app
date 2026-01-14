"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TrustLogos() {
    const logos = [
        { name: "BPDB", full: "Bangladesh Power Development Board" },
        { name: "PGCB", full: "Power Grid Company of Bangladesh" },
        { name: "BREB", full: "Rural Electrification Board" },
        { name: "LGED", full: "Local Govt. Engineering Dept" },
        { name: "RHD", full: "Roads and Highways Department" },
        { name: "BPC", full: "Bangladesh Petroleum Corp" },
        { name: "DESCO", full: "Dhaka Electric Supply Co." },
        { name: "DPDC", full: "Power Distribution Co." },
    ];

    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
            {/* Background Gradient Accents - এই হালকা কালারগুলো সাইটকে দামী লুক দেয় */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50/50 blur-[100px] rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-xl shadow-blue-900/10"
                    >
                        Official Enlistments
                    </motion.div>

                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Powering <span className="text-blue-600">National</span> Infrastructure
                    </h3>
                    <p className="mt-4 text-slate-500 font-medium max-w-xl text-lg">
                        Working alongside Bangladesh's most vital government organizations.
                    </p>
                </div>

                {/* Infinite Cinematic Slider (Go and Go) */}
                <div className="relative mt-10">
                    {/* Cinematic Side Blurs - দামী ফিনিশিং */}
                    <div className="absolute inset-y-0 left-0 w-40 md:w-72 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-40 md:w-72 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/90 to-transparent z-20 pointer-events-none" />

                    <motion.div
                        className="flex gap-8 py-10"
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{
                            duration: 35,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="flex-shrink-0"
                            >
                                {/* Logo Card - Glass Design */}
                                <div className="w-56 h-32 flex flex-col items-center justify-center bg-white border border-slate-200 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.15)] hover:border-blue-400 transition-all duration-500 relative group overflow-hidden">

                                    {/* Hover Glow */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                    {/* Main Logo Text - স্পষ্ট এবং প্রিমিয়াম স্লেট কালার */}
                                    <span className="text-3xl font-black text-slate-800 tracking-tighter group-hover:text-blue-600 transition-colors">
                                        {logo.name}
                                    </span>

                                    <span className="mt-2 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center px-4 leading-tight opacity-100 group-hover:text-slate-600 transition-colors">
                                        {logo.full || "Authorized Entity"}
                                    </span>

                                    {/* Small Decoration dot */}
                                    <div className="absolute bottom-4 w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:bg-blue-600 transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Trust Indicators */}
                <div className="mt-16 pt-16 border-t border-slate-200 flex flex-wrap justify-center gap-12 md:gap-24 opacity-80">
                    <div className="text-center group cursor-default">
                        <p className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">150+</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Projects Completed</p>
                    </div>
                    <div className="text-center group cursor-default">
                        <p className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">Class-A</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Govt. Contractor</p>
                    </div>
                    <div className="text-center group cursor-default">
                        <p className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">ISO 9001</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Quality Standards</p>
                    </div>
                </div>
            </div>
        </section>
    );
}