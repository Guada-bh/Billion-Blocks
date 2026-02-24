<template>
  <div class="button-showcase">
    <div class="button-showcase-section">
      <h4 class="button-showcase-heading">Guías de tipografía</h4>
      <ul class="button-showcase-list">
        <li>Los botones usan una tipografía mínima de <strong>16px</strong> para legibilidad y accesibilidad (WCAG).</li>
        <li>Los botones secundarios pueden usar contraste AAA y reducir a <strong>14px</strong> (variante SM).</li>
        <li class="button-showcase-warning">
          <span class="button-showcase-warning-icon" aria-hidden="true">⚠</span>
          La variante SM (14px) solo debe usarse en botones secundarios o contextuales con contraste AAA. No usar en primarios ni sobre fondos de bajo contraste.
        </li>
      </ul>
    </div>

    <div class="button-showcase-section">
      <h4 class="button-showcase-heading">Propiedades del botón</h4>
      <div class="button-showcase-props">
        <div class="button-showcase-prop">
          <span class="button-showcase-prop-label">Background</span>
          <code>--bb-button-primary-bg</code>
        </div>
        <div class="button-showcase-prop">
          <span class="button-showcase-prop-label">Text</span>
          <code>SM / 14px</code> + <code>--bb-button-primary-font-color</code>
        </div>
        <div class="button-showcase-prop">
          <span class="button-showcase-prop-label">Icon</span>
          <code>--bb-button-primary-icon-color</code>, size 16px (SM) / 24px (MD)
        </div>
      </div>
    </div>

    <div class="button-showcase-section">
      <h4 class="button-showcase-heading">Variantes</h4>
      <div class="button-showcase-grid">
        <div class="button-showcase-group">
          <p class="button-showcase-group-label">Primary</p>
          <div class="button-showcase-row">
            <DsButton variant="primary">Regístrate</DsButton>
            <DsButton variant="primary" disabled>Regístrate</DsButton>
          </div>
          <div class="button-showcase-row">
            <DsButton variant="primary">
              <template #iconLeft><DsIconsIconPlus /></template>
              Regístrate
            </DsButton>
            <DsButton variant="primary">
              Regístrate
              <template #iconRight><DsIconsIconPlus /></template>
            </DsButton>
          </div>
        </div>
        <div class="button-showcase-group">
          <p class="button-showcase-group-label">Secondary / Outline</p>
          <div class="button-showcase-row">
            <DsButton variant="secondary">Regístrate</DsButton>
            <DsButton variant="outline">Regístrate</DsButton>
          </div>
          <div class="button-showcase-row">
            <DsButton variant="secondary" size="sm">Regístrate (SM)</DsButton>
          </div>
        </div>
        <div class="button-showcase-group">
          <p class="button-showcase-group-label">Solo icono</p>
          <div class="button-showcase-row">
            <DsButton variant="primary" icon-only>
              <template #iconLeft><DsIconsIconSearch /></template>
            </DsButton>
            <DsButton variant="primary" icon-only>
              <template #iconLeft><DsIconsIconDots /></template>
            </DsButton>
            <DsButton variant="secondary" icon-only>
              <template #iconLeft><DsIconsIconSearch /></template>
            </DsButton>
          </div>
        </div>
      </div>
    </div>

    <div class="button-showcase-section button-showcase-focus">
      <h4 class="button-showcase-heading">Estado de foco (accesibilidad)</h4>
      <p class="button-showcase-focus-text">Para ver el estado de foco, usa la tecla <kbd>Tab</kbd>. Así navegan los lectores de pantalla.</p>
      <div class="button-showcase-row">
        <DsButton variant="primary" class="button-showcase-focus-demo">Regístrate</DsButton>
        <DsButton variant="primary">Regístrate</DsButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.button-showcase {
  margin-top: 8px;
}

.button-showcase-section {
  margin-bottom: 32px;
}

.button-showcase-heading {
  font-size: 18px;
  font-weight: 500;
  color: var(--bb-text-color-primary);
  margin: 0 0 12px 0;
}

.button-showcase-list {
  font-size: 14px;
  color: var(--bb-neutral-strong);
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}

.button-showcase-warning {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 8px;
}

.button-showcase-warning-icon {
  flex-shrink: 0;
  color: var(--bb-warning-default);
}

.button-showcase-props {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
}

.button-showcase-prop {
  font-size: 14px;
  color: var(--bb-neutral-strong);
}

.button-showcase-prop-label {
  display: block;
  font-weight: 500;
  margin-bottom: 2px;
}

.button-showcase-prop code {
  font-size: 12px;
  background: var(--bb-neutral-soft);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--bb-neutral-strong);
}

.button-showcase-grid {
  display: flex;
  flex-direction: column;
  gap: var(--bb-space-32);
}

.button-showcase-group-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--bb-neutral-medium);
  margin: 0 0 var(--bb-space-12) 0;
}

.button-showcase-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--bb-space-24);
  align-items: center;
  margin-bottom: var(--bb-space-16);
}

.button-showcase-focus-text {
  font-size: 14px;
  color: var(--bb-neutral-strong);
  margin: 0 0 12px 0;
}

.button-showcase-focus-text kbd {
  padding: 2px 8px;
  font-size: 12px;
  background: var(--bb-neutral-soft);
  border-radius: 4px;
  border: 1px solid var(--bb-neutral-base);
}

.button-showcase-focus-demo:focus-visible {
  box-shadow: 0 0 0 2px var(--bb-background-default), 0 0 0 4px var(--bb-info-default);
}
</style>
