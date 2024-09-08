/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import MovieIndex from '@/modules/movie/view/Index.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import Guard from '@/services/middleware'
import BlankPage from '@/components/layout/BlankPage.vue'
// import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MovieIndex
    },
    {
      path: '/movies',
      name: 'Movies',
      component: MovieIndex,
      beforeEnter: Guard.redirectIfNotAuthenticated
    },
    {
      path: '/login',
      name: 'pages-login',
      component: BlankPage,
      children: [
        {
          path: '',
          component: MovieIndex,
        },
      ]
    },
  ]
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
