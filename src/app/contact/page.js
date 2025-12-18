"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    // Replace this with your actual Google Maps Share Link
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Uttara+Sector+3+Dhaka";

    return (
        <main className="relative min-h-screen bg-white">

            {/* SECTION 1: THE HERO & INTERACTIVE MAP */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                {/* The Map Background */}
                <div className="absolute inset-0 z-0 grayscale contrast-125 opacity-60">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.438128527022!2d90.397354976037!3d23.87407006037754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43cd719399b%3A0x6b77a2a73073d3b2!2sSector%203%2C%20Uttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Floating Glass Card */}
                <div className="relative z-10 container mx-auto px-6 lg:px-16 h-full flex items-center justify-end">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-[450px] bg-white/90 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border border-white"
                    >
                        <h1 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter mb-6">
                            Contact <span className="text-blue-600">Hub</span>
                        </h1>

                        <div className="space-y-6 mb-8">
                            <div>
                                <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">HQ Address</h4>
                                <p className="text-sm font-bold text-slate-700">Sector 03, Road 12, House 05, <br /> Uttara, Dhaka-1230</p>
                            </div>

                            {/* FIXED DIRECTION LINK */}
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest hover:underline"
                            >
                                <span>📍 Get Directions on GPS</span>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>

                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-slate-100 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-blue-600" />
                            <input type="email" placeholder="Email" className="w-full bg-slate-100 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-blue-600" />
                            <textarea placeholder="Message" className="w-full bg-slate-100 rounded-xl p-4 text-sm h-24 outline-none focus:ring-2 focus:ring-blue-600 resize-none"></textarea>
                            <button className="w-full py-4 bg-slate-950 text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-xl hover:bg-blue-600 transition-all">
                                Send Inquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: REGIONAL PRESENCE (The NEW "Big" Section) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-bold uppercase tracking-[0.4em] text-xs mb-4">Our Reach</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
                            Operating Across <span className="text-blue-600">Bangladesh</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { city: "Dhaka Central", role: "Corporate HQ & Planning", icon: "🏛️" },
                            { city: "Chattogram Port", role: "Logistics & Site Hub", icon: "⚓" },
                            { city: "Rooppur Region", role: "Power Grid Operations", icon: "⚡" },
                        ].map((loc, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all"
                            >
                                <div className="text-4xl mb-6">{loc.icon}</div>
                                <h4 className="text-xl font-black text-slate-900 uppercase italic mb-2">{loc.city}</h4>
                                <p className="text-slate-500 text-sm font-medium">{loc.role}</p>
                                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Active Site</span>
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: DIRECT CONTACT STRIP */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-slate-900 rounded-[3rem] p-12 overflow-hidden relative">
                        <div className="relative z-10">
                            <h4 className="text-white text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">
                                Emergency <br /> Technical Support?
                            </h4>
                            <p className="text-slate-400 mt-4 font-medium uppercase text-[10px] tracking-widest">Available for site contractors 24/7</p>
                        </div>
                        <a href="tel:+8801700000000" className="relative z-10 bg-blue-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-blue-600 transition-all shadow-xl shadow-blue-500/20">
                            Call Now: +880 1XXX XXXXXX
                        </a>
                        {/* Background Accent */}
                        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

        </main>
    );
}