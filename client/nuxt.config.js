// const path = require('path');

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "Aghil Jose | Full Stack Engineer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // {
      //   hid: "description",
      //   name: "description",
      //   content: "The blog and portfolio of Aghil Jose | Full Stack Engineer",
      // },
      // {
      //   hid: "og:image",
      //   property: "og:image",
      //   content: "/img/common/aghiljvlogo.png",
      // },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/aghiljvlogo.png" }],
    script: [
      // { type: 'text/javascript', src: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js' }
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/particlePlugin", ssr: false },
    { src: "~/plugins/vueTouchPlugin", ssr: false },
    { src: "~plugins/ga.js", mode: "client" },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/toast",
    "@nuxtjs/recaptcha",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Toast module configuration
   */
  toast: {
    position: "top-center",
    duration: 1000,
    register: [
      // Register custom toasts
      {
        name: "commentSuccess",
        message: "Comment Submitted",
        options: {
          type: "default",
        },
      },
    ],
  },
  /*
   ** Recaptcha module configuration
   */
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: "6Ldt8MgZAAAAAFfuFA4xGikCUCTaFnD69mSfKVoV", // Site key for requests
    version: 3, // Version
    size: "normal", // Size: 'compact', 'normal', 'invisible' (v2)
  },

  // buildDir: '../server/public',
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},

    publicPath: "/assets/",
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
