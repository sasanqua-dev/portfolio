// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      // 履歴データ(JSON)の Cloudflare R2 公開URL。NUXT_PUBLIC_EVENTS_JSON_URL で上書き可能
      eventsJsonUrl: '',
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
