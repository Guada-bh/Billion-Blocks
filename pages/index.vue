<template>
  <div class="ds-home">
    <!-- Hero según Figma: fondo con puntos en esquinas + card única -->
    <section class="ds-hero-wrap">
      <div class="ds-hero-dots ds-hero-dots--tl" aria-hidden="true" />
      <div class="ds-hero-dots ds-hero-dots--br" aria-hidden="true" />

      <div class="ds-hero-card">
        <!-- Izquierda: título, subtítulo, botón (Figma: contenido primero) -->
        <div class="ds-hero-content">
          <h1 class="ds-hero-title">Billion Blocks</h1>
          <p class="ds-hero-subtitle text-secondary">El design system de Billionhands</p>
          <NuxtLink to="/getting-started" class="ds-hero-cta">
            Comenzar
            <span class="ds-hero-cta-arrow" aria-hidden="true">→</span>
          </NuxtLink>
        </div>

        <!-- Derecha: ilustración de bloques (Figma: imagen 882px, opacity 50%, mix-blend-luminosity) -->
        <div class="ds-hero-visual">
          <img :src="heroBlocksSrc" alt="" class="ds-hero-blocks" width="882" height="525" />
        </div>
      </div>
    </section>

    <section class="ds-home-cards">
      <h2 class="ds-home-cards-title">Explorar</h2>
      <div class="ds-home-cards-grid">
        <NuxtLink to="/foundations" class="ds-home-card">
          <h3 class="ds-home-card-heading">¿Qué es Billion Blocks?</h3>
          <p class="ds-home-card-text text-secondary">
            La identidad visual y las piezas reutilizables: colores, tipografía, espaciado, iconografía y componentes
            para mantener consistencia en todos los productos.
          </p>
        </NuxtLink>
        <NuxtLink to="/getting-started" class="ds-home-card">
          <h3 class="ds-home-card-heading">¿Cómo usar Billion Blocks?</h3>
          <p class="ds-home-card-text text-secondary">
            Guías para diseñadores y desarrolladores: tokens, componentes, theming e integración en código y en diseño.
          </p>
        </NuxtLink>
        <NuxtLink to="/governance" class="ds-home-card">
          <h3 class="ds-home-card-heading">¿Cómo solicitar un cambio o actualización?</h3>
          <p class="ds-home-card-text text-secondary">
            Proceso para proponer nuevos tokens, componentes o actualizaciones al design system.
          </p>
        </NuxtLink>
        <NuxtLink to="/components" class="ds-home-card">
          <h3 class="ds-home-card-heading">Componentes y Storybook</h3>
          <p class="ds-home-card-text text-secondary">
            Biblioteca de UI, variantes y ejemplos interactivos. Enlace a Storybook cuando esté disponible.
          </p>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })
const heroBlocksSrc = '/hero-blocks.png'
</script>

<style scoped>
.ds-home {
  font-family: var(--bb-font-family-default);
  min-height: 60vh;
}

/* Contenedor hero: tokens DS, padding 52px, flex center (Figma actualizado) */
.ds-hero-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--bb-space-4);
  padding: 52px;
  background-color: var(--bb-neutral-soft);
  overflow: hidden;
}

/* Puntos ornamentales detrás de la card (izq. sup. y der. inf.) – token --bb-neutral-base */
.ds-hero-dots {
  position: absolute;
  z-index: 0;
  width: 200px;
  height: 200px;
  background-image: radial-gradient(circle, var(--bb-neutral-base) 1.5px, transparent 1.5px);
  background-size: 12px 12px;
  opacity: 0.6;
  pointer-events: none;
}
.ds-hero-dots--tl {
  top: 24px;
  left: 24px;
}
.ds-hero-dots--br {
  bottom: 24px;
  right: 24px;
}

/* Card principal: tokens DS, por delante de los dots (Figma: px 52px, gap 15px) */
.ds-hero-card {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  flex: 1 1 0;
  min-width: 0;
  max-width: 1280px;
  height: 525px;

  background: var(--bb-background-default);
  border-radius: 32px;
  overflow: hidden;
}

/* Columna izquierda: texto y botón (Figma: 584px, gap 44px) */
.ds-hero-content {
  flex: 0 0 584px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 52px;
}

/* Columna derecha: ilustración 882px, opacity 50%, mix-blend-luminosity (Figma) */
.ds-hero-visual {
  flex: 0 0 882px;
  height: 100%;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
}

.ds-hero-blocks {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  mix-blend-mode: luminosity;
}

.ds-hero-title {
  font-family: var(--bb-font-family-default);
  font-size: 80px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--bb-text-color-primary);
  margin: 0;
}

.ds-hero-subtitle {
  font-family: var(--bb-font-family-default);
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
}

.ds-hero-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--bb-button-gap);
  padding: var(--bb-space-16) 20px;
  font-family: var(--bb-button-font-family);
  font-weight: var(--bb-button-font-weight);
  font-size: 24px;
  line-height: var(--bb-xs-line-height);
  color: var(--bb-text-color-primary);
  background: var(--bb-primary-default);
  border: 1px solid var(--bb-primary-base);
  border-radius: 49px;
  text-decoration: none;
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s;
  margin-top: 44px;
}

.ds-hero-cta:hover {
  background: var(--bb-primary-soft);
  border-color: var(--bb-primary-default);
  color: var(--bb-white-color);
}

.ds-hero-cta-arrow {
  font-size: 1em;
}

/* Sección de cards */
.ds-home-cards {
  padding: var(--bb-space-64) var(--bb-space-24) var(--bb-space-80);
  max-width: 1200px;
  margin: 0 auto;
}

.ds-home-cards-title {
  font-size: var(--bb-heading-md);
  font-weight: 600;
  color: var(--bb-text-color-primary);
  margin: 0 0 var(--bb-space-32) 0;
}

.ds-home-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--bb-space-24);
}

.ds-home-card {
  display: block;
  padding: var(--bb-space-24);
  background: var(--bb-neutral-light);
  border: 1px solid var(--bb-neutral-base);
  border-radius: var(--bb-button-border-radius);
  text-decoration: none;
  color: inherit;
  transition:
    background 0.2s,
    border-color 0.2s;
}

.ds-home-card:hover {
  background: var(--bb-neutral-soft);
  border-color: var(--bb-neutral-medium);
}

.ds-home-card-heading {
  font-size: var(--bb-heading-xs);
  font-weight: 600;
  color: var(--bb-text-color-primary);
  margin: 0 0 var(--bb-space-12) 0;
}

.ds-home-card-text {
  font-size: var(--bb-p-md);
  line-height: var(--bb-sm-line-height);
  margin: 0;
}

@media (max-width: 1024px) {
  .ds-hero-wrap {
    padding: var(--bb-space-48) var(--bb-space-24) var(--bb-space-48);
  }
  .ds-hero-card {
    flex-direction: column;
    height: auto;
    min-height: 480px;
    padding: var(--bb-space-40) var(--bb-space-24);
  }
  .ds-hero-visual {
    flex: 0 0 auto;
    width: 100%;
    max-width: 360px;
    height: 240px;
    opacity: 0.6;
  }
  .ds-hero-content {
    flex: 0 0 auto;
    max-width: none;
    gap: var(--bb-space-24);
  }
  .ds-hero-title {
    font-size: clamp(40px, 8vw, 64px);
  }
  .ds-hero-subtitle {
    font-size: clamp(20px, 4vw, 28px);
  }
}
</style>
