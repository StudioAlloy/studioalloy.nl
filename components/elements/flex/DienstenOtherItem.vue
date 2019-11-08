<template>
  <div class="item">
    <div class="alloy-cards alloy-item alloy-item--diensten-other">
      <div class="inner">
        <h4 class="alloy-title col-40">
          <nuxt-link :to="`/project/${item.slug}`"><span v-html="item.title"></span></nuxt-link>
        </h4>
        <span v-html="item.excerpt"></span>
        <nuxt-link :to="`/project/${item.slug}`" class="btn">Lees meer</nuxt-link>
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