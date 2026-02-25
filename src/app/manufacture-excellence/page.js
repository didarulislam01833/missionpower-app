"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const manufacturingItems = [
    { title: "Raw Material Sourcing", file: "Raw Metarials Store.JPG", desc: "Sourcing premium-grade CRGO silicon steel and high-purity copper to ensure maximum efficiency." },
    { title: "Copper Up-casting", file: "Copper Up-casting Machine.JPG", desc: "In-house processing of oxygen-free copper rods to maintain superior conductivity standards." },
    { title: "Insulation Covering", file: "Copper Strip Paper Covering Machine.jpg", desc: "Precision paper insulation for copper strips to prevent inter-turn short circuits." },
    { title: "Super Enameling", file: "Super Enameling Machine.JPG", desc: "Application of heat-resistant enamel coating for superior winding protection." },
    { title: "Precision Coil Winding", file: "Winding Section.JPG", desc: "Automated tension-controlled winding ensuring exact voltage ratios and magnetic flux." },
    { title: "CRGO Slitting Line", file: "CRGO Slitting Machine.JPG", desc: "High-speed precision slitting of core steel to meet exact design specifications." },
    { title: "Right Angle Cutting", file: "CRGO Right Angle Cutting Machine.JPG", desc: "CNC-controlled right-angle cutting to minimize core gaps and energy losses." },
    { title: "Vacuum Annealing", file: "CRGO Vacuum Annealing Furnace.JPG", desc: "Restoring magnetic properties of the core via specialized vacuum heat treatment." },
    { title: "Core & Coil Assembly", file: "Core & Coil Assembly.JPG", desc: "The critical integration of the active core with the precision-wound coil structure." },
    { title: "Core-Coil Calibration", file: "Core & Coil Final Work.JPG", desc: "Final technical calibration and insulation checks prior to tank insertion." },
    { title: "Heavy Tank Welding", file: "Tank Welding Machine.JPG", desc: "Fabrication of hermetically sealed, leak-proof steel tanks for long-term durability." },
    { title: "Elite Powder Coating", file: "Tank Powder Coating Machine.jpg", desc: "Electrostatic powder finish providing 20+ years of anti-corrosive protection." },
    { title: "Tanking & Oil Filling", file: "Final Assembly.JPG", desc: "Vacuum tanking process followed by high-grade dielectric oil filling." },
    { title: "Impulse Surge Lab", file: "Impluse Test.JPG", desc: "Simulating lightning strikes to verify high-voltage surge resistance." },
    { title: "Technical Diagnostics", file: "Testing Section.JPG", desc: "Full diagnostic testing including load loss, no-load loss, and pressure tests." },
    { title: "Quality Audit Control", file: "p-1.jpg", desc: "Rigorous final inspection and quality certification before product release." },
    { title: "Substation Installation", file: "p-11.jpg", desc: "Successful integration and deployment of units within national power substations." },
    { title: "Field-Ready Deployment", file: "p-12.jpg", desc: "Standardized units ready for rural and urban grid distribution." },
    { title: "Finished Single-Phase Units", file: "p-13.jpg", desc: "Completed single-phase transformers inspected and prepared for global dispatch." },
    { title: "Modern Production Facility", file: "banner-img-2.jpg", desc: "An overview of our world-class, integrated transformer manufacturing plant." }
];

const partners = [
    { name: "BREB", full: "Bangladesh Rural Electrification Board" },
    { name: "BPDB", full: "Bangladesh Power Development Board" },
    { name: "DESCO", full: "Dhaka Electric Supply Company Ltd." },
    { name: "DPDC", full: "Dhaka Power Distribution Company Ltd." },
    { name: "BMDA", full: "Barind Multipurpose Development Authority" },
    { name: "BADC", full: "Bangladesh Agricultural Development Corp." },
    { name: "PBS", full: "Palli Bidyut Samity (80+ Units)" },
];

