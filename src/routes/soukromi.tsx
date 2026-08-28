import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/soukromi")({
  head: () =>
    pageHead({
      title: "Zásady soukromí",
      description:
        "Zpracování osobních údajů v dílně Petra Adamovského. Bez sledovacích cookies, bez předávání třetím stranám k marketingu.",
      path: "/soukromi",
    }),
  component: SoukromiPage,
});

function SoukromiPage() {
  return (
    <article className="pt-24">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="text-xs tracking-[0.22em] text-iris uppercase">Právní</p>
        <h1 className="mt-4 text-4xl text-display">Zásady soukromí</h1>
        <p className="mt-6 text-sm text-muted">Účinné od 28. srpna 2026.</p>

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-fg/80">
          <section>
            <h2 className="text-xl text-fg">Správce</h2>
            <p className="mt-3">
              Petr Adamovský, IČO {site.ico}, {site.address.line1},{" "}
              {site.address.zip} {site.address.city}. E-mail {site.email},
              telefon {site.phoneDisplay}.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-fg">Jaké údaje</h2>
            <p className="mt-3">
              Pokud pošlete e-mail, SMS, nebo vyplníte formulář, zpracováváme
              jméno, kontakt a obsah zprávy — jen proto, abychom mohli
              odpovědět a domluvit návštěvu. Zdravotní péči evidujeme podle
              povinností vyplývajících ze smluv se zdravotními pojišťovnami.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-fg">Cookies a měření</h2>
            <p className="mt-3">
              Tyto stránky nepoužívají sledovací cookies, analytiku třetích
              stran ani reklamní identifikátory. Rezervace v kalendáři se
              ukládá pouze ve vašem prohlížeči (localStorage) a na server se
              neodesílá. Můžete ji kdykoli smazat vyčištěním dat webu.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-fg">Předávání</h2>
            <p className="mt-3">
              Údaje nepředáváme k marketingu. Zdravotním pojišťovnám předáváme
              jen to, co zákon a smlouva o poskytování zdravotní péče
              vyžadují. Hosting webu může technicky zpracovávat běžné logy
              připojení (IP adresa, prohlížeč) po dobu nezbytnou k provozu a
              bezpečnosti.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-fg">Vaše práva</h2>
            <p className="mt-3">
              Máte právo na přístup, opravu, výmaz, omezení zpracování a
              stížnost u Úřadu pro ochranu osobních údajů. Pro uplatnění práv
              napište na {site.email}.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
