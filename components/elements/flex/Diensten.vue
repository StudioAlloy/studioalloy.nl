<template>
  <div class="elements-Diensten container--medium">
    <div class="inner">
      <template v-for="(item, index) in diensten.nodes">
        <DienstenItem :item="item" :key="index" />
      </template>
    </div>
  </div>
</template>

<script>
import diensten from "~/apollo/queries/diensten";
import DienstenItem from "@/components/elements/flex/DienstenItem.vue";

export default {
  name: "Diensten",
  data() {
    return {
      title: "Diensten",
    };
  }, // End data
  components: {
    DienstenItem,
  },
  apollo: {
    diensten: {
      prefetch: true,
      query: diensten,
      // update(data) {
      //   console.log(data);
      //   // The returned value will update
      //   // the vue property 'pingMessage'
      //   return data.diensten;
      // },
    },
  },
};
</script>

<style lang="scss" scoped>
// @import '~/assets/css/common/_variables.scss';
</style>