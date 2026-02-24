import React from 'react';
import Link from 'next/link';

const Footer = () => {
    // Partner List for the dynamic tooltips or clean list
    const enlistedPartners = [
        { name: "BREB", full: "Bangladesh Rural Electrification Board" },
        { name: "BPDB", full: "Bangladesh Power Development Board" },
        { name: "DESCO", full: "Dhaka Electric Supply Company Ltd." },
        { name: "DPDC", full: "Dhaka Power Distribution Company Ltd." },
        { name: "BMDA", full: "Barind Multipurpose Development Authority" },
        { name: "BADC", full: "Bangladesh Agricultural Development Corp." },
        { name: "PBS", full: "Palli Bidyut Samity (80+ Units)" },
    ];

    return (
        <footer className="bg-[#0f172a] text-gray-300 pt-10 pb-6 border-t-4 border-blue-600">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* --- Brand & Identity --- */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <img src="/assets/logo/logo.png" alt="Mission Power Land" className="h-12 w-auto" />
                        <div className="flex flex-col">
                            <h2 className="text-white font-bold text-lg leading-tight uppercase">Mission Power <br /> Land Limited</h2>
                            <span className="text-[9px] text-blue-500 font-bold tracking-[0.2em] uppercase">Engineered Excellence</span>
                        </div>
                    </div>
                    <p className="text-[13px] leading-relaxed opacity-70">
                        Registered Class-A Govt. Contractor. Bangladesh's premier manufacturer of high-voltage transformers and specialized power infrastructure.
                    </p>
                    <div className="flex gap-3 pt-1">
                        <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all text-sm">f</a>
                        <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all text-sm">in</a>
                        <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-black transition-all text-sm">𝕏</a>
                    </div>
                </div>

                {/* --- Core Divisions --- */}
                <div>
                    <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-blue-600 w-fit pb-1">Core Divisions</h3>
                    <ul className="space-y-2 text-[13px]">
                        <li><Link href="/services" className="hover:text-blue-500 transition-colors flex items-center gap-2">⚡ Transformer Manufacturing</Link></li>
                        <li><Link href="/services" className="hover:text-blue-500 transition-colors flex items-center gap-2">⚡ Substation Engineering</Link></li>
                        <li><Link href="/services" className="hover:text-blue-500 transition-colors flex items-center gap-2">⚡ Switchgear Assembly</Link></li>
                        <li><Link href="/services" className="hover:text-blue-500 transition-colors flex items-center gap-2">⚡ Industrial Power Solutions</Link></li>
                    </ul>
                </div>

                {/* --- Contact & Enlistment --- */}
                <div>
                    <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-blue-600 w-fit pb-1">Contact Hotline</h3>
                    <div className="space-y-3 text-[13px]">
                        <div className="flex gap-3 items-center">
                            <span className="text-blue-500">📞</span>
                            <div className="font-semibold text-white">
                                <p>01810-098911</p>
                                <p>01810-098909</p>
                            </div>
                        </div>
                        <p className="flex gap-3 items-center opacity-80">
                            <span className="text-blue-500">✉️</span> missionpowerland@gmail.com
                        </p>
                        <div className="pt-2">
                            <h4 className="text-blue-500 font-bold text-[10px] uppercase mb-1">Enlisted Contractor</h4>
                            <p className="text-[11px] leading-tight opacity-60">BPDB, BREB, PGCB, LGED, RHD, BPC, DESCO, DPDC.</p>
                        </div>
                    </div>
                </div>

                {/* --- Office & Factory --- */}
                <div>
                    <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-blue-600 w-fit pb-1">Office & Factory</h3>
                    <div className="space-y-4 text-[13px]">
                        <div className="flex gap-2">
                            <span className="text-blue-500 mt-0.5 text-base">🏢</span>
                            <p className="opacity-80"><strong>HQ:</strong> House: 01, Road: 16, Sector: 07, Uttara, Dhaka-1230, Bangladesh</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-blue-500 mt-0.5 text-base">🏭</span>
                            <p className="opacity-80"><strong>Factory:</strong> 210/1, Nilerpara, Gazipur City Corporation, Gazipur</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Copyright Strip --- */}
            <div className="mt-10 pt-6 border-t border-slate-800/60 text-center">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-[0.15em] opacity-50">
                    <p>© {new Date().getFullYear()} Mission Power Land Limited. All Rights Reserved.</p>
                    <p>Designed by <span className="text-white font-bold">Eye Catcher Brand & Web Co. All Rights Reserved.</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;