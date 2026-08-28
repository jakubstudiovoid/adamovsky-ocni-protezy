import type { ReactNode } from "react";
import { CookieNotice } from "@/components/cookie-notice";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/json-ld";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-iris focus:px-4 focus:py-2 focus:text-fg"
      >
        Přeskočit na obsah
      </a>
      <Header />
      <main id="obsah">{children}</main>
      <Footer />
      <CookieNotice />
      <JsonLd />
    </div>
  );
}
