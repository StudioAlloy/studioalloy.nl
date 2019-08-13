<template>
  <div class="flex-Fases container--large">
    <div class="inner">
      <template v-for="(item, index) in fases">
        <FasesItem :item="item" :key="index" />
      </template>

    </div>
  </div>
</template>

<script>
import fases from "~/apollo/queries/fases";
import FasesItem from "@/components/elements/flex/FasesItem.vue";

export default {
  name: "Fases",
  data() {
    return {
      title: "Fases",
    };
  }, // End data
  components: {
    FasesItem,
  },
  apollo: {
    fases: {
      prefetch: true,
      query: fases,
      update(data) {
        const items = data.fases.nodes;
        return items;
      },
    },
  },
};
</script>