import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BASE = "/assets/manufacturing-excellence/";

// ছবির নাম আপনার public ফোল্ডারের ফাইলের সঙ্গে মিলিয়ে নিন (ফাঁকা জায়গা = %20, & = %26)
const STEPS = [
    { title: "Raw material", text: "Premium CRGO silicon steel and high-purity copper.", img: "Raw%20Metarials%20Store.JPG" },
    { title: "Coil winding", text: "Tension-controlled winding for exact voltage ratios.", img: "Winding%20Section.JPG" },
    { title: "Core and coil assembly", text: "The wound coil is joined with the core.", img: "Core%20%26%20Coil%20Assembly.JPG" },
    { title: "Tanking and oil filling", text: "Vacuum tanking, then dielectric oil.", img: "Final%20Assembly.JPG" },
    { title: "Impulse and routine testing", text: "Lightning-surge test, load loss and no-load loss checks.", img: "Impluse%20Test.JPG" },
    { title: "Ready for dispatch", text: "Inspected units leave for substations and poles.", img: "p-13.jpg" },
];

export default function ProcessTimeline() {
    return (
        <section className="py-16 md:py-24 bg-[#070A11] relative overflow-hidden">
            <div className="container mx-auto px-5 sm:px-8 lg:px-16">
                <div className="max-w-3xl mb-10 md:mb-14">
                    <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight uppercase">
                        How every transformer is made
                    </h2>
                    <p className="mt-3 text-slate-300 text-sm sm:text-base">
                        From steel and copper to a tested unit, inside our own plant.
                    </p>
                </div>

                {/* ফোনে সোয়াইপ, ডেস্কটপে গ্রিড */}
                <ol className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 -mx-5 px-5 md:mx-0 md:px-0">
                    {STEPS.map((s, i) => (
                        <li key={s.title} className="snap-start shrink-0 w-[78%] sm:w-[55%] md:w-auto bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
                            <div className="relative aspect-[4/3] bg-slate-800">
                                <Image
                                    src={`${BASE}${s.img}`}
                                    alt={s.title}
                                    fill
                                    sizes="(max-width: 768px) 78vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-amber-500/40 text-amber-400 text-xs font-bold">
                                    Step {i + 1}
                                </span>
                            </div>
                            <div className="p-4 sm:p-5">
                                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                                <p className="mt-1 text-sm text-slate-300 leading-relaxed">{s.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <Link href="/manufacture-excellence" className="inline-block mt-6 text-amber-400 font-bold hover:text-amber-300 underline underline-offset-4">
                    See the full factory tour
                </Link>
            </div>
        </section>
    );
}