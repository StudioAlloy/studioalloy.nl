<template>
  <section class="flex-Case" ref="trigger">
    <div class="container--large">
      <div class="inner">

        <div class="container-type--Case" :data-order="item.order">

          <div class="alloy-cards">
            <div class="inner">
              <div v-html="item.content"></div>
            </div>
          </div>
          <div class="image-container">
            <div class="alloy-image">
              <img :src="item.image.sourceUrl" sizes="(min-width: 1200px) 1000px,
       (min-width: 768px) 300px,
       (min-width: 576px) 200px,
       100vw" :srcset="responsiveImage" :alt="`Profile ${item.title}`" />
            </div>
            <div class="overlay"></div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["item"],
  name: "FlexCase",
  data() {
    return {};
  }, // End data
  computed: {
    responsiveImage() {
      const rawImages = this.item.image.mediaDetails.sizes;
      // Turn the list of 🌅 images in a line that looks like this
      // ${image url} ${image size}w,
      // ${image url} ${image size}w,
      // ${image url} ${image size}w
      const mapImages = rawImages.map(
        image => `${image.sourceUrl} ${image.width}w`,
      );
      const images = mapImages;
      return images;
    },
  },
  mounted() {
    this.$nextTick(this.scrollAnimation);
  },
  methods: {
    scrollAnimation() {
      //------------------------------------------------------//
      // Timeline ❇️ 🧦 GSAP
      //------------------------------------------------------//
      // Basic values
      const baseTiming = 0.3;
      // Timeline stuff
      const timeline = new this.$GSAP.TimelineMax();
      const trigger = this.$refs.trigger;
      const overlay = this.$refs.trigger.querySelector(".overlay");
      const content = this.$refs.trigger.querySelector(".alloy-cards");
      timeline
        .to(overlay, 1, { scaleX: 0 }, "sameTime")
        .from(content, 2, { y: 500 }, "sameTime");
      // .fromTo(content, 2, { y: 200 }, { y: -200 }, "sameTime");
      // END Timeline ❇️ 🧦  GSAP -------------------------------------//
      //------------------------------------------------------//
      // 🎩 ScrollMagic scene
      //------------------------------------------------------//
      const controller = new this.$ScrollMagic.Controller();
      const scene = new this.$ScrollMagic.Scene({
        triggerElement: trigger,
        tweenChanges: true,
        duration: 500,
        // offset: 400,
        // reverse: false,
      })
        .setTween(timeline)
        .addTo(controller);
      // END 🎩 ScrollMagic scene -------------------------------------//
    },
  },
};
</script>