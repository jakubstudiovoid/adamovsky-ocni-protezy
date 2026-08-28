export const site = {
  name: "Oční protézy Petr Adamovský",
  shortName: "Oční protézy",
  person: "Petr Adamovský",
  tagline: "Skleněné oční protézy",
  title: "Oční protézy Petr Adamovský | Jablonec nad Nisou",
  description:
    "Oční protézy Petr Adamovský — výroba skleněných očních protéz v Jablonci nad Nisou. Ručně, nad kahanem, na počkání. Jedno z posledních míst v Česku, kde se toto řemeslo ještě drží.",
  url: "https://www.ocniprotezy-sklo.cz",
  locale: "cs_CZ",
  email: "oko@ocniprotezy-sklo.cz",
  phone: "+420603522352",
  phoneDisplay: "+420 603 522 352",
  ico: "13930095",
  productCode: "4000140",
  insuranceContribution: "780 Kč",
  address: {
    line1: "Svatopluka Čecha 3007/30a",
    city: "Jablonec nad Nisou",
    zip: "466 02",
    country: "Česko",
    countryCode: "CZ",
    lat: 50.7275402,
    lng: 15.1790333,
  },
  hours: {
    label: "Příjem objednávek",
    detail: "od pondělí do pátku od 10:00",
    workshopLabel: "Provoz dílny",
    workshop: "pondělí–pátek 8:00–12:00 a 13:00–15:30",
    note: "Pokud se nedovoláte, mám zrovna rozpracovanou protézu. Napište SMS — ozvu se.",
    opens: "08:00",
    closes: "15:30",
    morningCloses: "12:00",
    afternoonOpens: "13:00",
    days: "Po–Pá",
  },
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=15.1740%2C50.7245%2C15.1840%2C50.7305&layer=mapnik&marker=50.72754%2C15.17903",
  mapLink: "https://www.google.com/maps/dir/?api=1&destination=50.7275402,15.1790333",
} as const;

export const nav = [
  { href: "/remeslo", label: "Řemeslo" },
  { href: "/navsteva", label: "Návštěva" },
  { href: "/epoukaz", label: "ePoukaz" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const visitTypes = [
  {
    id: "first" as const,
    title: "První návštěva",
    text: "Nová protéza na počkání. Přineste ePoukaz a kartičku pojišťovny.",
  },
  {
    id: "replacement" as const,
    title: "Výměna",
    text: "Povrch skla slzy postupně naleptají. Výměna je obvykle po půl roce.",
  },
  {
    id: "conformer" as const,
    title: "Konformer",
    text: "Dočasná protéza pro nemocnice a pooperační péči.",
  },
  {
    id: "commercial" as const,
    title: "Komerční zakázka",
    text: "Oči pro film, divadlo, sochy a reklamu. Mimo zdravotní péči.",
  },
];

export const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Setkání",
    text: "Petr si prohlédne oční důlek a zdravé oko. Barva, kresba, velikost — všechno se bere z živého originálu, ne ze vzorníku.",
  },
  {
    n: "02",
    title: "Foukání",
    text: "Z čiré trubičky speciálního skla z Lauschy se nad kahanem vyfoukne bulva. Tvar se ladí podle důlku, ne podle šablony.",
  },
  {
    n: "03",
    title: "Kresba",
    text: "Barevné skleněné nitě tvoří duhovku a drobné žilky. Tmavohnědá je nejpřirozenější. Světlemodrá a šedozelená nesnesou jedinou chybu.",
  },
  {
    n: "04",
    title: "Předání",
    text: "Hotová protéza je k nerozeznání od zdravého oka. Odcházíte s ní hned — celý proces trvá zhruba hodinu.",
  },
];

export const stats = [
  { value: "1835", label: "První skleněné oko, Lauscha" },
  { value: "1987", label: "Petr se učí řemeslu" },
  { value: "1992", label: "Založení vlastní dílny" },
  { value: "± 1 h", label: "Výroba jedné protézy" },
];

export type VisitTypeId = (typeof visitTypes)[number]["id"];
