import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { stats } from "@/lib/site";

export function Intro() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <Reveal className="lg:col-span-5">
          <p className="text-xs tracking-[0.22em] text-iris-deep uppercase">
            Ateliér
          </p>
          <h2 className="mt-4 text-3xl text-display sm:text-4xl lg:text-5xl">
            Oko, které patří jen vám.
          </h2>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <p className="text-lg leading-relaxed text-ink/80">
              Skleněná oční protéza není výrobek ze šuplíku. Vzniká z čiré
              trubičky nad plamenem, nit po niti, podle zdravého oka. Lesk,
              tvrdost a hladkost skla plast nenahradí — a pacient odchází s
              novým okem hned po první návštěvě.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base leading-relaxed text-muted-ink">
              Řemeslo sem přinesli skláři z německé Lauschy, kde v roce 1835
              vzniklo první skleněné oko. Do Jablonce se dostalo po válce.
              Petr Adamovský se ho učil od roku 1987 u Břetislava Pivrnce a od
              roku 1992 vede dílnu sám.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="border-t border-line-ink">
        <RevealGroup className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <RevealItem
              key={item.label}
              className="border-line-ink px-5 py-8 sm:px-8 not-last:border-r max-lg:odd:border-r max-lg:[&:nth-child(-n+2)]:border-b"
            >
              <p className="text-3xl text-display sm:text-4xl">{item.value}</p>
              <p className="mt-2 text-sm text-muted-ink">{item.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
