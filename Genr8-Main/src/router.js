import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Home from "./views/Home.vue";
import Discover from "./views/Discover.vue";
import Announcements from "./views/Announcements.vue";


Vue.use(Router);


export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        },
        {
          path: "/discover/",
          name: "discover",
          component: Discover
        },
        {
          path: "/announcements/",
          name: "announcements",
          component: Announcements
        }
      ]
    }
  ]
});
