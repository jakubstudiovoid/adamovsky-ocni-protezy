import { createFileRoute } from "@tanstack/react-router";
import { ReservationForm } from "@/components/booking/reservation-form";
import { Reveal } from "@/components/reveal";
import { pageHead } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/navsteva")({
  head: () =>
    pageHead({
      title: "Rezervace návštěvy",
      description:
        "Objednejte se k Petrovi Adamovskému na výrobu skleněné oční protézy v Jablonci nad Nisou. Příjem objednávek od pondělí do pátku od 10:00. Na počkání, zhruba hodina.",
      path: "/navsteva",
    }),
  component: NavstevaPage,
});

function NavstevaPage() {
  return (
    <article className="pt-24">
      <header className="mx-auto max-w-3xl px-5 pb-10 pt-10 sm:px-8">
        <p className="text-xs tracking-[0.22em] text-iris uppercase">Návštěva</p>
        <h1 className="mt-4 text-4xl text-display sm:text-6xl">
          Vyberte si termín.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Kalendář je poptávka, ne automatická rezervace. Petr termín potvrdí
          telefonem nebo SMS.
        </p>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ReservationForm />
        </div>
        <aside className="lg:col-span-5">
          <Reveal className="rounded-xl border border-line bg-surface p-6 sm:p-8">
            <h2 className="text-xl tracking-tight">Co si vzít s sebou</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
              <li>ePoukaz na výrobu oční protézy</li>
              <li>Kartičku zdravotní pojišťovny</li>
              <li>Hotovost na doplatek</li>
              <li>Předchozí protézu, pokud jdete na výměnu</li>
            </ul>
            <h2 className="mt-8 text-xl tracking-tight">Kdy</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {site.hours.label} {site.hours.detail}. {site.hours.note}
            </p>
            <h2 className="mt-8 text-xl tracking-tight">Poštou</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Pokud se nemůžete dostavit, je možné zaslat vzorek poštou.
              Domluvte se nejdřív telefonicky.
            </p>
            <p className="mt-8 text-sm">
              <a href={`tel:${site.phone}`} className="text-fg hover:text-iris">
                {site.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="text-fg hover:text-iris">
                {site.email}
              </a>
            </p>
          </Reveal>
        </aside>
      </div>
    </article>
  );
}
