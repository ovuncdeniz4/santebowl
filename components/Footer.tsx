import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-sante-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
            Aydın’da tartılarak hazırlanan sağlıklı kaseler. Diyet listenize, antrenmanınıza veya öğle aranıza uygun.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">Keşfet</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/80">
            <Link href="/menu" className="hover:text-white">Menü</Link>
            <Link href="/hikaye" className="hover:text-white">Hikaye</Link>
            <Link href="/siparis" className="hover:text-white">Sipariş</Link>
            <Link href="/iletisim" className="hover:text-white">İletişim</Link>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">Ziyaret</p>
          <p className="mt-4 text-sm leading-relaxed text-white/80">{site.address}</p>
          <a href={site.phoneHref} className="mt-3 block text-sm text-white hover:underline">
            {site.phone}
          </a>
          <a href={site.instagram} className="mt-2 block text-sm text-white/70 hover:text-white">
            {site.instagramHandle}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/40 md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Sante Bowl · Efeler, Aydın</p>
          <p>Siparişler Yemeksepeti, Trendyol GO, Getir ve WhatsApp üzerinden alınır.</p>
        </div>
      </div>
    </footer>
  );
}
