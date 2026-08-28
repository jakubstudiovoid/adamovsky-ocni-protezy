import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-6">
          <img
            src="/images/petr-adamovsky.jpg"
            alt="Petr Adamovský, mistr výroby skleněných očních protéz"
            className="aspect-[4/3] w-full rounded-xl object-cover"
            loading="lazy"
          />
        </Reveal>
        <div className="lg:col-span-6 lg:pl-6">
          <Reveal>
            <p className="text-xs tracking-[0.22em] text-iris-deep uppercase">
              Petr Adamovský
            </p>
            <h2 className="mt-4 text-3xl text-display sm:text-5xl">
              Jeden mistr. Jedna dílna.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-ink/80 sm:text-lg">
              Vyučil se sklářem v Jablonci. Myslel, že bude foukat figurky. Místo
              toho se v roce 1987 v Palackého 11 — tehdy pod státním podnikem
              Oční optika Praha — setkal s řemeslem, které se tady předává z
              ruky do ruky od německého skláře Ulmana.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-base leading-relaxed text-muted-ink">
              Učil ho Břetislav Pivrnec. V roce 1992 založili vlastní provoz.
              Od roku 2000, kdy Pivrnec odešel do důchodu, stojí Petr v dílně
              sám. Surovinu dováží dodnes z Lauschy.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <Button asChild variant="ink" className="mt-8">
              <Link to="/remeslo">Celý příběh</Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
