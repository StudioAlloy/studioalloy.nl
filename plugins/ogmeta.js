import Vue from 'vue'

export default () => {
  const archiveUrl = 'https://at-alloy.nl/2025'

  Vue.mixin({
    head() {
      return {
        meta: [
          {
            hid: `og:url`,
            property: 'og:url',
            content: archiveUrl + this.$route.fullPath
          }
        ]
      }
    }
  })
}
