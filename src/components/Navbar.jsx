"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <>
            <style jsx global>{`
                @keyframes softFloat {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .logo-animate {
                    animation: softFloat 4s ease-in-out infinite;
                    filter: drop-shadow(0 0 15px rgba(37, 99, 235, 0.4));
                }
            `}</style>

            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out ${scrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-2xl h-20"
                    : "bg-transparent h-28"
                }`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">

                    {/* BRANDING AREA - Wraps everything in a link home */}
                    <Link href="/" className="flex items-center gap-4 group cursor-pointer shrink-0">
                        {/* High-Impact Animated Logo */}
                        <div className="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                            <img
                                src="/assets/logo/logo.png"
                                alt="Mission Power Land Limited"
                                className={`w-full h-full object-contain logo-animate ${!scrolled && "brightness-0 invert"}`}
                            />
                        </div>

                        {/* Company Text Typography */}
                        <div className="flex flex-col border-l border-white/20 pl-5 py-1 transition-all group-hover:border-blue-500">
                            <h1 className={`text-xl md:text-3xl font-[1000] leading-none tracking-tighter uppercase transition-all duration-500 ${scrolled ? "text-slate-900" : "text-white"
                                }`}>
                                MISSION POWER <span className={scrolled ? "text-blue-600" : "text-blue-400"}>LAND</span>
                            </h1>
                            <div className="flex items-center gap-2 mt-1.5">
                                <span className="h-[2px] w-0 bg-blue-600 transition-all duration-700 group-hover:w-8"></span>
                                <p className={`text-[10px] md:text-[12px] font-black tracking-[0.5em] uppercase transition-colors duration-500 ${scrolled ? "text-slate-400" : "text-white/80"
                                    }`}>
                                    Limited
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Navigation - High-end Letter Spacing */}
                    <div className="hidden lg:flex items-center gap-4">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className={`relative px-5 py-2 text-[13px] font-black uppercase tracking-[0.2em] transition-all duration-500 group ${scrolled ? "text-slate-600 hover:text-blue-600" : "text-white hover:text-white"
                                    }`}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-5 right-5 h-[3px] transition-all duration-500 scale-x-0 group-hover:scale-x-100 ${scrolled ? "bg-blue-600" : "bg-white"
                                    }`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className={`hidden sm:inline-block px-10 py-4 text-[11px] font-[1000] uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl rounded-none ${scrolled
                                    ? "bg-blue-600 text-white hover:bg-slate-900"
                                    : "bg-white text-slate-900 hover:bg-blue-600 hover:text-white"
                                }`}
                        >
                            CONNECT
                        </Link>

                        {/* Mobile Menu Icon */}
                        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 ${scrolled ? "text-slate-900" : "text-white"}`}>
                            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Fullscreen Overlay */}
                <div className={`lg:hidden fixed inset-0 bg-slate-950 transition-all duration-700 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}>
                    <div className="flex flex-col items-center justify-center h-full gap-12">
                        {navLinks.map((item) => (
                            <Link key={item.name} href={item.link} onClick={() => setIsOpen(false)} className="text-4xl font-black text-white uppercase tracking-tighter hover:text-blue-500 transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}