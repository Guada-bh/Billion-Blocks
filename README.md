# Billion Blocks · Design System

Sitio de documentación del sistema de diseño **Billion Blocks** para Billionhands.

## Contenido

- **Colores** – Paleta (Neutral, Primary, Success, Info, Warning, Error, Disable, Black & White) con tema oscuro/claro
- **Tipografía** – Satoshi Variable, escalas Mobile y Desktop
- **Iconos** – Muestra representativa de la biblioteca
- **Botones** – Variantes (primary, secondary, outline, ghost), tamaños, estados y accesibilidad

## Stack

- Nuxt 3 + Vue 3
- TypeScript
- CSS con variables (tokens alineados a Figma)

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run preview
```

## Deploy en Vercel

1. Sube el proyecto a un repositorio en **GitHub**, **GitLab** o **Bitbucket**.
2. Entra en [vercel.com](https://vercel.com), inicia sesión y haz clic en **Add New Project**.
3. **Importa** el repositorio del proyecto. Vercel detectará Nuxt y usará:
   - **Build Command:** `npm run build` (o `npx nuxt build`)
   - **Output Directory:** lo genera Nitro automáticamente
4. Haz clic en **Deploy**. Tras el build, tendrás una URL tipo `tu-proyecto.vercel.app`.

El proyecto ya tiene `nitro.preset: 'vercel'` en `nuxt.config.ts` para un despliegue óptimo en Vercel.

## Estructura

- `assets/css/` – Tokens (colors, typography, buttons)
- `components/ds/` – Componentes del sistema de diseño
- `layouts/default.vue` – Header con navegación y toggle de tema
- `pages/index.vue` – Página principal con las cuatro secciones
# Billion-Blocks
