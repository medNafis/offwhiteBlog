import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import BlogPostDetail from '../components/BlogPostDetail.vue'
import BlogPosts from '../components/BlogPosts.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    children: [
      {
        path: '',
        name: 'BlogPosts',
        component: BlogPosts
      },
      {
        path: 'posts/:id',
        name: 'BlogPostDetail',
        component: BlogPostDetail,
        props: true
      }
    ]
  }
  // other routes...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
