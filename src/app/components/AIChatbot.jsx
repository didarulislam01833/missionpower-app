"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [showToast, setShowToast] = useState(false); // Toast state
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // ১. মাউস হোভার করলে টোস্ট দেখানো
    const handleMouseEnter = () => {
        if (!isOpen) setShowToast(true);
    };

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

    useEffect(() => {
        localStorage.setItem('mission_power_chat', JSON.stringify(messages));
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // ২. কোম্পানির বিস্তারিত নলেজ বেস
    const generateAIResponse = async (userMessage) => {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        const msg = userMessage.toLowerCase();
        let response = "";

        const contactSuffix = "\n\n---\n👉 **Connect with us:**\n* Hit the **WhatsApp button** on the left to chat instantly.\n* Or visit our [Contact Page](/contact) to fill out the form. Our team will get back to you shortly!";

        if (msg.includes('hi') || msg.includes('hello')) {
            response = "Hello! Welcome to **Mission Power Land Limited**. I am your dedicated AI assistant. I can tell you about our grid solutions, land development projects, and more. What would you like to know?";
        }
        else if (msg.includes('company') || msg.includes('about') || msg.includes('who are you')) {
            response = "## About Mission Power Land Limited\n\nWe are a premier **Engineering & Construction** firm in Bangladesh, established in 2014. With over **15 years of combined experience**, we specialize in:\n\n* **Power Infrastructure:** 132/33kV and 400kV Grid Sub-stations.\n* **Civil Engineering:** Earth filling, Piling, and Industrial site preparation.\n* **Registration:** Class-A Government Contractor (BPDB, PGCB, BREB).\n* **Certification:** ISO 9001:2015 Certified company." + contactSuffix;
        }
        else if (msg.includes('service') || msg.includes('what do you do')) {
            response = "### Our Key Services:\n\n1. **Grid Sub-Stations:** Expert construction of high-voltage transmission lines and stations.\n2. **Land Development:** Specialized in earth-work and piling for large-scale industrial projects.\n3. **Consultancy:** Project planning and national grid integration.\n\nWe have successfully completed over **150+ projects** across the country." + contactSuffix;
        }
        else {
            response = `I understand you are asking about **"${userMessage}"**. To give you the best information or a precise quote, I recommend:\n\n1. Messaging us on **WhatsApp** (Green button on the left).\n2. Filling out the form on our **[Contact Page](/contact)**.\n\nOur engineering team will review your query and contact you within 24 hours.`;
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

    return (
        <>
            {/* AI Icon with Toast */}
            <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
                <AnimatePresence>
                    {showToast && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="mb-2 bg-white text-slate-800 p-3 rounded-xl shadow-xl border border-blue-100 text-sm font-medium"
                        >
                            Hello! How can I help you? <br />
                            <span className="text-blue-600 font-bold">I am Mission Power Land AI</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={() => setShowToast(false)}
                    onClick={() => { setIsOpen(true); setShowToast(false); }}
                    className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl"
                >
                    <Bot size={28} />
                </motion.button>
            </div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-6 right-6 z-[1000] w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Bot size={20} />
                                <span className="font-bold">MPL AI Assistant</span>
                            </div>
                            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white border text-slate-800'}`}>
                                        <ReactMarkdown components={{
                                            p: ({ ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                            a: ({ ...props }) => <Link href={props.href} className="text-blue-500 underline" {...props} />,
                                            h2: ({ ...props }) => <h2 className="font-bold text-md mb-2" {...props} />,
                                            h3: ({ ...props }) => <h3 className="font-bold text-sm mb-1" {...props} />,
                                        }}>
                                            {msg.text}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 border-t bg-white">
                            <div className="flex gap-2">
                                <input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about our projects..."
                                    className="flex-1 p-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                                <button type="submit" className="bg-blue-600 text-white p-2 rounded-xl"><Send size={18} /></button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}