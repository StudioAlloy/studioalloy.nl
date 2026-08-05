const archiveBase =
  process.env.DEPLOY_ENV === "GH_PAGES" ? "/wish-list/" : "/2025/";
const archiveUrl = "https://at-alloy.nl/2025/";

module.exports = {
  mode: "universal",
  router: {
    base: archiveBase,
  },
  // Header meta
  server: {
    port: 8000, // default: 3000
    // host: '0.0.0.0' // default: localhost
  },
  head: {
    title: "Studio Alloy",
    // script: [
    //   { src: "/js/DrawSVGPlugin.min.js" },
    //   { src: "/js/MorphSVGPlugin.min.js" },
    // ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "robots", name: "robots", content: "noindex, nofollow" },
      { hid: "googlebot", name: "googlebot", content: "noindex, nofollow" },
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
      { property: "og:url", content: archiveUrl },
      {
        property: "og:image",
        content: `${archiveUrl}share.jpg`,
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: `${archiveBase}favicon.ico`,
      },
      { rel: "manifest", href: `${archiveBase}site.webmanifest` },
      { rel: "apple-touch-icon", href: `${archiveBase}apple-touch-icon.png` },
    ],
  },
  // END Header meta
  // ⚙️  Nuxt pre generate the following pages as static HTML
  generate: {
    dir: "dist",
    fallback: "404.html",
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
  apollo: {
    clientConfigs: {
      default: '@/apollo/client-configs/default.js'
    }
  },
  plugins: [
    // { src: '~/plugins/ScrollMagic.js', ssr: false },
    { src: "~/plugins/archive-html.js", ssr: true },
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
  // buildModules: ['nuxt-gsap-module'],
  // gsap: {
  //   extraPlugins: {
  //     // scrollTrigger: true
  //   },
  //   clubPlugins: {
  //     drawSVG: true,
  //     morphSVG: true,
  //   }
  // },
  build: {
    transpile: ['gsap'],
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
