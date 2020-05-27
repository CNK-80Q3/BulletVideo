import Vue from "vue";
import VueRouter from "vue-router";
import Home from "views/home/Home";
import Regist from "views/regist/Regist";
import Login from "views/login/Login";
import Contribution from "views/contribution/Contribution";
import Watch from "views/watch/Watch";
import History from "views/history/History";
import WatchHistory from "views/history/childComps/watch-history/WatchHistory";
import SearchHistory from "views/history/childComps/search-history/SearchHistory";
import CommentHistory from "views/history/childComps/comment-history/CommentHistory";

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
    path: "/regist",
    name: "regist",
    component: Regist
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },

  {
    path: "/contribution",
    name: "contribution",
    component: Contribution
  },
  {
    path: "/watch/:id",
    name: "watch",
    component: Watch
  },
  {
    path: "/history",
    component: History,
    children: [
      {
        path: "/history/watch-history",
        redirect: "watch-history/:id"
      },
      {
        path: "watch-history/:id",
        name: "watch-history",
        component: WatchHistory
      },
      {
        path: "search-history/:id",
        name: "search-history",
        component: SearchHistory
      },
      {
        path: "comment-history/:id",
        name: "comment-history",
        component: CommentHistory
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
