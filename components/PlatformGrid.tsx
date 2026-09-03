import { platforms } from "@/lib/site";

/** Clickable platform logos — Yemeksepeti, Trendyol GO, Getir, WhatsApp. */
export function PlatformGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {platforms.map((platform) => {
        const dark = platform.tile !== "#ffffff";

        return (
          <a
            key={platform.id}
            href={platform.href}
            target="_blank"
            rel="noreferrer"
            aria-label={platform.name}
            className={`flex h-28 items-center justify-center rounded-[1.4rem] px-5 transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(22,51,38,0.12)] md:h-32 ${
              dark ? "" : "border border-sante-ink/8 bg-white"
            }`}
            style={{ background: platform.tile }}
          >
            {/* SVGs are wordmarks/icons; skip next/image so they stay crisp. */}
            <img
              src={platform.logo}
              alt=""
              className={
                platform.id === "whatsapp"
                  ? "h-12 w-12"
                  : "h-8 w-auto max-w-[150px] object-contain md:h-10"
              }
            />
          </a>
        );
      })}
    </div>
  );
}
