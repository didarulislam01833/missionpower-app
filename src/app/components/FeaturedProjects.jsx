"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturedProjects() {
    // 9 Projects with Universal Electrical Engineering Titles
    const projects = [
        { id: 1, title: "High-Voltage Transformer Assembly", image: "/assets/portfolio/p-1.jpg", category: "Manufacturing", desc: "Precision assembly of industrial-grade transformers ensuring peak performance and durability." },
        { id: 2, title: "33/11kV Substation Engineering", image: "/assets/portfolio/p-2.jpg", category: "Substation", desc: "Comprehensive substation design and integration for national power distribution networks." },
        { id: 3, title: "HT/LT Control Panel Board", image: "/assets/portfolio/p-3.jpg", category: "Engineering", desc: "Customized electrical control panels designed for maximum safety and load management." },
        { id: 4, title: "Three-Phase Grid Solutions", image: "/assets/portfolio/p-4.jpg", category: "Power Grid", desc: "Deploying robust three-phase systems for large-scale industrial and commercial sectors." },
        { id: 5, title: "Distribution Transformer Unit", image: "/assets/portfolio/p-5.jpg", category: "Transformer", desc: "Efficient power distribution units built to international standards for urban electrification." },
        { id: 6, title: "Advanced Protection Systems", image: "/assets/portfolio/p-6.jpg", category: "Safety Gear", desc: "Implementing VCBs and protection relays to safeguard critical electrical infrastructure." },
        { id: 7, title: "Industrial Switchgear Setup", image: "/assets/portfolio/p-7.jpg", category: "Manufacturing", desc: "High-precision switchgear assembly for stable and reliable power flow control." },
        { id: 8, title: "Quality Assurance & Testing", image: "/assets/portfolio/p-8.jpg", category: "Compliance", desc: "Rigorous diagnostic and load testing performed on every unit before site deployment." },
        { id: 9, title: "Power Infrastructure Project", image: "/assets/portfolio/p-9.jpg", category: "Turnkey", desc: "Complete turnkey electrical solutions from design to commissioning for national projects." }
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16">

                {/* --- HEADER --- */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-blue-600 mb-4">
                            <Zap size={20} fill="currentColor" />
                            <span className="font-black uppercase tracking-[0.3em] text-xs">Project Portfolio</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                            Engineering Excellence <br />
                            <span className="text-blue-600">Across Power Sectors</span>
                        </h2>
                    </div>
                    <Link href="/portfolio" className="text-slate-900 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors">
                        View All Projects
                    </Link>
                </motion.div>

                {/* --- 9-PROJECT GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/60 transition-all duration-500 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        <span className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold text-sm shadow-xl">View Details</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 space-y-2">
                                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">{project.category}</span>
                                <h3 className="text-xl font-black text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
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
                            className="bg-white rounded-3xl p-6 md:p-10 max-w-2xl w-full shadow-2xl relative"
                            initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900" onClick={() => setSelectedProject(null)}>
                                <X size={24} />
                            </button>

                            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-8 shadow-inner">
                                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                            </div>

                            <span className="text-blue-600 font-black text-xs uppercase tracking-widest">{selectedProject.category}</span>
                            <h3 className="text-3xl font-black text-slate-900 mt-2 mb-4 leading-tight">{selectedProject.title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">{selectedProject.desc}</p>

                            <Link href="/contact" className="inline-block w-full text-center bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
                                Request Quote for this Product
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}