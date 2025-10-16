import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getNews, getNewsSlugs } from "@/lib/news";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export async function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const news = await getNews(slug);

  if (!news) {
    return {};
  }

  return {
    title: `${news.metadata.title} | News | 株式会社衝動`,
    description: news.metadata.summary,
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const news = await getNews(slug);

  if (!news) {
    notFound();
  }

  const { Content, metadata } = news;

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-16">
        <div className="mb-6">
          <Link
            href="/news"
            className="text-sm uppercase tracking-wide text-black/60 hover:text-black font-sans"
          >
            News
          </Link>
        </div>
        <article className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-normal leading-tight tracking-tight font-serif">
              {metadata.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-black/60 font-sans">
              <span>{metadata.category}</span>
              <span>{dateFormatter.format(new Date(metadata.date))}</span>
            </div>
          </header>
          <div className="space-y-6 text-base leading-relaxed text-black/80 font-sans">
            <Content />
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
