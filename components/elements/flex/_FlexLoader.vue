<template>
  <component :is="componentFlex" :item="item"></component>
</template>

<script>
export default {
  props: ["item"],
  name: "FlexLoader",
  data() {
    return {};
  }, // End data
  computed: {
    componentFlex() {
      const rawFileName = this.item.__typename;
      const fileName = rawFileName.replace("Page_Acfflex_Flex_", "");

      return () => import(`@/components/elements/flex/${fileName}`);
    },
  },
};
</script>