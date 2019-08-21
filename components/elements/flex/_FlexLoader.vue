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
      const regex = /.+?_Acfflex_Flex_/gm;
      // const fileName = rawFileName.replace("Dienst_Acfflex_Flex_", "");
      const fileName = rawFileName.replace(regex, "");

      return () => import(`@/components/elements/flex/${fileName}`);
    },
  },
};
</script>