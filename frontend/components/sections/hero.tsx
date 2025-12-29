"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-16 bg-black">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-500/20 blur-[120px] animate-pulse" />
                <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-red-500/20 blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto max-w-4xl space-y-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring" }}
                        className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/10 px-4 py-1.5 text-xs font-bold text-red-400 shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)] mb-4"
                    >
                        <Sparkles className="h-3 w-3 fill-current animate-pulse" />
                        <span>PENWARAN TERBATAS: 48 JAM!</span>
                    </motion.div>

                    <h1 className="text-3xl font-black tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-sm leading-tight">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="block"
                        >
                            PROMO AKHIR TAHUN
                        </motion.span>
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-gradient-x"
                            style={{ backgroundSize: "200% 200%" }}
                        >
                            2026 LYFESTORE
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mx-auto max-w-[600px] text-gray-300 md:text-lg font-light leading-relaxed"
                    >
                        Diskon gila-gilaan Akhir Tahun <span className="font-bold text-white"></span>. Ayo Berlangganan!.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", bounce: 0.4 }}
                    className="mt-6 group"
                >
                    <Link href="#products">
                        <Button size="lg" className="h-10 px-6 text-sm font-bold bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-[0_0_20px_-5px_rgba(220,38,38,0.7)] group-hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.9)] transition-all duration-300 transform group-hover:scale-105 border-0 rounded-full">
                            AMBIL PROMO
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <p className="mt-2 text-[10px] text-gray-500">
                        *Garansi 30 hari.
                    </p>
                </motion.div>
            </div>

            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0 pointer-events-none" />
        </section>
    );
}
