<template>
  <div id="app">
    <PostsList />
    <v-pagination v-model="page" class="my-4" :length="15"></v-pagination>
  </div>
</template>

<script>
import PostsList from "./components/PostsList.vue";
export default {
  name: "App",
  components: {
    PostsList,
  },
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
