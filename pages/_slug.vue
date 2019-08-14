<template>
  <div>
    <pre>{{pages}}</pre>

  </div>
</template>

<script>
import pages from "~/apollo/queries/pages";

// Compontents
import Diensten from "@/components/elements/flex/Diensten.vue";

export default {
  data() {
    return {};
  },
  components: {
    Diensten,
  },
  apollo: {
    pages: {
      prefetch: true,
      query: pages,
      update(data) {
        const items = data.pages.edges; // Format the data
        const currentSlug = this.$route.params.slug; // Get the slug of the current page

        // 🕵️‍♂Search for the page content based on slug
        const filteredItem = items.filter(function(item) {
          return item.node.slug == currentSlug;
        });
        // ↩️ Return the data
        return filteredItem;
      },
    },
  },
  computed: {
    componentSVG() {
      const name = this.item.node.acfFlex.flex;
      return () => import(`@/components/elements/flex/${name}`);
    },
  },
};
</script>
