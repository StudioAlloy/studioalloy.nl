<template>
  <section>
    <div class="container-type--DienstenOther container--medium" ref="trigger">
      <div class="inner">
        <template v-for="(item, index) in diensten">
          <DienstenOtherItem :item="item" :key="index" />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import diensten from "~/apollo/queries/diensten";
import DienstenOtherItem from "@/components/elements/flex/DienstenOtherItem.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(ScrollTrigger,DrawSVGPlugin,MorphSVGPlugin);

export default {
  name: "DienstenOther",
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
    // controller = controller.destroy();
  },
  methods: {
    animationDiensten() {
      //------------------------------------------------------//
      // Timeline ❇️ 🧦 GSAP
      //------------------------------------------------------//
      // Basic values
      const baseTiming = 0.3;
const trigger = this.$refs.trigger;
      // Timeline stuff
      const timelineDiensten = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: 'top bottom-=10%',
          end: 'bottom top',
          scrub: false,
          toggleActions: 'play pause play pause',
          markers: process.env.NODE_ENV === 'development' ? true : false,
        }
      });

      timelineDiensten.staggerFrom(
        ".container-type--DienstenOther > .inner > *",
        baseTiming * 2,
        {
          y: 100,
          opacity: 0,
        },
        baseTiming / 2,
      );
      // END Timeline ❇️ 🧦  GSAP -------------------------------------//
    },
  },
};
</script>