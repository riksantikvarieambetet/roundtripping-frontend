import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { guest: true }
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/institution/:id",
      name: "institution",
      component: () =>
        import(/* webpackChunkName: "institution" */ "./views/Institution.vue"),
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("jwt");
  const isGuest = to.matched.some(record => record.meta.guest);
  const isAuth = to.matched.some(record => record.meta.requiresAuth);

  if (isAuth && token === null) {
    next({
      path: "/login",
      params: { nextUrl: to.fullPath }
    });
  } else if (isGuest) {
    if (token == null) {
      next();
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
