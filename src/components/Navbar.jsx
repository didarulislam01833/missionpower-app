"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap, Shield, Building2, LayoutGrid, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        {
            name: 'Our Expertise',
            href: '#',
            submenu: [
                { name: 'Power Grid', href: '/services/power-grid', icon: <Zap size={16} />, desc: 'Substations & HV engineering.' },
                { name: 'Solar Solutions', href: '/services/solar', icon: <Shield size={16} />, desc: 'Renewable infrastructure.' },
                { name: 'Civil Works', href: '/services/civil', icon: <Building2 size={16} />, desc: 'Industrial site development.' },
                { name: 'Infrastructure', href: '/services/infrastructure', icon: <LayoutGrid size={16} />, desc: 'National scale projects.' },
            ]
        },
        { name: 'Projects', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${scrolled
                    ? 'py-2 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100'
                    : 'py-4 bg-white border-b border-slate-50'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* HERO LOGO - Kept Big as requested */}
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="relative w-[70px] h-[70px] transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src="/assets/logo/logo.png"
                            alt="Mission Power Land Limited"
                            fill
                            className="object-contain text-visible"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-black tracking-tight leading-none text-slate-900">
                            MISSION POWER <span className="text-blue-600">LAND</span>
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase mt-1">
                            Limited
                        </span>
                    </div>
                </Link>

                {/* SLENDER NAVIGATION - Made smaller & refined */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                href={link.href}
                                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 transition-colors ${pathname === link.href
                                        ? 'text-blue-600'
                                        : 'text-slate-600 hover:text-blue-600'
                                    }`}
                            >
                                {link.name}
                                {link.submenu && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-200" />}
                            </Link>

                            {/* DROPDOWN - Clean & Compact */}
                            {link.submenu && (
                                <div className="absolute top-full left-0 mt-2 w-[480px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid grid-cols-2 gap-2">
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                                            >
                                                <div className="text-blue-600 p-2 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white">
                                                    {sub.icon}
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-bold text-slate-900 uppercase tracking-tight">{sub.name}</div>
                                                    <p className="text-[9px] text-slate-500 leading-tight mt-0.5 font-medium">{sub.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* COMPACT BUTTON */}
                <div className="hidden lg:block">
                    <Link href="/contact" className="flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-slate-200">
                        <span>Contact Us</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="lg:hidden p-2 text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-50 shadow-inner overflow-hidden"
                    >
                        <div className="p-6 space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => !link.submenu && setIsOpen(false)}
                                        className="text-sm font-black text-slate-900 flex justify-between items-center uppercase"
                                    >
                                        {link.name}
                                        {link.submenu && <ChevronDown size={16} />}
                                    </Link>
                                    {link.submenu && (
                                        <div className="mt-2 grid grid-cols-1 gap-2 pl-4 border-l border-blue-100">
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="py-1"
                                                >
                                                    <span className="text-[11px] font-bold text-slate-600 uppercase hover:text-blue-600">{sub.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;