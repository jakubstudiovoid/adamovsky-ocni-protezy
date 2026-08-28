import { Link } from "@tanstack/react-router";
import { IrisMark } from "@/components/iris-mark";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg text-fg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5">
            <IrisMark className="size-7 text-fg" />
            <span className="text-sm font-medium tracking-[0.22em] uppercase">
              {site.shortName}
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            Výroba skleněných očních protéz. Ručně, nad kahanem, v Jablonci nad
            Nisou — v tradici, která tady žije od konce války.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
              Ateliér
            </p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-fg">
              {site.address.line1}
              <br />
              {site.address.zip} {site.address.city}
            </address>
            <p className="mt-3 text-sm text-muted">IČO {site.ico}</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
              Spojení
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="text-fg no-underline hover:text-iris"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-fg no-underline hover:text-iris"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-muted">{site.hours.detail}</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
              Stránky
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/remeslo" className="text-fg no-underline hover:text-iris">
                  Řemeslo
                </Link>
              </li>
              <li>
                <Link to="/navsteva" className="text-fg no-underline hover:text-iris">
                  Rezervace
                </Link>
              </li>
              <li>
                <Link to="/epoukaz" className="text-fg no-underline hover:text-iris">
                  ePoukaz
                </Link>
              </li>
              <li>
                <Link to="/soukromi" className="text-fg no-underline hover:text-iris">
                  Soukromí
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Petr Adamovský. Všechna práva vyhrazena.</p>
          <p>Skleněné oční protézy · Jablonec nad Nisou</p>
        </div>
      </div>
    </footer>
  );
}
