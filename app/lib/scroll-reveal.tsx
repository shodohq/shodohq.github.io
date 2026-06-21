import { useEffect } from "react";

const SELECTOR =
  "section, h1, h2, h3, h4, p, figure, blockquote, li, img, svg, table, [data-reveal]";

export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll(SELECTOR).forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const tracked = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const parent = el.parentElement;
            let delay = 0;
            if (parent) {
              const siblings = Array.from(parent.children).filter((c) =>
                (c as HTMLElement).classList.contains("sd-will-reveal"),
              );
              const idx = siblings.indexOf(el);
              if (idx >= 0 && siblings.length > 1 && siblings.length <= 8) {
                delay = Math.min(idx, 5) * 60;
              }
            }
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-revealed");
            observer.unobserve(el);
            tracked.delete(el);
          }
        }
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      },
    );

    const shouldExclude = (el: Element) => {
      if (el.closest("nav, header, [data-no-reveal]")) return true;
      const tag = el.tagName.toLowerCase();
      if (tag === "li" || tag === "p") {
        const parentReveal = el.parentElement?.closest(".sd-will-reveal");
        if (parentReveal) return true;
      }
      return false;
    };

    const tag = (el: Element) => {
      if (el.classList.contains("sd-will-reveal")) return;
      if (shouldExclude(el)) return;
      const rect = el.getBoundingClientRect();
      if (rect.width < 24 && rect.height < 24) return;
      el.classList.add("sd-will-reveal");
      tracked.add(el);
      observer.observe(el);
    };

    const scan = (root: Element | Document) => {
      const nodes = root.querySelectorAll(SELECTOR);
      nodes.forEach((el) => {
        if (el.closest("nav, header, [data-no-reveal]")) return;
        if (el.closest(".sd-will-reveal")) return;
        const r = el.getBoundingClientRect();
        if (r.bottom < 0) {
          el.classList.add("sd-will-reveal", "is-revealed");
          return;
        }
        tag(el);
      });
    };

    scan(document);

    const mutationObserver = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((n) => {
          if (n.nodeType === 1) scan(n as Element);
        });
      }
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    let rafPending = false;
    const onScroll = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        rafPending = false;
        for (const el of tracked) {
          if (!el.isConnected || el.classList.contains("is-revealed")) {
            tracked.delete(el);
            continue;
          }
          const r = el.getBoundingClientRect();
          if (r.bottom < 0 || r.top < window.innerHeight * 0.92) {
            el.classList.add("is-revealed");
            observer.unobserve(el);
            tracked.delete(el);
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
