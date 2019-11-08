<template>
  <div class="alloy-layout-default">
    <Navigation />
    <nuxt />
    <!-- <Ornaments /> -->
    <NotificationsContainer />
    <Footer />
  </div>
</template>
<script>
import Navigation from "@/components/default/Navigation.vue";
import Ornaments from "@/components/default/Ornaments.vue";
import Footer from "@/components/default/Footer.vue";
import NotificationsContainer from "@/components/elements/NotificationsContainer.vue";

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
    Ornaments,
    NotificationsContainer,
    Footer,
  },
  created() {
    const notification = {
      title: "Wij gebruiken cookies!",
      content: "Deze site gebruikt alleen voor analytische doeleinden.",
      image: "",
      type: "",
      timer: 10000,
    };
    this.$store.commit("notifications/addNotification", notification);
  },
};
</script>