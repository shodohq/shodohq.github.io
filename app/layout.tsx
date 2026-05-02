import type { Metadata } from "next";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shodohq.com"),
  title: {
    default: "株式会社衝動 — 社会機能を止めないためのサイバー防衛OS",
    template: "%s — 株式会社衝動",
  },
  description:
    "Pixie Defense Suite は、組織・ID・委託先・システム・OT・ソフトウェア部品・復旧体制を Mission Graph として統合し、重要業務停止に至る構造的リスクと対策の優先度を明らかにします。",
  icons: {
    icon: "/mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
