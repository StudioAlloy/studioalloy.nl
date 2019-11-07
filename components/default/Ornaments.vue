<template>
  <div id="Ornaments">
    <div class="alloy-left">
      <OrnamentsShape />
    </div>
    <div class="alloy-right">
      <OrnamentsShape />
    </div>
  </div>
</template>

<script>
import OrnamentsShape from "@/components/default/OrnamentsShape.vue";
export default {
  name: "Ornaments",
  components: {
    OrnamentsShape,
  },
};
</script>
