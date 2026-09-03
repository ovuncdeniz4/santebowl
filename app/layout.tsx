import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/lib/site";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Sante Bowl | Aydın’da tartılmış sağlıklı kaseler",
    template: "%s | Sante Bowl",
  },
  description: site.description,
  metadataBase: new URL("https://santebowl.vercel.app"),
  openGraph: {
    title: "Sante Bowl",
    description: site.tagline,
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-sante-cream text-sante-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
