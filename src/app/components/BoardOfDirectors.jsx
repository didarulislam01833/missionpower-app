"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

const DIRECTORS = [
    {
        name: "Shokina Akter",
        title: "Chairman",
        role: "Strategic Leadership & Corporate Governance",
        bio: "Steering Mission Power Land Limited with a visionary focus on national power sector advancement, enterprise governance, and sustainable infrastructure growth.",
        image: "/assets/employee/5.jpeg",
        Icon: Award,
    },
    {
        name: "Mr. Hasanur Jaman",
        title: "Managing Director",
        role: "Operational Excellence & Executive Direction",
        bio: "Leading the core technical operations, high-voltage substation projects, transformer manufacturing, and Class-A government contract execution across Bangladesh.",
        image: "/assets/employee/3.jpg",
        Icon: ShieldCheck,
    },
];

export default function BoardOfDirectors() {
    return (
        <section className="py-16 md:py-28 bg-[#070A11] relative overflow-hidden border-t border-slate-800/80">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 relative z-10">
                <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-4 shadow-lg"
                    >
                        Corporate Governance
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                        Board Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Directors</span>
                    </h2>
                    <p className="mt-3 text-slate-400 font-medium max-w-xl text-sm sm:text-base">
                        Guided by experienced leadership driving high-voltage engineering and power infrastructure in Bangladesh.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                    {DIRECTORS.map(({ name, title, role, bio, image, Icon }, index) => (
                        <motion.article
                            key={name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 relative group transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

                            <div className="flex items-center justify-between mb-6">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-md bg-slate-800 shrink-0">
                                    <Image
                                        src={image}
                                        alt={`${name}, ${title}`}
                                        fill
                                        sizes="96px"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-amber-400" aria-hidden="true" />
                                </div>
                            </div>

                            <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-1">{title}</span>
                            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase group-hover:text-amber-400 transition-colors mb-2">{name}</h3>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800/80 pb-4">{role}</p>
                            <p className="text-sm text-slate-300 leading-relaxed">{bio}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}