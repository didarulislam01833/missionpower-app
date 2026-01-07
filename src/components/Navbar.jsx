"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll to toggle transparency
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
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
                @keyframes softFloat {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-logo {
                    animation: softFloat 3s ease-in-out infinite;
                }
            `}</style>

            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-lg h-20"
                    : "bg-transparent h-28"
                }`}>
                <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">

                    {/* BRAND AREA */}
                    <Link href="/" className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 transition-transform duration-500 group-hover:scale-110">
                            <img
                                src="/assets/logo/logo.png"
                                alt="Mission Power Land Limited"
                                className="w-full h-full object-contain animate-logo"
                            />
                        </div>

                        <div className="flex flex-col">
                            <h1 className={`text-xl md:text-2xl font-[900] leading-none tracking-tighter uppercase transition-colors duration-500 ${scrolled ? "text-slate-900" : "text-white drop-shadow-md"
                                }`}>
                                MISSION POWER <span className={scrolled ? "text-blue-600" : "text-blue-400"}>LAND</span>
                            </h1>
                            <p className={`text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase mt-1 transition-colors duration-500 ${scrolled ? "text-slate-400" : "text-white/80"
                                }`}>
                                Limited
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className={`px-5 py-2 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 relative group ${scrolled ? "text-slate-600" : "text-white hover:text-white"
                                    }`}
                            >
                                <span className="relative z-10">{item.name}</span>
                                <span className={`absolute bottom-0 left-5 right-5 h-0.5 transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${scrolled ? "bg-blue-600" : "bg-white"
                                    }`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className={`hidden sm:inline-block px-8 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${scrolled
                                    ? "bg-blue-600 text-white hover:bg-slate-900"
                                    : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
                                }`}
                        >
                            Get Started
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Overlay */}
                <div className={`lg:hidden fixed inset-x-0 top-0 bottom-0 bg-slate-900 transition-all duration-500 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}>
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        {navLinks.map((item) => (
                            <Link key={item.name} href={item.link} onClick={() => setIsOpen(false)} className="text-3xl font-black text-white uppercase tracking-tighter">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}