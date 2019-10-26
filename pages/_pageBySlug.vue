<template>
  <main>
    <div class="main-inner">
      <!-- First check if there is any 📝 data to load  -->
      <template v-if="pageBySlug">
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
      </template>
    </div>
  </main>
</template>

<script>
import pageBySlug from "~/apollo/queries/pageBySlug";

// Compontents
import FlexLoader from "@/components/elements/flex/_FlexLoader.vue";

export default {
  components: {
    FlexLoader,
  },
  head() {
    return {
      title: `${this.pageBySlug ? this.pageBySlug.title : ""} | Studio Alloy`,
      // meta: [
      //   {
      //     hid: "og:description",
      //     property: "og:description",
      //     content: "Latest tracks released",
      //   },
      // ],
    };
  },
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
