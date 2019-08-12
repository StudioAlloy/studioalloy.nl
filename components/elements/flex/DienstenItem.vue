<template>
  <div class="elements-DienstenItem alloy-cards alloy-cards--diensten">
    <div class="inner--custom">
      <span class="spacer"></span>
      <h2 class="alloy-title" v-html="item.title"></h2>
    </div>
    <div class="inner">
      <div class="alloy-content">
        <p v-html="item.excerpt"></p>
        <nuxt-link :to="item.slug" class="btn">Lees meer</nuxt-link>
      </div>
      <!-- <component :is="`DienstenItemSVG${item.slug}`" :slug="item.slug"> -->
      <!-- <DienstenItemSVG :slug="item.slug" /> -->
      <component :is="componentSVG"></component>
    </div>
  </div>
</template>

<script>
import DienstenItemSVG from "@/components/elements/flex/DienstenItemSVG.vue";

export default {
  props: ["item"],
  name: "Diensten",
  components: {
    DienstenItemSVG,
  },
  data() {
    return {
      title: "Diensten",
    };
  },
  computed: {
    componentSVG() {
      const name = this.item.slug;
      return () => import(`@/components/elements/flex/DienstenItemSVG${name}`);
    },
  },
};
</script>