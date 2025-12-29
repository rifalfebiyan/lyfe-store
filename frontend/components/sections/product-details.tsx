import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle, Check } from "lucide-react";
import Link from "next/link";

interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
}

const defaultPackages = [
    {
        name: "1 Bulan",
        price: "Rp 50.000",
        features: ["Akses 1 Bulan", "Fitur Premium", "Support Prioritas"],
    },
    {
        name: "1 Tahun",
        price: "Rp 450.000",
        features: ["Hemat 25%", "Semua Fitur Bulanan", "Update Gratis", "Akses 1 Tahun"],
        popular: true,
    },
    {
        name: "Lifetime",
        price: "Rp 1.200.000",
        features: ["Sekali Bayar", "Akses Selamanya", "Semua Fitur Masa Depan", "VIP Support"],
    },
];

const productPackages: Record<number, typeof defaultPackages> = {
    1: [ // CapCut Pro
        {
            name: "1 Bulan Sharing",
            price: "Rp 12.000",
            features: ["AKUN SHARING", "Harga Asli Rp. 15.000", "Full Garansi", "Fitur Pro Terbuka", "Tanpa Watermark", "Export 4K", "No Ads"],
            popular: true,
        },
        {
            name: "1 Bulan Private",
            price: "Rp 25.000",
            features: ["AKUN PRIVATE", "Full Garansi", "Hemat 50%", "Fitur Pro Terbuka", "Tanpa Watermark", "Export 4K", "No Ads"],
        },
    ],
    2: [ // Canva Premium
        {
            name: "1 Minggu",
            price: "Rp 3.000",
            features: ["Full Garansi", "Fitur Pro Terbuka", "Tanpa Watermark", "No Ads"],
        },
        {
            name: "1 Bulan",
            price: "Rp 8.000",
            features: ["Harga Normal Rp. 10.000", "Full Garansi", "Fitur Pro Terbuka", "Tanpa Watermark", "No Ads"],
            popular: true,
        },
        {
            name: "2 Bulan",
            price: "Rp 13.000",
            features: ["Full Garansi", "Fitur Pro Terbuka", "Tanpa Watermark", "No Ads"],
        },
        {
            name: "12 Bulan",
            price: "Rp 15.000",
            features: ["Full Garansi", "Fitur Pro Terbuka", "Tanpa Watermark", "No Ads"],
        },
        {
            name: "Lifetime/Education",
            price: "Rp 18.000",
            features: ["Full Garansi", "Fitur Pro Terbuka", "Tanpa Watermark", "No Ads"],
        },
    ],

    3: [ // Netlix Premium
        {
            name: "1P1U 1 Hari",
            price: "Rp 4.000",
            features: ["1 Profile 1 User", "Full Garansi", "Kualitas FHD", "Tanpa VPN"],
        },
        {
            name: "1P1U 1 Minggu",
            price: "Rp 15.000",
            features: ["1 Profile 1 User", "Full Garansi", "Kualitas FHD", "Tanpa VPN"],

        },
        {
            name: "1P1U 1 Bulan",
            price: "Rp 27.000",
            features: ["1 Profile 1 User", "Harga Normal Rp 33.000", "Full Garansi", "Kualitas FHD", "Tanpa VPN"],
            popular: true,
        },
        {
            name: "1P2U 1 Bulan",
            price: "Rp 20.500",
            features: ["1 Profile 2 User", "Harga Normal Rp 25.000", "Full Garansi", "Kualitas FHD", "Tanpa VPN"],
            popular: true,
        },
        {
            name: "Semi-Private 1 Bulan",
            price: "Rp 37.000",
            features: ["Semi-Private", "Full Garansi", "Kualitas FHD", "Tanpa VPN"],
        },
    ],

    4: [ // VIU
        {
            name: "Anti Limit 1 Bulan",
            price: "Rp 8.500",
            features: ["Full Garansi", "Kualitas FHD", "Tanpa VPN", "No Ads"],
        },
        {
            name: "Private 1 Bulan",
            price: "Rp 15.000",
            features: ["Full Garansi", "Kualitas FHD", "Tanpa VPN", "No Ads"],

        },
        {
            name: "VIU-Plus1 Bulan",
            price: "Rp 20.000",
            features: ["VIU+", "Full Garansi", "Kualitas FHD", "Tanpa VPN", "No Ads"],
        },
    ],
    5: [ // BSTATION
        {
            name: "1 Bulan",
            price: "Rp 15.000",
            features: ["Full Garansi", "Kualitas FHD", "Tanpa VPN", "No Ads"],
        },
        {
            name: "1 Tahun",
            price: "Rp 23.000",
            features: ["Full Garansi", "Hemat 25%", "Kualitas FHD", "Tanpa VPN", "No Ads"],

        },
    ],
    6: [ // BSTATION
        {
            name: "Sharing 1 Bulan",
            price: "Rp 15.000",
            features: ["Akun Sharing", "Full Garansi", "Kualitas FHD", "Tanpa VPN", "No Ads"],
        },
        {
            name: "Private 1 Bulan",
            price: "Rp 37.000",
            features: ["Akun Private", "Full Garansi", "Kualitas FHD", "Tanpa VPN", "No Ads"],

        },
    ],
    7: [ // IQIYI
        {
            name: "1 Bulan",
            price: "Rp 15.000",
            features: ["Full Garansi", "Kualitas FHD", "Tanpa VPN", "No Ads"],
        },
        {
            name: "1 Tahun",
            price: "Rp 23.000",
            features: ["Full Garansi", "Kualitas FHD", "Tanpa VPN", "No Ads"],

        },
    ],
    // Tambahkan ID produk lain di sini...
};

