"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#05070B] text-slate-300 relative overflow-hidden border-t border-slate-800">
            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 lg:px-16 pt-20 pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-800/80">

                    {/* --- COLUMN 1: BRAND INFO --- */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-[50px] h-[50px] flex-shrink-0">
                                <Image
                                    src="/assets/logo/logo.png"
                                    alt="Mission Power Land Limited"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-black tracking-tight text-white uppercase">
                                    Mission Power <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Land</span>
                                </span>
                                <span className="text-[10px] font-black text-amber-400 tracking-widest mt-1">
                                    LIMITED
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm text-slate-400 leading-relaxed">
                            Premier Class-A Government Contractor & Transformer Manufacturer in Bangladesh specializing in 33/11kV Substation, Power/Distribution Transformers, and Solar EPC Solutions.
                        </p>

                        <div className="flex items-center gap-3 pt-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
                                <ShieldCheck size={14} /> Class-A Contractor
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider">
                                <Zap size={14} /> ISO 9001
                            </span>
                        </div>
                    </div>

                    {/* --- COLUMN 2: QUICK LINKS --- */}
                    <div className="lg:col-span-2 space-y-5">
                        <h4 className="text-xs font-black text-white uppercase tracking-[0.25em] border-l-2 border-amber-400 pl-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm font-medium">
                            {['Home', 'About Us', 'Manufacturing', 'Portfolio', 'Contact'].map((item, idx) => {
                                const hrefs = ['/', '/about', '/manufacture-excellence', '/portfolio', '/contact'];
                                return (
                                    <li key={item}>
                                        <Link
                                            href={hrefs[idx]}
                                            className="hover:text-amber-400 transition-colors flex items-center gap-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors" />
                                            {item}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* --- COLUMN 3: EXPERTISE --- */}
                    <div className="lg:col-span-3 space-y-5">
                        <h4 className="text-xs font-black text-white uppercase tracking-[0.25em] border-l-2 border-amber-400 pl-3">
                            Our Divisions
                        </h4>
                        <ul className="space-y-3 text-sm font-medium">
                            {[
                                { name: 'Power & Substations', href: '/services/powerGrid' },
                                { name: 'Solar EPC Solutions', href: '/services/solar' },
                                { name: 'Civil & Infrastructure', href: '/services/civil' },
                                { name: 'National Grid Works', href: '/services/public' },
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="hover:text-amber-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* --- COLUMN 4: CONTACT INFO --- */}
                    <div className="lg:col-span-3 space-y-5">
                        <h4 className="text-xs font-black text-white uppercase tracking-[0.25em] border-l-2 border-amber-400 pl-3">
                            Official Contacts
                        </h4>
                        <div className="space-y-3.5 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-amber-400 shrink-0 mt-1" />
                                <span className="text-slate-300 leading-snug">
                                    Corporate Office & Factory: Gazipur Industrial Zone, Dhaka, Bangladesh.
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-amber-400 shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+8801810098909" className="hover:text-amber-400 transition-colors font-bold">+88 01810-098909</a>
                                    <a href="tel:+8801810098945" className="hover:text-amber-400 transition-colors font-bold">+88 01810-098945</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-amber-400 shrink-0" />
                                <a href="mailto:info@missionpowerland.com" className="hover:text-amber-400 transition-colors font-bold">
                                    info@missionpowerland.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* --- BOTTOM COPYRIGHT BAR --- */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
                    <p>© {new Date().getFullYear()} Mission Power Land Limited. All Rights Reserved.</p>
                    <div className="flex items-center gap-6">
                        <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
                        <span className="text-amber-400 font-bold uppercase tracking-wider">Class-A Verified</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}