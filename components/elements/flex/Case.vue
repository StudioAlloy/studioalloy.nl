<template>
  <section class="flex-Case section-large" ref="trigger">
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
let ctx;
gsap.registerPlugin(ScrollTrigger,DrawSVGPlugin,MorphSVGPlugin);

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
    beforeDestroy() {
    ctx.revert(); // <- Easy Cleanup!
  },
  mounted() {
    // this.$nextTick(this.scrollAnimation);
    ctx = gsap.context((self) => {
        //------------------------------------------------------//
      // Timeline ❇️ 🧦 GSAP
      //------------------------------------------------------//
      const trigger = this.$refs.trigger;
      const q = gsap.utils.selector(trigger);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: 'top bottom-=10%',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'restart none none none',
          markers: process.env.NODE_ENV === 'development' ? true : false,
        }
      });
      
      timeline
        .to(q('.overlay'), 1, { scaleX: 0 }, "sameTime")
        .from(q('.alloy-cards'), 2, { y: () => window.innerHeight * 0.25 }, "sameTime");
      // .fromTo(content, 2, { y: 200 }, { y: -200 }, "sameTime");
      // END Timeline ❇️ 🧦  GSAP -------------------------------------//
      }, this.$refs.trigger)
  },
  methods: {
    scrollAnimation() {
      
    },
  },
};
</script>