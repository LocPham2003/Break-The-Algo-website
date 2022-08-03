import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../non_member_views/HomeView.vue'
import CareerView from '../non_member_views/CareerView.vue'
import BlogView from '../non_member_views/BlogView.vue'
import SupportView from '../non_member_views/SupportView.vue'
import AboutView from '../non_member_views/AboutView.vue'
import RegisterView from '../non_member_views/RegisterView.vue'
import TestView from '../non_member_views/TestView'
import MemberHomeView from '../member_views/MemberHomeView.vue'
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
  },
  {
    path: '/memberHome',
    name: 'memberHome',
    component: MemberHomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
