import Image from "next/image";
import type { Dish } from "@/lib/menu";

export function DishCard({ dish, large = false }: { dish: Dish; large?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-[1.4rem] bg-white shadow-[0_12px_40px_rgba(26,23,20,0.06)]">
      <div className={`relative overflow-hidden ${large ? "aspect-[4/3]" : "aspect-[5/4]"}`}>
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="flex flex-wrap gap-2">
          {dish.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-sante-cream px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-sante-green">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-display text-[1.45rem] leading-tight text-sante-ink">{dish.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-sante-ink/70">{dish.summary}</p>
        <p className="mt-3 text-[0.92rem] leading-relaxed text-sante-ink/80">{dish.details}</p>
      </div>
    </article>
  );
}
