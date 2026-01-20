"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Sun, Battery, Zap, BarChart3, ArrowRight, ShieldCheck,
    Settings, PenTool, ClipboardCheck, Activity, Droplets, ShieldAlert
} from 'lucide-react';

const SolarPage = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const gallery = [
        "/assets/solar/solar1.jpg",
        "/assets/solar/solar2.jpg",
        "/assets/solar/solar3.jpg",
        "/assets/solar/solar4.jpg",
        "/assets/solar/solar5.jpg",
    ];

    // এনিমেশন সেটিংস
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <main ref={targetRef} className="bg-white text-slate-900 min-h-screen overflow-x-hidden pt-20">

            {/* --- HERO: DYNAMIC SCALE ANIMATION --- */}
            <section className="relative h-[90vh] flex items-center justify-center bg-slate-50 overflow-hidden px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <Image src={gallery[0]} alt="Hero" fill className="object-cover opacity-20" />
                </motion.div>

                <div className="container mx-auto text-center relative z-10">
                    <motion.div {...fadeInUp}>
                        <h1 className="text-[10vw] md:text-[7vw] font-black leading-none tracking-tighter uppercase mb-6">
                            Solar <span className="text-blue-600 italic font-light">Evolved.</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-slate-500 text-lg md:text-xl font-light mb-10 leading-relaxed">
                            We don't just install panels. We engineer high-yield energy ecosystems for the next generation of industry.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-slate-900 text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-all duration-500">
                                View Technical Specs
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- 01. THE CORE SERVICES (EXPANDED) --- */}
            <section className="py-32 container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
                    {[
                        { icon: <Sun />, title: "PV System Design", desc: "Customized 3D modeling and shadow analysis for maximum yield." },
                        { icon: <Zap />, title: "Grid Integration", desc: "Seamless synchronization with PDB/DESCO/DPDC national grids." },
                        { icon: <Battery />, title: "Battery Storage", desc: "Lithium-ion BESS solutions for 24/7 industrial uptime." },
                        { icon: <PenTool />, title: "Structural Analysis", desc: "Roof load-bearing tests ensuring structural safety and integrity." },
                        { icon: <BarChart3 />, title: "Smart Telemetry", desc: "IoT-based remote monitoring with AI performance alerts." },
                        { icon: <ShieldCheck />, title: "O&M Services", desc: "25-year performance guarantee and regular system audits." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ backgroundColor: "#f8fafc" }}
                            className="bg-white p-12 group transition-all duration-500 cursor-default"
                        >
                            <div className="text-blue-600 mb-8 group-hover:rotate-12 transition-transform">
                                {React.cloneElement(item.icon, { size: 36, strokeWidth: 1 })}
                            </div>
                            <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- 02. UNIQUE SCROLL REVEAL SECTION --- */}
            <section className="py-32 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative h-[600px] rounded-sm overflow-hidden group">
                            <Image src={gallery[1]} alt="Engineering" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-blue-600/10" />
                        </div>
                        <div className="space-y-12">
                            <h2 className="text-5xl font-light leading-tight">Beyond <br /><span className="text-blue-400 font-bold uppercase tracking-tighter">Installation.</span></h2>

                            <div className="space-y-8">
                                {[
                                    { step: "01", t: "Feasibility", d: "Deep site audits and irradiation mapping." },
                                    { step: "02", t: "Procurement", d: "Sourcing Tier-1 Bloomberg listed PV modules." },
                                    { step: "03", t: "Deployment", d: "Precision installation by Class-A engineers." }
                                ].map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: 50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.2 }}
                                        className="flex gap-6 border-b border-white/10 pb-6"
                                    >
                                        <span className="text-blue-500 font-mono text-xl">{step.step}</span>
                                        <div>
                                            <h4 className="font-bold uppercase tracking-widest mb-2">{step.t}</h4>
                                            <p className="text-slate-400 text-sm">{step.d}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 03. MAINTENANCE & PROTECTION (NEW CONTENT) --- */}
            <section className="py-32 container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.5em] mb-4">Lifecycle Care</h2>
                    <h3 className="text-4xl font-black uppercase tracking-tighter">Asset Protection</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div whileHover={{ y: -10 }} className="p-10 bg-slate-50 flex gap-8 rounded-2xl">
                        <Droplets className="text-blue-600 shrink-0" size={40} />
                        <div>
                            <h4 className="font-bold mb-3 uppercase tracking-wider">Automated Cleaning</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Robotic or high-pressure water-fed pole systems to ensure panels maintain 100% efficiency in dusty environments.</p>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ y: -10 }} className="p-10 bg-slate-50 flex gap-8 rounded-2xl">
                        <ShieldAlert className="text-blue-600 shrink-0" size={40} />
                        <div>
                            <h4 className="font-bold mb-3 uppercase tracking-wider">Lightning Protection</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Advanced ESE lightning arrestors and surge protection devices (SPD) to safeguard your multi-million dollar investment.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- 04. HORIZONTAL PROJECT SHOWCASE --- */}
            <section className="bg-slate-50 py-32 overflow-hidden">
                <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                    <h2 className="text-3xl font-black uppercase italic tracking-tighter">Our Footprint</h2>
                    <div className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.3em]">Scroll Experience</div>
                </div>

                <motion.div
                    style={{ x: useTransform(scrollYProgress, [0.5, 1], [0, -1000]) }}
                    className="flex gap-8 px-6"
                >
                    {gallery.map((img, i) => (
                        <div key={i} className="relative w-[500px] h-[350px] shrink-0 overflow-hidden group">
                            <Image src={img} alt="Project" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-xs font-bold uppercase tracking-widest border border-white p-4">View Project Case Study</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* --- 05. DYNAMIC STATS --- */}
            <section className="py-32 bg-white text-center">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
                    {[
                        { val: "25MW+", t: "Installed Capacity" },
                        { id: "02", val: "99.9%", t: "System Uptime" },
                        { id: "03", val: "150+", t: "Projects Delivered" },
                        { id: "04", val: "25Y", t: "Linear Warranty" }
                    ].map((stat, idx) => (
                        <div key={idx} className="space-y-2">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                className="text-5xl font-black text-slate-900 tracking-tighter"
                            >
                                {stat.val}
                            </motion.div>
                            <div className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">{stat.t}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FINAL CALL TO ACTION --- */}
            <section className="py-40 bg-slate-900 flex justify-center items-center text-center px-6">
                <div>
                    <h2 className="text-6xl md:text-9xl font-black text-white/5 uppercase leading-none mb-[-2rem]">Precision</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase relative z-10 mb-12">Built to Last.</h3>
                    <Link href="/contact">
                        <button className="bg-blue-600 text-white px-16 py-6 rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all duration-500">
                            Request Technical Audit
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default SolarPage;