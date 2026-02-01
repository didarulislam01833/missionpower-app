"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

    //  Background Map: Search-based URL to ensure it never says "Link Not Found"
    const bgMapEmbed = "https://maps.google.com/maps?q=Mission%20Power%20Land%20Limited%20Uttara%20Sector%207&t=&z=15&ie=UTF8&iwloc=&output=embed";

    //  The specific link you requested for the button
    const userPreferredLink = "https://www.google.com/maps/@23.8690351,90.3952735,3a,89.9y,280.18h,76.66t/data=!3m7!1e1!3m5!1s2864TbyepjmFZ7I30PYJ4w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D13.340000000000003%26panoid%3D2864TbyepjmFZ7I30PYJ4w%26yaw%3D280.18!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D";

    const validateForm = (data) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
        if (data.name.length < 3) return "Full Name is too short.";
        if (!emailRegex.test(data.email)) return "Enter a valid email.";
        if (!phoneRegex.test(data.phone)) return "Enter a valid phone number.";
        if (!data.subject) return "Subject is required.";
        if (data.message.length < 10) return "Message must be at least 10 characters.";
        return null;
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name: e.target.name.value.trim(),
            email: e.target.email.value.trim(),
            phone: e.target.phone.value.trim(),
            subject: e.target.subject.value.trim(),
            message: e.target.message.value.trim(),
        };

        const error = validateForm(formData);
        if (error) {
            setStatus("error");
            setErrorMessage(error);
            return;
        }

        setStatus("sending");
        try {
            const BACKEND_API = "https://missionpower-backend.onrender.com/api/send";
            const res = await fetch(BACKEND_API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await res.json();
            if (res.ok && result.success) {
                setStatus("success");
                e.target.reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage(result.message || "Failed to send message.");
            }
        } catch (err) {
            setStatus("error");
            setErrorMessage("Server is waking up. Please try again.");
        }
    }

    return (
        <main className="relative min-h-screen bg-white">
            <AnimatePresence>
                {showToast && status === "idle" && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 50, x: "-50%" }}
                        className="fixed bottom-10 left-1/2 z-[200] bg-slate-900 text-white px-8 py-4 rounded-full shadow-2xl font-bold text-sm border border-slate-700 pointer-events-none whitespace-nowrap"
                    >
                        ⚡ Let's collaborate! Fill out the form to get started.
                    </motion.div>
                )}
            </AnimatePresence>

            <section
                onMouseEnter={() => setShowToast(true)}
                onMouseLeave={() => setShowToast(false)}
                className="relative h-screen w-full overflow-hidden"
            >
                {/* Background Map - Using the Embed search string */}
                <div className="absolute inset-0 z-0 grayscale contrast-125 opacity-30">
                    <iframe
                        src={bgMapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="relative z-10 container mx-auto px-6 lg:px-16 h-full flex items-center justify-end">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-[480px] bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-[3rem] shadow-2xl border border-white"
                    >
                        <h1 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter mb-6">
                            Contact <span className="text-blue-600">With Us</span>
                        </h1>

                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Address</h4>
                                <p className="text-sm font-bold text-slate-700 leading-tight">Sector 07, Road 16, House 01, <br /> Uttara, Dhaka-1230</p>
                            </div>

                            {/* DIRECTIONS BUTTON - Opens your preferred Link */}
                            <a
                                href={userPreferredLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center group"
                            >
                                <div className="bg-blue-600 p-3 rounded-full text-white group-hover:bg-slate-950 transition-colors shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                </div>
                                <span className="text-[9px] font-black mt-2 text-blue-600 tracking-tighter uppercase">View Location</span>
                            </a>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <input required name="name" type="text" placeholder="Full Name" className="bg-slate-100 rounded-xl p-3 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-600 text-black placeholder:text-slate-400" />
                                <input required name="email" type="email" placeholder="Email" className="bg-slate-100 rounded-xl p-3 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-600 text-black placeholder:text-slate-400" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <input required name="phone" type="tel" placeholder="Phone" className="bg-slate-100 rounded-xl p-3 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-600 text-black placeholder:text-slate-400" />
                                <input required name="subject" type="text" placeholder="Subject" className="bg-slate-100 rounded-xl p-3 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-600 text-black placeholder:text-slate-400" />
                            </div>
                            <textarea required name="message" placeholder="Project Details" className="w-full bg-slate-100 rounded-xl p-3 text-xs font-bold h-24 outline-none focus:ring-2 focus:ring-blue-600 resize-none text-black placeholder:text-slate-400"></textarea>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full py-4 bg-slate-950 text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-xl hover:bg-blue-600 transition-all shadow-xl disabled:bg-slate-400"
                            >
                                {status === "sending" ? "Processing..." : "Submit Inquiry"}
                            </button>

                            <AnimatePresence>
                                {status === "success" && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-[10px] font-black text-center mt-2 uppercase tracking-widest">✓ Sent successfully!</motion.p>
                                )}
                                {status === "error" && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-[10px] font-black text-center mt-2 uppercase tracking-widest">✕ {errorMessage}</motion.p>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}