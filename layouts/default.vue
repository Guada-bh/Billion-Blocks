<template>
  <div class="ds-layout" :data-theme="theme">
    <header class="ds-header">
      <button
        type="button"
        class="ds-menu-toggle"
        aria-label="Abrir menú"
        aria-expanded="sidebarOpen"
        @click="sidebarOpen = !sidebarOpen"
      >
        <span class="ds-menu-toggle-bar" />
        <span class="ds-menu-toggle-bar" />
        <span class="ds-menu-toggle-bar" />
      </button>
      <NuxtLink to="/" class="ds-logo" @click="sidebarOpen = false">
        <img :src="logoSrc" alt="" class="ds-logo-isotipo" width="32" height="32" />
        <span class="ds-logo-text">Billion Blocks</span>
      </NuxtLink>
      <button
        type="button"
        class="ds-theme-toggle"
        aria-label="Alternar tema"
        @click="toggleTheme"
      >
        {{ theme === 'dark' ? 'Claro' : 'Oscuro' }}
      </button>
    </header>

    <aside class="ds-sidebar" :class="{ 'ds-sidebar--open': sidebarOpen }" aria-label="Navegación del sitio">
      <nav class="ds-sidebar-nav">
        <NuxtLink to="/getting-started" class="ds-sidebar-link" @click="sidebarOpen = false">
          Getting started
        </NuxtLink>
        <NuxtLink to="/foundations" class="ds-sidebar-link" @click="sidebarOpen = false">
          Foundations
        </NuxtLink>
        <NuxtLink to="/tokens-theming" class="ds-sidebar-link" @click="sidebarOpen = false">
          Tokens & Theming
        </NuxtLink>
        <NuxtLink to="/components" class="ds-sidebar-link" @click="sidebarOpen = false">
          Components
        </NuxtLink>
        <NuxtLink to="/governance" class="ds-sidebar-link" @click="sidebarOpen = false">
          Governance
        </NuxtLink>
        <NuxtLink to="/changelog" class="ds-sidebar-link" @click="sidebarOpen = false">
          Changelog
        </NuxtLink>
      </nav>
    </aside>

    <div v-if="sidebarOpen" class="ds-sidebar-backdrop" aria-hidden="true" @click="sidebarOpen = false" />

    <main class="ds-main">
      <slot />
    </main>
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
.ds-layout {
  min-height: 100vh;
  background: var(--bb-background-default);
  color: var(--bb-text-color-primary);
  display: flex;
  flex-wrap: wrap;
}

.ds-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: var(--bb-space-16);
  padding: var(--bb-space-16) var(--bb-space-24);
  width: 100%;
  background: var(--bb-neutral-soft);
  border-bottom: 1px solid var(--bb-neutral-base);
}

.ds-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: var(--bb-neutral-strong);
  transition: background 0.2s;
}
.ds-menu-toggle:hover {
  background: var(--bb-neutral-base);
}
.ds-menu-toggle-bar {
  display: block;
  width: 20px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
}

.ds-logo {
  display: flex;
  align-items: center;
  gap: var(--bb-space-12);
  text-decoration: none;
}
.ds-logo-isotipo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}
.ds-logo-text {
  font-family: var(--bb-font-family-default);
  font-size: 20px;
  font-weight: 700;
  color: var(--bb-white-color);
}

.ds-theme-toggle {
  margin-left: auto;
  padding: var(--bb-space-8) var(--bb-space-16);
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

/* Sidebar: visible en desktop */
.ds-sidebar {
  position: sticky;
  top: 73px;
  align-self: flex-start;
  width: 260px;
  flex-shrink: 0;
  padding: var(--bb-space-24) 0;
  padding-left: var(--bb-space-24);
  border-right: 1px solid var(--bb-neutral-base);
  background: var(--bb-neutral-soft);
}
.ds-sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: var(--bb-space-4);
}
.ds-sidebar-link {
  display: block;
  padding: var(--bb-space-8) var(--bb-space-12);
  font-size: 14px;
  color: var(--bb-neutral-strong);
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
}
.ds-sidebar-link:hover {
  background: var(--bb-neutral-base);
  color: var(--bb-white-color);
}
.ds-sidebar-link.router-link-active {
  background: var(--bb-neutral-base);
  color: var(--bb-white-color);
  font-weight: 600;
}

.ds-sidebar-backdrop {
  display: none;
}

.ds-main {
  flex: 1;
  min-width: 0;
  padding: var(--bb-space-40) var(--bb-space-24) var(--bb-space-80);
  max-width: 900px;
}

/* Responsive: hamburger + drawer */
@media (max-width: 968px) {
  .ds-menu-toggle {
    display: flex;
  }
  .ds-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    width: 280px;
    max-width: 85vw;
    height: 100vh;
    padding: var(--bb-space-80) var(--bb-space-24) var(--bb-space-24);
    border-right: 1px solid var(--bb-neutral-base);
    background: var(--bb-neutral-soft);
    transform: translateX(-100%);
    transition: transform 0.2s ease-out;
    overflow-y: auto;
  }
  .ds-sidebar--open {
    transform: translateX(0);
  }
  .ds-sidebar-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 25;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.2s;
  }
  .ds-main {
    max-width: none;
  }
}
</style>
