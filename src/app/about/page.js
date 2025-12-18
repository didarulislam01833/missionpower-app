"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Factory, Users, ArrowUpRight } from "lucide-react";

export default function AboutPage() {
    const team = [
        { name: "Mr. Hasanur Jaman", role: "Managing Director", img: "/assets/employee/3.jpg" },
        { name: "Mr. Saiful Arefin", role: "Power Division", img: "/assets/employee/1.jpg" },
        { name: "Mr. Mohiuddin Bhuiyan", role: "Legal Divison", img: "/assets/employee/4.jpg" },
        { name: "Mr. Sohel", role: "Head of Projects", img: "/assets/employee/2.jpg" }
    ];

    const stats = [
        { icon: Award, value: "100+", label: "Govt. Projects" },
        { icon: ShieldCheck, value: "100%", label: "Safety Record" },
        { icon: Factory, value: "10+ Yrs", label: "Engineering Legacy" },
        { icon: Users, value: "250+", label: "Skilled Workforce" }
    ];

    return (
        <main className="bg-[#fcfcfc] selection:bg-blue-600 selection:text-white">

            {/* --- HERO SECTION: BOLD & ARCHITECTURAL --- */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <span className="w-12 h-[1px] bg-blue-600"></span>
                            <span className="text-blue-600 font-bold uppercase tracking-[0.5em] text-[10px]">Since 2014</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-7xl md:text-9xl font-black text-slate-900 uppercase italic tracking-tighter leading-[0.85] mb-12"
                        >
                            Powering <br />
                            <span className="text-transparent border-t-slate-900 stroke-black drop-shadow-sm" style={{ WebkitTextStroke: '1px #0f172a' }}>Tomorrow's</span> <br />
                            <span className="text-blue-600">Nation</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed font-medium"
                        >
                            Mission Power Land is a premier Class-A contractor dedicated to the architectural and electrical evolution of Bangladesh.
                        </motion.p>
                    </div>
                </div>

                {/* Vertical Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 rotate-90 mb-8">Scroll</span>
                    <div className="w-[1px] h-12 bg-slate-200"></div>
                </div>
            </section>

            {/* --- PHILOSOPHY: THE ART OF PRECISION --- */}
            <section className="py-32 bg-slate-950 text-white overflow-hidden">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative group">
                            <motion.div
                                initial={{ scale: 1.1, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5]"
                            >
                                <Image
                                    src="/assets/All/01-05.jpg"
                                    alt="Engineering Excellence"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                            </motion.div>
                            {/* Decorative Square */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-blue-600/20 rounded-[3rem] -z-0"></div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter">
                                Our <span className="text-blue-600">Core</span> <br /> Philosophy
                            </h2>
                            <p className="text-slate-400 text-xl leading-relaxed italic">
                                "Infrastructure is the silent backbone of a thriving economy. We don't just pour concrete; we build trust."
                            </p>
                            <p className="text-slate-500 leading-relaxed">
                                Our multidisciplinary approach ensures that every bolt, wire, and beam meets global standards. By combining local expertise with world-class engineering discipline, we create legacies.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800">
                                {stats.slice(0, 2).map((s, i) => (
                                    <div key={i}>
                                        <h4 className="text-3xl font-black text-white">{s.value}</h4>
                                        <p className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- LEADERSHIP: THE FACES OF POWER --- */}
            <section className="py-32 bg-[#fcfcfc]">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-6xl font-black uppercase italic tracking-tighter text-slate-900 mb-6">
                                Leadership <br /> <span className="text-slate-300">Excellence</span>
                            </h2>
                            <p className="text-slate-500 font-medium">The visionaries steering Mission Power Land toward new horizons of engineering innovation.</p>
                        </div>
                        <div className="hidden md:block">
                            <button className="flex items-center gap-4 text-slate-900 group">
                                <span className="text-[10px] font-black uppercase tracking-widest">Join Our Team</span>
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                                    <ArrowUpRight size={18} />
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="relative h-[480px] rounded-[2.5rem] overflow-hidden mb-8 bg-slate-200 border border-white shadow-sm">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-105"
                                    />
                                    {/* Subtle Gradient for legibility */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="px-4 text-center">
                                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
                                        {member.role}
                                    </span>
                                    <h4 className="text-slate-900 text-2xl font-black uppercase italic tracking-tight leading-tight">
                                        {member.name}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA: MINIMALIST FINISH --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="relative rounded-[4rem] bg-blue-600 p-16 md:p-24 overflow-hidden text-center shadow-2xl shadow-blue-200">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <motion.h3
                            whileInView={{ scale: [0.95, 1] }}
                            className="relative z-10 text-5xl md:text-7xl font-black italic uppercase text-white tracking-tighter mb-12"
                        >
                            Constructing the <br /> Future Together
                        </motion.h3>
                        <button className="relative z-10 bg-slate-900 text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-blue-600 transition-all shadow-xl active:scale-95">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
}