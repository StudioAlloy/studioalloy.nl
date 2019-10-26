<template>
  <div class="alloy-layout-default">
    <Navigation />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Navigation from "@/components/default/Navigation.vue";
import Footer from "@/components/default/Footer.vue";

export default {
  transition: {
    name: "page",
    mode: "out-in",
  },
  head() {
    return {
      bodyAttrs: {
        id: `page-${this.$route.path.replace("/", "")}`,
      },
    };
  },
  components: {
    Navigation,
    Footer,
  },
};
</script>