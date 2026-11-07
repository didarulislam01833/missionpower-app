import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, Zap, MessageCircle } from 'lucide-react';

// মালিকের কাছ থেকে নিশ্চিত করে এখানে একবারই বদলান
const CONTACT = {
    headOffice: "House 01, Road 16, Sector 07, Uttara, Dhaka-1230, Bangladesh.",
    factory: "210/1, Niler Para, Gazipur City Corporation, Gazipur Sadar, Gazipur-1723, Bangladesh.",
    phones: [
        { label: "+88 01810-098909", href: "tel:+8801810098909" },
        { label: "+88 01810-098945", href: "tel:+8801810098945" },
    ],
    whatsapp: "https://wa.me/8801810098909",
    email: "info@missionpowerland.com",
};

const QUICK_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Manufacturing', href: '/manufacture-excellence' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get a Quote', href: '/contact?type=quote' },
];

const DIVISIONS = [
    { name: 'Power & Substations', href: '/services/powerGrid' },
    { name: 'Solar EPC Solutions', href: '/services/solar' },
    { name: 'Civil & Infrastructure', href: '/services/civil' },
    { name: 'National Grid Works', href: '/services/public' },
];

const listLink = "hover:text-amber-400 transition-colors flex items-center gap-2 group";
const dot = <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors" />;
const heading = "text-xs font-black text-white uppercase tracking-[0.25em] border-l-2 border-amber-400 pl-3";

export default function Footer() {
    return (
        <footer className="bg-[#05070B] text-slate-300 relative overflow-hidden border-t border-slate-800">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 blur-[150px] rounded-full pointer-events-none" />

            {/* নিচে বাড়তি ফাঁক শুধু ফোনে: ভাসমান WhatsApp ও চ্যাট বাটন লেখা ঢাকবে না */}
            <div className="container mx-auto px-5 sm:px-6 lg:px-16 pt-16 md:pt-20 pb-28 sm:pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 md:pb-16 border-b border-slate-800/80">

                    {/* BRAND */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-[50px] h-[50px] flex-shrink-0">
                                <Image src="/assets/logo/logo.png" alt="Mission Power Land Limited" fill sizes="50px" className="object-contain" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-black tracking-tight text-white uppercase">
                                    Mission Power <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Land</span>
                                </span>
                                <span className="text-[10px] font-black text-amber-400 tracking-widest mt-1">LIMITED</span>
                            </div>
                        </Link>

                        <p className="text-sm text-slate-400 leading-relaxed">
                            Premier Class-A Government Contractor & Transformer Manufacturer in Bangladesh specializing in 33/11kV Substation, Power/Distribution Transformers, and Solar EPC Solutions.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
                                <ShieldCheck size={14} aria-hidden="true" /> Class-A Contractor
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
                                <Zap size={14} aria-hidden="true" /> ISO 9001:2015
                            </span>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <nav aria-label="Quick links" className="lg:col-span-2 space-y-5">
                        <h4 className={heading}>Quick Links</h4>
                        <ul className="space-y-3 text-sm font-medium">
                            {QUICK_LINKS.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className={listLink}>{dot}{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* DIVISIONS */}
                    <nav aria-label="Our divisions" className="lg:col-span-3 space-y-5">
                        <h4 className={heading}>Our Divisions</h4>
                        <ul className="space-y-3 text-sm font-medium">
                            {DIVISIONS.map((s) => (
                                <li key={s.name}>
                                    <Link href={s.href} className={listLink}>{dot}{s.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CONTACT */}
                    <div className="lg:col-span-3 space-y-5">
                        <h4 className={heading}>Official Contacts</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-amber-400 shrink-0 mt-1" aria-hidden="true" />
                                <div className="text-slate-300 leading-snug space-y-2">
                                    <p><span className="font-bold text-white">Head Office:</span> {CONTACT.headOffice}</p>
                                    <p><span className="font-bold text-white">Factory:</span> {CONTACT.factory}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone size={18} className="text-amber-400 shrink-0 mt-1" aria-hidden="true" />
                                <div className="flex flex-col gap-1">
                                    {CONTACT.phones.map((p) => (
                                        <a key={p.href} href={p.href} className="hover:text-amber-400 transition-colors font-bold py-0.5">{p.label}</a>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <MessageCircle size={18} className="text-amber-400 shrink-0" aria-hidden="true" />
                                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors font-bold">
                                    Chat on WhatsApp
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-amber-400 shrink-0" aria-hidden="true" />
                                <a href={`mailto:${CONTACT.email}`} className="hover:text-amber-400 transition-colors font-bold break-all">
                                    {CONTACT.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
                    <p>© {new Date().getFullYear()} Mission Power Land Limited. All Rights Reserved.</p>
                    <Link href="/contact?type=quote" className="text-amber-400 font-bold uppercase tracking-wider hover:text-amber-300 transition-colors">
                        Request a quote
                    </Link>
                </div>
            </div>
        </footer>
    );
}