<template>
  <div class="elements-DienstenItem alloy-cards alloy-cards--diensten">
    <h2 class="alloy-title" v-html="item.title"></h2>
    <div class="inner">
      <p v-html="item.content"></p>
      <nuxt-link :to="item.slug" class="btn">Lees meer</nuxt-link>
      <!-- <component :is="`DienstenItemSVG${item.slug}`" :slug="item.slug"> -->
      <DienstenItemSVG :slug="item.slug" />
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
};
</script>