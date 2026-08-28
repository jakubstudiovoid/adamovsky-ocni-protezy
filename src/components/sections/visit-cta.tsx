import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function VisitCta() {
  return (
    <section className="relative isolate overflow-hidden bg-bg text-fg">
      <img
        src="/images/jablonec.jpg"
        alt="Jablonec nad Nisou, sklářské město v Jizerských horách"
        className="absolute inset-0 size-full object-cover opacity-35"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/40" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-iris uppercase">Návštěva</p>
          <h2 className="mt-4 max-w-xl text-3xl text-display sm:text-5xl">
            Objednejte se. Ozveme se.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-fg/75">
            Příjem objednávek {site.hours.detail}. Když se nedovoláte, napište
            SMS. Můžete si také vybrat termín v kalendáři a nechat si ho
            potvrdit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="iris">
              <Link to="/navsteva">Rezervovat termín</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`sms:${site.phone}`}>Napsat SMS</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
