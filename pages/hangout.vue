<template>
  <section class="alloy-full">
    <div class="inner centered">
      <h1>Hangout</h1>
      <p>Redirect to <a :href="this.url">{{this.url}}</a></p>
      <a :href="this.url" class="btn">Open Hangout</a>
    </div>
  </section>
</template>

<script>
export default {
  title: "Hangout",
  data() {
    return {
      url: "https://meet.google.com/cge-jujc-swa",
    };
  },
  created() {
    if (process.client) {
      const queries = this.$route.query;

      if (Object.keys(queries).length > 0) {
        console.warn(JSON.stringify(queries));

        var str = Object.keys(queries)
          .map(function(key) {
            return "" + key + "=" + queries[key]; // line break for wrapping only
          })
          .join("&");

        this.url = `${this.url}?${str}`;
      } else {
        console.warn("nno qeureis");
      }
      window.location.replace(this.url);
    }
  },
};
</script>
