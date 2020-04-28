import Vue from "vue";
import VueRouter from "vue-router";
import Home from "views/home/Home";
import Contribution from "views/contribution/Contribution";
import Watch from "views/watch/Watch";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/contribution",
    name: "contribution",
    component: Contribution
  },
  {
    path: "/watch",
    name: "watch",
    component: Watch
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
