"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change state after 50px of scrolling
            setScrolled(window.scrollY > 50);
        };
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
                @keyframes subtleFloat {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-5px) scale(1.02); }
                }
                .animate-premium-logo {
                    animation: subtleFloat 4s ease-in-out infinite;
                }
                .text-shadow-premium {
                    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
                }
            `}</style>

            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out ${scrolled
                    ? "bg-white/85 backdrop-blur-lg shadow-xl h-20"
                    : "bg-transparent h-28"
                }`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">

                    {/* BRAND AREA - Clicking the logo or text takes you home */}
                    <Link href="/" className="flex items-center gap-4 group cursor-pointer shrink-0">
                        {/* High-Definition Logo with Animation */}
                        <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-500 group-hover:rotate-3">
                            <img
                                src="/assets/logo/logo.png"
                                alt="Mission Power Land Limited"
                                className={`w-full h-full object-contain animate-premium-logo ${!scrolled && "brightness-0 invert"}`}
                            />
                            {/* Invert makes a dark logo white on transparent BG automatically */}
                        </div>

                        {/* Company Name with Clear Hierarchy */}
                        <div className="flex flex-col border-l border-white/20 pl-4 py-1 group-hover:border-blue-500 transition-colors">
                            <h1 className={`text-xl md:text-2xl font-[1000] leading-none tracking-tighter uppercase transition-all duration-500 ${scrolled ? "text-slate-900" : "text-white text-shadow-premium"
                                }`}>
                                MISSION POWER <span className={scrolled ? "text-blue-600" : "text-blue-400"}>LAND</span>
                            </h1>
                            <p className={`text-[10px] md:text-[11px] font-bold tracking-[0.5em] uppercase mt-1.5 transition-colors duration-500 ${scrolled ? "text-slate-400" : "text-white/70"
                                }`}>
                                Limited
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu - Premium Spacing */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className={`relative px-5 py-2 text-[13px] font-black uppercase tracking-[0.15em] transition-all duration-500 group ${scrolled ? "text-slate-600 hover:text-blue-600" : "text-white hover:text-white"
                                    }`}
                            >
                                <span className="relative z-10">{item.name}</span>
                                <span className={`absolute bottom-0 left-5 right-5 h-[3px] transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${scrolled ? "bg-blue-600" : "bg-white"
                                    }`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Premium CTA Button */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className={`hidden sm:inline-block px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-500 shadow-2xl ${scrolled
                                    ? "bg-blue-600 text-white hover:bg-slate-900"
                                    : "bg-white text-slate-900 hover:bg-blue-600 hover:text-white"
                                }`}
                        >
                            Connect Now
                        </Link>

                        {/* Minimalist Mobile Burger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`lg:hidden flex flex-col gap-1.5 p-2 transition-all ${scrolled ? "text-slate-900" : "text-white"}`}
                        >
                            <span className={`h-1 bg-current transition-all duration-300 ${isOpen ? "w-7 rotate-45 translate-y-2.5" : "w-7"}`}></span>
                            <span className={`h-1 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "w-5"}`}></span>
                            <span className={`h-1 bg-current transition-all duration-300 ${isOpen ? "w-7 -rotate-45 -translate-y-2.5" : "w-7"}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Fullscreen Menu */}
                <div className={`lg:hidden fixed inset-0 bg-slate-950/95 backdrop-blur-2xl transition-all duration-700 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}>
                    <div className="flex flex-col items-center justify-center h-full gap-10">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl font-black text-white uppercase tracking-tighter hover:text-blue-500 transition-colors"
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