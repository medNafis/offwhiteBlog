<template>
    <div class="blog-posts">
        <div class="post draw-border" v-for="post in posts" :key="post.id">
            <router-link :to="{ name: 'BlogPostDetail', params: { id: post.id } }" class="post-link">
                <img :src="post.imageUrl" :alt="post.title" class="post_image"/>
                <h2 class="post-title">{{ post.title }}</h2>
                <p class="post-subtitle">{{ post.subtitle }}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
import testimg1 from '@/assets/testimg1.jpg'
import testimg2 from '@/assets/testimg2.jpg'
import testimg3 from '@/assets/testimg3.jpg'
import testimg4 from '@/assets/testimg4.jpg'

export default {
  data () {
    return {
      posts: [
        { id: 1, title: 'Title 1', subtitle: 'Subtitle ', imageUrl: testimg1 },
        { id: 2, title: 'Title 2', subtitle: 'Subtitle ', imageUrl: testimg2 },
        { id: 3, title: 'Title 3', subtitle: 'Subtitle ', imageUrl: testimg3 },
        { id: 4, title: 'Title 4', subtitle: 'Subtitle ', imageUrl: testimg4 }]
    }
  }

}

</script>

<style scoped lang="scss">
    .blog-posts {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 2 columns */
        gap: 20px;
    }

    .post {
        background: #fff;
        padding: 15px;
        width: 300px; /* Square width */
        height: 300px; /* Square height */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    .post_image {
        width: 100%; /* Full width of the container */
        height: 200px; /* Maintain aspect ratio */
        object-fit: cover; /* Ensures the image is scaled properly within its container */
        border-radius: 5px; /* Optional: for rounded corners */
    }

    .post-title {
        font-family: 'HelveticaNeue-Medium', sans-serif;
        margin-top: 20px;
        margin-bottom: 0; /* Reduce the bottom margin */
        font-size: 1.5em;
        text-align: center;
        color: #000000;
    }

    .post-subtitle {
        font-family: 'HelveticaNeue-Regular', sans-serif;
        font-size: 1em;
        color: #000000;
        text-align: center;
        margin-top: 10px; /* Reduce the top margin */
    }
    .post-link {
        text-decoration: none; /* Removes underline from links */
        color: inherit; /* Keeps text color consistent */
        display: block; /* Ensures the link takes up the full container space */
    }

    @mixin btn-border-drawing($color: #ccc, $hover: black, $width: 2px, $vertical: top, $horizontal: left, $duration: 0.5s) {
    box-shadow: inset 0 0 0 $width $color;
    transition: box-shadow $duration $duration/3; // Apply transition to box-shadow only
    position: relative;

    &::before,
    &::after {
        border: 0 solid transparent;
        box-sizing: border-box;
        content: '';
        pointer-events: none;
        position: absolute;
        width: 0; height: 0;

        #{$vertical}: 0;
        #{$horizontal}: 0;
    }

    &::before {
        $h-side: if($horizontal == 'left', 'right', 'left');

        border-#{$vertical}-width: $width;
        border-#{$h-side}-width: $width;
    }

    &::after {
        $v-side: if($vertical == 'top', 'bottom', 'top');

        border-#{$v-side}-width: $width;
        border-#{$horizontal}-width: $width;
    }

    &:hover {
        &::before,
        &::after {
        border-color: $hover;
        transition: border-color 0s, width $duration, height $duration;
        width: 100%;
        height: 100%;
        }

        &::before { transition-delay: 0s, 0s, $duration; }

        &::after { transition-delay: 0s, $duration, 0s; }
    }
    }

    .draw-border {
        @include btn-border-drawing(#FFFFFF, #000000, 1px, top, left);
    }

    @media (max-width: 768px) {
        .blog-posts {
            grid-template-columns: 1fr; /* Single column on small screens */
        }
    }
</style>
