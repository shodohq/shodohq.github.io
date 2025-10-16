import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "News | 株式会社衝動",
  description:
    "Latest updates from 株式会社衝動 including product announcements, field reports, and partnership news.",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default async function NewsPage() {
  const newsItems = await getAllNews();

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-16">
        <header className="mb-12 space-y-4">
          <h1 className="text-4xl font-normal tracking-tight font-serif">
            News
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-black/70 font-sans">
            Field notes, product milestones, and partnerships that advance rapid
            resilience for the communities we serve.
          </p>
        </header>

        <div className="border-t border-black/10">
          {newsItems.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group block space-y-3 border-b border-black/10 py-8 last:border-b-0 hover:opacity-80"
            >
              <div className="flex flex-wrap gap-4 text-sm text-black/60 font-sans">
                <span>{item.metadata.category}</span>
                <span>
                  {dateFormatter.format(new Date(item.metadata.date))}
                </span>
              </div>
              <h2 className="text-2xl font-normal leading-snug tracking-tight font-serif">
                {item.metadata.title}
              </h2>
              {item.metadata.summary ? (
                <p className="text-base leading-relaxed text-black/70 font-sans">
                  {item.metadata.summary}
                </p>
              ) : null}
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
