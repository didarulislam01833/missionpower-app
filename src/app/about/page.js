"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, Award, CheckCircle, ArrowRight, Building2 } from "lucide-react";

// --- এনিমেশন কম্পোনেন্ট: প্রতিটি শব্দ আলাদাভাবে ফুটে উঠবে ---
const RevealText = ({ text, delay = 0, className = "" }) => {
    const words = text.split(" ");
    return (
        <span className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: delay + i * 0.1,
                        ease: [0.33, 1, 0.68, 1],
                    }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
};

export default function AboutPage() {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const { scrollYProgress } = useScroll({
        target: isClient ? containerRef : null,
        offset: ["start start", "end end"],
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    if (!isClient) return <div className="min-h-screen bg-white" />;

    return (
        <main ref={containerRef} className="bg-white text-[#0f172a] selection:bg-blue-600 selection:text-white">

            {/* --- HERO SECTION: THE MISSION --- */}
            <section className="relative h-[90vh] flex flex-col items-center justify-center bg-[#f8fafc] overflow-hidden">
                {/* SVGator Style Background Sketch */}
                <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                    <motion.path
                        d="M 0 400 C 300 100 700 700 1200 400 S 1800 100 2400 400"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="1.5"
                        style={{ pathLength }}
                    />
                </svg>

                <div className="z-10 text-center px-6">
                    <svg width="700" height="120" viewBox="0 0 700 120" className="max-w-full overflow-visible mx-auto">
                        <motion.text
                            x="50%" y="90"
                            textAnchor="middle"
                            fontSize="110"
                            fontWeight="900"
                            fill="none"
                            stroke="#0f172a"
                            strokeWidth="1.5"
                            initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
                            animate={{ strokeDashoffset: 0 }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                            className="uppercase italic tracking-tighter font-black"
                        >
                            MISSION
                        </motion.text>
                    </svg>

                    <div className="mt-8">
                        <RevealText
                            text="Architecture of Power"
                            className="text-4xl md:text-6xl font-black uppercase italic text-blue-600 tracking-tight block"
                            delay={1}
                        />
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                        className="text-slate-400 font-mono text-xs uppercase tracking-[0.6em] mt-6"
                    >
                        Engineering the pulse of the nation
                    </motion.p>
                </div>
            </section>

            {/* --- VISION & LEGACY SECTION --- */}
            <section className="py-32 container mx-auto px-6 lg:px-24 border-t border-slate-100">
                <div className="max-w-5xl space-y-10">
                    <h3 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">The Vision</h3>
                    <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9] text-[#0f172a]">
                        <RevealText text="Leading the energy transformation through innovative engineering and precision." />
                    </h2>
                    <p className="text-slate-500 text-xl md:text-2xl leading-relaxed font-light">
                        <RevealText
                            delay={1}
                            text="Our mission is to build robust power infrastructures that empower industries and light up every corner of the nation with sustainable solutions."
                        />
                    </p>
                </div>
            </section>

            {/* --- MANAGING DIRECTOR SECTION --- */}
            <section className="py-24 bg-[#f8fafc] border-y border-slate-100">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border-[15px] border-white shadow-2xl">
                                <Image
                                    src="/assets/employee/3.jpg"
                                    alt="Mr. Hasanur Jaman"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                            <svg className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] opacity-20 pointer-events-none">
                                <motion.rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#2563eb" strokeWidth="2" style={{ pathLength }} />
                            </svg>
                        </div>

                        <div className="w-full lg:w-1/2 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-tight text-[#0f172a]">
                                <RevealText text="A Decade of Trust and Technical Mastery." />
                            </h2>
                            <div className="space-y-1">
                                <p className="text-2xl font-black text-[#0f172a] uppercase italic">Mr. Hasanur Jaman</p>
                                <p className="text-blue-600 font-bold uppercase text-xs tracking-[0.4em]">Managing Director</p>
                            </div>
                            <p className="text-slate-500 text-lg leading-relaxed border-l-4 border-blue-600 pl-8 italic">
                                <RevealText
                                    delay={0.5}
                                    text="At Mission Power Land, we don't just deliver electrical systems; we provide the foundation for a modern economy. Integrity and safety remain our core pillars."
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EXPERTISE GRID --- */}
            <section className="py-32 bg-[#0f172a] text-white">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
                    {[
                        { title: "Grid Stations", icon: Building2, desc: "Specialists in 132/33kV and 400kV grid sub-station construction." },
                        { title: "Safety First", icon: Shield, desc: "100% adherence to international IEC standards and safety protocols." },
                        { title: "National Power", icon: Zap, desc: "Connecting thousands of homes and industries to the national grid." }
                    ].map((item, i) => (
                        <div key={i} className="space-y-6 border-l border-white/10 pl-8 group">
                            <item.icon className="text-blue-500 group-hover:scale-110 transition-transform" size={40} />
                            <h4 className="text-2xl font-bold uppercase italic italic"><RevealText text={item.title} /></h4>
                            <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- CALL TO ACTION (CTA) --- */}
            <section className="py-32 bg-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-[#0f172a] mb-12">
                        <RevealText text="Ready to build the future?" />
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 bg-blue-600 text-white font-black uppercase italic tracking-widest text-sm flex items-center gap-4 mx-auto shadow-xl hover:bg-[#0f172a] transition-colors"
                    >
                        Contact Our Experts <ArrowRight size={20} />
                    </motion.button>
                </div>
            </section>

        </main>
    );
}