<template>
  <div class="elements-DienstenItem alloy-cards alloy-cards--diensten">
    <div class="container-col">
      <span class="spacer col-60"></span>
      <h2 class="alloy-title col-40" v-html="item.title"></h2>
    </div>
    <div class="inner">
      <div class="container-col">
        <div class="alloy-content col-40">
          <p v-html="item.excerpt"></p>
          <div class="alloy-btn-group">
            <nuxt-link :to="item.slug" class="btn">Lees meer</nuxt-link>
          </div>
        </div>
        <div class="alloy-illustration col-60">
          <component :is="componentSVG"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "DienstenItem",
  data() {
    return {};
  },
  computed: {
    componentSVG() {
      const name = this.item.acfDiensten.illustrationName;
      return () => import(`@/components/elements/flex/DienstenItemSVG${name}`);
    },
  },
};
</script>