<template>
  <main>

    <div class="flex-Content container--small">
      <div class="inner">
        <h1>{{pageBySlug.title}}</h1>
        <div class="alloy-intro" v-html="pageBySlug.content"></div>
      </div>
    </div>

    <!-- 💪 Load the flexible blocks one by one with a middle man called the FlexLoader  -->
    <template v-for="(item, index) in pageBySlug.acfFlex.flex">
      <FlexLoader :item="item" :key="index" />
    </template>

  </main>
</template>

<script>
// import pages from "~/apollo/queries/pages";
import pageBySlug from "~/apollo/queries/pageBySlug";

// Compontents
import FlexLoader from "@/components/elements/flex/_FlexLoader.vue";

export default {
  data() {
    return {};
  },
  components: {
    FlexLoader,
  },
  // apollo: {
  //   pages: {
  //     prefetch: true,
  //     query: pages,
  //     update(data) {
  //       const items = data.pages.edges; // Format the data
  //       const currentSlug = this.$route.params.pageBySlug; // Get the slug of the current page
  //       // 🕵️‍♂Search for the page content based on slug
  //       const filteredItem = items.filter(function(item) {
  //         return item.node.slug == currentSlug;
  //       });
  //       // ↩️ Return the data
  //       return filteredItem[0].node;
  //     },
  //   },
  // },
  apollo: {
    pageBySlug: {
      prefetch: true,
      query: pageBySlug,
      variables() {
        return {
          uri: this.$route.params.pageBySlug,
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
