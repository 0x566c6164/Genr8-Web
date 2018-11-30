<template>
  <v-app>
    <v-toolbar flat height="85" class="toolbar">
      <img style="width: 50px;" src="../assets/eth.jpg" alt="">
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <div class="container">
        <div class="row" style="padding-top: 15px;">
          <div class="col "><a v-on:click="selectedMenu = 'home'" :class="{selected: selectedMenu === 'home' }" class="toolbar-navigator font-weight-light subheading">Home</a></div>
          <div class="col "><a v-on:click="selectedMenu = 'discover'" :class="{selected: selectedMenu === 'discover' }" class="toolbar-navigator font-weight-light subheading">Discover</a></div>
          <div class="col "><a  v-on:click="selectedMenu = 'announcements'" :class="{selected: selectedMenu === 'announcements' }" class="toolbar-navigator font-weight-light subheading">Announcements</a></div>
          <div class="col settings"><a class="toolbar-button font-weight-light text-no-wrap subheading">Settings</a></div>
          <div class="col metamask"><a class="toolbar-button font-weight-light text-no-wrap body-2">Connect to MetaMask</a>
            <img src="../assets/metamask.png" style="width: 30px; padding-left: 5px;"/>
          </div>
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
  data () {
    return {
      selectedMenu: 'home'
    }
  },
  methods: {
    select: function() {
      //
    }
  }
};

</script>

<style lang="scss">
// #f89631

$color-light: #ededee;
$color-gray: #a69ca1;
$color-yellow: #e6ae49;
$color-orange: #df5527;
$color-purple: #2f283a;
$color-purple2: #27212f;
$color-border: #342e3c;
$color-darkpurple: #1c1822;

.toolbar {
  background-color: #fafafa !important;

.toolbar-navigator, .toolbar-button {
  padding-top: 25px;
}

  .toolbar-navigator {
    padding-left: 25px;
    padding-right: 25px;
    &:hover {
      color: $color-orange !important;
      padding-bottom: 5px;
      padding-top: 5px;
      border-bottom: 1px solid $color-orange;
      border-top: 1px solid $color-orange;
      transition: all 0.25s;
    }
  }
  .selected {
    color: $color-orange !important;
    padding-bottom: 5px;
    padding-top: 5px;
    border-bottom: 1px solid $color-orange;
    border-top: 1px solid $color-orange;
    transition: all 0.25s;
    font-weight: 500 !important;
    border-radius: 2px;
  }

  .settings {
    padding-left: 25px;
    padding-right: 25px;
    &:hover {
      color: $color-orange !important;
      transition: all 0.25s;
    }
  }
  .metamask {
    padding-left: 25px;
    border-left: 1px solid $color-gray;
    &:hover {
      color: $color-orange !important;
      transition: all 0.25s;
    }
  }
}



// * {
//   color: $color-light;
// }
//
// body {
//   ::selection { background: $color-orange:;}
//   ::-moz-selection { background: $color-orange:;}
//   background-color: $color-darkpurple;
//   a {color: $color-light;}
//   a:hover {
//     color: $color-orange:;
//     text-decoration: none;
//     transition: all 0.25s;
//     transform: scale(1.1);
//     cursor: pointer;
//     i, span {color: $color-orange:;}
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
