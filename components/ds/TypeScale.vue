<template>
  <div class="type-scale">
    <div class="type-hero">
      <h3 class="type-font-name">Satoshi variable</h3>
      <p class="type-sample-lg">Ag</p>
      <p class="type-alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p class="type-alphabet">abcdefghijklmnopqrstuvwxyz</p>
      <p class="type-alphabet">0123456789!@#$%^&*()</p>
    </div>

    <div class="type-block">
      <h4 class="type-block-title">Mobile</h4>
      <div class="type-variants type-variants--mobile">
        <div v-for="v in mobileVariants" :key="v.name" class="type-row">
          <span class="type-row-label">{{ v.name }}</span>
          <span class="type-row-sample" :class="v.class">Billionhands</span>
        </div>
      </div>
    </div>

    <div class="type-block">
      <h4 class="type-block-title">Desktop</h4>
      <div class="type-variants type-variants--desktop">
        <div v-for="v in desktopVariants" :key="v.name" class="type-row">
          <span class="type-row-label">{{ v.name }}</span>
          <span class="type-row-sample" :class="v.class">Billionhands</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const mobileVariants = [
  { name: 'Heading Lg / Bold', class: 'bb-mobile-heading-lg-bold' },
  { name: 'Heading Sm / Medium', class: 'bb-mobile-heading-sm-medium' },
  { name: 'Body Md / Regular', class: 'bb-mobile-body-md-regular' }
]

const desktopVariants = [
  { name: 'Heading Lg / Bold', class: 'bb-desktop-heading-lg-bold' },
  { name: 'Heading Md / Medium', class: 'bb-desktop-heading-md-medium' },
  { name: 'Heading Sm / Medium', class: 'bb-heading-xs' },
  { name: 'Body Lg / Regular', class: 'bb-desktop-body-lg-regular' },
  { name: 'Body Md / Regular', class: 'bb-desktop-body-md-regular' }
]
</script>

<style scoped>
.type-scale {
  margin-top: 8px;
}

.type-hero {
  margin-bottom: 40px;
}

.type-font-name {
  font-size: 24px;
  font-weight: 500;
  color: var(--bb-text-color-primary);
  margin: 0 0 16px 0;
}

.type-sample-lg {
  font-size: 72px;
  font-weight: 700;
  line-height: 1;
  color: var(--bb-text-color-primary);
  margin: 0 0 24px 0;
}

.type-alphabet {
  font-size: 16px;
  color: var(--bb-neutral-medium);
  margin: 0 0 4px 0;
  letter-spacing: 0.02em;
}

.type-block {
  margin-bottom: 40px;
}

.type-block-title {
  font-size: 18px;
  font-weight: 500;
  color: var(--bb-text-color-primary);
  margin: 0 0 16px 0;
}

.type-variants {
  border: 1px dashed var(--bb-neutral-base);
  border-radius: 8px;
  padding: 20px;
}

.type-row {
  display: flex;
  align-items: baseline;
  gap: 24px;
  margin-bottom: 16px;
}

.type-row:last-child {
  margin-bottom: 0;
}

.type-row-label {
  flex: 0 0 200px;
  font-size: 12px;
  color: var(--bb-neutral-medium);
}

.type-row-sample {
  color: var(--bb-text-color-primary);
}
</style>
