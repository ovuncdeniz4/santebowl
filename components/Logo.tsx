import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const onGreen = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-end gap-2 ${className}`} aria-label="sante bowl ana sayfa">
      <span
        className={`inline-flex items-center rounded-[4px] px-2.5 py-[5px] text-[1.35rem] font-semibold leading-none tracking-tight ${
          onGreen ? "bg-sante-green text-white" : "bg-sante-green text-white"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        sante
      </span>
      <span className={`pb-[2px] text-[0.72rem] font-medium uppercase tracking-[0.28em] ${onGreen ? "text-white/80" : "text-sante-ink/70"}`}>
        bowl
      </span>
    </Link>
  );
}
