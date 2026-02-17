"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Zap, Sun, Building2, Landmark } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // --- Services Dropdown Items ---
    const serviceItems = [
        { name: "Power Grid", link: "/services/powerGrid", icon: <Zap size={16} /> },
        { name: "Solar Energy", link: "/services/solar", icon: <Sun size={16} /> },
        { name: "Civil Works", link: "/services/civil", icon: <Building2 size={16} /> },
        { name: "Public Infrastructure", link: "/services/public", icon: <Landmark size={16} /> },
    ];

    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services", hasDropdown: true },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[999] bg-white h-24 shadow-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">

                {/* --- BRAND AREA --- */}
                <Link href="/" className="flex items-center gap-4 group cursor-pointer shrink-0">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        <img
                            src="/assets/logo/logo.png"
                            alt="Mission Power Land Limited"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="flex flex-col justify-center min-w-max">
                        <h1 className="text-xl font-extrabold leading-none tracking-tighter uppercase text-slate-950">
                            MISSION POWER <span className="text-blue-600">LAND</span>
                        </h1>
                        <p className="text-[10px] font-bold tracking-[0.4em] uppercase mt-1 text-slate-500">
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
                                className="px-5 py-2 text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-1.5 text-slate-900 group"
                            >
                                <span className="relative z-10">{item.name}</span>
                                {item.hasDropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />}
                                <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-blue-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                            </Link>

                            {/* --- DROPDOWN MENU --- */}
                            {item.hasDropdown && (
                                <div className={`absolute top-full left-0 w-64 pt-3 transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                    <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden py-3">
                                        {serviceItems.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.link}
                                                className="flex items-center gap-3 px-6 py-3.5 text-[11px] font-bold text-slate-700 uppercase tracking-widest hover:bg-slate-50 hover:text-blue-700 transition-colors"
                                            >
                                                <span className="text-blue-600">{subItem.icon}</span>
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
                        className="hidden sm:flex items-center justify-center px-8 py-3 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-full bg-slate-950 text-white hover:bg-blue-700"
                    >
                        GET IN TOUCH
                    </Link>

                    {/* --- MOBILE TOGGLE --- */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-slate-900"
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* --- MOBILE MENU OVERLAY --- */}
            <div className={`lg:hidden fixed inset-0 bg-white z-[1000] transition-all duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-slate-900 text-4xl">&times;</button>
                    {navLinks.map((item) => (
                        <div key={item.name} className="flex flex-col items-center">
                            <Link
                                href={item.link}
                                onClick={() => !item.hasDropdown && setIsOpen(false)}
                                className="text-3xl font-extrabold text-slate-950 uppercase tracking-widest"
                            >
                                {item.name}
                            </Link>
                            {item.hasDropdown && (
                                <div className="flex flex-col items-center gap-4 mt-6 bg-slate-50 p-6 rounded-2xl w-full">
                                    {serviceItems.map(sub => (
                                        <Link
                                            key={sub.name}
                                            href={sub.link}
                                            onClick={() => setIsOpen(false)}
                                            className="text-sm text-blue-700 font-bold uppercase tracking-widest"
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