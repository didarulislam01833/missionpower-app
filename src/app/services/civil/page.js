"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Building2, Ruler, HardHat, Drill, Map, Construction,
    ArrowRight, CheckSquare, Layers, Home, MoveRight
} from 'lucide-react';

const CivilPage = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const images = [
        "/assets/civil/civil1.jpg",
        "/assets/civil/civil2.jpg",
        "/assets/civil/civil3.jpg",
        "/assets/civil/civil4.jpg",
        "/assets/civil/civil5.jpg",
        "/assets/civil/civil6.jpg",
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <main ref={targetRef} className="bg-white text-slate-900 min-h-screen overflow-x-hidden">

            {/* --- NAVBAR SPACER --- */}
            <div className="h-24 md:h-32 bg-white"></div>

            {/* --- HERO: ARCHITECTURAL CONCEPT --- */}
            <section className="relative py-20 border-b border-slate-100">
                <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-7"
                    >
                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase mb-8">
                            Solid <br /> <span className="text-blue-600 font-light italic">Foundations.</span>
                        </h1>
                        <p className="text-slate-500 max-w-lg text-lg font-light leading-relaxed mb-10 border-l-4 border-blue-600 pl-6">
                            From industrial steel structures to complex commercial foundations, we build the skeletons of tomorrow's infrastructure.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact">
                                <button className="bg-slate-900 text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-all duration-500">
                                    Start Construction Inquiry
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="lg:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image src={images[0]} alt="Civil Engineering Construction" fill className="object-cover" priority />
                        <div className="absolute bottom-0 left-0 bg-blue-600 p-8 text-white">
                            <p className="text-xs font-bold uppercase tracking-widest">Est. Precision</p>
                            <p className="text-2xl font-black">2024</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- CORE CAPABILITIES --- */}
            <section className="py-32 container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-xl">
                        <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">01. Engineering Scope</span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Turnkey Civil <br /> Solutions.</h2>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-slate-400 text-xs font-mono uppercase">Precision / Strength / Longevity</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: <Building2 />, title: "Industrial Pre-Fab", desc: "Expert assembly of high-grade steel structures and PEB sheds." },
                        { icon: <Layers />, title: "Foundation Works", desc: "Deep piling and heavy-duty concrete rafting for industrial plants." },
                        { icon: <Ruler />, title: "Surveying & GIS", desc: "Digital land mapping and topographical architectural planning." },
                        { icon: <Construction />, title: "Earthworks", desc: "Mass excavation, soil stabilization, and site preparation." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            {...fadeInUp}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-8 border border-slate-100 hover:border-blue-100 hover:bg-slate-50 transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                {React.cloneElement(item.icon, { size: 24, strokeWidth: 1.5 })}
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{item.title}</h3>
                            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- PARALLAX PROJECT PREVIEW --- */}
            <section className="py-32 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-5xl font-black tracking-tighter uppercase mb-6 italic">Built to <br /> Last <span className="text-blue-500 underline underline-offset-8">Generations.</span></h2>
                            <p className="text-slate-400 text-lg font-light leading-relaxed">
                                Our civil works are characterized by extreme durability and compliance with BNBC (Bangladesh National Building Code).
                            </p>
                        </motion.div>

                        <div className="grid gap-8">
                            {[
                                { t: "Seismic Resistance", d: "Earthquake-proof design and material testing." },
                                { t: "Sustainable Materials", d: "Eco-friendly concrete mixes and zero-waste construction." },
                                { t: "Structural Integrity", d: "20-year structural guarantee on all industrial builds." }
                            ].map((point, i) => (
                                <div key={i} className="flex gap-6 items-center">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <div>
                                        <h4 className="font-bold uppercase text-[10px] tracking-widest">{point.t}</h4>
                                        <p className="text-slate-500 text-xs">{point.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            style={{ y: useTransform(scrollYProgress, [0.4, 0.8], [0, -100]) }}
                            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl z-10 border-[15px] border-white/5"
                        >
                            <Image src={images[2]} alt="Structure" fill className="object-cover" />
                        </motion.div>
                        {/* Decorative floating image */}
                        <motion.div
                            style={{ y: useTransform(scrollYProgress, [0.4, 0.8], [0, 100]) }}
                            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-2xl overflow-hidden hidden lg:block border-8 border-slate-900 shadow-2xl"
                        >
                            <Image src={images[1]} alt="Construction Detail" fill className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- IMAGE GRID GALLERY --- */}
            <section className="py-32 container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-4">
                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group">
                            <Image src={images[3]} alt="Civil 3" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>
                    <div className="space-y-4 mt-8 md:mt-16">
                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group">
                            <Image src={images[4]} alt="Civil 4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="bg-blue-600 rounded-2xl p-8 text-white">
                            <h4 className="text-4xl font-black">150+</h4>
                            <p className="text-xs uppercase tracking-widest font-bold">Successful Projects</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group">
                            <Image src={images[5]} alt="Civil 5" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-40 bg-white flex flex-col items-center text-center border-t border-slate-100">
                <motion.div {...fadeInUp} className="max-w-2xl px-6">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12">Let's Build <br /> The <span className="text-blue-600 italic">Future.</span></h2>
                    <Link href="/contact">
                        <button className="flex items-center gap-6 bg-slate-900 text-white px-12 py-6 rounded-full text-xs font-bold uppercase tracking-[0.4em] hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-slate-200 group">
                            Inquire Now <MoveRight className="group-hover:translate-x-4 transition-transform" />
                        </button>
                    </Link>
                </motion.div>
            </section>
        </main>
    );
};

export default CivilPage;