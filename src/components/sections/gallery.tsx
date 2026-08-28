import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const pieces = [
  {
    src: "/images/iris-blue.jpg",
    alt: "Makro duhovky skleněné oční protézy v ocelově modré",
    caption: "Světlemodrá",
    note: "Nejtěžší kresba — každá chyba je vidět.",
  },
  {
    src: "/images/iris-brown.jpg",
    alt: "Makro duhovky skleněné oční protézy v tmavě hnědé",
    caption: "Tmavohnědá",
    note: "Nejpřirozenější. Nejčastější.",
  },
  {
    src: "/images/iris-green.jpg",
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
            Každý kus je jediný.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Duhovka se nestříká ani netiskne. Skládá se z barevných skleněných
            nití, podle oka, které zbývá. V Česku potřebuje protézu zhruba dva
            tisíce lidí.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-3" stagger={0.1}>
          {pieces.map((item) => (
            <RevealItem key={item.src}>
              <figure>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-square w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-4">
                  <p className="text-sm font-medium tracking-tight">{item.caption}</p>
                  <p className="mt-1 text-sm text-muted">{item.note}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 overflow-hidden rounded-xl" delay={0.12}>
          <img
            src="/images/collection.jpg"
            alt="Řada ručně foukaných skleněných očních protéz na černém sametu"
            className="aspect-[3/2] w-full object-cover"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
