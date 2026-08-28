import { site } from "@/lib/site";

export function pageHead(opts: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}) {
  const title = opts.title ? `${opts.title} — ${site.shortName}` : site.title;
  const description = opts.description ?? site.description;
  const canonical = `${site.url}${opts.path ?? "/"}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: site.name },
      {
        name: "robots",
        content: opts.noIndex
          ? "noindex, nofollow"
          : "index, follow, max-image-preview:large",
      },
      { name: "geo.region", content: "CZ-LI" },
      { name: "geo.placename", content: "Jablonec nad Nisou" },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
