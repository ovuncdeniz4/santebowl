import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Sante Bowl adresi, saatleri ve iletişim — Kurtuluş, Efeler / Aydın.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="eyebrow">İletişim</p>
      <h1 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl">Bizi ziyaret edin.</h1>
      <p className="mt-5 max-w-xl text-lg text-sante-ink/70">
        Yeşil tabela, kırmızı bahçe masaları. Kurtuluş Mahallesi, 2010. Sokak.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/space/google-2.jpg"
              alt="Sante Bowl dükkan önü"
              width={1200}
              height={1600}
              className="h-[360px] w-full object-cover md:h-[420px]"
            />
          </div>
          <div className="rounded-[1.5rem] bg-white p-7">
            <h2 className="font-display text-2xl">Adres</h2>
            <p className="mt-3 text-sante-ink/75">{site.address}</p>
            <h2 className="mt-8 font-display text-2xl">Saatler</h2>
            <ul className="mt-3 space-y-2 text-sante-ink/75">
              {site.hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4">
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-sante-ink/50">{site.deliveryHours}</p>
            <h2 className="mt-8 font-display text-2xl">Ulaşın</h2>
            <div className="mt-3 flex flex-col gap-2">
              <a href={site.phoneHref} className="font-medium text-sante-green">
                {site.phone}
              </a>
              <a href={site.whatsapp} className="font-medium text-sante-green">
                WhatsApp
              </a>
              <a href={site.instagram} className="font-medium text-sante-green">
                {site.instagramHandle}
              </a>
            </div>
          </div>
        </div>
        <div className="min-h-[480px] overflow-hidden rounded-[1.5rem] bg-white">
          <iframe
            title="Sante Bowl harita"
            src={site.mapsEmbed}
            className="h-full min-h-[480px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
