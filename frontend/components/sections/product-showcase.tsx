import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { ProductDetailsDialog } from "@/components/sections/product-details";

const products = [
    {
        id: 1,
        title: "CapCut Pro",
        description: "Aplikasi CapCut Pro untuk editing video dengan dengan semua fitur premium.",
        price: "Rp 12.000 - Rp 18.500",
        rating: 4.8,
        image: "/CAPCUT.png",
        badge: "Baru",
    },
    {
        id: 2,
        title: "Canva Premium",
        description: "Pamerkan karya kreatif Anda dengan gaya.",
        price: "Rp 3.000 - Rp 18.000",
        rating: 4.9,
        image: "/CANVA.png",
        badge: "Terlaris",
    },
    {
        id: 3,
        title: "Netflix Premium",
        description: "Menonton film dan TV favorit Anda dengan kualitas terbaik.",
        price: "Rp 4.000 - Rp 37.000",
        rating: 4.7,
        image: "/NETFLIX.png",
        badge: null,
    },
    {
        id: 4,
        title: "VIU Premium",
        description: "Menonton film dan TV favorit Anda dengan kualitas terbaik.",
        price: "Rp 8.500 - Rp 20.000",
        rating: 4.6,
        image: "/VIU.png",
        badge: null,
    },
    {
        id: 5,
        title: "BStation Premium",
        description: "Menonton film dan TV favorit Anda dengan kualitas terbaik.",
        price: "Rp 15.000 - Rp 23.000",
        rating: 4.9,
        image: "/BStation.png",
        badge: "Terlatis Animelovers",
    },
    {
        id: 6,
        title: "WE TV Premium",
        description: "Menonton film dan TV favorit Anda dengan kualitas terbaik.",
        price: "Rp 15.000 - Rp 37.000",
        rating: 4.8,
        image: "/WETV.png",
        badge: null,
    },
    {
        id: 7,
        title: "I QIYI Premium",
        description: "Menonton film dan TV favorit Anda dengan kualitas terbaik.",
        price: "Rp 15.000 - Rp 23.000",
        rating: 4.8,
        image: "/QIYI.png",
        badge: null,
    },
];

export function ProductShowcase() {
    return (
        <section id="products" className="relative py-24 overflow-hidden bg-black">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-black to-black z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                        Koleksi Premium
                    </h2>
                    <p className="max-w-[700px] text-gray-400 md:text-lg">
                        Jelajahi pilihan aplikasi tingkat atas kami yang dipilih langsung.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <Card key={product.id} className="group overflow-hidden flex flex-col h-full border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:shadow-emerald-500/20 hover:shadow-xl hover:-translate-y-1">
                            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {product.badge && (
                                    <Badge className="absolute top-3 right-3 bg-emerald-600 hover:bg-emerald-700">{product.badge}</Badge>
                                )}
                            </div>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-lg text-white group-hover:text-emerald-400 transition-colors">{product.title}</CardTitle>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                        <Star className="h-4 w-4 fill-current" />
                                        <span>{product.rating}</span>
                                    </div>
                                </div>
                                <CardDescription className="text-gray-400">{product.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="mt-auto pt-0">
                                <p className="text-xl font-bold text-white">{product.price}</p>
                            </CardContent>
                            <CardFooter className="pt-0">
                                <ProductDetailsDialog product={product} />
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
