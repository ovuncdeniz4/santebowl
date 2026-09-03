import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-5 py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-5xl">Bu kase boş.</h1>
      <p className="mt-4 text-sante-ink/70">Aradığınız sayfa yok. Menüye veya ana sayfaya dönebilirsiniz.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-green">Ana sayfa</Link>
        <Link href="/menu" className="btn-ghost">Menü</Link>
      </div>
    </div>
  );
}
