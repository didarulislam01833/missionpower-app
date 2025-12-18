import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="relative w-full h-[600px] md:h-[750px] flex items-center overflow-hidden">
            {/* 1. Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/banner/banner-img.jpg"
                    alt="Power Infrastructure Bangladesh"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Dark professional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
            </div>

            {/* 2. Content Container */}
            <div className="container mx-auto px-6 lg:px-16 relative z-10 text-white">
                <div className="max-w-3xl space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs font-bold tracking-widest uppercase">Trusted Govt. Contractor</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                        Powering the <br />
                        <span className="text-blue-500">Nation's Growth</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                        Mission Power Land is a premier class-A contractor specializing in electrical grid
                        infrastructure and large-scale land development across Bangladesh.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        {/* Go to Projects Page */}
                        <Link href="/portfolio" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg inline-block">
                            Explore Our Projects
                        </Link>

                        {/* Go to Contact Page */}
                        <Link href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold transition-all inline-block">
                            Partner With Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* 3. Bottom Decorative Slant (Optional) */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10" />
        </div>
    );
};

export default Banner;