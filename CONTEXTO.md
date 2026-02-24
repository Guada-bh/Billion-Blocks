# Billion Blocks – Contexto mínimo

## Stack

- **Nuxt 3**, deploy **Vercel** (`nitro.preset: 'vercel'`).
- Estilos: solo tokens del DS en `assets/css/` (colors, typography, spacing, buttons, doc). Sin Tailwind.

## Layouts

- **`default`**: Solo `<slot />` (home con hero + cards). Sin topbar ni sidebar.
- **`doc`**: Sidebar fija (logo + nav + theme toggle), sin topbar. Contenido `max-width: 1280px`. Hamburger en móvil.

## Páginas y layout

- **`/`** (index): layout `default` → hero + “Accesos rápidos” cards + sección Explorar.
- **Resto** usan `definePageMeta({ layout: 'doc' })`: getting-started, foundations, tokens-theming, components, governance, changelog.

## Rutas clave

- Home hero: `pages/index.vue` (hero card, dots detrás, imagen `public/hero-blocks.png`).
- Getting started: “Accesos rápidos” con cards a Foundations, Tokens, Components, Storybook, Changelog; tabs Designers/Developers.
- Topbar 1280px: solo en layout antiguo; en `doc` no hay topbar.

## Archivos de diseño

- Tokens: `assets/css/colors.css`, `typography.css`, `spacing.css`, `buttons.css`, `doc.css`.
- Componentes DS: `components/ds/` (Button, ColorPalette, TypeScale, IconShowcase, icons en `ds/icons/`).
- Patty (regla Cursor): `.cursor/rules/patty.mdc`.

## Convenciones

- Español de España (no argentino).
- Tipografía/links: blanco o `--bb-neutral-strong` + peso; no primary para texto.
- Logo/isotipo: `public/isotipo-bh.svg`.
