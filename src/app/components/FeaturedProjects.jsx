"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturedProjects() {
    // 10 Electrical & Transformer Projects Mapping
    const projects = [
        { id: 1, title: "33/11KV Control Panel Setup", image: "/assets/portfolio/p-1.jpg", category: "Substation", desc: "Integration of advanced control gear and HT/LT switchgear systems for industrial power grids." },
        { id: 2, title: "High-Voltage Transformer Units", image: "/assets/portfolio/p-2.jpg", category: "Manufacturing", desc: "Precision-engineered three-phase power transformers built for national infrastructure." },
        { id: 3, title: "Single Phase Distribution Units", image: "/assets/portfolio/p-3.jpg", category: "Transformers", desc: "Supplying high-efficiency single-phase units for rural electrification and residential power." },
        { id: 4, title: "Industrial VCB Installation", image: "/assets/portfolio/p-4.jpg", category: "Engineering", desc: "Setup of Vacuum Circuit Breakers (VCB) for enhanced protection and load management." },
        { id: 5, title: "Transformer Oil Filtration", image: "/assets/portfolio/p-5.jpg", category: "Maintenance", desc: "Specialized onsite oil filtration and diagnostic testing for industrial transformer longevity." },
        { id: 6, title: "Switchgear & Protection Gear", image: "/assets/portfolio/p-6.jpg", category: "Substation", desc: "Complete installation of protection relays and substation control panels." },
        { id: 7, title: "Heavy Load Three-Phase Grid", image: "/assets/portfolio/p-7.jpg", category: "Transformers", desc: "Commissioning large-scale transformers for heavy industrial factory zones." },
        { id: 8, title: "Automated Control Panel Systems", image: "/assets/portfolio/p-8.jpg", category: "Engineering", desc: "Implementation of SCADA-ready control panels for real-time monitoring of power stations." },
        { id: 9, title: "Custom Power Solutions", image: "/assets/portfolio/p-9.jpg", category: "Special Projects", desc: "Designing and installing customized electrical units for specialized industrial needs." },
        { id: 10, title: "Grid Infrastructure Upgrade", image: "/assets/portfolio/p-10.jpg", category: "Public Sector", desc: "Partnering with national power boards to upgrade existing 33KV substation networks." }
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16">

                {/* --- HEADER --- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
                >
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs mb-3 block">Power Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                            Powering Excellence <br /> Across 10 Key Sectors
                        </h2>
                    </div>
                    <Link href="/portfolio" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg">
                        View Detailed Scope
                    </Link>
                </motion.div>

                {/* --- 10 PROJECT GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group cursor-pointer bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative h-60 w-full rounded-[1.8rem] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                                        <ExternalLink className="text-white w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 px-2 mb-2">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                                    {project.category}
                                </span>
                                <h3 className="text-lg font-black text-slate-900 mt-3 group-hover:text-blue-600 transition-colors leading-tight">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- MODAL --- */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[999] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="bg-white rounded-[3rem] p-6 md:p-10 max-w-2xl w-full shadow-2xl relative"
                            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="absolute top-6 right-6 bg-slate-100 hover:bg-red-500 hover:text-white p-2 rounded-full transition-all" onClick={() => setSelectedProject(null)}>
                                <X size={24} />
                            </button>

                            <div className="relative h-72 w-full rounded-3xl overflow-hidden mb-8 shadow-xl">
                                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                            </div>

                            <span className="text-blue-600 font-black uppercase tracking-widest text-xs">{selectedProject.category}</span>
                            <h3 className="text-3xl font-black text-slate-900 mt-2 mb-4 leading-tight">{selectedProject.title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">{selectedProject.desc}</p>

                            <Link href="/contact" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                                Request Technical Details
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}