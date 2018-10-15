// CONSTANTS
var contractAddress = '0xfde889c9354d09cec72845e76a0d9f97f4686f7a';
var registryAddress = '0x2247fdc0e5de91ae589abfab8b99976d8e9f330b';

// Used for printing /apps/ & /icos/
var appList = [];
var appAddresses = [];
var ICOList = [];
// TODO: Upon entry to /token/url
// Call a function to instantiate the contract to the abi

// GLOBALS
var web3Mode = null;
var walletMode = 'metamask';
var currentAddress = null;
var keystore = null;
var dividendValue = 0;
var tokenBalance = 0;
var contract = null;
var registry = null;
var muteSound = false;

var buyPrice = 0;
var globalBuyPrice = 0;
var sellPrice = 0;
var ethPrice = 0;
var currency = (typeof default_currency === 'undefined') ? 'USD' : default_currency;
var ethPriceTimer = null;
var dataTimer = null;
var infoTimer = null;

// ABI of Genr8 /token/
var genr8ABI = [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"percision","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"counter","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"myName","type":"bytes32"},{"name":"mySymbol","type":"bytes32"},{"name":"mySellRevenuePercent","type":"uint256"},{"name":"myCounter","type":"address"},{"name":"myDecimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingCounter","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"},{"indexed":false,"name":"counterEarned","type":"uint256"}],"name":"Sell","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"source","type":"address"},{"indexed":false,"name":"reason","type":"string"}],"name":"Revenue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"newName","type":"bytes32"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newSymbol","type":"bytes32"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_decimals","type":"uint8"}],"name":"setDecimals","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_sellRevenuePercent","type":"uint256"},{"name":"_percision","type":"uint256"}],"name":"setSellRevenuePercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_counter","type":"address"}],"name":"setCounter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"buyERC20","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"donate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amountOfTokens","type":"uint256"}],"name":"sell","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"toAddress","type":"address"},{"name":"amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"counterBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sellRevenuePercent","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"anAmount","type":"uint256"}],"name":"tokensToCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"anAmount","type":"uint256"}],"name":"counterToTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"anAmount","type":"uint256"}],"name":"revenueCost","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

// ABI of Registry
var registryABI = [{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"namespace","type":"bytes32"},{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"value","type":"address"},{"indexed":false,"name":"setter","type":"address"}],"name":"RegistryEntry","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"who","type":"address"},{"name":"status","type":"bool"}],"name":"setAdministrator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"who","type":"address"},{"name":"status","type":"bool"}],"name":"setWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"namespace","type":"bytes32"},{"name":"key","type":"bytes32"},{"name":"value","type":"address"}],"name":"setRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"namespace","type":"bytes32"},{"name":"key","type":"bytes32"}],"name":"lookUp","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"listNamespaces","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"key","type":"bytes32"}],"name":"listKeys","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"namespace","type":"bytes32"}],"name":"isNamespaceInUse","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]


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



function copyToClipboard (text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData('Text', text)

  } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
    var textarea = document.createElement('textarea')
    textarea.textContent = text
    textarea.style.position = 'fixed'  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea)
    textarea.select()
    try {
      return document.execCommand('copy')  // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn('Copy to clipboard failed.', ex)
      return false
    } finally {
      document.body.removeChild(textarea)
    }
  }
}

function updateEthPrice () {
  clearTimeout(ethPriceTimer)
  if( currency === 'EPY' ){
    ethPrice = 1 / (sellPrice + ((buyPrice - sellPrice) / 2))
    ethPriceTimer = setTimeout(updateEthPrice, 10000)
  } else {
    $.getJSON('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=' + currency, function (result) {
      var eth = result[0]
      ethPrice = parseFloat(eth['price_' + currency.toLowerCase()])
      ethPriceTimer = setTimeout(updateEthPrice, 10000)
    })
  }
}

function convertEthToWei (e) {
  return 1e18 * e
}

function convertWeiToEth (e) {
  return e / 1e18
}

function getSeed () {
  useWallet(function (pwDerivedKey) {
    console.log(keystore.getSeed(pwDerivedKey))
  })
}

