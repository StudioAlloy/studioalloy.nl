<template>
  <div class="item">
    <div class="alloy-cards alloy-item alloy-item--diensten-other">
      <div class="inner">
        <h4 class="alloy-title col-40" v-html="item.title"></h4>
        <span v-html="item.excerpt"></span>
        <nuxt-link :to="`/dienst/${item.slug}`" class="btn">Lees meer</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "DienstenOtherItem",
};
</script>