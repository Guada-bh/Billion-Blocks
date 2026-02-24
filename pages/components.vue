<template>
  <div class="ds-page">
    <div class="ds-hero">
      <h1 class="ds-title">Components</h1>
      <p class="ds-lead text-secondary">
        Biblioteca de componentes del design system. Para ver todos los componentes, variantes y ejemplos interactivos,
        usa Storybook.
      </p>
      <p class="ds-body text-secondary">
        <a
          href="https://storybook.js.org"
          target="_blank"
          rel="noopener noreferrer"
          class="ds-link-external ds-storybook-link"
        >
          Abrir Storybook (enlace externo) →
        </a>
        <span class="ds-note text-secondary">
          Cuando tengas el Storybook de Billion Blocks desplegado, reemplaza esta URL por la correcta.
        </span>
      </p>
    </div>

    <section class="ds-section">
      <h2 class="ds-section-title">Disponibles en código</h2>
      <p class="ds-body text-secondary">
        Componentes que ya existen en
        <code>~/components/ds/</code>
        y que puedes usar en cualquier página Nuxt.
      </p>
      <ul class="ds-list">
        <li>
          <strong>Button</strong>
          — Variantes: primary, secondary, outline, ghost. Tamaños: md, sm. Con/sin icono.
        </li>
        <li>
          <strong>ColorPalette</strong>
          — Muestra la paleta de colores (Foundations).
        </li>
        <li>
          <strong>TypeScale</strong>
          — Muestra la escala tipográfica.
        </li>
        <li>
          <strong>IconShowcase</strong>
          — Muestra el set de iconos.
        </li>
        <li>
          <strong>Iconos individuales</strong>
          —
          <code>IconArrowRight</code>
          ,
          <code>IconCalendar</code>
          ,
          <code>IconChat</code>
          , etc. en
          <code>~/components/ds/icons/</code>
          .
        </li>
      </ul>
    </section>

    <section class="ds-section">
      <h2 class="ds-section-title">Ejemplo: Botones</h2>
      <DsButtonShowcase />
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'doc' })
</script>

<style scoped>
.ds-storybook-link {
  display: inline-block;
  margin-bottom: var(--bb-space-8);
}

.ds-note {
  display: block;
  font-size: 12px;
  margin-top: var(--bb-space-4);
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
