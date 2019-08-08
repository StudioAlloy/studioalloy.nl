<template>
  <div>
    <Navigation />
    <nuxt />
    <SlideNav />
  </div>
</template>
<script>
import Navigation from "@/components/default/Navigation.vue";
import Header from "@/components/default/Header.vue";
import SlideNav from "@/components/default/SlideNav.vue";

export default {
  components: {
    Navigation,
    Header,
    SlideNav,
  },
};
</script>