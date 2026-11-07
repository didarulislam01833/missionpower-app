"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = ["All", "Solar", "Power Infrastructure", "Manufacturing"];

// ছবি না পেলে এটি দেখাবে, কার্ড কখনো ফাঁকা থাকবে না
const FALLBACK_IMAGE = "/assets/banner/banner-img-1.jpg";

const PROJECTS_DATA = [
    {
        id: "01",
        group: "Solar",
        title: "Commercial & Industrial Rooftop Solar EPC",
        category: "Renewable Energy",
        image: "/assets/solar-home-page/solar-pic.png",
        location: "Gazipur Industrial Zone, Bangladesh",
        capacity: "500 kWp Grid-Tie System",
        desc: "High-efficiency photovoltaic installation engineered for heavy industrial power generation, reducing operational overhead and carbon emissions."
    },
    {
        id: "02",
        group: "Solar",
        title: "Utility-Scale Solar PV Installation",
        category: "Green Power Grid",
        image: "/assets/solar-home-page/solar5.jpg",
        location: "Dhaka Division, Bangladesh",
        capacity: "1.2 MW Hybrid Solar Farm",
        desc: "Advanced solar farm setup complete with string inverters, intelligent monitoring, and seamless synchronization with local substations."
    },
    {
        id: "03",
        group: "Power Infrastructure",
        title: "33/11KV Grid Substation Integration",
        category: "Power Infrastructure",
        image: "/assets/banner/banner-img-5.jpg",
        location: "BREB / BPDB Network",
        capacity: "33/11kV Turnkey Setup",
        desc: "Complete HT/LT switchgear assembly, transformer erection, and automated control panel setup for reliable national grid distribution."
    },
    {
        id: "04",
        group: "Manufacturing",
        title: "Heavy-Duty Three-Phase Transformers",
        category: "Manufacturing",
        image: "/assets/banner/banner-img-1.jpg",
        location: "Mission Power Land Factory",
        capacity: "5000kVA Industrial Class",
        desc: "Precision-crafted power transformers tested under rigorous impulse and stability standards for maximum thermal and structural durability."
    }
];

function ProjectImage({ src, alt }) {
    const [current, setCurrent] = useState(src);

    return (
        <Image
            src={current}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            onError={() => {
                if (current !== FALLBACK_IMAGE) setCurrent(FALLBACK_IMAGE);
            }}
        />
    );
}

export default function FeaturedProjects() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = activeTab === "All"
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter((p) => p.group === activeTab);

    return (
        <section className="py-12 md:py-16 bg-[#070A11] text-slate-100 relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 lg:px-16 relative z-10">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-lg">
                            <span>⚡ Proven Engineering Track Record</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Projects</span> & Works
                        </h2>
                    </div>

                    <div
                        role="tablist"
                        aria-label="Filter projects"
                        className="flex gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 overflow-x-auto max-w-full"
                    >
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                role="tab"
                                aria-selected={activeTab === tab}
                                onClick={() => setActiveTab(tab)}
                                className={`shrink-0 px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab
                                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* PROJECTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="group relative bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-amber-500/50 transition-colors duration-500 flex flex-col"
                            >
                                <div className="relative h-[220px] sm:h-[300px] w-full overflow-hidden bg-slate-950">
                                    <ProjectImage src={project.image} alt={project.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-amber-500/30 px-3 py-1.5 rounded-full text-[11px] font-extrabold text-amber-400 uppercase tracking-wider shadow-lg">
                                        {project.category}
                                    </div>
                                </div>

                                <div className="p-5 sm:p-8 flex flex-col flex-grow">
                                    <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                                        <span aria-hidden="true">📍</span> {project.location}
                                    </p>
                                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="mt-3 inline-block self-start px-3 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wide">
                                        {project.capacity}
                                    </p>

                                    <p className="text-sm text-slate-300 leading-relaxed mt-3 flex-grow">
                                        {project.desc}
                                    </p>

                                    <Link
                                        href="/portfolio"
                                        className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-400 hover:text-amber-400 uppercase tracking-wider transition-colors"
                                    >
                                        <span>See full portfolio</span>
                                        <span className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 text-white flex items-center justify-center transition-colors" aria-hidden="true">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}