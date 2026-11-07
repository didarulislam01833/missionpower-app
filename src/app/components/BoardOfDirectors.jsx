"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, UserCheck } from 'lucide-react';

export default function BoardOfDirectors() {
    const directors = [
        {
            name: "Shokina Akter",
            title: "Chairman",
            role: "Strategic Leadership & Corporate Governance",
            bio: "Steering Mission Power Land Limited with a visionary focus on national power sector advancement, enterprise governance, and sustainable infrastructure growth.",
            image: "/assets/employee/5.jpeg",
            icon: <Award className="w-5 h-5 text-amber-400" />
        },
        {
            name: "Mr. Hasanur Jaman",
            title: "Managing Director",
            role: "Operational Excellence & Executive Direction",
            bio: "Leading the core technical operations, high-voltage substation projects, transformer manufacturing, and Class-A government contract execution across Bangladesh.",
            image: "/assets/employee/3.jpg",
            icon: <ShieldCheck className="w-5 h-5 text-amber-400" />
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-[#070A11] relative overflow-hidden border-t border-slate-800/80">
            {/* Background Glow Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-4 shadow-lg"
                    >
                        Corporate Governance
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                        Board Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Directors</span>
                    </h2>
                    <p className="mt-3 text-slate-400 font-medium max-w-xl text-sm sm:text-base">
                        Guided by experienced leadership driving high-voltage engineering and power infrastructure in Bangladesh.
                    </p>
                </div>

                {/* Executive Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {directors.map((director, index) => (
                        <motion.div
                            key={director.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 relative group transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)] flex flex-col justify-between"
                        >
                            {/* Hover Top Glow Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

                            <div>
                                {/* Top Header: Image & Icon Badge */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-md bg-slate-800 shrink-0">
                                        <Image
                                            src={director.image}
                                            alt={director.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                                            {director.icon}
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-slate-800 text-[9px] font-extrabold text-amber-400 uppercase tracking-widest border border-slate-700">
                                            Executive
                                        </span>
                                    </div>
                                </div>

                                {/* Title & Name */}
                                <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-1">
                                    {director.title}
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase group-hover:text-amber-400 transition-colors mb-2">
                                    {director.name}
                                </h3>

                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800/80 pb-4">
                                    {director.role}
                                </p>

                                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                                    {director.bio}
                                </p>
                            </div>

                            <div className="mt-8 pt-4 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                <UserCheck size={16} className="text-amber-400" />
                                <span>Mission Power Land Ltd.</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}