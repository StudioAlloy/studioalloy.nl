<template>
  <div id="alloy-main-nav-container">
    <div id="default-Navigation" class="container--full">
      <div class="inner">
        <nuxt-link to="/">
          <img class="alloy-logo" src="~/assets/images/logo-studio-alloy.svg" alt="Logo Studio Alloy">
        </nuxt-link>
        <button @click="updateNavigationToggle" id="navigationToggle" aria-haspopup="true" :data-navigation-toggle="getNavigationToggle">menu</button>
      </div>
    </div>
    <SlideNav />
  </div>
</template>

<script>
import menu from "~/apollo/queries/menu";
import SlideNav from "@/components/default/SlideNav.vue";

export default {
  name: "Navigation",
  components: {
    SlideNav,
  },
  computed: {
    getNavigationToggle() {
      return this.$store.getters["ui/getNavigationToggle"];
    },
  },
  methods: {
    updateNavigationToggle() {
      this.$store.commit("ui/updateNavigationToggle");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
#alloy-main-nav-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3500;
  width: 100%;
}
#default-Navigation {
  z-index: 3500;
  > .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    > * {
      display: block;
    }
  }
  .alloy-logo {
    display: block;
    padding: $base-margin;
    @include media-breakpoint-down(sm) {
      width: 66px;
    }
  }
}
#default-Navigation {
  // padding: $base-margin;
  background-color: $brand-dark;
}
#navigationToggle {
  @include media-breakpoint-down(sm) {
    transform-origin: right center;
    transform: scale(0.7);
  }
  font-size: 20px;
  padding: 0 25px;
  line-height: 1em;
  color: $brand-light;
  border: none;
  background-color: transparent;
  appearance: none;
  transition: color;
  transition-duration: 300ms;
  transition-timing-function: ease;

  &:before,
  &:after {
    content: "";
    background-color: $brand-light;
    width: 100%;
    height: 3px;
    display: block;
    transform-origin: right center;
    transition: transform;
    transition-duration: 300ms;
    transition-timing-function: ease;
  }
  &:before {
    margin-bottom: 6px;
  }
  &:after {
    margin-top: 8px;
  }
  &[data-navigation-toggle="true"] {
    // top: $base-margin;
    // right: $base-margin;
    // position: fixed;
    color: transparent;
    &:before {
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
  }
}
</style>
