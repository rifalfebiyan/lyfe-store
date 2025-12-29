"use client";

import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";

export function PromoBanner() {
    return (
        <section className="py-12 bg-black border-t border-white/10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 via-purple-900/20 to-pink-900/20 animate-pulse" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center space-y-6 rounded-2xl border border-pink-500/30 bg-gradient-to-br from-pink-950/50 to-purple-950/50 p-8 md:p-12 backdrop-blur-sm shadow-[0_0_50px_-10px_rgba(236,72,153,0.3)]"
                >
                    <div className="flex items-center justify-center gap-2 text-pink-400 mb-2">
                        <Sparkles className="h-6 w-6 animate-spin-slow" />
                        <span className="font-bold tracking-widest text-sm uppercase">Limited Time Offer</span>
                        <Sparkles className="h-6 w-6 animate-spin-slow" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow-sm">
                        ✨ SPECIAL PROMO JUST FOR YOU! ✨
                    </h2>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 mx-auto max-w-2xl transform hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                            <div className="h-16 w-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shrink-0">
                                <Gift className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">
                                    🌸 FREE 1 BULAN CANVA
                                </h3>
                                <p className="text-gray-300 text-lg">
                                    Kalau beli <span className="font-bold text-pink-400">3 Apps Sekaligus!</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
