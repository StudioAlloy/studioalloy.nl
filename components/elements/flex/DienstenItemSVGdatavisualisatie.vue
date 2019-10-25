<template>
  <svg id="DienstDatavis" viewBox="0 0 700 400" style="fill-rule:evenodd;clip-rule:evenodd;">
    <g id="laptop">
      <g id="laptop-base">
        <g id="laptop-base-screen">
          <path d="M65.833,391.939L634.167,391.939L634.167,26.363C634.167,22.498 630.961,19.365 627.007,19.365L72.992,19.365C69.038,19.365 65.833,22.498 65.833,26.363L65.833,391.939Z" style="stroke:#9fa2a5;stroke-width:2.83px;" />
          <rect x="79.53" y="33.361" width="541.92" height="332.481" style="fill:#ededed;" />
        </g>
        <rect x="0" y="377.908" width="700" height="22.092" style="fill:#d8d8d8;" />
        <path d="M306.496,377.908L400.075,377.908L398.184,381.767C396.768,384.657 393.813,386.491 390.574,386.491L315.998,386.491C312.758,386.491 309.803,384.657 308.388,381.767L306.496,377.908Z" style="fill:#9fa2a5;" />
      </g>
      <g id="screen">
        <g id="widgets">
          <g id="widget-three">
            <rect x="467.007" y="265.151" width="135.537" height="87.262" style="fill:#d8d8d8;" />
            <g id="widget-three-content">
              <rect x="485.609" y="277.766" width="10.63" height="61.504" style="fill:#bfbfbf;" />
              <rect x="498.367" y="298.794" width="10.63" height="40.476" style="fill:#bfbfbf;" />
              <rect x="511.123" y="290.383" width="10.63" height="48.888" style="fill:#bfbfbf;" />
              <rect x="523.879" y="318.77" width="10.63" height="20.502" style="fill:#ededed;" />
              <rect x="536.635" y="308.782" width="10.63" height="30.49" style="fill:#bfbfbf;" />
              <rect x="549.392" y="300.897" width="10.63" height="38.375" style="fill:#bfbfbf;" />
              <rect x="562.148" y="281.972" width="10.63" height="57.299" style="fill:#bfbfbf;" />
              <rect x="574.904" y="311.409" width="10.63" height="27.861" style="fill:#bfbfbf;" />
            </g>
          </g>
          <g id="widget-two">
            <rect x="470.195" y="153.707" width="135.537" height="87.262" style="fill:#d8d8d8;" />
            <g id="widget-two-content">
              <path d="M488.672,197.601L581.748,197.601" style="fill:none;stroke:#ededed;stroke-width:2.27px;stroke-linecap:round;stroke-linejoin:round;" />
              <path d="M488.673,219.68L512.709,197.338L534.775,206.275L563.624,176.687L581.748,188.299" style="fill:none;stroke:#bfbfbf;stroke-width:4.54px;stroke-linecap:round;stroke-linejoin:round;" />
            </g>
          </g>
          <g id="widget-one">
            <rect x="467.007" y="45.418" width="135.537" height="87.262" style="fill:#d8d8d8;" />
            <path id="widget-one-content" d="M568.325,110.602C568.325,92.312 553.378,77.485 534.94,77.485C516.502,77.485 501.555,92.312 501.555,110.602" style="fill:none;stroke:#bfbfbf;stroke-width:28.37px;" />
          </g>
          <g id="widget-large">
            <rect x="97.602" y="261.996" width="348.143" height="87.262" style="fill:#d8d8d8;" />
            <g id="widget-large-content">
              <path d="M108.232,330.296L143.378,314.432L175.601,318.72L222.197,299.244L264.056,318.72L313.101,306.134L347.139,281.972L393.658,330.296L108.232,330.296Z" style="fill:#ededed;" />
              <path d="M145.389,330.296L180.992,314.432L213.636,318.72L260.84,299.244L303.243,318.72L352.928,306.134L387.411,281.972L434.535,330.296L145.389,330.296Z" style="fill:#bfbfbf;" />
            </g>
          </g>
          <g id="widget-main">
            <g id="widget-main-content">
              <rect x="97.602" y="45.418" width="348.143" height="197.128" style="fill:#0c162d;" />
              <path d="M126.342,143.982L163.149,124.078L201.421,134.03L260.753,103.311L305.425,113.265L374.105,83.331L411.461,143.982L126.342,143.982Z" style="fill:#233b72;" />
              <path d="M126.342,145.822L162.512,154.367L199.32,176.489L261.152,169.851L305.425,186.493L389.981,166.324L411.461,145.822L126.342,145.822Z" style="fill:#233b72;" />
              <path d="M117.463,67.234L191.681,67.234M117.463,82.479L215.599,83.331M117.463,216.525L215.599,217.378" style="fill:none;stroke:#233b72;stroke-width:5.67px;" />
            </g>
            <ellipse id="interactive" cx="416.247" cy="213.371" rx="13.553" ry="13.405" style="fill:#f53;" />
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: ["slug"],
  name: "DienstenItemSVGdatavisualisatie",
  data() {
    return {};
  }, // End data
  mounted() {
    this.$nextTick(this.timelineDienstDatavis);
  },
  methods: {
    timelineDienstDatavis() {
      //------------------------------------------------------//
      // Timeline ❇️ 🧦 GSAP
      //------------------------------------------------------//
      // Basic values
      // Basic values
      const baseTiming = 0.3;
      // Timeline stuf
      const timelineDienstDatavis = new this.$GSAP.TimelineMax();
      // Base ease full timeline
      timelineDienstDatavis
        // 💻 laptop animation
        .from(
          "#DienstDatavis #laptop #laptop-base-screen",
          baseTiming * 2,
          { scaleY: 0, transformOrigin: "center bottom" },
          "sameTime",
        );
      // END Timeline ❇️ 🧦  GSAP -------------------------------------//
      //------------------------------------------------------//
      // 🎩 ScrollMagic scene
      //------------------------------------------------------//
      const controller = new this.$ScrollMagic.Controller();
      const scene = new this.$ScrollMagic.Scene({
        triggerElement: "svg#DienstDatavis",
        offset: -200,
        reverse: false,
      })
        .setTween(timelineDienstDatavis)
        .addTo(controller);
      // ENDcontrollerMagic scene -------------------------------------//
    },
  },
};
</script>