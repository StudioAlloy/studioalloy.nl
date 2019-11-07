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
    title: "Studio Alloy",
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
        content: "Wij zijn makers. De technisch handige jongens. De doeners. En wij maken impact met pixels.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Studio Alloy | Webdesign & development" },
      {
        property: "og:description",
        content: "Wij zijn makers. De technisch handige jongens. De doeners. En wij maken impact met pixels.",
      },
      { property: "og:url", content: "https://studioalloy.nl" },
      {
        property: "og:image",
        content: "https://studioalloy.nl/share.jpg",
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
      '/portfolio',
      '/about',
      '/contact',
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
    { src: '~/plugins/ogmeta.js', ssr: true },
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
