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

/** Full-width green bar, same fill as the shop sign. */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sante-green text-white">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 md:px-8">
        <Logo variant="onGreen" />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.92rem] font-medium tracking-wide text-white/85 transition hover:text-white"
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 md:hidden"
          aria-label="Menüyü aç"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-white" />
            <span className="block h-px w-4 bg-white" />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/15 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-white"
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
