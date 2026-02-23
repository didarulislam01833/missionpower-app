"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap, Shield, Building2, LayoutGrid, Globe, PhoneCall } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect for premium "floating" feel
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        {
            name: 'Services',
            href: '#',
            submenu: [
                { name: 'Power Grid', href: '/services/power-grid', icon: <Zap size={20} />, desc: 'High-voltage transformers & substations.' },
                { name: 'Solar Energy', href: '/services/solar', icon: <Shield size={20} />, desc: 'Sustainable renewable infrastructure.' },
                { name: 'Civil Works', href: '/services/civil', icon: <Building2 size={20} />, desc: 'Industrial site preparation & construction.' },
                { name: 'Infrastructure', href: '/services/infrastructure', icon: <LayoutGrid size={20} />, desc: 'Large-scale national power projects.' },
            ]
        },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${scrolled
                    ? 'py-3 bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50'
                    : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* PREMIUM LOGO SECTION */}
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src="/assets/logo/logo.png" // Corrected path for Next.js public folder
                            alt="Mission Power Land Limited"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col border-l border-slate-300 pl-4">
                        <span className="text-xl font-black tracking-tight leading-none text-slate-900">
                            MISSION POWER <span className="text-blue-600 tracking-normal">LAND</span>
                        </span>
                        <span className="text-[9px] font-bold text-slate-500 tracking-[0.4em] uppercase mt-1">
                            Limited • Engineering
                        </span>
                    </div>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group px-1">
                            <Link
                                href={link.href}
                                className={`px-4 py-2 text-[13px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all rounded-full ${pathname === link.href
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                {link.name}
                                {link.submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                            </Link>

                            {/* MEGA DROPDOWN */}
                            {link.submenu && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[550px] opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                                    <div className="bg-white rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 p-3 grid grid-cols-2 gap-2 overflow-hidden">
                                        <div className="col-span-2 px-4 py-2 border-b border-slate-50 mb-2">
                                            <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Global Solutions</p>
                                        </div>
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all group/item border border-transparent hover:border-slate-100"
                                            >
                                                <div className="text-blue-600 p-2.5 bg-blue-50 rounded-xl group-hover/item:scale-110 transition-transform">
                                                    {sub.icon}
                                                </div>
                                                <div>
                                                    <div className="text-[12px] font-bold text-slate-900 uppercase">{sub.name}</div>
                                                    <p className="text-[11px] text-slate-500 leading-tight mt-1 font-medium">{sub.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CALL TO ACTION */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex flex-col items-end mr-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Support Line</span>
                        <span className="text-sm font-bold text-slate-900">+880-XXXX-XXXXXX</span>
                    </div>
                    <Link href="/contact" className="relative group bg-slate-900 overflow-hidden text-white px-8 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all">
                        <span className="relative z-10 flex items-center gap-2">
                            Request Quote <PhoneCall size={14} />
                        </span>
                        <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="lg:hidden bg-slate-100 p-3 rounded-xl text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE NAVIGATION */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl p-6"
                    >
                        <div className="space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-slate-50 pb-4 last:border-0">
                                    <Link
                                        href={link.href}
                                        onClick={() => !link.submenu && setIsOpen(false)}
                                        className="text-lg font-black text-slate-900 flex justify-between items-center uppercase tracking-tight"
                                    >
                                        {link.name}
                                        {link.submenu && <ChevronDown size={20} />}
                                    </Link>
                                    {link.submenu && (
                                        <div className="mt-4 grid grid-cols-1 gap-4 pl-4 border-l-2 border-blue-500">
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex flex-col"
                                                >
                                                    <span className="text-sm font-bold text-slate-800 uppercase">{sub.name}</span>
                                                    <span className="text-[11px] text-slate-500">{sub.desc}</span>
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