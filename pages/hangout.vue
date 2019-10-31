<template>
  <main>
    <h1>Hangout</h1>
    <p>Redirect to <a :href="this.url">{{this.url}}</a></p>
    <a :href="this.url" class="btn">Open Hangout</a>
  </main>
</template>

<script>
export default {
  title: "Hangout",
  data() {
    return {
      url: "https://hangouts.google.com/call/WqrqlgDA8vfQV1_NQ7XFAEEI",
    };
  },
  created() {
    if (process.client) {
      window.location.replace(this.url);
    }
  },
};
</script>
