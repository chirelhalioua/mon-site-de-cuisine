export default defineNuxtConfig({
  components: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/style/global.css'
  ],
  pages: true, 
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
        },
      ],
    },
  },
})
