<template>
  <div class="container-type--Diensten container--medium">
    <div class="inner">
      <template v-for="(item, index) in diensten">
        <DienstenItem :item="item" :key="index" />
      </template>
    </div>
  </div>
</template>

<script>
import diensten from "~/apollo/queries/diensten";
import DienstenItem from "@/components/elements/flex/DienstenItem.vue";

export default {
  name: "Diensten",
  data() {
    return {
      slug: this.$route.path,
    };
  },
  components: {
    DienstenItem,
  },
  apollo: {
    diensten: {
      prefetch: true,
      query: diensten,
      update(data) {
        const items = data.diensten.nodes;
        const slug = this.slug;
        const itemsFeatured = items.filter(function(item) {
          return (
            item.acfDiensten.featured &&
            item.slug != slug.replace("/project/", "")
          );
        });

        return itemsFeatured;
      },
    },
  },
  mounted() {
    // this.$nextTick(this.animationDiensten);
    // console.warn(this.slug);
  },
  destroyed() {
    // controller = controller.destroy();
  },
  methods: {
    animationDiensten() {
      // //------------------------------------------------------//
      // // Timeline ❇️ 🧦 GSAP
      // //------------------------------------------------------//
      // // Basic values
      // const baseTiming = 0.3;
      // // Timeline stuff
      // const timelineDiensten = new this.$gsap.timeline();
      // timelineDiensten.staggerFrom(
      //   ".container-type--Diensten > .inner > *",
      //   baseTiming * 2,
      //   {
      //     y: 100,
      //     opacity: 0,
      //   },
      //   baseTiming,
      // );
      // // END Timeline ❇️ 🧦  GSAP -------------------------------------//
    },
  },
};
</script>