import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/remeslo")({
  head: () =>
    pageHead({
      title: "Řemeslo skleněných očních protéz",
      description:
        "Historie skleněných očních protéz od Lauschy 1835 po Jablonec. Petr Adamovský se řemeslu učí od roku 1987 a od 1992 vede vlastní dílnu.",
      path: "/remeslo",
    }),
  component: RemesloPage,
});

const press = [
  {
    source: "Český rozhlas Liberec",
    year: "2026",
    title: "Sklo, které pomáhá",
    href: "https://www.mujrozhlas.cz/host-dopoledne-pod-jestedem/tema-sklo-ktere-pomaha",
  },
  {
    source: "iDNES.cz",
    year: "2025",
    title: "Sklář Petr Adamovský z Jablonce: Jak se vyrábějí oční protézy",
    href: "https://www.idnes.cz/liberec/zpravy/ocni-protezy-sklenene-oko-petr-adamovsky-sklar-protetik-rozhovor.A250821_866941_liberec-zpravy_lav",
  },
  {
    source: "Český rozhlas Liberec",
    year: "2023",
    title: "Ve městě skla a bižuterie vznikají i skleněné oční protézy",
    href: "https://liberec.rozhlas.cz/ve-meste-skla-a-bizuterie-vznikaji-i-sklenene-ocni-protezy-9026418",
  },
  {
    source: "Město Jablonec nad Nisou",
    year: "",
    title: "Petr Adamovský — sklář, který lidem navrací smysl života",
    href: "https://www.mestojablonec.cz/petr-adamovsky-sklar-ktery-lidem-navraci-smysl-zivota-1440",
  },
  {
    source: "iDNES.cz",
    year: "2016",
    title: "Vyrobit skleněné oko zabere hodinu a půl. Každý kus je originál",
    href: "https://www.idnes.cz/ekonomika/domaci/video-odhalte-tajemstvi-sklenenych-oci.A160624_105508_ekonomika_kris",
  },
  {
    source: "Český rozhlas Sever",
    year: "2015",
    title: "Oční protézy pomáhají lidem vrátit se do normálního života",
    href: "https://sever.rozhlas.cz/ocni-protezy-pomahaji-lidem-vratit-se-do-normalniho-zivota-6829640",
  },
];

function RemesloPage() {
  return (
    <article className="pt-24">
      <header className="mx-auto max-w-3xl px-5 pb-12 pt-10 sm:px-8">
        <p className="text-xs tracking-[0.22em] text-iris uppercase">Řemeslo</p>
        <h1 className="mt-4 text-4xl text-display sm:text-6xl">
          Linie, která nesmí zmizet.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Skleněné oční protézy se v Jablonci foukají od konce druhé světové
          války. Petr Adamovský je dnes jedním z posledních, kdo tohle řemeslo
          v Česku ještě drží.
        </p>
      </header>

      <Reveal className="mx-auto max-w-6xl px-5 sm:px-8">
        <img
          src="/images/hero-atelier.webp"
          alt="Sklář fouká sklo nad kahanem v temné dílně"
          className="aspect-[16/8] w-full rounded-xl object-cover"
        />
      </Reveal>

      <div className="mx-auto max-w-3xl space-y-6 px-5 py-16 text-base leading-relaxed text-fg/85 sm:px-8">
        <Reveal>
          <h2 className="text-2xl text-display sm:text-3xl">Lauscha, 1835</h2>
          <p className="mt-4 text-muted">
            První oční protéza ze skla vznikla v německém městě Lauscha. Odtud
            se řemeslo rozneslo po Evropě s obchodníky, kteří tehdy hodně
            cestovali. Speciální sklo, ze kterého se protézy foukají, se z
            Lauschy dováží dodnes.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-2xl text-display sm:text-3xl">Jablonec po válce</h2>
          <p className="mt-4 text-muted">
            Výrobu do Jablonce přinesl německý sklář Ulman. Po válce tu mohl
            zůstat a naučil řemeslo další nástupce. Mezi nimi byl později
            Břetislav Pivrnec — mistr, který pak učil Petra.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-2xl text-display sm:text-3xl">1987–1992</h2>
          <p className="mt-4 text-muted">
            Petr Adamovský se s výrobou seznámil v roce 1987 v Palackého 11,
            tehdy pod státním podnikem Oční optika Praha. Učil se materiál,
            metody i postup. V roce 1992 se dílna osamostatnila. Petr i
            Břetislav Pivrnec pracovali vedle sebe, každý na svůj živnostenský
            list.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-2xl text-display sm:text-3xl">Dílna dnes</h2>
          <p className="mt-4 text-muted">
            Roku 1996 se provozovna přestěhovala z Palackého na Podhorskou. Od
            března 2021 sídlí ve Svatopluka Čecha 3007/30a. Břetislav Pivrnec
            odešel do důchodu v roce 2000. Petr pracuje sám.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-2xl text-display sm:text-3xl">Proč sklo</h2>
          <p className="mt-4 text-muted">
            Plastové protézy existují a jsou levnější. Lidé ale dávají přednost
            skleněným: mají lesk, hladší a tvrdý povrch, a vznikají na počkání.
            Nevýhoda je jediná — sklo se může rozbít. Povrch slzy postupně
            naleptají, proto se protéza obvykle mění po půl roce. Pojišťovna
            přispívá na dva kusy ročně.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-2xl text-display sm:text-3xl">Nejen pacienti</h2>
          <p className="mt-4 text-muted">
            Hlavní práce je pro lidi, kteří přišli o oko úrazem nebo nemocí.
            Dílna ale vyrábí i konformery — dočasné protézy — pro nemocnice, a
            oči pro film, divadlo, sochy a reklamu.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-muted">
            Šikovnému skláři trvá nejméně tři a půl roku, než řemeslo ovládne.
            Každý kus je pečlivá, přesná práce. Od zdravého oka má být protéza
            k nerozeznání.
          </p>
        </Reveal>

        <Reveal>
          <section id="napsali" className="scroll-mt-28">
            <p className="mt-16 text-xs tracking-[0.22em] text-iris uppercase">
              Napsali o nás
            </p>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {press.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-baseline justify-between gap-6 py-5"
                  >
                    <span>
                      <span className="block text-xs tracking-[0.16em] text-muted uppercase">
                        {item.source}
                        {item.year ? ` · ${item.year}` : ""}
                      </span>
                      <span className="mt-2 block tracking-tight transition-colors group-hover:text-iris">
                        {item.title}
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-muted transition-colors group-hover:text-iris" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>
    </article>
  );
}
