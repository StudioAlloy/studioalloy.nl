<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Pagina niet gevonden</h1>
    <h1 v-else>Er ging iets mis</h1>
    <nuxt-link to="/">Terug naar home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"],
  // layout: "blog", // you can set a custom layout for the error page
};
</script>