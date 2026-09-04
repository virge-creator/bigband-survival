# Bigband Survival

Website van Bigband Survival, het projectorkest voor muziekschoolleerlingen en jonge
muzikanten in Midden-Limburg. Gebouwd met [Astro](https://astro.build) en Tailwind CSS,
gehost op GitHub Pages.

## Ontwikkelen

```sh
npm install
npm run dev       # http://localhost:4321/
npm run build     # statische site in ./dist/
npm run preview   # bekijk de build lokaal
```

Node 22.12 of hoger is vereist.

## Configuratie

Alle site-instellingen staan in `src/site.config.ts`:

- `url`, `name`, `description`, adres en e-mailadres (gebruikt in meta tags en structured data).
- `forms.contact` en `forms.aanmelden`: Formspree form-ID's. Maak een formulier op
  https://formspree.io en vul hier het ID in (het deel na `/f/`). Zolang hier
  `YOUR_FORM_ID` staat, versturen de formulieren niets.
- `community.whatsapp` en `community.discord`: uitnodigingslinks. Zodra ze ingevuld
  zijn, verschijnen ze op de aanmeldpagina.
- `INSTRUMENT_GROUPS`: de instrumentenlijst van het aanmeldformulier.

De publieke URL staat ook in `astro.config.mjs` (`site`), `public/robots.txt` en
`public/CNAME` (het custom domain voor GitHub Pages). Houd deze vier gelijk.

## Structuur

```
src/
├── layouts/
│   ├── Layout.astro      # navigatie, footer, SEO-head (canonical, Open Graph, JSON-LD)
│   └── BlogPost.astro    # layout voor blogposts (article metadata)
├── pages/
│   ├── index.astro
│   ├── over.astro
│   ├── meespelen.astro
│   ├── aanmelden.astro   # doorstart 2026 + aanmeldformulier
│   ├── workshops.astro
│   ├── contact.astro
│   └── blog/             # index + markdown posts
├── site.config.ts
└── styles/global.css
public/
├── og-image.png          # social sharing afbeelding (1200x630)
├── apple-touch-icon.png
├── favicon.svg / favicon.ico
└── robots.txt
```

## SEO

- Elke pagina krijgt via `Layout.astro` een canonical URL, Open Graph- en Twitter-tags,
  en JSON-LD structured data (MusicGroup + WebSite; blogposts ook BlogPosting en
  BreadcrumbList; de aanmeldpagina FAQPage en Event).
- `@astrojs/sitemap` genereert `sitemap-index.xml` bij elke build; `robots.txt` verwijst ernaar.
- Nieuwe blogposts: voeg een `.md`-bestand toe in `src/pages/blog/` met `title`,
  `description`, `date` en `tags` in de frontmatter. Begin de tekst niet met een
  `# kop`, de layout zet de titel al als H1.

## Deploy

De site draait op GitHub Pages met custom domain https://bigbandsurvival.nl
(www verwijst door naar de kale domeinnaam). Deployen:

```sh
npm run deploy
```

Dit bouwt de site en pusht alleen de inhoud van `dist/` naar de `gh-pages` branch.

DNS bij de registrar:

| Type  | Naam | Waarde                   |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | virge-creator.github.io  |
