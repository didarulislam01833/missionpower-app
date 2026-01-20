"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Zap, Sun, Building2, Landmark } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();

    const isInternalPage = pathname !== "/";

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) return null;

    // --- ফাইল স্ট্রাকচার অনুযায়ী সঠিক লিংক এখানে দেওয়া হলো ---
    const serviceItems = [
        { name: "Power Grid", link: "/services/powerGrid", icon: <Zap size={14} /> },
        { name: "Solar Energy", link: "/services/solar", icon: <Sun size={14} /> },
        { name: "Civil Works", link: "/services/civil", icon: <Building2 size={14} /> },
        { name: "Public Infrastructure", link: "/services/public", icon: <Landmark size={14} /> },
    ];

    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services", hasDropdown: true },
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

                {/* --- BRAND AREA --- */}
                <Link href="/" className="flex items-center gap-4 group cursor-pointer shrink-0">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${scrolled || isInternalPage ? "bg-blue-50/50 scale-90" : "bg-white/5 scale-110"
                            }`}></div>
                        <img
                            src="/assets/logo/logo.png"
                            alt="Mission Power Land Limited"
                            className="relative z-10 w-full h-full object-contain duration-1000 animate-in fade-in zoom-in"
                        />
                    </div>

                    <div className="flex flex-col justify-center min-w-max">
                        <h1 className={`text-base md:text-lg font-[900] leading-none tracking-tighter uppercase transition-all duration-500 whitespace-nowrap ${getThemeColor()}`}>
                            MISSION POWER <span className={scrolled || isInternalPage ? "text-blue-600" : "text-blue-400"}>LAND</span>
                        </h1>
                        <p className={`text-[8px] md:text-[9px] font-bold tracking-[0.4em] uppercase mt-1 transition-colors duration-500 ${scrolled || isInternalPage ? "text-slate-400" : "text-white/80"
                            }`}>
                            Limited
                        </p>
                    </div>
                </Link>

                {/* --- DESKTOP MENU --- */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((item) => (
                        <div
                            key={item.name}
                            className="relative group/nav"
                            onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
                            onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
                        >
                            <Link
                                href={item.link}
                                className={`px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-1 relative group ${getThemeColor()}`}
                            >
                                <span className="relative z-10">{item.name}</span>
                                {item.hasDropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />}
                                <span className={`absolute bottom-0 left-4 right-4 h-[1.5px] transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${scrolled || isInternalPage ? "bg-blue-600" : "bg-white"}`}></span>
                            </Link>

                            {/* --- DROPDOWN MENU --- */}
                            {item.hasDropdown && (
                                <div className={`absolute top-full left-0 w-64 pt-4 transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                    <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-2">
                                        {serviceItems.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.link}
                                                className="flex items-center gap-3 px-6 py-3 text-[11px] font-bold text-slate-600 uppercase tracking-widest hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                            >
                                                <span className="text-blue-500">{subItem.icon}</span>
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* --- ACTION BUTTON --- */}
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

                    {/* --- MOBILE TOGGLE --- */}
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

            {/* --- MOBILE MENU OVERLAY --- */}
            <div className={`lg:hidden fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-[1000] transition-all duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col items-center justify-center h-full gap-6">
                    <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white text-4xl">&times;</button>
                    {navLinks.map((item) => (
                        <div key={item.name} className="flex flex-col items-center">
                            <Link
                                href={item.link}
                                onClick={() => !item.hasDropdown && setIsOpen(false)}
                                className="text-2xl font-bold text-white uppercase tracking-widest"
                            >
                                {item.name}
                            </Link>
                            {item.hasDropdown && (
                                <div className="flex flex-col items-center gap-4 mt-4 bg-white/5 p-4 rounded-xl">
                                    {serviceItems.map(sub => (
                                        <Link
                                            key={sub.name}
                                            href={sub.link}
                                            onClick={() => setIsOpen(false)}
                                            className="text-sm text-blue-400 font-bold uppercase tracking-widest"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}