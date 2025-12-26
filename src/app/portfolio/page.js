"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function PortfolioPage() {
    const [filter, setFilter] = useState('All');
    const containerRef = useRef(null);

    // 1. DATA: Project List
    const projects = [
        { id: 1, category: 'Power', title: '132/33KV Substation', location: 'Dhaka', img: '/assets/All/01-01.jpg' },
        { id: 2, category: 'Civil', title: 'Riverbank Protection', location: 'Chandpur', img: '/assets/All/01-02.jpg' },
        { id: 3, category: 'Land', title: 'Industrial Earth Filling', location: 'Gazipur', img: '/assets/All/01-03.jpg' },
        { id: 4, category: 'Power', title: 'Transmission Line Grid', location: 'Sylhet', img: '/assets/All/01-04.jpg' },
        { id: 5, category: 'Civil', title: 'Bridge Piling Project', location: 'Barishal', img: '/assets/All/01-05.jpg' },
        { id: 6, category: 'Land', title: 'Economic Zone Dev', location: 'Mirasarai', img: '/assets/All/01-01.jpg' },
    ];

    const categories = ['All', 'Power', 'Civil', 'Land'];
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    // 2. ANIMATION: Scroll Parallax for Banner
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <main className="min-h-screen bg-white">

            {/* SECTION 1: WONDERFUL ANIMATED BANNER */}
            <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                {/* Background Parallax Layer */}
                <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-950 to-slate-950"></div>

                    {/* Animated Glow Orbs */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]"
                    />
                </motion.div>

                {/* Hero Text Content */}
                <motion.div style={{ opacity: opacityHero }} className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-500 font-black uppercase tracking-[0.6em] text-[10px] mb-6 block"
                    >
                        Established Excellence
                    </motion.span>

                    <h1 className="text-6xl md:text-[10rem] font-black text-white italic uppercase tracking-tighter leading-[0.85]">
                        <motion.span
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="block"
                        >
                            Engineering
                        </motion.span>
                        <motion.span
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="block text-blue-600"
                        >
                            Power.
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-10 text-slate-400 font-medium uppercase tracking-[0.3em] text-xs md:text-sm"
                    >
                        Mission Power Land // Portfolio Archive
                    </motion.p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 flex flex-col items-center gap-3"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-blue-600 to-transparent"></div>
                </motion.div>
            </section>

            {/* SECTION 2: PROJECT GALLERY */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-16">

                    {/* Minimalist Filter Navigation */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Discovery</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
                                Selected <span className="text-slate-400">Works.</span>
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat
                                        ? 'bg-slate-900 text-white shadow-xl'
                                        : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* The Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="group relative h-[500px] rounded-[2.5rem] overflow-hidden bg-slate-100"
                                >
                                    {/* Project Image */}
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                        <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="w-6 h-[1px] bg-blue-500"></span>
                                                <span className="text-blue-400 text-[9px] font-black uppercase tracking-[0.3em]">
                                                    {project.category} / {project.location}
                                                </span>
                                            </div>
                                            <h4 className="text-white text-3xl font-bold uppercase italic tracking-tighter leading-none mb-8">
                                                {project.title}
                                            </h4>

                                            <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] border-b border-blue-600 pb-1">
                                                    Inquire Project
                                                </span>
                                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: CALL TO ACTION */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-16 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-white text-4xl font-black uppercase italic tracking-tighter mb-6">
                                Start your next <span className="text-blue-500">infrastructure</span> project
                            </h2>
                            <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                                Request Consultation
                            </button>
                        </div>
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}


