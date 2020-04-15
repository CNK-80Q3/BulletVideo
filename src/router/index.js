import Vue from "vue";
import VueRouter from "vue-router";
import Home from "views/home/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    reduect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
