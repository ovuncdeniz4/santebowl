import type { Metadata } from "next";
import { DishCard } from "@/components/DishCard";
import { menuGroups } from "@/lib/menu";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menü",
  description: "Sante Bowl imza kaseleri, yüksek protein, midi porsiyonlar ve kendi bowlunu yarat.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="eyebrow">Menü</p>
      <h1 className="mt-3 max-w-[14ch] font-display text-5xl leading-[0.95] md:text-6xl">
        Şef kasesi ya da kendi kaseniz.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-sante-ink/70">
        Gramajlar mutfakta tartılır. Güncel fiyat ve kampanya uygulamalarda görünür — burada yalnızca içerik var.
      </p>
      <Link href="/siparis" className="btn-red mt-8">
        Sipariş için uygulamalar
      </Link>

      <div className="mt-16 flex flex-wrap gap-3">
        {menuGroups.map((group) => (
          <a key={group.id} href={`#${group.id}`} className="rounded-full border border-sante-ink/12 bg-white px-4 py-2 text-sm font-medium hover:border-sante-green">
            {group.title}
          </a>
        ))}
      </div>

      {menuGroups.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-28 mt-20">
          <h2 className="font-display text-4xl">{group.title}</h2>
          <p className="mt-3 max-w-2xl text-sante-ink/70">{group.intro}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {group.dishes.map((dish) => (
              <DishCard key={dish.slug} dish={dish} />
            ))}
          </div>
        </section>
      ))}

      <section className="mt-20 rounded-[2rem] bg-sante-deep px-8 py-12 text-white md:px-12">
        <h2 className="font-display text-3xl md:text-4xl">İçecekler</h2>
        <p className="mt-3 max-w-xl text-white/70">
          Sütaş ayran, Pin şekersiz soğuk çaylar, Coca-Cola Zero, soda ve su. Menü setlerinde içecek eşleştirilebilir.
        </p>
      </section>
    </div>
  );
}
