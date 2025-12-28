import React from 'react'

export default function StatsSection() {
    const stats = [
        {
            id: 1,
            number: "15+",
            label: "Years of Experience",
            sublabel: "Founded in Bangladesh"
        },
        {
            id: 2,
            number: "120+",
            label: "Projects Completed",
            sublabel: "Government Tenders"
        },
        {
            id: 3,
            number: "500+",
            label: "MW Power Capacity",
            sublabel: "Grid Integration"
        },
        {
            id: 4,
            number: "Class-A",
            label: "Enlisted Contractor",
            sublabel: "Verified Category"
        }
    ];

    return (
        <section className="relative z-30 -mt-16 px-6 lg:px-16">
            <div className="container mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                        {stats.map((stat) => (
                            <div key={stat.id} className="p-8 hover:bg-slate-50 transition-colors group">
                                <div className="flex flex-col items-center lg:items-start">
                                    <h2 className="text-4xl font-extrabold text-blue-900 group-hover:scale-110 transition-transform duration-300">
                                        {stat.number}
                                    </h2>
                                    <p className="text-sm font-bold text-slate-800 mt-2 uppercase tracking-wide">
                                        {stat.label}
                                    </p>
                                    <p className="text-xs font-semibold text-blue-500 mt-1 uppercase tracking-tighter opacity-70">
                                        {stat.sublabel}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


