<template>
  <div>
    <Header />
    <Diensten />
    <Fases />
    <CallToAction />
  </div>
</template>

<script>
// Compontents
import Header from "@/components/default/Header.vue";
import Diensten from "@/components/elements/flex/Diensten.vue";
import Fases from "@/components/elements/flex/Fases.vue";
import CallToAction from "@/components/elements/flex/CallToAction.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Diensten,
    Fases,
    CallToAction,
  },
};
</script>
