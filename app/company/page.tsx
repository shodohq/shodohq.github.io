import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      <SiteHeader />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="mb-6 text-5xl font-normal leading-tight tracking-tight font-serif lg:text-6xl">
          Engineering resilience
          <br />
          at the speed of crisis
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed font-sans">
          株式会社衝動 develops modular, autonomous systems that enable
          communities to recover and govern within a week.
        </p>
        <Link href="/careers">
          <Button className="bg-black text-white hover:bg-black/90 font-sans">
            Join us
          </Button>
        </Link>
      </section>

      {/* Our Purpose Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-20 grid gap-16 lg:grid-cols-[1fr,2fr]">
          <div>
            <h2 className="text-3xl font-normal font-serif text-black/60">
              Our Purpose
            </h2>
          </div>
          <div>
            <p className="text-2xl font-normal leading-relaxed font-serif lg:text-3xl">
              At 株式会社衝動, we believe that the ability to rebuild is the
              foundation of civilization. When disaster strikes, time becomes
              the most precious resource. We design modular, autonomous
              infrastructure that can restore power, water, shelter, and
              governance within seven days — creating stability where there was
              none. Our work combines engineering, logistics, and human
              cooperation to make recovery not just possible, but predictable.
            </p>
          </div>
        </div>

        {/* Purpose Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <Card className="border-none bg-[#faf8f5] p-10 shadow-none transition-all hover:shadow-md hover:bg-white">
            <h3 className="mb-6 text-2xl font-normal font-serif">
              Principles of Resilience
            </h3>
            <p className="text-base leading-relaxed text-black/70 font-sans">
              Design that endures disruption. We engineer systems that balance
              speed, sustainability, and humanity — ensuring stability even in
              the most uncertain times.
            </p>
          </Card>

          <Card className="border-none bg-[#f5f3ef] p-10 shadow-none transition-all hover:shadow-md hover:bg-white">
            <h3 className="mb-6 text-2xl font-normal font-serif">
              Ethics of Deployment
            </h3>
            <p className="text-base leading-relaxed text-black/70 font-sans">
              Every action shapes recovery. We deploy technology responsibly,
              with transparency and respect for local communities, because
              rebuilding begins with trust.
            </p>
          </Card>

          <Card className="border-none bg-[#f0ede7] p-10 shadow-none transition-all hover:shadow-md hover:bg-white">
            <h3 className="mb-6 text-2xl font-normal font-serif">
              衝動 Systems
            </h3>
            <p className="text-base leading-relaxed text-black/70 font-sans">
              Rebuild life in seven days. Our modular infrastructure restores
              power, water, shelter, and communication — forming the backbone of
              rapid recovery worldwide.
            </p>
          </Card>

          <Card className="border-none bg-[#ebe8e0] p-10 shadow-none transition-all hover:shadow-md hover:bg-white">
            <h3 className="mb-6 text-2xl font-normal font-serif">
              Field Academy
            </h3>
            <p className="text-base leading-relaxed text-black/70 font-sans">
              Learn to rebuild, together. Through hands-on programs, we train
              engineers, responders, and civic leaders to design and deploy
              resilient cities.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-8 text-4xl font-normal leading-tight font-serif lg:text-5xl">
            Want to help us build
            <br />
            the future of rapid resilience?
          </h2>
          <Link href="/careers">
            <Button className="bg-white text-black hover:bg-white/90 font-sans">
              See open roles
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
