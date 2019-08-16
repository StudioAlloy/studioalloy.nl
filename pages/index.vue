<template>
  <div>
    <Header :item="pageByUri" />

    <!-- 💪 Load the flexible blocks one by one with a middle man called the FlexLoader  -->
    <template v-for="(item, index) in pageByUri.acfFlex.flex">
      <FlexLoader :item="item" :key="index" />
    </template>

  </div>
</template>

<script>
import pageByUri from "~/apollo/queries/pageByUri";

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
    pageByUri: {
      prefetch: true,
      query: pageByUri,
      variables: {
        uri: "home",
      },
      update(data) {
        return data.pageBy;
      },
    },
  },
};
</script>
