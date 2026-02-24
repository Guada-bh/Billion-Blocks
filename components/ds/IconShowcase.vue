<template>
  <div class="icon-showcase">
    <p class="icon-showcase-intro text-secondary">
      Muestra representativa de la biblioteca de iconos. Estilo monocromático,
      <code>currentColor</code>
      , tamaño 24px.
    </p>
    <div class="icon-showcase-grid">
      <div v-for="item in iconList" :key="item.name" class="icon-showcase-cell">
        <div class="icon-showcase-preview">
          <component :is="item.component" />
        </div>
        <span class="icon-showcase-name text-secondary">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DsIconsIconPlus from '~/components/ds/icons/IconPlus.vue'
import DsIconsIconSearch from '~/components/ds/icons/IconSearch.vue'
import DsIconsIconDots from '~/components/ds/icons/IconDots.vue'
import DsIconsIconArrowRight from '~/components/ds/icons/IconArrowRight.vue'
import DsIconsIconHome from '~/components/ds/icons/IconHome.vue'
import DsIconsIconMenu from '~/components/ds/icons/IconMenu.vue'
import DsIconsIconClose from '~/components/ds/icons/IconClose.vue'
import DsIconsIconEdit from '~/components/ds/icons/IconEdit.vue'
import DsIconsIconDownload from '~/components/ds/icons/IconDownload.vue'
import DsIconsIconShare from '~/components/ds/icons/IconShare.vue'
import DsIconsIconChat from '~/components/ds/icons/IconChat.vue'
import DsIconsIconMail from '~/components/ds/icons/IconMail.vue'
import DsIconsIconPlay from '~/components/ds/icons/IconPlay.vue'
import DsIconsIconPause from '~/components/ds/icons/IconPause.vue'
import DsIconsIconSettings from '~/components/ds/icons/IconSettings.vue'
import DsIconsIconInfo from '~/components/ds/icons/IconInfo.vue'
import DsIconsIconWarning from '~/components/ds/icons/IconWarning.vue'
import DsIconsIconHeart from '~/components/ds/icons/IconHeart.vue'
import DsIconsIconCalendar from '~/components/ds/icons/IconCalendar.vue'

const iconList = [
  { name: 'Plus', component: DsIconsIconPlus },
  { name: 'Search', component: DsIconsIconSearch },
  { name: 'Dots', component: DsIconsIconDots },
  { name: 'Arrow Right', component: DsIconsIconArrowRight },
  { name: 'Home', component: DsIconsIconHome },
  { name: 'Menu', component: DsIconsIconMenu },
  { name: 'Close', component: DsIconsIconClose },
  { name: 'Edit', component: DsIconsIconEdit },
  { name: 'Download', component: DsIconsIconDownload },
  { name: 'Share', component: DsIconsIconShare },
  { name: 'Chat', component: DsIconsIconChat },
  { name: 'Mail', component: DsIconsIconMail },
  { name: 'Play', component: DsIconsIconPlay },
  { name: 'Pause', component: DsIconsIconPause },
  { name: 'Settings', component: DsIconsIconSettings },
  { name: 'Info', component: DsIconsIconInfo },
  { name: 'Warning', component: DsIconsIconWarning },
  { name: 'Heart', component: DsIconsIconHeart },
  { name: 'Calendar', component: DsIconsIconCalendar }
]
</script>

<style scoped>
.icon-showcase {
  margin-top: 8px;
}

.icon-showcase-intro {
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 1.5;
}

.icon-showcase-intro code {
  background: var(--bb-neutral-soft);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
}

.icon-showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
}

.icon-showcase-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border: 1px solid var(--bb-neutral-base);
  border-radius: 8px;
  background: var(--bb-neutral-soft);
}

.icon-showcase-preview {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bb-neutral-strong);
}

.icon-showcase-preview :deep(svg) {
  width: 24px;
  height: 24px;
}

.icon-showcase-name {
  font-size: 11px;
  text-align: center;
}
</style>
