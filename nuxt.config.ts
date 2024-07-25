export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' }
      ]
    }
  },
  css: [
    '@/assets/css/main.css'
  ],
  modules: [
  ]
})