function generateWallet () {

  if (keystore !== null) {
    if (!confirm(lang.walletGenConfirmation))
      return
  }

  // generate a new BIP32 12-word seed
  var secretSeed = lightwallet.keystore.generateRandomSeed()

  // the seed is stored encrypted by a user-defined password
  var password = prompt(lang.enterPassword)

  lightwallet.keystore.createVault({
    seedPhrase: secretSeed,
    password: password,
    hdPathString: `m/44'/60'/0'/0`,
  }, function (err, ks) {
    if (err) throw err

    keystore = ks

    // Store keystore in local storage
    localStorage.setItem('keystore', keystore.serialize())

    keystore.keyFromPassword(password, function (err, pwDerivedKey) {
      if (err) throw err
      keystore.generateNewAddress(pwDerivedKey, 1)

      var address = keystore.getAddresses()[0]

      $('#wallet-seed').html(secretSeed)
      $('#wallet-address').html(address)
      $('#seed-dimmer').dimmer('show')

      currentAddress = address
      walletMode = 'web'
      updateData(contract)

    })
  })
}

function getPassword (cb) {
  $('#password-prompt').modal('show')

  $('#confirm-tx').off('click')
  $('#confirm-tx').on('click', function () {
    var password = $('#password').val()
    $('#password').val('')

    $('#password-prompt').modal('hide')

    cb(password)
  })
}

function useWallet (cb) {
  getPassword(function (password) {
    keystore.keyFromPassword(password, function (err, pwDerivedKey) {
      if (err) throw err
      cb(pwDerivedKey)
    })
  })
}

function loadWallet () {
  useWallet(function (pwDerivedKey) {
    try {
      keystore.generateNewAddress(pwDerivedKey, 1)
      currentAddress = keystore.getAddresses()[0]
      walletMode = 'web'
      updateData()

    } catch (err) {
      console.log(err)
      alert(lang.incorrectPassword)
    }
  })
}

function recoverWallet () {
  var secretSeed = prompt(lang.enterSeed)

  if (!secretSeed)
    return

  var password = prompt(lang.enterPassword)

  if (!password)
    return

  try {
    lightwallet.keystore.createVault({
      seedPhrase: secretSeed,
      password: password,
      hdPathString: `m/44'/60'/0'/0`,
    }, function (err, ks) {
      if (err) throw err

      keystore = ks

      // Store keystore in local storage
      localStorage.setItem('keystore', keystore.serialize())

      keystore.keyFromPassword(password, function (err, pwDerivedKey) {
        if (err) throw err

        keystore.generateNewAddress(pwDerivedKey, 1)
        currentAddress = keystore.getAddresses()[0]
        walletMode = 'web'
        updateData()
      })
    })
  } catch (err) {
    console.log(err)
    alert(lang.seedInvalid)
  }
}

function detectWeb3 () {
  if ($('#metamask-detecting').hasClass('visible')) {
    $('#metamask-detecting').dimmer('hide')
  }

  if (typeof web3 !== 'undefined') {
    web3js = new Web3(web3.currentProvider)
    web3Mode = 'metamask'
    currentAddress = web3js.eth.accounts[0]
  } else {
    web3js = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/Fi6gFcfwLWXX6YUOnke8'))
    web3Mode = 'direct'
  }

  var ks = localStorage.getItem('keystore')
  if (ks !== null) {
    keystore = lightwallet.keystore.deserialize(ks)
    $('#unlock-wallet-container').show()
  }

  // var contractClass = web3js.eth.contract(abi)
  // contract = contractClass.at(contractAddress)

  var registryClass = web3js.eth.contract(registryABI);
  registry = registryClass.at(registryAddress);

  registry.listKeys("Genr8", function(e,r) {
	if(r) {
    appAddresses = r;
	}
})
  registry.listKeys("Genr8ICO", function(e,r) {
	if(r) {
    ICOList = r;
	}
})

  // updateData()
  // attachEvents()
  // updateTokenInfo()
}


// TODO: Add an argument to the function
// Which accepts page number, each page will display 12 contracts
// in a grid sysem
function displayContracts () {
  $('tbody')[0].innerHTML = '';
  $('#loading')[0].innerHTML = '';

  console.log("displayingContracts");
  var contractClass = web3js.eth.contract(genr8ABI)
  // page number * 9 = i
  for(var i = 0; i < appAddresses.length; i++) {
    appList[i] = contractClass.at(appAddresses[i]);
    appList[i].name(function (e,r) {name = r})
    appList[i].symbol(function (e,r) {token = r})

    var promise = new Promise(function(resolve, reject) {
      console.log(i);
      var name;
      var symbol;
      var balance;
      var counter;
      var decimals;
      var revenue;

      var address = appList[i].address;
      var pointer = i;


      appList[pointer].symbol(function (e,r) {
        symbol = r;

        appList[pointer].name(function (e,r) {
          name = r;

          appList[pointer].counterBalance(function (e,r) {
            balance = r;

            appList[pointer].decimals(function (e,r) {
              decimals = r;

              appList[pointer].sellRevenuePercent(function (e,r) {
                revenue = r;

                appList[pointer].counter(function (e,r) {
                  if(r == "0x0000000000000000000000000000000000000000") {
                    counter = "ETH";
                  } else {
                    counter = r;
                  }
                  resolve(appendHTML(web3.toUtf8(name), web3.toUtf8(symbol), balance, counter, decimals, revenue, address, pointer));
                })
              })
            })
          })
        })
      })
    });
  }
}

