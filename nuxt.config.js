const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
      router: {
        base: "/wish-list/",
      },
    }
    : {};

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "studioalloy",
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
  generate: {
    dir: "docs",
    // router: {
    //   base: '/wish-list/',
    // },
  },
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/apollo",
    // "@nuxtjs/pwa"
  ],
  apollo: {
    authenticationType: 'Basic', // optional, default: 'Bearer'
    // (Optional) Default 'apollo' definition
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    // optional
    // errorHandler: '~/plugins/apollo-error-handler.js',
    // required
    clientConfigs: {
      default: {
        // required  
        httpEndpoint: 'api.studioalloy.nl/graphql/',
        // optional
        // See https://www.apollographql.com/docs/link/links/http.html#options
        // httpLinkOptions: {
        //   credentials: 'same-origin'
        // },
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        // wsEndpoint: 'ws://localhost:4000', // optional
        // LocalStorage token
        tokenName: 'apollo-token', // optional
        // Enable Automatic Query persisting with Apollo Engine
        persisting: false, // Optional
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        websocketsOnly: false // Optional
      },
      // test: {
      //   httpEndpoint: 'http://localhost:5000',
      //   wsEndpoint: 'ws://localhost:5000',
      //   tokenName: 'apollo-token'
      // },
      // alternative: user path to config which returns exact same config options
      // test2: '~/plugins/my-alternative-apollo-config.js'
    }
  },
  manifest: {
    name: "studioalloy | Mitchel van Eijgen <mvaneijgen@gmail.com>",
    short_name: "studioalloy",
    lang: "en",
    icons: [
      {
        src: "android-chrome-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    theme_color: "#0ba",
    background_color: "#0ba",
    display: "standalone",
  },
  // workbox: {
  //   runtimeCaching: [
  //     {
  //       // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
  //       urlPattern: "https://mvaneijgen.nl/wish-list/.*",
  //       // Defaults to `networkFirst` if omitted
  //       handler: "cacheFirst",
  //       // Defaults to `GET` if omitted
  //       method: "GET",
  //     },
  //     {
  //       // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
  //       urlPattern: "https://i.imgur.com/.*",
  //       // Defaults to `networkFirst` if omitted
  //       handler: "cacheFirst",
  //       // Defaults to `GET` if omitted
  //       method: "GET",
  //     },
  //   ],
  // },
  axios: {
    // proxyHeaders: false
  },
  ...routerBase,
  css: ["@/assets/css/main.scss"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#0ba" },
  /*
  ** Build configuration
  */
  build: {
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
