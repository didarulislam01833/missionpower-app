"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServicesPage() {
    const services = [
        {
            id: "power",
            number: "01",
            title: "Power Grid & Infrastructure",
            description: "End-to-end EPC solutions for electrical substations and high-voltage transmission lines. We ensure grid stability with precision engineering.",
            features: ["132/33KV Substation", "Transformer Installation", "Grid Synchronization"],
            image: "/assets/All/01-04.jpg"
        },
        {
            id: "civil",
            number: "02",
            title: "Civil Engineering & Land",
            description: "From industrial earth filling to riverbank protection, we shape the foundation of progress with sustainable civil solutions.",
            features: ["Industrial Filling", "Piling & Foundation", "Structural Design"],
            image: "/assets/All/01-02.jpg"
        },
        {
            id: "govt",
            number: "03",
            title: "Govt. Tender Projects",
            description: "A trusted Class-A contractor for government infrastructure development, specializing in heavy-duty public utility projects.",
            features: ["Strategic Planning", "Project Management", "Quality Assurance"],
            image: "/assets/All/01-03.jpg"
        }
    ];

    return (
        <main className="bg-white min-h-screen">
            {/* 1. MINIMAL HERO */}
            <section className="pt-32 pb-20 border-b border-slate-100">
                <div className="container mx-auto px-6 lg:px-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-600 font-black uppercase tracking-[0.6em] text-[10px] mb-4 block">Our Expertise</span>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                            Technical <br /> <span className="text-slate-300">Excellence.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 2. SERVICES LIST (Alternating Layout) */}
            <section>
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`py-24 border-b border-slate-50 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                    >
                        <div className="container mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-16 items-center">

                            {/* Text Content */}
                            <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                                <span className="text-slate-300 font-black text-6xl italic leading-none">{service.number}</span>
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter mt-4 mb-6">
                                    {service.title}
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
                                    {service.description}
                                </p>

                                <ul className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-800">
                                            <span className="w-6 h-[1px] bg-blue-600"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Image with Classy Border Radius */}
                            <motion.div
                                whileInView={{ opacity: 1, scale: 1 }}
                                initial={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8 }}
                                className={`relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'md:order-1' : ''}`}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 hover:bg-transparent transition-colors duration-500"></div>
                            </motion.div>

                        </div>
                    </div>
                ))}
            </section>

            {/* 3. CLASSY CALL TO ACTION */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-10">
                        Discuss your next <br /> <span className="text-blue-600">Major Project.</span>
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-slate-900 px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all shadow-xl"
                    >
                        Contact Engineering Team
                    </motion.button>
                </div>
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50"></div>
            </section>
        </main>
    );
}