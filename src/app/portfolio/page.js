"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function PortfolioPage() {
    const [filter, setFilter] = useState('All');

    // ১. শুরুতে কয়টি প্রজেক্ট দেখাবে (যেমন ৩টি)
    const [visibleCount, setVisibleCount] = useState(3);

    const projects = [
        { id: 1, category: 'Power', title: '132/33KV Substation Grid', location: 'Dhaka', img: '/assets/All/01-01.jpg', client: 'PGCB' },
        { id: 2, category: 'Civil', title: 'Riverbank Protection', location: 'Chandpur', img: '/assets/All/01-02.jpg', client: 'BWDB' },
        { id: 3, category: 'Land', title: 'Industrial Earth Filling', location: 'Gazipur', img: '/assets/All/01-03.jpg', client: 'Private' },
        { id: 4, category: 'Power', title: 'Transmission Line Project', location: 'Sylhet', img: '/assets/All/01-04.jpg', client: 'DESCO' },
        { id: 5, category: 'Civil', title: 'Bridge Piling Construction', location: 'Barishal', img: '/assets/All/01-05.jpg', client: 'RHD' },
        { id: 6, category: 'Land', title: 'Economic Zone Dev', location: 'Mirasarai', img: '/assets/All/01-01.jpg', client: 'BEZA' },
        // এখানে আরও প্রজেক্ট যোগ করুন...
    ];

    const categories = ['All', 'Power', 'Civil', 'Land'];

    // ২. ফিল্টার করা প্রজেক্টগুলো বের করা
    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    // ৩. শুধুমাত্র দৃশ্যমান প্রজেক্টগুলো স্লাইস করা
    const visibleProjects = filteredProjects.slice(0, visibleCount);

    // ৪. লোড মোর ফাংশন (প্রতি ক্লিকে ৩টি করে বাড়বে)
    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-6 lg:px-16">

                {/* HEADER SECTION */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
                        Our Project <span className="text-slate-400">Portfolio.</span>
                    </h1>
                </div>

                {/* FILTER BUTTONS */}
                <div className="flex flex-wrap gap-3 mb-12 border-b border-slate-200 pb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setFilter(cat);
                                setVisibleCount(3); // ক্যাটাগরি চেঞ্জ করলে রিসেট হবে
                            }}
                            className={`px-6 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all ${filter === cat
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                    : 'bg-white text-slate-400 hover:text-slate-900 border border-slate-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* GRID SECTION */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {visibleProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image src={project.img} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-slate-900">{project.title}</h4>
                                    <p className="text-xs text-slate-400 mt-2 uppercase">📍 {project.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* LOAD MORE BUTTON LOGIC */}
                {visibleCount < filteredProjects.length && (
                    <div className="mt-20 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-10 py-4 border-2 border-slate-200 text-slate-900 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
                        >
                            Load More Projects
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}