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
    component: () =>
      import(/* webpackChunkName: "basics" */ "../views/Basics.vue")
  },
  {
    path: "/functions",
    name: "functions",
    component: () =>
      import(/* webpackChunkName: "functions" */ "../views/Functions.vue")
  },
  {
    path: "/control-flow",
    name: "control-flow",
    component: () =>
      import(/* webpackChunkName: "controlflow" */ "../views/ControlFlow.vue")
  },
  {
    path: "*", component: () =>
      import( /* webpackChunkName: "notfound" */ "../components/404.vue")
  }

];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
