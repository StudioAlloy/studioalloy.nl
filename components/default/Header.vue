<template>
  <div>
    <div id="default-Header" class="container--medium">

      <div class="inner container-col">

        <div class="intro col-60">
          <h1 class="alloy-title" v-html="introContent.content"></h1>
        </div>

        <div class="col-40">comonent animation at hover</div>

      </div>

    </div>
    <svg class="ornament" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1436 309">
      <path fill="#0C162D" fill-rule="evenodd" d="M1435.50117,0 C1165.92141,196.199093 1010.98844,298.580183 970.70228,307.143271 C893.778052,323.494021 192.588935,195.595309 122.200356,149.884431 C102.326408,136.978138 61.6455369,87.0166612 0.157743594,0 L1435.50117,0 Z" />
    </svg>
  </div>
</template>

<script>
import pageByUri from "~/apollo/queries/pageByUri";
import pages from "~/apollo/queries/pages";
// import HeaderBackground from "@/components/default/HeaderBackground.vue";

export default {
  // props: ['item'],
  name: "Header",
  data() {
    return {};
  },
  // components: {
  //   HeaderBackground,
  // },
  apollo: {
    introContent: {
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
#default-Header {
  overflow: hidden;
  background-color: $brand-dark;
}
.ornament {
  width: 100%;
}
</style>
