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
    const [activeSubmenu, setActiveSubmenu] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setActiveSubmenu(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        {
            name: 'Our Expertise',
            href: '#',
            submenu: [
                // আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী পাথগুলো সেট করা হয়েছে
                { name: 'Power Grid', href: '/services/powerGrid', icon: <Zap size={16} />, desc: 'Substations & HV engineering.' },
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
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${scrolled
                ? 'py-3 bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-100'
                : 'py-5 bg-white border-b border-slate-50'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* --- LOGO --- */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-[60px] h-[60px] md:w-[70px] md:h-[70px] transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src="/assets/logo/logo.png"
                            alt="Mission Power Land Limited"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-black tracking-tight leading-none text-slate-900 uppercase">
                            Mission Power <span className="text-blue-600">Land</span>
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase mt-1">
                            Limited
                        </span>
                    </div>
                </Link>

                {/* --- DESKTOP NAVIGATION --- */}
                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => link.submenu && setActiveSubmenu(true)}
                            onMouseLeave={() => link.submenu && setActiveSubmenu(false)}
                        >
                            {link.submenu ? (
                                <button
                                    className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 transition-all ${activeSubmenu ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
                                >
                                    {link.name}
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeSubmenu ? 'rotate-180' : ''}`} />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 transition-all ${pathname === link.href ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* --- DESKTOP DROPDOWN --- */}
                            <AnimatePresence>
                                {link.submenu && activeSubmenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 grid grid-cols-2 gap-2"
                                    >
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group/item"
                                            >
                                                <div className="text-blue-600 p-2 bg-blue-50 rounded-lg group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                                                    {sub.icon}
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-bold text-slate-900 uppercase tracking-tight">{sub.name}</div>
                                                    <p className="text-[9px] text-slate-500 leading-tight mt-0.5 font-medium">{sub.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* --- CONTACT BUTTON --- */}
                <div className="hidden lg:block">
                    <Link href="/contact" className="group flex items-center gap-2 bg-slate-950 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg">
                        <span>Get Quote</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* --- MOBILE TOGGLE --- */}
                <button
                    className="lg:hidden p-2 text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* --- MOBILE MENU --- */}
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
                                    <div
                                        className="flex justify-between items-center cursor-pointer"
                                        onClick={() => link.submenu && setActiveSubmenu(!activeSubmenu)}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={(e) => link.submenu && e.preventDefault()}
                                            className="text-sm font-black text-slate-900 uppercase"
                                        >
                                            {link.name}
                                        </Link>
                                        {link.submenu && <ChevronDown size={16} className={activeSubmenu ? 'rotate-180' : ''} />}
                                    </div>

                                    {link.submenu && activeSubmenu && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="mt-4 grid grid-cols-1 gap-2 pl-4 border-l-2 border-blue-100"
                                        >
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="py-1 flex items-center gap-2"
                                                >
                                                    <span className="text-blue-600">{sub.icon}</span>
                                                    <span className="text-[11px] font-bold text-slate-600 uppercase hover:text-blue-600">{sub.name}</span>
                                                </Link>
                                            ))}
                                        </motion.div>
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