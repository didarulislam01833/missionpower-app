"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Trash2, Smartphone, Briefcase, Factory } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const handleMouseEnter = () => { if (!isOpen) setShowToast(true); };

    useEffect(() => {
        const saved = localStorage.getItem('mpl_ai_v2');
        if (saved) {
            setMessages(JSON.parse(saved));
        } else {
            setMessages([{
                id: 1,
                text: "Welcome to **Mission Power Land Limited**! ⚡\n\nI am your AI assistant. I can help you with technical info about our **Power Grid solutions, Solar projects, or Manufacturing plant**. \n\nWhat can I help you with today?",
                sender: 'bot',
                timestamp: new Date()
            }]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('mpl_ai_v2', JSON.stringify(messages));
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // --- ইন্টেলিজেন্ট নলেজ লজিক ---
    const generateAIResponse = async (userMessage) => {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 800)); // প্রাকৃতিক বিলম্ব

        const msg = userMessage.toLowerCase();
        let response = "";

        const contactInfo = "\n\n---\n📞 **Quick Connect:** [Call Us](tel:+8801511564639) | [WhatsApp](https://wa.me/8801511564639) | [Contact Form](/contact)";

        // ১. কোম্পানি প্রোফাইল ও লিগ্যাল স্ট্যাটাস
        if (msg.includes('who') || msg.includes('about') || msg.includes('company')) {
            response = "## About Mission Power Land Limited\nMission Power Land (MPL) is a leading **ISO 9001:2015 Certified** Engineering firm in Bangladesh, operating since **2014**.\n\n* **Classification:** Class-A Govt. Contractor.\n* **Core Focus:** Power Generation, Transmission & Distribution.\n* **Clients:** PGCB, BPDB, BREB, and various private industrial giants.";
        }

        // ২. পাওয়ার গ্রিড ও ইঞ্জিনিয়ারিং (Technical)
        else if (msg.includes('power') || msg.includes('grid') || msg.includes('substation') || msg.includes('132kv')) {
            response = "### Power Division Expertise ⚡\nWe specialize in **Turnkey Solutions** for High Voltage infrastructure:\n* Construction of **132/33kV & 400kV Grid Sub-stations**.\n* Installation of **GIS & AIS System**.\n* High-tension transmission line stringing.\n* Testing & Commissioning of Power Transformers." + contactInfo;
        }

        // ৩. ম্যানুফ্যাকচারিং এক্সেলেন্স (New Section)
        else if (msg.includes('manufacturing') || msg.includes('factory') || msg.includes('make') || msg.includes('excellence')) {
            response = "### Manufacturing Excellence 🏭\nOur state-of-the-art facility produces high-quality electrical components:\n* **LT/HT Switchgear** & Control Panels.\n* **PFI Plant** (Power Factor Improvement).\n* Cable Trays and Distribution Boards.\n\nVisit our [Manufacturing Excellence Page](/manufacture-excellence) for more.";
        }

        // ৪. সোলার ও রিনিউয়েবল এনার্জি
        else if (msg.includes('solar') || msg.includes('renewable') || msg.includes('green')) {
            response = "### Solar Energy Solutions ☀️\nWe are committed to sustainable energy:\n* **Utility-scale Solar Parks**.\n* On-Grid & Off-Grid Solar Power Systems for Industries.\n* Net-metering solutions to reduce electricity costs." + contactInfo;
        }

        // ৫. সিভিল ও ল্যান্ড ইনফ্রাস্ট্রাকচার
        else if (msg.includes('land') || msg.includes('civil') || msg.includes('construction') || msg.includes('piling')) {
            response = "### Land & Civil Infrastructure 🏗️\nBeyond power, we are experts in industrial site development:\n* **Earth filling & Massive excavation**.\n* Structural Piling (RCC & Sand piling).\n* Road construction & Drainage systems for industrial zones.";
        }

        // ৬. প্রজেক্ট লিস্ট ও ক্লায়েন্ট
        else if (msg.includes('project') || msg.includes('portfolio') || msg.includes('done') || msg.includes('clients')) {
            response = "Mission Power Land has successfully completed over **150+ major projects**. \n\nKey Clients include:\n* **PGCB** (Power Grid Company of Bangladesh)\n* **BPDB** (Bangladesh Power Development Board)\n* **BREB** (Rural Electrification Board)\n\nYou can explore our [Project Portfolio](/portfolio) for visual details.";
        }

        // ৭. ঠিকানা ও কন্টাক্ট
        else if (msg.includes('contact') || msg.includes('address') || msg.includes('office') || msg.includes('location')) {
            response = "📍 **Head Office:** \nSector 07, Road 16, House 01, Uttara, Dhaka-1230, Bangladesh.\n\n📧 **Email:** info@missionpowerland.com\n📞 **Phone:** +8801511564639\n\n[Get Directions on Google Maps](https://google.com/maps)";
        }

        // ৮. মূল্য বা কোটেশন (Lead Generation)
        else if (msg.includes('price') || msg.includes('cost') || msg.includes('quote') || msg.includes('hiring')) {
            response = "For pricing or a formal quotation, we need to review your technical requirements. \n\nPlease click here: **[Request a Quote](/contact?type=quote)**. \n\nOur engineering team will provide a cost analysis within 24 hours.";
        }

        // ৯. ডিফল্ট স্মার্ট রেসপন্স
        else {
            response = "I'm not sure I understand about **'" + userMessage + "'**. \n\nAre you interested in our **Power Grid solutions**, **Solar Energy**, or **Manufacturing services**? \n\nYou can also talk to our engineer directly via **WhatsApp** (button on the bottom left).";
        }

        setIsTyping(false);
        return response;
    };

    const handleSend = async (e) => {
        e?.preventDefault();
        if (!inputValue.trim() || isTyping) return;

        const userMsg = inputValue.trim();
        setInputValue('');
        setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: 'user' }]);

        const aiRes = await generateAIResponse(userMsg);
        setMessages(prev => [...prev, { id: Date.now() + 1, text: aiRes, sender: 'bot' }]);
    };

    const clearChat = () => {
        const initial = [{ id: Date.now(), text: "Chat history cleared. How can I assist you?", sender: 'bot' }];
        setMessages(initial);
    };

    return (
        <>
            {/* AI Icon */}
            <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
                <AnimatePresence>
                    {showToast && !isOpen && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                            className="mb-3 bg-white text-slate-800 p-3 rounded-xl shadow-2xl border border-blue-100 text-xs font-bold w-44"
                        >
                            ⚡ MPL AI is Online! <br />
                            <span className="text-blue-600">Ask about Grid or Solar</span>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.button onMouseEnter={handleMouseEnter} onMouseLeave={() => setShowToast(false)}
                    onClick={() => { setIsOpen(true); setShowToast(false); }}
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl"
                >
                    <Bot size={30} />
                </motion.button>
            </div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-6 right-6 z-[1000] w-[380px] h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-slate-900 text-white p-5 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-600 rounded-lg"><Bot size={20} /></div>
                                <div>
                                    <h3 className="font-black text-xs uppercase tracking-widest">MPL Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                        <span className="text-[9px] text-slate-400 font-bold uppercase">Engineering Expert</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={clearChat} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Trash2 size={16} /></button>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><X size={20} /></button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] shadow-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-slate-700 rounded-bl-none border border-slate-100'
                                        }`}>
                                        <ReactMarkdown components={{
                                            a: ({ ...props }) => <Link href={props.href} className="text-blue-500 font-bold underline" {...props} />,
                                            h3: ({ ...props }) => <h3 className="font-black text-slate-900 mb-1 mt-2 uppercase text-[11px]" {...props} />,
                                            ul: ({ ...props }) => <ul className="list-disc ml-4 space-y-1 my-2" {...props} />
                                        }}>
                                            {msg.text}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                            {isTyping && <div className="text-[10px] text-slate-400 font-bold animate-pulse">AI is thinking...</div>}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 bg-white border-t">
                            <div className="flex gap-2">
                                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your engineering query..."
                                    className="flex-1 px-4 py-3 bg-slate-100 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                                />
                                <button type="submit" disabled={!inputValue.trim() || isTyping}
                                    className="bg-slate-900 text-white p-3 rounded-xl hover:bg-blue-600 transition-colors disabled:bg-slate-200"
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