import type { Metadata } from "next";
import { PlatformGrid } from "@/components/PlatformGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sipariş",
  description: "Sante Bowl siparişini Yemeksepeti, Trendyol GO, Getir Yemek veya WhatsApp üzerinden verin.",
};

export default function OrderPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="eyebrow">Sipariş</p>
      <h1 className="mt-3 max-w-[16ch] font-display text-5xl leading-[0.95] md:text-6xl">
        Sepet burada yok. Platformlar orada.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-sante-ink/70">
        Ödeme, kurye ve kampanya aracı uygulamalarda. Sante Bowl mutfağı hazırlar; teslimatı Yemeksepeti, Trendyol GO veya Getir üstlenir. Gel-al için WhatsApp yeter.
      </p>

      <div className="mt-12">
        <PlatformGrid />
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-[1.4rem] bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sante-green">01</p>
          <h2 className="mt-3 font-display text-2xl">Uygulamayı açın</h2>
          <p className="mt-2 text-sm text-sante-ink/70">Yemeksepeti’nde restoran sayfası hazır. Diğerlerinde Sante Bowl Aydın diye arayın.</p>
        </div>
        <div className="rounded-[1.4rem] bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sante-green">02</p>
          <h2 className="mt-3 font-display text-2xl">Kasenizi kurun</h2>
          <p className="mt-2 text-sm text-sante-ink/70">Meze ve tavuk çeşidini notlarda belirtin. Gramajlar mutfakta tartılır.</p>
        </div>
        <div className="rounded-[1.4rem] bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sante-green">03</p>
          <h2 className="mt-3 font-display text-2xl">Gel-al isterseniz</h2>
          <p className="mt-2 text-sm text-sante-ink/70">
            <a href={site.whatsapp} className="underline">WhatsApp</a> veya {site.phone} — Kurtuluş, 2010. Sokak.
          </p>
        </div>
      </div>
    </div>
  );
}
