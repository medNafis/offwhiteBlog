<template>
    <div class="home">
      <AppHeader />
      <BlogPosts />
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import BlogPosts from '../components/BlogPosts.vue'

export default {
  components: {
    AppHeader,
    BlogPosts
  }
}
</script>
