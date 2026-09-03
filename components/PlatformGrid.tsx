import { platforms } from "@/lib/site";

export function PlatformGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-4 ${compact ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"}`}>
      {platforms.map((platform) => (
        <a
          key={platform.id}
          href={platform.href}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col justify-between rounded-[1.3rem] border border-sante-ink/8 bg-white p-6 transition hover:-translate-y-0.5 hover:border-sante-green/40 hover:shadow-[0_18px_40px_rgba(11,122,69,0.12)]"
        >
          <div>
            <span
              className="inline-block h-2 w-8 rounded-full"
              style={{ background: platform.accent }}
            />
            <h3 className="mt-4 font-display text-2xl text-sante-ink">{platform.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-sante-ink/65">{platform.blurb}</p>
          </div>
          <p className="mt-6 text-sm font-medium text-sante-green">
            Platforma git
            <span className="ml-1 inline-block transition group-hover:translate-x-0.5">→</span>
          </p>
        </a>
      ))}
    </div>
  );
}
