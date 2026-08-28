import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Insurance() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <p className="text-xs tracking-[0.22em] text-iris-deep uppercase">
            Od ledna 2026
          </p>
          <h2 className="mt-4 text-3xl text-display sm:text-5xl">
            Poukaz jen jako ePoukaz.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/80">
            Smlouvy se všemi zdravotními pojišťovnami. Na skleněnou protézu
            není potřeba souhlas revizního lékaře. Nárok jsou dva kusy ročně —
            počet předepíše lékař.
          </p>
          <Button asChild variant="ink" className="mt-8">
            <Link to="/epoukaz">Co si vzít s sebou</Link>
          </Button>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <dl className="grid gap-px overflow-hidden rounded-xl bg-line-ink sm:grid-cols-2">
            {[
              ["Kód výrobku", site.productCode],
              ["Příspěvek pojišťovny", `${site.insuranceContribution} / ks`],
              ["Doplatek", "V hotovosti na místě"],
              ["Revizní lékař", "Není nutný"],
            ].map(([k, v]) => (
              <div key={k} className="bg-paper px-6 py-7">
                <dt className="text-xs tracking-[0.16em] text-muted-ink uppercase">
                  {k}
                </dt>
                <dd className="mt-2 text-xl tracking-tight">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
