import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
    {
        name: "Alex Johnson",
        role: "Manajer Produk",
        comment: "LyfeStore telah benar-benar mengubah cara tim kami menemukan dan menggunakan alat. Kualitas premiumnya tak tertandingi.",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
        initials: "AJ",
    },
    {
        name: "Sarah Williams",
        role: "Desainer Freelance",
        comment: "Estetika visual aplikasi di sini luar biasa. Sebagai desainer, saya menghargai perhatian terhadap detail.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        initials: "SW",
    },
    {
        name: "Michael Chen",
        role: "Pendiri Startup",
        comment: "Efisien, andal, dan sepadan dengan harganya. Dukungannya juga terbaik. Sangat direkomendasikan!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        initials: "MC",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24 overflow-hidden bg-slate-950">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-slate-950 to-slate-950 z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">
                        Dicintai oleh Para Ahli
                    </h2>
                    <p className="max-w-[700px] text-gray-400 md:text-lg">
                        Lihat apa kata pelanggan kami tentang pengalaman mereka.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="bg-white/5 border-white/10 text-white shadow-sm backdrop-blur-sm">
                            <CardHeader className="flex flex-row items-center gap-4 pb-4">
                                <Avatar className="border-2 border-blue-500/50">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium leading-none text-white">{testimonial.name}</p>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 italic">"{testimonial.comment}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
