import React from 'react';
import Image from 'next/image';

export default function TrustLogos() {
    const partnerLogos = [
        { id: 1, src: "/assets/All/bpdb-logo.png", alt: "BPDB Logo" }, // Replace with actual logos
        { id: 2, src: "/assets/All/pgcb-logo.png", alt: "PGCB Logo" },
        { id: 3, src: "/assets/All/reb-logo.png", alt: "REB Logo" },
        { id: 4, src: "/assets/All/lged-logo.png", alt: "LGED Logo" },
        { id: 5, src: "/assets/All/rhd-logo.png", alt: "RHD Logo" },
        { id: 6, src: "/assets/All/bpc-logo.png", alt: "BPC Logo" },
        // Add more logos as needed
    ];

    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="text-center mb-12">
                    <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Our Valued Partners</p>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                        Collaborating for National Progress
                    </h3>
                </div>

                {/* Logos Grid with Grayscale and Hover Effects */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                    {partnerLogos.map((logo) => (
                        <div key={logo.id} className="h-16 relative flex items-center justify-center">
                            {/* Replace with your actual logo files */}
                            {/* For now, using text as placeholders */}
                            <span className="font-extrabold text-2xl text-slate-400">{logo.alt.split(' ')[0]}</span>
                            {/* Once you have actual image files, uncomment the Image component */}
                            {/* <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="150px"
                className="object-contain"
              /> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}