// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      // Base URL that all content JSON files are resolved against.
      // Point this at an external storage bucket (e.g. Cloudflare R2) via
      // the NUXT_PUBLIC_CONTENT_BASE_URL env var to serve content without
      // redeploying the site. Defaults to the bundled /content files.
      contentBaseUrl: process.env.NUXT_PUBLIC_CONTENT_BASE_URL || '/content',
    },
  },
})
