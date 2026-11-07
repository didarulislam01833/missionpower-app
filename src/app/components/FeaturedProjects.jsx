"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS_DATA = [
    {
        id: "01",
        title: "Commercial & Industrial Rooftop Solar EPC",
        category: "Renewable Energy",
        image: "/assets/solar-home-page/solar-pic.png",
        location: "Gazipur Industrial Zone, Bangladesh",
        capacity: "500 kWp Grid-Tie System",
        desc: "High-efficiency photovoltaic installation engineered for heavy industrial power generation, reducing operational overhead and carbon emissions."
    },
    {
        id: "02",
        title: "Utility-Scale Solar PV Installation",
        category: "Green Power Grid",
        image: "/assets/solar-home-page/solar5.jpg",
        location: "Dhaka Division, Bangladesh",
        capacity: "1.2 MW Hybrid Solar Farm",
        desc: "Advanced solar farm setup complete with string inverters, intelligent monitoring, and seamless synchronization with local substations."
    },
    {
        id: "03",
        title: "33/11KV Grid Substation Integration",
        category: "Power Infrastructure",
        image: "/assets/banner/banner-img-7.jpg",
        location: "BREB / BPDB Network",
        capacity: "33/11kV Turnkey Setup",
        desc: "Complete HT/LT switchgear assembly, transformer erection, and automated control panel setup for reliable national grid distribution."
    },
    {
        id: "04",
        title: "Heavy-Duty Three-Phase Transformers",
        category: "Manufacturing",
        image: "/assets/banner/banner-img-6.jpg",
        location: "Mission Power Land Factory",
        capacity: "5000kVA Industrial Class",
        desc: "Precision-crafted power transformers tested under rigorous impulse and stability standards for maximum thermal and structural durability."
    }
];

export default function FeaturedProjects() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = activeTab === "All"
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(p => p.category === activeTab);

    return (
        <section className="py-20 md:py-28 bg-[#070A11] text-slate-100 relative overflow-hidden">
            {/* Background Glow Accents */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 lg:px-16 relative z-10">

                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-lg">
                            <span>⚡ Proven Engineering Track Record</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Projects</span> & Works
                        </h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
                        {["All", "Renewable Energy", "Power Infrastructure", "Manufacturing"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab
                                        ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- PROJECTS GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="group relative bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-amber-500/50 transition-all duration-500 flex flex-col justify-between"
                            >
                                {/* Project Image Container */}
                                <div className="relative h-[260px] sm:h-[320px] w-full overflow-hidden bg-slate-950">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-amber-500/30 px-3 py-1.5 rounded-full text-[11px] font-extrabold text-amber-400 uppercase tracking-wider shadow-lg">
                                        {project.category}
                                    </div>

                                    {/* Capacity Badge */}
                                    <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-lg">
                                        {project.capacity}
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                                            <span>📍</span> {project.location}
                                        </p>
                                        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-slate-300 leading-relaxed mt-3">
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mission Power Land Execution</span>
                                        <span className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 text-white flex items-center justify-center transition-colors">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}