import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { pageHead } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () =>
    pageHead({
      title: "Kontakt a dílna",
      description:
        "Petr Adamovský, Svatopluka Čecha 3007/30a, 466 02 Jablonec nad Nisou. Telefon +420 603 522 352, e-mail oko@ocniprotezy-sklo.cz.",
      path: "/kontakt",
    }),
  component: KontaktPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Zadejte jméno").max(80),
  email: z
    .string()
    .trim()
    .min(3)
    .max(120)
    .refine((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Zadejte platný e-mail"),
  subject: z.string().trim().max(120).optional(),
  message: z.string().trim().min(8, "Napište zprávu").max(1200),
});

function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    const subject = encodeURIComponent(parsed.data.subject || "Dotaz z webu");
    const body = encodeURIComponent(
      `Jméno: ${parsed.data.name}\nE-mail: ${parsed.data.email}\n\n${parsed.data.message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <article className="pt-24">
      <header className="mx-auto max-w-3xl px-5 pb-10 pt-10 sm:px-8">
        <p className="text-xs tracking-[0.22em] text-iris uppercase">Kontakt</p>
        <h1 className="mt-4 text-4xl text-display sm:text-6xl">Dílna v Jablonci.</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Od března 2021 ve Svatopluka Čecha. Když se nedovoláte, napište SMS —
          právě se fouká protéza.
        </p>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">
                Adresa
              </dt>
              <dd className="mt-2 text-base leading-relaxed">
                {site.name}
                <br />
                {site.address.line1}
                <br />
                {site.address.zip} {site.address.city}
                <br />
                IČO {site.ico}
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">
                Telefon
              </dt>
              <dd className="mt-2 text-base">
                <a href={`tel:${site.phone}`} className="hover:text-iris">
                  {site.phoneDisplay}
                </a>
                <p className="mt-2 text-muted">{site.hours.note}</p>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">
                E-mail
              </dt>
              <dd className="mt-2 text-base">
                <a href={`mailto:${site.email}`} className="hover:text-iris">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">
                Objednávky
              </dt>
              <dd className="mt-2 text-base text-muted">{site.hours.detail}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.08}>
          {sent ? (
            <div className="rounded-xl border border-line bg-surface p-8">
              <h2 className="text-2xl text-display">Děkuji.</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Otevřel se váš e-mail. Pokud se tak nestalo, napište přímo na{" "}
                {site.email}.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-xl border border-line bg-surface p-6 sm:p-8"
            >
              <h2 className="text-xl tracking-tight">Napsat zprávu</h2>
              <div className="mt-6 grid gap-5">
                <div>
                  <Label htmlFor="c-name" className="mb-2">
                    Jméno
                  </Label>
                  <Input
                    id="c-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    autoComplete="name"
                    required
                  />
                  {errors.name ? (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="c-email" className="mb-2">
                    E-mail
                  </Label>
                  <Input
                    id="c-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    autoComplete="email"
                    required
                  />
                  {errors.email ? (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="c-subject" className="mb-2">
                    Předmět
                  </Label>
                  <Input
                    id="c-subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="c-message" className="mb-2">
                    Zpráva
                  </Label>
                  <Textarea
                    id="c-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                  {errors.message ? (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                  ) : null}
                </div>
              </div>
              <Button type="submit" variant="iris" className="mt-6">
                Odeslat
              </Button>
            </form>
          )}
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <iframe
          title="Mapa dílny Petra Adamovského"
          src={site.mapEmbed}
          className="h-80 w-full rounded-xl border-0 grayscale contrast-125 lg:h-[28rem]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <p className="mt-4 text-sm">
          <a
            href={site.mapLink}
            className="text-muted hover:text-iris"
            target="_blank"
            rel="noreferrer"
          >
            Otevřít navigaci
          </a>
        </p>
      </div>
    </article>
  );
}
