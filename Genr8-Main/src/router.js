import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Home from "./views/Home.vue";
import Create from "./views/Create.vue";
import Erc from "./views/ERC.vue";
import Ico from "./views/ICO.vue";


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
          path: "/create/",
          name: "create",
          component: Create
        },
        {
          path: "erc",
          name: "erc",
          component: Erc
        },
        {
          path: "ico",
          name: "ico",
          component: Ico
        }
      ]
    }
  ]
});

// const router = new VueRouter({
//   routes: [
//     { path: '/user/:id', component: User,
//       children: [
//         {
//           // UserProfile will be rendered inside User's <router-view>
//           // when /user/:id/profile is matched
//           path: 'profile',
//           component: UserProfile
//         },
//         {
//           // UserPosts will be rendered inside User's <router-view>
//           // when /user/:id/posts is matched
//           path: 'posts',
//           component: UserPosts
//         }
//       ]
//     }
//   ]
// })
