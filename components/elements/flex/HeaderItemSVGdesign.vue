<template>
  <svg id="headerDesign" viewBox="0 0 500 500" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="base">
      <g id="bar">
        <path d="M106.817,26L102.198,28.667L393.183,196.667L397.802,194L106.817,26Z" style="fill:#adbad9;" />
        <path d="M397.802,194L393.183,196.667L393.183,207.333L397.802,204.667L397.802,194Z" style="fill:#adbad9;" />
        <path d="M102.198,28.667L393.183,196.667L393.183,207.333L102.198,39.333L102.198,28.667Z" style="fill:#637192;" />
      </g>
      <path id="screen" d="M102.198,39.333L393.183,207.333L393.183,474L102.198,306L102.198,39.333Z" style="fill:#19233b;" />
      <path id="side" d="M397.802,204.667L393.183,207.333L393.183,474L397.802,471.333L397.802,204.667Z" style="fill:#0a0c10;" />
    </g>
    <g id="design">
      <path id="large" d="M365.47,436.667L134.53,303.333L134.53,324.667L365.47,458L365.47,436.667Z" style="fill:#637192;" />
      <g id="text-header">
        <path d="M134.53,186L217.668,234" style="fill:none;stroke:#637192;stroke-width:4px;" />
        <path d="M134.53,196.667L236.144,255.333" style="fill:none;stroke:#637192;stroke-width:4px;" />
      </g>
      <g id="text-body">
        <path d="M134.53,218L231.525,274" style="fill:none;stroke:#637192;stroke-width:2px;" />
        <path d="M134.53,228.667L236.144,287.333" style="fill:none;stroke:#637192;stroke-width:2px;" />
        <path d="M134.53,239.333L228.906,293.821" style="fill:none;stroke:#637192;stroke-width:2px;" />
        <path d="M134.53,250L236.144,308.667" style="fill:none;stroke:#637192;stroke-width:2px;" />
        <path d="M134.53,260.667L222.287,311.333" style="fill:none;stroke:#637192;stroke-width:2px;" />
        <path d="M134.53,271.333L226.906,324.667" style="fill:none;stroke:#637192;stroke-width:2px;" />
      </g>
      <g id="images">
        <path d="M365.47,319.333L319.282,292.667L319.282,383.333L365.47,410L365.47,319.333Z" style="fill:#637192;" />
        <path d="M314.163,289.956L269.018,263.891L269.018,306.313L314.163,332.378L314.163,289.956Z" style="fill:#637192;" />
        <path d="M314.163,337.711L268.475,311.333L268.475,353.756L314.163,380.134L314.163,337.711Z" style="fill:#637192;" />
      </g>
    </g>
    <g id="header">
      <path id="header-base" d="M393.183,207.333L102.198,39.333L102.198,132.157L393.183,300.157L393.183,207.333Z" style="fill:#121724;" />
      <g id="interactive">
        <path d="M321.591,240.667C327.964,244.346 333.138,253.308 333.138,260.667C333.138,268.026 327.964,271.013 321.591,267.333C315.218,263.654 310.044,254.692 310.044,247.333C310.044,239.974 315.218,236.987 321.591,240.667Z" style="fill:#f67a62;" />
        <path d="M316.973,243.333C323.346,247.013 328.52,255.974 328.52,263.333C328.52,270.692 323.346,273.679 316.973,270C310.6,266.321 305.426,257.359 305.426,250C305.426,242.641 310.6,239.654 316.973,243.333Z" style="fill:#f53;" />
      </g>
      <g id="header-text">
        <g>
          <path d="M259.238,155.333L134.53,84.667" style="fill:none;stroke:#ebebeb;stroke-width:6px;" />
        </g>
        <g>
          <path d="M226.906,159.333L134.53,106" style="fill:none;stroke:#ebebeb;stroke-width:6px;" />
        </g>
        <g>
          <path d="M208.431,170.667L134.53,127.333" style="fill:none;stroke:#ebebeb;stroke-width:6px;" />
        </g>
      </g>
    </g>
    <defs>
      <path id="base-screen-morph" d="M102.198,306L393.183,474L393.183,474L102.198,306L102.198,306Z" style="fill:#ff20b1;" />
    </defs>
  </svg>

</template>

<script>
import { TweenMax, TimelineMax } from "gsap";

export default {
  props: ["slug"],
  name: "HeaderItemSVG",
  data() {
    return {};
  }, // End data
  mounted() {
    // Basic values
    const baseTiming = 0.3;

    // Timeline stuf
    const timelineHeaderDevelopment = new TimelineMax();
    // Base ease full timeline

    timelineHeaderDevelopment
      .from(
        "#base #screen",
        baseTiming * 4,
        { morphSVG: "#base-screen-morph" },
        "sameTime",
      )
      .from(
        "#base #side",
        baseTiming * 4,
        { scaleY: 0, transformOrigin: "bottom" },
        "sameTime",
      )
      .from("#base #bar", 0, { opacity: 0 })
      .from("#base #bar", baseTiming * 2, { y: 40 })
      .from("#header", baseTiming, { scale: 0, transformOrigin: "center" })
      .from("#header #interactive", baseTiming * 6, {
        scale: 0,
        transformOrigin: "center",
        ease: Elastic.easeOut.config(1, 0.3),
      })
      .staggerFromTo(
        "#header-text *",
        baseTiming,
        { drawSVG: "100% 100%" },
        { drawSVG: "100%" },
        0.1,
        `-=${baseTiming * 4}`,
      )
      .staggerFrom("#images *", baseTiming * 2, {
        y: 40,
        opacity: 0,
        stagger: 0.5,
      })
      .staggerFromTo(
        "#text-header *",
        baseTiming,
        { drawSVG: "0%" },
        { drawSVG: "100%" },
        0.1,
        `-=${baseTiming * 4}`,
      )
      .staggerFromTo(
        "#text-body *",
        baseTiming,
        { drawSVG: "0%" },
        { drawSVG: "100%" },
        0.1,
        `-=${baseTiming * 2}`,
      )
      .from("#large", baseTiming * 2, { y: -20, opacity: 0 });
  },
};
</script>