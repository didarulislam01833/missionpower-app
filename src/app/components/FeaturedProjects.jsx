"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
// ১. Framer Motion ইমপোর্ট করুন
import { motion } from 'framer-motion';

export default function FeaturedProjects() {
    const projects = [
        { id: 1, title: "Urban Residential Planning", image: "/assets/All/01-04.jpg", category: "Real Estate" },
        { id: 2, title: "Commercial Safety Systems", image: "/assets/All/01-03.jpg", category: "Fire & Safety" },
        { id: 3, title: "National Grid Infrastructure", image: "/assets/All/01-11.jpg", category: "Electrical" },
        { id: 4, title: "Highway & Road Networks", image: "/assets/All/01-06.jpg", category: "Civil Engineering" },
        { id: 5, title: "Petroleum Distribution Hub", image: "/assets/All/01-09.jpg", category: "Energy Supply" },
        { id: 6, title: "Logistics & Supply Chain", image: "/assets/All/01-08.jpg", category: "Logistics" }
    ];

    // ২. এনিমেশন ভেরিয়েন্ট তৈরি (পরিষ্কার কোডের জন্য)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // প্রতিটি কার্ডের মাঝে সময়ের পার্থক্য
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16">

                {/* Header Section with Animation */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Project Portfolio</h2>
                        <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
                            Delivering Excellence Across <br /> Multiple Sectors
                        </h3>
                    </div>

                    <Link
                        href="/portfolio"
                        className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all inline-block hover:scale-105 active:scale-95"
                    >
                        View All Projects
                    </Link>
                </motion.div>

                {/* Project Grid with Stagger Effect */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay Animation */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 90 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <ExternalLink className="text-white w-12 h-12" />
                                    </motion.div>
                                    <span className="text-white mt-4 font-medium text-sm">View Details</span>
                                </div>
                            </div>

                            <div className="mt-5">
                                <motion.span
                                    className="text-blue-600 text-[10px] font-black uppercase tracking-widest block"
                                    whileHover={{ x: 5 }}
                                >
                                    {project.category}
                                </motion.span>
                                <h4 className="text-xl font-bold text-slate-800 mt-1 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}