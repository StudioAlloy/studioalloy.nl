<template>
  <svg id="DienstDatavis" viewBox="0 0 700 400" style="fill-rule:evenodd;clip-rule:evenodd;" @click="interactiveMorph">
    <defs>
      <rect id="morph-background" x="97.602" y="45.418" width="506.069" height="309.602" style="fill:#f7f22d;" />
      <ellipse id="morph-interactive" cx="571.147" cy="325.139" rx="13.553" ry="13.405" style="fill:#f53;" />
      <path id="morph-graph-outline" d="M352.358,112.593L414.164,138.194L439.765,200L414.164,261.806L352.358,287.407L290.552,261.806L264.952,200L290.552,138.194L352.358,112.593Z" style="fill:none;stroke:#ff58bc;stroke-width:10px;" />
      <path id="morph-graph-bottom-two" d="M352.358,127.545L395.741,156.617L419.208,200L382.43,230.071L352.358,248.33L332.249,220.11L301.125,200L308.975,156.617L352.358,127.545Z" style="fill:#ff4a00;" />
      <path id="morph-graph-top-two" d="M352.358,156.617L402.408,149.95L402.408,200L400.689,248.33L352.358,233.381L304.028,248.33L282.796,200L318.174,165.816L352.358,156.617Z" style="fill:#004a00;" />
      <g id="morph-graph">
        <path id="morph-graph-top" d="M126.342,143.982L163.149,143.017L201.421,143.5L260.753,142.01L305.425,142.493L374.105,141.041L411.461,143.982L126.342,143.982Z" style="fill:#ff0072;" />
        <path id="morph-graph-bottom" d="M126.342,145.822L162.512,146.44L199.32,148.04L261.152,147.56L305.425,148.764L389.981,147.305L411.461,145.822L126.342,145.822Z" style="fill:#ff0072;" />
      </g>
    </defs>
    <g id="laptop">
      <g id="laptop-base">
        <g id="laptop-base-screen">
          <path d="M65.833,391.939L634.167,391.939L634.167,26.363C634.167,22.498 630.961,19.365 627.007,19.365L72.992,19.365C69.038,19.365 65.833,22.498 65.833,26.363L65.833,391.939Z" style="stroke:#9fa2a5;stroke-width:2.83px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;" />
          <rect x="79.53" y="33.361" width="541.92" height="332.481" style="fill:#ededed;" />
        </g>
        <rect x="0" y="377.908" width="700" height="22.092" style="fill:#d8d8d8;" />
        <path d="M306.496,377.908L400.075,377.908L398.184,381.767C396.768,384.657 393.813,386.491 390.574,386.491L315.998,386.491C312.758,386.491 309.803,384.657 308.388,381.767L306.496,377.908Z" style="fill:#9fa2a5;" />
      </g>
      <g id="screen">
        <g id="widgets">
          <g id="widget-large">
            <rect x="97.602" y="261.996" width="348.143" height="87.262" style="fill:#d8d8d8;" />
            <g id="widget-large-content">
              <path d="M108.232,330.296L143.378,314.432L175.601,318.72L222.197,299.244L264.056,318.72L313.101,306.134L347.139,281.972L393.658,330.296" style="fill:none;stroke:#ededed;stroke-width:6px;stroke-miterlimit:2;" />
              <path d="M145.389,330.296L180.992,314.432L213.636,318.72L260.84,299.244L303.243,318.72L352.928,306.134L387.411,281.972L434.535,330.296" style="fill:none;stroke:#bfbfbf;stroke-width:6px;stroke-miterlimit:2;" />
            </g>
          </g>
          <g id="widget-one">
            <rect x="467.007" y="45.418" width="135.537" height="87.262" style="fill:#d8d8d8;" />
            <path id="widget-one-content" d="M501.555,110.602C501.555,92.312 516.502,77.485 534.94,77.485C553.378,77.485 568.325,92.312 568.325,110.602" style="fill:none;stroke:#bfbfbf;stroke-width:28.37px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;" />
          </g>
          <g id="widget-two">
            <rect x="470.195" y="153.707" width="135.537" height="87.262" style="fill:#d8d8d8;" />
            <g id="widget-two-content">
              <path d="M488.672,197.601L581.748,197.601" style="fill:none;stroke:#ededed;stroke-width:2.27px;stroke-miterlimit:4;" />
              <path d="M488.673,219.68L512.709,197.338L534.775,206.275L563.624,176.687L581.748,188.299" style="fill:none;stroke:#bfbfbf;stroke-width:6px;stroke-miterlimit:4;" />
            </g>
          </g>
          <g id="widget-three">
            <rect x="470.212" y="261.719" width="135.537" height="87.262" style="fill:#d8d8d8;" />
            <g id="widget-three-content">
              <path d="M494.13,335.838L494.13,274.335" style="fill:none;stroke:#bfbfbf;stroke-width:10px;stroke-linecap:butt;" />
              <path d="M506.921,335.838L506.921,295.301" style="fill:none;stroke:#bfbfbf;stroke-width:10px;stroke-linecap:butt;" />
              <path d="M519.712,335.838L519.712,287.613" style="fill:none;stroke:#bfbfbf;stroke-width:10px;stroke-linecap:butt;" />
              <path d="M532.503,335.838L532.503,315.57" style="fill:none;stroke:#fff;stroke-width:10px;stroke-linecap:butt;" />
              <path d="M545.294,335.838L545.294,305.35" style="fill:none;stroke:#bfbfbf;stroke-width:10px;stroke-linecap:butt;" />
              <path d="M558.085,335.838L558.085,297.513" style="fill:none;stroke:#bfbfbf;stroke-width:10px;stroke-linecap:butt;" />
              <path d="M570.876,335.838L570.876,278.541" style="fill:none;stroke:#bfbfbf;stroke-width:10px;stroke-linecap:butt;" />
              <path d="M583.667,335.838L583.667,307.978" style="fill:none;stroke:#bfbfbf;stroke-width:10px;stroke-linecap:butt;" />
            </g>
          </g>
        </g>
      </g>
      <g id="widget-main">
        <g id="widget-main-content">
          <rect id="widget-main-background" x="97.602" y="45.418" width="348.143" height="197.128" style="fill:#0c162d;" />
          <path id="graph-bottom" d="M126.342,145.822L162.512,154.367L199.32,176.489L261.152,169.851L305.425,186.493L389.981,166.324L411.461,145.822L126.342,145.822Z" style="fill:#233b72;" />
          <path id="graph-top" d="M126.342,143.982L163.149,124.078L201.421,134.03L260.753,103.311L305.425,113.265L374.105,83.331L411.461,143.982L126.342,143.982Z" style="fill:#233b72;" />
          <path id="graph-outline" d="M117.463,216.525L215.599,217.378" style="fill:none;stroke:#233b72;stroke-width:5.67px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;" />
          <path d="M117.463,82.479L215.599,83.331" style="fill:none;stroke:#233b72;stroke-width:5.67px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;" />
          <path d="M117.463,67.234L191.681,67.234" style="fill:none;stroke:#233b72;stroke-width:5.67px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;" />
        </g>
        <ellipse id="interactive" cx="416.247" cy="213.371" rx="13.553" ry="13.405" style="fill:#f53;" />
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
    // this.$nextTick(this.timelineDienstDatavis);
    this.$nextTick(() => {
      this.timelineDienstDatavis();
      this.tlMorph = new this.$GSAP.TimelineMax();
    });
  },
  methods: {
    timelineDienstDatavis() {
      //------------------------------------------------------//
      // Timeline ❇️ 🧦 GSAP
      //------------------------------------------------------//
      // Basic values
      const baseTiming = 0.3;
      // Timeline stuf
      const timelineDienstDatavis = new this.$GSAP.TimelineMax();
      // Base ease full timeline
      timelineDienstDatavis
        // 💻 laptop animation
        .from("#DienstDatavis #laptop #laptop-base-screen", baseTiming * 2, {
          scaleY: 0,
          transformOrigin: "center bottom",
        })
        .from("#DienstDatavis #widget-main", baseTiming * 4, {
          scale: 0,
          transformOrigin: "center",
          ease: Elastic.easeOut.config(1, 0.5),
        })
        .staggerFromTo(
          "#DienstDatavis #widget-main path",
          baseTiming * 3,
          { drawSVG: "0%" },
          { drawSVG: "100%" },
          0.1,
          "sameTime",
        )
        .from(
          "#DienstDatavis #widget-main #graph-top",
          baseTiming * 2,
          {
            opacity: 0,
            morphSVG: "#DienstDatavis #morph-graph #morph-graph-top",
            ease: Elastic.easeOut.config(1, 0.5),
          },
          "sameTime",
        )
        .from(
          "#DienstDatavis #widget-main #graph-bottom",
          baseTiming * 2,
          {
            opacity: 0,
            morphSVG: "#DienstDatavis #morph-graph #morph-graph-bottom",
            ease: Elastic.easeOut.config(1, 0.5),
          },
          "sameTime",
        )
        .staggerFrom(
          "#DienstDatavis #widgets > *",
          baseTiming * 2,
          {
            y: 50,
            opacity: 0,
          },
          baseTiming,
        )
        .from(
          "#DienstDatavis #interactive",
          baseTiming * 4,
          {
            scale: 0,
            transformOrigin: "center",
            ease: Elastic.easeOut.config(1, 0.3),
          },
          "sameTimeTwo",
        )
        .staggerFromTo(
          "#DienstDatavis #widgets > * path ",
          baseTiming * 3,
          { drawSVG: "0%" },
          { drawSVG: "100%" },
          0.1,
          "sameTimeTwo",
        )
        .add(alloyLoopingAnimation);
      // END Timeline ❇️ 🧦  GSAP -------------------------------------//
      //------------------------------------------------------//
      // ➰ Looping timeline ️❇️️ 🧦  GSAP
      //------------------------------------------------------//
      const loopInteractive = new this.$GSAP.TimelineMax({
        repeat: -1,
        // yoyo: true,
        repeatDelay: baseTiming * 8,
      });
      function alloyLoopingAnimation() {
        loopInteractive
          .to("#DienstDatavis #interactive", baseTiming * 2, {
            scale: 0.8,
            transformOrigin: "center",
          })
          .to("#DienstDatavis #interactive", baseTiming * 4, {
            // scale: "+=0.2",
            scale: 1,
            transformOrigin: "center",
            ease: Elastic.easeOut.config(1, 0.3),
          });
        return loopInteractive;
      }
      // END ➰ Looping timeline ️❇️️ 🧦  GSAP -------------------------------------//
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
    interactiveMorph() {
      const baseTiming = 0.3;
      /* Convert un-morphable shapes to path ----------------------------------------- */
      MorphSVGPlugin.convertToPath(
        // "circle, rect, ellipse, line, polygon, polyline",
        "rect, ellipse",
      );
      // const tlMorph = new this.$GSAP.TimelineMax();
      // What 🔁 direction should the animation play ----------------------------------------- /
      // this.tlMorph.eventCallback("onComplete", tlDirection);
      const tlDirection = () => {
        this.played = !this.played;
      };
      // // this.played ? this.tlMorph.reverse() : this.tlMorph.play();
      if (this.played) {
        this.tlMorph.reverse();
        tlDirection();
      } else {
        this.tlMorph.play();
        this.tlMorph
          .to(
            "#DienstDatavis #interactive",
            baseTiming * 2,
            {
              morphSVG: "#DienstDatavis #morph-interactive",
            },
            "sameTime",
          )
          .to(
            "#DienstDatavis #widget-main #widget-main-background",
            baseTiming * 2,
            {
              morphSVG: "#DienstDatavis #morph-background",
            },
            "sameTime",
          )
          .to(
            "#DienstDatavis #widget-main #graph-bottom",
            baseTiming * 2,
            {
              morphSVG: "#DienstDatavis #morph-graph-bottom-two",
              fill: "#F53",
            },
            "sameTime",
          )
          .to(
            "#DienstDatavis #widget-main #graph-top",
            baseTiming * 2,
            {
              morphSVG: "#DienstDatavis #morph-graph-top-two",
            },
            "sameTime",
          )
          .add(function() {
            tlDirection();
          })
          .to(
            "#DienstDatavis #widget-main #graph-outline",
            baseTiming * 2,
            {
              morphSVG: "#DienstDatavis #morph-graph-outline",
            },
            "sameTime",
          );
      }
    },
  },
};
</script>