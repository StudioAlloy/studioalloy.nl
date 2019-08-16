<template>
  <div class="alloy-cards alloy-cards--dark alloy-item alloy-item--toolbox">
    <div class="inner">
      <div class="alloy-image">
        <img :src="item.featuredImage.sourceUrl" :alt="`Tool: ${item.title}`" />
      </div>
      <h4>{{ item.title }}</h4>
      <div v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "FlexToolboxItem",
  data() {
    return {};
  }, // End data
};
</script>