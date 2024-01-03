<template>
    <div class="blog-post-detail" v-if="post">
    <h1 class="post-title">{{ post.title }}</h1>
    <div class="post-meta">
            <span class="post-date">{{ formatDate(post.date) }}</span>
            <span class="post-author">{{ post.author }}</span>
    </div>
    <div class="post-content" v-html="post.content"></div>
        <!-- Add more sections as needed -->
    </div>
    <div v-else>
        Loading post...
        <!-- Or show a message if the post is not found -->
    </div>
</template>

<script>
export default {
  props: ['id'], // Receive the 'id' prop
  data () {
    return {
      post: null // Placeholder for fetched post data
    }
  },
  // Lifecycle hook to fetch post data
  mounted () {
    this.fetchPost() // Fetch the post data using the post ID (from route params or state)},
  },
  methods: {
    fetchPost () {
      // const postId = this.$route.params.id
      // Fetch the post data using postId. This could be an API call or local data retrieval.
      // For example: axios.get(`/api/posts/${postId}`).then(response => { this.post = response.data; });    }
    }
  }
}
</script>

<style scoped>
/* Add CSS styles here */
</style>
