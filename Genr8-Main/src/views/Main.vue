<template>
  <v-app>
    <v-toolbar flat height="85" class="toolbar">
      <img style="width: 50px;" src="../assets/eth.jpg" alt="">
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <div class="container">
        <div class="row" style="padding-top: 15px;">
          <div class="col ">
            <router-link to="/">
            <a v-on:click="selectedMenu = 'home'" :class="{selected: selectedMenu === 'home' }" class="toolbar-navigator font-weight-light subheading">Home</a>
            </router-link>
          </div>
          <div class="col ">
            <router-link to="/discover">
            <a v-on:click="selectedMenu = 'discover'" :class="{selected: selectedMenu === 'discover' }" class="toolbar-navigator font-weight-light subheading">Discover</a>
            </router-link>
          </div>
          <div class="col ">
            <router-link to="/announcements">
              <a v-on:click="selectedMenu = 'announcements'" :class="{selected: selectedMenu === 'announcements' }" class="toolbar-navigator font-weight-light subheading">Announcements</a>
            </router-link>
          </div>
          <div class="col settings"><v-menu offset-y><a class="font-weight-light text-no-wrap subheading" slot="activator"> Settings </a>
            <v-list>
              <v-list-tile>Color Theme</v-list-tile>
              <v-list-tile>Language</v-list-tile>
            </v-list>
          </v-menu>
          </div>
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
    <v-divider></v-divider>
    <v-footer height="auto" class="footer">
    <v-card
      class="flex footer-title" flat tile >
      <v-card-title>
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 icons" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions class="justify-center footer-end">
        &copy;2018 — <strong> Dexstreet</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: "Homepage",
  data () {
    return {
      selectedMenu: 'home',
      icons: [
        'fab fa-discord',
        'fab fa-twitter'
      ]
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

  a {
    text-decoration: none !important;
    color: black;
    font-weight: 300 !important;
  }

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

.footer {
  .footer-title, .footer-end {
    background-color: #fafafa;
  }
  .icons {
    color: black !important;
    &:hover {
      color: $color-orange !important;
      transition: all 0.1s !important;
    }
  }
}



</style>
