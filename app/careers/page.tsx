import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      <SiteHeader />

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-normal leading-tight tracking-tight font-serif">
            Careers
          </h1>
          <p className="mb-12 text-xl leading-relaxed text-black/80 font-sans">
            Building the future of rapid resilience
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-8">
          <div className="rounded-lg bg-[#e8dfd4] p-8 text-center">
            <h2 className="mb-4 text-2xl font-normal font-serif">
              No Open Positions at This Time
            </h2>
            <p className="mb-6 leading-relaxed text-black/80 font-sans">
              We're not currently hiring, but we're always interested in
              connecting with talented individuals who share our mission of
              building infrastructure for rapid resilience.
            </p>
            <p className="leading-relaxed text-black/80 font-sans">
              Check back soon for future opportunities, or follow us on social
              media to stay updated on our latest developments and job openings.
            </p>
          </div>

          <div className="space-y-6 pt-8">
            <h3 className="text-xl font-normal font-serif">
              About Working at 株式会社衝動
            </h3>
            <p className="leading-relaxed font-sans">
              We're building modular systems that can restore essential
              services, governance, and community within seven days of a
              disaster. Our team combines expertise in infrastructure,
              technology, and crisis response to create solutions that matter
              when the world needs them most.
            </p>
            <p className="leading-relaxed font-sans">
              When we do hire, we look for individuals who are passionate about
              making a real-world impact, thrive in challenging environments,
              and bring diverse perspectives to complex problems.
            </p>
          </div>

          <div className="pt-8 text-center">
            <Link href="/">
              <Button className="bg-black text-white hover:bg-black/90 font-sans">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
