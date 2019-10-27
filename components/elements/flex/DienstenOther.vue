<template>
  <div class="container-type--DienstenOther container--medium">
    <div class="inner">
      <template v-for="(item, index) in diensten">
        <DienstenOtherItem :item="item" :key="index" />
      </template>
    </div>
  </div>
</template>

<script>
import diensten from "~/apollo/queries/diensten";
import DienstenOtherItem from "@/components/elements/flex/DienstenOtherItem.vue";

export default {
  name: "Diensten",
  data() {
    return {
      title: "Diensten",
    };
  }, // End data
  components: {
    DienstenOtherItem,
  },
  apollo: {
    diensten: {
      prefetch: true,
      query: diensten,
      update(data) {
        const items = data.diensten.nodes;

        const itemsFeatured = items.filter(function(item) {
          return !item.acfDiensten.featured;
        });

        return itemsFeatured;
      },
    },
  },
  mounted() {
    this.$nextTick(this.animationDiensten);
  },
  destroyed() {
    // Destroy ScrollMagic when our component is removed from DOM
    // controller = controller.destroy();
  },
  methods: {
    animationDiensten() {
      //------------------------------------------------------//
      // Timeline ❇️ 🧦 GSAP
      //------------------------------------------------------//
      // Basic values
      const baseTiming = 0.3;

      // Timeline stuff
      const timelineDiensten = new this.$GSAP.TimelineMax();

      timelineDiensten.staggerFrom(
        ".container-type--DienstenOther > .inner > *",
        baseTiming * 2,
        {
          y: 100,
          opacity: 0,
        },
        baseTiming,
      );
      // END Timeline ❇️ 🧦  GSAP -------------------------------------//
      //------------------------------------------------------//
      // 🎩 ScrollMagic scene
      //------------------------------------------------------//
      const controller = new this.$ScrollMagic.Controller();
      const scene = new this.$ScrollMagic.Scene({
        triggerElement: ".container-type--DienstenOther",
        reverse: false,
      })
        .setTween(timelineDiensten)
        .addTo(controller);
      // ENDcontrollerMagic scene -------------------------------------//
    },
  },
};
</script>