function appendHTML(name, symbol, balance, counter, decimals, revenue, address, pointer) {
  // TODO: Parse spaces in name ?
  console.log(name);
  var html = $(
    `<tr>
        <td><a href="/token/${name}">${pointer}</a></td>
        <td><a href="/token/${name}">${name}</a></td>
        <td>${symbol}</td>
        <td>${balance}</td>
        <td>${counter}</td>
        <td>${decimals}</td>
        <td>${revenue}</td>
        <td><a href="https://ropsten.etherscan.io/address/${address}">View</a></td>
    </tr>`
);
  $('tbody').append(html);
}



function loadApp() {
  // TODO: Get URL, /token/registryName
  // use lookup function from the registry.
  // function lookUp(bytes32 namespace, bytes32 key) public view returns(address){
  //       return registry[namespace][key];
  //   }
  // returns address, use this address in contract
  var contractClass = web3js.eth.contract(genr8ABI)
  contract = contractClass.at(contractAddress)

  updateData()
  attachEvents()
  updateTokenInfo()
}

window.addEventListener('load', function () {

  setTimeout(detectWeb3, 500)

  function call (address, method, params, amount) {
    web3js.eth.getTransactionCount(currentAddress, function (err, nonce) {
      if (err) throw err

      web3js.eth.getGasPrice(function (err, gasPrice) {
        if (err) throw err

        // Median network gas price is too high most the time, divide by 10 or minimum 1 gwei
        gasPrice = Math.max(gasPrice / 10, 1000000000)

        var tx = {
          'from': currentAddress,
          'to': address,
          'value': '0x' + amount.toString(16),
          'gasPrice': '0x' + (gasPrice).toString(16),
          'gasLimit': '0x' + (100000).toString(16),
          'nonce': nonce,
        }

        var rawTx = lightwallet.txutils.functionTx(abi, method, params, tx)

        useWallet(function (pwDerivedKey) {
          try {
            var signedTx = '0x' + lightwallet.signing.signTx(keystore, pwDerivedKey, rawTx, currentAddress)
          } catch (err) {
            console.log(err)
            alert(lang.incorrectPassword)
            return
          }
          web3js.eth.sendRawTransaction(signedTx, function (err, hash) {
            if (err) {
              alert(err.message.substring(0, err.message.indexOf('\n')))
              throw err
            }

            $('#tx-hash').empty().append($('<a target="_blank" href="https://etherscan.io/tx/' + hash + '">' + hash + '</a>'))
            $('#tx-confirmation').modal('show')
          })
        })
      })
    })
  }

  function getCookie(name) {
    		var dc = document.cookie;
        console.log(dc);
    		var prefix = name + "=";
    		var begin = dc.indexOf("; " + prefix);

		if (begin == -1) {
        		begin = dc.indexOf(prefix);
        		if (begin != 0) return null;
    		}
    		else
    		{
        		begin += 2;
        		var end = document.cookie.indexOf(";", begin);
        		if (end == -1) {
        		end = dc.length;
        	}
    		}

    return decodeURI(dc.substring(begin + prefix.length, end));
  }
// (web3.sha3(web3.toHex(web3.eth.accounts[0]), {encoding:"hex"}))
  function fund (address, amount) {
    if (walletMode === 'metamask') {
      contract.buy(getCookie('masternode').split(';')[0], (web3.sha3(web3.toHex(web3.eth.accounts[0]), {encoding:"hex"})), {
        value: convertEthToWei(amount)
      }, function (e, r) {
        // console.log(e, r)
      })
    } else if (walletMode === 'web') {
      call(address, 'buy', [], convertEthToWei(amount))
    }
  }
  // function fund (address, amount) {
  //   if (walletMode === 'metamask') {
  //     contract.buy(getCookie('masternode').split(';')[0], {
  //       value: convertEthToWei(amount)
  //     }, function (e, r) {
  //       console.log(e, r)
  //     })
  //   } else if (walletMode === 'web') {
  //     call(address, 'buy', [], convertEthToWei(amount))
  //   }
  // }

// 0x38a38399d1a77f4b5cfb9d1229cf2d0a
// 0x4d7e76b7f5f578965f43ae8d8ef3be220cb43a2d32b2fd6b7105b35f2bb23fee

  function donate (amount) {
    if (walletMode === 'metamask') {
      const txobject = {
        from: currentAddress,
        to: donationAddress,
        value: convertEthToWei(amount)
      }
      web3js.eth.sendTransaction(txobject, function (err, hash) {
        console.log(err)
      })
    } else if (walletMode === 'web') {
      call(donationAddress, 'buy', [], convertEthToWei(amount))
    }
  }

  function sell (amount) {
    if (walletMode === 'metamask') {
      contract.sell(convertEthToWei($('.token_Input')[0].value), function (e, r) {
        console.log(e, r)
      })
    } else if (walletMode === 'web') {
      call(contractAddress, 'sell', [convertEthToWei(amount)], 0)
    }
  }

  function reinvest () {
    if (walletMode === 'metamask') {
      contract.reinvest(function (e, r) {
        console.log(e, r)
      })
    } else if (walletMode === 'web') {
      call(contractAddress, 'reinvest', [], 0)
    }
  }

  function withdraw () {
    if (walletMode === 'metamask') {
      contract.withdraw(function (e, r) {
        console.log(e, r)
      })
    } else if (walletMode === 'web') {
      call(contractAddress, 'withdraw', [], 0)
    }
  }

  // Buy token click handler
  $('.buy_Tokens').click(function () {
    let amount = $('.eth_Input')[0].value;
    if (amount <= 0 || !isFinite(amount) || amount === '') {
    } else {
      // $('#purchase-amount').removeClass('error').popup('destroy')
      fund(contractAddress, amount)
    }
  })

  	// Transfer handler
	$('.transferBtn').click(function() {
		let address = $('.transferAddress_Input')[0].value;
		let amount = $('.transferTokens_Input')[0].value;

		if (!web3js.isAddress(address)) {
			return;
		}
		if (!parseFloat(amount))
		{
			return
		}
		let amountConverted = web3js.toBigNumber(amount * 1000000000000000000);
		transferTokens(amountConverted, address);
	});

	function transferTokens(amount, address) {
		if (walletMode === 'metamask') {
				contract.myTokens(function(err, myTokens) {
					if (parseFloat(amount) <= parseFloat(myTokens)) {
						contract.transfer(address, amount, function(err, result) {
							if (err) {
								alertify.error('An error occured. Please check the logs.');
								console.log('An error occured', err);
							}
						})
					}
				});
		} else {
			alert.log('Transfer functionality supported only with Metamask or Trust Wallet.');
		}

	}

  $('#close-seed').click(function () {
    if ($('#seed-dimmer').hasClass('visible')) {
      $('#seed-dimmer').dimmer('hide')
      $('#wallet-dimmer').dimmer('show')
    }
  })

  $('#generate-wallet').click(function () {
    generateWallet()
  })

  $('#unlock-wallet').click(function () {
    loadWallet()
  })

  $('#recover-wallet').click(function () {
    recoverWallet()
  })

  $('#send-action').click(function () {
    var amount = $('#send-amount').val().trim()
    if (amount <= 0 || !isFinite(amount) || amount === '') {
      $('#send-amount').addClass('error').popup({
        title: lang.invalidInput,
        content: lang.invalidInputResponse
      }).popup('show')
    } else {
      var address = $('#send-address').val()
      if (!address.match(/^0x[0-9a-fA-F]{40}$/)) {
        $('#send-address').addClass('error').popup({
          title: lang.invalidInput,
          content: lang.invalidInputResponse
        }).popup('show')
      } else {
        $('#send-amount').removeClass('error').popup('destroy')
        $('#send-address').removeClass('error').popup('destroy')
        fund(address, amount)
      }
    }
  })

  $('#donate-action').click(function () {
    let amount = $('#donate-amount').val().trim()
    if (amount <= 0 || !isFinite(amount) || amount === '') {
      $('#donate-amount').addClass('error').popup({
        title: lang.invalidInput,
        content: lang.invalidInputResponse
      }).popup('show')
    } else {
      $('#donate-amount').removeClass('error').popup('destroy')
      donate(amount)
    }
  })

  $('#wallet-open').click(function (e) {
    e.preventDefault()
    $('#wallet-dimmer').dimmer('show')
  })

  $('#wallet-close').click(function (e) {
    e.preventDefault()
    $('#wallet-dimmer').dimmer('hide')

    $('#exported-seed').html('').slideUp()
    $('#exported-private-key').val('').slideUp()
  })

  $('#donate-open').click(function (e) {
    e.preventDefault()
    $('#donate-dimmer').dimmer('show')
  })

  $('#donate-close').click(function () {
    $('#donate-dimmer').dimmer('hide')
  })

  // Sell token click handler
  $('.sell_Tokens').click(function () {
    sell($(".sell_Tokens").val())
  })

  // Reinvest click handler
  $('#reinvest-btn').click(function () {
    reinvest()
  })

  // Withdraw click handler
  $('#withdraw-btn').click(function () {
    withdraw()
  })

  $('#sell-tokens-btn-m').click(function () {
    contract.sell(function (e, r) {
      console.log(e, r)
    })
  })

  $('#reinvest-btn-m').click(function () {
    contract.reinvest(function (e, r) {
      console.log(e, r)
    })
  })

  $('#withdraw-btn-m').click(function () {
    contract.withdraw(function (e, r) {
      console.log(e, r)
    })
  })

  $('#currency').val(currency)

  $('#currency').change(function () {
    currency = $(this).val()
    updateEthPrice()
  })

  updateEthPrice()

  // $('#password-prompt').modal({closable: false})

  $('#cancel-tx').click(function () {
    $('#password-prompt').modal('hide')
  })

  $('#password').keyup(function (e) {
    var code = e.keyCode || e.which
    if (code === 13) {
      $('#confirm-tx').click()
    }
  })

  $('eth_Input').bind("keypress keyup click", function (e) {
    var number = $('eth_Input').val();
    var numTokens = number / globalBuyPrice;
    $('.buy_Receive').text("With " + (number==0 ? 0 : number) + " ETH you can buy " + numTokens.toFixed(3) + " Tokens");
  })

  $('#delete-wallet').click(function (e) {
    e.preventDefault()

    if (!confirm(lang.deleteWalletConfirmation))
      return

    useWallet(function (pwDerivedKey) {
      if (!keystore.isDerivedKeyCorrect(pwDerivedKey)) {
        alert(lang.incorrectPassword)
      }
      else {
        $('#wallet-close').click()
        keystore = null
        localStorage.removeItem('keystore')
        currentAddress = null
        updateData()
      }
    })
  })

  $('#export-private-key').click(function (e) {
    e.preventDefault()

    useWallet(function (pwDerivedKey) {
      var key = keystore.exportPrivateKey(currentAddress, pwDerivedKey)
      $('#exported-seed').html('').slideUp()
      $('#exported-private-key').val('0x' + key).slideDown()
    })
  })

  $('#export-seed').click(function (e) {
    e.preventDefault()

    useWallet(function (pwDerivedKey) {
      var seed = keystore.getSeed(pwDerivedKey)
      $('#exported-private-key').val('').slideUp()
      $('#exported-seed').html(seed).slideDown()
    })
  })

  $('#copy-eth-address').click(function (e) {
    e.preventDefault()
    copyToClipboard(currentAddress)

    $('#copy-eth-address').popup({
      content: lang.copiedToClip,
      hoverable: true
    }).popup('show')

  }).on('mouseout', function () {
    $('#copy-eth-address').popup('destroy')
  })

  $('.mute-sound').click(function(e) {
  		var soundText = $(this).find('span');
		e.preventDefault()
		// console.log('Clicked the mute sound')

		muteSound = !muteSound;

		// console.log(muteSound)

		if (soundText.hasClass('on')) {
			soundText.removeClass('on').addClass('off');
			soundText.text('OFF');
		} else {
			soundText.removeClass('off').addClass('on');
			soundText.text('ON');
		}

		// if($(this).find('svg').hasClass('fa-volume-up')){
		//     $('.mute-sound').find("svg").removeClass('fa-volume-up').addClass('fa-volume-off');
		// } else if($(this).find('svg').hasClass('fa-volume-off')) {
		// 	$('.mute-sound').find('svg').removeClass('fa-volume-off').addClass('fa-volume-up');
		// }
	})
})

