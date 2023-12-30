<template>
    <header class="app-header">
        <nav class="nav-links" >
            <router-link to="/about" class="header-link nav-item" :class="{ 'flipped': flippedLinks.about }"
              @mouseover="flipLink('about')" >About</router-link>
            <a href="https://twitter.com/YourTwitterHandle" class="header-link nav-item" target="_blank" rel="noopener noreferrer" :class="{ 'flipped': flippedLinks.twitter }"
              @mouseover="flipLink('twitter')" >Twitter</a>
        </nav>

        <div class="logo" >
            <div class="logo-grid">
                <div class="logo-item logoText">
                    <router-link to="/">logo</router-link>
                </div>
                <div class="logo-item noun" >/ noun /</div>
                <div class="logo-item logoDef">
                    picture a company <br> uses as its symbol
                </div>
            </div>
        </div>
        <div class="blog-name">
            <router-link to="/">Blog</router-link>
            <div class="tm">™</div>
        </div>
    </header>
</template>

<script>
export default {
  data () {
    return {
      flippedLinks: {
        about: false,
        twitter: false
      }
    }
  },
  methods: {
    flipLink (link) {
      if (!this.flippedLinks[link]) {
        this.flippedLinks[link] = true
      }
    }
  }
}
</script>

<style scoped>
/* Define CSS variables for consistent spacing */
    :root {
    --spacing-xs: 0.25rem; /* 4px if 1rem = 16px */
    --spacing-sm: 0.5rem;  /* 8px */
    --spacing-md: 1rem;    /* 16px */
    --spacing-lg: 2rem;    /* 32px */
    --spacing-xl: 4rem;    /* 64px */
    }
  /* Header container styles */
    .app-header {
        background-color: white; /* Adjust to your preferred background color */
        color: black;
        padding: var(--spacing-md);  /* Added horizontal padding */
        display: flex;
        align-items: center;
        flex-direction: column;
        font-family: 'HelveticaNeue-Bold', sans-serif;
        margin-bottom: 60px; /* Adjust the value as needed */
    }

  /* Logo and blog name styles */
    .logo,
    .blog-name {
        padding: var(--spacing-lg); /* Spacing around logo and blog name */
    }

    .nav-links {
        display: flex;
        justify-content: flex-end;
        width: 100%; /* Full width to push content to the right */
        margin-bottom: var(--spacing-md); /* Spacing between nav-links and title-container */
    }

    /* Added styles for spacing between navigation items */
    .nav-item:not(:first-child) {
        margin: 0 3rem; /* Add left margin to all nav items except the first */
    }

    .logo {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        text-align: left;
    }

    .logo-grid {
        display: grid;
        grid-template-rows: auto auto auto; /* 3 equal columns */
        gap: var(--spacing-xs); /* Adjust gap as needed */
    }

    .logoText {
        font-size: 1.5rem;
    }
    .noun{
        font-size: 0.8rem;
    }

    .logoDef {
        font-style: italic;
        font-family: 'Helvetica Neue Bold', sans-serif; /* Replace with your font name */
    }

    .blog-name {
        font-size: 3rem;
        display: flex;
    }

    .blog-name .tm {
        font-size: 0.6em; /* Smaller font size for the trademark symbol */
        font-family: 'Helvetica Neue Bold', sans-serif; /* Replace with your font name */
    }
    .header-link {
        text-decoration: none;
        color: #000; /* Replace with your preferred color */
        --b: 0.1em;   /* the thickness of the line */
        --c: #000; /* the color */

        color: #0000;
        padding-block: var(--b);
        background:
            linear-gradient(var(--c) 50%,#000 0) 0% calc(100% - var(--_p,0%))/100% 200%,
            linear-gradient(var(--c) 0 0) 0% var(--_p,0%)/var(--_p,0%) var(--b) no-repeat;
        -webkit-background-clip: text,padding-box;
                background-clip: text,padding-box;
        transition: .4s var(--_s,0s) linear,background-size .4s calc(.4s - var(--_s,0s));
        transform: rotateX(180deg); /* Apply upside down transformation */
    }

    .header-link:hover {
        --_p: 100%;
        --_s: .4s;
    }

    .header-link.flipped {
        transform: rotateX(0deg); /* Apply upside down transformation */
    }

</style>
