// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  srcDir: 'src/',
  app: {
    head: {
      title: '旅行予定表',
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0" },
      ]
    }
  },
  css: [
    '@/assets/global.scss',
  ],
})
