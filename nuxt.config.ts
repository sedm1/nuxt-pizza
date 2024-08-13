// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/png', href: '/fav.png' }]
    }
  },
  devtools: { enabled: true },
  modules: [['@nuxtjs/google-fonts', {
      families: {
        Nunito: [200, 300, 400, 500, 600, 700, 800],
      }
  }], '@pinia/nuxt'],
  vite: {
    css: {
        preprocessorOptions: {
            sass: {
                additionalData: '@import "@/assets/sass/main.sass"',
            },
        },
    },
  },
  runtimeConfig: {
    public: {
      Api: 'http://pizza-app/server/api'
    }
  }
})