import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark" | "onGreen";
  className?: string;
};

/** Wordmark: lowercase sante + small bowl, matching the shop sign. */
export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const onGreen = variant === "onGreen";
  const light = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-end gap-2 ${className}`} aria-label="sante bowl ana sayfa">
      <span
        className={`inline-flex items-center leading-none tracking-tight text-white ${
          onGreen
            ? "text-[1.7rem] font-semibold"
            : "rounded-[4px] bg-sante-green px-2.5 py-[5px] text-[1.35rem] font-semibold"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        sante
      </span>
      <span
        className={`pb-[2px] text-[0.72rem] font-medium uppercase tracking-[0.28em] ${
          onGreen || light ? "text-white/85" : "text-sante-ink/70"
        }`}
      >
        bowl
      </span>
    </Link>
  );
}
