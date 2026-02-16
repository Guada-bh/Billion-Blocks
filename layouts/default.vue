<template>
  <div class="ds-layout" :data-theme="theme">
    <header class="ds-header">
      <a href="/" class="ds-logo">Billion Blocks</a>
      <nav class="ds-nav">
        <a href="#colores" class="ds-nav-link">Colores</a>
        <a href="#tipografia" class="ds-nav-link">Tipografía</a>
        <a href="#iconos" class="ds-nav-link">Iconos</a>
        <a href="#botones" class="ds-nav-link">Botones</a>
      </nav>
      <button
        type="button"
        class="ds-theme-toggle"
        aria-label="Alternar tema"
        @click="toggleTheme"
      >
        {{ theme === 'dark' ? 'Claro' : 'Oscuro' }}
      </button>
    </header>
    <main class="ds-main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const theme = ref<'dark' | 'light'>('dark')

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

onMounted(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
})

watch(theme, (v) => {
  document.documentElement.setAttribute('data-theme', v)
})
</script>

<style scoped>
.ds-layout {
  min-height: 100vh;
  background: var(--bb-background-default);
  color: var(--bb-text-color-primary);
}

.ds-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 24px;
  background: var(--bb-neutral-soft);
  border-bottom: 1px solid var(--bb-neutral-base);
}

.ds-logo {
  font-family: var(--bb-font-family-default);
  font-size: 20px;
  font-weight: 700;
  color: var(--bb-primary-default);
  text-decoration: none;
}

.ds-nav {
  display: flex;
  gap: 16px;
}

.ds-nav-link {
  color: var(--bb-neutral-strong);
  text-decoration: none;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
}

.ds-nav-link:hover {
  background: var(--bb-neutral-base);
  color: var(--bb-white-color);
}

.ds-theme-toggle {
  margin-left: auto;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--bb-neutral-strong);
  background: var(--bb-neutral-base);
  border: none;
  border-radius: var(--bb-button-border-radius);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.ds-theme-toggle:hover {
  background: var(--bb-neutral-default);
  color: var(--bb-white-color);
}

.ds-main {
  padding: 40px 24px 80px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
