<template>
    <div class="blog-post-detail">
      <h1>{{ post.title }}</h1>
      <p>{{ post.date }}</p>
      <img :src="post.imageUrl" alt="">
      <div v-html="post.content"></div>
      <!-- Add more post details as needed -->
    </div>
</template>
  
<script>
export default {
data() {
    return {
    post: {} // Post data will be fetched based on the post ID
    };
},
// Lifecycle hook to fetch post data
mounted() {
    // Fetch the post data using the post ID (from route params or state)
}
};
</script>

<style scoped>
/* Your CSS here */
</style>
  