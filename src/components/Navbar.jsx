"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
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
                @keyframes logoEntrance {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .logo-focus {
                    animation: logoEntrance 0.8s ease-out forwards;
                }
            `}</style>

            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg h-20"
                    : "bg-transparent h-28"
                }`}>
                <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">

                    {/* BRAND AREA - Logo remains prominent */}
                    <Link href="/" className="flex items-center gap-4 group cursor-pointer shrink-0">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                            <div className={`absolute inset-0 rounded-full transition-all duration-500 ${scrolled ? "bg-blue-50/50 scale-90" : "bg-white/5 scale-110"
                                }`}></div>
                            <img
                                src="/assets/logo/logo.png"
                                alt="Mission Power Land Limited"
                                className="relative z-10 w-full h-full object-contain logo-focus"
                            />
                        </div>

                        <div className="flex flex-col justify-center">
                            <h1 className={`text-lg md:text-xl font-[900] leading-[0.9] tracking-tighter uppercase transition-all duration-500 ${scrolled ? "text-slate-900" : "text-white"
                                }`}>
                                MISSION POWER <br />
                                <span className={scrolled ? "text-blue-600" : "text-blue-400"}>LAND</span>
                            </h1>
                            <p className={`text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase mt-1 transition-colors duration-500 ${scrolled ? "text-slate-400" : "text-white/80"
                                }`}>
                                Limited
                            </p>
                        </div>
                    </Link>

                    {/* DESKTOP MENU - Refined, Smaller, and Elegant */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className={`px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative group ${scrolled ? "text-slate-500 hover:text-blue-600" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                <span className="relative z-10">{item.name}</span>
                                {/* Slimmer hover line */}
                                <span className={`absolute bottom-0 left-4 right-4 h-[1.5px] transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${scrolled ? "bg-blue-600" : "bg-white"
                                    }`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Action Button - Compact & Professional */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/contact"
                            className={`hidden sm:flex items-center justify-center px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-sm border ${scrolled
                                    ? "bg-blue-600 border-blue-600 text-white hover:bg-slate-900 hover:border-slate-900"
                                    : "bg-white border-white text-slate-900 hover:bg-transparent hover:text-white"
                                }`}
                        >
                            GET IN TOUCH
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`lg:hidden p-2 transition-all ${scrolled ? "text-slate-900" : "text-white"}`}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`lg:hidden fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-[150] transition-all duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}>
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white text-3xl">&times;</button>
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold text-white uppercase tracking-widest"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}