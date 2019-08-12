<template>
  <div class="elements-DienstenItemSVG">
    <h1>Icon {{slug}}</h1>
  </div>
</template>

<script>
export default {
  props: ["slug"],
  name: "DienstenItemSVG",
  data() {
    return {
      title: "DienstenItemSVG",
    };
  }, // End data
};
</script>

<style lang="scss" scoped>
// @import '~/assets/css/common/_variables.scss';
</style>