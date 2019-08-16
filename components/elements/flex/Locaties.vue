<template>
  <section class="flex-Locaties">
    <div class="container--medium container-type--locaties">
      <h3 class="alloy-title alloy-title--large">Locaties</h3>
      <div class="inner">
        <template v-for="(item, index) in locaties">
          <LocatiesItem :item="item" :key="index" />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import locaties from "@/apollo/queries/locaties";
import LocatiesItem from "@/components/elements/flex/LocatiesItem";

export default {
  props: ["item"],
  name: "FlexLocaties",
  data() {
    return {};
  }, // End data
  components: {
    LocatiesItem,
  },
  apollo: {
    locaties: {
      prefetch: true,
      query: locaties,
      update(data) {
        const items = data.locaties.nodes;

        // ↩️ Return the data
        return items;
      },
    },
  },
};
</script>