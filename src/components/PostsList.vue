<template>
  <div class="posts-list-container">
    <Post v-for="post in postList" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: "PostsList",
  computed: {
    postList() {
      return this.$store.getters.getPosts;
    },
  },
  components: {
    Post,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.posts-list-container {
  margin: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
