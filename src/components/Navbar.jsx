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
                ? 'py-3 bg-white/90 backdrop-blur-lg shadow-lg border-b border-slate-200/50'
                : 'py-5 bg-white border-b border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* --- LOGO --- */}
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Increased container size */}
                    <div className="relative w-[80px] h-[80px] md:w-[70px] md:h-[70px] transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src="/assets/logo/logo.png"
                            alt="Mission Power Land Limited"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        {/* Increased text size and weight */}
                        <span className="text-lg md:text-xl font-extrabold tracking-tight leading-none text-slate-900 uppercase">
                            Mission Power <span className="text-blue-600 italic">Land</span>
                        </span>
                        <span
                            className="text-[10px] font-bold tracking-[0.45em] uppercase mt-1"
                            style={{ color: '#B45309' }}
                        >
                            Limited
                        </span>
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
                                    // Increased font size and clarity
                                    className={`px-4 py-2 text-xs font-extrabold uppercase tracking-wide flex items-center gap-1 transition-all ${isSubmenuOpen ? 'text-blue-600' : 'text-slate-800 hover:text-blue-600'}`}
                                >
                                    {link.name}
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    // Increased font size and clarity
                                    className={`px-4 py-2 text-xs font-extrabold uppercase tracking-wide transition-all ${pathname === link.href ? 'text-blue-600' : 'text-slate-800 hover:text-blue-600'}`}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* --- DESKTOP DROPDOWN --- */}
                            <AnimatePresence>
                                {link.submenu && isSubmenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-4 grid grid-cols-2 gap-2"
                                    >
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50/50 transition-all border border-transparent hover:border-blue-100 group/item"
                                            >
                                                <div className="text-blue-600 p-2.5 bg-blue-50 rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                                                    {sub.icon}
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-black text-slate-900 uppercase tracking-tight">{sub.name}</div>
                                                    <p className="text-[9px] text-slate-500 leading-tight mt-1 font-semibold">{sub.desc}</p>
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
                    {/* লিংকে ?type=quote যোগ করা হয়েছে */}
                    <Link href="/contact?type=quote" className="group flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all active:scale-95 shadow-xl shadow-blue-900/10">
                        <span>Get Quote</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* --- MOBILE TOGGLE --- */}
                <button
                    className="lg:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
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
                                <div key={link.name} className="border-b border-slate-50 pb-2 last:border-0">
                                    <div
                                        className="flex justify-between items-center py-2"
                                        onClick={() => link.submenu && setIsSubmenuOpen(!isSubmenuOpen)}
                                    >
                                        {link.submenu ? (
                                            <span className="text-sm font-black text-slate-900 uppercase tracking-tight">
                                                {link.name}
                                            </span>
                                        ) : (
                                            <Link href={link.href} className="text-sm font-black text-slate-900 uppercase tracking-tight">
                                                {link.name}
                                            </Link>
                                        )}
                                        {link.submenu && (
                                            <ChevronDown size={18} className={`text-blue-600 transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
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
                                                    <div className="text-blue-600 bg-blue-50 p-1.5 rounded-lg">{sub.icon}</div>
                                                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide group-active:text-blue-600">{sub.name}</span>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                            {/* মোবাইল মেনুর বাটনেও ?type=quote যোগ করা হয়েছে */}
                            <Link href="/contact?type=quote" className="flex justify-center items-center w-full bg-blue-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest">
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