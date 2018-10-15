<template>
  <div class="u-shadow-v1-5 g-line-height-2 g-pa-40 g-mb-30" id="Wrapper">
    <!-- <h1>Contract registry position {{ id }}</h1> -->
    <!-- <hr /> -->

                    <!-- TODO: Add Funds in circulation, ETH marketcap, USD marketcap -->
                    <div class="text-center justify-content-center" id="top">
                      <h2 id="appName">Welcome to:</h2>
                        <!-- Default Outline Panel-->
                        <div class="card card-outline-primary rounded-0">
                          <h3 class="card-header h5 rounded-0">
                            <i class="fa fa-tasks g-font-size-default g-mr-5"></i>
                            Funds & Marketcap
                          </h3>

                          <div class="card-block">
                            <h4 class="h5">BITCONNNNEEEEEEEEEEEEEEEEEEEEEE~</h4>
                            <span class="token_Supply">0 Tokens in circulation</span> <br/>
                            <span class="contractBalance">0 ETH in contract</span> <br/>
                            <span class="sell_Value">0</span> Sell Price <br/>
                            <span class="buy_Value">0</span> Buy Price <br/>
                          </div>
                        </div>
                        <!-- End Default Outline Panel-->
                    </div>

                    <hr />

                    <div class="tabs">
                      <!-- Nav tabs -->
                      <ul class="nav text-center justify-content-center u-nav-v8-1" role="tablist" data-target="nav-8-1-primary-hor-center" data-tabs-mobile-type="slide-up-down" data-btn-classes="btn btn-md btn-block u-btn-outline-primary">
                        <li class="nav-item">
                          <a class="nav-link active" data-toggle="tab" href="#nav-8-1-primary-hor-center--1" role="tab">
                            <span class="u-nav-v8__icon u-icon-v3 u-icon-size--lg g-rounded-50x g-brd-around g-brd-4 g-brd-white">
                              B
                            </span>
                            <strong class="text-uppercase u-nav-v8__title">Buy</strong>
                            <em class="u-nav-v8__description">Purchase more tokens</em>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="tab" href="#nav-8-1-primary-hor-center--2" role="tab">
                            <span class="u-nav-v8__icon u-icon-v3 u-icon-size--lg g-rounded-50x g-brd-around g-brd-4 g-brd-white">
                              S
                            </span>
                            <strong class="text-uppercase u-nav-v8__title">Sell</strong>
                            <em class="u-nav-v8__description">Sell your tokens</em>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="tab" href="#nav-8-1-primary-hor-center--3" role="tab">
                            <span class="u-nav-v8__icon u-icon-v3 u-icon-size--lg g-rounded-50x g-brd-around g-brd-4 g-brd-white">
                              R
                            </span>
                            <strong class="text-uppercase u-nav-v8__title">Reinvest</strong>
                            <em class="u-nav-v8__description">Reinvest your dividends</em>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="tab" href="#nav-8-1-primary-hor-center--4" role="tab">
                            <span class="u-nav-v8__icon u-icon-v3 u-icon-size--lg g-rounded-50x g-brd-around g-brd-4 g-brd-white">
                              W
                            </span>
                            <strong class="text-uppercase u-nav-v8__title">Withdraw</strong>
                            <em class="u-nav-v8__description">Withdraw your funds</em>
                          </a>
                        </li>
                      </ul>
                      <!-- End Nav tabs -->

                      <!-- Tab panes -->
                      <div id="nav-8-1-primary-hor-center" class="tab-content g-pt-20">
                        <div class="tab-pane fade show active text-center justify-content-center" id="nav-8-1-primary-hor-center--1" role="tabpanel">
                          <form action="#">
                            <h1>Token purchase</h1>
                            <div class="question">
                              <input class="eth_Input" type="text" required/>
                              <label>Spend X ETH</label>
                            </div>
                            <label class="buy_Receive">You will get X Tokens</label> </br/>
                            <button class="btn buy_Tokens btn-md u-btn-3d u-btn-primary g-mr-10 g-mb-15">Buy</button>
                          </form>
                        </div>

                        <div class="tab-pane fade text-center justify-content-center" id="nav-8-1-primary-hor-center--2" role="tabpanel">
                          <form action="#">
                            <h1>Token sell</h1>
                            <div class="question">
                              <input class="token_Input" type="text" required/>
                              <label>Sell X Tokens</label>
                            </div>
                            <label class="sell_Receive">You will get X ETH</label> </br/>
                            <button class="btn sell_Tokens btn-md u-btn-3d u-btn-red g-mr-10 g-mb-15">Sell</button>
                          </form>
                          </div>

                        <div class="tab-pane fade text-center justify-content-center" id="nav-8-1-primary-hor-center--3" role="tabpanel">
                          <form action="#">
                            <h1>Reinvest</h1>
                            <label>Dividend reinvestment</label> </br/>
                            <button id="reinvest-btn" class="btn btn-md u-btn-3d u-btn-green g-mr-10 g-mb-15">Reinvest</button>
                          </form>
                          </div>
                        <div class="tab-pane fade text-center justify-content-center" id="nav-8-1-primary-hor-center--4" role="tabpanel">
                          <form action="#">
                            <h1>Withdraw</h1>
                            <label>Withdraw dividends</label> </br/>
                            <button id="withdraw-btn" class="btn btn-md u-btn-3d u-btn-yellow g-mr-10 g-mb-15">Withdraw</button>
                          </form>

                          </div>
                      </div>
                      <!-- End Tab panes -->
                    </div>

                    <!-- TODO: Add my holdings, my divs -->
                    <hr />

                    <div class="text-center justify-content-center" id="bottom">
                        <h2>My Portfolio</h2>
                        <!-- Success Panel -->
                          <div class="card card-outline-primary rounded-0">
                            <h3 class="card-header h5">
                              <i class="fa fa-tasks g-font-size-default g-mr-5"></i>
                              Such hands, heavy bags.
                            </h3>

                            <div class="card-block g-pa-15">
                              <span class="token_Balance">0 Tokens</span><br/>
                              <span class="total_Dividends">0 Dividends</span>
                            </div>
                          </div>
                          <!-- End Success Panel -->
                    </div>

  </div>
