import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    title?: string
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/HomeView.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/pre-session',
    name: 'pre-session',
    component: () => import('@/views/pre-session/PreSession.vue')
  },
  {
    path: '/post-session',
    name: 'post-session',
    component: () => import('@/views/post-session/PostSession.vue')  // Fixed: was using PreSession
  },
  {
    path: '/cost-split',
    name: 'cost-split',
    component: () => import('@/views/cost-split/CostSplit.vue')
  },
  {
    path: '/create-session',
    name: 'create-session',
    component: () => import('@/views/create-session/CreateSession.vue')
  },
  {
    path: '/register-player',
    name: 'register-player',
    component: () => import('@/views/register-player/RegisterPlayer.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Badminton App'
  next()
})

export default router
