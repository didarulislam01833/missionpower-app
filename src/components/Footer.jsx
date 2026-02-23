import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8 border-t-4 border-blue-600">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* --- Brand & Identity Section --- */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <img
                            src="/assets/logo/logo.png"
                            alt="Mission Power Land Limited"
                            className="h-16 w-auto brightness-110"
                        />
                        <div className="flex flex-col">
                            <h2 className="text-white font-bold text-xl leading-tight uppercase tracking-wide">
                                Mission Power <br /> Land Limited
                            </h2>
                            <span className="text-[10px] text-blue-500 font-bold tracking-[0.2em] uppercase">
                                Engineered Excellence
                            </span>
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed opacity-80 max-w-xs">
                        Registered Class-A Govt. Contractor. Bangladesh's premier manufacturer of high-voltage transformers and specialized power infrastructure.
                    </p>

                    {/* Social Connect */}
                    <div className="space-y-3 pt-2">
                        <h6 className="text-xs font-bold uppercase tracking-widest text-white opacity-50">Connect With Us</h6>
                        <div className="flex gap-4">
                            <a href="#" className="p-2.5 bg-slate-800 rounded-xl hover:bg-blue-600 transition-all text-white flex items-center justify-center w-10 h-10 shadow-lg shadow-black/20">f</a>
                            <a href="#" className="p-2.5 bg-slate-800 rounded-xl hover:bg-blue-700 transition-all text-white flex items-center justify-center w-10 h-10 shadow-lg shadow-black/20">in</a>
                            <a href="#" className="p-2.5 bg-slate-800 rounded-xl hover:bg-sky-500 transition-all text-white flex items-center justify-center w-10 h-10 shadow-lg shadow-black/20">𝕏</a>
                        </div>
                    </div>
                </div>

                {/* --- Core Divisions (Electrical Focused) --- */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 relative inline-block uppercase tracking-wider">
                        Core Divisions
                        <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-600"></span>
                    </h3>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/services" className="hover:text-blue-500 transition-colors flex items-center gap-2"><span>⚡</span> Transformer Manufacturing</Link></li>
                        <li><Link href="/services" className="hover:text-blue-500 transition-colors flex items-center gap-2"><span>⚡</span> Substation Engineering</Link></li>
                        <li><Link href="/services" className="hover:text-blue-500 transition-colors flex items-center gap-2"><span>⚡</span> Switchgear Assembly</Link></li>
                        <li><Link href="/services" className="hover:text-blue-500 transition-colors flex items-center gap-2"><span>⚡</span> Industrial Power Solutions</Link></li>
                    </ul>
                </div>

                {/* --- Contact & Hotline --- */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 relative inline-block uppercase tracking-wider">
                        Contact Hotline
                        <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-600"></span>
                    </h3>
                    <div className="space-y-5 text-sm">
                        <div className="flex gap-4 items-center">
                            <div className="bg-blue-600/10 p-2.5 rounded-lg">
                                <span className="text-blue-500 text-xl">📞</span>
                            </div>
                            <div className="font-bold text-slate-100 tracking-wider">
                                <p>01810-098911</p>
                                <p>01810-098909</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="bg-blue-600/10 p-2.5 rounded-lg">
                                <span className="text-blue-500">✉️</span>
                            </div>
                            <p className="lowercase font-medium opacity-90">missionpowerland@gmail.com</p>
                        </div>
                        <div className="pt-2 border-t border-slate-800">
                            <h4 className="text-blue-500 font-bold text-[10px] uppercase mb-2 tracking-[0.1em]">Enlisted Contractor</h4>
                            <p className="text-[10px] leading-relaxed opacity-60 font-medium">BPDB, BREB, PGCB, LGED, RHD, BPC, DESCO, DPDC.</p>
                        </div>
                    </div>
                </div>

                {/* --- Locations (Office & Factory) --- */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 relative inline-block uppercase tracking-wider">
                        Office & Factory
                        <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-600"></span>
                    </h3>
                    <div className="space-y-6 text-sm">
                        {/* Corporate Office */}
                        <div className="flex gap-3 items-start">
                            <span className="text-blue-500 text-lg mt-1">🏢</span>
                            <div>
                                <h4 className="text-white font-bold text-xs uppercase mb-1">Corporate Office</h4>
                                <p className="leading-relaxed opacity-75">
                                    House: 01, Road: 16, Sector: 07, <br />
                                    Uttara, Dhaka-1230, Bangladesh
                                </p>
                            </div>
                        </div>

                        {/* Factory: Manufacturing Unit */}
                        <div className="flex gap-3 items-start border-t border-slate-800 pt-5">
                            <span className="text-blue-500 text-lg mt-1">🏭</span>
                            <div>
                                <h4 className="text-white font-bold text-xs uppercase mb-1">Factory: Manufacturing Unit</h4>
                                <p className="leading-relaxed opacity-75">
                                    210/1, Nilerpara, Gazipur <br />
                                    City Corporation, Gazipur
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Copyright Strip --- */}
            <div className="mt-16 border-t border-slate-800 pt-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest opacity-50">
                    <p className="font-medium tracking-tighter md:tracking-widest">© {new Date().getFullYear()} Mission Power Land Limited. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Site by Eye Catcher</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;