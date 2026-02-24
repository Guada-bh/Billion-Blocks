<template>
  <div class="ds-page">
    <section class="ds-hero-landing">
      <h1 class="ds-hero-landing-title">
        Billion Blocks: el sistema de diseño de Billionhands
      </h1>
      <p class="ds-hero-landing-subtitle">
        En esta página podrás explorar el sistema de diseño de Billionhands, utilizar sus componentes y entender sus guías de estilo.
      </p>
    </section>

    <section class="ds-section">
      <h2 class="ds-section-title">Overview</h2>
      <p class="ds-body">
        Billion Blocks define la identidad visual y las piezas reutilizables (colores, tipografía, espaciado, iconografía y componentes) para mantener consistencia y escalabilidad en todas las experiencias de producto.
      </p>
      <p class="ds-body">
        Usa este sitio como referencia: <strong>Getting started</strong> para diseñadores y desarrolladores, <strong>Foundations</strong> para principios visuales, <strong>Tokens & Theming</strong> para temas y variables, <strong>Components</strong> para la biblioteca de UI y Storybook para pruebas aisladas.
      </p>
    </section>

    <section class="ds-section">
      <h2 class="ds-section-title">Estado del sistema</h2>
      <p class="ds-body">
        Estado actual de las áreas del design system.
      </p>
      <div class="ds-status-grid">
        <div class="ds-card">
          <span class="ds-status-badge ds-status-badge--stable">Estable</span>
          <h3 class="ds-section-subtitle">Foundations</h3>
          <p class="ds-body">Color, tipo, espaciado e iconografía definidos y en uso.</p>
        </div>
        <div class="ds-card">
          <span class="ds-status-badge ds-status-badge--stable">Estable</span>
          <h3 class="ds-section-subtitle">Tokens</h3>
          <p class="ds-body">CSS variables y theming (claro/oscuro) implementados.</p>
        </div>
        <div class="ds-card">
          <span class="ds-status-badge ds-status-badge--review">En revisión</span>
          <h3 class="ds-section-subtitle">Components</h3>
          <p class="ds-body">Botones y showcase; más componentes en progreso.</p>
        </div>
        <div class="ds-card">
          <span class="ds-status-badge ds-status-badge--draft">Borrador</span>
          <h3 class="ds-section-subtitle">Governance</h3>
          <p class="ds-body">Proceso de contribución en definición.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ds-hero-landing {
  padding: var(--bb-space-64) 0 var(--bb-space-80);
  margin-bottom: var(--bb-space-48);
  text-align: center;
}

.ds-hero-landing-title {
  font-family: var(--bb-font-family-default);
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.15;
  color: var(--bb-text-color-primary);
  margin: 0 0 var(--bb-space-24) 0;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.ds-hero-landing-subtitle {
  font-size: var(--bb-p-xl);
  line-height: 1.5;
  color: var(--bb-neutral-medium);
  margin: 0;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}

.ds-status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--bb-space-24);
  margin-top: var(--bb-space-16);
}
</style>
