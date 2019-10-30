<template>
  <div>
    <div id="default-Header" class="container--medium">

      <div class="inner container-col">

        <div class="intro col-60">
          <!-- <h1 class="alloy-title" v-html="item.content"></h1> -->
          <h1 class="alloy-title">
            <p>
              <nuxt-link to="/"><strong>Studio Alloy</strong></nuxt-link> is een full-service bureau dat elke type organisatie of ondernemer ontzorgt op het gebied van digitale en online producten. Zoals een website, applicatie, online game, intranet, webshop, E-learning platform of web-based bestelsysteem.
            </p>
            <p>
              Wij zijn gespecialiseerd in <nuxt-link to="/dienst/websites"><strong data-type="web-design">web design</strong></nuxt-link>, <nuxt-link to="/dienst/intranet"><strong data-type="development">development</strong></nuxt-link> en <nuxt-link to="/dienst/datavisualisatie/"><strong data-type="datavisualisatie">datavisualisatie</strong></nuxt-link>. Onze kracht is het visualiseren en realiseren van digitale producten van concept tot en met feilloze uitvoering.
            </p>
          </h1>
        </div>

        <div class="col-40 alloy-illustration">
          <component :is="componentSVG"></component>
        </div>

      </div>

    </div>
    <svg class="ornament" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1436 309">
      <path fill="#0C162D" fill-rule="evenodd" d="M1435.50117,0 C1165.92141,196.199093 1010.98844,298.580183 970.70228,307.143271 C893.778052,323.494021 192.588935,195.595309 122.200356,149.884431 C102.326408,136.978138 61.6455369,87.0166612 0.157743594,0 L1435.50117,0 Z" />
    </svg>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "Header",
  data() {
    return {
      svg: "design",
    };
  },
  computed: {
    componentSVG() {
      const name = this.svg;
      return () => import(`@/components/elements/flex/HeaderItemSVG${name}`);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
#default-Header {
  padding-top: $base-margin * 4;
  @include media-breakpoint-up(lg) {
    padding-top: $base-margin * 6;
  }
}
.intro {
  .alloy-title {
    padding: $base-margin;
    font-size: 20px;
    text-align: left;
    @include media-breakpoint-up(lg) {
      font-size: 30px;
    }
    p {
      line-height: 1.5em;
    }
  }
}
#default-Header {
  overflow-x: hidden;
  background-color: $brand-dark;
}
.ornament {
  width: 100%;
}
.alloy-illustration {
  // order: -1;
  padding: $base-margin * 3;
  @include media-breakpoint-up(lg) {
    // order: 1;
    padding: 0;
  }
}
</style>
