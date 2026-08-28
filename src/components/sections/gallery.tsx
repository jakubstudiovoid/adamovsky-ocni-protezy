import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const pieces = [
  {
    src: "/images/iris-blue.jpg?v=20260828",
    alt: "Makro duhovky skleněné oční protézy ve světle modré",
    caption: "Světlemodrá",
    note: "Nejtěžší kresba — každá chyba je vidět.",
  },
  {
    src: "/images/iris-brown.jpg?v=20260828",
    alt: "Makro duhovky skleněné oční protézy v tmavě hnědé",
    caption: "Tmavohnědá",
    note: "Nejpřirozenější. Nejčastější.",
  },
  {
    src: "/images/iris-green.jpg?v=20260828",
    alt: "Makro duhovky skleněné oční protézy v šedozelené",
    caption: "Šedozelená",
    note: "Jemná, přesná, nesnese kompromis.",
  },
];

export function Gallery() {
  return (
    <section className="bg-bg text-fg">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-iris uppercase">Originál</p>
          <h2 className="mt-4 max-w-xl text-3xl text-display sm:text-5xl">
            Každý kus je jedinečný.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Duhovka se nestříká ani netiskne. Skládá se z barevných skleněných
            nití, podle oka, které zbývá.
          </p>
        </Reveal>

        <RevealGroup
          className="mx-auto mt-16 grid max-w-4xl grid-cols-3 items-start gap-4 sm:gap-10"
          stagger={0.1}
        >
          {pieces.map((item) => (
            <RevealItem key={item.src}>
              <figure className="flex flex-col items-center text-center">
                <div className="iris-disc aspect-square w-full">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
                <figcaption className="mt-4 sm:mt-5">
                  <p className="text-xs tracking-[0.22em] uppercase">{item.caption}</p>
                  <p className="mt-2 hidden text-sm leading-relaxed text-muted sm:block">
                    {item.note}
                  </p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-16 overflow-hidden rounded-xl" delay={0.12}>
          <img
            src="/images/collection.jpg?v=20260828"
            alt="Řada ručně foukaných skleněných očních protéz na černém sametu"
            className="aspect-[3/2] w-full object-cover"
            loading="lazy"
          />
        </Reveal>

        <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-2" stagger={0.1}>
          <RevealItem>
            <img
              src="/images/collection-1.jpg?v=20260828"
              alt="Detail skleněných očních protéz uložených v dřevěné krabičce"
              className="aspect-[3/2] w-full rounded-xl object-cover"
              loading="lazy"
            />
          </RevealItem>
          <RevealItem>
            <img
              src="/images/collection-2.jpg?v=20260828"
              alt="Ručně foukané skleněné oční protézy na béžové látce"
              className="aspect-[3/2] w-full rounded-xl object-cover"
              loading="lazy"
            />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
