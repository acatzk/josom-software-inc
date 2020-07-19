import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import('@/views/Welcome')
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About")
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
