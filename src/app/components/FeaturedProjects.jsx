import React from 'react';
import Image from 'next/image';

export default function FeaturedProjects() {
    const projects = [
        {
            id: 1,
            title: "Urban Residential Planning",
            image: "/assets/All/01-04.jpg", // Architecture/Housing
            category: "Real Estate"
        },
        {
            id: 2,
            title: "Commercial Safety Systems",
            image: "/assets/All/01-03.jpg", // Fire Safety
            category: "Fire & Safety"
        },
        {
            id: 3,
            title: "National Grid Infrastructure",
            image: "/assets/All/01-11.jpg", // Power Lines
            category: "Electrical"
        },
        {
            id: 4,
            title: "Highway & Road Networks",
            image: "/assets/All/01-06.jpg", // Road infrastructure
            category: "Civil Engineering"
        },
        {
            id: 5,
            title: "Petroleum Distribution Hub",
            image: "/assets/All/01-09.jpg", // Gas Station
            category: "Energy Supply"
        },
        {
            id: 6,
            title: "Logistics & Supply Chain",
            image: "/assets/All/01-08.jpg", // Port/Trucks
            category: "Logistics"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 lg:px-16">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Project Portfolio</h2>
                        <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
                            Delivering Excellence Across <br /> Multiple Sectors
                        </h3>
                    </div>
                    <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all">
                        View All Projects
                    </button>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="mt-5">
                                <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">
                                    {project.category}
                                </span>
                                <h4 className="text-xl font-bold text-slate-800 mt-1 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}