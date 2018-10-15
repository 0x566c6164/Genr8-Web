// CONSTANTS
var contractAddress = '0xcf3f69f19cc609f9bd4fcae85b6e99676ee8db34'; // Genr8Registry.sol
var displayerContracts = [];
var displayerContractAddresses = [];

// GLOBALS
var web3Mode = null;
var walletMode = 'metamask';
var currentAddress = null;
var contract = null;

// Main factory ABI used for creating a new vertical
var factoryAbi = [{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"bytes32"},{"indexed":false,"name":"symbol","type":"bytes32"},{"indexed":false,"name":"counter","type":"address"},{"indexed":false,"name":"decimals","type":"uint8"},{"indexed":false,"name":"creator","type":"address"}],"name":"Create","type":"event"},{"constant":false,"inputs":[{"name":"name","type":"bytes32"},{"name":"symbol","type":"bytes32"},{"name":"counter","type":"address"},{"name":"decimals","type":"uint8"}],"name":"genr8","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"list","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerCandidate","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]

// Used for getting the vertical(s) properties for 'Live-Apps' list
var divyAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellRevenuePercent","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"buyERC20","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"anAmount","type":"uint256"}],"name":"revenueCost","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_counter","type":"address"}],"name":"setCounter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"anAmount","type":"uint256"}],"name":"tokensToCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"percision","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newSymbol","type":"bytes32"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_sellRevenuePercent","type":"uint256"},{"name":"_percision","type":"uint256"}],"name":"setSellRevenuePercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newName","type":"bytes32"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ownerCandidate","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"counter","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"anAmount","type":"uint256"}],"name":"counterToTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_decimals","type":"uint8"}],"name":"setDecimals","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"counterBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"toAddress","type":"address"},{"name":"amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amountOfTokens","type":"uint256"}],"name":"sell","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"donate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingCounter","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"},{"indexed":false,"name":"counterEarned","type":"uint256"}],"name":"Sell","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"source","type":"address"},{"indexed":false,"name":"reason","type":"string"}],"name":"Revenue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]

// UTILITY FUNCTIONS
if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] !== 'undefined'
        ? args[number]
        : match

    })
  }
}

/******************************
* Web3 loader & contract finder
*//////////////////////////////
function detectWeb3 () {

  if (typeof web3 !== 'undefined') {
    web3js = new Web3(web3.currentProvider)
    web3Mode = 'metamask'
    currentAddress = web3js.eth.accounts[0]
  } else {
    web3js = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/Fi6gFcfwLWXX6YUOnke8'))
    web3Mode = 'direct'
  }

  var contractClass = web3js.eth.contract(factoryAbi)
  contract = contractClass.at(contractAddress)

  // TODO: Create a function that will load all the addresses into
  // displayerContracts[] array from the factory
  // if $(#home).class = activated ----> play loading animation in Container
  // And then display the contracts inside the list with boilerplate code
  contract.list(function (e,r) {
    displayerContractAddresses = r;
    console.log("Retrieved the registry! " + r );

  });

  attachEvents()
}

window.addEventListener('load', function () {
  setTimeout(detectWeb3, 2000)
  // setTimeout(displayContracts, 3000)
})


/****************************
* Home & Factory logic
*///////////////////////////
$('.home').click(function () {
  var promise = new Promise(function(resolve, reject) {
    contract.list(function (e,r) {
      displayerContractAddresses = r;
      resolve();
    })
  });
  $('.factory').removeClass('activated');
  $('.home').addClass('activated');
  $('#Container')[0].innerHTML = '';
  displayContracts();
})

function comparedisplaySize () {
  if(displayerContractAddresses.length > displayerContracts.length) {
    displayContracts();
  }
}

