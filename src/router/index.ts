import { createRouter, createWebHistory } from 'vue-router'
import PrayerView from '@/views/prayerView.vue'
import BoardView from '@/views/boardView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: PrayerView },
    { path: '/login', component: LoginView },
    { path: '/signup', component: SignUpView },
    { path: '/notFound', component: NotFoundView },
    { path: '/board', component: BoardView, meta: { requiresAuth: true } },
    { path: '/:catchAll(.*)', redirect: '/notFound' },
  ],
})

router.beforeEach((to, from, next) => {
  if(to.path == '/board' && to.meta.requiresAuth) {
    next('/login');
  }
  else {
    next()
  }
})

export default router
