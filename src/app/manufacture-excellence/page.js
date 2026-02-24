"use client";

import React from 'react';
import { motion } from 'framer-motion';

const manufacturingSteps = [
    { title: "Raw Material Sourcing", file: "Raw Metarials Store.JPG", desc: "আমরা সর্বোচ্চ মানের কপার এবং CRGO সিলিকন স্টিল সংগ্রহ করি যা ট্রান্সফরমারের দীর্ঘস্থায়িত্ব নিশ্চিত করে।" },
    { title: "Copper Up-casting", file: "Copper Up-casting Machine.JPG", desc: "নিজস্ব প্রযুক্তিতে বিশুদ্ধ কপার রড প্রক্রিয়াকরণ, যা বিদ্যুৎ অপচয় রোধ করে।" },
    { title: "Insulation Covering", file: "Copper Strip Paper Covering Machine.jpg", desc: "উচ্চমানের ইনসুলেশন পেপার ব্যবহার করে কপার স্ট্রিপ ঢেকে দেওয়া হয় যাতে ইন্টার-টার্ন শর্ট সার্কিট না হয়।" },
    { title: "Super Enameling", file: "Super Enameling Machine.JPG", desc: "তারের ওপর বিশেষ এনামেল কোটিং দেওয়া হয় যা উচ্চ তাপমাত্রায় ট্রান্সফরমারকে সুরক্ষিত রাখে।" },
    { title: "Precision Winding", file: "Winding Section.JPG", desc: "কম্পিউটারাইজড টেনশন কন্ট্রোল মেশিনে কয়েল উইন্ডিং করা হয় যা সঠিক ভোল্টেজ রেশিও বজায় রাখে।" },
    { title: "CRGO Slitting", file: "CRGO Slitting Machine.JPG", desc: "অত্যাধুনিক স্লিটিং মেশিনে কোর শিটগুলোকে নির্ভুল মাপে কাটা হয়।" },
    { title: "Right Angle Cutting", file: "CRGO Right Angle Cutting Machine.JPG", desc: "কোর জয়েন্টগুলোতে লস কমানোর জন্য প্রতিটি শিটকে সঠিক কোণে কাটা হয়।" },
    { title: "Vacuum Annealing", file: "CRGO Vacuum Annealing Furnace.JPG", desc: "ভ্যাকুয়াম ফার্নেসে কোরগুলোকে হিট ট্রিটমেন্ট করা হয়, যা নো-লোড লস সর্বনিম্ন পর্যায়ে নিয়ে আসে।" },
    { title: "Core & Coil Assembly", file: "Core & Coil Assembly.JPG", desc: "কোর এবং কয়েলকে নিখুঁতভাবে একত্রিত করে ট্রান্সফরমারের মূল কাঠামো তৈরি করা হয়।" },
    { title: "Assembly Finalization", file: "Core & Coil Final Work.JPG", desc: "ট্যাঙ্কিং করার আগে সব কানেকশন এবং ইনসুলেশন পুনরায় পরীক্ষা করা হয়।" },
    { title: "Tank Fabrication", file: "Tank Welding Machine.JPG", desc: "ভারী স্টিল প্লেট দিয়ে লিক-প্রুফ ট্যাঙ্ক তৈরি করা হয় যা সব ধরনের আবহাওয়া সহ্য করতে সক্ষম।" },
    { title: "Powder Coating", file: "Tank Powder Coating Machine.jpg", desc: "ইলেক্ট্রোস্ট্যাটিক পাউডার কোটিং দেওয়া হয় যা ২০ বছরেরও বেশি সময় মরিচা রোধ করে।" },
    { title: "Final Tanking", file: "Final Assembly.JPG", desc: "ট্যাঙ্কের ভেতরে কোর-কয়েল স্থাপন করে উচ্চমানের ট্রান্সফরমার অয়েল দিয়ে পূর্ণ করা হয়।" },
    { title: "Impulse Testing", file: "Impluse Test.JPG", desc: "বজ্রপাত বা হাই-ভোল্টেজ সার্জ থেকে সুরক্ষার জন্য আমাদের ল্যাবে ইমপালস টেস্ট করা হয়।" },
    { title: "Technical Inspection", file: "Testing Section.JPG", desc: "BPDB ও BREB এর মানদণ্ড অনুযায়ী প্রতিটি ট্রান্সফরমারের লোড ও লস টেস্ট করা হয়।" },
    { title: "Quality Audit", file: "p-1.jpg", desc: "শিপমেন্টের আগে প্রতিটি ইউনিটের কোয়ালিটি সার্টিফিকেট নিশ্চিত করা হয়।" },
    { title: "Grid Integration", file: "p-11.jpg", desc: "জাতীয় গ্রিডের সাবস্টেশনগুলোতে আমাদের উৎপাদিত ইউনিটের সফল পদচারণা।" },
    { title: "Installation Ready", file: "p-12.jpg", desc: "মাঠে স্থাপনের জন্য প্রস্তুত আমাদের উচ্চমানের সাবস্টেশন ইকুইপমেন্ট।" },
    { title: "Final Dispatch", file: "p-13.jpg", desc: "পুরো দেশজুড়ে বিদ্যুৎ সরবরাহের উদ্দেশ্যে ট্রাক লোডিং এবং ডেলিভারি প্রক্রিয়া।" },
    { title: "Plant Excellence", file: "banner-img-2.jpg", desc: "আমাদের সুবিশাল প্রোডাকশন ফ্লোর যেখানে নিয়মিত কয়েকশ ট্রান্সফরমার তৈরি হচ্ছে।" }
];

