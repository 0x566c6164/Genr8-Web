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
    <router-view/>
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
//
// body {
//   // #1A1A1D Main
//   // #1D1D1A Complementary
//   font-family: "Raleway",sans-serif;
//   background-color: #f7f7f7;
//   transform: translateZ(0);
//   box-sizing: border-box;
//   // #eee2dc
//   // Global font color
//   color: #1A1A1D;
// }
//
// img {
//   width: 80px;
// }
//
// #app {
//   display: grid;
//   height: 100vh;
//   width: 100vw;
//   grid-template-rows: 75px auto 50px;
// }
//
// #wrapper {
//   grid-row: 2;
// }
//
// #nav {
//   width: 100%;
//   background-color: #f5f3f7;
//   display: block;
//   box-shadow: 0 1px 3px 0;
//
//   .nav-text, .nav-text-2 {
//     margin: 2px;
//     font-size: 18px;
//     font-weight: 500;
//     line-height: 4;
//     color: rgba(30, 31, 33, 0.8);
//     text-align: left;
//     text-transform: uppercase;
//     letter-spacing: 1.5px;
//     padding: 25px 1.5rem;
//   }
//
//   .nav-text-2 {
//     float: right;
//     line-height: 1;
//     padding: 25px 1.5rem;
//   }
//
//   .nav-text:hover, .nav-text-2:hover {
//     color: #e6ae49;
//     transition: all 0.15s;
//   }
//
//   .router-link-exact-active, .router-link-active {
//     .nav-text {
//       color: #e6ae49;
//     }
//
//   }
//
//   a {
//     text-decoration: none !important;
//   }
//
// }
//
// footer {
//   grid-row: 3;
//   background-color: #1B1B1F;
//   box-shadow: 0 -2px #e6ae49;
//   color: #fff;
//
//   p {
//     color:  #6E6E6F;
//     font-weight: 500;
//     margin-top: 8px;
//     font-size: 12pt;
//     padding: 0 15px 0 15px;
//   }
//
//   #footer-text-1 {
//     float: left;
//   }
//
//   #footer-text-2 {
//     float: right;
//   }
// }

</style>
