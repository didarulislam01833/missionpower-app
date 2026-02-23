"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const WordByWord = ({ text, className, delay = 0 }) => {
    const words = text.split(" ");
    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: delay } },
    };
    const child = {
        visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
        hidden: { opacity: 0, y: 20 },
    };

    return (
        <motion.div variants={container} initial="hidden" animate="visible" className={`flex flex-wrap ${className}`}>
            {words.map((word, index) => (
                <motion.span variants={child} key={index} className="mr-3 md:mr-5">{word}</motion.span>
            ))}
        </motion.div>
    );
};

const bannerData = [
    { id: 1, image: "/assets/banner/banner-img-5.jpg", title: "Welcome to", highlight: "Mission Power Land Limited", description: "A leading transformer manufacturing company in Bangladesh, engineering the future of the national power grid.", cta: "OUR LEGACY" },
    { id: 2, image: "/assets/banner/banner-img-6.jpg", title: "Precision Built", highlight: "High-Voltage Transformers", description: "Engineered for maximum efficiency and durability in the most demanding industrial environments.", cta: "VIEW PRODUCTS" },
    { id: 3, image: "/assets/banner/banner-img-7.jpg", title: "Advanced Grid", highlight: "Substation Solutions", description: "Specialized in 33/11KV substation equipment and comprehensive power distribution networks.", cta: "EXPLORE TECH" },
    { id: 4, image: "/assets/banner/banner-img-2.jpg", title: "Certified Quality", highlight: "Reliable Energy Delivery", description: "Our units undergo rigorous testing to ensure 100% safety and compliance with international standards.", cta: "QUALITY ASSURANCE" },
    { id: 5, image: "/assets/banner/banner-img-1.jpg", title: "Engineering The", highlight: "Future of Bangladesh", description: "Driving industrial growth through innovative electrical engineering and sustainable power solutions.", cta: "CONTACT EXPERTS" }
];

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return <div className="w-full h-screen bg-slate-950" />;

    return (
        <section className="relative w-full h-screen bg-black overflow-hidden z-10">

            {/* --- SLIDER INDICATORS (ARROWS) IN THE MIDDLE --- */}
            {/* hidden md:flex ensures arrows don't cover text on mobile */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full hidden md:flex justify-between px-6 lg:px-12 z-[100] pointer-events-none">
                <button
                    ref={prevRef}
                    className="pointer-events-auto w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 backdrop-blur-lg hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                    ref={nextRef}
                    className="pointer-events-auto w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 backdrop-blur-lg hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
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
                    <SwiperSlide key={item.id}>
                        <div className={`absolute inset-0 transition-transform duration-[10000ms] ease-out ${activeIndex === index ? 'scale-110' : 'scale-100'}`}>
                            <Image src={item.image} alt="Transformer Manufacturing" fill className="object-cover" priority />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
                        </div>

                        {/* Content Area - Balanced between Navbar and Stats */}
                        <div className="container mx-auto px-6 lg:px-24 h-full flex items-center relative z-20 pt-20 pb-20">
                            <div className="max-w-5xl">
                                <AnimatePresence mode="wait">
                                    {activeIndex === index && (
                                        <div key={index}>
                                            <WordByWord text={item.title} className="text-2xl md:text-5xl font-light text-slate-200 mb-2" />
                                            <WordByWord text={item.highlight} className="text-4xl md:text-[80px] font-black text-white leading-tight uppercase tracking-tighter" delay={0.4} />
                                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-sm md:text-lg text-slate-300 max-w-2xl mt-6 mb-8 border-l-2 border-blue-600 pl-6 leading-relaxed">
                                                {item.description}
                                            </motion.p>
                                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }}>
                                                <Link href="/services" className="bg-blue-600 text-white px-8 py-4 font-bold inline-block hover:bg-blue-700 transition-all shadow-lg">
                                                    EXPLORE MORE →
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

            {/* Bottom Progress Bar - To give that "Wow" look */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-[110]">
                <motion.div
                    key={activeIndex}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="h-full bg-blue-600 shadow-[0_0_10px_#2563eb]"
                />
            </div>
        </section>
    );
};

export default Banner;