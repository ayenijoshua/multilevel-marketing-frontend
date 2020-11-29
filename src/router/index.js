import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "./auth";
import User from "./user-router";
//import { vm } from "../main";

Vue.use(VueRouter);

const routes = [
  ...Auth,
  ...User,

  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "*"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

// router.beforeEach((to, from, next) => {
//   const user = localStorage.getItem("user");
//   const admin = localStorage.getItem("admin");

//   if (to.matched.some(record => record.meta.auth)) {
//     if (to.matched.some(record => record.meta.is_admin)) {
//       if (!admin) {
//         next({ name: "admin-login" });
//       } else {
//         next();
//       }
//     } else {
//       if (!user) {
//         next({ name: "login" });
//       }
//       next();
//       return;
//     }
//   }
//   next();
// });

export default router;
