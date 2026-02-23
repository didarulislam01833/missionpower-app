"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap, Shield, Settings, Cpu, ArrowRight,
    CheckCircle2, Factory, Construction, Info,
    ChevronRight, ZapOff, Layers
} from 'lucide-react';

const PowerGridPage = () => {
    const [activeTab, setActiveTab] = useState('single');

    const products = {
        single: {
            title: "Single Phase Transformer",
            image: "/assets/powerGrid/p-9.jpg", // Assuming p-9 is single phase per your notes
            specs: [
                { label: "Design Standard", value: "ANSI C57.12.00, C57.12.20 & C57.12.90" },
                { label: "Type", value: "Single-phase wound core" },
                { label: "Winding Material", value: "High conductivity copper" },
                { label: "Nominal Voltage", value: "HT = 6350 V, LT = 240 V" },
                { label: "Insulation (BIL)", value: "HT = 95 kV, LT = 30 kV" },
                { label: "Cooling", value: "Class OA (self-cooled)" },
                { label: "Temp Rise", value: "≤65°C" }
            ],
            description: "Precision engineered pole-mounted units designed for residential and light commercial grid step-down applications."
        },
        three: {
            title: "Three Phase Transformer",
            image: "/assets/powerGrid/p-1.jpg",
            specs: [
                { label: "Design Standard", value: "IEC-76, BS-171, ANSI" },
                { label: "Voltage Range", value: "HT = 11kV / 33kV, LT = 415V" },
                { label: "Rating", value: "50 KVA to 5000 KVA" },
                { label: "Cooling", value: "ONAN (Oil Natural Air Natural)" },
                { label: "Tap Changer", value: "Off-load & On-load (±2.5% to ±7.5%)" },
                { label: "Core Material", value: "CRGO Silicon Steel" }
            ],
            description: "Robust distribution units suitable for industrial complexes and utility substations."
        },
        power: {
            title: "Power Transformer",
            image: "/assets/powerGrid/p-14.jpg",
            specs: [
                { label: "Voltage Class", value: "11, 22, 33, 66 kV" },
                { label: "Rated Power", value: "10/14 MVA" },
                { label: "Vector Group", value: "Dyn5, Dyn11, YNyn0" },
                { label: "Fluid", value: "PCB-free mineral oil" },
                { label: "Standards", value: "IS 2026, IEC 60076, ANSI" }
            ],
            description: "High-capacity units engineered for heavy-duty transmission and large-scale utility nodes."
        }
    };

    return (
        <main className="bg-white text-slate-900 min-h-screen">
            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/assets/powerGrid/p-2.jpg" alt="Transmission Tower" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-2 mb-6 text-blue-400">
                            <Zap size={18} />
                            <span className="text-xs font-bold uppercase tracking-[0.4em]">Mission Power Land Ltd.</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter mb-8">
                            GRID <span className="text-blue-500 italic">SOLUTIONS</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-light mb-10">
                            Registered Class-A Contractor specializing in high-voltage infrastructure,
                            custom-engineered transformers, and complete substation EPC services.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-sm transition-all">
                                DOWNLOAD CATALOG
                            </button>
                            <button className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-md font-bold text-sm transition-all">
                                TECHNICAL SPECS
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- PRODUCT TABS SECTION --- */}
            <section className="py-24 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sidebar Tabs */}
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">Transformer <br />Equipment</h2>
                        <div className="space-y-2">
                            {Object.keys(products).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`w-full flex items-center justify-between p-6 rounded-xl transition-all ${activeTab === key ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                        }`}
                                >
                                    <span className="font-bold uppercase text-sm tracking-wider">{products[key].title}</span>
                                    <ChevronRight size={20} className={activeTab === key ? 'rotate-90 transition-transform' : ''} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Display */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid md:grid-cols-2 gap-12"
                            >
                                <div>
                                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
                                        <Image
                                            src={products[activeTab].image}
                                            alt={products[activeTab].title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="mt-6 text-slate-500 leading-relaxed italic border-l-4 border-blue-500 pl-4">
                                        {products[activeTab].description}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black uppercase text-slate-800 tracking-tighter">Technical Specifications</h3>
                                    <div className="divide-y divide-slate-100">
                                        {products[activeTab].specs.map((spec, i) => (
                                            <div key={i} className="py-3 flex justify-between gap-4">
                                                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">{spec.label}</span>
                                                <span className="text-sm font-semibold text-slate-700 text-right">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* --- SWITCHGEAR COMPARISON --- */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl font-black uppercase tracking-tighter">Switchgear Systems</h2>
                        <p className="text-slate-500">Advanced isolation and protection for HT/LT networks</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* HT Switchgear */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <Zap size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-4">High Tension (HT)</h4>
                            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                Handling voltages above 1kV (11kV - 33kV). Features VCB, SF6, and Air CB technologies for transmission nodes.
                            </p>
                            <ul className="space-y-3">
                                {['Advanced Relays', 'CT/PT Integration', 'Transmission Duty', 'IP54 Enclosures'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase">
                                        <CheckCircle2 size={14} className="text-blue-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* LT Switchgear */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                                <Layers size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-4">Low Tension (LT)</h4>
                            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                Operating below 1kV (415V/230V). Engineered for industrial distribution, MCCBs, and ACBs.
                            </p>
                            <ul className="space-y-3">
                                {['Industrial Grade MCCB', 'Custom Busbars', 'Commercial Duty', 'Modular Design'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase">
                                        <CheckCircle2 size={14} className="text-emerald-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- COMPLETE SUB-STATION SECTION --- */}
            <section className="py-24 container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[600px] rounded-3xl overflow-hidden group">
                        <Image src="/assets/powerGrid/p-6.jpg" alt="Substation Infrastructure" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded font-bold text-[10px] tracking-widest uppercase">
                            33/11/0.415 KV Setup
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">
                            Complete <br /><span className="text-blue-600">Sub-Station</span> EPC
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            We provide end-to-end engineering, procurement, and construction for utility-grade substations,
                            integrating power transformers with sophisticated protection systems.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { title: "VCB Panels", icon: <Shield /> },
                                { title: "Relay Meters", icon: <Cpu /> },
                                { title: "Earthing Pits", icon: <Factory /> },
                                { title: "Battery Backup", icon: <Info /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="text-blue-600">{item.icon}</div>
                                    <span className="text-xs font-bold uppercase tracking-tight">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-6 border-l-4 border-blue-600 bg-blue-50">
                            <h4 className="font-bold text-blue-900 mb-2">Civil Works Included</h4>
                            <p className="text-sm text-blue-800/70">Foundations, cable trenches, fencing, and structural mounting are handled by our expert on-site teams.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
                        Powering <span className="text-blue-500">Bangladesh.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
                        As a Registered Class-A Contractor, Mission Power Land Ltd. is committed to building
                        the next generation of electrical infrastructure.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-6 rounded-full font-black uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                        Request Project Quote <ArrowRight size={16} />
                    </Link>
                </div>
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px]" />
            </section>
        </main>
    );
};

export default PowerGridPage;