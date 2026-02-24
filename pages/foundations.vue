<template>
  <div class="ds-page">
    <div class="ds-hero">
      <h1 class="ds-title">Foundations</h1>
      <p class="ds-lead text-secondary">
        Fundamentos visuales del design system: color, tipografía, espaciado, iconografía y bases de accesibilidad.
      </p>
    </div>

    <section id="color" class="ds-section">
      <h2 class="ds-section-title">Color</h2>
      <p class="ds-body text-secondary">
        Paleta semántica (primary, neutral, success, info, warning, error) y colores de superficie y texto. Todos los
        valores se consumen vía CSS variables.
      </p>
      <DsColorPalette />
    </section>

    <section id="type" class="ds-section">
      <h2 class="ds-section-title">Type</h2>
      <p class="ds-body text-secondary">
        Fuente: Satoshi. Escalas para mobile y desktop (heading, body) y line-heights definidos en tokens.
      </p>
      <DsTypeScale />
    </section>

    <section id="spacing" class="ds-section">
      <h2 class="ds-section-title">Spacing</h2>
      <p class="ds-body text-secondary">
        Escala de espaciado (4, 8, 12, 16, 24, 32, 40, 48, 64, 80px). Usar para márgenes, paddings y gaps.
      </p>
      <div class="ds-spacing-demo">
        <div v-for="token in spacingTokens" :key="token.name" class="ds-spacing-row">
          <span class="ds-spacing-name text-secondary">{{ token.name }}</span>
          <span class="ds-spacing-value">{{ token.value }}</span>
          <div class="ds-spacing-bar" :style="{ width: token.value }" />
        </div>
      </div>
    </section>

    <section id="iconography" class="ds-section">
      <h2 class="ds-section-title">Iconography</h2>
      <p class="ds-body text-secondary">
        Set de iconos del sistema. Tamaños:
        <code>--bb-icon-size-sm</code>
        (16px),
        <code>--bb-icon-size-md</code>
        (24px).
      </p>
      <DsIconShowcase />
    </section>

    <section id="accessibility" class="ds-section">
      <h2 class="ds-section-title">Accessibility basics</h2>
      <p class="ds-body text-secondary">Principios que seguimos para cumplir con WCAG y buena UX:</p>
      <ul class="ds-list">
        <li>
          <strong>Contraste</strong>
          — Texto y fondos usan combinaciones que cumplen ratio mínimo (4.5:1 texto normal, 3:1 texto grande).
        </li>
        <li>
          <strong>Foco visible</strong>
          — Los controles interactivos tienen estado de foco claramente visible (outline/focus ring).
        </li>
        <li>
          <strong>Teclado</strong>
          — Toda la funcionalidad accesible por teclado; orden de tabulación lógico.
        </li>
        <li>
          <strong>Motion</strong>
          — Respetar
          <code>prefers-reduced-motion</code>
          para animaciones (reducir o desactivar cuando el usuario lo indique).
        </li>
        <li>
          <strong>Semántica</strong>
          — Uso correcto de headings (h1–h6), landmarks y roles ARIA cuando haga falta.
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'doc' })
const spacingTokens = [
  { name: '--bb-space-4', value: '4px' },
  { name: '--bb-space-8', value: '8px' },
  { name: '--bb-space-12', value: '12px' },
  { name: '--bb-space-16', value: '16px' },
  { name: '--bb-space-24', value: '24px' },
  { name: '--bb-space-32', value: '32px' },
  { name: '--bb-space-40', value: '40px' },
  { name: '--bb-space-48', value: '48px' },
  { name: '--bb-space-64', value: '64px' },
  { name: '--bb-space-80', value: '80px' }
]
</script>

<style scoped>
.ds-spacing-demo {
  margin-top: var(--bb-space-16);
}

.ds-spacing-row {
  display: flex;
  align-items: center;
  gap: var(--bb-space-16);
  margin-bottom: var(--bb-space-12);
  font-size: 14px;
  color: var(--bb-text-color-primary);
}

.ds-spacing-name {
  min-width: 140px;
  font-family: monospace;
}

.ds-spacing-value {
  min-width: 48px;
  color: var(--bb-primary-default);
}

.ds-spacing-bar {
  height: 24px;
  min-width: 4px;
  background: var(--bb-primary-default);
  border-radius: 4px;
}

.ds-list {
  margin: 0;
  padding-left: var(--bb-space-24);
}

.ds-list li {
  margin-bottom: var(--bb-space-8);
}

code {
  font-size: 13px;
  padding: 2px 6px;
  background: var(--bb-neutral-base);
  border-radius: 4px;
  color: var(--bb-neutral-strong);
}
</style>
