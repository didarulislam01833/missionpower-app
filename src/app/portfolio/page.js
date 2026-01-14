"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function PortfolioPage() {
    const [filter, setFilter] = useState('All');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { setIsMounted(true); }, []);

    const projects = [
        { id: 1, category: 'Power', title: '132/33KV Substation Grid', location: 'Dhaka', img: '/assets/All/01-01.jpg' },
        { id: 2, category: 'Civil', title: 'Riverbank Protection', location: 'Chandpur', img: '/assets/All/01-02.jpg' },
        { id: 3, category: 'Land', title: 'Industrial Earth Filling', location: 'Gazipur', img: '/assets/All/01-03.jpg' },
        { id: 4, category: 'Power', title: 'Transmission Line Project', location: 'Sylhet', img: '/assets/All/01-04.jpg' },
        { id: 5, category: 'Civil', title: 'Bridge Piling Construction', location: 'Barishal', img: '/assets/All/01-05.jpg' },
        { id: 6, category: 'Land', title: 'Economic Zone Development', location: 'Mirasarai', img: '/assets/All/01-01.jpg' },
    ];

    const categories = ['All', 'Power', 'Civil', 'Land'];
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    if (!isMounted) return null;

    return (
        <main className="bg-white min-h-screen text-[#1e293b]">

            {/* --- HEADER --- */}
            <section className="pt-32 pb-12">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="border-b border-slate-100 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-4xl font-black uppercase italic tracking-tighter text-[#0f172a]">
                                Project <span className="text-blue-600">Gallery.</span>
                            </h1>
                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mt-2">Engineering Excellence Since 2014</p>
                        </div>

                        {/* Minimal Filters */}
                        <div className="flex gap-6 overflow-x-auto no-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`text-[10px] font-black uppercase tracking-widest transition-all relative pb-2 ${filter === cat ? 'text-blue-600' : 'text-slate-400 hover:text-[#0f172a]'
                                        }`}
                                >
                                    {cat}
                                    {filter === cat && (
                                        <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- COMPACT GRID --- */}
            <section className="pb-20">
                <div className="container mx-auto px-6 lg:px-20">
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="group cursor-pointer"
                                >
                                    {/* Image Container: ১৬:৯ রেশিও যা উচ্চতা অনেক কমিয়ে দেয় */}
                                    <div className="relative aspect-video overflow-hidden bg-slate-100 rounded-lg shadow-sm">
                                        <Image
                                            src={project.img}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-[#0f172a]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="bg-white p-2 rounded-full shadow-xl">
                                                <ArrowUpRight size={20} className="text-blue-600" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text Info */}
                                    <div className="mt-4 px-1">
                                        <h3 className="text-base font-bold text-[#0f172a] leading-tight group-hover:text-blue-600 transition-colors uppercase italic tracking-tight">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-[9px] font-black text-blue-600/60 uppercase tracking-widest">{project.category}</span>
                                            <div className="flex items-center gap-1 text-slate-400 text-[9px] font-bold uppercase tracking-wider">
                                                <MapPin size={10} /> {project.location}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* --- MINI STATS --- */}
            <section className="py-16 bg-[#f8fafc] border-y border-slate-100">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Substations", val: "45+" },
                            { label: "Transmission", val: "120km" },
                            { label: "Civil Works", val: "85+" },
                            { label: "Client Base", val: "30+" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center md:text-left">
                                <h4 className="text-2xl font-black text-[#0f172a] italic leading-none">{stat.val}</h4>
                                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL CALL --- */}
            <section className="py-24 text-center">
                <div className="max-w-xl mx-auto px-6">
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Get in Touch</p>
                    <h2 className="text-3xl font-black text-[#0f172a] uppercase italic tracking-tighter mb-8 leading-tight">
                        Building the foundations <br /> of Tomorrow.
                    </h2>
                    <button className="px-10 py-4 bg-[#0f172a] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
                        Work With Us
                    </button>
                </div>
            </section>

        </main>
    );
}