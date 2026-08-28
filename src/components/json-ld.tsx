import { site } from "@/lib/site";

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
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: site.hours.opens,
          closes: site.hours.closes,
        },
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