</template>

<script>

export default {
  name: 'Token',
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style scoped lang="scss">

#Wrapper {
  display: grid;
  margin-top: 50px;
  padding: 150px;
  grid-template-rows: 300px 600px 300px;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 25px;

  #top {
    grid-row: 1;
    grid-column: 2;
    width: 100%;
  }

  .tabs {
    grid-row: 2;
    grid-column: 2;

    .tab-pane {
    }
  }

  #bottom {
    grid-row: 3;
    grid-column: 2;
    width: 100%;
    h2 {
      font-size: 28pt;
    }

    span {
      font-size: 28pt;
    }
  }
}


</style>



<style scoped lang="scss">

.transition, form button, form .question label, form .question input[type="text"] {
    -moz-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    -o-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    -webkit-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  }

form {
    position: relative;
    display: inline-block;
    max-width: 700px;
    min-width: 500px;
    box-sizing: border-box;
    padding: 30px 25px;
    background-color: white;
    border-radius: 40px;
    margin: 40px 20px;
    box-shadow: 0 1px 4px 0;
  }
form h1, form h3 {
  color: #ff4a56;
  font-weight: 100;
  letter-spacing: 0.01em;
  margin-left: 15px;
  margin-bottom: 35px;
  text-transform: uppercase;
  }
form h3 {
    margin-bottom: 10px;
  }
form button {
    width: 100px;
    height: 45px;
    margin-top: 35px;
    background-color: white;
    border: 1px solid #ff4a56;
    line-height: 0;
    font-size: 17px;
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 15px;
    border-radius: 60px;
    color: #ff4a56;
    font-weight: 100;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }
form button:hover, form button:focus {
    color: white;
    background-color: #ff4a56;
  }
form .question {
    position: relative;
    padding: 10px 0;
  }
form .question:first-of-type {
    padding-top: 0;
  }
form .question:last-of-type {
    padding-bottom: 0;
  }
form .question label {
    transform-origin: left center;
    color: #ff4a56;
    font-weight: 100;
    letter-spacing: 0.01em;
    font-size: 17px;
    box-sizing: border-box;
    padding: 10px 15px;
    display: block;
    position: absolute;
    margin-top: -40px;
    z-index: 2;
    pointer-events: none;
  }
form .question input[type="text"] {
    appearance: none;
    background-color: none;
    border: 1px solid #ff4a56;
    line-height: 0;
    font-size: 17px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 60px;
    color: #ff4a56;
    font-weight: 100;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }
form .question input[type="text"]:focus {
    outline: none;
    background: #ff4a56;
    color: white;
    margin-top: 30px;
  }
form .question input[type="text"]:valid {
    margin-top: 30px;
  }
form .question input[type="text"]:focus ~ label {
    -moz-transform: translate(0, -35px);
    -ms-transform: translate(0, -35px);
    -webkit-transform: translate(0, -35px);
    transform: translate(0, -35px);
  }
form .question input[type="text"]:valid ~ label {
    text-transform: uppercase;
    font-style: italic;
    -moz-transform: translate(5px, -35px) scale(0.6);
    -ms-transform: translate(5px, -35px) scale(0.6);
    -webkit-transform: translate(5px, -35px) scale(0.6);
    transform: translate(5px, -35px) scale(0.6);
  }

</style>