const ManufacturingExcellence = () => {
    const [showToast, setShowToast] = useState(false);

    const handleDownloadClick = () => {
        setShowToast(true);
        // Automatically hide the message after 4 seconds
        setTimeout(() => setShowToast(false), 4000);
    };

    return (
        <div className="relative bg-[#fafafa] text-slate-900 min-h-screen font-sans selection:bg-blue-600 selection:text-white">

            {/* SWEET "COMING SOON" NOTIFICATION */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-8 py-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-blue-500/20 flex flex-col items-center gap-1 min-w-[300px]"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-blue-400 text-xl">⚡</span>
                            <span className="font-black uppercase tracking-widest text-sm">Technical Catalog</span>
                        </div>
                        <p className="text-gray-400 text-xs font-medium">Unavailable Now Coming soon</p>
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 4 }}
                            className="absolute bottom-0 left-0 h-1 bg-blue-600 rounded-b-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* HERO SECTION */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/manufacturing-excellence/banner.jpg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
                </motion.div>
                <div className="relative z-10 text-center px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-6xl md:text-9xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                            MANUFACTURING <br /> <span className="text-blue-500 italic">EXCELLENCE</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-blue-50 text-xl md:text-2xl font-light leading-relaxed backdrop-blur-sm bg-white/10 p-4 rounded-lg">
                            The industrial heart of Mission Powerland. <br />
                            <span className="font-semibold text-white uppercase tracking-widest text-sm">Powering global grids through precision engineering.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SINGLE PHASE POLE-MOUNTED SECTION */}
            <section className="py-28 bg-white overflow-hidden border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase">
                                Single-Phase <br />
                                <span className="text-blue-600">Pole-Mounted Units</span>
                            </h2>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify border-l-4 border-blue-600 pl-8 font-light">
                                <p>
                                    Our <strong>Single-Phase Pole-Mounted Units</strong> are the backbone of residential and rural power distribution.
                                    Engineered with high-performance CRGO cores, these units are optimized for ultra-low energy loss.
                                </p>
                                <p className="italic text-gray-400">
                                    Hermetically sealed and oil-insulated, these units are designed to withstand extreme environmental conditions,
                                    ensuring reliable energy access for the global grid.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <img src="/assets/manufacturing-excellence/p-12.jpg" alt="Installation" className="rounded-[40px] shadow-2xl border-8 border-gray-50" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MAIN GALLERY GRID */}
            <section className="py-20 px-6 max-w-[1600px] mx-auto bg-slate-50 rounded-[60px] my-10 shadow-inner">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter"
                    >
                        THE ENGINEERING <span className="text-blue-600">PULSE</span>
                    </motion.h2>
                    <p className="text-gray-400 mt-4 text-sm tracking-[0.5em] font-bold uppercase">Manufacturing Capabilities & Plant Infrastructure</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {manufacturingItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            <div className="h-72 overflow-hidden relative">
                                <img
                                    src={`/assets/manufacturing-excellence/${item.file}`}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* AUTHORIZED PARTNER LOGO SECTION */}
            <section className="bg-white py-32 text-center border-t border-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-xs font-bold text-blue-600 uppercase tracking-[0.5em] mb-20 underline underline-offset-[12px] decoration-1">Authorized Supply Partners</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center group"
                            >
                                <span className="text-4xl font-black text-slate-200 group-hover:text-blue-900 transition-all duration-500 cursor-default mb-2">
                                    {partner.name}
                                </span>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter group-hover:text-slate-600 transition-colors">
                                    {partner.full}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <footer className="bg-blue-600 py-16 text-center text-white">
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-4">Request Technical Specifications</h3>
                <button
                    onClick={handleDownloadClick}
                    className="bg-white text-blue-600 px-10 py-4 rounded-full font-black uppercase hover:bg-slate-900 hover:text-white transition-all active:scale-95 shadow-lg"
                >
                    Download Catalog
                </button>
            </footer>

        </div>
    );
};

export default ManufacturingExcellence;