import { site } from "@/lib/site";

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${site.url}/#studio`,
        name: site.name,
        alternateName: ["Oční protézy sklo", site.person],
        description: site.description,
        url: site.url,
        image: `${site.url}/og.jpg`,
        telephone: site.phone,
        email: site.email,
        vatID: site.ico,
        priceRange: "$$",
        currenciesAccepted: "CZK",
        paymentAccepted: "Hotovost, zdravotní pojišťovna",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.line1,
          postalCode: site.address.zip,
          addressLocality: site.address.city,
          addressCountry: site.address.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.address.lat,
          longitude: site.address.lng,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: weekdays,
            opens: site.hours.opens,
            closes: site.hours.morningCloses,
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: weekdays,
            opens: site.hours.afternoonOpens,
            closes: site.hours.closes,
          },
        ],
        areaServed: { "@type": "Country", name: "Česko" },
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#petr`,
        name: site.person,
        jobTitle: "Výrobce skleněných očních protéz",
        worksFor: { "@id": `${site.url}/#studio` },
        address: {
          "@type": "PostalAddress",
          addressLocality: site.address.city,
          addressCountry: site.address.countryCode,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
