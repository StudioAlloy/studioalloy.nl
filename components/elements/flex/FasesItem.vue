<template>
  <div class="flex-FasesItem">
    <component :is="componentSVG"></component>
    <h3>{{item.title}}</h3>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "FasesItem",
  data() {
    return {};
  },
  computed: {
    componentSVG() {
      const name = this.item.acfFases.illustrationName;
      return () => import(`@/components/elements/flex/FasesItemSVG${name}`);
    },
  },
};
</script>