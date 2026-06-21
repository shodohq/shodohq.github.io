import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteLoaderData,
} from "react-router";

import { Layout as SiteLayout } from "~/components/Layout";
import { LANG_COOKIE_NAME } from "~/lib/i18n";
import type { Lang } from "~/lib/translations";

import type { Route } from "./+types/root";

import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/mark.svg", type: "image/svg+xml" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Shippori+Mincho:wght@400;500;700&family=Zen+Kaku+Gothic+Antique:wght@300;400;500;700&display=swap",
  },
];

function readLangFromRequest(request: Request): Lang {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${LANG_COOKIE_NAME}=([^;]+)`));
  const value = match?.[1];
  return value === "en" ? "en" : "jp";
}

export async function loader({ request }: Route.LoaderArgs) {
  return { lang: readLangFromRequest(request) };
}

export function meta() {
  return [
    { title: "株式会社衝動 — 事業継続と開発速度を守る、サイバーリスク対応基盤" },
    {
      name: "description",
      content:
        "分断されたセキュリティ・業務・開発情報を統合し、サイバーリスクを「何が止まるか」「何を先に直すか」「どう対応するか」までつなげます。",
    },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData("root") as { lang?: Lang } | undefined;
  const htmlLang = data?.lang === "en" ? "en" : "ja";
  return (
    <html lang={htmlLang}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { lang } = useLoaderData<typeof loader>();
  return (
    <SiteLayout lang={lang}>
      <Outlet />
    </SiteLayout>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-h1 mb-4 font-medium">{message}</h1>
      <p className="text-body text-fg-muted mb-6">{details}</p>
      {stack && (
        <pre className="bg-bg-sunken text-body-s w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
