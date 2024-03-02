<template>
  <section class="flex-Toolbox" ref="trigger">
    <div class="container--medium container-type--toolbox">
      <h3 class="alloy-title alloy-title--large">onze skills</h3>
      <div class="inner">
        <template v-for="(item, index) in toolbox">
          <div class="item" :key="index">
            <ToolboxItem :item="item" :key="index" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
let ctx;
gsap.registerPlugin(ScrollTrigger,DrawSVGPlugin,MorphSVGPlugin);

import toolbox from "@/apollo/queries/toolbox";
import ToolboxItem from "@/components/elements/flex/ToolboxItem";


export default {
  props: ["item"],
  name: "FlexToolbox",
  data() {
    return {};
  }, // End data
  components: {
    ToolboxItem,
  },
  apollo: {
    toolbox: {
      prefetch: true,
      query: toolbox,
      update(data) {
        const items = data.toolbox.nodes;
        // ↩️ Return the data
        return items;
      },
    },
  },
  mounted() {
    // this.$nextTick(this.toolboxAnimation);
      ctx = gsap.context((self) => {
         //------------------------------------------------------//
      // Timeline ❇️ 🧦 GSAP
      //------------------------------------------------------//
      // Basic values
      const baseTiming = 0.3;
      const trigger = this.$refs.trigger;
      // Timeline stuff
      const tl = gsap.timeline({
                scrollTrigger: {
          trigger: trigger,
          start: 'top bottom-=10%',
          end: 'bottom top',
          scrub: false,
          toggleActions: 'play none none none',
          markers: process.env.NODE_ENV === 'development' ? true : false,
        }
      });
      tl.from(".alloy-title--large", {
          duration: baseTiming * 2,
          y: 100,
          opacity: 0,
          ease: "power2.easeOut",
        });
        tl.from(
          ".container-type--toolbox > .inner > .item",
          { 
            duration: baseTiming * 2,
            y: 100, opacity: 0,
          stagger: baseTiming / 2,
          },
          `-=${baseTiming}`,
        );
      // END Timeline ❇️ 🧦  GSAP -------------------------------------//
      }, this.$refs.trigger);
  },
  beforeDestroy() {
    ctx.revert(); // <- Easy Cleanup!
  },
  methods: {
    toolboxAnimation() {
     

    },
  },
};
</script>