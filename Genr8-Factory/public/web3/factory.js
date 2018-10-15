// CONSTANTS
var basicContractAddress = '0x108e5f953ab2a04a220ce27e5ab42cd8ad24b329';
var ICOContractAddress = '0xc54960f270dccbe971c7737485e596385c6792e4';

// GLOBALS
var web3Mode = null;
var walletMode = 'metamask';
var basicContract = null;
var icoContract = null;

// Main factory ABI used for creating a new vertical
var basicABI = [{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"myRegistry","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"bytes32"},{"indexed":false,"name":"symbol","type":"bytes32"},{"indexed":false,"name":"sellRevenuePercent","type":"uint256"},{"indexed":false,"name":"counter","type":"address"},{"indexed":false,"name":"decimals","type":"uint8"},{"indexed":false,"name":"creator","type":"address"}],"name":"Create","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[{"name":"name","type":"bytes32"}],"name":"lookUp","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"bytes32"},{"name":"symbol","type":"bytes32"},{"name":"sellRevenuePercent","type":"uint256"},{"name":"counter","type":"address"},{"name":"decimals","type":"uint8"}],"name":"genr8","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

var icoABI = [{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"genr8or","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"nameRegistry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"myGenr8or","type":"address"},{"name":"myRegistry","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"bytes32"},{"indexed":false,"name":"symbol","type":"bytes32"},{"indexed":false,"name":"sellRevenuePercent","type":"uint256"},{"indexed":false,"name":"counter","type":"address"},{"indexed":false,"name":"decimals","type":"uint8"},{"indexed":false,"name":"launchBlockHeight","type":"uint256"},{"indexed":false,"name":"launchBalanceTarget","type":"uint256"},{"indexed":false,"name":"launchBalanceCap","type":"uint256"},{"indexed":false,"name":"creator","type":"address"}],"name":"Create","type":"event"},{"constant":true,"inputs":[{"name":"name","type":"bytes32"}],"name":"lookUp","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"bytes32"},{"name":"symbol","type":"bytes32"},{"name":"sellRevenuePercent","type":"uint256"},{"name":"counter","type":"address"},{"name":"decimals","type":"uint8"},{"name":"launchBlockHeight","type":"uint256"},{"name":"launchBalanceTarget","type":"uint256"},{"name":"launchBalanceCap","type":"uint256"}],"name":"genr8ICO","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

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
  } else {
    web3js = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/Fi6gFcfwLWXX6YUOnke8'))
    web3Mode = 'direct'
  }

  var basicContractClass = web3js.eth.contract(basicABI)
  var ICOContractClass = web3js.eth.contract(icoABI)
  basicContract = basicContractClass.at(basicContractAddress)
  icoContract = ICOContractClass.at(ICOContractAddress)

}

window.addEventListener('load', function () {
  setTimeout(detectWeb3, 2000)
})

/***********************************
* CreateBasic & CreateICO Buttons //
*//////////////////////////////////
  $('#createBasic').click(function () {
    createContractBasic(
      $('#CName')[0].value, // Contract name
      $('#TName')[0].value, // Token/Symbol name
      $('#SRevenue')[0].value, // Sell Revenue
      $('#CCurrency')[0].value, // Counter-Currency
      $('#Decimals')[0].value // Decimals
    );
  })

  $('#createICO').click(function () {
    createContractICO(
      $('#iCName')[0].value, // Contract name
      $('#iTName')[0].value, // Token/Symbol name
      $('#iSRevenue')[0].value, // Sell Revenue
      $('#iTCap')[0].value, // Time-Cap Block height
      $('#iSCap')[0].value, // Spft-Cap
      $('#iHCap')[0].value, // Sell Revenue
      $('#iCCurrency')[0].value, // Counter-Currency
      $('#iDecimals')[0].value // Decimals
    );
  })

function createContractBasic(contractName, tokenName, sellRevenue, counterCurrency, decimals) {
  console.log('trying to create ico...');
  // bytes32 name, // Name of the Genr8 vertical
  // bytes32 symbol,  // ERC20 Symbol fo the Genr8 vertical
  // uint256 sellRevenuePercent, //Percent taken for revenue on sells, 0 for none
  // address counter, // The counter currency to accept. Example: 0x0 for ETH, otherwise the ERC20 token address.
  // uint8 decimals // Number of decimals the token has. Example: 18 for ETH
  if(contractName == '' || tokenName == '' || sellRevenue == '') {
    return;
  }

  if(counterCurrency = '') {counterCurrency = '0x0';}
  if(decimals = '') {decimals = 10;}

  basicContract.genr8(web3.toHex(contractName), web3.toHex(tokenName), sellRevenue, counterCurrency, decimals, function(e,r) {
    if(e) {
      console.log(e);
    } else {
      console.log(r);
    }
  });
}

function createContractICO(contractName, tokenName, sellRevenue, timeCap, softCap, hardCap, counterCurrency, decimals) {
  // bytes32 name, // Name of the DivvyUp
  // bytes32 symbol,  // ERC20 Symbol fo the DivvyUp
  // uint256 sellRevenuePercent, //The revenue taken as a percentage on sells, 0
  // address counter, // The counter currency to accept. Example: 0x0 for ETH, otherwise the ERC20 token address.
  // uint8 decimals, // Number of decimals the token has. Example: 18
  // uint256 launchBlockHeight, // Block this won't launch before, or 0 for any block.
  // uint256 launchBalanceTarget, // Balance this wont launch before, or 0 for any balance. (soft cap)
  // uint256 launchBalanceCap // Balance this will not exceed, or 0 for no cap. (hard cap)
  if(contractName == '' || tokenName == '' || sellRevenue == '' || timeCap == '' || softCap == '' || hardCap == '') {
    return;
  }

  if(counterCurrency = '') {counterCurrency = '0x0';}
  if(decimals = '') {decimals = 10;}

  icoContract.genr8ICO(contractName, tokenName, sellRevenue, counterCurrency, decimals, timeCap, softCap, hardCap, function(e,r) {
    if(e) {
      console.log(e);
    } else {
      console.log(r);
    }
  });
}
