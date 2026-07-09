# Valkyrie Arms Training Website

> Women's firearms & self-defense training in Meridian, Idaho.  
> Serving the Treasure Valley: Boise, Eagle, Kuna, Nampa, Caldwell, Star & Mountain Home.

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (static site generation)
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Theme System:** PWP AI Theme (`valkyrie-empowerment`)
- **Design:** Custom CSS with W3C design tokens (purple/black/gold palette)

## Development

```bash
npm install
npm run dev        # Start dev server at localhost:4321
npm run build      # Production build to dist/
npm run preview    # Preview production build
```

## Project Structure

```
src/
├── components/     # PWP module components (Hero, CardGrid, FAQ, etc.)
├── layouts/        # BaseLayout with SEO/meta
├── pages/          # All 24 pages
│   ├── about/      # Mission, Values, Why Women-Only
│   ├── classes/    # 6 class detail pages
│   ├── instructors/# Instructor profile pages
│   ├── training/   # Local SEO city pages
│   └── ...
├── styles/         # Theme CSS & design tokens
└── content/        # Content collections (classes, instructors, cities)
public/
├── images/         # Optimized photos
└── fonts/          # Self-hosted fonts (optional)
tokens/
└── tokens.json     # W3C design tokens source
```

## Content Sources

All content sourced from the Valkyrie Arms Training business content document.  
**No fabricated facts.** Only PDF-verified content is used.

## Contact

- **Address:** 272 SW 5th #400, Meridian, ID 83642
- **Phone:** CheRee: 208-815-8592 | Dez: 208-813-8780
- **Email:** info@valkyriearmstraining.com
