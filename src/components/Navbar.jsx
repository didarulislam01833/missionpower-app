"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 md:h-28 flex items-center justify-between">

                {/* Logo & Branding Area - Made larger for clarity */}
                <Link href="/" className="flex items-center gap-4 md:gap-6 shrink-0 group">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform group-hover:scale-105">
                        <img
                            src="/assets/logo/logo.svg"
                            alt="Mission Power Land Logo"
                            className="w-full h-full object-contain bg-white rounded-full p-1"
                        /* This adds a clean white circle behind your logo so it never looks black */
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        {/* Main Title - Matches "MISSION POWER LAND" in image */}
                        <span className="font-black text-xl md:text-3xl text-[#0056b3] tracking-tighter uppercase leading-none">
                            Mission Power <span className="text-[#0056b3]">Land</span>
                        </span>
                        {/* Subtitle - Now says "Limited" as requested */}
                        <span className="text-[12px] md:text-[14px] font-bold text-slate-900 tracking-[0.4em] uppercase mt-1">
                            Limited
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="relative px-3 py-2 text-[16px] font-bold text-slate-700 hover:text-blue-600 transition-colors group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    ))}
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3 md:gap-6">
                    <Link
                        href="/contact"
                        className="hidden sm:flex h-12 px-8 items-center bg-blue-600 text-white text-[13px] font-bold uppercase tracking-widest rounded-md hover:bg-slate-900 transition-all shadow-lg"
                    >
                        Get In Touch
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-blue-50 transition-colors"
                    >
                        {isOpen ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-b border-slate-200 absolute top-20 left-0 right-0 p-8 flex flex-col gap-5 shadow-2xl">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-3"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}