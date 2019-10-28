<template>
  <svg id="faseTwo" @click="interactiveTimeline" :class="{ notPlayed: notPlayed }" width="100%" height="100%" viewBox="0 0 650 700" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="prev">
      <g id="basePrev">
        <path d="M330.004,396.139L108.542,524L325.241,649.111L546.703,521.25L330.004,396.139Z" style="fill:#1d2e55;" />
        <path d="M325.626,393.333L103.923,521.333L117.779,529.333L325.626,409.333L325.626,393.333Z" style="fill:#1c2b4d;" />
        <path d="M546.703,521.25L325.626,393.333L325.626,409.25L533.089,529.112L546.703,521.25Z" style="fill:#36558d;" />
      </g>
      <g id="gridPrev">
        <path d="M136.255,518.667L133.945,520L341.41,639.78L343.72,638.447L136.255,518.667Z" style="fill:#19233b;" />
        <path d="M191.68,486.667L189.371,488L396.836,607.78L399.145,606.447L191.68,486.667Z" style="fill:#19233b;" />
        <path d="M163.967,502.667L161.658,504L369.123,623.78L371.433,622.447L163.967,502.667Z" style="fill:#19233b;" />
        <path d="M219.393,470.667L217.084,472L424.549,591.78L426.858,590.447L219.393,470.667Z" style="fill:#19233b;" />
        <path d="M247.106,454.667L244.797,456L452.262,575.78L454.571,574.447L247.106,454.667Z" style="fill:#19233b;" />
        <path d="M274.819,438.667L272.509,440L479.974,559.78L482.284,558.447L274.819,438.667Z" style="fill:#19233b;" />
        <path d="M302.532,422.667L300.222,424L507.687,543.78L509.997,542.447L302.532,422.667Z" style="fill:#19233b;" />
        <path d="M348.72,422.667L140.873,542.667L143.183,544L351.029,424L348.72,422.667Z" style="fill:#19233b;" />
        <path d="M376.432,438.667L168.586,558.667L170.896,560L378.742,440L376.432,438.667Z" style="fill:#19233b;" />
        <path d="M404.145,454.667L196.299,574.667L198.608,576L406.455,456L404.145,454.667Z" style="fill:#19233b;" />
        <path d="M431.858,470.667L224.012,590.667L226.321,592L434.167,472L431.858,470.667Z" style="fill:#19233b;" />
        <path d="M459.571,486.667L251.725,606.667L254.034,608L461.88,488L459.571,486.667Z" style="fill:#19233b;" />
        <path d="M487.284,502.667L279.438,622.667L281.747,624L489.593,504L487.284,502.667Z" style="fill:#19233b;" />
        <path d="M514.996,518.667L307.15,638.667L309.46,640L517.306,520L514.996,518.667Z" style="fill:#19233b;" />
      </g>
      <g id="platfromPrev">
        <path id="shadowPrev" d="M325.626,444L170.896,533.333L325.626,622.667L480.355,533.333L325.626,444Z" style="fill:#19233b;fill-opacity:0.4;" />
        <g id="boxPrev">
          <path d="M325.626,401.333L173.205,489.333L325.626,577.333L478.046,489.333L325.626,401.333Z" style="fill:#183263;" />
          <path d="M325.626,577.333L173.205,489.333L173.205,516.023L325.626,604.023L325.626,577.333Z" style="fill:#36558d;" />
          <path d="M478.046,489.333L325.626,577.333L325.626,604L478.046,516L478.046,489.333Z" style="fill:#172c57;" />
        </g>
      </g>
    </g>
    <g id="fase">
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
        <path id="shadow" d="M340.988,450.203C333.707,445.999 322.677,445.542 316.372,449.182L226.06,501.324C219.755,504.965 220.547,511.333 227.827,515.536L309.986,562.971C317.267,567.174 328.297,567.631 334.602,563.991L424.914,511.849C431.219,508.209 430.427,501.841 423.147,497.637L340.988,450.203Z" style="fill:#172c57;" />
        <g id="bottom">
          <path d="M433.456,431.304L222.014,430.15C222.014,430.15 221.499,467.634 221.885,468.962C222.573,471.322 224.612,473.68 227.947,475.605L313.983,525.278C321.607,529.68 333.136,530.17 339.714,526.373L429.108,474.761C432.37,472.878 433.805,470.291 433.493,467.624C433.348,466.386 433.456,431.304 433.456,431.304Z" style="fill:#223e74;" />
          <g>
            <path d="M259.669,473.253C259.669,472.885 259.445,472.457 259.169,472.298L234.766,458.209C234.49,458.049 234.266,458.219 234.266,458.587L234.266,459.92C234.266,460.288 234.49,460.716 234.766,460.875L259.169,474.965C259.445,475.124 259.669,474.955 259.669,474.587L259.669,473.253Z" style="fill:#142546;" />
            <path d="M259.669,478.587C259.669,478.219 259.445,477.791 259.169,477.631L234.766,463.542C234.49,463.383 234.266,463.552 234.266,463.92L234.266,465.253C234.266,465.621 234.49,466.049 234.766,466.209L259.169,480.298C259.445,480.457 259.669,480.288 259.669,479.92L259.669,478.587Z" style="fill:#142546;" />
            <path d="M259.669,483.92C259.669,483.552 259.445,483.124 259.169,482.965L234.766,468.875C234.49,468.716 234.266,468.885 234.266,469.253L234.266,470.587C234.266,470.955 234.49,471.383 234.766,471.542L259.169,485.631C259.445,485.791 259.669,485.621 259.669,485.253L259.669,483.92Z" style="fill:#142546;" />
          </g>
          <path d="M341.376,373.093C333.881,368.766 322.527,368.296 316.036,372.043L226.396,423.797C219.905,427.544 220.72,434.1 228.215,438.427L314.217,488.08C321.712,492.407 333.066,492.878 339.556,489.13L429.197,437.376C435.688,433.629 434.872,427.074 427.378,422.747L341.376,373.093Z" style="fill:#172c57;" />
        </g>
        <g id="middle">
          <path d="M433.456,377.971L222.014,376.817C222.014,376.817 221.499,414.3 221.885,415.628C222.573,417.989 224.612,420.346 227.947,422.272L313.983,471.945C321.607,476.346 333.136,476.837 339.714,473.04L429.108,421.428C432.37,419.544 433.805,416.957 433.493,414.291C433.348,413.052 433.456,377.971 433.456,377.971Z" style="fill:#223e74;" />
          <path d="M341.376,319.76C333.881,315.433 322.527,314.962 316.036,318.71L226.396,370.464C219.905,374.211 220.72,380.766 228.215,385.093L314.217,434.747C321.712,439.074 333.066,439.544 339.556,435.797L429.197,384.043C435.688,380.296 434.872,373.74 427.378,369.413L341.376,319.76Z" style="fill:#172c57;" />
        </g>
        <g id="top">
          <path d="M433.456,324.957L222.014,323.804C222.014,323.804 221.499,361.287 221.885,362.615C222.573,364.976 224.612,367.333 227.947,369.259L313.983,418.931C321.607,423.333 333.136,423.824 339.714,420.026L429.108,368.415C432.37,366.531 433.805,363.944 433.493,361.278C433.348,360.039 433.456,324.957 433.456,324.957Z" style="fill:#223e74;" />
          <path d="M341.376,266.747C333.881,262.42 322.527,261.949 316.036,265.696L226.396,317.45C219.905,321.198 220.72,327.753 228.215,332.08L314.217,381.733C321.712,386.06 333.066,386.531 339.556,382.784L429.197,331.03C435.688,327.282 434.872,320.727 427.378,316.4L341.376,266.747Z" style="fill:#36558d;" />
          <path d="M339.092,279.082C332.858,275.482 323.413,275.091 318.014,278.208L243.448,321.259C238.049,324.376 238.727,329.829 244.961,333.428L316.501,374.732C322.735,378.331 332.18,378.723 337.579,375.605L412.145,332.555C417.544,329.437 416.866,323.984 410.632,320.385L339.092,279.082Z" style="fill:#172c57;" />
          <path d="M339.092,276.415C332.858,272.816 323.413,272.424 318.014,275.541L243.448,318.592C238.049,321.709 238.727,327.162 244.961,330.762L316.501,372.065C322.735,375.664 332.18,376.056 337.579,372.939L412.145,329.888C417.544,326.771 416.866,321.318 410.632,317.718L339.092,276.415Z" style="fill:#223e74;" />
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "FasesItemSVG",
  data() {
    return {
      fase: "faseTwo",
      faseWatching: "faseOne",
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
    this.timelineFaseTwo = new TimelineMax();
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
      // Timeline stuff
      const timelineComplete = () => {
        // 🎬 Start playing the looping part of the animation
        this.timelineFaseTwo.add(
          nestedTimelineFaseTwoSlowMove(),
          `-=${baseTiming}`,
        );
        // Tell the 🛍 store that this fase has finished playing
        this.$store.commit({
          type: "items/setFasePlayed",
          fase: this.fase,
          bool: true,
        });
      };

      this.timelineFaseTwo.play().timeScale(1.5);
      this.timelineFaseTwo
        .to("#faseTwo #prev #boxPrev", baseTiming * 3, {
          y: 18,
          ease: Power4.easeIn,
        })
        .from(
          "#faseTwo #fase #basePrev",
          baseTiming * 2,
          { opacity: 0 },
          "sameTime",
        )
        .from("#faseTwo #fase #box", baseTiming * 7, { opacity: 0 }, "sameTime")
        .from(
          "#faseTwo #fase #base",
          baseTiming * 7,
          { opacity: 0 },
          "sameTime",
        )
        .from("#faseTwo #modules #shadow", baseTiming, { opacity: 0 }, "same")
        .from("#faseTwo #modules #bottom", baseTiming, { opacity: 0 }, "same")
        .from(
          "#faseTwo #modules #bottom",
          baseTiming * 4,
          { y: -400, ease: Elastic.easeOut.config(0.75, 0.95) },
          `-=${baseTiming}`,
        )
        .from("#faseTwo #modules #middle", baseTiming, { opacity: 0 })
        .from(
          "#faseTwo #modules #middle",
          baseTiming * 2,
          { y: -400 },
          `-=${baseTiming}`,
        )
        .to("#faseTwo #modules #bottom", baseTiming * 2, { y: 6 }, "twoDown")
        .to("#faseTwo #modules #middle", baseTiming * 2, { y: 6 }, "twoDown")
        .to("#faseTwo #modules #bottom", baseTiming * 2, { y: 0 }, "twoUp")
        .to("#faseTwo #modules #middle", baseTiming * 2, { y: 0 }, "twoUp")
        .from("#faseTwo #modules #top", baseTiming, { opacity: 0 })
        .from("#faseTwo #modules #top", baseTiming * 2, { y: -400 }, "-=0.3")
        .to("#faseTwo #modules #bottom", baseTiming * 2, { y: 6 }, "threeDown")
        .to("#faseTwo #modules #middle", baseTiming * 2, { y: 6 }, "threeDown")
        .to("#faseTwo #modules #top", baseTiming * 2, { y: 6 }, "threeDown")
        .to("#faseTwo #modules #bottom", baseTiming * 2, { y: 0 }, "threeUp")
        .to("#faseTwo #modules #middle", baseTiming * 2, { y: 0 }, "threeUp")
        .to("#faseTwo #modules #top", baseTiming * 2, { y: 0 }, "threeUp")
        .add(timelineComplete);
      //------------------------------------------------------//
      // ➰ Looping timeline ️❇️️ 🧦  GSAP
      //------------------------------------------------------//
      function nestedTimelineFaseTwoSlowMove(elm) {
        const tl = new TimelineMax({
          repeat: -1,
          yoyo: true,
        });
        tl.to("#faseTwo #modules #bottom", baseTiming * 4, {
          y: 3,
          ease: Power0.easeNone,
        })
          .to(
            "#faseTwo #modules #middle",
            baseTiming * 4,
            { y: 3, ease: Power0.easeNone },
            `-=${baseTiming * 3}`,
          )
          .to(
            "#faseTwo #modules #top",
            baseTiming * 4,
            { y: 3, ease: Power0.easeNone },
            `-=${baseTiming * 2}`,
          )
          .to(
            "#faseTwo #modules #bottom",
            baseTiming * 4,
            { y: -3, ease: Power0.easeNone },
            `-=${baseTiming * 1}`,
          )
          .to(
            "#faseTwo #modules #middle",
            baseTiming * 4,
            { y: -3, ease: Power0.easeNone },
            `-=${baseTiming * 2}`,
          )
          .to(
            "#faseTwo #modules #top",
            baseTiming * 4,
            { y: -3, ease: Power0.easeNone },
            `-=${baseTiming * 3}`,
          );
        return tl;
      }
      // END ➰ Looping timeline ️❇️️ 🧦  GSAP -------------------------------------//
    },
    interactiveTimeline() {
      const baseTiming = 0.3;
      this.timelineFaseTwo.pause();
      const resume = () => {
        this.timelineFaseTwo.resume();
      };
      const interactivetl = new TimelineMax();
      interactivetl
        .to(
          "#faseTwo #fase #modules #top",
          baseTiming,
          { y: -40, ease: Power0.easeNone },
          "sameTime",
        )
        .to(
          "#faseTwo #fase #modules #bottom",
          baseTiming,
          { y: 40, ease: Power0.easeNone },
          "sameTime",
        )
        .to(
          "#faseTwo #fase #modules #top",
          0.1,
          { y: 0, ease: Power0.easeNone },
          "sameTimeTwo",
        )
        .to(
          "#faseTwo #fase #modules #bottom",
          0.1,
          { y: 0, ease: Power0.easeNone },
          "sameTimeTwo",
        )
        .fromTo(
          "#faseTwo #fase #modules",
          baseTiming * 8,
          {
            y: -20,
            ease: Elastic.easeOut.config(1, 0.1),
          },
          {
            y: 0,
            ease: Elastic.easeOut.config(1, 0.1),
          },
        )
        .add(resume);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

svg.notPlayed {
  #fase {
    opacity: 0;
  }
  #prev {
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