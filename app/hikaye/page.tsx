import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hikaye",
  description: "Sante Bowl’un Aydın’daki tartılmış kase mutfağı.",
};

const principles = [
  {
    title: "Ölçü",
    text: "Protein ve pilav tahminle konmaz. Terazi, diyet listesindeki gramı kaseye taşır.",
  },
  {
    title: "Tazelik",
    text: "Hattaki mezeler her gün kurulur. Mor lahana, tarator, kinoa ve yeşillik bekletilmez.",
  },
  {
    title: "Seçim",
    text: "İmza kaseyi olduğu gibi alın ya da malzemeyi değiştirin. Vegan, ton, köfte, tavuk aynı tezgâhta.",
  },
  {
    title: "Şehir",
    text: "Tek mutfak: Efeler, Kurtuluş. Aydın’da kontrollü dışarı yemek arayanlar için.",
  },
];

export default function StoryPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <p className="eyebrow">Hikaye</p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl">
            Sağlıklı yemek hızlı olmak zorunda değil dağınık olmak.
          </h1>
        </div>
        <p className="text-lg leading-relaxed text-sante-ink/70">
          Sante, Fransızca sağlık. Bowl, kase. Aydın’da bu iki kelime tek tezgâhta birleşiyor: tartılmış protein, taze meze, kraft kâğıt kase.
        </p>
      </section>

      <section className="relative h-[52vh] min-h-[340px] w-full overflow-hidden md:h-[70vh]">
        <Image src="/images/space/google-3.jpg" alt="Sante Bowl iç mekan ve kase" fill className="object-cover" priority />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl">Neyi savunduğumuz</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {principles.map((item) => (
            <div key={item.title} className="border-t border-sante-ink/10 pt-6">
              <h3 className="font-display text-3xl">{item.title}</h3>
              <p className="mt-3 text-sante-ink/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sante-deep py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Mutfak görünür, tartı masada.</h2>
            <p className="mt-5 max-w-xl text-white/70">
              Camlı hattın arkasında yeşillik, pancar, turşu ve mezeler durur. Kase önünüzde dizilir; sipariş uygulamadan düşer.
            </p>
            <Link href="/siparis" className="btn-red mt-8">
              Sipariş ver
            </Link>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-[1.6rem]">
            <Image src="/images/space/google-4.jpg" alt="Hazırlık tezgahı" fill className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
