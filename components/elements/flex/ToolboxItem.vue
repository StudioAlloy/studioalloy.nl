<template>
  <div class="alloy-cards alloy-cards--dark alloy-item alloy-item--toolbox">
    <div class="inner">
      <div class="alloy-image">
        <!-- <img :src="item.featuredImage.node.sourceUrl" sizes="150px" :srcset="responsiveImage" :alt="`Tool: ${item.title}`" /> -->
        <img :src="item.featuredImage.node.sourceUrl" sizes="150px" :alt="`Tool: ${item.title}`" />
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
  computed: {
    responsiveImage() {
      const rawImages = this.item.featuredImage.node.mediaDetails.sizes;
      // Turn the list of 🌅 images in a line that looks like this
      // ${image url} ${image size}w,
      // ${image url} ${image size}w,
      // ${image url} ${image size}w
      const mapImages = rawImages.map(
        image => `${image.sourceUrl} ${image.width}w`,
      );
      const images = mapImages;
      return images;
    },
  },
};
</script>