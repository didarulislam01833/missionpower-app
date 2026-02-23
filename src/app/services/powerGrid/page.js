"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap, Shield, Settings, Cpu, ArrowRight,
    CheckCircle2, Factory, Construction, Info,
    ChevronRight, Layers, Building2
} from 'lucide-react';

const PowerGridPage = () => {
    const [activeTab, setActiveTab] = useState('single');

    const products = {
        single: {
            title: "Single Phase Transformer",
            image: "/assets/powerGrid/p-9.jpg",
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
            image: "/assets/powerGrid/banner-img-2.jpg",
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
            image: "/assets/powerGrid/banner-img-5.jpg",
            specs: [
                { label: "Voltage Class", value: "11, 22, 33, 66 kV" },
                { label: "Rated Power", value: "10/14 MVA" },
                { label: "Vector Group", value: "Dyn5, Dyn11, YNyn0" },
                { label: "Fluid", value: "PCB-free mineral oil" },
                { label: "Standards", value: "IS 2026, IEC 60076, ANSI" }
            ],
            description: "High-capacity units engineered for heavy-duty transmission and large-scale utility nodes."
        },
        substation: {
            title: "Electrical Substation",
            image: "/assets/powerGrid/substation.jpg",
            specs: [
                { label: "System Voltage", value: "33/11/0.415 KV" },
                { label: "Configuration", value: "Complete EPC Sub-Station" },
                { label: "Primary Protection", value: "HT VCB & SF6 Technology" },
                { label: "Secondary Control", value: "LT Air Circuit Breaker (ACB)" },
                { label: "Safety Compliance", value: "PDB / BREB / DESCO Standards" },
                { label: "Structure Type", value: "Indoor / Outdoor / GIS" },
                { label: "Includes", value: "CT, PT, LA & Battery Backup" }
            ],
            description: "End-to-end electrical substation solutions featuring high-performance 33/11 KV systems for national power division projects."
        }
    };

    return (
        <main className="bg-white text-slate-900 min-h-screen">
            {/* --- HERO SECTION --- */}
            <section className="relative pt-40 pb-24 bg-slate-950 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-25">
                    <Image src="/assets/powerGrid/p-2.jpg" alt="Transmission Tower" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                                Power Division Sector
                            </span>
                            <div className="h-[1px] w-12 bg-blue-500/50" />
                            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                                Class-A Contractor
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
                            Empowering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 italic">Energy Grids</span>
                        </h1>

                        <p className="text-slate-300 text-lg md:text-xl max-w-2xl font-light mb-10 leading-relaxed">
                            Mission Power Land Ltd. is a Registered Class-A Government Contractor specializing in
                            high-voltage infrastructure and 33/11 KV complete substation EPC services across Bangladesh.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2">
                                View Full Profile <ChevronRight size={16} />
                            </button>
                            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-md font-bold text-xs uppercase tracking-widest transition-all">
                                Technical Standards
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- PRODUCT TABS SECTION --- */}
            <section className="py-24 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Our Expertise</h2>
                    <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Transmission & Distribution</h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Tabs */}
                    <div className="lg:w-1/3 space-y-2">
                        {Object.keys(products).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-300 border ${activeTab === key
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02]'
                                    : 'bg-white text-slate-500 border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg ${activeTab === key ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                        {key === 'substation' ? <Building2 size={20} /> : <Zap size={20} />}
                                    </div>
                                    <span className="font-black uppercase text-xs tracking-widest">{products[key].title}</span>
                                </div>
                                <ChevronRight size={18} className={`transition-transform duration-300 ${activeTab === key ? 'rotate-90' : ''}`} />
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12 overflow-hidden relative"
                            >
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                                            <Image
                                                src={products[activeTab].image}
                                                alt={products[activeTab].title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-3xl font-black uppercase text-slate-900 tracking-tighter mb-4">
                                                {products[activeTab].title}
                                            </h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">
                                                {products[activeTab].description}
                                            </p>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Core Specifications</h4>
                                            <div className="grid gap-2">
                                                {products[activeTab].specs.map((spec, i) => (
                                                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50">
                                                        <span className="text-[9px] font-bold uppercase text-slate-400 tracking-tight">{spec.label}</span>
                                                        <span className="text-xs font-bold text-slate-700">{spec.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-colors">
                                            Request Technical Datasheet
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* --- COMPLETE SUB-STATION EPC --- */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Engineered for Excellence</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-[1.1]">
                                33/11 KV Complete <br />
                                <span className="text-blue-600 italic">Sub-Station Solution</span>
                            </h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                We handle the entire lifecycle of power substations—from initial design and civil foundations to VCB installation and final grid synchronization.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "VCB Panels", icon: <Shield />, desc: "High-grade vacuum circuit breakers" },
                                    { title: "Control Panels", icon: <Settings />, desc: "Sophisticated relay metering" },
                                    { title: "Earthing System", icon: <Layers />, desc: "Standard mesh earthing networks" },
                                    { title: "Battery Backups", icon: <Cpu />, desc: "Uninterrupted DC control supply" }
                                ].map((item, i) => (
                                    <div key={i} className="group p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all">
                                        <div className="text-blue-600 mb-4 transition-transform group-hover:scale-110">{item.icon}</div>
                                        <h4 className="text-sm font-black uppercase tracking-tight mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                                <Image src="/assets/powerGrid/p-6.jpg" alt="Substation Infrastructure" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block border border-slate-50">
                                <div className="text-3xl font-black text-blue-600 mb-1">Class-A</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Registered Govt. Contractor</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                            Ready to Power <br /><span className="text-blue-500">Your Project?</span>
                        </h2>
                        <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">
                            Connect with our technical team for a comprehensive consultation on your power grid
                            or substation requirements. We deliver compliant, safe, and efficient energy solutions.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link href="/contact" className="w-full md:w-auto bg-blue-600 text-white px-12 py-6 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
                                Get a Quote <ArrowRight size={16} />
                            </Link>
                            <a href="tel:+8801XXXXXXX" className="text-white font-bold hover:text-blue-400 transition-colors uppercase text-xs tracking-widest">
                                Emergency Support →
                            </a>
                        </div>
                    </motion.div>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
            </section>
        </main>
    );
};

export default PowerGridPage;