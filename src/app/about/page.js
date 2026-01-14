"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, Globe, ShieldAlert, Cpu } from "lucide-react";

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // স্ক্রল করার সাথে সাথে লাইন ড্রয়িং কন্ট্রোল
    const pathLength = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const pathLengthLong = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    // ড্রয়িং টেক্সট সেকশন ডেটা
    const animatedTexts = [
        { main: "MISSION", sub: "Architecture of Power" },
        { main: "VISION", sub: "Engineering the Future" },
        { main: "LEGACY", sub: "Building Trust Since 2014" },
        { main: "ELITE", sub: "Class-A Certified Contractor" }
    ];

    return (
        <main ref={containerRef} className="bg-[#020817] text-white selection:bg-cyan-500 overflow-x-hidden">

            {/* --- SECTION 1: SMOOTH DRAWING WORDMARKS (Hero) --- */}
            <section className="min-h-screen relative flex flex-col items-center justify-center space-y-24 py-20">
                {/* Background Grid Line Drawing */}
                <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                    <motion.path
                        d="M0,200 Q400,100 800,200 T1600,200"
                        fill="none"
                        stroke="#0ea5e9"
                        strokeWidth="1"
                        style={{ pathLength: pathLengthLong }}
                    />
                </svg>

                {animatedTexts.map((item, idx) => (
                    <div key={idx} className="relative z-10 text-center group">
                        <svg width="800" height="120" viewBox="0 0 800 120" className="max-w-full drop-shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                            <motion.text
                                x="50%" y="90"
                                textAnchor="middle"
                                fontSize="110"
                                fontWeight="900"
                                fill="transparent"
                                stroke="#334155"
                                strokeWidth="0.8"
                                initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
                                whileInView={{ strokeDashoffset: 0 }}
                                transition={{ duration: 2.5, ease: "easeInOut", delay: idx * 0.2 }}
                                className="uppercase italic tracking-tighter"
                                style={{ stroke: idx % 2 === 0 ? '#0ea5e9' : '#1e293b' }}
                            >
                                {item.main}
                            </motion.text>
                        </svg>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.3 + 1 }}
                            className="text-cyan-500 font-mono tracking-[0.6em] text-[10px] uppercase mt-4"
                        >
                            {item.sub}
                        </motion.p>
                    </div>
                ))}
            </section>

            {/* --- NEW SECTION 2: THE BLUEPRINT SPECS (Technical Grid) --- */}
            <section className="py-32 relative border-y border-white/5 bg-[#030a1f]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            { title: "National Grid", desc: "Developing 400KV transmission lines.", icon: Globe },
                            { title: "Power Safety", desc: "100% adherence to IEC standards.", icon: ShieldAlert },
                            { title: "Smart Infra", desc: "Integration of SCADA systems.", icon: Cpu },
                        ].map((box, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="p-10 border border-white/10 bg-white/5 backdrop-blur-sm relative group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <box.icon size={40} className="text-cyan-500" />
                                </div>
                                <span className="text-cyan-500 font-mono text-xs mb-4 block">SPEC_0{i + 1}</span>
                                <h4 className="text-2xl font-black uppercase italic mb-4">{box.title}</h4>
                                <p className="text-slate-400 font-light leading-relaxed">{box.desc}</p>
                                <div className="mt-8 h-px w-full bg-gradient-to-r from-cyan-500 to-transparent"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- NEW SECTION 3: LEADERSHIP BLUEPRINT (MD) --- */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="lg:w-1/2 relative group">
                            {/* Sketch Outline drawing around image */}
                            <svg className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] pointer-events-none opacity-30">
                                <motion.rect
                                    x="0" y="0" width="100%" height="100%"
                                    fill="none" stroke="#0ea5e9" strokeWidth="1"
                                    style={{ pathLength }}
                                />
                            </svg>
                            <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                                <Image src="/assets/employee/3.jpg" alt="MD" fill className="object-cover" />
                                <div className="absolute inset-0 bg-cyan-950/20 mix-blend-overlay"></div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 space-y-8">
                            <span className="text-cyan-500 font-bold tracking-[0.4em] text-[10px] uppercase border-l-2 border-cyan-500 pl-4">The Command Center</span>
                            <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
                                Hasanur <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Jaman</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                "Our mission transcends traditional contracting. We are sketching the electrical backbone of a modern nation, one line at a time."
                            </p>
                            <div className="pt-6">
                                <button className="flex items-center gap-4 group text-white font-bold uppercase tracking-widest text-xs">
                                    Full Executive Profile <MoveRight className="text-cyan-500 group-hover:translate-x-3 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}