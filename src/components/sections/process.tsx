import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section className="bg-bg text-fg">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-iris uppercase">Postup</p>
          <h2 className="mt-4 max-w-xl text-3xl text-display sm:text-5xl">
            Hodina nad kahanem.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="overflow-hidden rounded-xl lg:col-span-5" delay={0.08}>
            <img
              src="/images/craft.jpg?v=20260828"
              alt="Skleněná oční protéza se tvaruje nad plamenem kahanu"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <RevealGroup className="grid gap-8 lg:col-span-7 lg:gap-10" stagger={0.1}>
            {processSteps.map((step) => (
              <RevealItem
                key={step.n}
                className="grid grid-cols-[auto_1fr] gap-5 border-t border-line pt-6"
              >
                <span className="font-medium tabular-nums text-iris">{step.n}</span>
                <div>
                  <h3 className="text-xl tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {step.text}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
