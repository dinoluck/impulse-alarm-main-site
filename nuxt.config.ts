// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'cleavr',
  },
  typescript: {
    strict: true,
  },
  app: {
    buildAssetsDir: 'static-assets',
    rootId: 'impulse-alarm-web-app',
    head: {
      htmlAttrs: {
        class: 'h-full bg-slate-50 dark:bg-slate-950',
      },
      bodyAttrs: {
        class: 'h-full bg-slate-50 dark:bg-slate-950',
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
        },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
        { rel: 'icon', href: '/favicon.svg' },
      ],
      title: 'Impulse Alarm - An Authorized ADT Dealer',
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in', // default
    },
  },
  ssr: false,
  modules: [
    [
      '@nuxtjs/eslint-module',
      {
        /* module options */
      },
    ],
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
  ],
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
