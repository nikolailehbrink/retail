import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "@fontsource-variable/inter";
// https://fontsource.org/docs/getting-started/preload
import interWoff2 from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url";

import "./tailwind.css";

export const links: LinksFunction = () => [
  {
    rel: "preload",
    as: "font",
    href: interWoff2,
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark text-pretty bg-neutral-50 dark:bg-neutral-950">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
