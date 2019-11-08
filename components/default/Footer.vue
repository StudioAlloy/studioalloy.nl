<template>
  <footer>
    <nav id="alloy-nav--footer">
      <ul>
        <li>
          <nuxt-link to="/" class="alloy-logo">
            <img src="~/assets/images/logo-studio-alloy.svg" alt="Logo Studio Alloy">
            <span>Studio Alloy</span>
          </nuxt-link>
        </li>
        <li><a href="mailto:hello@studioalloy.nl">hello@studioalloy.nl</a></li>
        <li><a href="tel:+31233020044">023 30 20 044</a></li>
      </ul>
    </nav>

    <nav class="alloy-nav--privacy">
      <ul>
        <!-- <li>
          <a href="https://wp-studio-alloy-api.s3.eu-central-1.amazonaws.com/2019/10/Algemene-Voorwaarden-Studio-Alloy.pdf" target="_blank">Algemene voorwaarden</a>
        </li> -->
        <li v-for="(item, index) in menuByLocation" :key="index">
          <nuxt-link :to="item.node.url">{{item.node.label}}</nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
import menuByLocation from "@/apollo/queries/menuByLocation";
export default {
  // props: ['item'],
  name: "Footer",
  data() {
    return {};
  }, // End data
  apollo: {
    menuByLocation: {
      prefetch: true,
      query: menuByLocation,
      update(data) {
        const items = data.menuItems.edges;
        return items;
      },
      // variables: {
      //   location: PRIVACY_FOOTER,
      // },
    },
  },
};
</script>
<style lang="scss" scoped>
.alloy-logo {
  span {
    font-size: 18px;
  }
}
* {
  font-size: 16px;
}
</style>