<template>
  <v-app>
    <v-toolbar>
      <img style="width: 50px;" src="../assets/logo.png" alt="">
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>Home</v-btn>
      <v-btn flat>Discover</v-btn>
      <v-btn flat>Announcement</v-btn>
      <v-btn flat>Settings</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat>Connect to MetaMask</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>

export default {
  name: "Homepage",
  methods: {
    toggleOff: function(){
            $()
          // some code to filter users
        }
  }
};

</script>

<style lang="scss">
// #f89631

$color-light: #ededee;
$color-gray: #a69ca1;
$color-yellow: #e6ae49;
$color-orange: #f89631;
$color-purple: #2f283a;
$color-purple2: #27212f;
$color-border: #342e3c;
$color-darkpurple: #1c1822;

v-toolbar {
  padding-right: 250px !important;
}

// * {
//   color: $color-light;
// }
//
// body {
//   ::selection { background: $color-yellow;}
//   ::-moz-selection { background: $color-yellow;}
//   background-color: $color-darkpurple;
//   a {color: $color-light;}
//   a:hover {
//     color: $color-yellow;
//     text-decoration: none;
//     transition: all 0.25s;
//     transform: scale(1.1);
//     cursor: pointer;
//     i, span {color: $color-yellow;}
//   }
//   button {
//     background-color: $color-orange;
//     color: $color-darkpurple !important;
//     font-weight: 700 !important;
//     &:hover {
//       transition: all 0.25s;
//       transform: scale(1.1);
//       cursor: pointer;
//     }
//     &:focus {
//       outline-style:none;
//       box-shadow:none;
//     }
//    }
// }
//
// .navbar {
//   background-color: $color-purple;
//   border: 1px solid $color-border;
// }
// .sidebar {
//   background-color: $color-purple;
//   border-right: 1px solid $color-border;
//   height: 100%;
//   position: fixed;
//   z-index: 1;
//   top: 0;
//   left: 0;
// }
// main {
//   margin-top: 85px;
//   margin-left: 85px;
// }


</style>
