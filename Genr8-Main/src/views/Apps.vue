<template>
  <div id="wrapper">
    <h1>Live Apps</h1>
    <!-- <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button> -->
    <table class="container">
	<thead>
		<tr>
			<th><p>#</p></th>
			<th><p>Name</p></th>
			<th><p>Symbol</p></th>
			<th><p>Balance</p></th>
			<th><p>Counter</p></th>
			<th><p>Decimals</p></th>
			<th><p>Revenue %</p></th>
			<th><p>Etherscan</p></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Frogger3D</td>
			<td>FROG</td>
			<td>10%</td>
			<td>LINK</td>
		</tr>
		<tr>
			<td>Sensei3D</td>
			<td>SNS</td>
			<td>15%</td>
			<td>LINK</td>
		</tr>
	</tbody>
</table>
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
   name: "apps",
   components: {
   },
   methods: {
   }
 };

</script>

<style lang="scss">

#wrapper {
  margin-top: 50px;
  padding-left: 250px;
  padding-right: 250px;
  text-align: center;

  h1, h2 {
    padding: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
}

  #loading {
    text-align: center;
  }

  // Table
  .container {
  	  text-align: left;
  	  overflow: hidden;
  	  width: 100%;
  	  margin: 0 auto;
      display: table;
      padding: 0 0 8em 0;
      box-shadow: 0 1px 8px 0;

       th p {
    	  font-weight: 600;
    	  font-size: 9pt;
        letter-spacing: 1px;
        text-align: left;
        color: #999999;
        padding-top: 10px;
        margin-bottom: 0;
    }

    td {
    	  font-weight: normal;
    	  font-size: 1em;
    }

    td, th {
    	  padding-bottom: 1%;
    	  padding-top: 1%;
        padding-left:1%;
    }

    /* Background-color of the odd rows */
    tr:nth-child(odd) {
    	  background-color: #ffffff;
        border: 1px solid #e6e6e6;
    }

    /* Background-color of the even rows */
    tr:nth-child(even) {
    	  background-color: #ffffff;
    }

     th {
    	  background-color: #f9f9f9;
    }

     td:first-child {
      color: #333333;
      font-weight: 800;
      text-align: left;
     }

     td:nth-child(2) {
       color: #333333 !important;
       font-size: 12pt;
       font-weight: 600;
      }

     tr:hover {
         background-color: #fdf7ec;
      }
  }

  a {
    text-decoration: none !important;
  }

  td a {
      display:block;
      width: 100%;
      color: #1A1A1D;
  }

@media (max-width: 800px) {
.container td:nth-child(4),
.container th:nth-child(4) { display: none; }
}
</style>
