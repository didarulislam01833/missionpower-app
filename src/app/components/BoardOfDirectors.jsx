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
        <section className="py-12 md:py-16 bg-[#070A11] relative overflow-hidden border-t border-slate-800/80">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 relative z-10">
                <div className="flex flex-col items-center mb-10 md:mb-12 text-center">
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {DIRECTORS.map(({ name, title, role, bio, image, Icon }, index) => (
                        <motion.article
                            key={name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col sm:flex-row bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-3xl overflow-hidden transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        >
                            {/* বড় ছবি */}
                            <div className="relative w-full sm:w-[42%] aspect-[4/5] sm:aspect-auto sm:min-h-[340px] shrink-0 bg-slate-800">
                                <Image
                                    src={image}
                                    alt={`${name}, ${title}`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 25vw"
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-slate-900/60" />
                            </div>

                            {/* লেখা */}
                            <div className="flex flex-col justify-center p-6 sm:p-7 flex-1">
                                <div className="w-10 h-10 mb-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-amber-400" aria-hidden="true" />
                                </div>
                                <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-1">{title}</span>
                                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase group-hover:text-amber-400 transition-colors mb-2">{name}</h3>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800/80 pb-4">{role}</p>
                                <p className="text-sm text-slate-300 leading-relaxed">{bio}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}