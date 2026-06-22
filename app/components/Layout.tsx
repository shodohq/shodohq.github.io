import { Footer } from "~/components/Footer";
import { Nav } from "~/components/Nav";
import { LangProvider } from "~/lib/i18n";
import { ScrollReveal } from "~/lib/scroll-reveal";
import type { Lang } from "~/lib/translations";

type LayoutProps = {
  lang: Lang;
  children: React.ReactNode;
};

export function Layout({ lang, children }: LayoutProps) {
  return (
    <LangProvider initialLang={lang}>
      <Nav />
      {children}
      <Footer />
      <ScrollReveal />
    </LangProvider>
  );
}
