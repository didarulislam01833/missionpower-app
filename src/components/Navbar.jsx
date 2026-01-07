"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Adds a shadow when the user scrolls
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
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md h-20" : "bg-white h-24"
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">

                {/* Unified Logo & Branding Area */}
                <Link href="/" className="flex items-center gap-3 md:gap-4 shrink-0 group">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[10deg]">
                        <img
                            src="/assets/logo/logo.png"
                            alt="Mission Power Land Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-xl md:text-2xl font-black text-slate-900 leading-none tracking-tighter uppercase">
                            MISSION POWER <span className="text-blue-600">LAND</span>
                        </h1>
                        <p className="text-[10px] md:text-[11px] font-extrabold text-blue-600/80 tracking-[0.4em] uppercase mt-1">
                            Limited
                        </p>
                    </div>
                </Link>

                {/* Desktop Menu - High-end Spacing */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="relative px-4 py-2 text-[15px] font-bold text-slate-600 hover:text-blue-600 transition-all duration-300 group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-1/2"></span>
                        </Link>
                    ))}
                </div>

                {/* Right Action Section */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden sm:flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-[12px] font-bold uppercase tracking-widest rounded-full hover:bg-slate-900 hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 active:scale-95"
                    >
                        Get In Touch
                    </Link>

                    {/* Modern Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-xl bg-slate-50 text-slate-900 hover:bg-blue-50 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl transition-all duration-300 origin-top ${isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
                }`}>
                <div className="p-6 flex flex-col gap-2">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 text-lg font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-4 w-full py-4 text-center bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}