const ManufacturingExcellence = () => {
    return (
        <div className="bg-white text-slate-900 min-h-screen font-sans">

            {/* HERO SECTION - Cover Image */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: "url('/assets/manufacturing-excellence/banner-img-2.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter"
                    >
                        Manufacturing <span className="text-blue-400">Excellence</span>
                    </motion.h1>
                    <p className="max-w-2xl mx-auto text-gray-200 text-lg md:text-xl font-light leading-relaxed">
                        Mission Powerland combining world-class engineering with local expertise to power Bangladesh.
                        Witness our complete 20-step production journey.
                    </p>
                </div>
            </section>

            {/* SPECIAL SECTION: Single-Phase Pole-Mounted Unit */}
            <section className="py-24 bg-blue-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 uppercase">Single-Phase <br /> <span className="text-blue-600">Pole-Mounted Unit</span></h2>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
                                <p>
                                    আমাদের <strong>Single-Phase Pole-Mounted Substation Unit</strong> বিশেষভাবে গ্রামীণ এবং আবাসিক এলাকার বিদ্যুৎ বিতরণের জন্য তৈরি।
                                    এর উৎপাদন প্রক্রিয়া শুরু হয় বিশেষ 'Wound Core' ডিজাইনের মাধ্যমে যা বিদ্যুতের অপচয় (No-load loss) কমিয়ে আনে।
                                </p>
                                <p>
                                    উচ্চমানের কপার উইন্ডিং এবং হারমেটিক্যালি সিলড (Hermetically Sealed) বডি নিশ্চিত করে যে এটি ঝড়-বৃষ্টি বা চরম আবহাওয়ায় বছরের পর বছর নিরবচ্ছিন্ন সেবা দিবে।
                                    তৈরির পর প্রতিটি ইউনিটকে <strong>Impulse Test</strong> এর মাধ্যমে বজ্রপাত সহ্য করার ক্ষমতা যাচাই করা হয় এবং এরপর <strong>BREB</strong> বা <strong>BPDB</strong> এর গাইডলাইন অনুযায়ী সরাসরি সরবরাহ করা হয়।
                                </p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                                <img src="/assets/manufacturing-excellence/p-12.jpg" alt="Pole Mounted Unit" className="w-full h-auto" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FULL 20 STEPS GRID */}
            <section className="py-24 px-6 max-w-[1500px] mx-auto">
                <h2 className="text-4xl font-black text-center mb-20 uppercase tracking-widest text-slate-800 underline underline-offset-8 decoration-blue-500">
                    Our 20-Step Production Flow
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {manufacturingSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={`/assets/manufacturing-excellence/${step.file}`}
                                    alt={step.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
                                    STEP {index + 1}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase leading-tight group-hover:text-blue-600 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SUPPLY SECTION */}
            <section className="bg-slate-900 py-20 text-white text-center">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 uppercase tracking-tighter">Trusted Supplier to National Organizations</h2>
                    <div className="flex flex-wrap justify-center gap-10 text-2xl font-black text-slate-500">
                        <span className="hover:text-blue-400 cursor-default transition-colors">BREB</span>
                        <span className="hover:text-blue-400 cursor-default transition-colors">BPDB</span>
                        <span className="hover:text-blue-400 cursor-default transition-colors">DPDC</span>
                        <span className="hover:text-blue-400 cursor-default transition-colors">DESCO</span>
                        <span className="hover:text-blue-400 cursor-default transition-colors">BADC</span>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ManufacturingExcellence;