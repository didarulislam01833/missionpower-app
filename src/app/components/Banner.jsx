"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const WordByWord = ({ text, className, delay = 0 }) => {
    const words = text.split(" ");
    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: delay } },
    };
    const child = {
        visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 140 } },
        hidden: { opacity: 0, y: 12 },
    };

    return (
        <motion.div variants={container} initial="hidden" animate="visible" className={`flex flex-wrap ${className}`}>
            {words.map((word, index) => (
                <motion.span variants={child} key={index} className="mr-2 md:mr-3">{word}</motion.span>
            ))}
        </motion.div>
    );
};

const bannerData = [
    {
        id: 1,
        image: "/assets/banner/banner-img-3.jpg",
        badge: "⭐ REGISTERED CLASS-A GOVT CONTRACTOR",
        title: "Mission Power Land Limited",
        subtitle: "Engineering The Future of Bangladesh Power Grid",
        description: "Premier manufacturer of high-voltage transformers, 33/11kV substations, and heavy industrial power distribution infrastructure.",
        ctaText: "EXPLORE PRODUCTS",
        ctaLink: "/services",
        phone: "01810-098911"
    },
    {
        id: 2,
        image: "/assets/banner/banner-img-6.jpg",
        badge: "⚡ BREB & BPDB APPROVED SPECIFICATIONS",
        title: "Precision-Built Transformers",
        subtitle: "Single & Three-Phase Heavy Duty Solutions",
        description: "Crafted for maximum thermal durability, zero failure rate, and compliance with rigorous national utility standards.",
        ctaText: "VIEW TECHNICAL SPECS",
        ctaLink: "/manufacture-excellence",
        phone: "01810-098909"
    },
    {
        id: 3,
        image: "/assets/banner/banner-img-7.jpg",
        badge: "🏗️ TURNKEY SUBSTATION EXPERTISE",
        title: "33/11KV Substation & Switchgear",
        subtitle: "Advanced Automation & Control Panels",
        description: "End-to-end electrical substation design, installation, and impulse testing for uninterrupted industrial operation.",
        ctaText: "CHECK PORTFOLIO",
        ctaLink: "/portfolio",
        phone: "01810-098911"
    }
];

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return <div className="w-full h-[85vh] bg-[#05070B]" />;

    return (
        <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-screen bg-[#05070B] overflow-hidden z-10">

            {/* Mobile Top Floating Badge */}
            <div className="absolute top-4 left-4 z-40 md:hidden flex items-center gap-2 bg-slate-950/80 border border-amber-400/40 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider">Class-A Govt Enlisted</span>
            </div>

            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1000}
                loop={true}
                autoplay={{ delay: 6500, disableOnInteraction: false }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                className="h-full w-full"
            >
                {bannerData.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        {/* Background Image Container with Stunning Visibility */}
                        <div className={`absolute inset-0 transition-transform duration-[7000ms] ease-out ${activeIndex === index ? 'scale-105' : 'scale-100'}`}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover object-center filter brightness-[0.85] contrast-[1.05]"
                                priority={index === 0}
                            />

                            {/* Balanced Mobile Gradient: Keeps image clear at top/middle while reading text at bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/70 to-black/30 md:bg-gradient-to-r md:from-[#05070B] md:via-[#05070B]/80 md:to-transparent z-10" />

                            {/* Ambient Glow Lighting */}
                            <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-10 hidden sm:block" />
                        </div>

                        {/* Slide Content */}
                        <div className="container mx-auto px-5 sm:px-8 lg:px-16 h-full flex items-end md:items-center relative z-20 pb-16 md:pb-0 pt-24">
                            <div className="max-w-3xl">
                                <AnimatePresence mode="wait">
                                    {activeIndex === index && (
                                        <div key={index} className="space-y-3 sm:space-y-4">

                                            {/* Badge */}
                                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                                                <span className="inline-block px-3.5 py-1.5 bg-amber-500/15 border border-amber-500/50 text-amber-300 text-[11px] sm:text-xs font-bold tracking-wider rounded-md uppercase shadow-lg">
                                                    {item.badge}
                                                </span>
                                            </motion.div>

                                            {/* Main Title */}
                                            <WordByWord
                                                text={item.title}
                                                className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight uppercase drop-shadow-md"
                                            />

                                            {/* Subtitle */}
                                            <motion.h3
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4, duration: 0.5 }}
                                                className="text-sm sm:text-xl font-semibold text-amber-400"
                                            >
                                                {item.subtitle}
                                            </motion.h3>

                                            {/* Description */}
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.6, duration: 0.5 }}
                                                className="text-xs sm:text-base text-slate-200 max-w-xl border-l-2 border-amber-500 pl-3 sm:pl-4 leading-relaxed bg-black/30 backdrop-blur-xs py-1 rounded-r-lg"
                                            >
                                                {item.description}
                                            </motion.p>

                                            {/* Action Buttons */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.8, duration: 0.5 }}
                                                className="pt-2 flex flex-col sm:flex-row gap-3"
                                            >
                                                <Link
                                                    href={item.ctaLink}
                                                    className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-950 font-extrabold rounded-xl text-sm text-center shadow-[0_0_20px_rgba(245,158,11,0.3)] active:scale-95 transition-all flex items-center justify-center gap-2"
                                                >
                                                    <span>{item.ctaText}</span>
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                </Link>

                                                <a
                                                    href={`tel:${item.phone}`}
                                                    className="px-5 py-3.5 bg-slate-900/90 border border-slate-700 hover:border-amber-500/50 text-white font-bold rounded-xl text-sm text-center backdrop-blur-md active:scale-95 transition-all flex items-center justify-center gap-2"
                                                >
                                                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                                    <span>Call: {item.phone}</span>
                                                </a>
                                            </motion.div>

                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Arrows for Desktop */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full hidden md:flex justify-between px-8 z-30 pointer-events-none">
                <button ref={prevRef} className="pointer-events-auto w-12 h-12 rounded-full border border-amber-500/30 bg-slate-950/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-all shadow-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button ref={nextRef} className="pointer-events-auto w-12 h-12 rounded-full border border-amber-500/30 bg-slate-950/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-all shadow-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            {/* Custom Swiper Pagination Dots */}
            <div className="custom-swiper-pagination absolute bottom-4 left-0 w-full flex justify-center gap-2 z-30" />
        </section>
    );
};

export default Banner;