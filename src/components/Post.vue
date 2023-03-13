<template>
  <div class="post-container">
    {{ post.id }}
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: {
    post: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.post-container {
  min-height: 100px;
  max-width: 300px;
  border-radius: 5px;
  background-color: aqua;
}
</style>
