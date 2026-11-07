"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

// ------------------------------------------------------------------
// মালিকের কাছ থেকে নিশ্চিত করে শুধু এই অংশ বদলান
// ------------------------------------------------------------------
const CONTACT = {
    phone: "+8801810098909",
    phoneDisplay: "+880 1810-098909",
    whatsapp: "8801810098909",
    email: "info@missionpowerland.com",
    office: "Sector 07, Road 16, House 01, Uttara, Dhaka-1230",
    factory: "Gazipur Industrial Zone, Dhaka",
};

const STORAGE_KEY = "mpl_chat_v3"; // পুরনো সংরক্ষিত চ্যাট (ভুল তথ্যসহ) আর দেখাবে না

const WELCOME = {
    id: 1,
    sender: 'bot',
    text: "Welcome to **Mission Power Land Limited**! ⚡\n\nI can answer common questions about our **transformers, substations, solar systems and factory**.\n\nFor technical details or prices, our engineers will help you directly.",
};

const SUGGESTIONS = ["Transformers", "Substation", "Solar", "Get a quote", "Contact"];

const contactLine = `\n\n---\n📞 [Call us](tel:${CONTACT.phone}) | [WhatsApp](https://wa.me/${CONTACT.whatsapp}) | [Contact form](/contact)`;

// শুধু সাইটে যা আছে সেটুকুই বলা হয়। সংখ্যা/স্পেক বানিয়ে বলা হয় না।
function getReply(userMessage) {
    const msg = userMessage.toLowerCase();
    const has = (...words) => words.some((w) => msg.includes(w));

    if (has('quote', 'quotation', 'price', 'cost', 'rate', 'দাম', 'কোটেশন')) {
        return "For a quotation, please tell us the **product, capacity (kVA) and quantity**.\n\n👉 [Request a quote](/contact?type=quote)\n\nOur team will review your requirements and reply." + contactLine;
    }

    if (has('contact', 'address', 'office', 'location', 'phone', 'email', 'যোগাযোগ', 'ঠিকানা')) {
        return `📍 **Office:** ${CONTACT.office}\n\n🏭 **Factory:** ${CONTACT.factory}\n\n📧 ${CONTACT.email}\n\n📞 ${CONTACT.phoneDisplay}` + contactLine;
    }

    if (has('solar', 'renewable', 'green', 'সোলার')) {
        return "### Solar EPC ☀️\nWe design and install:\n* Commercial & industrial rooftop solar\n* Grid-tie and hybrid inverter systems\n* Turnkey EPC with monitoring and maintenance\n\nSee [our solar work](/services/solar)." + contactLine;
    }

    if (has('transformer', 'single phase', 'single-phase', 'three phase', 'three-phase', 'ট্রান্সফরমার')) {
        return "### Transformers ⚡\nWe manufacture **single-phase** and **three-phase** distribution transformers at our own factory, with CRGO cores and in-house testing.\n\nTo get exact ratings and datasheets, tell us the **kVA and voltage** you need.\n\n👉 [Request a quote](/contact?type=quote) · [See how we make them](/manufacture-excellence)";
    }

    if (has('substation', 'switchgear', 'panel', 'ht/lt', '33/11', 'grid', 'সাবস্টেশন')) {
        return "### Substations & Panels\nWe deliver **33/11kV substation** setups with HT/LT switchgear and control panels.\n\nSee [our power & substation work](/services/powerGrid)." + contactLine;
    }

    if (has('manufactur', 'factory', 'plant', 'testing', 'made', 'কারখানা')) {
        return "### Our Factory 🏭\nFrom raw material to impulse testing, transformers are made in-house: core cutting, winding, tanking, oil filling and testing.\n\nSee the full process on our [Manufacturing page](/manufacture-excellence).";
    }

    if (has('civil', 'land', 'construction', 'infrastructure')) {
        return "### Civil & Infrastructure 🏗️\nWe also handle civil and infrastructure work connected to power projects.\n\nSee [Civil & Infrastructure](/services/civil)." + contactLine;
    }

    if (has('project', 'portfolio', 'client', 'done', 'প্রজেক্ট')) {
        return "We work with **BREB, BPDB, DESCO, DPDC, BMDA, BADC** and **80+ PBS units**.\n\nSee our [Project Portfolio](/portfolio).";
    }

    if (has('about', 'company', 'who', 'iso', 'class-a', 'class a', 'certif')) {
        return "**Mission Power Land Limited** is a **Class-A government contractor** and transformer manufacturer in Bangladesh, with **ISO 9001** quality standards.\n\nRead more [about us](/about).";
    }

    return "I may not have the answer to that one.\n\nI can help with **transformers, substations, solar, our factory, or a quotation**. For anything else, please talk to our team directly." + contactLine;
}

