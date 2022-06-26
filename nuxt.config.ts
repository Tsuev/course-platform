import { defineNuxtConfig } from 'nuxt'
import postCss from './postcss.config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head() {
    return {
      title: 'Payment Page - My awesome project', // Other meta information
      script: [
        { hid: 'stripe', src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.38.0/codemirror.min.js', defer: true },
        { hid: 'stripe', src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/xml/xml.min.js', defer: true },
        { hid: 'stripe', src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/addon/edit/closetag.min.js', defer: true },
        { hid: 'stripe', src: '@/assets//codemirror-master/dist/emmet.js', defer: true }
      ],

      link: [
        { rel: 'stylesheet', ref: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/theme/dracula.min.css' }
      ]
    }
  },
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
