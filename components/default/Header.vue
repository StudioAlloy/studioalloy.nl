<template>
  <div id="default-Header" class="container--medium">
    <HeaderBackground />

    <div class="inner container-col">

      <div class="intro col-60">
        <h1 class="alloy-title" v-html="homeContent.content"></h1>
      </div>

      <div class="col-40">comonent animation at hover</div>

    </div>

  </div>
</template>

<script>
import pageByUri from "~/apollo/queries/pageByUri";
import pages from "~/apollo/queries/pages";
import HeaderBackground from "@/components/default/HeaderBackground.vue";

export default {
  // props: ['item'],
  name: "Header",
  data() {
    return {};
  },
  components: {
    HeaderBackground,
  },
  apollo: {
    homeContent: {
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
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.intro {
  padding-top: $base-margin * 2;
  @include media-breakpoint-up(lg) {
    padding-top: $base-margin * 6;
  }
  // font-size: 30px;
  // line-height: 1.4em;
}
</style>
