import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Homepage.vue";
import Factory from "./views/Factory-Home.vue";
import Create from "./views/Factory-Create.vue";

Vue.use(Router);


export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/factory/",
      name: "factory",
      component: Factory
    },
    {
      path: "/factory/create",
      name: "create",
      component: Create
    }
  ]
});
