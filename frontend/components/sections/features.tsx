import { ShieldCheck, Zap, HeartHandshake, Laptop, Globe, Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    {
        title: "Performa Tinggi",
        description: "Dibangun dengan teknologi terbaru untuk kecepatan dan efisiensi yang luar biasa.",
        icon: Zap,
    },
    {
        title: "Aman & Terpercaya",
        description: "Standar keamanan tingkat perusahaan untuk menjaga data Anda tetap aman dan terlindungi.",
        icon: ShieldCheck,
    },
    {
        title: "Dukungan Premium",
        description: "Tim dukungan berdedikasi 24/7 siap membantu dengan pertanyaan atau masalah apa pun.",
        icon: HeartHandshake,
    },
    {
        title: "Lintas Platform",
        description: "Bekerja mulus di semua browser dan perangkat modern.",
        icon: Globe,
    },
    {
        title: "Keunggulan Visual",
        description: "Desain yang memukau dengan perhatian pada setiap detail piksel.",
        icon: Laptop,
    },
    {
        title: "Pembaruan Berkala",
        description: "Pembaruan fitur reguler dan peningkatan termasuk dalam pembelian Anda.",
        icon: Gift,
    },
];

export function Features() {
    return (
        <section id="features" className="relative py-24 overflow-hidden bg-slate-950">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-slate-900 z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium border border-primary/20">
                        Mengapa Memilih Kami
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        Dibangun untuk Keunggulan
                    </h2>
                    <p className="max-w-[700px] text-gray-400 md:text-lg">
                        Kami fokus pada kualitas, performa, dan pengalaman pengguna untuk memberikan produk yang menonjol.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-white/5 border-white/10 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:bg-white/10">
                            <CardHeader className="pb-2">
                                <feature.icon className="h-10 w-10 text-purple-400 mb-2" />
                                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
