import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../non_member_views/HomeView.vue'
import EventView from '../non_member_views/EventView.vue'
import BlogView from '../non_member_views/BlogView.vue'
import SupportView from '../non_member_views/SupportView.vue'
import AboutView from '../non_member_views/AboutView.vue'
import RegisterView from '../non_member_views/RegisterView.vue'
import TestView from '../non_member_views/TestView'
import MemberHomeView from '../member_views/MemberHomeView.vue'
import EventRegisterView from '../components/event_view_components/EventRegisterView.vue'
// Dashboard utilities
import DashboardView from '../member_views/DashboardView.vue'
import UserInfoView from '../components/dashboard_view_component/UserInfoView.vue'
import UserEventView from '../components/dashboard_view_component/UserEventView.vue'
import ResourcesView from '../components/dashboard_view_component/ResourcesView.vue'
import MockInterviewView from '../components/dashboard_view_component/MockInterviewView.vue'
import NominateView from '../components/dashboard_view_component/NominateView.vue'
import ScheduleView from '../components/dashboard_view_component/ScheduleView.vue'
import HistoryView from '../components/dashboard_view_component/HistoryView.vue'
import EventPostView from '../components/dashboard_view_component/EventPostView.vue'
import EventManageView from '../components/dashboard_view_component/EventManageView.vue'
import NominationsView from '../components/dashboard_view_component/NominationsView.vue'

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
    path: '/events',
    name: 'events',
    component: EventView,
  },
  // Paths for event utilities
  {
    path: '/events/eventRegister',
    name: 'eventRegister',
    component: EventRegisterView,
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
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  // Paths for dashboard utilities
  // Member utilities
  {
    path: '/dashboard/userInfo',
    name: 'userInfo',
    component: UserInfoView
  },
  {
    path: '/dashboard/userEvents',
    name: 'userEvents',
    component: UserEventView
  },
  {
    path: '/dashboard/resources',
    name: 'resources',
    component: ResourcesView
  },
  {
    path: '/dashboard/mockInterview',
    name: 'mockInterview',
    component: MockInterviewView
  },
  {
    path: '/dashboard/nominate',
    name: 'nominate',
    component: NominateView
  },
  // Interview committee utilities
  {
    path: '/dashboard/schedule',
    name: 'schedule',
    component: ScheduleView
  },
  {
    path: '/dashboard/history',
    name: 'history',
    component: HistoryView
  },
  // Activity committee utilities
  {
    path: '/dashboard/postEvent',
    name: 'postEvent',
    component: EventPostView
  },
  {
    path: '/dashboard/manageEvent',
    name: 'manageEvent',
    component: EventManageView
  },
  {
    path: '/dashboard/nominations',
    name: 'nominations',
    component: NominationsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
