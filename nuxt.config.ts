// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@sidebase/nuxt-auth'
  ],
  auth: {
    baseURL: process.env.NUXT_AUTH_BASE_URL,
    globalAppMiddleware: {
      isEnabled: true,
      addDefaultCallbackUrl: true,
      allow404WithoutAuth: true,
    },
    provider: {
      type: 'authjs',
      trustHost: false,
      addDefaultCallbackUrl: true,
    }
  },
  runtimeConfig: {
    authSecret: '',
    googleClientId: '',
    googleClientSecret: '',
    supabaseUrl: '',
    supabaseSecret: '',
    supabaseJwtSecret: '',
  },
})