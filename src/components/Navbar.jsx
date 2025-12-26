"use client";

import React, { useState } from 'react'; // 1. Added useState
import Link from 'next/link';

export default function Navbar() {
    // 2. State to track if mobile menu is open
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* লোগো এরিয়া */}
                <Link href="/" className="flex items-center gap-3 shrink-0">
                    <div className="w-11 h-11 overflow-hidden rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                        <img
                            src="/assets/logo/logo.jpg"
                            alt="Mission Power Land"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = "https://via.placeholder.com/44?text=MPL";
                            }}
                        />
                    </div>
                    <div className="hidden sm:flex flex-col leading-tight">
                        <span className="font-black text-lg text-slate-900 tracking-tighter uppercase">
                            Mission Power <span className="text-blue-600">Land</span>
                            <span className="text-amber-950">  Limited</span>

                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="px-5 py-2 text-[13px] font-bold text-slate-600 hover:text-blue-600 transition-all rounded-full"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/contact"
                        className="hidden sm:flex h-11 px-7 items-center bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all"
                    >
                        Project Inquiry
                    </Link>

                    {/* 3. Mobile Toggle Button with onClick */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-slate-900"
                    >
                        {isOpen ? (
                            // Close Icon (X)
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* 4. Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden bg-white border-b border-slate-100 p-6 flex flex-col gap-4">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            onClick={() => setIsOpen(false)} // Close menu when link is clicked
                            className="text-sm font-bold text-slate-600"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}