function updateData () {
  clearTimeout(dataTimer)

  var loggedIn = false

  if (walletMode === 'metamask') {
    loggedIn = typeof web3js.eth.defaultAccount !== 'undefined' && web3js.eth.defaultAccount !== null
    currentAddress = web3js.eth.defaultAccount
    $('#meta-mask-ui').removeClass('wallet-web').addClass('wallet-mm')
  } else if (walletMode === 'web') {
    loggedIn = currentAddress !== null
    $('#meta-mask-ui').addClass('wallet-web').removeClass('wallet-mm')
  }

  if (currentAddress !== null) {
    $('#eth-address').html(currentAddress)
    $('#eth-public-address a.etherscan-link').attr('href', 'https://etherscan.io/address/' + currentAddress).html(currentAddress)
  } else {
    $('#eth-address').html('Not Set')
  }

  if (loggedIn) {
    $('#meta-mask-ui').removeClass('logged-out').addClass('logged-in')

    contract.balanceOf(currentAddress, function (e, r) {
      const tokenAmount = (r / 1e18 * 0.9999)
      $('.token_Balance')[0].innerHTML = `Tokens: <i class="fas fa-coins"></i> ` + (Number(tokenAmount.toFixed(2)).toLocaleString())
      contract.calculateEthereumReceived(r, function (e, r) {
        let bal = convertWeiToEth(r)
        // $('.median_Usd').text(bal.toFixed(4)) --> RETURNS CONVERTED TOKENS INTO ETHER
        $('.usdValue_Tokens')[0].innerHTML = `<i class="fas fa-dollar-sign"></i>` + (Number((convertWeiToEth(r * 1) * ethPrice).toFixed(2)).toLocaleString()) + ` USD`
        if (tokenBalance !== 0) {
          if (bal > tokenBalance) {
            $('.value').addClass('up').removeClass('down')
            setTimeout(function () {
              $('.value').removeClass('up')
            }, 3000)
          }
          else if (bal < tokenBalance) {
            $('.value').addClass('down').removeClass('up')
            setTimeout(function () {
              $('.value').removeClass('down')
            }, 3000)
          }
        }
        tokenBalance = bal
      })
    })

    contract.myDividends(false, function (e, r) {
      let div = convertWeiToEth(r).toFixed(6)
      let refdiv = (dividendValue - div).toFixed(6);

       $('.refferal_Dividends')[0].innerHTML = `Referral Dividends: <i class="fab fa-ethereum"></i> ` + (refdiv)
       $('.refferal_DividendsUSD')[0].innerHTML = `<i class="fas fa-dollar-sign"></i> ${Number((refdiv * ethPrice).toFixed(2)).toLocaleString()} USD`

       $('.total_Dividends')[0].innerHTML = `Dividends: <i class="fab fa-ethereum"></i> ` + (div)
       $('.total_DividendsUSD')[0].innerHTML = `<i class="fas fa-dollar-sign"></i> ${Number((convertWeiToEth(r) * ethPrice).toFixed(2)).toLocaleString()} USD`
    })



	// contract.totalEthBankrollCollected(function (e,r) {
  //         let totalEthBankrollCollected = convertWeiToEth(r).toFixed(6);
  //
  //         $('.bankRollCollected')[0].innerHTML = `Bankroll Collected: ${totalEthBankrollCollected}`
  //         $('.bankRollCollectedUSD')[0].innerHTML = `<i class="fas fa-dollar-sign"></i> ${Number((totalEthBankrollCollected * ethPrice).toFixed(2)).toLocaleString()} ${currency}`
  //         getBankrollBalance();
  //       })

  // contract.totalEthBankrollReceived(function (e,r) {
  //   let totalEthBankrollReceived = convertWeiToEth(r).toFixed(6);
  //
  //   $('.bankRollReceived')[0].innerHTML = `Bankroll Received: ${totalEthBankrollReceived}`
  //   $('.bankRollReceivedUSD')[0].innerHTML = `<i class="fas fa-dollar-sign"></i> ${Number((totalEthBankrollReceived * ethPrice).toFixed(2)).toLocaleString()} ${currency}`
  // })

        function getBankrollBalance() {
                    var address, wei
                    address = '0x6cd532ffdd1ad3a57c3e7ee43dc1dca75ace901b';
                    try {
                        web3.eth.getBalance(address, function (error, wei) {
                            if (!error) {
                                var balance = web3.fromWei(wei, 'ether');
                                // balance = (balance.c[0] + (balance.c[1] / 100000000000000)).toFixed(6);
                                $('.bankRollBalance')[0].innerHTML = `Total Bankroll Balance: <i class="fab fa-ethereum"></i>${balance}`
                                $('.bankRollBalanceUSD')[0].innerHTML = `<i class="fas fa-dollar-sign"></i> ${Number((balance * ethPrice).toFixed(2)).toLocaleString()} ${currency}`
                            }
                        });
                    } catch (err) {
                    }
                }

        // No use for now
        // contract.etherToSendBankroll(function(e,r) {
        //   let ethForBankroll = convertWeiToEth(r).toFixed(6);
        //
        //   $('.bankroll').text(ethForBankroll + ' ETH')
        // })


    contract.myDividends(true, function (e, r) {
      let div = convertWeiToEth(r).toFixed(6)

      $('.div').text(div)
      $('input.div').val(div + " ETH")
      $('.div-usd').text(Number((convertWeiToEth(r) * ethPrice).toFixed(2)).toLocaleString())

      if (dividendValue != div) {
        $('.div').fadeTo(100, 0.3, function () { $(this).fadeTo(250, 1.0) })

        dividendValue = div
      }
    })

    web3js.eth.getBalance(currentAddress, function (e, r) {
      // We only want to show six DP in a wallet, consistent with MetaMask
      $('.address-balance').text(convertWeiToEth(r).toFixed(6) + ' ETH')
    })
  } else {
    $('#meta-mask-ui').addClass('logged-out').removeClass('logged-in')
  }

  contract.buyPrice(function (e, r) {
    let buyPrice = convertWeiToEth(r)
    globalBuyPrice = convertWeiToEth(r)
    $('.buy_ValueETH').text(buyPrice.toFixed(6) + ' Ethereum') // NOT USED YET
    $('.buy_Value')[0].innerHTML = `<i class="fas fa-dollar-sign"></i> ${Number((buyPrice * ethPrice).toFixed(2)).toLocaleString()} | <i class="fab fa-ethereum"></i> ${buyPrice.toFixed(5)} `


    // APPROX TOKENS RECEIVED LOGIC // NOT EMPTY
    if($('.eth_Input')[0].value != "" && $('.eth_Input')[0].value < 100){
      contract.calculateTokensReceived(convertEthToWei($('.eth_Input')[0].value), function (e, r) {
        // let bal = convertWeiToEth(r)
        $('.buy_Receive')[0].innerHTML = `Approx. <i class="fas fa-coins"></i> ${convertWeiToEth(r).toFixed(0)} Tokens`;
      })
    } else if ($('.eth_Input')[0].value >= 100) {
      $('.buy_Receive')[0].innerHTML = `[ERR_WHALE_DETECTED]`;
    }

    // UPDATE MEDIAN PRICE
    // $('.median_Eth')[0].innerHTML = `<i class="fab fa-ethereum"></i> ${(buyPrice * 0.8).toFixed(5)}`
    // $('.median_Usd')[0].innerHTML = `broken` // NOT USED YET <i class="fas fa-dollar-sign"></i> ${Number(((buyPrice * 0.8) * ethPrice).toFixed(2)).toLocaleString()}
  })

  contract.totalSupply(function (e, r) {
    let actualSupply = r / 1e18;
    $('.token_Supply')[0].innerHTML = `<i class="fas fa-coins fa-x3"></i> ${Number(actualSupply.toFixed(0)).toLocaleString()} Token Supply`
  })

  contract.sellPrice(function (e, r) {
    let sellPrice = convertWeiToEth(r)
    $('.sellETH').text(sellPrice.toFixed(6) + ' Ethereum') // NOT USED YET
    $('.sell_Value')[0].innerHTML = `<i class="fas fa-dollar-sign"></i> ${Number((sellPrice * ethPrice).toFixed(2)).toLocaleString()} | <i class="fab fa-ethereum"></i> ${sellPrice.toFixed(5)} `

    // APPROX ETH RECEIVED LOGIC // NOT EMPTY
    if($('.token_Input')[0].value != "" && $('.token_Input')[0].value < 10000000) {
      contract.calculateEthereumReceived(convertEthToWei($('.token_Input')[0].value), function (e, r) {
        // let bal = convertWeiToEth(r)
        $('.sell_Receive')[0].innerHTML = `Approx. <i class="fab fa-ethereum"></i> ${convertWeiToEth(r).toFixed(4)} ETH`;
      })
      // $('.sell_Receive')[0].innerHTML = `Approx. <i class="fab fa-ethereum"></i> ${($('.token_Input')[0].value * sellPrice).toFixed(4)} ETH`;
    }
  })

  web3js.eth.getBalance(contract.address, function (e, r) {
    $('.contractBalance')[0].innerText = `${convertWeiToEth(r).toFixed(4)} ETH`
    $('.contractBalance_USD')[0].innerHTML = `<i class="fas fa-dollar-sign"></i> ${Number((convertWeiToEth(r) * ethPrice).toFixed(2)).toLocaleString()} contract value`
  })

	$('#purchase-amount').on('input change', function() {
		var value = parseFloat($(this).val()) * 0.65;
		var tokenPriceInitial_ = 0.00000001;
    	var tokenPriceIncremental_ = 0.000000001;


		if ( value === 0 || Number.isNaN(value) ) {
			$('#deposit-hint').text("");
			return;
		}

		if ( value > 0) {
			contract.sellPrice(function (e, r) {
			    let sellPrice = convertWeiToEth(r)
			    var tokens = value / sellPrice;
			    $('#deposit-hint').text("You will get approximately " + tokens.toFixed(0) + " OMNI");
			})
		}

	});


  dataTimer = setTimeout(function () {
    updateData()
  }, web3Mode === 'metamask' ? 2000 : 6000)
}


