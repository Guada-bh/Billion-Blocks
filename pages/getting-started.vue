<template>
  <div class="ds-page">
    <div class="ds-hero">
      <h1 class="ds-title">Getting started</h1>
      <p class="ds-lead">
        Todo lo que necesitas para usar Billion Blocks según tu rol: diseñador o desarrollador.
      </p>
    </div>

    <div class="ds-audience-tabs">
      <button
        type="button"
        class="ds-audience-tab"
        :class="{ 'ds-audience-tab--active': activeTab === 'designers' }"
        @click="activeTab = 'designers'"
      >
        Para diseñadores
      </button>
      <button
        type="button"
        class="ds-audience-tab"
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
        <p class="ds-body">
          Billion Blocks es la fuente de verdad para todas las decisiones visuales. En Figma (o la herramienta que uses), alineá tus archivos a los tokens y componentes documentados aquí para mantener consistencia entre diseño y código.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Colores y contraste</h2>
        <p class="ds-body">
          La paleta está en <NuxtLink to="/foundations#color" class="ds-link-external">Foundations → Color</NuxtLink>. Usá siempre los valores semánticos (primary, neutral, success, warning, error) y comprobá contraste: mínimo 4.5:1 para texto normal y 3:1 para texto grande según WCAG 2.1.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Tipografía</h2>
        <p class="ds-body">
          Fuente principal: <strong>Satoshi</strong>. Las escalas mobile y desktop (headings y body) están en <NuxtLink to="/foundations#type" class="ds-link-external">Foundations → Type</NuxtLink>. Respetá la jerarquía (h1–h6) y los line-heights definidos para legibilidad.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Espaciado e iconografía</h2>
        <p class="ds-body">
          La escala de espaciado (4–80px) está en <NuxtLink to="/foundations#spacing" class="ds-link-external">Foundations → Spacing</NuxtLink>; úsala para márgenes, paddings y gaps. Los iconos del sistema están en <NuxtLink to="/foundations#iconography" class="ds-link-external">Foundations → Iconography</NuxtLink> — usa solo ese set para coherencia.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Accesibilidad desde el diseño</h2>
        <p class="ds-body">
          Considerá estados de foco, contraste y orden lógico en flujos. Las bases están en <NuxtLink to="/foundations#accessibility" class="ds-link-external">Foundations → Accessibility basics</NuxtLink>. Si proponés un nuevo componente, documentá sus estados (default, hover, focus, disabled, loading).
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Contribuir al sistema</h2>
        <p class="ds-body">
          Para proponer nuevos tokens, componentes o cambios, sigue el proceso en <NuxtLink to="/governance" class="ds-link-external">Governance</NuxtLink>: describe el caso de uso, la solución y envía la propuesta al equipo.
        </p>
      </section>
    </div>

    <!-- Developers -->
    <div v-show="activeTab === 'developers'" class="ds-audience-panel">
      <section class="ds-section">
        <h2 class="ds-section-title">Integrar en código</h2>
        <p class="ds-body">
          Este sitio y la documentación están construidos con Nuxt 3. Los estilos viven en <code>~/assets/css/</code> (colors, typography, spacing, buttons, doc) y los componentes en <code>~/components/ds/</code>. En un proyecto Nuxt que consuma Billion Blocks, instala o referencia estos recursos y usa solo las variables CSS definidas en el sistema.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Tokens: no hardcodear</h2>
        <p class="ds-body">
          Usá siempre las variables CSS documentadas en <NuxtLink to="/tokens-theming" class="ds-link-external">Tokens & Theming</NuxtLink>. Por ejemplo: <code>var(--bb-primary-default)</code>, <code>var(--bb-space-24)</code>, <code>var(--bb-font-family-default)</code>. Así el theming (light/dark) y futuras actualizaciones se aplican sin tocar componente por componente.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Componentes</h2>
        <p class="ds-body">
          Importa desde <code>~/components/ds/</code> (Button, ColorPalette, TypeScale, IconShowcase, iconos en <code>ds/icons/</code>). Ver ejemplos en <NuxtLink to="/components" class="ds-link-external">Components</NuxtLink>. Para todas las variantes y pruebas aisladas, usa Storybook cuando esté disponible.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Theming</h2>
        <p class="ds-body">
          El tema se controla con <code>data-theme="light"</code> o <code>data-theme="dark"</code> en el elemento raíz (por ejemplo <code>&lt;html&gt;</code> o el contenedor del layout). Este sitio incluye un toggle en la barra superior; en tu app puedes sincronizarlo con preferencia del usuario o configuración.
        </p>
      </section>

      <section class="ds-section">
        <h2 class="ds-section-title">Accesibilidad en implementación</h2>
        <p class="ds-body">
          Mantené foco visible en controles, orden de tabulación lógico y semántica correcta (headings, landmarks, ARIA cuando haga falta). Respetá <code>prefers-reduced-motion</code> para animaciones. Los principios están en <NuxtLink to="/foundations#accessibility" class="ds-link-external">Foundations → Accessibility basics</NuxtLink>.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  color: var(--bb-neutral-medium);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
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

.ds-link-external {
  color: var(--bb-primary-default);
  text-decoration: none;
}

.ds-link-external:hover {
  text-decoration: underline;
}

code {
  font-size: 13px;
  padding: 2px 6px;
  background: var(--bb-neutral-base);
  border-radius: 4px;
  color: var(--bb-neutral-strong);
}
</style>
