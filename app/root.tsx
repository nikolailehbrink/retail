import {
  href,
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type LinksFunction,
  type MetaFunction,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

// Supports weights 100-900
import "@fontsource-variable/inter";

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    },
  ];
};

export const meta: MetaFunction = ({ error }) => {
  const title =
    isRouteErrorResponse(error) && error.status === 404
      ? "ReTail - Page not found"
      : "ReTail - Build full-stack apps faster";
  return [
    {
      title,
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="dark bg-white scheme-light dark:bg-neutral-950
        dark:text-neutral-400 dark:scheme-dark"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
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
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let [message, details] = ["Oops!", "An unexpected error occurred."];
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main
      className="container flex min-h-screen flex-col items-center
        justify-center gap-4 p-8"
    >
      <h1 className="text-6xl font-bold text-neutral-200">{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
      <Link
        className="flex items-center gap-2 rounded-lg border-2
          border-neutral-700 bg-neutral-900 px-3 py-2 text-neutral-200
          transition-colors hover:border-neutral-300 hover:bg-neutral-800
          hover:text-neutral-50"
        to={href("/")}
      >
        Go Home!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path
            d="M216,116.69V216H152V152H104v64H40V116.69l82.34-82.35a8,8,0,0,1,11.32,0Z"
            opacity="0.2"
          ></path>
          <path d="M240,208H224V136l2.34,2.34A8,8,0,0,0,237.66,127L139.31,28.68a16,16,0,0,0-22.62,0L18.34,127a8,8,0,0,0,11.32,11.31L32,136v72H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,120l80-80,80,80v88H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48Zm96,88H112V160h32Z"></path>
        </svg>
      </Link>
    </main>
  );
}
