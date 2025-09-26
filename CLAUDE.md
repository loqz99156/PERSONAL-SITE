# Tech Portfolio - Architecture Notes

## Overview
This repository powers the Luoliba Shuo personal site, built with Next.js 15 and TypeScript. The site highlights AI-focused projects, long-form articles, and contact details with a responsive, theme-aware experience.

## Design Principles

### Visual System
- Brand color: `#1173d4` for primary actions and accents
- Theme tokens: CSS custom properties manage background, section, surface, and text colors
  - `--background`, `--module-background`, `--surface`
  - `--text-primary`, `--text-secondary`, `--surface-border`
- Typography: Inter family (weights 400/500/700/900), tight tracking for headings
- Radii: base 0.25rem, lg 0.5rem, xl 0.75rem, full 9999px
- Spacing: 8px modular scale (e.g., `py-12`, `md:py-24`, `lg:py-32`)

### Responsive Strategy
- Mobile `< 640px`: single-column stack, generous spacing
- Tablet `? 640px`: two-column grids or balanced cards
- Desktop `? 768px`: increased horizontal breathing room and richer motion
- Container max width 832px

### Interaction Guidelines
- Avoid theme flicker by waiting for hydration before applying manual overrides
- Provide hover/active/focus states on all interactive controls
- Keep transitions between 200?300ms for subtle motion

## Global Theme System

### ThemeProvider.tsx
- Reads system preference, falls back to dark on failure
- Persists choice in `localStorage`
- Applies `data-theme` to `<body>` and toggles the `dark` class on `<html>`
- Wraps the app with `bg-[var(--background)]` and `text-[var(--text-primary)]`
- Renders a fixed twin-icon toggle (sun/moon) in the top-right corner

### CSS Variables (`src/app/globals.css`)
```css
:root {
  --background-light: #f6f7f8;
  --background-dark: #101922;
  --module-background-light: #e9ecf1;
  --module-background-dark: #0b121c;
  --surface: #ffffff;
  --surface-border-light: #d8dee6;
  --surface-border-dark: rgba(216, 222, 230, 0.35);
  --text-primary-light: #1B1C26;
  --text-primary-dark: #f7f9fc;
  --text-secondary-light: #4b5563;
  --text-secondary-dark: #9aa6bf;
}
```
- Sections use `var(--module-background)`
- Cards use `var(--surface)` to stay bright in dark mode and maintain contrast

## Module Breakdown

### Header
- Shows logo and primary navigation
- Sticky at `top-0` with `backdrop-blur-sm`
- Theme toggle removed from header; handled globally by ThemeProvider

### Hero
- Two-column grid (`md:grid-cols-2`) with large avatar (`rounded-full`, `object-cover`)
- Copy uses `whitespace-pre-line` to preserve manual line breaks
- Section background inherits `var(--module-background)`

### FeaturedProjects
- Grid layout: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Cards are full-bleed images with hover overlay `bg-black/20`

### PaidExclusives
- Fixed 400?536 cards using `flex flex-col`
- Surface styling via `var(--surface)` and `var(--surface-border)`
- CTA buttons use the yellow accent (#facc15) with hover brightening

### LatestArticles
- Article card links open in a new tab
- Title/description use theme text tokens
- Footer link directs to `/articles`

### SocialMedia
- 204?190 cards with optional modal triggers (WeChat, video channel)
- Hover elevates shadow and border when interactive
- Modals include overlay `bg-black/60` and close button in top-right

### ContactSection
- Two cards side-by-side on desktop, stacked on mobile
- Buttons copy email or WeChat ID and show a transient ?Copied? state

### ArticlePagination
- Uses surface styling for article summaries
- Pagination controls default to `var(--text-secondary)` with active page in brand color
- Page size `<select>` mirrors surface colors and borders

### Footer
- Section background `var(--module-background)` with `var(--surface-border)` top border
- Text uses `var(--text-secondary)`

### ErrorBoundary
- Error fallback keeps the same background/token system and offers a reload button

## Fumadocs Sub-site
- Lives under `src/app/articles/`
- Uses `DocsLayout` wrapped by `DocsProviders`
- `themeSwitch={{ enabled: false }}` to disable the built-in Fumadocs toggle
- Inherits global CSS variables so dark mode mirrors the main site (dark sections, light cards)
- Navigation adds a ?Return Home? main link via `links`

## Data and Content
- `src/lib/data.ts`: hero content, projects, exclusives, social links, contact info
- `content/docs/`: MDX articles with frontmatter metadata
- `src/lib/docs/source.ts`: assembles Fumadocs tree from MDX files
- `articleSlugMap` in `LatestArticles.tsx`: maps IDs to article slugs

## Development Guidelines
- Components: PascalCase filenames (`PaidExclusives.tsx`)
- Tailwind classes: keep to built-in syntax; custom colors via CSS variables
- Data fields: camelCase
- Verify both light and dark modes for every UI update
- Prefer `bg-[var(--...)]`/`text-[var(--...)]` over hard-coded colors

## Workflow
```bash
npm install
npm run dev
npm run build
npm run lint
```
- Recommended deployment: Vercel (supports previews and edge network)
- Also compatible with Netlify, Railway, DigitalOcean, AWS, etc.
- CI should include lint and build checks

## Changelog
- 2025-09-25: Introduced module/surface theme tokens, new twin-icon toggle, disabled Fumadocs theme switch
