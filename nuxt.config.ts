// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-typed-router",
    "nuxt-file-storage",
    "dayjs-nuxt",
    "@nuxt/fonts",
    "@prisma/nuxt",
  ],
  fonts: {
    families: [
      // do not resolve this font with any provider from `@nuxt/fonts`
      { name: "Monserrat", provider: "google" },
    ],
  },
  css: ["~/assets/scss/style.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/_variables.scss" as *;
          @use "~/assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },
});