"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/menu", label: "Menü" },
  { href: "/hikaye", label: "Hikaye" },
  { href: "/siparis", label: "Sipariş" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sante-ink/8 bg-sante-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.92rem] font-medium tracking-wide text-sante-ink/80 transition hover:text-sante-green"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/siparis" className="btn-red">
            Sipariş ver
          </Link>
        </nav>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sante-ink/15 md:hidden"
          aria-label="Menüyü aç"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-sante-ink" />
            <span className="block h-px w-4 bg-sante-ink" />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-sante-ink/8 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/siparis" className="btn-red mt-2 w-fit" onClick={() => setOpen(false)}>
              Sipariş ver
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
