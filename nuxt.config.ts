// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Billion Blocks · Design System',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Sistema de diseño Billion Blocks para Billionhands' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap' }
      ]
    }
  },
  css: [
    '~/assets/css/colors.css',
    '~/assets/css/typography.css',
    '~/assets/css/buttons.css'
  ],
  compatibilityDate: '2024-11-01',

  // Deploy en Vercel
  nitro: {
    preset: 'vercel'
  }
})
