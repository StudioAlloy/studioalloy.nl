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
  mounted() {
    const notification = {
      title: "Hey, guess what? Deze website slaat GEEN cookies op!",
      content:
        "Waarom zouden wij onnodig digital bezoekerdata verzamelen als we er in de praktijk toch niets mee doen? Overigens weten wij wel heel goed hoe dit moet. Interesse? Stuur een mailtje naar hello@studioalloy.nl of nog leuker, een ansichtkaart per post.",
      image: "",
      type: "",
      timer: 6000,
    };
    this.$store.commit("notifications/addNotification", notification);
  },
};
</script>