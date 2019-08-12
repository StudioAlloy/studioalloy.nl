<template>
  <div class="elements-CallToAction" :data-navigation-toggle="getNavigationToggle">
    <div class="alloy-slide-nav">
      <div class="inner">
        <button @click="updateNavigationToggle">Close</button>
        <nav>
          <ul>
            <li v-for="item in menu" :key="item.node.id">
              <nuxt-link :to="item.node.url">{{item.node.label}}</nuxt-link>
            </li>
          </ul>
        </nav>
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