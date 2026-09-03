import Image from "next/image";
import Link from "next/link";
import { DishCard } from "@/components/DishCard";
import { PlatformGrid } from "@/components/PlatformGrid";
import { featured } from "@/lib/menu";
import { site } from "@/lib/site";

const marquee = [
  "Basmati Tavuk",
  "Fit & Fresh",
  "Mexican Protein",
  "Dengeli Köfte",
  "Ultra Protein",
  "Vegan Bowl",
  "Sante Superbowl",
  "Kendi Bowlunu Yarat",
  "Brownie Intense",
];

const values = [
  {
    title: "Gram gram",
    text: "Her protein ve tahıl hassas terazide tartılır. Diyet listenizdeki sayılar mutfakta da aynı kalır.",
  },
  {
    title: "Her sabah taze",
    text: "Mezeler ve yeşillikler günlük hazırlanır. Mor lahana, tarator, kinoa hattı vitrinde durmaz.",
  },
  {
    title: "Listenize uygun",
    text: "Tavuk, köfte, ton veya vegan. Kajun, barbekü, acı sos. Midi veya ultra protein.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
          <div>
            <p className="eyebrow">Efeler · Aydın</p>
            <h1 className="mt-4 max-w-[11ch] font-display text-[3.4rem] leading-[0.92] text-sante-ink md:text-[5.4rem]">
              Tartılmış, taze, doyurucu kaseler.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-sante-ink/70">
              Sante Bowl’da kaseler şef kombinasyonu ya da sizin seçiminizle çıkar. Siparişi biz almıyoruz — bildiğiniz uygulamalardan veya WhatsApp’tan veriyorsunuz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/siparis" className="btn-red">
                Sipariş ver
              </Link>
              <Link href="/menu" className="btn-ghost">
                Menüyü keşfet
              </Link>
            </div>
            <p className="mt-6 text-sm text-sante-ink/50">{site.deliveryHours}</p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-sante-deep">
              <Image
                src="/images/brand/hero.jpg"
                alt="Sante Bowl kaseleri ahşap masada"
                width={1200}
                height={878}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 hidden w-40 overflow-hidden rounded-[1.2rem] border-4 border-sante-cream shadow-xl md:block">
              <Image src="/images/space/google-2.jpg" alt="Sante Bowl tabela ve kırmızı bahçe masaları" width={400} height={520} className="h-48 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div className="marquee bg-sante-paper">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`}>
              {item}
              <span className="mx-4 text-sante-red">●</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="eyebrow">Mutfak</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">
              Şef kasesi ya da kendi kaseniz.
            </h2>
          </div>
          <p className="max-w-xl text-sante-ink/70">
            Hazır tariflerimiz tavuk, köfte, ton ve vegan hatlarında. İsterseniz malzemeyi siz seçin; tartım ve dizilim mutfakta yapılır.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.slice(0, 3).map((dish) => (
            <DishCard key={dish.slug} dish={dish} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/menu" className="btn-green">
            Tüm menü
          </Link>
        </div>
      </section>

      <section className="bg-sante-deep py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
            <Image src="/images/space/google-4.jpg" alt="Sante Bowl malzeme hattı" fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">Neden sante</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">Sağlıklı, taze ve ölçülü.</h2>
            <div className="mt-10 grid gap-8">
              {values.map((value) => (
                <div key={value.title} className="border-t border-white/10 pt-6">
                  <h3 className="font-display text-2xl">{value.title}</h3>
                  <p className="mt-2 text-white/70">{value.text}</p>
                </div>
              ))}
            </div>
            <Link href="/hikaye" className="btn-red mt-10 w-fit">
              Hikayeyi oku
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <p className="eyebrow">Nasıl sipariş</p>
        <h2 className="mt-3 max-w-[16ch] font-display text-4xl md:text-5xl">Kaseleri uygulamalardan isteyin.</h2>
        <p className="mt-4 max-w-xl text-sante-ink/70">
          Siteden ödeme veya sepet yok. Yemeksepeti, Trendyol GO, Getir Yemek veya WhatsApp — hangisi elinizin altındaysa.
        </p>
        <div className="mt-10">
          <PlatformGrid />
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-white md:grid-cols-2">
          <div className="relative min-h-[320px]">
            <Image src="/images/space/google-8.jpg" alt="Sante Bowl iç mekan" fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="eyebrow">Lokasyon</p>
            <h2 className="mt-3 font-display text-4xl">Kurtuluş’ta, kırmızı masaların altında.</h2>
            <p className="mt-4 text-sante-ink/70">{site.address}</p>
            <p className="mt-2 text-sante-ink/70">{site.hours[0].time} · {site.hours[1].day} {site.hours[1].time}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/iletisim" className="btn-green">
                Yol tarifi
              </Link>
              <a href={site.phoneHref} className="btn-ghost">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
