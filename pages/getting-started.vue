<template>
  <div class="ds-page">
    <div class="ds-hero">
      <h1 class="ds-title">Getting started</h1>
      <p class="text-secondary">
        Bienvenido a Billion Blocks, el sistema de diseño de Billionhands. Aquí encontrarás cómo empezar a diseñar,
        desarrollar y publicar UI consistente (y accesible) usando foundations, tokens, componentes y patrones.
      </p>
    </div>

    <section class="ds-section ds-doc-structure">
      <h2 class="ds-section-title">Cómo está organizada la documentación</h2>
      <div class="ds-doc-structure-grid">
        <div class="ds-doc-structure-card ds-doc-structure-card--foundations">
          <div class="ds-doc-structure-card-pattern" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="24" height="24" rx="4" stroke="currentColor" stroke-width="1" opacity="0.2" />
              <rect x="44" y="10" width="24" height="24" rx="4" stroke="currentColor" stroke-width="1" opacity="0.2" />
              <rect x="78" y="10" width="24" height="24" rx="4" stroke="currentColor" stroke-width="1" opacity="0.2" />
              <rect x="10" y="44" width="24" height="24" rx="4" stroke="currentColor" stroke-width="1" opacity="0.2" />
              <rect x="44" y="44" width="24" height="24" rx="4" stroke="currentColor" stroke-width="1" opacity="0.25" />
              <rect x="78" y="44" width="24" height="24" rx="4" stroke="currentColor" stroke-width="1" opacity="0.2" />
              <rect x="10" y="78" width="24" height="24" rx="4" stroke="currentColor" stroke-width="1" opacity="0.2" />
              <rect x="44" y="78" width="24" height="24" rx="4" stroke="currentColor" stroke-width="1" opacity="0.2" />
              <rect x="78" y="78" width="24" height="24" rx="4" stroke="currentColor" stroke-width="1" opacity="0.2" />
            </svg>
          </div>
          <span class="ds-doc-structure-card-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="6" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5" />
              <rect x="26" y="6" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5" />
              <rect x="6" y="26" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5" />
              <rect x="26" y="26" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </span>
          <h3 class="ds-section-subtitle">Foundations / Styles / Components</h3>
          <p class="ds-body text-secondary">
            Conoce el sistema de diseño en profundidad y toma decisiones base de elementos reutilizables.
          </p>
        </div>

        <div class="ds-doc-structure-card ds-doc-structure-card--tokens">
          <div class="ds-doc-structure-card-pattern" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="1" opacity="0.2" />
              <circle cx="60" cy="24" r="8" stroke="currentColor" stroke-width="1" opacity="0.25" />
              <circle cx="96" cy="24" r="8" stroke="currentColor" stroke-width="1" opacity="0.2" />
              <circle cx="24" cy="60" r="8" stroke="currentColor" stroke-width="1" opacity="0.25" />
              <circle cx="60" cy="60" r="8" stroke="currentColor" stroke-width="1" opacity="0.3" />
              <circle cx="96" cy="60" r="8" stroke="currentColor" stroke-width="1" opacity="0.25" />
              <circle cx="24" cy="96" r="8" stroke="currentColor" stroke-width="1" opacity="0.2" />
              <circle cx="60" cy="96" r="8" stroke="currentColor" stroke-width="1" opacity="0.25" />
              <circle cx="96" cy="96" r="8" stroke="currentColor" stroke-width="1" opacity="0.2" />
            </svg>
          </div>
          <span class="ds-doc-structure-card-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 8v32M8 24h32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <circle cx="24" cy="24" r="6" stroke="currentColor" stroke-width="1.5" />
              <path d="M24 14a10 10 0 0 1 0 20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.7" />
            </svg>
          </span>
          <h3 class="ds-section-subtitle">Tokens</h3>
          <p class="ds-body text-secondary">
            Capturan decisiones (color, espaciado, tipo…) para mantener consistencia entre diseño y código.
          </p>
        </div>

        <div class="ds-doc-structure-card ds-doc-structure-card--patterns">
          <div class="ds-doc-structure-card-pattern" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40 L50 20 L80 40 L80 70 L50 90 L20 70 Z" stroke="currentColor" stroke-width="1" opacity="0.15" />
              <path d="M40 60 L60 45 L80 60 L80 85 L60 100 L40 85 Z" stroke="currentColor" stroke-width="1" opacity="0.2" />
              <path d="M30 25 L55 10 L80 25" stroke="currentColor" stroke-width="1" opacity="0.2" stroke-dasharray="4 2" />
              <path d="M50 95 L50 55 L70 40" stroke="currentColor" stroke-width="1" opacity="0.2" stroke-dasharray="4 2" />
            </svg>
          </div>
          <span class="ds-doc-structure-card-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 18h8v8h-8z" stroke="currentColor" stroke-width="1.5" />
              <path d="M28 18h8v8h-8z" stroke="currentColor" stroke-width="1.5" />
              <path d="M12 28h8v8h-8z" stroke="currentColor" stroke-width="1.5" />
              <path d="M28 28h8v8h-8z" stroke="currentColor" stroke-width="1.5" />
              <path d="M20 22h8M24 18v8M36 24h-8M32 28v-8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.8" />
            </svg>
          </span>
          <h3 class="ds-section-subtitle">Patterns</h3>
          <p class="ds-body text-secondary">
            Resuelven «cómo se combinan componentes» en flujos reales, y como deben comportarse según su contexto.
          </p>
        </div>
      </div>
    </section>

    <section class="ds-section">
      <h2 class="ds-section-title">Empieza por aquí</h2>
      <ul class="ds-list">
        <li> <span class="text-secondary">
          Si necesitas conocer las bases del sistema
          ve a <NuxtLink to="/foundations" class="ds-link-external">Foundations</NuxtLink> y conocer en profundidad este sistema.</span>
        </li>
        <li><span class="text-secondary">
          Si estás diseñando una pantalla:
          ve a <NuxtLink to="/patterns" class="ds-link-external">Patterns (TBD)</NuxtLink>  y luego a <NuxtLink to="/components" class="ds-link-external">Components</NuxtLink>.
        </span>
        </li>
        <li><span class="text-secondary">
          Si estás construyendo UI en código:
          usa <NuxtLink to="/components" class="ds-link-external">Components</NuxtLink> (API + ejemplos en Storybook) y entiende <NuxtLink to="/tokens-theming" class="ds-link-external">Tokens/Theming</NuxtLink></span>
        </li>
        <li><span class="text-secondary">
          Si estás escribiendo microcopy o mensajes:
          usa <NuxtLink to="/content" class="ds-link-external">Content (TBD)</NuxtLink> donde encontrarás varias herramientas incluidos customs GPT que te ayudarán.</span>
        </li>
      </ul>
    </section>

    <section class="ds-section">
      <h2 class="ds-section-title">Accesos rápidos</h2>
      <div class="ds-card-grid">
        <NuxtLink to="/foundations" class="ds-card ds-card--foundations">
          <span class="ds-card-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="8" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.5" />
              <rect x="26" y="8" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.5" />
              <rect x="8" y="26" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.5" />
              <rect x="26" y="26" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </span>
          <h3 class="ds-section-subtitle">Foundations</h3>
          <p class="ds-body text-secondary">Color, tipografía, spacing, layout, iconografía, motion</p>
        </NuxtLink>

        <NuxtLink to="/tokens-theming" class="ds-card ds-card--tokens">
          <span class="ds-card-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 8v32M8 24h32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <circle cx="24" cy="24" r="6" stroke="currentColor" stroke-width="1.5" />
              <path
                d="M24 14a10 10 0 0 1 0 20"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
                opacity="0.7"
              />
            </svg>
          </span>
          <h3 class="ds-section-subtitle">Tokens & Theming</h3>
          <p class="ds-body text-secondary">Modelo de tokens, light/dark, variables</p>
        </NuxtLink>

        <NuxtLink to="/components" class="ds-card ds-card--components">
          <span class="ds-card-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="14" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.5" />
              <rect x="26" y="14" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.5" />
              <path d="M16 26v6h16v-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </span>
          <h3 class="ds-section-subtitle">Components</h3>
          <p class="ds-body text-secondary">Catálogo, estados y accesibilidad</p>
        </NuxtLink>

        <a href="https://storybook.js.org" target="_blank" rel="noopener noreferrer" class="ds-card ds-card--storybook">
          <span class="ds-card-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12h24v24H12z" stroke="currentColor" stroke-width="1.5" rx="2" />
              <path d="M12 20h24M20 12v24" stroke="currentColor" stroke-width="1.2" opacity="0.8" />
            </svg>
          </span>
          <h3 class="ds-section-subtitle">Storybook</h3>
          <p class="ds-body text-secondary">Ejemplos interactivos y API (fuente de verdad de implementación)</p>
        </a>

        <NuxtLink to="/changelog" class="ds-card ds-card--changelog">
          <span class="ds-card-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16h32M8 24h32M8 32h20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </span>
          <h3 class="ds-section-subtitle">Changelog</h3>
          <p class="ds-body text-secondary">Cambios por versión</p>
        </NuxtLink>
      </div>
    </section>

    <p class="ds-lead text-secondary">
      Todo lo que necesitas para usar Billion Blocks según tu rol: diseñador o desarrollador.
    </p>
    <div class="ds-audience-tabs">
      <button
        type="button"
        class="ds-audience-tab text-secondary"
        :class="{ 'ds-audience-tab--active': activeTab === 'designers' }"
        @click="activeTab = 'designers'"
      >
        Para diseñadores
      </button>
      <button
        type="button"
        class="ds-audience-tab text-secondary"
        :class="{ 'ds-audience-tab--active': activeTab === 'developers' }"
        @click="activeTab = 'developers'"
      >
        Para desarrolladores
      </button>
    </div>

    <!-- Designers -->
    <div v-show="activeTab === 'designers'" class="ds-audience-panel">
      <section class="ds-section">
        <h2 class="ds-section-title">Usar el sistema en diseño</h2>

        <h3 class="ds-section-subtitle">1) Antes de empezar</h3>
        <ul class="ds-list">
          <li>
            <span class="text-secondary">Usa la librería de Billion Blocks como base para cualquier UI nueva.</span>
          </li>
          <li>
            <span class="text-secondary">
              Evita "dibujar componentes a mano": si existe un componente, úsalo (y si no existe, solicita su
              incorporación).
            </span>
          </li>
        </ul>

        <h3 class="ds-section-subtitle">2) Fundamentos primero</h3>
        <p class="ds-body text-secondary">
          Cuando no sepas qué decidir (color, tipografía, spacing), ve a Foundations. En sistemas maduros esto reduce
          divergencias y acelera decisiones repetibles.
        </p>

        <div class="ds-card ds-card--highlight">
          <h3 class="ds-section-subtitle">
            <span class="ds-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  d="M9 11l3 3L22 4"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            Checklist mínimo al diseñar
          </h3>
          <ul class="ds-list ds-list--checklist">
            <li>Contraste y legibilidad (texto vs fondo)</li>
            <li>Foco visible (estado focus claro)</li>
            <li>Estados (hover/focus/disabled/loading)</li>
            <li>Responsive (qué cambia en mobile vs desktop)</li>
            <li>Contenido real (strings largos, números, idiomas)</li>
          </ul>
        </div>

        <p class="ds-body text-secondary">
          Billion Blocks es la fuente de verdad para todas las decisiones visuales. En Figma (o la herramienta que
          uses), alineá tus archivos a los tokens y componentes documentados aquí para mantener consistencia entre
          diseño y código.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Colores y contraste</h2>
        <p class="ds-body text-secondary">
          La paleta está en
          <NuxtLink to="/foundations#color" class="ds-link-external">Foundations → Color</NuxtLink>
          . Usá siempre los valores semánticos (primary, neutral, success, warning, error) y comprobá contraste: mínimo
          4.5:1 para texto normal y 3:1 para texto grande según WCAG 2.1.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Tipografía</h2>
        <p class="ds-body text-secondary">
          Fuente principal:
          <strong>Satoshi</strong>
          . Las escalas mobile y desktop (headings y body) están en
          <NuxtLink to="/foundations#type" class="ds-link-external">Foundations → Type</NuxtLink>
          . Respetá la jerarquía (h1–h6) y los line-heights definidos para legibilidad.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Espaciado e iconografía</h2>
        <p class="ds-body text-secondary">
          La escala de espaciado (4–80px) está en
          <NuxtLink to="/foundations#spacing" class="ds-link-external">Foundations → Spacing</NuxtLink>
          ; úsala para márgenes, paddings y gaps. Los iconos del sistema están en
          <NuxtLink to="/foundations#iconography" class="ds-link-external">Foundations → Iconography</NuxtLink>
          — usa solo ese set para coherencia.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Accesibilidad desde el diseño</h2>
        <p class="ds-body text-secondary">
          Considerá estados de foco, contraste y orden lógico en flujos. Las bases están en
          <NuxtLink to="/foundations#accessibility" class="ds-link-external">
            Foundations → Accessibility basics
          </NuxtLink>
          . Si proponés un nuevo componente, documentá sus estados (default, hover, focus, disabled, loading).
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Contribuir al sistema</h2>
        <p class="ds-body text-secondary">
          Para proponer nuevos tokens, componentes o cambios, sigue el proceso en
          <NuxtLink to="/governance" class="ds-link-external">Governance</NuxtLink>
          : describe el caso de uso, la solución y envía la propuesta al equipo.
        </p>
      </section>
    </div>

    <!-- Developers -->
    <div v-show="activeTab === 'developers'" class="ds-audience-panel">
      <section class="ds-section">
        <h2 class="ds-section-title">Integrar en código</h2>
        <p class="ds-body text-secondary">
          Este sitio y la documentación están construidos con Nuxt 3. Los estilos viven en
          <code>~/assets/css/</code>
          (colors, typography, spacing, buttons, doc) y los componentes en
          <code>~/components/ds/</code>
          . En un proyecto Nuxt que consuma Billion Blocks, instala o referencia estos recursos y usa solo las variables
          CSS definidas en el sistema.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Tokens: no hardcodear</h2>
        <p class="ds-body text-secondary">
          Usá siempre las variables CSS documentadas en
          <NuxtLink to="/tokens-theming" class="ds-link-external">Tokens & Theming</NuxtLink>
          . Por ejemplo:
          <code>var(--bb-primary-default)</code>
          ,
          <code>var(--bb-space-24)</code>
          ,
          <code>var(--bb-font-family-default)</code>
          . Así el theming (light/dark) y futuras actualizaciones se aplican sin tocar componente por componente.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Componentes</h2>
        <p class="ds-body text-secondary">
          Importa desde
          <code>~/components/ds/</code>
          (Button, ColorPalette, TypeScale, IconShowcase, iconos en
          <code>ds/icons/</code>
          ). Ver ejemplos en
          <NuxtLink to="/components" class="ds-link-external">Components</NuxtLink>
          . Para todas las variantes y pruebas aisladas, usa Storybook cuando esté disponible.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Theming</h2>
        <p class="ds-body text-secondary">
          El tema se controla con
          <code>data-theme="light"</code>
          o
          <code>data-theme="dark"</code>
          en el elemento raíz (por ejemplo
          <code>&lt;html&gt;</code>
          o el contenedor del layout). Este sitio incluye un toggle en la barra superior; en tu app puedes sincronizarlo
          con preferencia del usuario o configuración.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Accesibilidad en implementación</h2>
        <p class="ds-body text-secondary">
          Mantené foco visible en controles, orden de tabulación lógico y semántica correcta (headings, landmarks, ARIA
          cuando haga falta). Respetá
          <code>prefers-reduced-motion</code>
          para animaciones. Los principios están en
          <NuxtLink to="/foundations#accessibility" class="ds-link-external">
            Foundations → Accessibility basics
          </NuxtLink>
          .
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
definePageMeta({ layout: 'doc' })
const activeTab = ref<'designers' | 'developers'>('designers')
</script>

<style scoped>
.ds-audience-tabs {
  display: flex;
  gap: var(--bb-space-4);
  margin-bottom: var(--bb-space-40);
  border-bottom: 1px solid var(--bb-neutral-base);
  padding-bottom: 0;
}

.ds-audience-tab {
  padding: var(--bb-space-12) var(--bb-space-16);
  font-size: 14px;
  font-weight: 500;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  cursor: pointer;
  transition:
    color 0.2s,
    border-color 0.2s;
}

.ds-audience-tab:hover {
  color: var(--bb-text-color-primary);
}

.ds-audience-tab--active {
  color: var(--bb-primary-default);
  border-bottom-color: var(--bb-primary-default);
}

.ds-audience-panel {
  margin-top: 0;
}

code {
  font-size: 13px;
  padding: 2px 6px;
  background: var(--bb-neutral-base);
  border-radius: 4px;
  color: var(--bb-neutral-strong);
}
</style>
