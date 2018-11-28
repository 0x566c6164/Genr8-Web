<template>
  <v-app>
    <v-toolbar flat height="85" class="toolbar">
      <img style="width: 50px;" src="../assets/logo.png" alt="">
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <div class="container">
        <div class="row">
          <div class="col "><a class="toolbar-button font-weight-light subheading">Home</a></div>
          <div class="col "><a class="toolbar-button font-weight-light subheading">Discover</a></div>
          <div class="col "><a class="toolbar-button font-weight-light subheading">Announcements</a></div>
          <div class="col settings"><a class="toolbar-button font-weight-light text-no-wrap subheading">Settings</a></div>
          <div class="col metamask"><a class="toolbar-button font-weight-light text-no-wrap subheading">Connect to MetaMask</a></div>
        </div>
      </div>
    </v-toolbar-items>
  </v-toolbar>
    <v-content >
      <v-container fluid style="padding: 0px;">
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

.toolbar {
  background-color: #fafafa !important;

  .toolbar-button {
    padding-left: 25px;
    padding-right: 25px;
    &:hover {
      color: $color-yellow !important;
      padding-bottom: 5px;
      border-bottom: 3px solid $color-yellow;
      transition: all 0.25s;
    }
  }
  .settings {
    padding-right: 25px;
  }
  .metamask {
    padding-left: 25px;
    border-left: 1px solid $color-gray;
  }
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
