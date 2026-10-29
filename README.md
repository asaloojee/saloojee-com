# saloojee-com

Minimal Astro site with Vite Plus and pnpm. The home page is intentionally empty.

## Development

```sh
vp install
vp run dev
```

Use `vp run dev` (not `vp dev`) to start Astro at `http://localhost:4321`.
Use `vp run preview` for a previously built site and `vp run build` when a production build is needed.

## Checks

```sh
vp check
```

Vite Plus checks supported files. Astro files use the Astro language server for formatting and diagnostics.

## Styles

`src/styles/global.css` defines a 1rem base font, 18px paragraphs, and the
Omniwerx three-column grid: 1rem minimum gutters around a 42rem center column.
No breakpoint rules, fonts, integrations, or client-side scripts are included.

The light palette follows [oklch.fyi](https://oklch.fyi)'s lightness/chroma/hue
approach, retaining Omniwerx's 27.557° hue with reduced chroma. Primary foreground
is for headings and emphasis; secondary foreground is the body default. Red is a
separate decorative accent. Surface and border tokens are available but are not
painted onto the empty page.

| Token                | OKLCH                      |
| -------------------- | -------------------------- |
| Background           | `oklch(0.97 0.003 27.557)` |
| Raised surface       | `oklch(0.99 0.002 27.557)` |
| Border               | `oklch(0.88 0.008 27.557)` |
| Primary foreground   | `oklch(0.28 0.012 27.557)` |
| Secondary foreground | `oklch(0.43 0.012 27.557)` |
| Accent               | `oklch(0.52 0.12 27.557)`  |
