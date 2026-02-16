<template>
  <div class="ds-page">
    <div class="ds-hero">
      <h1 class="ds-title">Billion Blocks</h1>
      <p class="ds-version">V 1.0.0</p>
    </div>

    <section id="colores" class="ds-section">
      <h2 class="ds-section-title">Colores</h2>
      <DsColorPalette />
    </section>

    <section id="tipografia" class="ds-section">
      <h2 class="ds-section-title">Tipografía</h2>
      <DsTypeScale />
    </section>

    <section id="iconos" class="ds-section">
      <h2 class="ds-section-title">Iconos</h2>
      <DsIconShowcase />
    </section>

    <section id="botones" class="ds-section">
      <h2 class="ds-section-title">Botones</h2>
      <DsButtonShowcase />
    </section>
  </div>
</template>

<style scoped>
.ds-page {
  font-family: var(--bb-font-family-default);
}

.ds-hero {
  margin-bottom: 48px;
}

.ds-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--bb-primary-default);
  margin: 0 0 4px 0;
}

.ds-version {
  font-size: 14px;
  color: var(--bb-neutral-medium);
  margin: 0;
}

.ds-section {
  margin-bottom: 64px;
  scroll-margin-top: 80px;
}

.ds-section-title {
  font-size: var(--bb-heading-md);
  font-weight: 500;
  line-height: var(--bb-xl-line-height);
  color: var(--bb-text-color-primary);
  margin: 0 0 24px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--bb-neutral-base);
}
</style>
