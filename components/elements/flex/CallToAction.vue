<template>
  <section class="flex-CallToAction">
    <div class="alloy-cards">
      <div class="inner">
        <div class="alloy-image">
          <img src="~/assets/images/logo-studio-alloy.svg" alt="Logo Studio Alloy" class="alloy-logo">
        </div>
        <div class="alloy-content">
          <div class="alloy-text" v-html="item.content"></div>

          <div class="alloy-btn-group" v-if="item.button !== null">
            <nuxt-link :to="item.button.url" class="btn btn--alt">{{item.button.title}}</nuxt-link>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["item"],
  name: "CallToAction",
  data() {
    return {};
  }, // End data
};
</script>