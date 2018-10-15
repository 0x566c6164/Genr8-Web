import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Homepage.vue";
import Apps from "./views/Apps.vue";
import ICOs from "./views/ICOs.vue";
import Token from "./views/Token.vue";

Vue.use(Router);


export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "mainPage",
      component: Home
    },
    {
      path: "/home/",
      name: "factory",
      component: Home
    },
    {
      // path: "/factory/apps:name",
      path: "/apps/",
      name: "apps",
      component: Apps
    },
    {
      path: "/icos/",
      name: "icos",
      component: ICOs
    },
    {
      path: "/ico/:id",
      name: "icos",
      component: ICOs
    },
    { // Must be replaced to a seperate web page.
      // /Tokenizer/
      path: "/token/:id",
      name: "token",
      component: Token
    }
  ]
});
