import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/institution/:id",
      name: "institution",
      component: () =>
        import(/* webpackChunkName: "institution" */ "./views/Institution.vue"),
    },
    {
      path: "/collection/:institutionId/:id",
      name: "collection",
      component: () =>
        import(/* webpackChunkName: "collection" */ "./views/Collection.vue"),
    },
    {
      path: "/translations/:id",
      name: "translations",
      component: () =>
        import(/* webpackChunkName: "translation" */ "./views/Translation.vue"),
    }
  ]
});

export default router;
