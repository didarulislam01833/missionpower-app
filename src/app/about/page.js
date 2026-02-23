"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Phone, Mail, ArrowRight, Zap, Target, Award, CheckCircle2, Factory, ShieldCheck, Truck } from "lucide-react";

// --- ANIMATION: Smooth Reveal ---
const SmoothReveal = ({ children, delay = 0, x = 0, y = 50 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: y, x: x }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: y, x: x }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default function AboutPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const leadership = {
        top: [
            { name: "Shokina Akter", position: "Chairman", image: "/assets/employee/5.jpeg" },
            { name: "Mr. Hasanur Jaman", position: "Managing Director", image: "/assets/employee/3.jpg" },
        ],
        others: [
            { name: "Md. Zahedul Islam", position: "Executive Director", phone: "01810098905", email: "zahedbandt@gmail.com", image: "/assets/employee/6.png" },
            { name: "Md. Mohiuddin Bhuiyan", position: "General Manager", phone: "01810098907", image: "/assets/employee/4.jpg" },
            { name: "Md. Sohel", position: "Manager (Business Dev.)", phone: "01810098907", image: "/assets/employee/2.jpg" },
            { name: "Md. Saiful Arefin", position: "Manager (Marketing)", phone: "01810098911", image: "/assets/employee/1.jpg" },
        ]
    };

    if (!isClient) return null;

    return (
        <main className="bg-white text-slate-900 overflow-hidden selection:bg-blue-600 selection:text-white">

            {/* --- SECTION 1: DYNAMIC HERO --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <SmoothReveal>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
                            Registered Class-A Govt. Contractor
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-8">
                            Powering the <br /> <span className="text-blue-600">Infrastructure</span> <br /> of Bangladesh.
                        </h1>
                    </SmoothReveal>

                    <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
                        <SmoothReveal delay={0.2}>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                Mission Power Land Limited is a premier engineering firm dedicated to building the nation's energy backbone. From high-precision transformer manufacturing to large-scale grid infrastructure, we deliver excellence at every volt.
                            </p>
                        </SmoothReveal>
                        <div className="flex gap-4 md:justify-end">
                            <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-4xl font-black text-blue-600">15+</p>
                                <p className="text-xs font-bold uppercase text-slate-400 mt-1">Years Exp.</p>
                            </div>
                            <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-4xl font-black text-blue-600">500+</p>
                                <p className="text-xs font-bold uppercase text-slate-400 mt-1">Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: WHAT WE MAKE (Products) --- */}
            <section className="py-24 bg-slate-950 text-white rounded-[3rem]">
                <div className="max-w-7xl mx-auto px-6">
                    <SmoothReveal>
                        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Our Manufacturing <br /> <span className="text-blue-500">Core Expertise</span></h2>
                    </SmoothReveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Distribution Transformers", desc: "Single & Three-phase units built for BREB/BPDB standards.", icon: Zap },
                            { title: "HT/LT Panel Boards", desc: "Customized switchgear and distribution boards for industries.", icon: ShieldCheck },
                            { title: "Substation Equipment", desc: "Complete 33/11kV substation solutions from design to install.", icon: Factory },
                        ].map((item, i) => (
                            <SmoothReveal key={i} delay={i * 0.1}>
                                <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-blue-600 transition-all duration-500">
                                    <item.icon className="text-blue-500 group-hover:text-white mb-6" size={48} />
                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-slate-400 group-hover:text-blue-50 leading-relaxed">{item.desc}</p>
                                </div>
                            </SmoothReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 3: THE PROCESS (Animations) --- */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold tracking-tight">Our Work Process</h2>
                        <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                        {[
                            { step: "01", title: "Engineering", icon: Target },
                            { step: "02", title: "Manufacturing", icon: Factory },
                            { step: "03", title: "Quality Test", icon: Award },
                            { step: "04", title: "Deployment", icon: Truck },
                        ].map((item, i) => (
                            <div key={i} className="relative group text-center p-8 bg-slate-50 rounded-3xl hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 transform group-hover:rotate-12 transition-transform">
                                    <item.icon size={30} />
                                </div>
                                <span className="text-blue-600 font-black text-xs uppercase tracking-widest">{item.step}</span>
                                <h4 className="text-xl font-bold mt-2">{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 4: LEADERSHIP --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-none mb-4">Board of Directors</h2>
                            <p className="text-slate-500 font-medium">The visionaries behind Mission Power Land Limited.</p>
                        </div>
                    </div>

                    {/* Top 2 Leaders */}
                    <div className="grid md:grid-cols-2 gap-10 mb-20">
                        {leadership.top.map((member, i) => (
                            <SmoothReveal key={i} delay={i * 0.2}>
                                <div className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-200">
                                    <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-10">
                                        <h3 className="text-4xl font-bold text-white">{member.name}</h3>
                                        <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mt-2">{member.position}</p>
                                    </div>
                                </div>
                            </SmoothReveal>
                        ))}
                    </div>

                    {/* Management Team */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leadership.others.map((member, i) => (
                            <SmoothReveal key={i} delay={i * 0.1}>
                                <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-200">
                                        <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                    <h4 className="text-lg font-bold">{member.name}</h4>
                                    <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">{member.position}</p>
                                    <div className="space-y-2 border-t border-slate-200 pt-4">
                                        <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600"><Phone size={14} /> {member.phone}</a>
                                        {member.email && <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600"><Mail size={14} /> Contact Email</a>}
                                    </div>
                                </div>
                            </SmoothReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 5: CALL TO ACTION --- */}
            <section className="py-24 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-10">Experience the Future <br /> of Power Distribution.</h2>
                    <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-blue-600 px-12 py-6 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl">
                        Work with Us <ArrowRight />
                    </Link>
                </div>
            </section>
        </main>
    );
}