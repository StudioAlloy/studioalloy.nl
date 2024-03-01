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
  server: {
    port: 8000, // default: 3000
    // host: '0.0.0.0' // default: localhost
  },
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
      '/projecten',
      '/over',
      '/workflow',
      '/contact',
      '/privacy',
      '/project/websites',
      '/project/intranet',
      '/project/datavisualisatie',
    ],
  },
  // END ⚙️ 
  // Nuxt 📦 modules
  modules: [
    // "@nuxtjs/axios",
    "@nuxtjs/apollo",
    // '@nuxtjs/redirect-module',
  ],
  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  },
  // redirect: [
  //   { from: '^/team', to: '/over' }, // Many urls to one
  //   { from: '^/team/(.*)$', to: '/over' }, // Many urls to one
  //   { from: '^/werkruimte', to: '/over' }, // One to one mapping
  //   { from: '^/project/(.*)$', to: '/projecten' }, // Many urls to one
  // ],
  // apollo: {
  //   clientConfigs: {
  //     default: '@/apollo/client-configs/default.js'
  //   }
  // },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://api.studioalloy.nl/graphql'
      }
    },
  },
  plugins: [
    { src: '~/plugins/ScrollMagic.js', ssr: false },
    { src: '~/plugins/ogmeta.js', ssr: true },
    // { src: '~plugins/ga.js', mode: 'client' },
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
