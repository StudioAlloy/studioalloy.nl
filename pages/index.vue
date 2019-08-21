<template>
  <main>
    <Header :item="pageBySlug" />

    <!-- 💪 Load the flexible blocks one by one with a middle man called the FlexLoader  -->
    <template v-for="(item, index) in pageBySlug.acfFlex.flex">
      <FlexLoader :item="item" :key="index" />
    </template>

  </main>
</template>

<script>
import pageBySlug from "~/apollo/queries/pageBySlug";

// Compontents
import Header from "@/components/default/Header.vue";
import FlexLoader from "@/components/elements/flex/_FlexLoader.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    FlexLoader,
  },
  apollo: {
    pageBySlug: {
      prefetch: true,
      query: pageBySlug,
      variables() {
        return {
          uri: "home",
        };
      },
      update(data) {
        // ↩️ Return the data
        return data.pageBy;
      },
    },
  },
};
</script>
