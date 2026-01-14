"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Building2, HardHat, Award, Zap, Settings, Check, ArrowRight, Shield, Globe } from 'lucide-react';

// Service Card Component
const ServiceCard = ({ service, index, isAlternate }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`relative ${isAlternate ? 'md:flex-row-reverse' : ''} flex flex-col md:flex-row gap-12 items-center`}
    >
        {/* Content */}
        <div className="md:w-1/2 space-y-8">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{service.number}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                        {service.title}
                    </h3>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed">
                    {service.description}
                </p>

                <div className="grid gap-3">
                    {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            <motion.button
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold group"
            >
                Learn more about this service
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-slate-900">Case Study</span>
                </div>
            </div>
        </div>
    </motion.div>
);

// Process Step Component
const ProcessStep = ({ step, index, totalSteps }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative flex flex-col items-center text-center"
    >
        <div className="relative mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">{step.number}</span>
            </div>
            {index < totalSteps - 1 && (
                <div className="hidden md:block absolute top-10 -right-24 w-24 h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent" />
            )}
        </div>

        <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
        <p className="text-slate-600 leading-relaxed">{step.description}</p>
    </motion.div>
);

export default function ServicesPage() {
    const services = [
        {
            id: "power",
            number: "01",
            title: "Power Grid & Infrastructure",
            description: "Comprehensive EPC solutions for electrical substations and high-voltage transmission systems. We deliver grid stability through precision engineering for both industrial and national power requirements.",
            features: [
                "132/33KV Substation Design & Implementation",
                "High Voltage Transformer Installation",
                "Grid Synchronization & Load Testing",
                "Industrial Power Distribution Systems"
            ],
            image: "/assets/All/01-04.jpg"
        },
        {
            id: "civil",
            number: "02",
            title: "Civil Engineering & Land Development",
            description: "Expert land development and civil engineering services, from industrial earth filling to riverbank protection. Built on principles of sustainability, safety, and structural integrity.",
            features: [
                "Industrial Land Development & Grading",
                "Piling & Deep Foundation Solutions",
                "Structural Design & Engineering Consultancy",
                "Dredging & River Management"
            ],
            image: "/assets/All/01-02.jpg"
        },
        {
            id: "govt",
            number: "03",
            title: "Government Infrastructure Projects",
            description: "As a Class-A contractor, we specialize in high-priority government infrastructure, ensuring strict adherence to quality standards, timelines, and regulatory compliance.",
            features: [
                "Strategic Infrastructure Planning",
                "Public Utility Development",
                "Quality Assurance & Regulatory Compliance",
                "Large-Scale Project Management"
            ],
            image: "/assets/All/01-03.jpg"
        }
    ];

    const processes = [
        { number: "01", title: "Consultation & Analysis", description: "Comprehensive assessment of project requirements and feasibility studies." },
        { number: "02", title: "Strategic Planning", description: "Detailed engineering blueprints, resource allocation, and timeline mapping." },
        { number: "03", title: "Precision Execution", description: "On-site implementation with rigorous safety and quality standards." },
        { number: "04", title: "Quality Assurance", description: "Final testing, certification, and project handover with complete documentation." }
    ];

    const capabilities = [
        { icon: <Zap className="w-6 h-6" />, title: "High Voltage Expertise", description: "Specialized in 132kV-400kV systems" },
        { icon: <Shield className="w-6 h-6" />, title: "Safety First", description: "Zero accident record maintained" },
        { icon: <Award className="w-6 h-6" />, title: "Quality Certified", description: "ISO & international standards compliance" },
        { icon: <Globe className="w-6 h-6" />, title: "National Reach", description: "Projects across Bangladesh" }
    ];

    return (
        <main className="bg-white min-h-screen">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
                <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[size:40px_40px]" />

                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full mb-8">
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Services</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                            Engineering Excellence <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                                for Modern Infrastructure
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-12">
                            Specialized solutions in power infrastructure and civil engineering, delivering reliability and innovation across Bangladesh.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Bar */}
                <div className="container mx-auto px-6 lg:px-8 mt-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { value: "150+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
                            { value: "25+", label: "Expert Engineers", icon: <HardHat className="w-5 h-5" /> },
                            { value: "Class-A", label: "Govt. License", icon: <Shield className="w-5 h-5" /> },
                            { value: "12 Years", label: "Experience", icon: <Building2 className="w-5 h-5" /> }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-blue-50 rounded-lg">
                                        <div className="text-blue-600">{stat.icon}</div>
                                    </div>
                                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                                </div>
                                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MAIN SERVICES */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Comprehensive engineering solutions tailored to meet the demands of modern infrastructure development
                        </p>
                    </div>

                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                index={index}
                                isAlternate={index % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CAPABILITIES */}
            <section className="py-20 bg-slate-50/50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
                        <p className="text-lg text-slate-600">
                            Combining technical expertise with a commitment to excellence in every project
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.map((cap, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-white rounded-xl flex items-center justify-center mb-6">
                                    <div className="text-blue-600">{cap.icon}</div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{cap.title}</h4>
                                <p className="text-slate-600">{cap.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A systematic approach ensuring quality, efficiency, and client satisfaction at every stage
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {processes.map((step, index) => (
                            <ProcessStep
                                key={index}
                                step={step}
                                index={index}
                                totalSteps={processes.length}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Blue accent line */}
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-4 rounded-full"></div>

                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Ready to Build Tomorrow's{' '}
                                <span className="relative">
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                                        Infrastructure?
                                    </span>
                                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-100/70 -z-0 rounded-full"></span>
                                </span>
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                Partner with us for reliable, high-performance engineering solutions that stand the test of time.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
                                    >
                                        {/* Button shine effect */}
                                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                        Start a Consultation
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </Link>

                                <Link href="/projects">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group"
                                    >
                                        <span className="flex items-center gap-3">
                                            View Our Projects
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </motion.button>
                                </Link>
                            </div>

                            {/* Decorative elements */}
                            <div className="pt-8">
                                <div className="inline-flex items-center gap-3 text-sm text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span>Available for new projects</span>
                                    </div>
                                    <span className="text-slate-300">•</span>
                                    <span>Quick response guaranteed</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </main>
    );
}