<template>
  <div id="app">
    <div id="nav">
      <router-link to="/factory">Home</router-link> |
      <router-link to="/factory/create">Generate App</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    loadApps() {
     setTimeout(displayContracts, 100)
    }
  }
};
</script>

<style lang="scss">
body {
  background-color: #efeae1;
}
h1,h2,h3, p {
  color: black;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  background-color: #584b4f;
  a {
    font-weight: bold;
    // color: #2c3e50;
    color: #efeae1;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#apps-grid {
  list-style: outside none none;
  padding: 30px 15px 60px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 375px));
  grid-gap: 50px;
  padding-left: 125px;
  padding-right: 125px;

  // Contract is a <li> elemnt
  #contract {
    color: red;
    border: 2px solid #ccc;
    min-height: 125px;
    padding: 25px 30px 25px;
    text-align: left;
    width: 375px;

    a {
    }
  }

  #contract:hover {
    transform: scale(1.02);
    cursor: pointer;
    transition: all 0.5s;
  }
}
</style>
