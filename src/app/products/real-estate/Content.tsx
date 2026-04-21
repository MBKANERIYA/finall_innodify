"use client";

import { motion } from "framer-motion";
import { 
    CheckCircle2, Users, Database, Webhook, ArrowRight, Check, 
    Building2, MapPin, Key, Warehouse, FileKey, ShieldCheck, TrendingUp
} from "lucide-react";
import Link from "next/link";

function HeroMockup() {
    return (
        <div className="relative w-full max-w-2xl mx-auto lg:ml-auto">
            {/* Background blur elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-500/10 rounded-full blur-3xl -z-10" />
            
            {/* Main Application Window */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 sm:p-6 relative z-10"
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center shadow-md">
                            <Building2 className="w-4 h-4 text-amber-500" />
                        </div>
                        <span className="font-serif font-semibold text-slate-800">Admin CRM</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            Syncing Active
                        </div>
                    </div>
                </div>

                {/* Dashboard Search/Filters */}
                <div className="flex gap-3 mb-6">
                    <div className="flex-1 h-10 bg-slate-50 rounded-lg flex items-center px-4 border border-slate-200">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <div className="ml-3 w-32 h-2 bg-slate-200 rounded-full" />
                    </div>
                    <div className="w-32 h-10 bg-amber-50 rounded-lg flex items-center justify-center border border-amber-200">
                        <span className="text-xs font-semibold text-amber-700">Category: Ind. Plot</span>
                    </div>
                </div>

                {/* Property Listing Grid Mockup */}
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { title: "GIDC Industrial Plot", id: "EXT-8492", badge: "Warehouse", img: "bg-slate-200", p: "₹12 Cr" },
                        { title: "Commercial Shop", id: "EXT-9211", badge: "Featured", img: "bg-slate-100", p: "₹45 Lac" }
                    ].map((prop, i) => (
                        <div key={i} className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
                            <div className={`h-24 ${prop.img} relative flex items-center justify-center`}>
                                <Warehouse className="w-8 h-8 text-slate-300" />
                                <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 rounded text-[9px] font-bold text-slate-800 shadow-sm">
                                    {prop.badge}
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xs font-bold text-slate-800 truncate pr-2">{prop.title}</h4>
                                    <span className="text-xs font-bold text-amber-600">{prop.p}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mb-3">
                                    <FileKey className="w-3 h-3" /> ID: {prop.id}
                                </div>
                                <div className="h-6 w-full rounded-md border border-slate-200 bg-slate-50 flex items-center justify-center gap-1">
                                    <span className="text-[10px] font-semibold text-slate-600">Active</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating Webhook Sync Element */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -right-8 top-1/3 bg-slate-900 p-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-800"
                >
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Webhook className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white tracking-wide">POST /webhook</p>
                        <p className="text-[10px] text-slate-400">Syncing to Broker CRM</p>
                    </div>
                </motion.div>
                
            </motion.div>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
            <div className="absolute inset-0 bg-white/40" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 mb-6 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
                            Home
                            <span className="text-slate-300">/</span>
                            <span>Products</span>
                            <span className="text-slate-300">/</span>
                            <span className="text-slate-800">Real Estate Platform</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.1] mb-6">
                            Next-Gen <span className="text-amber-600 italic">PropTech</span> Web Platform
                        </h1>
                        
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            High-performance public storefronts connected seamlessly to internal broker CRMs through event-driven webhooks. Built specifically for complex Commercial & Industrial real estate.
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4">
                            <Link href="https://mahalaxmiassociates.in/" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2 group shadow-xl shadow-slate-900/20">
                                View Live Platform
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
            title: "Dynamic Schema Engine",
            desc: "Beyond beds and baths. Define complex fields for Warehouses (truss capacity, dock levellers) and Industrial Plots.",
            bullets: ["Category-specific traits", "Zoning & NOC tracking", "Dynamic UI rendering"],
            icon: Warehouse,
            color: "amber"
        },
        {
            title: "Broker CRM Sync Webhooks",
            desc: "Prevent double data entry. Every POST, PUT, and DELETE on the CMS automatically fires securely to your internal sales tools.",
            bullets: ["Event-driven sync", "JWT verification", "Real-time updates"],
            icon: Webhook,
            color: "slate"
        },
        {
            title: "Algorithmic Discovery",
            desc: "Mathematical price parsing bridges '1 Cr' text logic into numeric filters, enabling complex front-end search capabilities.",
            bullets: ["Smart string parsing", "Multi-range filtering", "Instant Next.js response"],
            icon: Key,
            color: "emerald"
        },
        {
            title: "Lifecycle Command Center",
            desc: "JWT rate-limited admin interface to control listing availability. Toggle 'Active/Inactive' or boost properties to 'Featured'.",
            bullets: ["Soft-delete architecture", "Featured tagging", "Secure authentication"],
            icon: ShieldCheck,
            color: "indigo"
        },
        {
            title: "SEO-First Architecture",
            desc: "Server-side rendered (SSR) pages with automatically generated contextual slugs based on Title + Location logic.",
            bullets: ["Next.js 16 App Router", "Canonical URL handling", "JSON-LD schema ready"],
            icon: TrendingUp,
            color: "blue"
        },
        {
            title: "Cloud Media Engine",
            desc: "Flawless media processing via Cloudinary integrations. High-res imagery scaled dynamically to preserve lighthouse scores.",
            bullets: ["On-the-fly resizing", "Optimized WebP delivery", "Lazy-loading grids"],
            icon: Database,
            color: "rose"
        }
    ];

    const colorClasses: Record<string, { bg: string, text: string, border: string }> = {
        amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' },
        slate: { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200' },
        emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
        indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100' },
        blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
        rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100' },
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
                        Architected for <span className="text-amber-600 font-bold italic">Commercial Real Estate</span>
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Standard residential scripts fail in commercial domains. We built a data-heavy structure designed for scale.
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
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            <div className="p-8 flex-1 flex flex-col relative overflow-hidden">
                                <div className={`absolute -right-6 -top-6 w-32 h-32 rounded-full opacity-30 ${colorClasses[feat.color].bg}`} />
                                
                                <div className={`w-12 h-12 rounded-xl ${colorClasses[feat.color].bg} flex items-center justify-center mb-6 relative z-10`}>
                                    <feat.icon className={`w-6 h-6 ${colorClasses[feat.color].text}`} />
                                </div>
                                
                                <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">{feat.title}</h3>
                                <p className="text-sm text-slate-600 mb-8 leading-relaxed flex-1 relative z-10">
                                    {feat.desc}
                                </p>
                                
                                <ul className="space-y-3 mt-auto border-t border-slate-100 pt-6 relative z-10">
                                    {feat.bullets.map((b, bi) => (
                                        <li key={bi} className="flex items-center gap-3 text-xs font-semibold text-slate-700">
                                            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-slate-800" />
                                            </div>
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

function IndustrialFocusSection() {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                            Dynamic Schemas
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 leading-tight">
                            Built deeply for <span className="text-amber-600 italic">Warehouses</span> and Industrial constraints
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                            Commercial real estate buyers don't just care about square footage. They need to know roof truss capacities, zoning approvals, fire NOC statuses, and floor loading metrics. Our platform parses these metrics natively.
                        </p>
                        <Link href="https://mahalaxmiassociates.in/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-amber-600 font-bold flex items-center gap-2 group transition-colors">
                            Explore the public storefront
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-slate-200/50 rounded-3xl translate-x-4 translate-y-4" />
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative z-10 flex flex-col gap-4">
                            <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-3 mb-2 flex items-center gap-2">
                                <Warehouse className="w-5 h-5 text-amber-600" />
                                Category: Warehouse
                            </h3>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                                    <span className="text-slate-500 font-medium">Clear Height</span>
                                    <span className="font-bold text-slate-800">12 Meters</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                                    <span className="text-slate-500 font-medium">Truss Capacity</span>
                                    <span className="font-bold text-slate-800">5 Tons</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                                    <span className="text-slate-500 font-medium">Dock Levellers</span>
                                    <span className="font-bold text-slate-800">4 Bays</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                                    <span className="text-slate-500 font-medium">Zoning</span>
                                    <span className="font-bold text-slate-800 inline-flex px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px]">Commercial Approved</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function DarkBannerCTA() {
    return (
        <section className="bg-slate-900 py-24 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-600/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-slate-800 to-transparent" />
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
                    List. Discover. <span className="text-amber-500 italic">Close.</span>
                </h2>
                <p className="text-slate-300 max-w-xl mx-auto mb-10 text-lg">
                    Modern Next.js infrastructure paired with robust CRM webhooks. Ensure data flows effortlessly from the public site straight to your sales team.
                </p>
                <Link href="https://mahalaxmiassociates.in/" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(245,158,11,0.2)] hover:shadow-[0_0_60px_rgba(245,158,11,0.4)]">
                    View Live Operations
                </Link>
            </div>
        </section>
    );
}

function AdvantagesSection() {
    const advantages = [
        {
            title: "Eliminate Double Entry",
            desc: "Admins add a property once into the CMS. The integrated webhook pushes the object straight to internal ERPs.",
            icon: Key
        },
        {
            title: "Performance & Speed",
            desc: "Next.js 16 leverages server-side components for instant, cached delivery of heavy property image galleries.",
            icon: TrendingUp
        },
        {
            title: "Bulletproof Security",
            desc: "Stateless JWT authentication handles login validation and routes, while strict rate-limiting protects CRM endpoints.",
            icon: ShieldCheck
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4 leading-tight">
                        The tech advantages of an <span className="text-amber-600 italic">independent CRM</span>
                    </h2>
                    <p className="text-slate-500">
                        Stop renting generic platforms. Own your data pipeline.
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
                            className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-colors"
                        >
                            <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                                <adv.icon className="w-6 h-6 text-slate-800" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{adv.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {adv.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function RealEstateContent() {
    return (
        <div className="bg-white">
            <HeroSection />
            <SignatureFeaturesSection />
            <IndustrialFocusSection />
            <DarkBannerCTA />
            <AdvantagesSection />
        </div>
    );
}
