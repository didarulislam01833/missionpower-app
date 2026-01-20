"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Globe,
    Landmark,
    TrainFront,
    Dam,
    Milestone,
    ShieldCheck,
    ArrowUpRight,
    Users,
    Zap,
    MapPin,
    Plus
} from 'lucide-react';

const PublicInfrastructure = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // ১০টি ছবির পাথ (public1.jpg থেকে public10.jpg)
    const images = Array.from({ length: 10 }, (_, i) => `/assets/public/public${i + 1}.jpg`);

    const textVariant = {
        initial: { opacity: 0, y: 100 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "circOut" }
    };

    return (
        <main ref={targetRef} className="bg-[#fcfcfc] text-slate-900 min-h-screen overflow-x-hidden">

            {/* --- NAVBAR SPACER --- */}
            <div className="h-24 md:h-32 bg-white"></div>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-12 pb-24 border-b border-slate-100 overflow-hidden">
                <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-4 items-stretch">
                    <div className="lg:col-span-8 flex flex-col justify-center">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block"
                        >
                            National Development
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="text-6xl md:text-[120px] font-black leading-[0.8] tracking-tighter uppercase"
                        >
                            Public <br /> <span className="text-slate-300">Impact.</span>
                        </motion.h1>
                    </div>
                    <div className="lg:col-span-4 relative aspect-[4/5] overflow-hidden rounded-t-[100px] shadow-2xl">
                        <motion.div style={{ scale: useTransform(scrollYProgress, [0, 0.2], [1.2, 1]) }} className="h-full w-full">
                            <Image src={images[0]} alt="Infrastructure Hero" fill className="object-cover" priority />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SKEWED MISSION SECTION --- */}
            <section className="py-32 bg-slate-900 text-white transform -skew-y-2 origin-left">
                <div className="container mx-auto px-6 transform skew-y-2 flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold uppercase tracking-tighter mb-8 leading-tight text-white">
                            Building the <br /> <span className="text-blue-500 italic">Core Backbone</span> <br /> of the nation.
                        </h2>
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-slate-400 font-light text-lg leading-relaxed border-l border-slate-700 pl-8">
                            From highway electrification to government office automation, Mission Power Land Limited delivers engineering excellence for the public sector.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- CORE SERVICES --- */}
            <section className="py-40 container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    {[
                        { icon: <Dam />, title: "Roads & Bridges", desc: "Specialized in large-scale structural engineering and connectivity." },
                        { icon: <Landmark />, title: "Government Offices", desc: "Modern electrical and civil infrastructure for administrative buildings." },
                        { icon: <TrainFront />, title: "Transport Hubs", desc: "Developing logistics and transportation ecosystems for the future." },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -15 }}
                            className="bg-white p-10 shadow-sm border-t-4 border-blue-600 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="text-blue-600 mb-8">{React.cloneElement(item.icon, { size: 40, strokeWidth: 1 })}</div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-tight">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- MASONRY GALLERY --- */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 mb-16">
                    <h2 className="text-2xl font-black uppercase tracking-widest border-b-2 border-blue-600 inline-block pb-2">Portfolio Gallery</h2>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 container mx-auto px-6 space-y-6">
                    {images.slice(1, 10).map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="relative group overflow-hidden rounded-xl bg-white shadow-lg"
                        >
                            <Image
                                src={img}
                                alt={`Public Project ${i + 1}`}
                                width={600}
                                height={800}
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                <p className="text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Plus size={14} /> View Project Detail
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- STATS SECTION --- */}
            <section className="py-32 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="relative">
                    <div className="text-[12rem] font-black text-slate-100 leading-none select-none">MPL</div>
                    <div className="absolute inset-0 flex flex-col justify-center">
                        <h4 className="text-4xl font-black uppercase tracking-tighter">Delivering <br /> Results.</h4>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-12">
                    {[
                        { val: "25+", label: "Districts Covered" },
                        { val: "12M", label: "Public Beneficiaries" },
                        { val: "100%", label: "Standard Safety" },
                        { val: "09+", label: "Govt. Partners" },
                    ].map((stat, i) => (
                        <div key={i}>
                            <h5 className="text-5xl font-black text-blue-600">{stat.val}</h5>
                            <p className="text-xs font-bold uppercase text-slate-400 tracking-widest mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="py-40 bg-slate-900 flex justify-center items-center overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="grid grid-cols-12 h-full w-full">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="border-r border-slate-700 h-full"></div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.div {...textVariant}>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-12">
                            Ready to <br /> <span className="text-blue-500 italic">Collaborate?</span>
                        </h2>
                        <Link href="/contact">
                            <button className="group relative bg-white text-slate-900 px-16 py-8 rounded-full overflow-hidden transition-all duration-500 hover:text-white">
                                <span className="relative z-10 text-sm font-bold uppercase tracking-[0.3em]">Launch Discussion</span>
                                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default PublicInfrastructure;