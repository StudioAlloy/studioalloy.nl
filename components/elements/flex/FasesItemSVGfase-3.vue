<template>
  <svg id="faseThree" @click="interactiveTimeline" :class="{ notPlayed: notPlayed }" width="100%" height="100%" viewBox="0 0 650 700" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="fasePrev">
      <g id="base">
        <path d="M325.626,388L103.923,516L325.626,644L547.328,516L325.626,388Z" style="fill:#1d2e55;" />
        <path d="M325.626,644L103.923,516L103.923,521.333L325.626,649.333L325.626,644Z" style="fill:#2f4876;" />
        <path d="M547.328,516L325.626,644L325.626,649.333L547.328,521.333L547.328,516Z" style="fill:#122240;" />
      </g>
      <g id="box">
        <path d="M325.626,420L173.205,508L325.626,596L478.046,508L325.626,420Z" style="fill:#183263;" />
        <path d="M325.626,596L173.205,508L173.205,516L325.626,604L325.626,596Z" style="fill:#36558d;" />
        <path d="M478.046,508L325.626,596L325.626,604L478.046,516L478.046,508Z" style="fill:#172c57;" />
      </g>
      <g id="modules">
        <path id="shadow" d="M339.5,449.024C331.919,444.647 320.434,444.171 313.869,447.961L224.499,499.559C217.934,503.349 218.758,509.98 226.339,514.357L311.89,563.75C319.471,568.127 330.956,568.603 337.521,564.812L426.891,513.215C433.456,509.424 432.631,502.793 425.05,498.416L339.5,449.024Z" style="fill:#172c57;" />
        <g id="combined">
          <g id="bottom">
            <path d="M431.285,435.064L219.844,433.91C219.844,433.91 219.328,471.394 219.715,472.722C220.402,475.082 222.441,477.44 225.776,479.365L311.812,529.038C319.436,533.44 330.966,533.93 337.543,530.133L426.937,478.521C430.199,476.638 431.635,474.051 431.322,471.384C431.177,470.146 431.285,435.064 431.285,435.064Z" style="fill:#223e74;" />
            <g>
              <path d="M257.498,477.013C257.498,476.645 257.274,476.217 256.998,476.058L232.595,461.969C232.319,461.809 232.095,461.979 232.095,462.347L232.095,463.68C232.095,464.048 232.319,464.476 232.595,464.635L256.998,478.725C257.274,478.884 257.498,478.715 257.498,478.347L257.498,477.013Z" style="fill:#142546;" />
              <path d="M257.498,482.347C257.498,481.979 257.274,481.551 256.998,481.391L232.595,467.302C232.319,467.143 232.095,467.312 232.095,467.68L232.095,469.013C232.095,469.381 232.319,469.809 232.595,469.969L256.998,484.058C257.274,484.217 257.498,484.048 257.498,483.68L257.498,482.347Z" style="fill:#142546;" />
              <path d="M257.498,487.68C257.498,487.312 257.274,486.884 256.998,486.725L232.595,472.635C232.319,472.476 232.095,472.645 232.095,473.013L232.095,474.347C232.095,474.715 232.319,475.143 232.595,475.302L256.998,489.391C257.274,489.551 257.498,489.381 257.498,489.013L257.498,487.68Z" style="fill:#142546;" />
            </g>
            <path d="M339.205,376.853C331.71,372.526 320.356,372.056 313.866,375.803L224.225,427.557C217.734,431.304 218.55,437.86 226.044,442.187L312.046,491.84C319.541,496.167 330.895,496.638 337.386,492.89L427.026,441.136C433.517,437.389 432.702,430.834 425.207,426.507L339.205,376.853Z" style="fill:#172c57;" />
          </g>
          <g id="middle">
            <path d="M431.285,381.731L219.844,380.577C219.844,380.577 219.328,418.06 219.715,419.388C220.402,421.749 222.441,424.106 225.776,426.032L311.812,475.705C319.436,480.106 330.966,480.597 337.543,476.8L426.937,425.188C430.199,423.304 431.635,420.717 431.322,418.051C431.177,416.812 431.285,381.731 431.285,381.731Z" style="fill:#223e74;" />
            <path d="M339.205,323.52C331.71,319.193 320.356,318.722 313.866,322.47L224.225,374.224C217.734,377.971 218.55,384.526 226.044,388.853L312.046,438.507C319.541,442.834 330.895,443.304 337.386,439.557L427.026,387.803C433.517,384.056 432.702,377.5 425.207,373.173L339.205,323.52Z" style="fill:#172c57;" />
          </g>
          <g id="top">
            <path d="M431.285,328.717L219.844,327.564C219.844,327.564 219.328,365.047 219.715,366.375C220.402,368.736 222.441,371.093 225.776,373.019L311.812,422.691C319.436,427.093 330.966,427.584 337.543,423.786L426.937,372.175C430.199,370.291 431.635,367.704 431.322,365.038C431.177,363.799 431.285,328.717 431.285,328.717Z" style="fill:#223e74;" />
            <path d="M339.205,270.507C331.71,266.18 320.356,265.709 313.866,269.456L224.225,321.21C217.734,324.958 218.55,331.513 226.044,335.84L312.046,385.493C319.541,389.82 330.895,390.291 337.386,386.544L427.026,334.79C433.517,331.042 432.702,324.487 425.207,320.16L339.205,270.507Z" style="fill:#36558d;" />
            <g id="lidPrev">
              <path d="M336.921,282.842C330.687,279.242 321.242,278.851 315.843,281.968L241.277,325.019C235.878,328.136 236.556,333.589 242.79,337.188L314.33,378.492C320.564,382.091 330.009,382.483 335.408,379.365L409.974,336.315C415.373,333.197 414.695,327.744 408.461,324.145L336.921,282.842Z" style="fill:#172c57;" />
              <path d="M336.921,280.175C330.687,276.576 321.242,276.184 315.843,279.301L241.277,322.352C235.878,325.469 236.556,330.922 242.79,334.522L314.33,375.825C320.564,379.424 330.009,379.816 335.408,376.699L409.974,333.648C415.373,330.531 414.695,325.078 408.461,321.478L336.921,280.175Z" style="fill:#223e74;" />
            </g>
          </g>
        </g>
      </g>
    </g>
    <g id="fase">
      <g id="base1" serif:id="base">
        <path d="M325.626,644L103.923,516L103.923,521.333L325.626,649.333L325.626,644Z" style="fill:#2f4876;" />
        <path d="M547.328,516L325.626,644L325.626,649.333L547.328,521.333L547.328,516Z" style="fill:#122240;" />
        <path d="M325.626,388L103.923,516L325.626,644L547.328,516L325.626,388Z" style="fill:#1d2e55;" />
      </g>
      <g id="platfrom">
        <g>
          <path d="M325.626,420L173.205,508L325.626,596L478.046,508L325.626,420Z" style="fill:#183263;" />
          <path d="M325.626,596L173.205,508L173.205,516L325.626,604L325.626,596Z" style="fill:#36558d;" />
          <path d="M478.046,508L325.626,596L325.626,604L478.046,516L478.046,508Z" style="fill:#132b58;" />
        </g>
      </g>
      <g id="oven">
        <g id="box1" serif:id="box">
          <path d="M431.407,506.765L431.398,506.765C431.54,509.269 430.105,511.679 427.026,513.456L337.386,565.21C330.895,568.958 319.541,568.487 312.046,564.16L226.044,514.507C222.198,512.286 220.111,509.479 219.868,506.765L219.844,506.765L219.844,394.667L431.407,394.667L431.407,506.765Z" style="fill:#223e74;" />
          <path d="M339.205,337.173C331.71,332.846 320.356,332.376 313.866,336.123L224.225,387.877C217.734,391.624 218.55,398.18 226.044,402.507L312.046,452.16C319.541,456.487 330.895,456.958 337.386,453.21L427.026,401.456C433.517,397.709 432.702,391.154 425.207,386.827L339.205,337.173Z" style="fill:#36558d;" />
          <path d="M336.921,346.842C330.687,343.242 321.242,342.851 315.843,345.968L241.277,389.019C235.878,392.136 236.556,397.589 242.79,401.188L314.33,442.492C320.564,446.091 330.009,446.483 335.408,443.365L409.974,400.315C415.373,397.197 414.695,391.744 408.461,388.145L336.921,346.842Z" style="fill:#183263;" />
          <g>
            <path d="M257.498,511.438C257.498,511.071 257.274,510.642 256.998,510.483L232.595,496.394C232.319,496.235 232.095,496.404 232.095,496.772L232.095,498.105C232.095,498.473 232.319,498.901 232.595,499.06L256.998,513.15C257.274,513.309 257.498,513.14 257.498,512.772L257.498,511.438Z" style="fill:#122240;fill-opacity:0.6;" />
            <path d="M257.498,516.772C257.498,516.404 257.274,515.976 256.998,515.816L232.595,501.727C232.319,501.568 232.095,501.737 232.095,502.105L232.095,503.438C232.095,503.806 232.319,504.235 232.595,504.394L256.998,518.483C257.274,518.642 257.498,518.473 257.498,518.105L257.498,516.772Z" style="fill:#122240;fill-opacity:0.6;" />
            <path d="M257.498,522.105C257.498,521.737 257.274,521.309 256.998,521.15L232.595,507.06C232.319,506.901 232.095,507.071 232.095,507.438L232.095,508.772C232.095,509.14 232.319,509.568 232.595,509.727L256.998,523.816C257.274,523.976 257.498,523.806 257.498,523.438L257.498,522.105Z" style="fill:#122240;fill-opacity:0.6;" />
          </g>
        </g>
        <g id="hot">
          <path d="M334.217,358.293C329.475,355.556 322.292,355.258 318.186,357.629L261.474,390.371C257.368,392.742 257.884,396.889 262.625,399.627L317.035,431.04C321.776,433.777 328.959,434.075 333.066,431.705L389.777,398.962C393.883,396.591 393.367,392.444 388.626,389.707L334.217,358.293Z" style="fill:#f62900;" />
          <path d="M385.67,401.333L332.831,370.827C328.854,368.531 322.83,368.281 319.386,370.269L265.581,401.333L318.42,431.84C322.397,434.136 328.422,434.386 331.866,432.397L385.67,401.333" style="fill:#f53;" />
          <path id="fade" d="M392.549,394.74L392.543,394.74C392.629,396.32 391.72,397.84 389.777,398.962L333.066,431.705C328.959,434.075 321.776,433.777 317.035,431.04L262.625,399.627C260.197,398.225 258.877,396.453 258.719,394.74L258.702,394.74L258.702,243.337L392.549,243.337L392.549,394.74Z" style="fill:url(#_Linear1);" />
          <g id="bubbles">
            <circle cx="357.937" cy="402.547" r="2.442" style="fill:#f53;" />
            <circle cx="324.216" cy="397.007" r="7.981" style="fill:#f53;" />
            <circle cx="285.268" cy="402.547" r="2.442" style="fill:#f53;" />
            <circle cx="322.117" cy="402.547" r="2.442" style="fill:#f53;" />
            <circle cx="336.949" cy="402.547" r="2.442" style="fill:#f53;" />
            <circle cx="326.47" cy="399.85" r="5.138" style="fill:#f53;" />
            <circle cx="296.593" cy="397.007" r="7.981" style="fill:#f53;" />
            <circle cx="345.072" cy="399.85" r="5.138" style="fill:#f53;" />
          </g>
        </g>
        <g id="side">
          <path d="M411.073,446.72C411.073,443.011 408.815,441.304 406.033,442.91L367.616,465.09C364.834,466.696 362.576,471.011 362.576,474.72L362.576,517.28C362.576,520.989 364.834,522.696 367.616,521.09L406.033,498.91C408.815,497.304 411.073,492.989 411.073,489.28L411.073,446.72Z" style="fill:#36558d;fill-opacity:0.6;" />
          <path id="slide" d="M415.544,449.301C415.544,445.592 413.286,443.885 410.504,445.491L372.087,467.671C369.305,469.277 367.047,473.592 367.047,477.301L367.047,519.861C367.047,523.57 369.305,525.277 372.087,523.671L410.504,501.491C413.286,499.885 415.544,495.57 415.544,491.861L415.544,449.301Z" style="fill:#183263;" />
        </g>
        <g id="lid">
          <path d="M336.921,347.035C330.687,343.436 321.242,343.045 315.843,346.162L241.277,389.213C235.878,392.33 236.556,397.783 242.79,401.382L314.33,442.686C320.564,446.285 330.009,446.676 335.408,443.559L409.974,400.508C415.373,397.391 414.695,391.938 408.461,388.339L336.921,347.035Z" style="fill:#172c57;" />
          <path d="M336.921,344.369C330.687,340.769 321.242,340.378 315.843,343.495L241.277,386.546C235.878,389.663 236.556,395.116 242.79,398.715L314.33,440.019C320.564,443.618 330.009,444.01 335.408,440.893L409.974,397.842C415.373,394.725 414.695,389.272 408.461,385.672L336.921,344.369Z" style="fill:#223e74;" />
        </g>
      </g>
    </g>
    <defs>
      <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(7.92254e-15,-129.385,129.385,7.92254e-15,325.489,408.619)">
        <stop offset="0" style="stop-color:#f53;stop-opacity:1" />
        <stop offset="0.19" style="stop-color:#f53;stop-opacity:0.58" />
        <stop offset="0.4" style="stop-color:#f53;stop-opacity:0.17" />
        <stop offset="1" style="stop-color:#f53;stop-opacity:0" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(ScrollTrigger,DrawSVGPlugin,MorphSVGPlugin);



