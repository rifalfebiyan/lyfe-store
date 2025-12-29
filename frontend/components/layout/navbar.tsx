"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2, MessageCircle, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const routes = [
    {
        href: "/",
        label: "Beranda",
    },
    {
        href: "#products",
        label: "Produk",
    },
    {
        href: "#features",
        label: "Fitur",
    },
    {
        href: "#testimonials",
        label: "Testimoni",
    },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="sticky top-0 z-50 w-full transition-all duration-300 border-b border-white/10 bg-black/50 backdrop-blur-md"
        >
            <div className="container mx-auto flex h-16 items-center px-4 md:px-6 justify-between">
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="bg-gradient-to-tr from-emerald-500 to-cyan-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
                        <Package2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold sm:inline-block text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors hidden">
                        LyfeStore
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "relative transition-colors hover:text-emerald-400",
                                pathname === route.href ? "text-white" : "text-gray-400"
                            )}
                        >
                            {route.label}
                            {pathname === route.href && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-4">
                    <Link href="https://wa.me/62882003667531?text=Halo%20LyfeStore%2C%20saya%20ingin%20bertanya" target="_blank">
                        <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full px-3 sm:px-6 font-semibold transition-all hover:scale-105 hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)] h-9 sm:h-10 text-xs sm:text-sm">
                            <MessageCircle className="mr-0 sm:mr-2 h-4 w-4 text-emerald-400" />
                            <span className="hidden sm:inline">Hubungi Kami</span>
                            <span className="sm:hidden">WhatsApp</span>
                        </Button>
                    </Link>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-black/95 border-l border-white/10 text-white w-[300px] sm:w-[400px] p-0">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-full h-[500px] bg-emerald-500/10 blur-[100px] pointer-events-none" />

                            <div className="flex flex-col h-full relative z-10 p-6">
                                <div className="flex items-center space-x-2 mb-10 mt-2">
                                    <div className="bg-gradient-to-tr from-emerald-500 to-cyan-500 p-2 rounded-xl shadow-lg shadow-emerald-500/20">
                                        <Package2 className="h-6 w-6 text-white" />
                                    </div>
                                    <span className="font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">LyfeStore</span>
                                </div>

                                <div className="flex flex-col gap-2">
                                    {routes.map((route) => (
                                        <Link
                                            key={route.href}
                                            href={route.href}
                                            className={cn(
                                                "text-lg font-medium transition-all p-4 rounded-xl flex items-center justify-between group",
                                                pathname === route.href
                                                    ? "bg-white/10 text-white"
                                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {route.label}
                                            <span className={cn(
                                                "block w-2 h-2 rounded-full transition-all group-hover:scale-150",
                                                pathname === route.href
                                                    ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                                                    : "bg-white/10 group-hover:bg-emerald-400"
                                            )} />
                                        </Link>
                                    ))}
                                </div>

                                <div className="mt-auto border-t border-white/10 pt-6">
                                    <p className="text-gray-500 text-xs text-center mb-4">
                                        © 2026 LyfeStore Inc.
                                    </p>
                                    {/* Additional footer content or socials could go here */}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
