<template>
  <div id="alloy-slide-nav" :data-navigation-toggle="getNavigationToggle">
    <div class="inner">
      <nav>
        <ul>
          <li v-for="item in menu" :key="item.node.id" @click="updateNavigationToggle">
            <nuxt-link :to="item.node.url">{{item.node.label}}</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="alloy-cards contact-info">
        <div class="inner">
          <h4>Studio Alloy</h4>
          <ul>
            <li><a href="mailto:hello@studioalloy.nl">hello@studioalloy.nl</a></li>
            <li><a href="tel:+31233020044">023 30 20 044</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu from "~/apollo/queries/menu";

import CallToAction from "@/components/elements/CallToAction.vue";

export default {
  // props: ['item'],
  name: "SlideNav",
  components: {
    CallToAction,
  },
  data() {
    return {
      title: "SlideNav",
      show: false,
      menu: "",
    };
  }, // End data
  computed: {
    getNavigationToggle() {
      return this.$store.getters["ui/getNavigationToggle"];
    },
  },
  methods: {
    updateNavigationToggle() {
      this.$store.commit("ui/updateNavigationToggle");
    },
    formatLink() {},
  },
  apollo: {
    menu: {
      prefetch: true,
      query: menu,
      variables: {
        slug: "main-menu",
      },
      update(data) {
        return data.menuItems.edges;
      },
    },
  },
};
</script>