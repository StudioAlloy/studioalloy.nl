<template>
  <svg width="100%" height="100%" viewBox="0 0 80 80" ref="ornament">
    <path id="wedge" d="M39.536,18.763L10.164,48.135C10.456,48.445 10.689,48.705 10.992,49.008C27.226,65.242 53.601,65.296 69.835,49.062L39.536,18.763Z" style="fill:none;fill-rule:nonzero;stroke:#F53;stroke-width:1px;" />
    <path id="cross" d="M68.076,25.65L54.35,11.924L40,26.274L25.65,11.924L11.924,25.65L26.274,40L11.924,54.35L25.65,68.076L40,53.726L54.35,68.076L68.076,54.35L53.726,40L68.076,25.65Z" style="fill:none;fill-rule:nonzero;stroke:#F53;stroke-width:1px;" />
    <rect id="minus" x="10" y="28.088" width="60" height="23.823" style="fill:none;stroke:#F53;stroke-width:1px;" />
    <path id="octagon" d="M54.889,25.529L40.295,19.239L25.529,25.111L19.239,39.705L25.111,54.471L39.704,60.761L54.471,54.889L60.761,40.296L54.889,25.529Z" style="fill:none;fill-rule:nonzero;stroke:#F53;stroke-width:1px;" />
    <path id="rugby" d="M47.813,47.813C35.63,59.996 17.942,62.059 17.942,62.059C17.942,62.059 20.005,44.371 32.188,32.188C44.371,20.005 62.059,17.942 62.059,17.942C62.059,17.942 59.996,35.63 47.813,47.813Z" style="fill:none;fill-rule:nonzero;stroke:#F53;stroke-width:1px;" />
    <path id="slice" d="M24.24,55.76C35.229,66.75 52.915,66.947 64.155,56.368L23.632,15.845C13.053,27.085 13.25,44.771 24.24,55.76Z" style="fill:none;fill-rule:nonzero;stroke:#F53;stroke-width:1px;" />
  </svg>
</template>

<script>
export default {
  name: "OrnamentsShapes",
  mounted() {
    console.warn(this.$refs.ornament.childNodes.length);
  },
};
</script>
<style lang="scss" scoped>
svg {
  width: 5vw;
  * {
    opacity: 0;
    &:nth-child(2) {
      opacity: 1;
    }
  }
}
</style>