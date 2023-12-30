import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import BlogPostDetail from '../components/BlogPostDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/post/:id',
    name: 'BlogPostDetail',
    component: BlogPostDetail,
    props: true
  }
  // other routes...
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
