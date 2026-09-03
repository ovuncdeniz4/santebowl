import type { Metadata } from "next";
import { PlatformGrid } from "@/components/PlatformGrid";

export const metadata: Metadata = {
  title: "Sipariş",
  description: "Sante Bowl siparişini Yemeksepeti, Trendyol GO, Getir Yemek veya WhatsApp üzerinden verin.",
};

/** Order page: logos only, links out to third-party apps. */
export default function OrderPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-5xl leading-[0.95] md:text-6xl">Sipariş</h1>
      <p className="mt-4 text-lg text-sante-ink/65">Hangi uygulamayı kullanıyorsanız.</p>

      <div className="mt-10">
        <PlatformGrid />
      </div>
    </div>
  );
}
