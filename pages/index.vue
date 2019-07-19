<template>
  <div>
    <RenameMe></RenameMe>
    <ul>
      <li v-for="(item, index) in pages" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import pages from "~/apollo/queries/pages";
// Compontents
import RenameMe from "~/components/RenameMe.vue";

export default {
  data() {
    return {};
  },
  components: {
    RenameMe,
  },
  apollo: {
    pages: {
      prefetch: true,
      query: pages,
    },
  },
  // mounted() {
  //   console.warn(this.$apollo.queries.pages);
  // },
};
</script>

<style></style>

