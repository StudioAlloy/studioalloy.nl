<template>
  <footer>
    <div>
      <nuxt-link to="/">
        <img src="~/assets/images/logo-studio-alloy.svg" alt="Logo Studio Alloy">
      </nuxt-link>
      <a href="mailto:contact@studioalloy.nl">contact@studioalloy.nl</a>
      <a href="tel:+31233020044">023 30 20 044</a>
    </div>

    <nav class="alloy-nav--privacy">
      <ul>
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