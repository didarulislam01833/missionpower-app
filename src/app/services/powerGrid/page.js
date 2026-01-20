"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Zap, Shield, Settings, Activity, Gauge, Cpu,
    ArrowRight, CheckCircle2, Factory, Construction
} from 'lucide-react';

const PowerGridPage = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const images = [
        "/assets/powerGrid/p-1.jpg",
        "/assets/powerGrid/p-2.jpg",
        "/assets/powerGrid/p-3.jpg",
        "/assets/powerGrid/p-4.jpg",
        "/assets/powerGrid/p-5.jpg",
        "/assets/powerGrid/p-6.jpg",
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <main ref={targetRef} className="bg-white text-slate-900 min-h-screen overflow-x-hidden">

            {/* --- FIXING NAVBAR OVERLAP (Empty Spacer) --- */}
            <div className="h-24 md:h-32 bg-slate-50"></div>

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[70vh] flex items-center bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 py-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-blue-600 w-12 h-[2px]" />
                            <span className="text-blue-600 text-[11px] uppercase tracking-[0.4em] font-bold italic">Engineering Power Systems</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-slate-900 uppercase">
                            High Voltage <br /> <span className="text-blue-600">Grid</span>
                        </h1>
                        <p className="text-slate-500 max-w-md text-lg font-light leading-relaxed mb-10">
                            Comprehensive solutions for Substation Design, Transmission, and Distribution Networks.
                        </p>
                        <Link href="/contact">
                            <button className="bg-slate-900 text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-all duration-500 rounded-sm shadow-xl shadow-slate-200">
                                Get Technical Quote
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-8 border-white"
                    >
                        <Image src={images[0]} alt="Power Grid Infrastructure" fill className="object-cover" priority />
                    </motion.div>
                </div>
            </section>

            {/* --- CORE CAPABILITIES --- */}
            <section className="py-24 md:py-32 container mx-auto px-6">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-slate-800">Grid Solutions & Systems</h2>
                    <p className="text-slate-400 font-mono text-sm">Industrial Scale Electrical Engineering</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 shadow-sm rounded-lg overflow-hidden">
                    {[
                        { icon: <Zap />, title: "GIS Substations", desc: "Advanced Gas Insulated Substation EPC services." },
                        { icon: <Settings />, title: "HT/LT Switchgear", desc: "Precision custom-built switchgear for industrial plants." },
                        { icon: <Cpu />, title: "Grid Automation", desc: "Implementation of SCADA and automated monitoring systems." },
                        { icon: <Activity />, title: "Load Management", desc: "Phase balancing and power factor correction units." },
                        { icon: <Construction />, title: "Line Erection", desc: "Erection of high-tension towers and conductor stringing." },
                        { icon: <Shield />, title: "System Safety", desc: "Comprehensive grounding and lightning protection systems." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ backgroundColor: "#fdfdfd" }}
                            className="bg-white p-12 group transition-all duration-500"
                        >
                            <div className="text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                                {React.cloneElement(item.icon, { size: 36, strokeWidth: 1.5 })}
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-4">{item.title}</h3>
                            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- SCROLLING GALLERY --- */}
            <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
                <div className="container mx-auto px-6 mb-12">
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Active Projects</p>
                </div>
                <motion.div
                    style={{ x: useTransform(scrollYProgress, [0.4, 0.9], [0, -1200]) }}
                    className="flex gap-8 px-6"
                >
                    {images.slice(1, 6).map((img, i) => (
                        <div key={i} className="relative w-[450px] h-[320px] shrink-0 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-md">
                            <Image src={img} alt={`Project ${i}`} fill className="object-cover" />
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* --- TECHNICAL SPECS SECTION --- */}
            <section className="py-32 container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl group order-2 lg:order-1">
                    <Image src={images[5]} alt="High Voltage Panel" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>

                <div className="space-y-8 order-1 lg:order-2">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-slate-900">
                        Reliability <br /> by <span className="text-blue-600">Design.</span>
                    </h2>
                    <p className="text-slate-600 text-lg font-light leading-relaxed">
                        Our systems are built to withstand heavy industrial loads and ensure seamless energy flow with minimal transmission loss.
                    </p>
                    <div className="grid gap-6">
                        {[
                            { t: "Class-A Licensed", d: "Certified for high-voltage government and private projects." },
                            { t: "IEC Standards", d: "Strict adherence to International Electrotechnical Commission protocols." },
                            { t: "Smart Telemetry", d: "Integrated IoT sensors for 24/7 grid health monitoring." }
                        ].map((spec, idx) => (
                            <div key={idx} className="flex gap-4 items-start border-l-2 border-blue-100 pl-6">
                                <div>
                                    <h5 className="font-bold uppercase text-xs tracking-widest text-slate-800">{spec.t}</h5>
                                    <p className="text-slate-500 text-xs mt-1">{spec.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="py-40 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10">
                        Future-Proofing <br /> <span className="text-blue-500 italic font-light">The Grid.</span>
                    </h2>
                    <Link href="/contact">
                        <button className="bg-blue-600 text-white px-14 py-6 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all duration-500">
                            Partner with us
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default PowerGridPage;