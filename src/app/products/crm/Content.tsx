"use client";

import { motion } from "framer-motion";
import { 
    CheckCircle2, Users, MessageSquare, Database, Webhook, 
    BarChart3, LayoutDashboard, ArrowRight, Check,
    ShieldCheck, Clock, TrendingUp, Smartphone, Settings
} from "lucide-react";
import Link from "next/link";

// Retyn style UI Mockup components
function HeroMockup() {
    return (
        <div className="relative w-full max-w-2xl mx-auto lg:ml-auto">
            {/* Background blur elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/40 rounded-full blur-3xl -z-10" />
            
            {/* Main Application Window */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-6 relative z-10"
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                            <LayoutDashboard className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-semibold text-gray-800">Kliently</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100" />
                        <div className="w-8 h-8 rounded-full bg-indigo-100" />
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    {/* Left Sidebar Mock */}
                    <div className="col-span-4 space-y-4">
                        <div className="h-24 bg-gray-50 rounded-xl p-4 flex flex-col justify-between border border-gray-100">
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500 font-medium">TOTAL REVENUE</span>
                                <span className="text-[10px] text-green-500 bg-green-50 px-1.5 py-0.5 rounded font-medium">+12.5%</span>
                            </div>
                            <span className="text-xl font-bold text-gray-800">₹1,24,500</span>
                        </div>
                        <div className="h-24 bg-gray-50 rounded-xl p-4 flex flex-col justify-between border border-gray-100">
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500 font-medium">CONVERSION RATE</span>
                            </div>
                            <div className="flex items-end gap-2">
                                {[40, 70, 45, 90, 60].map((h, i) => (
                                    <div key={i} className="w-4 bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }}>
                                        {h === 90 && <div className="w-full h-full bg-primary rounded-t-sm" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area Mock */}
                    <div className="col-span-8 space-y-4">
                        {/* Search / Filter bar */}
                        <div className="flex gap-2">
                            <div className="flex-1 h-10 bg-gray-50 rounded-lg flex items-center px-3 border border-gray-100">
                                <div className="w-4 h-4 rounded-full bg-gray-200" />
                                <div className="ml-2 w-24 h-2 bg-gray-200 rounded-full" />
                            </div>
                            <div className="w-20 h-10 bg-green-50 rounded-lg flex items-center justify-center border border-green-100">
                                <span className="text-xs font-semibold text-green-600">Export</span>
                            </div>
                        </div>

                        {/* List Items */}
                        <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`flex items-center justify-between p-3 rounded-lg border ${i === 1 ? 'border-primary/20 bg-primary/5' : 'border-gray-100 bg-white'}`}>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 1 ? 'bg-primary/20' : 'bg-gray-100'}`}>
                                            <Users className={`w-4 h-4 ${i === 1 ? 'text-primary' : 'text-gray-400'}`} />
                                        </div>
                                        <div>
                                            <div className={`h-2 w-20 rounded-full mb-1.5 ${i === 1 ? 'bg-gray-800' : 'bg-gray-300'}`} />
                                            <div className="h-1.5 w-12 bg-gray-200 rounded-full" />
                                        </div>
                                    </div>
                                    <div className={`h-6 w-16 rounded-full flex items-center justify-center ${i === 1 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                                        <span className="text-[10px] font-semibold">{i === 1 ? 'Converted' : 'Follow up'}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Floating Elements mimicking Retyn style */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-gray-100"
                >
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-800 text-nowrap">WhatsApp Chat</p>
                        <p className="text-[10px] text-gray-500">2 min ago</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -right-8 bottom-12 bg-gray-900 px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2"
                >
                    <Webhook className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-white">Webhook Received</span>
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
                            <span className="text-gray-800">Kliently CRM SaaS</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#0e1012] leading-[1.1] mb-6">
                            Kliently Business Growth Platform for <span className="text-primary italic">Every Industry</span>
                        </h1>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Consolidated Growth Platform established to automatically manage daily operations, team performance, and lead flow in a fraction of the time with a single SaaS application.
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4">
                            <Link href="https://kliently.in/" target="_blank" rel="noopener noreferrer" className="bg-[#0e1012] hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2 group shadow-lg shadow-gray-900/20">
                                Explore Kliently
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
            title: "Automated Lead Capture",
            desc: "Universal webhook system, CSV imports, and embeddable forms ensure you never miss a lead.",
            bullets: ["Zero-drop webhook routing", "Field mapping engine", "Automatic deduplication"],
            icon: Webhook,
            color: "blue"
        },
        {
            title: "WhatsApp 2-Way Inbox",
            desc: "Direct integration with Meta API for seamless 1:1 chats, broadcasts, and template messaging.",
            bullets: ["24h window enforcement", "Template approval sync", "Conversation linking"],
            icon: MessageSquare,
            color: "green"
        },
        {
            title: "Multi-Tenant Customization",
            desc: "Fully isolated, database-driven custom fields tailored for real estate, healthcare, IT, and more.",
            bullets: ["Tenant-specific picklists", "Reserved field protection", "Dynamic form rendering"],
            icon: Settings,
            color: "purple"
        },
        {
            title: "Sales Pipeline & Funnels",
            desc: "Visualize your entire data flow with comprehensive reporting, conversion rates, and ROI metrics.",
            bullets: ["Source ROI calculation", "Historical data charts", "Exportable PDF reports"],
            icon: BarChart3,
            color: "amber"
        },
        {
            title: "Smart Automation Rules",
            desc: "Focus on closing while the system handles round-robin assignments and stale reminders.",
            bullets: ["Round-robin routing", "Stale lead alerts", "Follow-up scheduling"],
            icon: ShieldCheck,
            color: "rose"
        },
        {
            title: "Enterprise Grade Security",
            desc: "Role-based access controls, rigid multi-tenant isolation, and secure SaaS billing architectures.",
            bullets: ["Strict tenant isolation", "Login activity audit", "Agent vs Manager roles"],
            icon: Database,
            color: "indigo"
        }
    ];

    const colorClasses: Record<string, { bg: string, text: string, border: string }> = {
        blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
        green: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
        purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
        amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' },
        rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100' },
        indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100' },
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012] mb-4">
                        Signature <span className="text-primary font-bold">features to accelerate</span> growth for your business
                    </h2>
                    <p className="text-gray-500">
                        A premium unified tool inside Kliently SaaS enabling you to scale your tech stack with complete peace of mind.
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
                            {/* Visual Header representing UI mockup style */}
                            <div className="h-32 bg-white border-b border-gray-100 p-6 flex flex-col justify-end relative overflow-hidden">
                                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-20 ${colorClasses[feat.color].bg} mix-blend-multiply`} />
                                
                                <div className="space-y-2 relative z-10 w-full max-w-[80%]">
                                    <div className="flex gap-1.5 items-center mb-3">
                                        <div className={`w-8 h-8 rounded-lg ${colorClasses[feat.color].bg} flex items-center justify-center`}>
                                            <feat.icon className={`w-4 h-4 ${colorClasses[feat.color].text}`} />
                                        </div>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full w-full" />
                                    <div className="h-2 bg-gray-100 rounded-full w-2/3" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{feat.title}</h3>
                                <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1">
                                    {feat.desc}
                                </p>
                                
                                <ul className="space-y-2 mt-auto">
                                    {feat.bullets.map((b, bi) => (
                                        <li key={bi} className="flex items-start gap-2 text-xs font-medium text-gray-600">
                                            <Check className="w-4 h-4 text-green-500 shrink-0" />
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

function MobileAppUI() {
    return (
        <div className="relative mx-auto w-full max-w-[280px]">
            {/* Phone Frame */}
            <div className="relative z-10 bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800">
                <div className="bg-white rounded-[2rem] overflow-hidden h-[560px] relative">
                    {/* Notch */}
                    <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-1/2 mx-auto z-20" />
                    
                    {/* App Content */}
                    <div className="bg-[#00adef] text-white p-6 pt-10 pb-8">
                        <p className="text-sm opacity-80 font-medium">Hello, Sanjeev</p>
                        <h3 className="text-2xl font-bold mt-1">Lead Dashboard</h3>
                    </div>
                    
                    <div className="p-4 space-y-4 -mt-4 relative z-10 bg-white rounded-t-2xl">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                <p className="text-[10px] text-gray-400 font-bold mb-1">TOTAL LEADS</p>
                                <p className="text-xl font-bold text-gray-800">1,248</p>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                                <p className="text-[10px] text-blue-400 font-bold mb-1">CONVERSIONS</p>
                                <p className="text-xl font-bold text-blue-700">14%</p>
                            </div>
                        </div>

                        <div className="space-y-3 pt-2">
                            <p className="text-xs font-bold text-gray-400">RECENT ACTIVITY</p>
                            {[
                                { name: "Aditi S.", action: "Replied via WhatsApp", time: "2m ago", color: "green" },
                                { name: "Rahul M.", action: "Submitted Form", time: "1h ago", color: "blue" },
                                { name: "Suresh P.", action: "Follow-up due", time: "2h ago", color: "orange" }
                            ].map((act, i) => (
                                <div key={i} className="flex gap-3 items-center p-3 rounded-xl border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                        <Users className="w-4 h-4 text-gray-500" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-800">{act.name}</p>
                                        <p className="text-[10px] text-gray-500">{act.action}</p>
                                    </div>
                                    <span className="text-[9px] text-gray-400">{act.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Bottom nav */}
                    <div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-gray-100 flex items-center justify-around px-4">
                        <LayoutDashboard className="w-5 h-5 text-primary" />
                        <Users className="w-5 h-5 text-gray-400" />
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center -mt-6 shadow-lg shadow-primary/40 border-4 border-white">
                            <span className="text-white text-xl font-bold leading-none">+</span>
                        </div>
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                        <Settings className="w-5 h-5 text-gray-400" />
                    </div>
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-20 right-[-100px] w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-10 left-[-80px] w-40 h-40 bg-teal-400/20 rounded-full blur-3xl -z-10" />
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
                            Add-on <span className="text-primary font-bold">features to improve</span> the performance of your business processes
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Upgrade your Kliently experience with powerful addons like Google Calendar sync, Razorpay seat-based billing management, and browser push notifications to keep your team aligned.
                        </p>
                        <Link href="https://kliently.in/" target="_blank" rel="noopener noreferrer" className="bg-[#0e1012] hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block w-fit shadow-md">
                            Explore full capabilities
                        </Link>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="py-10"
                    >
                        <MobileAppUI />
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[200px] rounded-[100%] bg-primary/10 blur-[80px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
                    Strategize. Expand. <span className="text-[#00adef] font-serif italic">Succeed.</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                    Discover opportunities & expand through Kliently SaaS.<br className="hidden sm:block" />
                    Secure, highly available, and industry-agnostic.
                </p>
                <Link href="https://kliently.in/" target="_blank" rel="noopener noreferrer" className="bg-[#00adef] hover:bg-[#0095d0] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(0,173,239,0.4)] hover:shadow-[0_0_60px_rgba(0,173,239,0.6)]">
                    Book a demo
                </Link>
            </div>
        </section>
    );
}

function AdvantagesSection() {
    const advantages = [
        {
            title: "Improve productivity",
            desc: "Focus on closing deals by letting automation handle repetitive tasks, assignments, and follow-ups securely.",
            icon: TrendingUp
        },
        {
            title: "Reduce communication gaps",
            desc: "Omnichannel integration, push notifications, and Google Calendar sync keep your team and clients aligned.",
            icon: Users
        },
        {
            title: "High security & availability",
            desc: "Strict multi-tenant DB isolation, encrypted credentials, PM2 process management, and session-based auth.",
            icon: ShieldCheck
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012] mb-4 leading-tight">
                        Experience the <span className="text-primary font-bold">advantages of using Kliently</span><br/> for your ongoing business
                    </h2>
                    <p className="text-gray-500">
                        Reliable tool. Simple architecture. Industry-agnostic foundation.
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
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                <adv.icon className="w-6 h-6 text-primary" />
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

function GrowthSection() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012] mb-6">
                            How <span className="text-primary font-bold">Kliently helps</span><br/> you grow?
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We've eliminated technical overhead so you can focus on building relationships. Our SaaS platform handles the heavy lifting of multi-tenancy, webhook parsers, and external APIs.
                        </p>
                        
                        <div className="space-y-4 mb-8">
                            {[
                                "Zero-code Custom Fields & Picklists",
                                "Native Meta API Integration for WhatsApp",
                                "Self-serve Landing Pages & Capture Forms",
                                "Dynamic Lead Form Generation"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <span className="font-medium text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="https://kliently.in/" target="_blank" rel="noopener noreferrer" className="bg-[#0e1012] hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-colors inline-block w-fit">
                            Request Demo
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-sky-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl" />
                        
                        <div className="text-center z-10 relative mb-12">
                            <h3 className="font-bold text-gray-800 mb-2">Kliently Webhook Architecture</h3>
                            <p className="text-sm text-gray-500 max-w-xs mx-auto">
                                Universal routing connects your lead sources securely into completely dynamic lead profiles.
                            </p>
                        </div>
                        
                        <div className="relative mx-auto w-48 h-48 bg-primary rounded-3xl shadow-xl shadow-primary/30 flex items-center justify-center z-10 border-4 border-white">
                            <Webhook className="w-20 h-20 text-white" />
                            
                            {/* Animated dots connecting to it */}
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute -left-12 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-teal-400" 
                            />
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                                className="absolute -right-12 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400" 
                            />
                            
                            <p className="absolute bottom-4 text-white/80 text-xs font-semibold">Automatic Matching</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default function CRMProductContent() {
    return (
        <div className="bg-white">
            <HeroSection />
            <SignatureFeaturesSection />
            <AddonsSection />
            <DarkBannerCTA />
            <AdvantagesSection />
            <GrowthSection />
        </div>
    );
}