export default {
  name: "FasesItemSVG",
  data() {
    return {
      fase: "faseThree",
      faseWatching: "faseTwo",
      notPlayed: true,
    };
  }, // End data
  computed: {
    getFasePlayed() {
      // This is going to change as soon as fase one is dont playing
      return this.$store.getters["items/getFasePlayed"](this.faseWatching);
    },
  },
  mounted() {
    this.timelineFaseThree = gsap.timeline({});
  },
  watch: {
    getFasePlayed(values) {
      this.notPlayed = false;
      this.timelineStart();
    },
  },
  methods: {
    timelineStart() {
      // Basic values
      const baseTiming = 0.3;
      const timelineComplete = () => {
        // 🎬 Start playing the looping part of the animation
        this.timelineFaseThree.add(nestedTimelineFaseThreeSlowMove());
        this.timelineFaseThree.add(nestedTimelineBubbles());

        // Tell the 🛍 store that this fase has finished playing
        this.$store.commit({
          type: "items/setFasePlayed",
          fase: this.fase,
          date: new Date(),
        });
      };
      this.timelineFaseThree.play().timeScale(1.5);
      this.timelineFaseThree
        // .from("#faseThree", baseTiming, { opacity: 0 })
        // .set("#faseThree #oven #fade", { autoAlpha: 0 })
        .to("#faseThree #modules #bottom", baseTiming * 4, { y: -16.5 })
        .to(
          "#faseThree #modules #top",
          baseTiming * 5,
          { y: 16 },
          `-=${baseTiming * 2}`,
        )
        .to(
          "#faseThree #combined",
          baseTiming * 8,
          { y: 51 },
          `+=${baseTiming * 3}`,
        )
        .to(
          "#faseThree #combined",
          baseTiming * 8,
          { y: 51 },
          `+=${baseTiming * 3}`,
        )
        .to(
          "#faseThree #combined",
          baseTiming * 8,
          { y: 51 },
          `+=${baseTiming}`,
        )
        .to("#faseThree #modules", baseTiming, { opacity: 0 }, "sameTime")
        .from("#faseThree #oven", baseTiming, { opacity: 0 }, "sameTime")
        .to(
          "#faseThree #oven #lid",
          baseTiming * 2,
          { y: -200, opacity: 0 },
          `-=${baseTiming}`,
        )
        .staggerTo(
          "#faseThree #oven #bubbles *",
          baseTiming * 4,
          {
            y: -150,
            opacity: 0,
            // ease: Power2.easeOut,
            stagger: {
              grid: [15, 9],
              each: baseTiming,
            },
          },
          "sameTime",
        )
        .set("#faseThree #oven #bubbles *", { clearProps: "y, opacity" })
        .from(
          "#faseThree #oven #side #slide",
          baseTiming * 2,
          { x: -4, y: -3 },
          "sameTime",
        )
        .add(timelineComplete);
      //------------------------------------------------------//
      // ➰ Looping timeline ️❇️️ 🧦  GSAP
      //------------------------------------------------------//
      function nestedTimelineFaseThreeSlowMove(elm) {
        const tl = gsap.timeline({
          repeat: -1,
        });
        tl.to(
          "#faseThree #oven #fade",
          baseTiming * 8,
          { autoAlpha: 1, repeat: 1, yoyo: true, ease: "none" },
          0,
        );
        return tl;
      }
      function nestedTimelineBubbles(elm) {
        const tl = gsap.timeline({
          repeat: -1,
        });
        tl.staggerTo("#faseThree #oven #bubbles *", baseTiming * 16, {
          y: -150,
          opacity: 0,
          ease: "power2.easeOut",
          stagger: {
            grid: [15, 9],
            each: baseTiming * 3,
          },
        });
        return tl;
      }
      // END ➰ Looping timeline ️❇️️ 🧦  GSAP -------------------------------------//
    },
    interactiveTimeline() {
      const baseTiming = 0.3;
      this.timelineFaseThree.pause();
      const resume = () => {
        this.timelineFaseThree.resume();
      };
      const interactivetl = gsap.timeline({});
      interactivetl
        .to("#faseThree #oven #bubbles *", baseTiming, { opacity: 0 })
        .fromTo(
          "#faseThree #oven",
          baseTiming * 6,
          {
            x: -3,
          },
          { x: 0, ease: "elastic.out(1, 0.1)" },
          "sameTime",
        )
        .set("#faseThree #oven #bubbles *", { clearProps: "y, opacity" })
        .staggerTo(
          "#faseThree #oven #bubbles *",
          baseTiming,
          {
            y: -150,
            opacity: 0,
            // ease: Power2.easeOut,
            stagger: {
              grid: [15, 9],
              each: 0.1,
            },
          },
          "sameTime",
        )
        // .set("#faseThree #oven #bubbles *", { clearProps: "y, opacity" })
        .add(resume);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
svg {
  #fase {
    #base1,
    #platfrom {
      opacity: 0;
    }
  }
}
svg.notPlayed {
  #fase {
    opacity: 0;
  }
  #fasePrev {
    opacity: 1;
    * {
      opacity: 1;
      stroke: $brand-three;
      stroke-width: 1px;
      fill: $brand-dark-lighten !important;
    }
  }
}
</style>