<template>
  <div class="ds-page">
    <div class="ds-hero">
      <h1 class="ds-title">Governance</h1>
      <p class="ds-lead text-secondary">
        Cómo pedir o añadir algo al design system. Proceso mínimo para mantener consistencia y calidad.
      </p>
    </div>

    <section class="ds-section">
      <h2 class="ds-section-title">Cómo pedir o añadir algo</h2>
      <p class="ds-body text-secondary">
        Para proponer un cambio (nuevo token, componente, o actualización de foundations):
      </p>
      <ol class="ds-list ds-list--ordered">
        <li>
          <strong>Describe el caso de uso</strong>
          — Qué problema resuelves o qué necesidad cubre (ej. “botón destructivo para flujos de borrado”).
        </li>
        <li>
          <strong>Propón la solución</strong>
          — Nombre del token/componente, API sugerida (props, variantes) y cómo se alinea con lo existente (colores,
          espaciado, accesibilidad).
        </li>
        <li>
          <strong>Envía la propuesta</strong>
          — Por el canal acordado con el equipo (issue en repo, documento, Slack, etc.). Incluye mock o ejemplo si es
          posible.
        </li>
        <li>
          <strong>Revisión</strong>
          — El equipo de design system revisa alineación con principios (escalabilidad, accesibilidad, consistencia) y
          da feedback o aprobación.
        </li>
        <li>
          <strong>Implementación y documentación</strong>
          — Una vez aprobado, se implementa siguiendo los tokens y patrones existentes y se documenta en este sitio y en
          Storybook.
        </li>
      </ol>
      <p class="ds-body text-secondary">
        Para dudas sobre uso (no contribución), consulta Foundations, Tokens & Theming y Components en este sitio.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'doc' })
</script>

<style scoped>
.ds-list {
  margin: 0 0 var(--bb-space-16) 0;
  padding-left: var(--bb-space-24);
  font-size: var(--bb-p-md);
  line-height: var(--bb-sm-line-height);
  color: var(--bb-text-color-primary);
}

.ds-list--ordered {
  list-style: decimal;
}

.ds-list li {
  margin-bottom: var(--bb-space-12);
}
</style>
