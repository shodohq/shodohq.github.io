import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getLatestNews } from "@/lib/news";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default async function Home() {
  const featuredNews = await getLatestNews(10);

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      <SiteHeader />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-normal leading-tight tracking-tight font-serif lg:text-6xl">
              Infrastructure for rapid resilience
            </h1>
            <p className="max-w-md text-base leading-relaxed font-sans">
              Disasters change lives overnight. We build modular systems that
              can restore essential services, governance, and community within
              seven days — creating stability when the world needs it most.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/logo.png"
              alt="衝動"
              className="h-64 w-64 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Pixie Shield Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Card className="border-none bg-[#e8dfd4] p-8 shadow-none lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-normal tracking-tight font-serif">
                Pixie Shield
              </h2>
              <p className="mb-2 text-lg font-medium leading-relaxed text-black/90 font-sans">
                One-Command, 10-Minute Security Scanning SaaS
              </p>
              <p className="mb-8 text-base leading-relaxed text-black/80 font-sans">
                Next-generation diagnostics approaching zero false positives
                with discrete mathematics and machine learning. AI automation
                reduces costs and man-hours, delivering developer-first code
                security.
              </p>
              <div className="mb-8 space-y-2 text-sm font-sans">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Price:</span>
                  <span className="text-black/80">
                    ¥1M annually / unlimited use
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Speed:</span>
                  <span className="text-black/80">
                    Diagnosis completed in 10 minutes
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Accuracy:</span>
                  <span className="text-black/80">
                    False positive rate &lt; 5%
                  </span>
                </div>
              </div>
              <Button className="bg-black text-white hover:bg-black/90 font-sans">
                View Product Details
              </Button>
            </div>
            <div className="space-y-4">
              <div className="text-sm font-medium text-black/60 font-sans">
                Learn more
              </div>
              <Link
                href="#"
                className="group flex items-center justify-between border-b border-black/10 pb-4 hover:opacity-70"
              >
                <span className="text-base font-sans">Technology Stack</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="group flex items-center justify-between border-b border-black/10 pb-4 hover:opacity-70"
              >
                <span className="text-base font-sans">Case Studies</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="group flex items-center justify-between pb-4 hover:opacity-70"
              >
                <span className="text-base font-sans">Pricing Plans</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-normal leading-tight tracking-tight font-serif">
              We build infrastructure to serve humanity's urgent needs.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="leading-relaxed font-sans">
              While no one can predict when or where the next crisis will
              strike, we believe that designing for resilience demands both
              decisive action and deep reflection.
            </p>
            <p className="leading-relaxed font-sans">
              Our modular systems are designed to restore life and governance
              within seven days — a vision we pursue through ongoing research,
              field operations, and collaboration with communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-8 text-2xl font-normal font-serif">Featured</h2>
        {featuredNews.length > 0 ? (
          <div className="space-y-4">
            {featuredNews.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-black/10 pb-4 hover:opacity-70"
              >
                <span className="text-base font-sans">
                  {item.metadata.title}
                </span>
                <span className="text-sm text-black/60 font-sans">
                  {item.metadata.category}
                </span>
                <span className="text-sm text-black/60 font-sans">
                  {dateFormatter.format(new Date(item.metadata.date))}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-black/60 font-sans">
            News updates are coming soon.
          </p>
        )}
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="text-center">
          <h2 className="mb-8 text-4xl font-normal leading-tight font-serif">
            Want to help us build
            <br />
            the future of rapid resilience?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/careers">
              <Button className="bg-black text-white hover:bg-black/90 font-sans">
                See open roles
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-black bg-transparent hover:bg-black/5 font-sans"
            >
              Partner with us
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
