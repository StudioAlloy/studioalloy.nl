<template>
  <div class="flex-CallToAction">
    <div class="alloy-cards">
      <div class="inner">
        <div class="alloy-image">
          <img src="~/assets/images/logo-studio-alloy.svg" alt="Logo Studio Alloy" class="alloy-logo">
        </div>
        <div class="alloy-content">

          <p>Stuur ons een mail</p>
          <h2>hello@stutdioalloy.nl</h2>
          <p>Stuur ons een mail</p>
          <h2>hello@stutdioalloy.nl</h2>
          <nuxt-link to="/contact" class="btn btn--alt">Neem contact op</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: "CallToAction",
  data() {
    return {};
  }, // End data
};
</script>