function updateTokenInfo() {
	clearTimeout(infoTimer)

	$.ajax({
		url: "https://api.ethplorer.io/getAddressHistory/" + contractAddress + "?apiKey=freekey&limit=10",
		data: null,
		success: function (resp) {
		   // console.log(resp);
		}
	});

	infoTimer = setTimeout(function () {
	    updateTokenInfo()
	}, web3Mode === 'metamask' ? 5000 : 10000)
}

// ALERTIFY.JS
function attachEvents() {

	// Always start from 10 blocks behind
	web3js.eth.getBlockNumber(function(error, result) {
		// console.log("Current Block Number is", result);
	  	contract.allEvents({
			fromBlock: result - 17,
		},function(e, result) {
			let currentUserEvent = web3.eth.accounts[0] == result.args.customerAddress;
       alertify.set('notifier','position', 'bottom-left');
			switch(result.event) {
				case 'onTokenPurchase':
					if (currentUserEvent) {
							alertify.warning('Your buy order is confirmed! You spent ' + result.args.incomingEthereum.div(1000000000000000000).toFixed(4) + ' ETH and received ' + result.args.tokensMinted.div(1000000000000000000).toFixed(4) + ' tokens.');
					} else {
							alertify.success('Someone else spent ' + result.args.incomingEthereum.div(1000000000000000000).toFixed(4) + ' ETH and received ' + result.args.tokensMinted.div(1000000000000000000).toFixed(4) + ' tokens.');
					}
					break;
				case 'onTokenSell':
					if (currentUserEvent) {
							alertify.warning('Your sell order is confirmed! You received ' + result.args['ethereumEarned'].div(1000000000000000000).toFixed(4) + ' ETH for ' + result.args.tokensBurned.div(1000000000000000000).toFixed(4) + ' tokens.');
					} else {
							alertify.error('Someone else sold tokens. They received ' + result.args['ethereumEarned'].div(1000000000000000000).toFixed(4) + ' ETH for ' + result.args.tokensBurned.div(1000000000000000000).toFixed(4) + ' tokens.');
					}
					break;
				case 'onWithdraw':
					if (currentUserEvent) {
						alertify.warning('Your withdrawal request is confirmed! You received ' + result.args['ethereumWithdrawn'].div(1000000000000000000).toFixed(4) + '.');
					}
					break;
				case 'onReinvestment':
					if (currentUserEvent) {
						alertify.warning('You reinvestment order is confirmed! You received ' + result.args.tokensMinted.div(1000000000000000000).toFixed(4) + ' tokens for reinvesting ' + result.args.ethereumReinvested.div(1000000000000000000).toFixed(4) + 'ETH');
					} else {
						alertify.success('Someone reinvested ' + result.args.ethereumReinvested.div(1000000000000000000).toFixed(4) + ' ETH and received ' + result.args.tokensMinted.div(1000000000000000000).toFixed(4) + '. tokens.');
					}
					break;
				case 'Transfer':
					if (currentUserEvent) {
						alertify.warning('Your transfer order is confirmed! ' + result.args['to'] + ' received ' + result.args['tokens'].div(1000000000000000000).toFixed(4) + ' tokens.');
					}
					break;
			}
		})
	})
}

// MASTERNODE REFERRAL LINK INITIATOR
// $('.masternode')[0].value = `https://rabbithub.io/exchange/?masternode=${web3.eth.accounts[0]}`
