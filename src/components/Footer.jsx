import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0f172a] text-white pt-20 pb-10 overflow-hidden relative">
            {/* Subtle Background Text for Design Depth */}
            <div className="absolute top-10 right-[-5%] text-[15rem] font-black text-white/[0.02] select-none pointer-events-none uppercase italic">
                Mission
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* 1. Brand Identity */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <span className="text-2xl font-black italic">M</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter leading-none uppercase italic">
                                    Mission Power <span className="text-blue-500">Land</span>
                                </span>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-1">
                                    Engineered Excellence
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Registered Class-A Govt. Contractor. Building the backbone of Bangladesh's infrastructure through power grids and land development.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                            {['FB', 'LI', 'TW'].map((social) => (
                                <a key={social} href="#" className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-[10px] font-bold hover:bg-blue-600 hover:border-blue-600 transition-all">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Core Divisions */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
                            <span className="w-4 h-[2px] bg-blue-600"></span>
                            Core Divisions
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-400 font-medium">
                            <li><Link href="#" className="hover:text-blue-500 transition-all flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-blue-500"></span> Power Infrastructure</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-all flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-blue-500"></span> Civil Engineering</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-all flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-blue-500"></span> Land Development</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-all flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-blue-500"></span> Logistics & Safety</Link></li>
                        </ul>
                    </div>

                    {/* 3. Quick Navigation */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
                            <span className="w-4 h-[2px] bg-blue-600"></span>
                            Corporate
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-400 font-medium">
                            <li><Link href="#" className="hover:text-white transition-colors">Our History</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Safety Standards</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Featured Tenders</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Career Opportunity</Link></li>
                        </ul>
                    </div>

                    {/* 4. Official Contact */}
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Headquarters</h4>
                        <div className="space-y-4 text-sm text-slate-400">
                            <div className="flex gap-3">
                                <span className="text-blue-500">📍</span>
                                <p>House: 01, Road: 16, Sector: 07, <br /> Uttara, Dhaka-1230, Bangladesh</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-blue-600">✉️</span>
                                <p className="font-bold text-slate-300">mission</p>
                            </div>
                            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-[0.2em] rounded-lg transition-all mt-4">
                                Get a Quote
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        © {currentYear} Mission Power Land. Registered Class-A Contractor.
                    </div>

                    <div className="flex gap-8">
                        <Link href="#" className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest">Privacy Policy</Link>
                        <Link href="#" className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest">Terms of Service</Link>
                        <Link href="#" className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest underline underline-offset-4 decoration-blue-600">Company Profile (PDF)</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}