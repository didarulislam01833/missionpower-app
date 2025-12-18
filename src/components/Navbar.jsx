"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* ১. লোগো এরিয়া (Professional Branding) */}
                <Link href="/" className="flex items-center gap-3 shrink-0">
                    <div className="relative w-11 h-11 overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
                        <Image
                            src="/assets/logo.jpg"
                            alt="Mission Power Land"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="hidden sm:flex flex-col leading-tight">
                        <span className="font-black text-lg text-slate-900 tracking-tighter uppercase">
                            Mission Power <span className="text-blue-600">Land</span>
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                            Engineered Excellence
                        </span>
                    </div>
                </Link>

                {/* ২. মাঝখানের মেনু (Minimalist & Clean) */}
                <div className="hidden lg:flex items-center gap-1">
                    {[
                        { name: "Home", link: "/" },
                        { name: "About", link: "/about" },
                        { name: "Services", link: "/services" },
                        { name: "Portfolio", link: "/portfolio" },
                        { name: "Contact", link: "/contact" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="px-5 py-2 text-[13px] font-bold text-slate-600 hover:text-blue-600 transition-all rounded-full hover:bg-blue-50/50"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* ৩. ডানদিকের সেকশন (Action Focused) */}
                <div className="flex items-center gap-6">
                    <div className="hidden xl:flex flex-col items-end border-r border-slate-200 pr-6">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Registered Govt. Contractor</span>
                        <span className="text-[11px] font-bold text-blue-900">Class-A Verified</span>
                    </div>

                    <Link
                        href="/contact"
                        className="h-11 px-7 flex items-center bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/10 active:scale-95"
                    >
                        Project Inquiry
                    </Link>

                    {/* মোবাইল মেনু বাটন */}
                    <button className="lg:hidden p-2 text-slate-900">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}