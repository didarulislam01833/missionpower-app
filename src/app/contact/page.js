"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

    const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4235889215!2d90.3980!3d23.8640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUxJzUwLjQiTiA5MMKwMjMnNTIuOCJF!5e0!3m2!1sen!2sbd!4v1625555555555";
    const googleMapsShareUrl = "https://goo.gl/maps/example";

    const validateForm = (data) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;

        if (data.name.length < 3) return "Full Name is too short.";
        if (!emailRegex.test(data.email)) return "Enter a valid email address.";
        if (!phoneRegex.test(data.phone)) return "Enter a valid BD phone number.";
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
        setErrorMessage("");

        try {
            // ✅ LIVE BACKEND URL (Corrected endpoint to match server.js)
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
            console.error("Frontend Fetch Error:", err);
            setStatus("error");
            setErrorMessage("Server is waking up. Please try again in 30 seconds.");
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

            <section onMouseEnter={() => setShowToast(true)} onMouseLeave={() => setShowToast(false)} className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 z-0 grayscale contrast-125 opacity-40">
                    <iframe src={googleMapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>

                <div className="relative z-10 container mx-auto px-6 lg:px-16 h-full flex items-center justify-end">
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-[480px] bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-[3rem] shadow-2xl border border-white">
                        <h1 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter mb-6">
                            Contact <span className="text-blue-600">Hub</span>
                        </h1>

                        <div className="space-y-4 mb-6">
                            <div>
                                <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">HQ Address</h4>
                                <p className="text-sm font-bold text-slate-700 leading-tight">Sector 03, Road 12, House 05, <br /> Uttara, Dhaka-1230</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <input required name="name" type="text" placeholder="Full Name" className="bg-slate-100 rounded-xl p-4 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-600 text-black" />
                                <input required name="email" type="email" placeholder="Email" className="bg-slate-100 rounded-xl p-4 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-600 text-black" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <input required name="phone" type="tel" placeholder="Phone (017...)" className="bg-slate-100 rounded-xl p-4 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-600 text-black" />
                                <input required name="subject" type="text" placeholder="Subject" className="bg-slate-100 rounded-xl p-4 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-600 text-black" />
                            </div>
                            <textarea required name="message" placeholder="Project Details" className="w-full bg-slate-100 rounded-xl p-4 text-xs font-bold h-24 outline-none focus:ring-2 focus:ring-blue-600 resize-none text-black"></textarea>

                            <button type="submit" disabled={status === "sending"} className="w-full py-4 bg-slate-950 text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-xl hover:bg-blue-600 transition-all shadow-xl disabled:bg-slate-400">
                                {status === "sending" ? "Processing..." : "Submit Inquiry"}
                            </button>

                            <AnimatePresence>
                                {status === "success" && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-[10px] font-black text-center mt-2">✓ INQUIRY SENT SUCCESSFULLY!</motion.p>}
                                {status === "error" && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-[10px] font-black text-center mt-2">✕ {errorMessage.toUpperCase()}</motion.p>}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}