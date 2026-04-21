"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Loader2, Bell } from "lucide-react";
import Link from "next/link";

export default function ECommerceComingSoonContent() {
    return (
        <div className="min-h-screen bg-[#0e1012] flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
                            <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20 relative border border-white/10">
                                <ShoppingBag className="w-10 h-10 text-white" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full border border-white/10 flex items-center justify-center shadow-xl">
                                    <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            In Active Development
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                            Building something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic">extraordinary</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We are crafting an enterprise-grade E-Commerce ecosystem designed for unprecedented scale, conversion, and seamless user experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link 
                            href="/" 
                            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-full font-bold transition-colors flex items-center justify-center gap-2"
                        >
                            Return Home
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link 
                            href="/contact" 
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-full font-bold transition-colors flex items-center justify-center gap-2"
                        >
                            <Bell className="w-5 h-5" />
                            Notify Me
                        </Link>
                    </motion.div>
                </div>
            </div>
            
            {/* Bottom details */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center">
                <p className="text-sm text-gray-600 font-medium font-mono">
                    System Architecture Formulation 94%
                </p>
                <div className="w-48 h-1 bg-white/10 mx-auto mt-3 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "94%" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    />
                </div>
            </div>
        </div>
    );
}
