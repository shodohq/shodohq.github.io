import type { ComponentType } from "react";

export type NewsFrontmatter = {
  title: string;
  date: string;
  category: string;
  summary?: string;
};

type NewsModule = {
  default: ComponentType;
  metadata: NewsFrontmatter;
};

const newsImports = {
  "2025-05-01": () =>
    import("@/content/news/2025-05-01.mdx") as Promise<NewsModule>,
  "2025-10-17": () =>
    import("@/content/news/2025-10-17.mdx") as Promise<NewsModule>,
} as const;

export type NewsSlug = keyof typeof newsImports;

type LoadedNews = {
  slug: NewsSlug;
  metadata: NewsFrontmatter;
  Content: ComponentType;
};

function toDate(value: string) {
  const timestamp = Date.parse(value);
  if (Number.isNaN(timestamp)) {
    throw new Error(`Invalid date value "${value}" in news metadata`);
  }
  return new Date(timestamp);
}

export function getNewsSlugs(): NewsSlug[] {
  return Object.keys(newsImports) as NewsSlug[];
}

export async function getAllNews(): Promise<LoadedNews[]> {
  const entries = await Promise.all(
    getNewsSlugs().map(async (slug) => {
      const module = await newsImports[slug]();
      return {
        slug,
        metadata: module.metadata,
        Content: module.default,
      };
    }),
  );

  return entries.sort(
    (a, b) =>
      toDate(b.metadata.date).getTime() - toDate(a.metadata.date).getTime(),
  );
}

export async function getNews(slug: string): Promise<LoadedNews | null> {
  if (!Object.prototype.hasOwnProperty.call(newsImports, slug)) {
    return null;
  }

  const module = await newsImports[slug as NewsSlug]();

  return {
    slug: slug as NewsSlug,
    metadata: module.metadata,
    Content: module.default,
  };
}

export async function getLatestNews(limit = 10) {
  const news = await getAllNews();
  return news.slice(0, limit);
}
