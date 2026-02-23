"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Phone, Mail, ArrowRight, Zap, Target, Users, Award } from "lucide-react";

// --- ANIMATION: Smooth Staggered Reveal ---
const SmoothReveal = ({ children, delay = 0, duration = 1 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.16, 1, 0.3, 1] // Fluid, high-end easing
            }}
        >
            {children}
        </motion.div>
    );
};

// --- ANIMATION: Subtle Parallax Image ---
const ParallaxImage = ({ src, alt, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, -70]); // Moves slower than scroll

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div style={{ y }} className="w-full h-full">
                <Image src={src} alt={alt} fill className="object-cover scale-110" />
            </motion.div>
        </div>
    );
};

export default function AboutPage() {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const topLeadership = [
        { name: "Shokina Akter", position: "Chairman", image: "/assets/employee/5.jpeg" },
        { name: "Mr. Hasanur Jaman", position: "Managing Director", image: "/assets/employee/3.jpg" },
    ];

    const otherLeaders = [
        { name: "Md. Zahedul Islam", position: "Executive Director", phone: "01810098905", email: "zahedbandt@gmail.com", image: "/assets/employee/6.png" },
        { name: "Md. Mohiuddin Bhuiyan", position: "General Manager", phone: "01810098907", image: "/assets/employee/4.jpg" },
        { name: "Md. Sohel", position: "Manager in Business Development", phone: "01810098907", image: "/assets/employee/2.jpg" },
        { name: "Md. Saiful Arefin", position: "Manager in Marketing", phone: "01810098911", image: "/assets/employee/1.jpg" },
    ];

    if (!isClient) return <div className="min-h-screen bg-slate-50" />;

    return (
        <main ref={containerRef} className="bg-slate-50 text-slate-900 overflow-hidden selection:bg-blue-600 selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[80vh] flex flex-col items-center justify-center bg-white border-b border-slate-100">
                <div className="z-10 text-center px-6 max-w-7xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-xs font-mono text-blue-700 uppercase tracking-[0.5em]"
                    >
                        // About
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-7xl md:text-9xl font-extrabold text-slate-950 tracking-tighter mt-8 leading-[0.85]"
                    >
                        Engineering <br /> the Future
                    </motion.h1>
                </div>
            </section>

            {/* --- MISSION/VISION --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
                    {[
                        { icon: Target, title: "Mission", desc: "Reliable power solutions safely." },
                        { icon: Award, title: "Vision", desc: "Nation's premier partner." },
                        { icon: Users, title: "Team", desc: "Industry experts committed." },
                        { icon: Zap, title: "Impact", desc: "Connecting communities." },
                    ].map((item, i) => (
                        <SmoothReveal key={i} delay={i * 0.15}>
                            <div className="h-full bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-blue-100 transition-colors">
                                <item.icon className="text-blue-600 mb-6" size={40} strokeWidth={1.5} />
                                <h4 className="text-2xl font-bold tracking-tight">{item.title}</h4>
                                <p className="text-slate-600 mt-3 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </SmoothReveal>
                    ))}
                </div>
            </section>

            {/* --- LEADERSHIP (Combined Top & Other) --- */}
            <section className="py-24 bg-slate-950 text-white rounded-t-[3rem]">
                <div className="container mx-auto px-6">
                    <SmoothReveal>
                        <h2 className="text-6xl font-extrabold tracking-tighter mb-20 text-center">Leadership Team</h2>
                    </SmoothReveal>

                    {/* Top Leadership */}
                    <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-20">
                        {topLeadership.map((member, i) => (
                            <SmoothReveal key={i} delay={i * 0.2}>
                                <div className="relative aspect-square rounded-3xl overflow-hidden group">
                                    <ParallaxImage src={member.image} alt={member.name} className="absolute inset-0" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                                        <h3 className="text-4xl font-bold tracking-tight">{member.name}</h3>
                                        <p className="text-blue-400 uppercase tracking-widest text-sm mt-1">{member.position}</p>
                                    </div>
                                </div>
                            </SmoothReveal>
                        ))}
                    </div>

                    {/* Other Leaders */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {otherLeaders.map((member, i) => (
                            <SmoothReveal key={i} delay={i * 0.1}>
                                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-900 transition-colors">
                                    <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                                        <Image src={member.image} alt={member.name} fill className="object-cover" />
                                    </div>
                                    <h4 className="text-lg font-bold tracking-tight">{member.name}</h4>
                                    <p className="text-blue-400 text-xs uppercase tracking-wider mb-4">{member.position}</p>
                                    <div className="space-y-2 text-slate-400 text-sm border-t border-slate-800 pt-4">
                                        {member.phone && <a href={`tel:${member.phone}`} className="flex items-center gap-2 hover:text-white"><Phone size={14} /> {member.phone}</a>}
                                        {member.email && <a href={`mailto:${member.email}`} className="flex items-center gap-2 hover:text-white"><Mail size={14} /> {member.email}</a>}
                                    </div>
                                </div>
                            </SmoothReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-32 bg-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <SmoothReveal>
                        <h2 className="text-6xl font-extrabold text-slate-950 tracking-tighter mb-10">Ready to build the future?</h2>
                        <Link href="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-slate-950 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-lg">
                            Contact Our Experts
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </SmoothReveal>
                </div>
            </section>
        </main>
    );
}