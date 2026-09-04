/**
 * Central site configuration.
 * Everything that is "about the site" (name, URL, contact, form endpoints)
 * lives here so it only has to be changed in one place.
 */
export const SITE = {
  name: 'Bigband Survival',
  /** Public URL where the site is hosted. Must match `site` in astro.config.mjs and public/CNAME. */
  url: 'https://bigbandsurvival.nl/',
  description:
    'Bigband Survival is het projectorkest voor muziekschoolleerlingen en jonge muzikanten in Midden-Limburg. Speel mee in een echte bigband: swing, funk, latin en pop.',
  locale: 'nl_NL',
  email: 'info@bigbandsurvival.nl',
  address: {
    street: 'Julianastraat 63',
    city: 'Stramproy',
    region: 'Limburg',
    country: 'NL',
  },
  /** Path (relative to base) of the default social sharing image. */
  ogImage: 'og-image.png',
  /**
   * Formspree form IDs. Create a form on https://formspree.io and paste the
   * ID (the part after /f/) here. Until then the forms will not deliver.
   */
  forms: {
    contact: 'YOUR_FORM_ID',
    aanmelden: 'YOUR_FORM_ID',
  },
  /** Community links. Fill in once the WhatsApp group and Discord server exist. */
  community: {
    whatsapp: '',
    discord: '',
  },
} as const;

/** Bigband instruments used in the sign-up form, grouped by section. */
export const INSTRUMENT_GROUPS = [
  {
    label: 'Saxofoons',
    options: [
      ['altsax', 'Altsaxofoon'],
      ['tenorsax', 'Tenorsaxofoon'],
      ['baritonsax', 'Baritonsaxofoon'],
      ['sopraansax', 'Sopraansaxofoon'],
    ],
  },
  {
    label: 'Trompetten',
    options: [
      ['trompet', 'Trompet'],
      ['bugel', 'Bugel / Flugelhorn'],
    ],
  },
  {
    label: 'Trombones',
    options: [
      ['trombone', 'Trombone'],
      ['bastrombone', 'Bastrombone'],
    ],
  },
  {
    label: 'Ritmesectie',
    options: [
      ['piano', 'Piano / Keyboard'],
      ['gitaar', 'Gitaar'],
      ['basgitaar', 'Basgitaar'],
      ['contrabas', 'Contrabas'],
      ['drums', 'Drums'],
      ['percussie', 'Percussie'],
    ],
  },
  {
    label: 'Overig',
    options: [
      ['zang', 'Zang'],
      ['klarinet', 'Klarinet'],
      ['dwarsfluit', 'Dwarsfluit'],
      ['hoorn', 'Hoorn'],
      ['tuba', 'Tuba'],
      ['anders', 'Anders'],
    ],
  },
] as const;
