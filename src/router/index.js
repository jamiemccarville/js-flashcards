import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/basics",
    name: "basics",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Basics.vue")
  },
  {
    path: "/functions",
    name: "functions",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Functions.vue")
  },
  {
    path: "/control-flow",
    name: "control-flow",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ControlFlow.vue")
  },
  {
    path: "*", component: () =>
      import( /* webpackChunkName: "about" */ "../components/404.vue")
  }

];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
