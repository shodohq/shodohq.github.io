import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-[#f5f1eb]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-normal tracking-wide font-mono">
          株式会社衝動
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="#" className="text-sm hover:opacity-70 font-sans">
            Research
          </Link>
          <Link href="/news" className="text-sm hover:opacity-70 font-sans">
            News
          </Link>
        </nav>
      </div>
    </header>
  );
}
