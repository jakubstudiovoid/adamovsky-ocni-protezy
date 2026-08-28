import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <section className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.22em] text-iris uppercase">404</p>
      <h1 className="mt-4 max-w-md text-4xl text-display">
        Tady nic není.
      </h1>
      <p className="mt-4 max-w-sm text-sm text-muted">
        Stránka neexistuje nebo byla přesunuta. Vraťte se na úvod, nebo si
        rovnou rezervujte návštěvu.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link to="/">Úvod</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/navsteva">Rezervovat</Link>
        </Button>
      </div>
    </section>
  );
}
