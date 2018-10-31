import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Homepage.vue";
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
      name: "main",
      component: Main,
      children: [
        {
          path: "/apps/",
          name: "apps",
          component: Apps
        },
        {
          path: "/icos/",
          name: "icos",
          component: ICOs
        }
      ]
    },
    {
      path: "/ico/:id",
      name: "icos",
      component: ICOs
    },
    {
      path: "/token/:id",
      name: "token",
      component: Token
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
