<template>
  <main id="single-dienst">
    <div class="content-container--small flex-Content">
      <div class="inner">
        <h1>{{dienstBySlug.title}}</h1>
        <div class="alloy-intro" v-html="dienstBySlug.content"></div>
      </div>
    </div>
    <div class="container--small">
      <div class="background-clipped"></div>
      <div class="inner">
        <div class="alloy-illustration">
          <component :is="componentSVG"></component>
        </div>
      </div>
    </div>
    <div class="container--small background--light flex-Content alloy-intro-light">
      <div class="inner">
        <div v-html="dienstBySlug.acfDiensten.whiteContent"></div>
      </div>
    </div>

    <template v-for="(item, index) in dienstBySlug.acfFlex.flex">
      <FlexLoader :item="item" :key="index" />
    </template>

  </main>
</template>

<script>
import dienstBySlug from "~/apollo/queries/dienstBySlug";

// Compontents
import Header from "@/components/default/Header.vue";
import FlexLoader from "@/components/elements/flex/_FlexLoader.vue";

export default {
  data() {
    return {
      slug: this.$route.params.dienstBySlug,
    };
  },
  components: {
    Header,
    FlexLoader,
  },
  apollo: {
    dienstBySlug: {
      // prefetch: true,
      query: dienstBySlug,
      variables() {
        return {
          uri: this.slug,
        };
      },
      update(data) {
        // ↩️ Return the data
        return data.dienstBy;
      },
    },
  },
  computed: {
    componentSVG() {
      const name = this.dienstBySlug.acfDiensten.illustrationName;
      return () => import(`@/components/elements/flex/DienstenItemSVG${name}`);
    },
  },
};
</script>
