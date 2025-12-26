"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const bannerData = [
    { id: 1, image: "/assets/banner/banner-img-1.jpg", title: "Engineering the", highlight: "National Grid", description: "Specialized Class-A contracting for 33/11KV substations and transmission networks." },
    { id: 2, image: "/assets/banner/banner-img-2.jpg", title: "Pioneering", highlight: "Land Development", description: "Industrial-grade land development and filling services for national infrastructure." },
    { id: 3, image: "/assets/banner/banner-img-4.jpg", title: "Built for", highlight: "Future Growth", description: "Turnkey electrical engineering projects delivered with international standards." }
];

const Banner = () => {
    const [mounted, setMounted] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-full h-[500px] md:h-[800px] bg-slate-900" />;

    return (
        <section className="relative w-full h-[550px] md:h-[800px] bg-slate-900 overflow-hidden">

            {/* --- ARROWS: Hidden on mobile, visible on medium+ screens --- */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full hidden md:flex justify-between px-6 md:px-10 z-[100] pointer-events-none">
                <button
                    ref={prevRef}
                    className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white bg-slate-900/40 backdrop-blur-md hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer shadow-2xl"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                    ref={nextRef}
                    className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white bg-slate-900/40 backdrop-blur-md hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer shadow-2xl"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                </button>
            </div>

            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1000}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                pagination={{ clickable: true, el: '.mpl-pagination' }}
                className="h-full w-full"
            >
                {bannerData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="absolute inset-0 z-0">
                            <Image src={item.image} alt={item.highlight} fill className="object-cover" priority />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10" />
                        </div>
                        <div className="container mx-auto px-6 lg:px-24 h-full flex items-center relative z-20">
                            <div className="max-w-4xl">
                                <h2 className="text-4xl md:text-8xl font-black text-white leading-[1.1] md:leading-[0.95] mb-4 md:mb-8 uppercase tracking-tighter">
                                    {item.title} <br />
                                    <span className="text-blue-500">{item.highlight}</span>
                                </h2>
                                <p className="text-sm md:text-xl text-slate-200 max-w-lg md:max-w-2xl mb-8 md:mb-12 font-medium">
                                    {item.description}
                                </p>
                                <Link href="/services" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold transition-all">
                                    EXPLORE SERVICES →
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* --- MOBILE PAGINATION --- */}
                <div className="mpl-pagination absolute bottom-6 left-1/2 -translate-x-1/2 z-[100] flex gap-2"></div>
            </Swiper>
        </section>
    );
};

export default Banner;