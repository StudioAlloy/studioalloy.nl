import Vue from 'vue'

export default ({ route }) => {
  Vue.mixin({
    head() {
      return {
        meta: [
          {
            hid: `og:url`,
            property: 'og:url',
            content: 'https://studioalloy.nl' + route.fullPath
          }
        ]
      }
    }
  })
}