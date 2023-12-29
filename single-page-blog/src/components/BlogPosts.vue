<template>
    <div class="blog-posts">
        <div class="post draw-border" v-for="post in posts" :key="post.id">
            <img :src="post.imageUrl" :alt="post.title" class="post_image"/>
            <h2 class="post-title">{{ post.title }}</h2>
            <p class="post-subtitle">{{ post.subtitle }}</p>
        </div>
    </div>
</template>

<script>
    import testimg1 from '@/assets/testimg1.jpg';
    import testimg2 from '@/assets/testimg2.jpg';

    export default{
        data() {
            return {
                posts: [
                { id: 1, title: 'Title ', subtitle: 'Subtitle ', imageUrl: testimg1},
                { id: 2, title: 'Title ', subtitle: 'Subtitle ', imageUrl: testimg2},
                { id: 3, title: 'Title ', subtitle: 'Subtitle ', imageUrl: testimg1},
                { id: 4, title: 'Title ', subtitle: 'Subtitle ', imageUrl: testimg2},                ]
            }
            }
            
        }
    
</script>

<style scoped lang="scss">
    .blog-posts {
        display: grid;
        grid-template-columns: repeat(2,1fr); /* 2 columns */
        gap: 20px;
    }

    .post {
        background: #fff;
        padding: 15px;
    }

    .post_image {
        width: 182px; /* Fixed width */
        height: 137px; /* Fixed height */
        border-bottom: 1px solid rgba(154, 201, 241, 0.56); /* Border style */
        margin: 0 auto; /* Center the image */
        padding-top: 15px;
        padding-left: 24px;
        padding-right: 23px;
        display: block; /* Ensure the image is a block-level element */
        object-fit: cover; /* Adjust how the image fits within its box */
    }

    .post-title {
        margin-top: 10px;
        font-size: 1.5em;
    }

    .post-subtitle {
        font-size: 1em;
        color: #000000;
    }
    @mixin btn-border-drawing($color: #ccc, $hover: black, $width: 2px, $vertical: top, $horizontal: left, $duration: 0.25s) {
  box-shadow: inset 0 0 0 $width $color;
  color: $color;
  transition: color $duration $duration/3;
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
    color: $hover;
    
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
  @include btn-border-drawing(#FFFFFF, #000000, 4px, bottom, right);
}

    

    @media (max-width: 768px) {
        .blog-posts {
            grid-template-columns: 1fr; /* Single column on small screens */
        }
    }
</style>

