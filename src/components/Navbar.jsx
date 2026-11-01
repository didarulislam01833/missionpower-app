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
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setIsSubmenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        {
            name: 'Our Expertise',
            href: '#',
            submenu: [
                { name: 'Power Division', href: '/services/powerGrid', icon: <Zap size={16} />, desc: 'Substations & HV engineering.' },
                { name: 'Solar Solutions', href: '/services/solar', icon: <Shield size={16} />, desc: 'Renewable infrastructure.' },
                { name: 'Land & Infrastructure', href: '/services/civil', icon: <Building2 size={16} />, desc: 'Industrial site development.' },
                { name: 'National Infrastructure', href: '/services/public', icon: <LayoutGrid size={16} />, desc: 'National scale projects.' },
            ]
        },
        { name: 'Manufacturing', href: '/manufacture-excellence' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${scrolled
                ? 'py-3 bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50'
                : 'py-4 bg-white border-b border-slate-100/50'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* --- LOGO --- */}
                <Link href="/" className="flex items-center gap-4 group">
                    {/* Logo container */}
                    <div className="relative w-[55px] h-[55px] md:w-[60px] md:h-[60px] flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src="/assets/logo/logo.png"
                            alt="Mission Power Land Limited"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Brand name with elegant styling */}
                    <div className="flex flex-col leading-none">
                        {/* Main brand name */}
                        <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900">
                            Mission Power <span className="text-blue-600">Land</span>
                        </span>

                        {/* "Limited" - Now BOLD, VISIBLE, and ELEGANT */}
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs md:text-sm font-extrabold text-blue-700 tracking-wider">
                                LIMITED
                            </span>
                            <span className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-blue-600 to-transparent"></span>
                        </div>
                    </div>
                </Link>

                {/* --- DESKTOP NAVIGATION --- */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => link.submenu && setIsSubmenuOpen(true)}
                            onMouseLeave={() => link.submenu && setIsSubmenuOpen(false)}
                        >
                            {link.submenu ? (
                                <button
                                    className={`px-4 py-2 text-sm font-semibold tracking-wide flex items-center gap-1 transition-all rounded-lg ${isSubmenuOpen ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'
                                        }`}
                                >
                                    {link.name}
                                    <ChevronDown size={15} className={`transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`px-4 py-2 text-sm font-semibold tracking-wide transition-all rounded-lg ${pathname === link.href ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* --- DESKTOP DROPDOWN --- */}
                            <AnimatePresence>
                                {link.submenu && isSubmenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        className="absolute top-full left-0 mt-2 w-[520px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-100 p-4 grid grid-cols-2 gap-2"
                                    >
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50/60 transition-all border border-transparent hover:border-blue-100 group/item"
                                            >
                                                <div className="text-blue-600 p-2.5 bg-blue-50 rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                                                    {sub.icon}
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-slate-900">{sub.name}</div>
                                                    <p className="text-[10px] text-slate-500 leading-tight mt-1">{sub.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* --- ACTION BUTTON --- */}
                <div className="hidden lg:block">
                    <Link
                        href="/contact?type=quote"
                        className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-95 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
                    >
                        <span>Get Quote</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* --- MOBILE TOGGLE --- */}
                <button
                    className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* --- MOBILE MENU --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="p-6 space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-slate-50 pb-3 last:border-0">
                                    <div
                                        className="flex justify-between items-center py-2 cursor-pointer"
                                        onClick={() => link.submenu && setIsSubmenuOpen(!isSubmenuOpen)}
                                    >
                                        {link.submenu ? (
                                            <span className="text-base font-semibold text-slate-900">
                                                {link.name}
                                            </span>
                                        ) : (
                                            <Link href={link.href} className="text-base font-semibold text-slate-900">
                                                {link.name}
                                            </Link>
                                        )}
                                        {link.submenu && (
                                            <ChevronDown size={20} className={`text-blue-600 transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
                                        )}
                                    </div>

                                    {link.submenu && isSubmenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="mt-2 grid grid-cols-1 gap-1 pl-4 border-l-2 border-blue-500/20"
                                        >
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="py-3 flex items-center gap-3 group"
                                                >
                                                    <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">{sub.icon}</div>
                                                    <span className="text-sm font-medium text-slate-700 group-active:text-blue-600">{sub.name}</span>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/contact?type=quote"
                                className="flex justify-center items-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-semibold text-sm shadow-lg shadow-blue-600/25"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;