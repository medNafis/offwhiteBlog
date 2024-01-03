<template>
  <AppHeader />
  <router-view />
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
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
  a.router-link-active, a.router-link-exact-active {
    text-decoration: none; /* Removes underline for all router links */
  }
  /* Global CSS (e.g., in App.vue or a separate global CSS file) */
  a, a:visited {
    color: inherit; /* Inherits the color from the parent element */
    text-decoration: none; /* Removes underline */
  }

  a:hover {
    color: inherit; /* Optional: Set hover color if needed */
    text-decoration: none; /* Optional: Set hover text-decoration if needed */
  }

</style>
