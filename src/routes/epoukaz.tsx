import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/epoukaz")({
  head: () =>
    pageHead({
      title: "ePoukaz a pojišťovny",
      description:
        "Od ledna 2026 platí na skleněnou oční protézu pouze ePoukaz. Kód 4000140, příspěvek 780 Kč, dva kusy ročně.",
      path: "/epoukaz",
    }),
  component: EpoukazPage,
});

function EpoukazPage() {
  return (
    <article className="pt-24">
      <header className="mx-auto max-w-3xl px-5 pb-12 pt-10 sm:px-8">
        <p className="text-xs tracking-[0.22em] text-iris uppercase">
          Od ledna 2026
        </p>
        <h1 className="mt-4 text-4xl text-display sm:text-6xl">
          ePoukaz
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Poukaz na výrobu očních protéz se vystavuje pouze jako ePoukaz. Papír
          nestačí. Dílna má smlouvy se všemi zdravotními pojišťovnami.
        </p>
      </header>

      <div className="mx-auto grid max-w-3xl gap-6 px-5 sm:grid-cols-3 sm:px-8">
        {[
          ["Kód výrobku", site.productCode, "Platí od 1. 4. 2019"],
          ["Příspěvek", site.insuranceContribution, "Na 1 ks, všechny pojišťovny"],
          ["Nárok", "2 ks / rok", "Počet kusů předepíše lékař"],
        ].map(([k, v, n]) => (
          <Reveal key={k} className="rounded-xl border border-line bg-surface p-6">
            <p className="text-xs tracking-[0.16em] text-muted uppercase">{k}</p>
            <p className="mt-3 text-2xl tracking-tight">{v}</p>
            <p className="mt-2 text-sm text-muted">{n}</p>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto max-w-3xl space-y-6 px-5 py-16 text-base leading-relaxed sm:px-8">
        <Reveal>
          <h2 className="text-2xl text-display">Co vzít do dílny</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>ePoukaz na výrobu oční protézy</li>
            <li>Kartičku zdravotní pojišťovny ke kontrole údajů</li>
            <li>
              Peníze v hotovosti na doplatek — spoluúčast klienta od 1. 7. 2012.
              Jde o rozdíl mezi cenou protézy a částkou, kterou hradí
              pojišťovna (aktuálně {site.insuranceContribution} na 1 ks).
            </li>
          </ul>
        </Reveal>
        <Reveal>
          <h2 className="text-2xl text-display">Jak to probíhá</h2>
          <p className="mt-4 text-muted">
            Protéza se vyrábí na počkání, zhruba hodinu. Odcházíte s ní hned.
            Pokud jdete na výměnu, vezměte si stávající protézu s sebou. Vzorek
            lze ve výjimečných případech zaslat i poštou — nejdřív se ozvěte.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-2xl text-display">Nemocnice a konformery</h2>
          <p className="mt-4 text-muted">
            Dílna zhotovuje také konformery — dočasné protézy — pro pracoviště,
            která se zabývají operacemi očí.
          </p>
        </Reveal>
        <Reveal>
          <Button asChild variant="iris" className="mt-4">
            <Link to="/navsteva">Rezervovat termín</Link>
          </Button>
        </Reveal>
      </div>
    </article>
  );
}
