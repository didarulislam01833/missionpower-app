"use client"; // Framer Motion এর জন্য অবশ্যই use client ব্যবহার করতে হবে

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServicesGrid() {
    const services = [
        {
            id: "01",
            title: "Civil & Land Development",
            category: "Infrastructure Division",
            image: "/assets/Stats/service-1.jpg",
            desc: "Specialized in large-scale earth filling, structural piling, and site preparation for industrial zones.",
            link: "/services/land"
        },
        {
            id: "02",
            title: "Power & Grid Solutions",
            category: "Electrical Division",
            image: "/assets/Stats/service-2.jpg",
            desc: "Comprehensive engineering for high-voltage substations and national grid transmission lines.",
            link: "/services/power"
        }
    ];

    // Animation Variants (সেকশনটি কিভাবে আসবে তার সেটিংস)
    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16">

                {/* Header Animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInVariant}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"
                >
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
                            Engineering the <br /> National Infrastructure
                        </h2>
                    </div>
                    <p className="text-slate-500 font-medium max-w-xs border-l-2 border-blue-600 pl-6">
                        Registered Class-A Contractor specializing in high-impact government projects.
                    </p>
                </motion.div>

                {/* Services List Animation */}
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }} // যখন কার্ডটি ৩০% দেখা যাবে তখন শুরু হবে
                            variants={fadeInVariant}
                            className={`flex flex-col lg:flex-row items-stretch bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Container */}
                            <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.5 }}
                                    className="w-full h-full relative"
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>

                            {/* Text Container */}
                            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                                <span className="text-blue-600 font-bold text-6xl opacity-10 mb-2">{service.id}</span>
                                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">{service.category}</span>
                                <h3 className="text-3xl font-extrabold text-slate-900 mb-6">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                    {service.desc}
                                </p>
                                <div className="flex">
                                    <a href={service.link} className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-blue-700 transition-colors">
                                        Explore Scope
                                        <span className="w-10 h-[2px] bg-slate-300 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-300"></span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}