<template>
  <div class="alloy-item alloy-item--team">
    <div class="inner">
      <div class="alloy-image">
        <img :src="item.featuredImage.node.sourceUrl" sizes="(min-width: 768px) 270px, 100vw" :srcset="responsiveImage" :alt="`Profile ${item.title}`" width="270px" height="270px"/>
      </div>
      <h4>{{ item.title }}</h4>
      <small v-html="item.excerpt"></small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "FlexTeam",
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