export function ProductDetailsDialog({ product }: { product: Product }) {
    const packages = productPackages[product.id] || defaultPackages;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white border-0">Lihat Detail</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto bg-slate-950 border-white/10">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-3xl font-bold text-white">{product.title}</DialogTitle>
                    <DialogDescription className="text-lg text-gray-400">
                        Pilih paket langganan yang sesuai dengan kebutuhan Anda.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-2 md:grid-cols-3">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.name}
                            className={`flex flex-col gap-4 rounded-xl border p-6 shadow-sm relative transition-all duration-300 ${pkg.popular
                                ? "border-emerald-500 bg-emerald-950/20 scale-105 shadow-emerald-900/20 shadow-lg z-10"
                                : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-1 text-xs text-white font-bold shadow-lg shadow-emerald-900/50">
                                    PROMO
                                </div>
                            )}
                            <div className="flex flex-col gap-1 text-center mb-2">
                                <h3 className={`font-semibold text-lg ${pkg.popular ? "text-emerald-400" : "text-gray-300"}`}>{pkg.name}</h3>
                                <div className="text-3xl font-black text-white tracking-tight">{pkg.price}</div>
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />
                            <ul className="flex-1 space-y-3 text-sm">
                                {pkg.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-left">
                                        <div className={`mt-0.5 rounded-full p-0.5 ${pkg.popular ? "bg-emerald-500/20" : "bg-white/10"}`}>
                                            <Check className={`h-3 w-3 ${pkg.popular ? "text-emerald-400" : "text-gray-400"}`} />
                                        </div>
                                        <span className="text-gray-300 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={`https://wa.me/62882003667531?text=Halo%20LyfeStore%2C%20saya%20ingin%20membeli%20${product.title}%20paket%20${pkg.name}`}
                                target="_blank"
                                className="w-full mt-4"
                            >
                                <Button className={`w-full h-11 font-bold tracking-wide transition-all ${pkg.popular
                                    ? "bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-lg shadow-emerald-900/20"
                                    : "bg-white text-black hover:bg-gray-200"
                                    }`}>
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    Pesan Sekarang
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
