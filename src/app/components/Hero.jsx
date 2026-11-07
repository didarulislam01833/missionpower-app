"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ---- মালিকের কাছ থেকে নিশ্চিত করে বদলান ----
const PHONE = "+8801810098909";
const FOUNDED_YEAR = 2014;
// মালিক না চাইলে নিচের লাইনটি "" (খালি) করে দিন
const GROUP_NOTE = "A sister concern of Akota Power Limited";

const SLIDES = [
    { src: "/assets/banner/banner-img-1.jpg", alt: "Mission Power Land transformers lined up at the factory" },
    { src: "/assets/banner/banner-img-2.jpg", alt: "Transformer assembly inside the factory hall" },
    { src: "/assets/banner/banner-img-3.jpg", alt: "High-voltage switchgear equipment" },
    { src: "/assets/banner/banner-img-4.jpg", alt: "Power transformer at a substation" },
    { src: "/assets/banner/banner-img-5.jpg", alt: "33/11kV substation yard" },
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const timer = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#070A11] text-white">
            {/* Background slideshow */}
            <div className="absolute inset-0">
                {SLIDES.map((slide, i) => (
                    <Image
                        key={slide.src}
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={i === 0}
                        sizes="100vw"
                        className={`object-cover transition-all duration-[1500ms] ease-out ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                            }`}
                    />
                ))}
                {/* অন্ধকার স্তর, যাতে লেখা পরিষ্কার পড়া যায় */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#070A11] via-[#070A11]/75 to-[#070A11]/25" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070A11] to-transparent" />
            </div>

            {/* Content: নিচে বেশি প্যাডিং, কারণ StatsSection ওপরে উঠে এসে বসে */}
            <div className="container mx-auto px-5 sm:px-6 lg:px-16 relative z-10 pt-28 pb-36 md:pb-44">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-5"
                    >
                        <span aria-hidden="true">⚡</span> ISO 9001:2015 Certified Manufacturer · Gazipur, Bangladesh
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05]"
                    >
                        We Build the Power Behind{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                            Bangladesh&apos;s Grid
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
                    >
                        Distribution &amp; power transformers, HT/LT switchgear and 33/11kV substation
                        solutions, designed, manufactured and tested at our own factory.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/contact?type=quote"
                            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-950 rounded-xl font-black text-xs uppercase tracking-widest text-center shadow-[0_0_25px_rgba(245,158,11,0.35)] active:scale-95 transition-all"
                        >
                            Get a Quote
                        </Link>
                        <Link
                            href="/manufacture-excellence"
                            className="px-8 py-4 border border-slate-500 hover:border-amber-400 hover:text-amber-400 text-white rounded-xl font-black text-xs uppercase tracking-widest text-center backdrop-blur-sm active:scale-95 transition-all"
                        >
                            Our Factory &amp; Products
                        </Link>
                        <a
                            href={`tel:${PHONE}`}
                            className="px-8 py-4 text-slate-200 hover:text-amber-400 font-bold text-xs uppercase tracking-widest text-center sm:text-left transition-colors"
                        >
                            📞 Call Now
                        </a>
                    </motion.div>

                    {/* Trust chips */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-8 flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-wider"
                    >
                        {["ISO 9001:2015", "Class-A Govt. Contractor", `Group Experience Since ${FOUNDED_YEAR}`].map((chip) => (
                            <span key={chip} className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200">
                                {chip}
                            </span>
                        ))}
                    </motion.div>

                    {GROUP_NOTE && (
                        <p className="mt-4 text-xs text-slate-400 font-medium">{GROUP_NOTE}</p>
                    )}
                </div>

                {/* Slide dots */}
                <div className="absolute bottom-24 md:bottom-32 left-5 sm:left-6 lg:left-16 flex gap-2">
                    {SLIDES.map((slide, i) => (
                        <button
                            key={slide.src}
                            onClick={() => setIndex(i)}
                            aria-label={`Show slide ${i + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-amber-400" : "w-4 bg-slate-600 hover:bg-slate-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}