import React from 'react';
import Image from 'next/image';

export default function ServicesGrid() {
    const services = [
        {
            id: "01",
            title: "Civil & Land Development",
            category: "Infrastructure Division",
            image: "/assets/Stats/service-1.jpg",
            desc: "Specialized in large-scale earth filling, structural piling, and site preparation for industrial zones.",
            link: "/services/land"
        },
        {
            id: "02",
            title: "Power & Grid Solutions",
            category: "Electrical Division",
            image: "/assets/Stats/service-2.jpg",
            desc: "Comprehensive engineering for high-voltage substations and national grid transmission lines.",
            link: "/services/power"
        }
    ];

    return (
        <section className="py-18 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-16">

                {/* Header with Industrial Styling */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
                            Engineering the <br /> National Infrastructure
                        </h2>
                    </div>
                    <p className="text-slate-500 font-medium max-w-xs border-l-2 border-blue-600 pl-6">
                        Registered Class-A Contractor specializing in high-impact government projects.
                    </p>
                </div>

                {/* Professional Alternating Row Layout */}
                <div className="space-y-12">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col lg:flex-row items-stretch bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Container (Takes 50%) */}
                            <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 hover:scale-105"
                                />
                            </div>

                            {/* Text Container (Takes 50%) */}
                            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                                <span className="text-blue-600 font-bold text-5xl opacity-10 mb-2">{service.id}</span>
                                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">{service.category}</span>
                                <h3 className="text-3xl font-extrabold text-slate-900 mb-6">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                    {service.desc}
                                </p>
                                <div className="flex">
                                    <a href={service.link} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-blue-700 transition-colors">
                                        Explore Scope
                                        <span className="w-10 h-[1px] bg-slate-300"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}