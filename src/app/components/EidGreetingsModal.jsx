'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function EidGreetingsModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        /* মার্জিন এবং ফ্লেক্স সেন্টারিং আরও সুন্দর করা হলো */
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-md p-4 animate-fade-in mt-10">

            {/* Container - ম্যাক্স হাইট আরও একটু কমিয়ে দেওয়া হয়েছে যেন ওপরের মার্জিনের সাথে পারফেক্ট লাগে */}
            <div className="relative bg-gradient-to-b from-[#01231b] via-[#022c22] to-[#01231b] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] max-w-[360px] w-full max-h-[85vh] flex flex-col overflow-hidden border border-amber-500/30 text-white">

                <div className="h-1 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 flex-shrink-0" />

                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-amber-200/60 hover:text-amber-400 transition-colors bg-white/5 hover:bg-white/10 p-1.5 rounded-full z-50 border border-amber-500/20"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-6 text-center flex flex-col items-center relative overflow-y-auto">

                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_16px]" />

                    {/* Cow Image with better top spacing */}
                    <div className="relative w-48 h-32 mt-2 mb-2 flex items-center justify-center drop-shadow-[0_8px_20px_rgba(245,158,11,0.15)] flex-shrink-0">
                        <Image
                            src="/assets/logo/cow.png"
                            alt="Premium Qurbani Cow"
                            width={192}
                            height={128}
                            className="object-contain"
                            priority
                        />
                    </div>

                    <h3 className="text-[9px] font-sans font-bold uppercase tracking-[0.25em] text-amber-400/90 mt-2 mb-1">
                        ON BEHALF OF MISSION POWER LAND LTD.
                    </h3>

                    <div className="flex items-center gap-2 my-1.5 w-full justify-center opacity-40">
                        <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-amber-500" />
                        <span className="text-amber-400 text-[9px]">✦</span>
                        <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-amber-500" />
                    </div>

                    <p className="text-[11px] font-serif italic text-amber-200/70 tracking-wide mb-0.5">
                        Wishing You a Blessed & Prosperous
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-amber-400 mb-3 drop-shadow-sm">
                        EID UL-ADHA <span className="font-sans font-extrabold text-white">2026</span>
                    </h2>

                    <div className="relative max-w-xs bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/5 shadow-inner mb-4">
                        <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed font-medium italic tracking-wide text-center">
                            "May the spirit of sacrifice inspire your heart, and may this blessed festival bring absolute peace, joy, and professional prosperity to your journey."
                        </p>
                    </div>

                    <div className="w-full border-t border-white/10 pt-3.5 flex items-center justify-center gap-3 mt-auto flex-shrink-0">
                        <div className="bg-white p-1.5 rounded-lg shadow-md flex items-center justify-center border border-amber-500/20">
                            <Image
                                src="/assets/logo/logo.png"
                                alt="Mission Power Logo"
                                width={36}
                                height={36}
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-[11px] uppercase tracking-[0.15em] text-white font-black whitespace-nowrap">
                            Mission Power Land Ltd.
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}