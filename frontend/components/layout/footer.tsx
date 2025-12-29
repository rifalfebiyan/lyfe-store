import Link from "next/link";
import { Package2 } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black text-gray-400">
            <div className="container mx-auto flex flex-col gap-6 py-8 px-4 md:px-6 md:flex-row md:justify-between md:items-center">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-bold text-white">
                        <Package2 className="h-6 w-6" />
                        <span>LyfeStore</span>
                    </div>
                    <p className="text-sm text-gray-500 w-full md:w-[300px]">
                        Aplikasi premium untuk kreator dan bisnis modern. Tingkatkan alur kerja Anda hari ini.
                    </p>
                </div>
                <div className="flex flex-wrap gap-8 text-sm text-gray-500">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white">Produk</h3>
                        <Link href="#" className="hover:text-white transition-colors">Aplikasi</Link>
                        <Link href="#" className="hover:text-white transition-colors">Pembaruan</Link>
                        <Link href="#" className="hover:text-white transition-colors">Harga</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white">Perusahaan</h3>
                        <Link href="#" className="hover:text-white transition-colors">Tentang</Link>
                        <Link href="#" className="hover:text-white transition-colors">Blog</Link>
                        <Link href="#" className="hover:text-white transition-colors">Karir</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white">Legal</h3>
                        <Link href="#" className="hover:text-white transition-colors">Privasi</Link>
                        <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto border-t border-white/10 py-6 px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                <p>&copy; {new Date().getFullYear()} LyfeStore Inc. Hak Cipta Dilindungi.</p>
                <div className="flex gap-4">
                    <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                    <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
                    <Link href="#" className="hover:text-white transition-colors">Discord</Link>
                </div>
            </div>
        </footer>
    );
}
