<template>
  <main>
    <div class="container--small">
      <div class="inner">
        <h1>{{dienstBySlug.title}}</h1>
        <div class="alloy-intro" v-html="dienstBySlug.content"></div>
        <pre>{{dienstBySlug}}</pre>
      </div>
    </div>

    <div class="alloy-illustration col-60">
      <component :is="componentSVG"></component>
    </div>
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
      prefetch: true,
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
