<template>
  <div id="apps">
    <h1>Live Apps</h1>
    <div id="loading">
      <h2>Loading...</h2>
      <p>Make sure you are connected to MetaMask / Web3 Wallet</p>
      <p>Otherwise just reload this page.</p>
    </div>
    <ul id="apps-grid">

    </ul>
  </div>
</template>

 <script>
 window.onload = function (){
   // setTimeout(displayContracts, 3000)
 }

 export default {
   name: "factory-create",
   components: {
   },
   methods: {
   }
 };

</script>

<style scoped lang="scss">
  #loading {
    text-align: center;
  }
  // Main CSS located at Factory.Vue
</style>
