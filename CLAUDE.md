# Agent Guidelines — Valkyrie Arms Training

## Content Rules
- All website copy MUST come from the verified business content document (PDF).
- Do NOT fabricate class details, pricing, testimonials, or instructor credentials.
- Use verbatim quotes where possible for mission statement, philosophy, and FAQ answers.

## Design System
- Theme: `valkyrie-empowerment` (PWP AI Theme)
- Colors: Deep charcoal-plum backgrounds, purple/gold accents, warm whites
- Typography: Outfit (headings), Inter (body), Playfair Display (accents)
- Layout: Soft rounded corners, layered shadows, smooth micro-animations

## Architecture
- Framework: Astro (static, SSG mode)
- Components follow PWP module contracts (Hero, CardGrid, SplitSection, etc.)
- CSS custom properties use `--pwp-*` namespace
- All pages use `BaseLayout.astro` for consistent meta/SEO

## Local SEO
- Target cities: Meridian (primary), Boise, Eagle, Kuna, Nampa, Caldwell
- Each city page uses `LocalSEOBlock` component with city-specific interpolation
- Schema.org `LocalBusiness` + `serviceArea` on every page
