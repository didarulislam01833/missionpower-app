"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TrustLogos() {
    const logos = [
        { name: "BPDB", full: "Bangladesh Power Development Board" },
        { name: "PGCB", full: "Power Grid Company of Bangladesh" },
        { name: "BREB", full: "Rural Electrification Board" },
        { name: "LGED", full: "Local Govt. Engineering Dept" },
        { name: "RHD", ext: "Roads & Highways" },
        { name: "BPC", full: "Bangladesh Petroleum Corp" },
        { name: "DESCO", ext: "Electric Supply" },
        { name: "DPDC", ext: "Power Dist." },
    ];

    const infiniteLogos = [...logos, ...logos, ...logos];

    return (
        // ১. সেকশন ব্যাকগ্রাউন্ড: হালকা গ্রেডিয়েন্ট এবং সফ্ট শ্যাডো
        <section className="py-24 bg-[#fbfcfd] overflow-hidden relative border-y border-slate-100">

            <div className="container mx-auto px-6 mb-20">
                <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-slate-900 text-white px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.3em]"
                    >
                        Official Partners
                    </motion.div>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        The Power Behind Our <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Progress.</span>
                    </h3>
                </div>
            </div>

            {/* ২. Infinite "Go and Go" Carousel */}
            <div className="relative">
                {/* সাইড মাস্ক: প্রিমিয়াম ফেডিং ইফেক্ট */}
                <div className="absolute inset-y-0 left-0 w-40 md:w-80 bg-gradient-to-r from-[#fbfcfd] via-[#fbfcfd]/90 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-40 md:w-80 bg-gradient-to-l from-[#fbfcfd] via-[#fbfcfd]/90 to-transparent z-20 pointer-events-none" />

                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {infiniteLogos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 group">
                            {/* লোগো কার্ড: গ্লাস ইফেক্ট ও ডার্ক বর্ডার */}
                            <div className="w-56 h-32 flex flex-col items-center justify-center bg-white border-2 border-slate-50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] group-hover:border-blue-100 transition-all duration-700 relative overflow-hidden">

                                {/* Background Glow on Hover */}
                                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-50 blur-2xl group-hover:bg-blue-100 transition-all rounded-full" />

                                {/* Logo Typography */}
                                <span className="text-3xl font-black text-slate-200 group-hover:text-slate-900 transition-all duration-500 tracking-[ -0.05em]">
                                    {logo.name}
                                </span>

                                <span className="mt-2 text-[9px] font-bold text-slate-400 group-hover:text-blue-600 uppercase tracking-widest transition-colors">
                                    {logo.full || logo.ext}
                                </span>

                                {/* ছোট আইকনিক এলিমেন্ট */}
                                <div className="absolute top-4 left-4 w-1 h-4 bg-slate-100 group-hover:bg-blue-600 transition-all rounded-full" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ৩. Bottom Trust Bar */}
            <div className="mt-24 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <span className="text-3xl font-black text-slate-900">200+</span>
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Successful Missions</span>
                    </div>
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <span className="text-3xl font-black text-slate-900">15+</span>
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Years of Dominance</span>
                    </div>
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <span className="text-3xl font-black text-slate-900">ISO</span>
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Certified Standards</span>
                    </div>
                </div>
            </div>
        </section>
    );
}