"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Sun, Battery, Zap, BarChart3, ArrowRight, ShieldCheck,
    Droplets, ShieldAlert, Plus
} from 'lucide-react';

const SolarPage = () => {
    const gallery = [
        { url: "/assets/solar/solar1.jpg", title: "Industrial Plant A", location: "Dhaka" },
        { url: "/assets/solar/solar2.jpg", title: "Rooftop Array B", location: "Chittagong" },
        { url: "/assets/solar/solar3.jpg", title: "Grid Solution C", location: "Gazipur" },
        { url: "/assets/solar/solar4.jpg", title: "Commercial PV D", location: "Sylhet" },
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    };

    return (
        <main className="bg-white text-slate-900 min-h-screen selection:bg-blue-100">

            {/* --- HERO: MINIMALIST & BOLD --- */}
            <section className="relative h-[85vh] flex items-center pt-20 overflow-hidden">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-tighter mb-8">
                            SOLAR <br />
                            <span className="font-light italic text-blue-600">ENGINEERING</span><br />
                            FOR INDUSTRY.
                        </h1>
                        <p className="max-w-md text-slate-500 text-lg mb-10 font-light">
                            Mission Powerland delivers high-yield energy ecosystems. Precision-built, data-driven, and guaranteed for 25 years.
                        </p>
                        <div className="flex items-center gap-6">
                            <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all">
                                Get an Audit
                            </button>
                            <div className="h-px w-12 bg-slate-200" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Scroll to Explore</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-100"
                    >
                        <Image src={gallery[0].url} alt="Main" fill className="object-cover" priority />
                    </motion.div>
                </div>
            </section>

            {/* --- 01. THE SERVICES: CLEAN WHITE CARDS --- */}
            <section className="py-32 bg-slate-50/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <h2 className="text-4xl font-bold tracking-tighter uppercase">Core <br />Specialization</h2>
                        <p className="max-w-xs text-slate-400 text-sm">Our technical expertise spans the entire lifecycle of solar energy assets.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Sun />, title: "PV System Design", desc: "Advanced shadow analysis and 3D terrain modeling." },
                            { icon: <Zap />, title: "Grid Sync", desc: "Expert integration with national power infrastructure." },
                            { icon: <Battery />, title: "Storage", desc: "BESS solutions for uninterruptible operations." },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeInUp}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 group"
                            >
                                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {React.cloneElement(item.icon, { size: 24 })}
                                </div>
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 02. SMOOTH PROJECT GALLERY: STAGGERED REVEAL --- */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.4em]">Portfolio</span>
                        <h2 className="text-5xl font-bold tracking-tighter uppercase mt-4">Selected Works</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {gallery.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden mb-6">
                                    <Image
                                        src={project.url}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 right-6">
                                        <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Plus size={20} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-xl font-bold uppercase tracking-tight">{project.title}</h4>
                                        <p className="text-slate-400 text-sm uppercase font-medium tracking-widest">{project.location}</p>
                                    </div>
                                    <ArrowRight className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 03. TECHNICAL SPECS: MINIMALIST TABLE --- */}
            <section className="py-32 bg-slate-900 text-white rounded-[3rem] mx-4">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tighter uppercase mb-8">Engineering <br />Standards</h2>
                            <div className="space-y-6">
                                {[
                                    { label: "Module Type", val: "Tier-1 Bi-facial Monocrystalline" },
                                    { label: "Inverter", val: "String/Central High-Efficiency" },
                                    { label: "Mounting", val: "Hot-dip Galvanized / Aluminum" },
                                    { label: "Monitoring", val: "SCADA & Cloud-based IoT" }
                                ].map((spec, idx) => (
                                    <div key={idx} className="flex justify-between border-b border-white/10 pb-4">
                                        <span className="text-slate-400 text-sm uppercase tracking-widest">{spec.label}</span>
                                        <span className="font-bold text-sm">{spec.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                                <h5 className="text-3xl font-bold mb-2">25Y</h5>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Warranty</p>
                            </div>
                            <div className="p-8 bg-blue-600 rounded-3xl">
                                <h5 className="text-3xl font-bold mb-2">99%</h5>
                                <p className="text-[10px] text-blue-100 uppercase tracking-widest">Efficiency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="py-40 text-center">
                <motion.div {...fadeInUp}>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-12">
                        Start your <br /><span className="text-blue-600 italic font-light">Transition.</span>
                    </h2>
                    <Link href="/contact" className="inline-block border-2 border-slate-900 px-12 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                        Technical Consultation
                    </Link>
                </motion.div>
            </section>
        </main>
    );
};

export default SolarPage;