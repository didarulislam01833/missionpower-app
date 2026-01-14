"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false); // To prevent hydration flicker
    const pathname = usePathname();

    const isInternalPage = pathname !== "/";

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // If not mounted, return a consistent placeholder or the base state 
    // to ensure Server and Client match exactly on first paint.
    if (!mounted) return null;

    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Contact", link: "/contact" },
    ];

    const getThemeColor = () => {
        if (scrolled || isInternalPage) return "text-slate-900";
        return "text-white";
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ease-in-out ${scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg h-20"
            : isInternalPage
                ? "bg-white shadow-sm h-24"
                : "bg-transparent h-28"
            }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">

                {/* BRAND AREA */}
                <Link href="/" className="flex items-center gap-4 group cursor-pointer shrink-0">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${scrolled || isInternalPage ? "bg-blue-50/50 scale-90" : "bg-white/5 scale-110"
                            }`}></div>
                        <img
                            src="/assets/logo/logo.png"
                            alt="Mission Power Land Limited"
                            // Added "animate-in fade-in zoom-in" instead of custom JSX styles
                            className="relative z-10 w-full h-full object-contain duration-1000 animate-in fade-in zoom-in"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h1 className={`text-base md:text-lg font-[900] leading-[0.9] tracking-tighter uppercase transition-all duration-500 ${getThemeColor()}`}>
                            MISSION POWER <br />
                            <span className={scrolled || isInternalPage ? "text-blue-600" : "text-blue-400"}>LAND</span>
                        </h1>
                        <p className={`text-[8px] md:text-[9px] font-bold tracking-[0.4em] uppercase mt-1 transition-colors duration-500 ${scrolled || isInternalPage ? "text-slate-400" : "text-white/80"
                            }`}>
                            Limited
                        </p>
                    </div>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className={`px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative group ${getThemeColor()}`}
                        >
                            <span className="relative z-10">{item.name}</span>
                            <span className={`absolute bottom-0 left-4 right-4 h-[1.5px] transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${scrolled || isInternalPage ? "bg-blue-600" : "bg-white"
                                }`}></span>
                        </Link>
                    ))}
                </div>

                {/* ACTION BUTTON */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/contact"
                        className={`hidden sm:flex items-center justify-center px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-sm border ${scrolled || isInternalPage
                            ? "bg-blue-600 border-blue-600 text-white hover:bg-slate-900 hover:border-slate-900"
                            : "bg-white border-white text-slate-900 hover:bg-transparent hover:text-white"
                            }`}
                    >
                        GET IN TOUCH
                    </Link>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 transition-all ${getThemeColor()}`}
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <div className={`lg:hidden fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-[1000] transition-all duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white text-4xl">&times;</button>
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
    );
}