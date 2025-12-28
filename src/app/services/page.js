"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {
    const services = [
        {
            id: "power",
            number: "01",
            title: "Power Grid & Infrastructure",
            description: "End-to-end EPC solutions for electrical substations and high-voltage transmission lines. We ensure grid stability with precision engineering, catering to both industrial and national power needs.",
            features: ["132/33KV Substation Design", "High Voltage Transformer Installation", "Grid Synchronization & Testing", "Industrial Power Distribution"],
            image: "/assets/All/01-04.jpg"
        },
        {
            id: "civil",
            number: "02",
            title: "Civil Engineering & Land",
            description: "From large-scale industrial earth filling to riverbank protection, we shape the foundation of progress. Our civil solutions are built on sustainability, safety, and architectural integrity.",
            features: ["Industrial Land Development", "Piling & Deep Foundation", "Structural Design & Consultancy", "Dredging & River Management"],
            image: "/assets/All/01-02.jpg"
        },
        {
            id: "govt",
            number: "03",
            title: "Govt. Tender Projects",
            description: "As a trusted Class-A contractor, we specialize in high-priority government infrastructure projects, ensuring strict adherence to quality, timeline, and public safety regulations.",
            features: ["Strategic Project Planning", "Public Utility Infrastructure", "Quality Assurance & Compliance", "Large Scale Resource Management"],
            image: "/assets/All/01-03.jpg"
        }
    ];

    const processes = [
        { title: "Consultation", desc: "Understanding project requirements and feasibility." },
        { title: "Strategic Planning", desc: "Detailed engineering blueprints and resource mapping." },
        { title: "Execution", desc: "On-site development with rigorous safety standards." },
        { title: "Quality Check", desc: "Final testing and handover with documentation." }
    ];

    return (
        <main className="bg-white min-h-screen">

            {/* 1. HERO SECTION (Expanded) */}
            <section className="relative pt-40 pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 skew-x-12 transform origin-right"></div>
                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-600 font-black uppercase tracking-[0.6em] text-[10px] mb-6 block">Mission Power Land Ltd.</span>
                        <h1 className="text-6xl md:text-9xl font-black text-slate-900 uppercase italic tracking-tighter leading-[0.85] mb-8">
                            Engineering <br /> <span className="text-blue-600">Futures.</span>
                        </h1>
                        <p className="text-slate-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                            We provide high-tier engineering solutions, specializing in power infrastructure and land development across Bangladesh.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. STATS BAR (New) */}
            <div className="bg-slate-900 py-12">
                <div className="container mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Projects Done", val: "150+" },
                        { label: "Expert Engineers", val: "25+" },
                        { label: "Govt. Licenses", val: "Class-A" },
                        { label: "Experience", val: "12 Yrs" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left border-l border-slate-800 pl-6">
                            <h4 className="text-white text-3xl font-black italic">{stat.val}</h4>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. MAIN SERVICES (Alternating) */}
            <section className="py-20">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                    >
                        <div className="container mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-20 items-center">

                            <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                                <span className="text-blue-600/10 font-black text-9xl italic leading-none block -mb-8">{service.number}</span>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter mb-8 relative z-10">
                                    {service.title}
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                                    {service.description}
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-10 h-[2px] bg-slate-200 group-hover:w-14 group-hover:bg-blue-600 transition-all duration-300"></div>
                                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-800">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                transition={{ duration: 0.8 }}
                                className={`relative h-[500px] md:h-[650px] rounded-[3rem] overflow-hidden shadow-3xl ${index % 2 !== 0 ? 'md:order-1' : ''}`}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-transparent"></div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </section>

            {/* 4. WORK PROCESS SECTION (New) */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center mb-20">
                        <span className="text-blue-600 font-black uppercase tracking-widest text-[10px]">Execution Strategy</span>
                        <h2 className="text-5xl font-black text-slate-900 uppercase italic tracking-tighter mt-4">How we <span className="text-blue-600 text-outline">Operate.</span></h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-12">
                        {processes.map((step, i) => (
                            <div key={i} className="relative group">
                                <span className="text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-300 block mb-4">0{i + 1}</span>
                                <h3 className="text-lg font-black text-slate-900 uppercase mb-3">{step.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                                {i < 3 && <div className="hidden md:block absolute top-12 -right-6 w-12 h-[2px] bg-slate-200"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CALL TO ACTION (Improved) */}
            <section className="py-32 bg-slate-950 text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-white text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-12">
                        Ready to <span className="text-blue-600">Build?</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto mb-12 font-medium">
                        Partner with Mission Power Land for reliable, high-performance engineering and land solutions.
                    </p>
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-16 py-6 rounded-full font-black text-[12px] uppercase tracking-[0.4em] shadow-2xl hover:bg-white hover:text-slate-900 transition-all duration-300"
                        >
                            Start a Consultation
                        </motion.button>
                    </Link>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 border border-blue-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 border border-blue-800 rounded-full blur-3xl"></div>
                </div>
            </section>
        </main>
    );
}