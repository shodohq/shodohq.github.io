import { Link } from "react-router";

import {
  MISSION_GRAPH_EDGES_COUNT,
  MISSION_GRAPH_NODES_COUNT,
  MissionGraph,
} from "~/components/MissionGraph";
import { tr, useLang } from "~/lib/i18n";

export function Hero() {
  const { lang } = useLang();
  const l1 = tr(lang, "home.hero.h1l1");
  const l2 = tr(lang, "home.hero.h1l2");
  const l3 = tr(lang, "home.hero.h1l3");
  const em = tr(lang, "home.hero.h1em");
  const dot = tr(lang, "home.hero.h1dot");

  return (
    <section className="border-hairline relative border-b px-12 pt-28 pb-22">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
        <div>
          <div className="text-fg-muted mb-7 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase">
            <span className="bg-ink-700 inline-block h-px w-6" />
            {tr(lang, "home.hero.eyebrow")}
          </div>
          <h1 className="font-display text-fg m-0 max-w-[760px] text-[clamp(30px,4.4vw,60px)] leading-[1.1] font-normal tracking-[-0.012em]">
            {l1}
            {l2 ? (
              <>
                <br />
                {l2}
                <br />
                {l3}
                {l3 && " "}
                <span className="text-shu">{em}</span>
                {dot}
              </>
            ) : (
              <>
                <br />
                <span className="text-shu">{em}</span>
                {dot}
              </>
            )}
          </h1>
          <p className="text-ink-700 mt-8 max-w-[580px] font-sans text-[17px] leading-[1.7]">
            {tr(lang, "home.hero.body")}
          </p>
          <p className="border-shu font-display text-fg mt-5 max-w-[520px] border-l-2 pl-4 text-[17px] leading-[1.6] font-medium">
            {tr(lang, "home.hero.quote")}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="bg-accent text-fg-on-accent inline-flex h-12 items-center rounded-sm px-5.5 font-sans text-[14px] tracking-[0.02em] no-underline"
            >
              {tr(lang, "home.hero.ctaPrimary")}
            </Link>
            <a
              href="#products"
              className="border-line-strong text-fg inline-flex h-12 items-center rounded-sm border bg-transparent px-5.5 font-sans text-[14px] tracking-[0.02em] no-underline"
            >
              {tr(lang, "home.hero.ctaSecondary")}
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="border-hairline bg-surface relative rounded-sm border p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-fg-muted font-mono text-[10px] tracking-[0.2em] uppercase">
                {tr(lang, "home.hero.cardLabel")}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="bg-shu h-1.5 w-1.5 rounded-full" />
                <span className="text-shu-700 font-mono text-[10px] tracking-[0.16em] uppercase">
                  {tr(lang, "home.hero.cardCriticalPath")}
                </span>
              </span>
            </div>
            <MissionGraph />
            <div className="border-hairline text-fg-muted mt-3.5 grid grid-cols-3 gap-4 border-t pt-3.5 font-sans text-[11px] leading-[1.5]">
              <div>
                <div className="text-fg-muted mb-1 font-mono text-[11px] tracking-[0.04em] uppercase">
                  {tr(lang, "home.hero.cardNodes")}
                </div>
                <div className="tnum text-fg font-mono text-[14px] font-medium">
                  {MISSION_GRAPH_NODES_COUNT}
                </div>
              </div>
              <div>
                <div className="text-fg-muted mb-1 font-mono text-[11px] tracking-[0.04em] uppercase">
                  {tr(lang, "home.hero.cardEdges")}
                </div>
                <div className="tnum text-fg font-mono text-[14px] font-medium">
                  {MISSION_GRAPH_EDGES_COUNT}
                </div>
              </div>
              <div>
                <div className="text-fg-muted mb-1 font-mono text-[11px] tracking-[0.04em] uppercase">
                  {tr(lang, "home.hero.cardRisk")}
                </div>
                <div className="tnum text-shu-700 font-mono text-[14px] font-medium">0.74</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
