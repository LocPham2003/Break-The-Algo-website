import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CareerView from '../views/CareerView.vue'
import BlogView from '../views/BlogView.vue'
import SupportView from '../views/SupportView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
import TestView from '../views/TestView'
const routes = [  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/career',
    name: 'career',
    component: CareerView,
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
  },
  {
    path: '/support',
    name: 'support',
    component: SupportView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  }, 
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
