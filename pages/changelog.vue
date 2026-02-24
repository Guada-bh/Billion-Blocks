<template>
  <div class="ds-page">
    <div class="ds-hero">
      <h1 class="ds-title">Changelog</h1>
      <p class="ds-lead text-secondary">Historial de cambios del design system. Versiones y notas de release.</p>
    </div>

    <section class="ds-section">
      <h2 class="ds-section-title">Versiones</h2>
      <p class="ds-body text-secondary">
        Aún no hay entradas publicadas. Cuando se hagan releases (por ejemplo v1.0.0, v1.1.0), se listarán aquí con
        fecha y resumen de cambios (nuevos componentes, tokens, breaking changes, etc.).
      </p>
      <div class="ds-card ds-changelog-placeholder">
        <p class="ds-body text-secondary" style="margin: 0">
          El changelog está vacío. Añadí entradas cuando tengas la primera release documentada.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'doc' })
</script>

<style scoped>
.ds-changelog-placeholder {
  margin-top: var(--bb-space-16);
}
</style>
