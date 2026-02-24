<template>
  <div class="color-palette">
    <p class="color-palette-intro text-secondary">
      Paleta del sistema por categorías. Primary medium puede tener problemas de contraste en ciertos fondos.
      <a href="#" class="color-palette-link">Ver pruebas de accesibilidad</a>
    </p>
    <div class="color-grid">
      <div v-for="group in colorGroups" :key="group.name" class="color-group">
        <h3 class="color-group-title">{{ group.name }}</h3>
        <div class="color-swatches">
          <div
            v-for="token in group.tokens"
            :key="token.name"
            class="color-swatch"
            :class="{ 'color-swatch--warning': token.warning }"
          >
            <div class="color-swatch-preview" :style="{ backgroundColor: token.hex }" />
            <div class="color-swatch-info">
              <span class="color-swatch-name">{{ token.name }}</span>
              <code class="color-swatch-hex text-secondary">{{ token.hex }}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorGroups = [
  {
    name: 'Neutral',
    tokens: [
      { name: 'Neutral soft', hex: '#142029', var: '--bb-neutral-soft' },
      { name: 'Neutral light', hex: '#1a2935', var: '--bb-neutral-light' },
      { name: 'Neutral base', hex: '#2c4860', var: '--bb-neutral-base' },
      { name: 'Neutral medium', hex: '#a9bcce', var: '--bb-neutral-medium' },
      { name: 'Neutral strong', hex: '#f5f7fc', var: '--bb-neutral-strong' },
      { name: 'Neutral default', hex: '#101920', var: '--bb-neutral-default' }
    ]
  },
  {
    name: 'Primary',
    tokens: [
      { name: 'Primary soft', hex: '#9d2a2a', var: '--bb-primary-soft' },
      { name: 'Primary base', hex: '#fd4444', var: '--bb-primary-base' },
      { name: 'Primary medium', hex: '#fea1a1', var: '--bb-primary-medium', warning: true },
      { name: 'Primary strong', hex: '#ffd5d5', var: '--bb-primary-strong' },
      { name: 'Primary default', hex: '#fd5757', var: '--bb-primary-default' },
      { name: 'Primary contrast', hex: '#fff5f5', var: '--bb-primary-contrast' }
    ]
  },
  {
    name: 'Success',
    tokens: [
      { name: 'Strong', hex: '#013326', var: '--bb-success-light' },
      { name: 'Default', hex: '#00d689', var: '--bb-success-default' },
      { name: 'Medium', hex: '#00a66a', var: '--bb-success-medium' },
      { name: 'Light', hex: '#ccffed', var: '--bb-success-strong' }
    ]
  },
  {
    name: 'Info',
    tokens: [
      { name: 'Strong', hex: '#0d5e9b', var: '--bb-info-light' },
      { name: 'Default', hex: '#0088f0', var: '--bb-info-default' },
      { name: 'Medium', hex: '#a3d7ff', var: '--bb-info-medium' },
      { name: 'Light', hex: '#d8edfd', var: '--bb-info-strong' }
    ]
  },
  {
    name: 'Warning',
    tokens: [
      { name: 'Strong', hex: '#393013', var: '--bb-warning-light' },
      { name: 'Default', hex: '#fe9a00', var: '--bb-warning-default' },
      { name: 'Medium', hex: '#fac780', var: '--bb-warning-medium' },
      { name: 'Light', hex: '#fde5c4', var: '--bb-warning-strong' }
    ]
  },
  {
    name: 'Error',
    tokens: [
      { name: 'Strong', hex: '#6f1010', var: '--bb-error-light' },
      { name: 'Default', hex: '#d51b1b', var: '--bb-error-default' },
      { name: 'Medium', hex: '#ca363f', var: '--bb-error-medium' },
      { name: 'Light', hex: '#fea1a1', var: '--bb-error-strong' }
    ]
  },
  {
    name: 'Disable',
    tokens: [
      { name: 'Default', hex: '#142029', var: '--bb-disable-color-base' },
      { name: 'Contrast', hex: '#395d7c', var: '--bb-disable-color-base-contrast' }
    ]
  },
  {
    name: 'Black & White',
    tokens: [
      { name: 'White', hex: '#ffffff', var: '--bb-white-color' },
      { name: 'Black', hex: '#000000', var: '--bb-black-color' }
    ]
  }
]
</script>

<style scoped>
.color-palette {
  margin-top: 8px;
}

.color-palette-intro {
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 1.5;
}

.color-palette-link {
  color: var(--bb-info-default);
  margin-left: 4px;
}

.color-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.color-group-title {
  font-size: 18px;
  font-weight: 500;
  color: var(--bb-text-color-primary);
  margin: 0 0 12px 0;
}

.color-swatches {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
}

.color-swatch {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--bb-neutral-base);
}

.color-swatch-preview {
  height: 64px;
  width: 100%;
}

.color-swatch-info {
  padding: 8px 10px;
  background: var(--bb-neutral-soft);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.color-swatch-name {
  font-size: 12px;
  font-weight: 500;
  color: var(--bb-neutral-strong);
}

.color-swatch-hex {
  font-size: 11px;
  font-family: ui-monospace, monospace;
}
</style>
