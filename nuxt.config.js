const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
      router: {
        base: "/wish-list/",
      },
    }
    : {};

module.exports = {
  ...routerBase,
  // Header meta
  head: {
    title: "studioalloy",
    script: [
      { src: "/js/DrawSVGPlugin.min.js" },
      { src: "/js/MorphSVGPlugin.min.js" },
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "WIJ MAKEN IMPACT MET PIXELS",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "studioalloy" },
      {
        property: "og:description",
        content: "WIJ MAKEN IMPACT MET PIXELS",
      },
      { property: "og:url", content: "" },
      {
        property: "og:image",
        content: "",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "",
      },
    ],
  },
  // END Header meta
  // ⚙️  Nuxt pre generate the following pages as static HTML
  generate: {
    dir: "docs",
    routes: [
      'portfolio',
      'about',
      'contact',
      'privacy',
      '/dienst/websites',
      '/dienst/intranet',
      '/dienst/datavisualisatie',
    ],
  },
  // END ⚙️ 
  // Nuxt 📦 modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/apollo",
  ],
  apollo: {
    clientConfigs: {
      default: '@/apollo/client-configs/default.js'
    }
  },
  plugins: [
    { src: '~/plugins/ScrollMagic.js', ssr: false },
  ],
  // END 📦 
  manifest: {
    name: "studioalloy",
    short_name: "studioalloy",
    lang: "en",
    icons: [
      {
        src: "android-chrome-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    theme_color: "#e64",
    background_color: "#e64lll",
    display: "standalone",
  },
  css: ["@/assets/css/main.scss"],
  loading: { color: "#F53" },
  build: {
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
