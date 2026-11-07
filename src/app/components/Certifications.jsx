"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, X, ZoomIn } from 'lucide-react';

const CERT_IMAGE = "/assets/certificates/iso-9001.jpg";

const DETAILS = [
    { label: "Standard", value: "ISO 9001:2015, Quality Management System" },
    { label: "Certificate No.", value: "26EQRL56" },
    { label: "Valid Until", value: "25 August 2029" },
    { label: "Accreditation", value: "EGAC (CAB #012226) · IAF MLA Member" },
];

export default function Certifications() {
    const [open, setOpen] = useState(false);

    // Esc চাপলে বন্ধ হবে
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <section className="py-12 md:py-16 bg-[#070A11] relative overflow-hidden border-t border-slate-800/80">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* Certificate image */}
                    <motion.button
                        type="button"
                        onClick={() => setOpen(true)}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        aria-label="View ISO 9001 certificate larger"
                        className="group relative w-full max-w-xs sm:max-w-sm shrink-0 rounded-2xl overflow-hidden border-4 border-slate-800 hover:border-amber-500/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-colors"
                    >
                        <Image
                            src={CERT_IMAGE}
                            alt="ISO 9001:2015 certificate of Mission Power Land Ltd."
                            width={800}
                            height={1123}
                            sizes="(max-width: 640px) 90vw, 384px"
                            className="w-full h-auto"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-slate-950/0 group-hover:bg-slate-950/50 transition-colors">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                                <ZoomIn className="w-4 h-4" aria-hidden="true" /> View Certificate
                            </span>
                        </span>
                    </motion.button>

                    {/* Text */}
                    <div className="flex-1 space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
                                <BadgeCheck className="w-4 h-4" aria-hidden="true" /> Quality Certified
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                                ISO 9001:2015 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Certified</span> Quality
                            </h2>
                            <p className="mt-4 text-slate-300 leading-relaxed">
                                Our quality management system covers the design, manufacture, installation, testing
                                and commissioning of single &amp; three phase distribution transformers, power
                                transformers, CT-PT, PFI panels, LV &amp; HV switchgear and related electrical equipment.
                            </p>
                        </div>

                        <dl className="grid sm:grid-cols-2 gap-4">
                            {DETAILS.map((d) => (
                                <div key={d.label} className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
                                    <dt className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">{d.label}</dt>
                                    <dd className="mt-1 text-sm font-semibold text-white">{d.value}</dd>
                                </div>
                            ))}
                        </dl>

                        <p className="text-xs text-slate-400">
                            The certificate can be verified through the certifying body (scan the QR code on the
                            certificate).
                        </p>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        role="dialog"
                        aria-modal="true"
                        aria-label="ISO 9001 certificate"
                    >
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <Image
                            src={CERT_IMAGE}
                            alt="ISO 9001:2015 certificate of Mission Power Land Ltd."
                            width={800}
                            height={1123}
                            sizes="90vw"
                            className="max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}