<template>
  <AppHeader />
  <BlogPosts />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import BlogPosts from './components/BlogPosts.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    BlogPosts
  }
}
</script>

<style>
  #app {
    font-family: 'HelveticaNeue-Medium', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    max-width: 1200px; /* Adjust based on your desired maximum width */
    margin: 0 auto; /* Center the content horizontally */
    padding: 20px; /* Whitespace from the sides */
  }
  /* Global styles */
  body, html {
    margin: 0;
    padding: 0;
    background-color: #FFFFFF; /* Or any other preferred background color */
    box-sizing: border-box;
  }
</style>
