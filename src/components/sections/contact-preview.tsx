import { Reveal } from "@/components/reveal";
import { StudioMap } from "@/components/studio-map";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function ContactPreview() {
  return (
    <section className="bg-bg text-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
        <Reveal className="lg:col-span-4">
          <p className="text-xs tracking-[0.22em] text-iris uppercase">Kontakt</p>
          <h2 className="mt-4 text-3xl text-display">Dílna</h2>
          <address className="mt-6 not-italic text-base leading-relaxed text-fg/85">
            {site.name}
            <br />
            {site.address.line1}
            <br />
            {site.address.zip} {site.address.city}
          </address>
          <p className="mt-6 text-sm text-muted">
            {site.hours.workshopLabel}: {site.hours.workshop}
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phone}`} className="text-fg hover:text-iris">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-fg hover:text-iris">
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-3 text-sm text-muted">{site.hours.note}</p>
          <Button asChild size="lg" variant="iris" className="mt-8">
            <a href={site.mapLink} target="_blank" rel="noreferrer">
              Navigovat
            </a>
          </Button>
        </Reveal>
        <Reveal className="lg:col-span-8" delay={0.1}>
          <StudioMap />
        </Reveal>
      </div>
    </section>
  );
}
