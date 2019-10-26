<template>
  <section class="flex-Toolbox">
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
    this.$nextTick(this.toolboxAnimation);
  },
  destroyed() {
    // Destroy ScrollMagic when our component is removed from DOM
    // controller = controller.destroy();
  },
  methods: {
    toolboxAnimation() {
      //------------------------------------------------------//
      // Timeline ❇️ 🧦 GSAP
      //------------------------------------------------------//
      // Basic values
      const baseTiming = 0.3;
      // Timeline stuff
      const timelineToolbox = new this.$GSAP.TimelineMax();
      timelineToolbox
        .from(".flex-Toolbox .alloy-title--large", baseTiming * 2, {
          y: 100,
          opacity: 0,
          ease: Power2.easeOut,
        })
        .staggerFrom(
          ".flex-Toolbox .container-type--toolbox > .inner > .item",
          baseTiming * 2,
          { y: 100, opacity: 0 },
          0.2,
          `-=${baseTiming}`,
        );
      // END Timeline ❇️ 🧦  GSAP -------------------------------------//
      //------------------------------------------------------//
      // 🎩 ScrollMagic scene
      //------------------------------------------------------//
      const controller = new this.$ScrollMagic.Controller();
      const scene = new this.$ScrollMagic.Scene({
        triggerElement: ".flex-Toolbox",
        reverse: false,
      })
        .setTween(timelineToolbox)
        .addTo(controller);
      // END 🎩 ScrollMagic scene -------------------------------------//
    },
  },
};
</script>