<template>
    <div class="blog-post-detail" v-if="post">
      <header class="post-header">
        <h1 class="post-title">{{ post.title }}</h1>
        <img v-if="post.imageUrl" :src="post.imageUrl" :alt="post.title" class="post-image"/>
        <span class="post-date">{{ formatDate(post.date) }}</span>
      </header>
      <div class="post-content" v-html="post.content"></div>
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
  methods: {
    formatDate (date) {
      // Implement date formatting
      return new Date(date).toLocaleDateString()
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
  .post-header {
    /* Styles for the header container */
    text-align: center; /* Example alignment */
    margin-bottom: 2em;
    margin-left: -15px;
  }

  .post-title {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  .post-image {
    max-width: 100%;  /* Ensures image is not wider than its container */
    max-height: 400px; /* Example maximum height */
    height: auto;      /* Maintain aspect ratio */
    width: auto;       /* Maintain aspect ratio */
    display: block;    /* Remove inline element layout */
    margin: 0 auto;    /* Center the image */
}

  .post-date {
    display: block; /* To ensure it starts on a new line */
    color: #666;
    font-style: italic;
    margin-bottom: 1em;
  }

  .post-content {
    margin-top: 1em;
    margin-left: -15px;
  }
  @media (max-width: 768px) {
    .post-image {
      max-height: 300px; /* Smaller height for mobile devices */
    }
  }

  @media (max-width: 480px) {
    .post-image {
      max-height: 200px; /* Even smaller height for very small devices */
    }
  }
</style>
