"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2, MessageCircle } from "lucide-react";
import { useState } from "react";

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

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground">
            <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Package2 className="h-6 w-6" />
                    <span className="hidden font-bold sm:inline-block">
                        LyfeStore
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === route.href ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            {route.label}
                        </Link>
                    ))}
                </nav>
                <div className="ml-auto flex items-center gap-2">
                    <Link href="https://wa.me/62882003667531?text=Halo%20LyfeStore%2C%20saya%20ingin%20bertanya" target="_blank">
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            WhatsApp
                        </Button>
                    </Link>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-4 mt-8">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className="text-lg font-medium transition-colors hover:text-primary"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                                <div className="flex flex-col gap-2 mt-4">
                                    <Link href="https://wa.me/62882003667531?text=Halo%20LyfeStore%2C%20saya%20ingin%20bertanya" target="_blank" onClick={() => setIsOpen(false)}>
                                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                                            <MessageCircle className="mr-2 h-4 w-4" />
                                            Hubungi Kami Via WhatsApp
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
