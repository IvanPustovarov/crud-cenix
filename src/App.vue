<template>
  <div id="app">
    <PostsList />
  </div>
</template>

<script>
import PostsList from "./components/PostsList.vue";
export default {
  name: "App",
  components: {
    PostsList,
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
