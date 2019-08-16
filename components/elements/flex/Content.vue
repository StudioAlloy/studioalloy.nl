<template>
  <section class="flex-Content">
    <div class="container--medium">
      <div class="inner">
        <div v-html="item.content"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["item"],
  name: "FlexContent",
  data() {
    return {};
  }, // End data
};
</script>