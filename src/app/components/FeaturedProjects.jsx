"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Zap, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturedProjects() {
    // 9 Projects with  Technical Titles and Descriptions 
    const projects = [
        {
            id: 1,
            title: "High-Voltage Bushings & Switches",
            image: "/assets/portfolio/p-1.jpg",
            category: "Substation Components",
            desc: "Close-up of high-voltage bushings and disconnect switches on a power transformer. These components ensure electricity moves safely from high-voltage lines into the transformer."
        },
        {
            id: 2,
            title: "Three-Phase Distribution Transformer",
            image: "/assets/portfolio/p-2.jpg",
            category: "Finished Goods",
            desc: "Standard three-phase distribution transformer shown as finished goods, engineered for reliable power distribution in industrial networks."
        },
        {
            id: 3,
            title: "High-Voltage Substation Switchyard",
            image: "/assets/portfolio/p-3.jpg",
            category: "Infrastructure",
            desc: "Outdoor switchyard featuring instrument transformers and busbars designed to prevent electrical arcing and manage high-voltage routing."
        },
        {
            id: 4,
            title: "Three-Phase Transformer (Industrial View)",
            image: "/assets/portfolio/p-4.jpg",
            category: "Finished Goods",
            desc: "Detailed industrial view of a three-phase distribution transformer finished unit, showcased from a specialized assembly angle."
        },
        {
            id: 5,
            title: "Single-Phase Transformer Fleet",
            image: "/assets/portfolio/p-5.jpg",
            category: "Distribution",
            desc: "A fleet of single-phase pole-mounted transformers ready for dispatch, commonly utilized for residential and rural electrification projects."
        },
        {
            id: 6,
            title: "Final Assembly & Oil Filling",
            image: "/assets/portfolio/p-6.jpg",
            category: "Manufacturing",
            desc: "The final assembly stage involving vacuum drying, oil filling, and the installation of bushings and critical external components."
        },
        {
            id: 7,
            title: "Impulse & Stability Testing",
            image: "/assets/portfolio/p-7.jpg",
            category: "Quality Assurance",
            desc: "Rigorous high-voltage impulse testing performed in our facility to ensure equipment stability under extreme grid conditions."
        },
        {
            id: 8,
            title: "Single-Phase Pole-Mounted Unit",
            image: "/assets/portfolio/p-8.jpg",
            category: "Distribution",
            desc: "A single-phase transformer installed on-site, providing efficient power distribution for localized grid requirements."
        },
        {
            id: 9,
            title: "Single-Phase Distribution Unit",
            image: "/assets/portfolio/p-9.jpg",
            category: "Distribution",
            desc: "Precision-engineered single-phase transformer featuring advanced insulation and compact design for long-term reliability."
        }
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
                            <Activity size={20} />
                            <span className="font-black uppercase tracking-[0.3em] text-xs">Product Showcase</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                            Precision Engineering <br />
                            <span className="text-blue-600">& Power Distribution</span>
                        </h2>
                    </div>
                    <Link href="/contact" className="text-slate-900 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors">
                        Request a Custom Quote
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
                            <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-md bg-slate-50">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/60 transition-all duration-500 flex items-center justify-center">
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

                            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-8 shadow-inner bg-slate-50">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-contain"
                                />
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