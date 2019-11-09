require('dotenv').config()
const path = require('path')

module.exports = {
  mode: 'universal',
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
  },
  server: {
    port: 3005, // デフォルト: 3005
    host: '0.0.0.0', // デフォルト: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'taakuuyaa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon-180x180.png' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'red' },
  /*
   ** Global CSS
   */
  css: [
    { src: '~/assets/scss/reset.scss', lang: 'scss' },
    { src: '~/assets/scss/style.scss', lang: 'scss' },
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/bulma',
    'nuxt-fontawesome',
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['~/assets/scss/_variable.scss'],
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
  },
  pwa: {
    manifest: {
      lang: 'ja',
      name: 'taakuuyaa',
      short_name: 'taakuuyaa',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      description: "taakuuyaa's portfolio",
      orientation: 'portrait',
    },
    icon: {
      sizes: [64, 120, 144, 152, 167, 180, 192, 384, 512],
    },
  },
  webfontloader: {
    google: {
      families: ['Lato:700', 'Raleway:900&display=swap'],
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },

  /*
   * `@` , `~` のエイリアスを解決する
   * 参考:
   * https://qiita.com/sutoh/items/54e94df1c610c0f18c85
   */
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    root: path.resolve(__dirname),
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname),
    },
  },
}
