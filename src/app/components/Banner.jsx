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

// --- ANIMATION HELPER: Word-by-word reveal ---
const WordByWord = ({ text, className, delay = 0 }) => {
    const words = text.split(" ");
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: delay },
        },
    };
    const child = {
        visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 100 } },
        hidden: { opacity: 0, y: 25 },
    };

    return (
        <motion.div variants={container} initial="hidden" animate="visible" className={`flex flex-wrap ${className}`}>
            {words.map((word, index) => (
                <motion.span variants={child} key={index} className="mr-3 md:mr-5">
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

const bannerData = [
    {
        id: 1,
        image: "/assets/banner/banner-img-5.jpg",
        title: "Welcome to",
        highlight: "Mission Power Land Limited",
        description: "A leading transformer manufacturing company in Bangladesh, powering the nation with world-class engineering.",
        cta: "OUR LEGACY"
    },
    {
        id: 2,
        image: "/assets/banner/banner-img-4.jpg",
        title: "Precision Built",
        highlight: "High-Voltage Transformers",
        description: "Engineered for maximum efficiency and durability in the most demanding industrial environments.",
        cta: "VIEW PRODUCTS"
    },
    {
        id: 3,
        image: "/assets/banner/banner-img-3.jpg",
        title: "Advanced Grid",
        highlight: "Substation Solutions",
        description: "Specialized in 33/11KV substation equipment and comprehensive power distribution networks.",
        cta: "EXPLORE TECH"
    },
    {
        id: 4,
        image: "/assets/banner/banner-img-2.jpg",
        title: "Certified Quality",
        highlight: "Reliable Energy Delivery",
        description: "Our units undergo rigorous testing to ensure 100% safety and compliance with international standards.",
        cta: "QUALITY ASSURANCE"
    },
    {
        id: 5,
        image: "/assets/banner/banner-img-1.jpg",
        title: "Engineering The",
        highlight: "Future of Bangladesh",
        description: "Driving industrial growth through innovative electrical engineering and sustainable power solutions.",
        cta: "CONTACT EXPERTS"
    }
];

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return <div className="w-full h-screen bg-slate-950" />;

    return (
        <section className="relative w-full h-screen bg-black overflow-hidden">

            {/* --- TOP POSITIONED ARROWS --- */}
            <div className="absolute top-10 left-6 md:left-12 z-[100]">
                <button ref={prevRef} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 backdrop-blur-md hover:bg-blue-600 hover:border-blue-600 transition-all duration-500 shadow-xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6" /></svg>
                </button>
            </div>
            <div className="absolute top-10 right-6 md:right-12 z-[100]">
                <button ref={nextRef} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 backdrop-blur-md hover:bg-blue-600 hover:border-blue-600 transition-all duration-500 shadow-xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6" /></svg>
                </button>
            </div>

            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                speed={1200}
                loop={true}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                className="h-full w-full"
            >
                {bannerData.map((item, index) => (
                    <SwiperSlide key={item.id} className="relative">
                        {/* Ken Burns zoom background */}
                        <div className={`absolute inset-0 transition-transform duration-[10000ms] ease-out ${activeIndex === index ? 'scale-110' : 'scale-100'}`}>
                            <Image src={item.image} alt="Industrial Background" fill className="object-cover" priority />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
                        </div>

                        {/* Content Area */}
                        <div className="container mx-auto px-6 lg:px-24 h-full flex items-center relative z-20">
                            <div className="max-w-5xl">
                                <AnimatePresence mode="wait">
                                    {activeIndex === index && (
                                        <div key={`content-${index}`}>
                                            <motion.span
                                                initial={{ opacity: 0, x: -30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="inline-block text-blue-500 font-bold tracking-[0.5em] uppercase mb-6 text-sm"
                                            >
                                                Industrial Excellence
                                            </motion.span>

                                            {/* Word-by-Word Sequence */}
                                            <WordByWord
                                                text={item.title}
                                                className="text-4xl md:text-6xl font-light text-slate-200 mb-2"
                                            />
                                            <WordByWord
                                                text={item.highlight}
                                                className="text-5xl md:text-[95px] font-black text-white leading-[1.1] uppercase tracking-tighter"
                                                delay={0.5}
                                            />

                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.8, duration: 1 }}
                                                className="text-base md:text-xl text-slate-300 max-w-2xl mt-10 mb-12 font-light border-l-2 border-blue-600 pl-8 leading-relaxed"
                                            >
                                                {item.description}
                                            </motion.p>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 2.2 }}
                                            >
                                                <Link href="/services" className="group relative bg-blue-600 text-white px-12 py-5 font-bold overflow-hidden inline-flex items-center gap-3">
                                                    <span className="relative z-10">{item.cta}</span>
                                                    <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">→</span>
                                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                                </Link>
                                            </motion.div>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Bottom Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-50">
                <motion.div
                    key={activeIndex}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="h-full bg-blue-600"
                />
            </div>
        </section>
    );
};

export default Banner;