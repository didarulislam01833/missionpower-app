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
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setIsSubmenuOpen(false);
        setMobileSubmenuOpen(false);
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
                    ? 'py-3 bg-[#070A11]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border-b border-slate-800'
                    : 'py-4 bg-[#070A11]/90 backdrop-blur-md border-b border-slate-800/80'
                }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-6 flex justify-between items-center">

                {/* --- LOGO --- */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-[48px] h-[48px] md:w-[54px] md:h-[54px] flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src="/assets/logo/logo.png"
                            alt="Mission Power Land Limited"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div className="flex flex-col leading-none">
                        <span className="text-base md:text-xl font-black tracking-tight text-white uppercase">
                            Mission Power <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Land</span>
                        </span>

                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] md:text-xs font-black text-amber-400 tracking-widest">
                                LIMITED
                            </span>
                            <span className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-amber-400 to-transparent"></span>
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
                                    className={`px-4 py-2 text-xs md:text-sm font-extrabold uppercase tracking-wider flex items-center gap-1.5 transition-all rounded-xl ${isSubmenuOpen
                                            ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                                            : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800/60'
                                        }`}
                                >
                                    <span>{link.name}</span>
                                    <ChevronDown size={15} className={`transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`px-4 py-2 text-xs md:text-sm font-extrabold uppercase tracking-wider transition-all rounded-xl ${pathname === link.href
                                            ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                                            : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800/60'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* --- DESKTOP DROPDOWN --- */}
                            <AnimatePresence>
                                {link.submenu && isSubmenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                                        className="absolute top-full left-0 mt-2 w-[500px] bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-amber-500/30 p-3 grid grid-cols-2 gap-2 z-50"
                                    >
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-800/80 transition-all border border-transparent hover:border-amber-500/40 group/item"
                                            >
                                                <div className="text-amber-400 p-2.5 bg-amber-500/10 rounded-xl group-hover/item:bg-amber-500 group-hover/item:text-slate-950 transition-all duration-300 shrink-0">
                                                    {sub.icon}
                                                </div>
                                                <div>
                                                    <div className="text-xs font-black text-white uppercase tracking-tight group-hover/item:text-amber-400 transition-colors">{sub.name}</div>
                                                    <p className="text-[10px] text-slate-400 leading-tight mt-1">{sub.desc}</p>
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
                        className="group flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-950 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                    >
                        <span>Get Quote</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* --- MOBILE TOGGLE --- */}
                <button
                    className="lg:hidden p-2.5 text-amber-400 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
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
                        className="lg:hidden bg-slate-950/98 backdrop-blur-2xl border-t border-slate-800 overflow-hidden"
                    >
                        <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-slate-800/80 pb-3 last:border-0">
                                    <div
                                        className="flex justify-between items-center py-2 cursor-pointer"
                                        onClick={() => link.submenu && setMobileSubmenuOpen(!mobileSubmenuOpen)}
                                    >
                                        {link.submenu ? (
                                            <span className="text-sm font-extrabold text-white uppercase tracking-wider">
                                                {link.name}
                                            </span>
                                        ) : (
                                            <Link href={link.href} className="text-sm font-extrabold text-white uppercase tracking-wider">
                                                {link.name}
                                            </Link>
                                        )}
                                        {link.submenu && (
                                            <ChevronDown size={18} className={`text-amber-400 transition-transform duration-300 ${mobileSubmenuOpen ? 'rotate-180' : ''}`} />
                                        )}
                                    </div>

                                    {link.submenu && mobileSubmenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="mt-2 grid grid-cols-1 gap-2 pl-3 border-l-2 border-amber-500/40"
                                        >
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="py-2.5 flex items-center gap-3 group bg-slate-900/60 px-3 rounded-xl border border-slate-800"
                                                >
                                                    <div className="text-amber-400 bg-amber-500/10 p-2 rounded-lg shrink-0">{sub.icon}</div>
                                                    <div>
                                                        <span className="text-xs font-bold text-white uppercase tracking-tight block">{sub.name}</span>
                                                        <span className="text-[10px] text-slate-400">{sub.desc}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}

                            <div className="pt-2">
                                <Link
                                    href="/contact?type=quote"
                                    className="flex justify-center items-center w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
                                >
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;