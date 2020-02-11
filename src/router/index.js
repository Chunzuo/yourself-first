import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/Index.vue")
  },
  {
    path: "/aboutme",
    name: "aboutme",
    component: () => import("../views/aboutme/Index.vue")
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/services/Index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
