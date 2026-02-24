<template>
  <div class="ds-doc-layout" :data-theme="theme">
    <aside class="ds-doc-sidebar" :class="{ 'ds-doc-sidebar--open': sidebarOpen }" aria-label="Navegación del sitio">
      <nav class="ds-doc-sidebar-nav">
        <NuxtLink to="/" class="ds-doc-sidebar-logo" @click="sidebarOpen = false">
          <img :src="logoSrc" alt="" class="ds-doc-logo-isotipo" width="32" height="32" />
          <span class="ds-doc-logo-text">Billion Blocks</span>
        </NuxtLink>
        <NuxtLink to="/getting-started" class="ds-doc-sidebar-link" @click="sidebarOpen = false">
          Getting started
        </NuxtLink>
        <NuxtLink to="/foundations" class="ds-doc-sidebar-link" @click="sidebarOpen = false">Foundations</NuxtLink>
        <NuxtLink to="/tokens-theming" class="ds-doc-sidebar-link" @click="sidebarOpen = false">
          Tokens & Theming
        </NuxtLink>
        <NuxtLink to="/components" class="ds-doc-sidebar-link" @click="sidebarOpen = false">Components</NuxtLink>
        <NuxtLink to="/governance" class="ds-doc-sidebar-link" @click="sidebarOpen = false">Governance</NuxtLink>
        <NuxtLink to="/changelog" class="ds-doc-sidebar-link" @click="sidebarOpen = false">Changelog</NuxtLink>
      </nav>
      <button type="button" class="ds-doc-theme-toggle" aria-label="Alternar tema" @click="toggleTheme">
        {{ theme === 'dark' ? 'Claro' : 'Oscuro' }}
      </button>
    </aside>

    <button
      type="button"
      class="ds-doc-menu-toggle"
      aria-label="Abrir menú"
      aria-expanded="sidebarOpen"
      @click="sidebarOpen = !sidebarOpen"
    >
      <span class="ds-doc-menu-toggle-bar" />
      <span class="ds-doc-menu-toggle-bar" />
      <span class="ds-doc-menu-toggle-bar" />
    </button>

    <div v-if="sidebarOpen" class="ds-doc-sidebar-backdrop" aria-hidden="true" @click="sidebarOpen = false" />

    <div class="ds-doc-content">
      <main class="ds-doc-main">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const theme = ref<'dark' | 'light'>('dark')
const sidebarOpen = ref(false)
const logoSrc = '/isotipo-bh.svg'

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
.ds-doc-layout {
  min-height: 100vh;
  width: 100%;
  background: var(--bb-background-default);
  color: var(--bb-text-color-primary);
  display: flex;
}

.ds-doc-sidebar {
  position: sticky;
  top: 0;
  width: 260px;
  flex-shrink: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: var(--bb-space-24);
  border-right: 1px solid var(--bb-neutral-base);
  background: var(--bb-neutral-soft);
}

.ds-doc-sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: var(--bb-space-4);
}

.ds-doc-sidebar-logo {
  display: flex;
  align-items: center;
  gap: var(--bb-space-12);
  padding: var(--bb-space-8) var(--bb-space-12);
  margin-bottom: var(--bb-space-16);
  text-decoration: none;
  border-radius: 6px;
}

.ds-doc-sidebar-logo:hover {
  background: var(--bb-neutral-base);
}

.ds-doc-logo-isotipo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.ds-doc-logo-text {
  font-family: var(--bb-font-family-default);
  font-size: 20px;
  font-weight: 700;
  color: var(--bb-white-color);
}

.ds-doc-sidebar-link {
  display: block;
  padding: var(--bb-space-8) var(--bb-space-12);
  font-size: 14px;
  color: var(--bb-neutral-strong);
  text-decoration: none;
  border-radius: 6px;
  transition:
    background 0.2s,
    color 0.2s;
}

.ds-doc-sidebar-link:hover {
  background: var(--bb-neutral-base);
  color: var(--bb-white-color);
}

.ds-doc-sidebar-link.router-link-active {
  background: var(--bb-neutral-base);
  color: var(--bb-white-color);
  font-weight: 600;
}

.ds-doc-theme-toggle {
  margin-top: auto;
  padding: var(--bb-space-8) var(--bb-space-16);
  font-size: 14px;
  font-weight: 500;
  color: var(--bb-neutral-strong);
  background: var(--bb-neutral-base);
  border: none;
  border-radius: var(--bb-button-border-radius);
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
}

.ds-doc-theme-toggle:hover {
  background: var(--bb-neutral-default);
  color: var(--bb-white-color);
}

.ds-doc-menu-toggle {
  display: none;
  position: fixed;
  top: var(--bb-space-16);
  left: var(--bb-space-16);
  z-index: 35;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  background: var(--bb-neutral-soft);
  border: 1px solid var(--bb-neutral-base);
  border-radius: 6px;
  cursor: pointer;
  color: var(--bb-neutral-strong);
  transition: background 0.2s;
}

.ds-doc-menu-toggle:hover {
  background: var(--bb-neutral-base);
}

.ds-doc-menu-toggle-bar {
  display: block;
  width: 20px;
  height: 2px;
  margin: 0 auto;
  background: currentColor;
  border-radius: 1px;
}

.ds-doc-sidebar-backdrop {
  display: none;
}

.ds-doc-content {
  flex: 1;
  min-width: 0;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.ds-doc-main {
  flex: 1;
  min-width: 0;
  padding: var(--bb-space-40) var(--bb-space-24) var(--bb-space-80);
}

@media (max-width: 968px) {
  .ds-doc-menu-toggle {
    display: flex;
  }

  .ds-doc-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    width: 280px;
    max-width: 85vw;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.2s ease-out;
    overflow-y: auto;
  }

  .ds-doc-sidebar--open {
    transform: translateX(0);
  }

  .ds-doc-sidebar-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 25;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.2s;
  }
}
</style>
