<template>
    <div class="blog-post-detail" v-if="post">
    <h1 class="post-title">{{ post.title }}</h1>
    <!-- <div class="post-meta">
            <span class="post-date">{{ formatDate(post.date) }}</span>
            <span class="post-author">{{ post.author }}</span>
    </div> -->
    <div class="post-content" v-html="post.content"></div>
        <!-- Add more sections as needed -->
    </div>
    <div v-else>
        Loading post...
        <!-- Or show a message if the post is not found -->
    </div>
</template>

<script>
import ApiService from '@/services/ApiService'

export default {
  data () {
    return {
      post: null
    }
  },
  async created () {
    try {
      const postId = this.$route.params.id // Access the ID from the route parameter
      console.log('Fetching post with ID:', postId) // Log the ID
      const response = await ApiService.getPostById(postId)
      this.post = response.data
    } catch (error) {
      console.error('Error fetching post:', error)
    }
  }
}
</script>

<style scoped>
/* Add CSS styles here */
</style>
