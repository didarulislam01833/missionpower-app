"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ElectricalServices() {
    const services = [
        {
            id: "01",
            title: "Single Phase Transformers",
            category: "Manufacturing",
            // Directory: /public/assets/Stats/
            image: "/assets/Stats/singlePhase.jpg",
            desc: "Expertly crafted Single Phase Transformers designed for high durability and efficiency, meeting the power demands of residential and rural distribution networks across Bangladesh.",
            link: "/services/single-phase"
        },
        {
            id: "02",
            title: "Three Phase Power Solutions",
            category: "Industrial Grid",
            image: "/assets/Stats/threePhase.jpg",
            desc: "High-capacity Three Phase Transformers engineered for heavy industrial use. Built with precision to ensure stable power delivery for large-scale factories and urban grids.",
            link: "/services/three-phase"
        },
        {
            id: "03",
            title: "Substation & HT/LT Panels",
            category: "Engineering",
            image: "/assets/Stats/substation.jpg",
            desc: "Complete 33/11KV substation setup featuring advanced HT/LT switchgear and automated control panels for reliable and safe power management.",
            link: "/services/substation"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16">

                {/* --- HEADER --- */}
                <div className="max-w-3xl mb-24">
                    <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">Industrial Excellence</span>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 mt-4 leading-tight">
                        Our Core <br /><span className="text-blue-600">Electrical</span> Divisions
                    </h2>
                </div>

                {/* --- SERVICES GRID --- */}
                <div className="space-y-32">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* --- IMAGE PART --- */}
                            <div className="relative w-full lg:w-1/2">
                                {/* Large Clear Number Behind Image */}
                                <div className={`absolute -top-16 ${index % 2 !== 0 ? '-right-10' : '-left-10'} text-[150px] font-black text-slate-100 leading-none select-none z-0`}>
                                    {service.id}
                                </div>

                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-100"
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover hover:scale-110 transition-transform duration-[2s]"
                                        priority={index === 0}
                                    />
                                </motion.div>
                            </div>

                            {/* --- TEXT CONTENT --- */}
                            <motion.div
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="w-full lg:w-1/2 space-y-8"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-10 h-1 bg-blue-600 rounded-full"></span>
                                        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">{service.category}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="text-slate-600 text-xl leading-relaxed max-w-xl">
                                    {service.desc}
                                </p>

                                <div className="pt-6">
                                    <a
                                        href={service.link}
                                        className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-200"
                                    >
                                        Explore Technical Specs →
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}