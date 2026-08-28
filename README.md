# Petr Adamovský — Skleněné oční protézy

Prémiový web dílny Petra Adamovského v Jablonci nad Nisou.

## Co na webu je

- Úvod s řemeslem, postupem a ateliérem
- Rezervace termínu (kalendář, časové sloty, potvrzení)
- ePoukaz a pojišťovny (od ledna 2026)
- Kontakt, mapa, formulář
- Zásady soukromí, SEO, JSON-LD, bezpečnostní hlavičky

## Nasazení na Vercel

1. Importujte tento repozitář na [Vercel](https://vercel.com/new).
2. Framework nechte detekovat (Vite). Build: `npm run build`.
3. V Environment Variables nastavte `VITE_AUTH_ENABLED=false` (web nemá přihlášení).
4. Po nasazení připojte doménu `ocniprotezy-sklo.cz`.

Žádné tajné klíče nejsou potřeba. Rezervace se ukládá v prohlížeči návštěvníka; e-mail jde přes `mailto:oko@ocniprotezy-sklo.cz`.
