import { defineNuxtConfig } from 'nuxt'
import postCss from './postcss.config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: postCss,
    },
  },
  css: [
    '@/assets/scss/tailwind.css',
    '@/assets/scss/global.scss',
  ],

})
