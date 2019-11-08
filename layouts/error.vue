<template>
  <section class="alloy-full alloy-404">
    <div class="inner centered">
      <h1 v-if="error.statusCode === 404">Pagina niet gevonden</h1>
      <h1 v-else>Er ging iets mis</h1>
      <nuxt-link class="btn btn--alt" to="/">Terug naar home</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["error"],
};
</script>