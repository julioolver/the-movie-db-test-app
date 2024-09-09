/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import MovieIndex from "@/modules/movie/view/Index.vue";
import MoviesUser from "@/modules/movie/view/MoviesUser.vue";
import AuthIndex from "@/modules/auth/view/Index.vue";

import { createRouter, createWebHistory } from "vue-router/auto";
import Guard from "@/services/middleware";
import BlankPage from "@/components/layout/BlankLayout.vue";
// import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: MovieIndex,
      beforeEnter: Guard.redirectIfNotAuthenticated,
    },
    {
      path: "/movies",
      name: "Movies",
      component: MovieIndex,
      beforeEnter: Guard.redirectIfNotAuthenticated,
    },
    {
      path: "/user/movies",
      name: "UserMovies",
      component: MoviesUser,
      beforeEnter: Guard.redirectIfNotAuthenticated,
    },
    {
      path: "/login",
      component: BlankPage,
      children: [
        {
          name: "Login",
          path: "",
          component: AuthIndex,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Se o usuário clicou em "voltar", use a posição salva
      return savedPosition;
    } else {
      // Caso contrário, sempre role para o topo
      return { top: 0 };
    }
  },
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
