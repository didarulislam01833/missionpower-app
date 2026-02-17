"use client"; // Required for Framer Motion

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, X } from 'lucide-react'; // Added X icon for closing modal
// Framer Motion Import
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturedProjects() {
    // Project Data
    const projects = [
        { id: 1, title: "Substation Component Installation", image: "/assets/portfolio/p-1.jpg", category: "Transformers", desc: "Installation of 132/33kV substation components including circuit breakers and isolators." },
        { id: 2, title: "High-Voltage Transformer Units", image: "/assets/portfolio/p-2.jpg", category: "Transformers", desc: "Commissioning and testing of 50MVA power transformers for national grid stability." },
        { id: 3, title: "Substation Control Gear", image: "/assets/portfolio/p-3.jpg", category: "Transformers", desc: "Setup of advanced protection panels, SCADA systems, and control wiring for automated substation management." },
        { id: 4, title: "Transformer Protection Systems", image: "/assets/portfolio/p-4.jpg", category: "Transformers", desc: "Implementation of differential protection and lightning arresters for transformer safety." },
        { id: 5, title: "Industrial Transformer Setup", image: "/assets/portfolio/p-5.jpg", category: "Transformers", desc: "Custom transformer installation for industrial power consumption needs." },
        { id: 6, title: "Power Transmission Networks", image: "/assets/portfolio/p-6.jpg", category: "Grid Infrastructure", desc: "High-voltage transmission line construction connecting regional substations." },
        { id: 7, title: "Industrial & Residential Construction", image: "/assets/portfolio/p-7.jpg", category: "Civil Engineering", desc: "Turnkey construction services for industrial sheds and modern residential complexes." },
        { id: 8, title: "Highway Infrastructure Development", image: "/assets/portfolio/p-8.jpg", category: "Civil Engineering", desc: "Construction of multi-lane highways including earthwork, paving, and drainage." },
        { id: 9, title: "Modern Service Station Design", image: "/assets/portfolio/p-9.jpg", category: "Commercial", desc: "Turnkey design and construction of commercial fuel and service stations." }
    ];

    // State to manage the modal
    const [selectedProject, setSelectedProject] = useState(null);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    // Modal Animation Variants
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
    };

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
                >
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs mb-3 block">Project Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Delivering Excellence <br /> Across Power Sectors
                        </h2>
                    </div>

                    <Link
                        href="/portfolio"
                        className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all inline-block hover:scale-105 active:scale-95 shadow-md"
                    >
                        View All Projects
                    </Link>
                </motion.div>

                {/* Project Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative h-72 w-full rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay Animation */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 90 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <ExternalLink className="text-white w-10 h-10" />
                                    </motion.div>
                                    <span className="text-white mt-4 font-semibold text-xs uppercase tracking-wider">View Details</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-blue-700 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal for Project Details */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative"
                            variants={modalVariants}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* --- CORRECTED CLOSE BUTTON --- */}
                            {/* Placed outside of image container for better visibility */}
                            <button
                                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors z-10"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X size={24} />
                            </button>
                            {/* ----------------------------- */}

                            {/* Modal Content */}
                            <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
                                {selectedProject.category}
                            </span>
                            <h3 className="text-3xl font-extrabold text-slate-900 mt-2 mb-4">
                                {selectedProject.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                {selectedProject.desc}
                            </p>

                            <Link href="/portfolio" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">
                                Learn More
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}