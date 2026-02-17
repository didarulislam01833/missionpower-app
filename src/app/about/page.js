"use client";

import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, ArrowRight, Building2, Phone, Mail, Award, Users, Target } from "lucide-react";

// --- ANIMATION: Reveal Component ---
const RevealText = ({ text, delay = 0, className = "", speed = 0.08 }) => {
    if (!text || typeof text !== 'string') return null;
    const words = text.split(" ").filter(word => word.length > 0);
    return (
        <span className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={`${word}-${i}`}
                    initial={{ opacity: 0, y: 30, scale: 0.8, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: delay + i * speed, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block mr-[0.35em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
};

// --- SCROLL ANIMATION ---
const useScrollPathLength = (containerRef) => {
    const [isReady, setIsReady] = useState(false);
    useLayoutEffect(() => {
        if (containerRef?.current) setIsReady(true);
    }, [containerRef]);
    const { scrollYProgress } = useScroll({
        target: isReady && containerRef?.current ? containerRef : null,
        offset: ["start start", "end end"],
    });
    return useTransform(scrollYProgress, [0, 0.8], [0, 1]);
};

const ScrollAnimatedSVG = ({ containerRef }) => {
    const pathLength = useScrollPathLength(containerRef);
    return (
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
            <motion.path
                d="M 0 400 C 300 100 700 700 1200 400 S 1800 100 2400 400"
                fill="none"
                stroke="#1d4ed8"
                strokeWidth="1.5"
                style={{ pathLength }}
            />
        </svg>
    );
};

export default function AboutPage() {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // --- DATA: Team Members ---
    const topLeadership = [
        { name: "Shokina Akter", position: "Chairman", image: "/assets/employee/5.jpeg" },
        { name: "Mr. Hasanur Jaman", position: "Managing Director", image: "/assets/employee/3.jpg" },
    ];

    const otherLeaders = [
        { name: "Md. Mohiuddin Bhuiyan", position: "General Manager", phone: "01810098907", image: "/assets/employee/4.jpg" },
        { name: "Md. Zahedul Islam", position: "Executive Director", phone: "01810098905", email: "zahedbandt@gmail.com", image: "/assets/employee/6.png" },
        { name: "Md. Sohel", position: "Manager in Business Development", phone: "01810098907", image: "/assets/employee/2.jpg" },
        { name: "Md. Saiful Arefin", position: "Manager in Marketing", phone: "01810098911", image: "/assets/employee/1.jpg" },
    ];

    if (!isClient) return <div className="min-h-screen bg-slate-50" />;

    return (
        <main ref={containerRef} className="bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[50vh] min-h-[400px] flex flex-col items-center justify-center bg-white border-b border-slate-100 overflow-hidden">
                <ScrollAnimatedSVG containerRef={containerRef} />
                <div className="z-10 text-center px-6 max-w-5xl mx-auto">
                    <span className="text-sm font-bold text-blue-700 uppercase tracking-[0.3em]">About Us</span>
                    <h1 className="text-6xl md:text-8xl font-extrabold text-slate-950 tracking-tighter mt-6">
                        Architecture of Power
                    </h1>
                    <p className="text-xl text-slate-600 mt-8 max-w-2xl mx-auto leading-relaxed">
                        Mission Power is dedicated to delivering robust engineering solutions and electrifying the nation through excellence.
                    </p>
                </div>
            </section>

            {/* --- NEW: DETAILED ABOUT SECTION --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-5xl font-extrabold text-slate-950 tracking-tighter">Empowering the Future</h2>
                        <p className="text-slate-600 mt-6 leading-relaxed">
                            With years of experience in high-voltage engineering, Mission Power has established itself as a leader in grid sub-station construction and maintenance. We bridge the gap between energy generation and consumption, ensuring reliable power delivery across Bangladesh.
                        </p>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            Our team consists of industry veterans and certified engineers committed to safety, efficiency, and innovation.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { icon: Target, title: "Our Mission", desc: "To deliver reliable power solutions safely." },
                            { icon: Award, title: "Our Vision", desc: "To be the nation's premier energy partner." },
                            { icon: Users, title: "Our Team", desc: "Industry experts committed to excellence." },
                            { icon: Zap, title: "Our Impact", desc: "Connecting communities to the grid." },
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <item.icon className="text-blue-600 mb-4" size={32} />
                                <h4 className="text-xl font-bold">{item.title}</h4>
                                <p className="text-slate-600 text-sm mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MANAGEMENT SECTION --- */}
            <section className="py-24" aria-labelledby="team-heading">
                <div className="container mx-auto px-6 lg:px-16">

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
                        <h2 className="text-5xl font-extrabold text-slate-950 tracking-tighter">Meet Our Leadership</h2>
                        <p className="text-slate-600 mt-4 max-w-xl mx-auto">The driving force behind our commitment to excellence and innovation.</p>
                    </motion.div>

                    {/* --- Top Leadership (PREMIUM LARGE LAYOUT) --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto mb-32">
                        {topLeadership.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-14 rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center text-center group hover:border-blue-200 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="relative w-64 h-64 rounded-full overflow-hidden mb-12 border-4 border-slate-100 shadow-inner ring-4 ring-slate-50">
                                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                                </div>
                                <h3 className="text-5xl font-extrabold text-slate-950 tracking-tighter">{member.name}</h3>
                                <p className="text-blue-700 font-semibold text-2xl mt-4 mb-8 tracking-wide uppercase text-sm tracking-widest">{member.position}</p>
                                <div className="h-1.5 w-32 bg-blue-500 rounded-full"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* --- Other Leaders (Classy Grid) --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {otherLeaders.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex flex-col"
                            >
                                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-8">
                                    <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-950 group-hover:text-blue-700 transition-colors tracking-tight">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-blue-700 font-medium mb-6 uppercase tracking-wider">{member.position}</p>

                                <div className="mt-auto space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                                    {member.phone && (
                                        <a href={`tel:${member.phone}`} className="flex items-center gap-3 hover:text-blue-700">
                                            <Phone size={18} className="text-blue-500" /> {member.phone}
                                        </a>
                                    )}
                                    {member.email && (
                                        <a href={`mailto:${member.email}`} className="flex items-center gap-3 hover:text-blue-700">
                                            <Mail size={18} className="text-blue-500" /> {member.email}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 bg-white text-center border-t border-slate-100">
                <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
                    <h2 className="text-5xl font-extrabold text-slate-950 mb-8 tracking-tighter">Ready to build the future?</h2>
                    <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 text-lg">
                        Contact Our Experts <ArrowRight size={22} />
                    </Link>
                </div>
            </section>

        </main>
    );
}