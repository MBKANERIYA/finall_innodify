"use client";

import { motion } from "framer-motion";
import { 
    CheckCircle2, Users, MessageSquare, ShieldCheck, 
    Smartphone, ArrowRight, Check, Send, 
    Filter, FileText, Settings, Database, Clock
} from "lucide-react";
import Link from "next/link";

function HeroMockup() {
    return (
        <div className="relative w-full max-w-2xl mx-auto lg:ml-auto">
            {/* Background blur elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#25D366]/20 rounded-full blur-3xl -z-10" />
            
            {/* Split Panel Chat Mockup Window */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative z-10 flex h-[400px]"
            >
                {/* Left Panel: Conversation List */}
                <div className="w-1/3 border-r border-gray-100 bg-gray-50 flex flex-col">
                    <div className="p-4 border-b border-gray-100 bg-white">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                            </div>
                            <span className="font-bold text-gray-800 text-sm">Chat Inbox</span>
                        </div>
                        <div className="h-8 bg-gray-100 rounded-lg flex items-center px-3 border border-gray-200">
                            <div className="w-3 h-3 rounded-full bg-gray-300" />
                            <div className="ml-2 w-16 h-1.5 bg-gray-300 rounded-full" />
                        </div>
                    </div>
                    
                    <div className="flex-1 overflow-hidden p-2 space-y-1">
                        {[
                            { name: "Rahul Sharma", msg: "I need details on...", time: "10:42", active: true },
                            { name: "Amit Patel", msg: "Thanks, I will check...", time: "09:15", active: false },
                            { name: "Priya Singh", msg: "Received the docs.", time: "Yesterday", active: false }
                        ].map((conv, i) => (
                            <div key={i} className={`p-3 rounded-xl flex items-start gap-3 cursor-pointer ${conv.active ? 'bg-white shadow-sm border border-gray-200' : 'hover:bg-gray-100 border border-transparent'}`}>
                                <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-semibold text-gray-800 truncate">{conv.name}</span>
                                        <span className="text-[10px] text-[#25D366] font-medium">{conv.time}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 truncate">{conv.msg}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Panel: Chat Thread */}
                <div className="flex-1 flex flex-col bg-[#efeae2]/30">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-100 bg-white flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200" />
                            <div>
                                <h3 className="font-bold text-gray-800 text-sm">Rahul Sharma</h3>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                                    <span className="text-[10px] text-gray-500">24h window active</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">Location: Surat</div>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-4 space-y-4 flex flex-col">
                        <div className="bg-white p-3 rounded-xl rounded-tl-none max-w-[80%] shadow-sm border border-gray-100 self-start">
                            <p className="text-sm text-gray-800">Hi, I received your broadcast about the new software update. Can you send me the pricing details?</p>
                            <span className="text-[10px] text-gray-400 block text-right mt-1">10:40 AM</span>
                        </div>
                        <div className="bg-[#d9fdd3] p-3 rounded-xl rounded-tr-none max-w-[80%] shadow-sm border border-[#25D366]/20 self-end">
                            <p className="text-sm text-gray-800">Hello Rahul! Absolutely, let me share our detailed pricing PDF with you right away.</p>
                            <div className="flex items-center justify-end gap-1 mt-1">
                                <span className="text-[10px] text-[#25D366] font-bold">Read</span>
                                <span className="text-[10px] text-gray-500">10:42 AM</span>
                            </div>
                        </div>
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 bg-[#f0f2f5] flex gap-3 items-center">
                        <div className="flex-1 h-10 bg-white rounded-full px-4 flex items-center border border-gray-200">
                            <span className="text-sm text-gray-400">Type a message...</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
                            <Send className="w-4 h-4 text-white -ml-0.5" />
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -left-6 top-12 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-gray-100"
                >
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                        <Filter className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-800">New Broadcast Sent</p>
                        <p className="text-[10px] text-gray-500">To 450 contacts</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -right-8 bottom-24 bg-gray-900 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                >
                    <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-white">Meta API Connected</p>
                        <p className="text-[10px] text-gray-400">Tenant active</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gray-50">
            <div className="absolute inset-0 bg-white/40" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-200">
                            Home
                            <span className="text-gray-300">/</span>
                            <span>Products</span>
                            <span className="text-gray-300">/</span>
                            <span className="text-gray-800">WhatsApp Broadcast</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#0e1012] leading-[1.1] mb-6">
                            Scale Engagement with <span className="text-[#25D366] italic">Meta API</span> SaaS
                        </h1>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            A multi-tenant platform empowering businesses to connect their own WhatsApp API, send approved broadcasts, and manage a real-time two-way chat inbox with zero message markups.
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4">
                            <Link href="https://broadcast.innodify.in/" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1fae53] text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2 group shadow-lg shadow-[#25D366]/30">
                                Explore Platform
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    <HeroMockup />
                </div>
            </div>
        </section>
    );
}

function SignatureFeaturesSection() {
    const features = [
        {
            title: "Template Broadcast Campaigns",
            desc: "Send Meta-approved templates instantly. No batch limits, no throttling—just select, filter, and blast to your contacts.",
            bullets: ["Filter by Tags & Location", "Delivery Tracking", "Template Sync with Meta"],
            icon: Send,
            color: "green"
        },
        {
            title: "Native 2-Way Inbox",
            desc: "A responsive split-panel messaging UI. Conversations are auto-created when customers reply to your broadcasts.",
            bullets: ["Live 8-second polling", "Contact Auto-matching", "Rich media support"],
            icon: MessageSquare,
            color: "blue"
        },
        {
            title: "24-Hour Rule Enforcement",
            desc: "Stay compliant with Meta policies. The software strictly enables free-form text only within 24h of a customer's message.",
            bullets: ["Visual active window indicator", "Template fallback", "Zero accidental bans"],
            icon: Clock,
            color: "amber"
        },
        {
            title: "Bring Your Own WhatsApp API",
            desc: "Self-service settings mean tenants plug in their own Token, WABA ID, and Phone Number ID to pay Meta directly.",
            bullets: ["Zero per-message markup", "Direct Meta billing", "Instant validation"],
            icon: Settings,
            color: "indigo"
        },
        {
            title: "Smart Contact Filtering",
            desc: "Unified contact CRM without silos. Sort and broadcast based on location, ticket sizes, and custom JSON tags.",
            bullets: ["CSV Bulk Import", "Location & Value filtering", "Tag consolidation"],
            icon: Users,
            color: "purple"
        },
        {
            title: "Rigid Multi-Tenant Isolation",
            desc: "Single scalable domain with JWT-enforced tenant routing. 100% data separation across a unified MySQL 8.0 architecture.",
            bullets: ["Tenant-specific settings", "Role-based auth", "Dynamic slug routing"],
            icon: Database,
            color: "rose"
        }
    ];

    const colorClasses: Record<string, { bg: string, text: string, border: string }> = {
        green: { bg: 'bg-[#25D366]/10', text: 'text-[#25D366]', border: 'border-[#25D366]/20' },
        blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
        amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' },
        indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100' },
        purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
        rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100' },
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012] mb-4">
                        Signature capabilities that redefine <span className="text-[#25D366] font-bold">WhatsApp automation</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Our SaaS handles the complexities of the Meta Cloud API infrastructure so you can focus on building relationships.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50/50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col"
                        >
                            <div className="h-32 bg-white border-b border-gray-100 p-6 flex flex-col justify-end relative overflow-hidden">
                                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-30 ${colorClasses[feat.color].bg} mix-blend-multiply`} />
                                
                                <div className="space-y-2 relative z-10 w-full max-w-[80%]">
                                    <div className="flex gap-1.5 items-center mb-3">
                                        <div className={`w-10 h-10 rounded-xl ${colorClasses[feat.color].bg} flex items-center justify-center`}>
                                            <feat.icon className={`w-5 h-5 ${colorClasses[feat.color].text}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{feat.title}</h3>
                                <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1">
                                    {feat.desc}
                                </p>
                                
                                <ul className="space-y-2 mt-auto">
                                    {feat.bullets.map((b, bi) => (
                                        <li key={bi} className="flex items-start gap-2 text-xs font-medium text-gray-600">
                                            <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProcessUI() {
    return (
        <div className="relative mx-auto w-full max-w-sm">
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                        <Send className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800">2-Step Broadcast Flow</h4>
                        <p className="text-xs text-gray-500">Fast & intuitive campaign launch</p>
                    </div>
                </div>

                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#25D366] shrink-0 shadow-md text-white font-bold z-10">1</div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl shadow-sm border border-gray-100 bg-gray-50 ml-4">
                            <h5 className="font-bold text-sm text-gray-800 mb-1">Filter Contacts</h5>
                            <p className="text-xs text-gray-500">Select audience by tags, location, or ticket size.</p>
                        </div>
                    </div>
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 shrink-0 shadow-md text-white font-bold z-10">2</div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl shadow-sm border border-gray-100 bg-white ml-4">
                            <h5 className="font-bold text-sm text-gray-800 mb-1">Choose Template</h5>
                            <p className="text-xs text-gray-500">Pick a Meta-approved layout and hit send instantly.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-10 right-[-60px] w-48 h-48 bg-[#25D366]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-[-30px] left-[-30px] w-40 h-40 bg-blue-400/20 rounded-full blur-3xl -z-10" />
        </div>
    );
}

function AddonsSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012] mb-6 leading-tight">
                            Effortless workflows designed for <span className="text-[#25D366] font-bold">Marketing Teams</span>
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Stop wasting hours importing lists and manually matching templates. Our 2-step broadcast flow handles everything securely, without deduplicating needs or restrictive batch limits.
                        </p>
                        <Link href="https://broadcast.innodify.in/" target="_blank" rel="noopener noreferrer" className="bg-[#0e1012] hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block w-fit shadow-md">
                            Experience the Workflow
                        </Link>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="py-10"
                    >
                        <ProcessUI />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function DarkBannerCTA() {
    return (
        <section className="bg-[#0a0a14] py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[200px] rounded-[100%] bg-[#25D366]/10 blur-[80px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
                    Broadcast. Engage. <span className="text-[#25D366] font-serif italic">Convert.</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                    Build pipelines on WhatsApp. Directly pay Meta for usage. <br className="hidden sm:block" />
                    Secure, highly available, and deeply integrated.
                </p>
                <Link href="https://broadcast.innodify.in/" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1fae53] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)]">
                    Get Started Now
                </Link>
            </div>
        </section>
    );
}

function AdvantagesSection() {
    const advantages = [
        {
            title: "Zero Middleman Markup",
            desc: "By plugging your own WABA ID and Token into our tenant settings, you pay Meta exactly what they charge. No hidden messaging markup fees.",
            icon: ShieldCheck
        },
        {
            title: "Compliance Built-In",
            desc: "The 24-hour service window is hardcoded into the architecture. Prevent account bans automatically by enforcing template fallbacks.",
            icon: Clock
        },
        {
            title: "Full Data Ownership",
            desc: "All contacts, campaign history, and chats remain in isolated multi-tenant databases. Your data is never blended or resold.",
            icon: Database
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012] mb-4 leading-tight">
                        The <span className="text-[#25D366] font-bold">Bring Your Own API</span> advantage
                    </h2>
                    <p className="text-gray-500">
                        Take full control of your infrastructure costs and security.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {advantages.map((adv, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-6">
                                <adv.icon className="w-7 h-7 text-[#25D366]" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">{adv.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {adv.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function WhatsAppProductContent() {
    return (
        <div className="bg-white">
            <HeroSection />
            <SignatureFeaturesSection />
            <AddonsSection />
            <DarkBannerCTA />
            <AdvantagesSection />
        </div>
    );
}
