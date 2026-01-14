"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // ১. মাউস আইকনের ওপর নিলে টোস্ট মেসেজ দেখাবে
    const handleMouseEnter = () => {
        if (!isOpen) setShowToast(true);
    };

    // ২. লোকাল স্টোরেজ থেকে চ্যাট হিস্ট্রি লোড করা
    useEffect(() => {
        const saved = localStorage.getItem('mission_power_chat');
        if (saved) {
            setMessages(JSON.parse(saved));
        } else {
            setMessages([{
                id: 1,
                text: "Hello! I am **Mission Power Land AI**. How can I help you learn about our company today?",
                sender: 'bot',
                timestamp: new Date()
            }]);
        }
    }, []);

    // ৩. চ্যাট হিস্ট্রি সেভ করা এবং অটো-স্ক্রল
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem('mission_power_chat', JSON.stringify(messages));
        }
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // ৪. কোম্পানির বিস্তারিত নলেজ বেস (AI লজিক পরিমার্জন)
    const generateAIResponse = async (userMessage) => {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 1000));

        const msg = userMessage.toLowerCase();
        let response = "";

        // কন্টাক্ট ইনফো সাফিক্স (একই জিনিস বারবার না লিখে ভেরিয়েবল ব্যবহার)
        const contactSuffix = "\n\n---\n👉 **Connect with us:**\n* Hit the **WhatsApp button** on the left to chat instantly.\n* Or visit our [Contact Page](/contact) to fill up the form. Our team will contact you soon!";

        if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
            response = "Hello! Welcome to **Mission Power Land Limited**. I'm here to assist you with information about our grid infrastructure, land development, and more. What would you like to know?";
        }
        else if (msg.includes('company') || msg.includes('about') || msg.includes('who are you')) {
            response = "## About Mission Power Land Limited\n\nWe are a premier **Engineering & Construction** firm in Bangladesh, dedicated to power infrastructure and land development.\n\n* **Established:** Founded in **2014**.\n* **Experience:** Over **15 years of combined engineering expertise**.\n* **Status:** A **Class-A registered government contractor** (working with BPDB, PGCB, BREB).\n* **Quality:** An **ISO 9001:2015 Certified** company." + contactSuffix;
        }
        else if (msg.includes('service') || msg.includes('what do you do') || msg.includes('work')) {
            response = "### Our Specialized Services:\n\n1. **Power Grid Solutions:** Expert construction of **132/33kV and 400kV Grid Sub-stations**.\n2. **Land Development:** Large-scale **earth filling and piling** for industrial and residential sites.\n3. **National Grid Integration:** Connecting industrial plants to the national power network.\n4. **Consultancy:** Project planning and structural engineering." + contactSuffix;
        }
        else if (msg.includes('project') || msg.includes('portfolio') || msg.includes('experience')) {
            response = "Mission Power Land has successfully executed over **150+ projects** across Bangladesh.\n\nOur portfolio includes high-voltage transmission lines, grid station commissioning, and extensive civil engineering works for major government organizations like **PGCB and BPDB**. You can see our photos on the [Portfolio page](/portfolio)!" + contactSuffix;
        }
        else if (msg.includes('contact') || msg.includes('address') || msg.includes('phone') || msg.includes('email')) {
            response = "### Contact Information\n\n📍 **HQ:** House 01, Road 16, Sector 07, Uttara, Dhaka-1230.\n📞 **Phone:** +8801511564639\n📧 **Email:** info@missionpowerland.com\n\nFeel free to drop by or reach out via WhatsApp!";
        }
        else {
            // ডিফল্ট উত্তর যেখানে হোয়াটসঅ্যাপ ও কন্টাক্ট পেজে গুরুত্ব দেওয়া হয়েছে
            response = `I understand you're asking about **"${userMessage}"**. \n\nFor a detailed technical discussion or a precise project quote, please:\n1. Click the **WhatsApp button** (bottom-left).\n2. Or go to our **[Contact Page](/contact)** and fill out the form.\n\nOur engineering team will review your query and get back to you immediately!`;
        }

        setIsTyping(false);
        return response;
    };

    const handleSend = async (e) => {
        e?.preventDefault();
        if (!inputValue.trim() || isTyping) return;

        const userMsg = inputValue.trim();
        setInputValue('');

        const newUserMessage = { id: Date.now(), text: userMsg, sender: 'user' };
        setMessages(prev => [...prev, newUserMessage]);

        const aiRes = await generateAIResponse(userMsg);
        setMessages(prev => [...prev, { id: Date.now() + 1, text: aiRes, sender: 'bot' }]);
    };

    const clearChat = () => {
        const initialMsg = [{ id: Date.now(), text: "Chat history cleared. How can I help you?", sender: 'bot' }];
        setMessages(initialMsg);
        localStorage.setItem('mission_power_chat', JSON.stringify(initialMsg));
    };

    return (
        <>
            {/* AI Icon with Toast Label */}
            <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
                <AnimatePresence>
                    {showToast && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                            className="mb-3 bg-white text-slate-800 p-4 rounded-2xl shadow-2xl border border-blue-100 text-sm font-medium w-48 relative"
                        >
                            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-blue-100 rotate-45"></div>
                            Hello! How can I help you? <br />
                            <span className="text-blue-600 font-bold">I am Mission Power Land AI</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={() => setShowToast(false)}
                    onClick={() => { setIsOpen(true); setShowToast(false); }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl relative"
                >
                    <Bot size={30} />
                    <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                </motion.button>
            </div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-6 right-6 z-[1000] w-[380px] h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot size={18} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm leading-none">MPL AI Assistant</h3>
                                    <span className="text-[10px] text-blue-100">Always Online</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={clearChat} className="hover:bg-white/20 p-1.5 rounded-lg transition-colors" title="Clear History">
                                    <Trash2 size={16} />
                                </button>
                                <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-lg transition-colors">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.sender === 'bot' && (
                                        <div className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                                            <Bot size={14} />
                                        </div>
                                    )}
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-none shadow-md'
                                        : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
                                        }`}>
                                        <ReactMarkdown components={{
                                            p: ({ ...props }) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                                            a: ({ ...props }) => <Link href={props.href} className="text-blue-500 font-bold underline" {...props} />,
                                            h2: ({ ...props }) => <h2 className="font-bold text-md mb-2 border-b pb-1" {...props} />,
                                            h3: ({ ...props }) => <h3 className="font-bold text-sm mb-1" {...props} />,
                                            ul: ({ ...props }) => <ul className="list-disc ml-4 mb-2 space-y-1" {...props} />,
                                        }}>
                                            {msg.text}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex items-center gap-2 text-slate-400 text-xs ml-9">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span>Assistant is typing...</span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-4 border-t bg-white">
                            <div className="flex gap-2">
                                <input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) handleSend(e); }}
                                    placeholder="Ask about our grid projects..."
                                    className="flex-1 p-2.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white p-2.5 rounded-xl transition-all shadow-md active:scale-95"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                            <p className="text-[10px] text-center text-slate-400 mt-2">Mission Power Land Assistant</p>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}