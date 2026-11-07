"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap, Shield, Building2, LayoutGrid, ArrowRight, Phone } from 'lucide-react';

const PHONE = "+8801810098909";

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
        name: 'Our Expertise',
        href: '/services',
        submenu: [
            { name: 'Power Division', href: '/services/powerGrid', icon: <Zap size={16} />, desc: 'Substations & HV engineering.' },
            { name: 'Solar Solutions', href: '/services/solar', icon: <Shield size={16} />, desc: 'Renewable infrastructure.' },
            { name: 'Land & Infrastructure', href: '/services/civil', icon: <Building2 size={16} />, desc: 'Industrial site development.' },
            { name: 'National Infrastructure', href: '/services/public', icon: <LayoutGrid size={16} />, desc: 'National scale projects.' },
        ],
    },
    { name: 'Manufacturing', href: '/manufacture-excellence' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // পেজ বদলালে মেনু বন্ধ
    useEffect(() => {
        setIsOpen(false);
        setIsSubmenuOpen(false);
        setMobileSubmenuOpen(false);
    }, [pathname]);

    // মোবাইল মেনু খোলা থাকলে পেছনের পেজ স্ক্রল হবে না, Esc চাপলে বন্ধ
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen]);

    const isActive = (link) =>
        link.href === '/' ? pathname === '/' : pathname === link.href || pathname.startsWith(link.href + '/');

    const desktopItem = (active) =>
        `px-3 py-2 text-xs font-extrabold uppercase tracking-wider transition-all rounded-xl flex items-center gap-1.5 ${active
            ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
            : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800/60 border border-transparent'}`;

    return (
        <nav
            aria-label="Main"
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${scrolled
                ? 'py-3 bg-[#070A11]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border-b border-slate-800'
                : 'py-4 bg-[#070A11]/90 backdrop-blur-md border-b border-slate-800/80'}`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-6 flex justify-between items-center gap-3">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3 group min-w-0">
                    <div className="relative w-[44px] h-[44px] md:w-[54px] md:h-[54px] flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                        <Image src="/assets/logo/logo.png" alt="Mission Power Land Limited" fill sizes="54px" className="object-contain" priority />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-sm sm:text-base md:text-xl font-black tracking-tight text-white uppercase whitespace-nowrap">
                            Mission Power <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Land</span>
                        </span>
                        <span className="text-[10px] md:text-xs font-black text-amber-400 tracking-widest mt-1">LIMITED</span>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden xl:flex items-center gap-1">
                    {navLinks.map((link) =>
                        link.submenu ? (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => setIsSubmenuOpen(true)}
                                onMouseLeave={() => setIsSubmenuOpen(false)}
                                onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsSubmenuOpen(false); }}
                                onKeyDown={(e) => { if (e.key === 'Escape') setIsSubmenuOpen(false); }}
                            >
                                <button
                                    type="button"
                                    aria-haspopup="true"
                                    aria-expanded={isSubmenuOpen}
                                    onClick={() => setIsSubmenuOpen((v) => !v)}
                                    className={desktopItem(isSubmenuOpen || pathname.startsWith('/services'))}
                                >
                                    <span>{link.name}</span>
                                    <ChevronDown size={15} className={`transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {isSubmenuOpen && (
                                        /* pt-2 (mt নয়) রাখা হয়েছে যাতে মাউস বাটন থেকে মেনুতে যাওয়ার সময় মেনু বন্ধ না হয় */
                                        <motion.div
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 12 }}
                                            className="absolute top-full left-0 pt-2 z-50"
                                        >
                                            <div className="w-[500px] bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-amber-500/30 p-3 grid grid-cols-2 gap-2">
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
                                                            <p className="text-[11px] text-slate-400 leading-tight mt-1">{sub.desc}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link key={link.name} href={link.href} className={desktopItem(isActive(link))}>
                                {link.name}
                            </Link>
                        )
                    )}
                </div>

                {/* DESKTOP CTA */}
                <div className="hidden xl:block">
                    <Link
                        href="/contact?type=quote"
                        className="group flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-950 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                    >
                        <span>Get Quote</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* MOBILE: কল বাটন + মেনু বাটন */}
                <div className="xl:hidden flex items-center gap-2 shrink-0">
                    <a
                        href={`tel:${PHONE}`}
                        aria-label="Call Mission Power Land"
                        className="p-2.5 text-slate-950 bg-amber-500 rounded-xl active:scale-95 transition-transform"
                    >
                        <Phone size={22} />
                    </a>
                    <button
                        type="button"
                        className="p-2.5 text-amber-400 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors"
                        onClick={() => setIsOpen((v) => !v)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-slate-950/98 backdrop-blur-2xl border-t border-slate-800 overflow-hidden"
                    >
                        <div className="p-5 space-y-2 max-h-[calc(100dvh-5rem)] overflow-y-auto">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-slate-800/80 pb-2 last:border-0">
                                    {link.submenu ? (
                                        <>
                                            <button
                                                type="button"
                                                aria-expanded={mobileSubmenuOpen}
                                                onClick={() => setMobileSubmenuOpen((v) => !v)}
                                                className="w-full flex justify-between items-center py-3 text-left"
                                            >
                                                <span className="text-sm font-extrabold text-white uppercase tracking-wider">{link.name}</span>
                                                <ChevronDown size={18} className={`text-amber-400 transition-transform duration-300 ${mobileSubmenuOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            {mobileSubmenuOpen && (
                                                <div className="mb-2 grid grid-cols-1 gap-2 pl-3 border-l-2 border-amber-500/40">
                                                    {link.submenu.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.href}
                                                            className="py-2.5 flex items-center gap-3 bg-slate-900/60 px-3 rounded-xl border border-slate-800"
                                                        >
                                                            <div className="text-amber-400 bg-amber-500/10 p-2 rounded-lg shrink-0">{sub.icon}</div>
                                                            <div>
                                                                <span className="text-xs font-bold text-white uppercase tracking-tight block">{sub.name}</span>
                                                                <span className="text-[11px] text-slate-400">{sub.desc}</span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={`block py-3 text-sm font-extrabold uppercase tracking-wider ${isActive(link) ? 'text-amber-400' : 'text-white'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            <div className="pt-3 grid grid-cols-2 gap-3">
                                <a
                                    href={`tel:${PHONE}`}
                                    className="flex justify-center items-center gap-2 bg-slate-900 border border-slate-700 text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-widest active:scale-95 transition-transform"
                                >
                                    <Phone size={16} /> Call
                                </a>
                                <Link
                                    href="/contact?type=quote"
                                    className="flex justify-center items-center bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
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