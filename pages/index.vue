<template>
  <div>
    <Header />
    <Diensten />
  </div>
</template>

<script>
// Compontents
import Header from "@/components/default/Header.vue";
import Diensten from "@/components/elements/flex/Diensten.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Diensten,
  },
};
</script>
