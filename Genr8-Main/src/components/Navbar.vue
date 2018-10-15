<template>
    <div id="nav">
      <img src="../assets/GenFactory.png"/>
      <router-link to="/home/"><span id="nav-text">Home</span></router-link>
      <router-link v-on:click.native="loadApps()" to="/apps/"><span id="nav-text">Apps</span></router-link>
      <router-link to="/icos/"><span id="nav-text">ICO's</span></router-link>
      <router-link to="/icos/"><span id="nav-text">Games</span></router-link>
      <router-link to="/icos/"><span id="nav-text-2">Wiki</span></router-link>
      <router-link to="/icos/"><span id="nav-text-2">API</span></router-link>
      <router-view/>
    </div>

</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
body {
  background-color: #1A1A1D;
  // #eee2dc
  // background-color: #231C1C;
  color: #fff;
}

img {
  width: 80px;
}

#wrapper {
  padding-left: 250px;
  padding-right: 250px;
}

#nav {
  width: 100%;
  background-color:#f5f3f7;
  display: block;

  #nav-text, #nav-text-2 {
    margin: 2px;
    font-family: "Raleway",sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 4;
    color: rgba(30, 31, 33, 0.8);
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 25px 1.5rem;
  }

  #nav-text-2 {
    float: right;
    line-height: 1;
    padding: 25px 1.5rem;
  }

  #nav-text:hover, #nav-text-2:hover {
    color: #e6ae49;
  }

  a {
    text-decoration: none !important;
  }

}
</style>
