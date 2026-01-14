"use client";

import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, Award, CheckCircle, ArrowRight, Building2 } from "lucide-react";

// --- এনিমেশন কম্পোনেন্ট: প্রতিটি শব্দ আলাদাভাবে ফুটে উঠবে ---
const RevealText = ({ text, delay = 0, className = "", speed = 0.08 }) => {
    if (!text || typeof text !== 'string') return null;

    const words = text.split(" ").filter(word => word.length > 0);

    return (
        <span className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={`${word}-${i}`}
                    initial={{
                        opacity: 0,
                        y: 30,
                        scale: 0.8,
                        filter: "blur(10px)"
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)"
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        duration: 0.7,
                        delay: delay + i * speed,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-[0.35em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
};

// Custom hook for scroll-based animations (only works on client)
const useScrollPathLength = (containerRef) => {
    const [isReady, setIsReady] = useState(false);

    useLayoutEffect(() => {
        if (containerRef?.current) {
            setIsReady(true);
        }
    }, [containerRef]);

    const { scrollYProgress } = useScroll({
        target: isReady && containerRef?.current ? containerRef : null,
        offset: ["start start", "end end"],
    });

    return useTransform(scrollYProgress, [0, 0.8], [0, 1]);
};

// Scroll-based animation component (only renders on client)
const ScrollAnimatedSVG = ({ containerRef }) => {
    const pathLength = useScrollPathLength(containerRef);

    return (
        <>
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
        </>
    );
};

// Director section SVG animation component
const DirectorSectionSVG = ({ containerRef }) => {
    const pathLength = useScrollPathLength(containerRef);

    return (
        <svg className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] opacity-20 pointer-events-none">
            <motion.rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#2563eb" strokeWidth="2" style={{ pathLength }} />
        </svg>
    );
};

export default function AboutPage() {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return <div className="min-h-screen bg-white" />;

    return (
        <main ref={containerRef} className="bg-white text-[#0f172a] selection:bg-blue-600 selection:text-white">

            {/* --- HERO SECTION: THE MISSION --- */}
            <section className="relative h-[65vh] min-h-[450px] flex flex-col items-center justify-center bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden" aria-label="Mission statement">
                <ScrollAnimatedSVG containerRef={containerRef} />

                <div className="z-10 text-center px-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                    >
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-[0.3em]">Our Mission</span>
                    </motion.div>

                    <div className="mb-8">
                        <RevealText
                            text="Architecture of Power"
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight block leading-tight"
                            delay={0.3}
                            speed={0.1}
                        />
                    </div>
                    <div className="text-slate-500 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
                        <RevealText
                            text="Engineering the pulse of the nation through innovative power infrastructure and sustainable solutions"
                            delay={1.5}
                            speed={0.06}
                        />
                    </div>
                </div>
            </section>

            {/* --- VISION & LEGACY SECTION --- */}
            <section className="py-10 md:py-12 container mx-auto px-6 lg:px-16 border-t border-slate-100" aria-labelledby="vision-heading">
                <div className="max-w-4xl space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-[0.3em]">The Vision</span>
                    </motion.div>
                    <h2 id="vision-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        <RevealText
                            text="Leading the energy transformation through innovative engineering and precision."
                            delay={0.2}
                            speed={0.08}
                        />
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light max-w-3xl">
                        <RevealText
                            delay={0.5}
                            speed={0.05}
                            text="Our mission is to build robust power infrastructures that empower industries and light up every corner of the nation with sustainable solutions."
                        />
                    </p>
                </div>
            </section>

            {/* --- MANAGING DIRECTOR SECTION --- */}
            <section className="py-10 md:py-12 bg-gradient-to-b from-white to-slate-50/30 border-y border-slate-100" aria-labelledby="director-heading">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-2/5 relative"
                        >
                            <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-lg overflow-hidden border-8 border-white shadow-xl">
                                <Image
                                    src="/assets/employee/3.jpg"
                                    alt="Mr. Hasanur Jaman, Managing Director of Mission Power Land Limited"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    priority={false}
                                />
                            </div>
                            <DirectorSectionSVG containerRef={containerRef} />
                        </motion.div>

                        <div className="w-full lg:w-3/5 space-y-4">
                            <h2 id="director-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                                <RevealText
                                    text="A Decade of Trust and Technical Mastery."
                                    delay={0.2}
                                    speed={0.08}
                                />
                            </h2>
                            <div className="space-y-2 pb-4 border-b border-slate-200">
                                <p className="text-xl md:text-2xl font-semibold text-slate-900">Mr. Hasanur Jaman</p>
                                <p className="text-blue-600 font-medium text-sm uppercase tracking-wider">Managing Director</p>
                            </div>
                            <p className="text-slate-600 text-base md:text-lg leading-relaxed border-l-2 border-blue-600 pl-6">
                                <RevealText
                                    delay={0.4}
                                    speed={0.05}
                                    text="At Mission Power Land, we don't just deliver electrical systems; we provide the foundation for a modern economy. Integrity and safety remain our core pillars."
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EXPERTISE GRID --- */}
            <section className="py-10 md:py-12 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white" aria-labelledby="expertise-heading">
                <h2 id="expertise-heading" className="sr-only">Our Expertise</h2>
                <div className="container mx-auto px-6 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <span className="text-xs font-semibold text-blue-400 uppercase tracking-[0.3em]">Our Expertise</span>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {[
                            { title: "Grid Stations", icon: Building2, desc: "Specialists in 132/33kV and 400kV grid sub-station construction." },
                            { title: "Safety First", icon: Shield, desc: "100% adherence to international IEC standards and safety protocols." },
                            { title: "National Power", icon: Zap, desc: "Connecting thousands of homes and industries to the national grid." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="space-y-4 p-6 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all group bg-white/5 hover:bg-white/10"
                            >
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                                    <item.icon className="text-blue-400 group-hover:scale-110 transition-transform" size={24} />
                                </div>
                                <h4 className="text-xl font-semibold text-white">
                                    <RevealText text={item.title} delay={0.2 + i * 0.1} speed={0.1} />
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION (CTA) --- */}
            <section className="py-10 md:py-12 bg-white text-center" aria-labelledby="cta-heading">
                <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
                    <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                        <RevealText
                            text="Ready to build the future?"
                            delay={0.2}
                            speed={0.08}
                        />
                    </h2>
                    <div className="text-slate-500 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                        <RevealText
                            text="Partner with us to power your next infrastructure project"
                            delay={0.5}
                            speed={0.06}
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg mx-auto shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
                            aria-label="Contact our experts for power infrastructure solutions"
                        >
                            Contact Our Experts <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}