// TODO: Add an argument to the function
// Which accepts page number, each page will display 12 contracts
// in a grid sysem
function displayContracts () {
  $('#apps-grid')[0].innerHTML = '';
  $('#loading')[0].innerHTML = '';

  console.log("displayingContracts");
  var contractClass = web3js.eth.contract(divyAbi)
  // page number * 9 = i
  for(var i = 0; i < displayerContractAddresses.length; i++) {
    displayerContracts[i] = contractClass.at(displayerContractAddresses[i]);
    displayerContracts[i].name(function (e,r) {name = r})
    displayerContracts[i].symbol(function (e,r) {token = r})

    var promise = new Promise(function(resolve, reject) {
      console.log(i);
      var name;
      var token;
      var address = displayerContracts[i].address;
      var pointer = i;
      displayerContracts[pointer].symbol(function (e,r) {
        token = r;

        displayerContracts[pointer].name(function (e,r) {
          name = r;
      	  resolve(appendHTML(web3.toAscii(name), web3.toAscii(token), address, pointer));
        })
      })
    });
  }
}

function appendHTML(name, token, address, pointer) {
  var html = $(`<li id="contract">
      <h2><i class="fas fa-file-alt"></i> Contract name: ${name}</h2>
      <p><i class="fas fa-coins"></i> Symbol: ${token}</p>
      <p>Registry Index: ${pointer}</p>
      <a href="/factory/play/${pointer}">Play here</a><br/>
      <a href="https://ropsten.etherscan.io/address/${address}">View on Etherscan</a>
  </li>`);
  $('#apps-grid').append(html);
}

$('.factory').click(function () {
  // homeHTML = $('#Container')[0].innerHTML; REMOVE THIS!!!??
  $('.factory').addClass('activated');
  $('.home').removeClass('activated');
  $('#Container')[0].innerHTML = factoryHTML;

  // Create contract button logic
  $('.Create').click(function () {
    createContract(
      $('#CName')[0].value,
      $('#TName')[0].value,
      $('#CCurrency')[0].value,
      $('#Decimals')[0].value
    );
  })
})

function createContract(contractName, tokenName, counterCurrency, decimals) {
  if(contractName == '' || tokenName == '' || counterCurrency == '' || decimals == '') {
    return;
  }
// 0x0000000000000000000000000000000000000000
  contract.genr8(contractName, tokenName, counterCurrency, decimals, function(e,r) {
    console.log(r);
  });
}

/********
* Alerts
*///////
function attachEvents() {
	// Always start from 10 blocks behind
	web3js.eth.getBlockNumber(function(error, result) {
		// console.log("Current Block Number is", result);
	  	contract.allEvents({
			fromBlock: result - 17,
		},function(e, result) {
       alertify.set('notifier','position', 'bottom-left');
			switch(result.event) {
				case 'onKeyPurchase':
					updateTable();
							alertify.success('Someone sent out ' + result.args.amountOfKeys + ' dogs!');
					break;
				case 'newRound':
				updateTable();
							alertify.warning('The hunt has begun! previous round winner won [' + (result.args.moneyPot.div(1000000000000000000)*0.95).toFixed(2) + '] ETH! With a chance of ' + result.args.chance + '%');
					break;
			}
		})
	})
}



/***************************
* BOILER-PLATE CODE FOR HTML
*///////////////////////////

var factoryHTML = `<h1>Factory</h1>

<div id="Container">
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Contract Name</span>
  </div>
  <input type="text" id="CName" class="form-control" placeholder="Name" aria-describedby="basic-addon1">
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Token Symbol</span>
  </div>
  <input type="text" id="TName" class="form-control" placeholder="Symbol name" aria-describedby="basic-addon1">
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Counter Currency</span>
  </div>
  <input type="text" id="CCurrency" class="form-control" placeholder="The currency the contract will accept, 0x0 for ETH or enter an address to accept other ERC20" aria-describedby="basic-addon1">
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Decimals</span>
  </div>
  <input type="text" id="Decimals" class="form-control" placeholder="Desired number of decimal points, e.g '8' like Bitcoin or '18' like Ethereum" aria-describedby="basic-addon1">
</div>
<button type="button" class="Create btn-primary">Create contract</button>
<br>
<br>
<h2>In-depth Instructions:</h2>
<p>
        bytes32 <strong>name</strong>, // Name of the DivvyUp<br>
        bytes32 <strong>symbol</strong>,  // ERC20 Symbol fo the DivvyUp<br>
        address <strong>counter</strong> // The counter currency to accept. Example: 0x0 for ETH, otherwise the ERC20 token address.<br>
        address <strong>decimals</strong> // Number of decimals the token has. Example: 18 for ETH<br>
</p>
</div>`