const markdownComponents = {
    a: ({ href = "", children }) =>
        href.startsWith("/") ? (
            <Link href={href} className="text-amber-600 font-bold underline">{children}</Link>
        ) : (
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-amber-600 font-bold underline">{children}</a>
        ),
    h3: ({ children }) => <h3 className="font-black text-slate-900 mb-1 mt-1 uppercase text-[11px]">{children}</h3>,
    ul: ({ children }) => <ul className="list-disc ml-4 space-y-1 my-2">{children}</ul>,
    p: ({ children }) => <p className="my-1">{children}</p>,
};

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [messages, setMessages] = useState([WELCOME]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const loadedRef = useRef(false);

    // সংরক্ষিত চ্যাট লোড (ভাঙা ডেটা থাকলে অ্যাপ ক্র্যাশ করবে না)
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
            }
        } catch { /* উপেক্ষা */ }
        loadedRef.current = true;
    }, []);

    useEffect(() => {
        if (!loadedRef.current) return;
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages)); } catch { /* উপেক্ষা */ }
    }, [messages]);

    useEffect(() => {
        if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping, isOpen]);

    // Esc চাপলে বন্ধ
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen]);

    const send = async (text) => {
        const userMsg = text.trim();
        if (!userMsg || isTyping) return;
        setInputValue('');
        setMessages((prev) => [...prev, { id: Date.now(), text: userMsg, sender: 'user' }]);
        setIsTyping(true);
        await new Promise((r) => setTimeout(r, 600));
        const reply = getReply(userMsg);
        setIsTyping(false);
        setMessages((prev) => [...prev, { id: Date.now() + 1, text: reply, sender: 'bot' }]);
    };

    const handleSubmit = (e) => { e.preventDefault(); send(inputValue); };
    const clearChat = () => setMessages([WELCOME]);

    return (
        <>
            {/* Chat Button */}
            <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999] flex flex-col items-end">
                <AnimatePresence>
                    {showToast && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                            className="mb-3 bg-white text-slate-800 p-3 rounded-xl shadow-2xl border border-amber-200 text-xs font-bold w-44"
                        >
                            ⚡ MPL Assistant <br />
                            <span className="text-amber-600">Ask about transformers or solar</span>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.button
                    aria-label="Open chat assistant"
                    onMouseEnter={() => { if (!isOpen) setShowToast(true); }}
                    onMouseLeave={() => setShowToast(false)}
                    onClick={() => { setIsOpen(true); setShowToast(false); }}
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/30"
                >
                    <Bot size={28} />
                </motion.button>
            </div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        role="dialog" aria-label="MPL Assistant"
                        initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[1000] w-[calc(100vw-2rem)] sm:w-[380px] h-[min(550px,calc(100dvh-5rem))] bg-slate-900 rounded-3xl shadow-2xl flex flex-col border border-slate-700 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-slate-950 text-white p-4 flex justify-between items-center border-b border-amber-500/30">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-amber-500 text-slate-950 rounded-lg"><Bot size={20} /></div>
                                <div>
                                    <h3 className="font-black text-xs uppercase tracking-widest">MPL Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                        <span className="text-[10px] text-slate-400 font-bold">Quick answers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button aria-label="Clear chat" onClick={clearChat} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Trash2 size={16} /></button>
                                <button aria-label="Close chat" onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><X size={20} /></button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-100">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[88%] p-3.5 rounded-2xl text-[13px] shadow-sm ${msg.sender === 'user'
                                        ? 'bg-amber-500 text-slate-950 font-semibold rounded-br-none'
                                        : 'bg-white text-slate-700 rounded-bl-none border border-slate-200'}`}>
                                        <ReactMarkdown components={markdownComponents}>{msg.text}</ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                            {isTyping && <div className="text-[11px] text-slate-500 font-bold animate-pulse">Typing...</div>}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick suggestions */}
                        <div className="px-3 pt-2 pb-1 bg-white flex gap-2 overflow-x-auto border-t border-slate-200">
                            {SUGGESTIONS.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => send(s)}
                                    disabled={isTyping}
                                    className="shrink-0 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-200 text-[11px] font-bold text-slate-700 disabled:opacity-50"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-3 bg-white">
                            <div className="flex gap-2">
                                <input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your question..."
                                    className="flex-1 min-w-0 px-4 py-3 bg-slate-100 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                />
                                <button
                                    type="submit"
                                    aria-label="Send message"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="bg-slate-900 text-white p-3 rounded-xl hover:bg-amber-500 hover:text-slate-950 transition-colors disabled:bg-slate-200 disabled:text-slate-400"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}