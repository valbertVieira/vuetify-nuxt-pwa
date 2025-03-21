// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@pinia/nuxt'],
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in', // default
    },
    layoutTransition: {
      name: 'fade',
      mode: 'out-in', // default
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */

      defaults: {
        VBtn: {
          class: 'text-none',
        },
        VChip: {
          class: 'rounded-lg',
        },
        VCard: {
          class: 'rounded-xl',
        },
      },
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      theme_color: '#8936FF',
      background_color: '#2EC6FE',
      icons: [
        { purpose: 'maskable', sizes: '512x512', src: 'icon512_maskable.png', type: 'image/png' },
        { purpose: 'any', sizes: '512x512', src: 'icon512_rounded.png', type: 'image/png' },
      ],
      orientation: 'any',
      display: 'standalone',
      lang: 'pt-BR',

    },
  },
})
