<template>
  <RenameMe></RenameMe>
</template>

<script>
import RenameMe from '~/components/RenameMe.vue'

export default {
  data() {
    return {
    };
  },
  components: {
    RenameMe
  },
  // More info at https://css-tricks.com/methods-computed-and-watchers-in-vue-js/
  // computed: {}, // Data with computed logic
  // methods: {}, // Are functions run on user actions example @click or on lifecycle hooks
  // watch: {}, // Watchs data, needs to have the same name as the data that is being watched


  // // Lifecycle hook. Check for more https://vuejs.org/v2/guide/instance.html or https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
  // beforeCreate() {}, 
  // created() {}, // Each time the app is created (once?)
  // beforeMount() {}, 
  // mounted() {}, // Be sure all elements are drawn. Here you can use normal Javascript to interact with your page
  // beforeUpdate() {}, 
  // update() {}, 
  // activated() {},
  // deactivated() {},
  // beforeDestroy() {},
  // destroyed() {},
  // errorCaptured() {},
  // async mounted () {
  //     // this.$axios.setHeader('Authorization', 'Bearer f5125aed0f383716e33f9dedf5715b9ace5c3825');

  //     // await this.$axios
  //     //   .get('')
  //     //   .then(response => {
  //     //     // this.$store.commit('add', resultItems);
  //     //   })
  //     //   .catch(function(error) {
  //     //     this.$store.commit('error', error);
  //     //     // console.log(error);
  //     //   });
  //   },
}
</script>

<style></style>

