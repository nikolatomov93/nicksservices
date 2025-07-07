// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module'],
  primevue: {
      options: {
          theme: {
              preset: Aura
          }
      },
      components: {
        include: ['ToggleButton', 'DataTable']
    }
  },
  css: ['@/assets/custom.css'],
})