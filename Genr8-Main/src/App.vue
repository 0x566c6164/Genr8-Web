<template>
  <div id="app">
    <!-- <div id="nav">
      <img src="./assets/GenFactory.png"/>
      <router-link to="/home/"><span class="nav-text" id="home">Home</span></router-link>
      <router-link v-on:click.native="loadApps()" to="/apps/"><span class="nav-text" id="apps">Apps</span></router-link>
      <router-link to="/icos/"><span class="nav-text" id="icos">ICO's</span></router-link>
      <router-link to="/games/"><span class="nav-text" id="games">Games</span></router-link>
      <router-link to="/wiki/"><span class="nav-text-2" id="wiki">Wiki</span></router-link>
      <router-link to="/api/"><span class="nav-text-2" id="api">API</span></router-link>
    </div> -->
    <router-view></router-view>
      <!-- All HTML + CSS from /components/ goes into #Wrapper div -->
        <!-- <footer>
        <p id="footer-text-1"> © Genr8 2018. All Rights Reserved </p>
        <p id="footer-text-2"> Discord | Smart Contracts </p>
      </footer> -->
  </div>
</template>

<script>
export default {
  methods: {
   //  loadApps() {
   //   setTimeout(displayContracts, 100)
   // }
  }
};
</script>

<style lang="scss">

#app {background-color: #fafafa;}
@media only screen and (min-width: 1200px) {
  #app {
    padding-left: 125px;
    padding-right: 125px;
  }
}




</style>
