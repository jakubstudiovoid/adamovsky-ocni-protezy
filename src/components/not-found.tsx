import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";

export function NotFound() {
  useEffect(() => {
    document.title = `Stránka nenalezena — ${site.name}`;
  }, []);

  return (
    <section className="flex min-h-dvh flex-col items-center justify-center px-6 py-28 text-center">
      <div className="iris-disc size-36 ring-1 ring-line sm:size-44">
        <img
          src="/images/iris-blue.jpg?v=20260828"
          alt=""
          className="size-full object-cover"
        />
      </div>
      <p className="mt-10 text-xs tracking-[0.22em] text-iris uppercase">404</p>
      <h1 className="mt-4 max-w-lg text-4xl text-display sm:text-6xl">
        Tady nic není.
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
        Stránka neexistuje nebo byla přesunuta. Vraťte se na úvod, nebo si
        rovnou rezervujte návštěvu.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild size="lg">
          <Link to="/">Úvod</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/navsteva">Rezervovat</Link>
        </Button>
      </div>
      <nav
        className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2"
        aria-label="Další stránky"
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="text-sm text-fg no-underline transition-colors duration-150 hover:text-iris"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
