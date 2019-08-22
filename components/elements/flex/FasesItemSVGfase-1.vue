<template>
  <svg id="faseOne" width="100%" height="100%" viewBox="0 0 650 700" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="fase">
      <g id="base">
        <path d="M330.004,396.139L108.542,524L325.241,649.111L546.703,521.25L330.004,396.139Z" style="fill:#1d2e55;" />
        <path d="M325.626,393.333L103.923,521.333L117.779,529.333L325.626,409.333L325.626,393.333Z" style="fill:#1c2b4d;" />
        <path d="M546.703,521.25L325.626,393.333L325.626,409.25L533.089,529.112L546.703,521.25Z" style="fill:#36558d;" />
      </g>
      <g id="grid">
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
      <g id="platfrom">
        <path id="shadow" d="M325.626,444L170.896,533.333L325.626,622.667L480.355,533.333L325.626,444Z" style="fill:#19233b;fill-opacity:0.5;" />
        <g id="box">
          <path d="M325.626,401.333L173.205,489.333L325.626,577.333L478.046,489.333L325.626,401.333Z" style="fill:#183263;" />
          <path d="M325.626,577.333L173.205,489.333L173.205,516.023L325.626,604.023L325.626,577.333Z" style="fill:#36558d;" />
          <path d="M478.046,489.333L325.626,577.333L325.626,604L478.046,516L478.046,489.333Z" style="fill:#172c57;" />
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: ["slug"],
  name: "FasesItemSVG",
  data() {
    return {
      fase: "faseOne",
    };
  }, // End data
  computed: {
    getFasePlayed() {
      return this.$store.getters["items/getFasePlayed"](this.fase);
    },
  },
  mounted() {
    const timelineComplete = () => {
      // 🎬 Start playing the looping part of the animation
      timelineFaseOne.add(nestedTimelineFaseOneSlowMove());

      // Tell the 🛍 store that this fase has finished playing
      this.$store.commit({
        type: "items/setFasePlayed",
        fase: this.fase,
        bool: true,
      });
    };

    // Basic values
    const baseTiming = 0.3;

    // Timeline stuff
    const timelineFaseOne = new TimelineMax({ onComplete: timelineComplete });

    function nestedTimelineFaseOneSlowMove(elm) {
      const tl = new TimelineMax({
        repeat: -1,
        yoyo: true,
      });

      tl.to("#faseOne #platfrom #box", baseTiming * 4, {
        y: 3,
        ease: Power0.easeNone,
      }).to("#faseOne #platfrom #box", baseTiming * 4, {
        y: -3,
        ease: Power0.easeNone,
      });

      return tl;
    }
    timelineFaseOne
      .staggerFrom("#faseOne #grid *", baseTiming * 6, {
        y: -400,
        ease: Power2.easeOut,
        stagger: {
          each: 0.15,
        },
      })
      .from("#faseOne #platfrom #shadow", baseTiming, { opacity: 0 })
      .from("#faseOne #platfrom #box", baseTiming, { opacity: 0 })
      .from("#faseOne #platfrom #box", baseTiming * 4, {
        y: -500,
        ease: Elastic.easeOut.config(0.75, 0.95),
      });
    // .add(nestedTimelineFaseOneSlowMove());
  },
};
</script>