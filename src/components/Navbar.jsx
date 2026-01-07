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
                @keyframes softFloat {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                }
                @keyframes glow {
                    0%, 100% { filter: drop-shadow(0 0 5px rgba(37, 99, 235, 0.2)); }
                    50% { filter: drop-shadow(0 0 15px rgba(37, 99, 235, 0.6)); }
                }
                .animate-premium-logo {
                    animation: softFloat 4s ease-in-out infinite, glow 4s ease-in-out infinite;
                }
            `}</style>

            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] h-20"
                    : "bg-white h-24"
                }`}>
                <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">

                    {/* BRAND AREA - Clicking anywhere here goes Home */}
                    <Link href="/" className="flex items-center gap-4 group cursor-pointer">
                        {/* Animated Logo Container */}
                        <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 transition-transform duration-500 group-hover:scale-105">
                            <img
                                src="/assets/logo/logo.png"
                                alt="Mission Power Land Limited"
                                className="w-full h-full object-contain animate-premium-logo"
                            />
                        </div>

                        {/* Text Branding - Enhanced Hierarchy */}
                        <div className="flex flex-col justify-center">
                            <div className="overflow-hidden">
                                <h1 className="text-xl md:text-2xl font-[900] text-slate-900 leading-none tracking-tighter uppercase transition-transform duration-500 group-hover:translate-x-1">
                                    MISSION POWER <span className="text-blue-600">LAND</span>
                                </h1>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="h-[1.5px] w-0 bg-blue-600 transition-all duration-700 group-hover:w-10"></div>
                                <p className="text-[10px] md:text-[11px] font-bold text-slate-400 tracking-[0.4em] uppercase">
                                    Limited
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Menu - Refined for "Premium" look */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className="px-5 py-2 text-[13px] font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-all duration-300 relative group"
                            >
                                <span className="relative z-10">{item.name}</span>
                                <span className="absolute inset-0 bg-slate-50 scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 z-0"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Action */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden sm:inline-block px-8 py-3 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-slate-900 hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] active:scale-95"
                        >
                            Get Started
                        </Link>

                        {/* Modern Toggle Menu */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-slate-50 rounded-full"
                        >
                            <span className={`h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? "w-5 rotate-45 translate-y-2" : "w-5"}`}></span>
                            <span className={`h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? "opacity-0" : "w-3"}`}></span>
                            <span className={`h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? "w-5 -rotate-45 -translate-y-2" : "w-5"}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Overlay */}
                <div className={`lg:hidden fixed inset-x-0 top-[80px] bg-white border-t border-slate-100 shadow-2xl transition-all duration-500 ease-in-out ${isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-10 opacity-0 invisible"
                    }`}>
                    <div className="p-10 flex flex-col gap-6">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-black text-slate-900 uppercase tracking-tighter flex justify-between items-center group"
                            >
                                {item.name}
                                <span className="w-8 h-[2px] bg-blue-600 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}