<template>
  <div id="alloy-slide-nav" :data-navigation-toggle="getNavigationToggle">
    <div class="inner">
      <nav>
        <ul>
          <li v-for="item in menu" :key="item.node.id" @click="updateNavigationToggle">
            <nuxt-link :to="item.node.url">{{item.node.label}}</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="alloy-cards contact-info">
        <div class="inner">
          <h4>Studio Alloy</h4>
          <ul>
            <li><a href="mailto:hello@studioalloy.nl">hello@studioalloy.nl</a></li>
            <li><a href="tel:+31233020044">023 30 20 044</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu from "~/apollo/queries/menu";

import CallToAction from "@/components/elements/CallToAction.vue";

export default {
  // props: ['item'],
  name: "SlideNav",
  components: {
    CallToAction,
  },
  data() {
    return {
      title: "SlideNav",
      show: false,
      menu: "",
    };
  }, // End data
  computed: {
    getNavigationToggle() {
      return this.$store.getters["ui/getNavigationToggle"];
    },
  },
  methods: {
    updateNavigationToggle() {
      this.$store.commit("ui/updateNavigationToggle");
    },
    formatLink() {},
  },
  apollo: {
    menu: {
      prefetch: true,
      query: menu,
      variables: {
        slug: "main-menu",
      },
      update(data) {
        return data.menuItems.edges;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

#alloy-slide-nav {
  margin-left: auto;
  position: relative;
  right: 0;
  width: 100%;
  background-color: darken($brand-dark, 3%);
  padding: $base-margin;
  transform: scale(0);
  transform-origin: right top;
  transition: transform;
  transition-duration: $base-transition;
  transition-timing-function: ease;
  pointer-events: none;
  // z-index: -1;
  height: 0;

  @include media-breakpoint-up(lg) {
    padding: $base-margin * 2;
    max-width: 100%;
    width: 450px;
  }
  > .inner {
    margin-bottom: $base-margin * 2;
  }
  //------------------------------------------------------//
  // Animate 🏎 slide navigation
  //------------------------------------------------------//
  nav ul li {
    transform: translateX(-20px);
    opacity: 0;
    transition: transform, opacity;
    transition-duration: $base-transition;
    transition-timing-function: ease;
  }
  .alloy-cards {
    transform: translateX(-20px);
    opacity: 0;
    transition: transform, opacity;
    transition-duration: $base-transition;
    transition-timing-function: ease;
  }
  &[data-navigation-toggle="true"] {
    height: auto;
    z-index: 5000;

    pointer-events: auto;
    transform: scale(1);
    @for $i from 1 to 10 {
      nav ul li:nth-child(#{$i}) {
        transform: translateX(0);
        opacity: 1;
        transition-delay: $i * 100ms;
      }
    }
    .alloy-cards {
      transform: translateX(0);
      opacity: 1;
      transition-delay: 6 * 100ms;
    }
  }
  // END Animate 🏎 slide navigation -------------------------------------//

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  nav {
    margin-bottom: $base-margin * 2;

    a {
      position: relative;
      display: inline-block;
      margin: 5px $base-margin;
      font-size: 30px;
      line-height: 1.6em;
      font-weight: 700;
      text-decoration: none;
      &:before,
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: block;
        height: 2px;
        width: 100%;
        background-color: $brand-light;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform;
        transition-duration: $base-transition;
        transition-timing-function: ease;
      }
      &:before {
        background-color: $brand-one;
      }
      &.nuxt-link-exact-active {
        &:before {
          transform: scaleX(1);
        }
      }
      &:hover {
        &:after {
          transform: scaleX(1);
        }
      }
    }
  }
  .contact-info {
    > .inner {
      background-color: $brand-dark-lighten;
      * {
        color: $brand-light;
        text-decoration: none;
      }
      li {
        a {
          display: block;
          margin: 10px 0;
        }
      }
    }
  }
}
</style>