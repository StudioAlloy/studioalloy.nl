<template>
  <div class="elements-Diensten container--medium">
    <div class="inner">
      <template v-for="(item, index) in diensten">
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
      update(data) {
        const items = data.diensten.nodes;

        const itemsFeatured = items.filter(function(item) {
          return item.acfDiensten.featured;
        });

        return itemsFeatured;
      },
    },
  },
};
</script>