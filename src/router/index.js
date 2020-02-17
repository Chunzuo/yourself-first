import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/home/Index.vue")
  },
  {
    path: "/aboutme",
    component: () => import("../views/aboutme/Index.vue")
  },
  {
    path: "/services",
    component: () => import("../views/services/Index.vue")
  },
  {
    path: "/contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/testimonial",
    component: () => import("../views/Testimonial.vue")
  },
  {
    path: "/faq",
    component: () => import("../views/Faq.vue")
  },
  {
    path: "/blog",
    component: () => import("../views/blog/BlogList.vue")
  },
  {
    path: "/blog/:id",
    component: () => import("../views/blog/BlogDetail.vue")
  },
  {
    path: "/store",
    component: () => import("../views/product/ProductList.vue")
  },
  {
    path: "/store/:id",
    component: () => import("../views/product/ProductDetail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
