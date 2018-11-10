<template>
    <div class="row justify-content-center align-items-center">
      <div class="col-8 card text-left ">
        <h4 class="card-header">Initial Coin Offering Creation Form</h4>
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-6 form-group base">
                <label for="exampleInputEmail1">Contract Name <highlight>*</highlight></label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contract Name">
                <small id="emailHelp" class="form-text text-muted">Contract name, words and numbers will do, example: Proof of Revenue.</small>
              </div>
              <div class="col-6 form-group base">
                <label for="exampleInputEmail1">Time Cap <highlight>*</highlight></label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Block Height">
                <small id="emailHelp" class="form-text text-muted">The block number past which the ICO can launch.</small>
              </div>
            </div>

            <br>

            <div class="row">
              <div class="col-6 form-group base">
                <label for="exampleInputEmail1">Token Symbol <highlight>*</highlight></label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Token Symbol">
                <small id="emailHelp" class="form-text text-muted">Token symbol, example: PR.</small>
              </div>
              <div class="col-6 form-group base">
                <label for="exampleInputEmail1">Soft Cap <highlight>*</highlight></label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Minimum">
                <small id="emailHelp" class="form-text text-muted">The minimum investment cap for the ICO to launch, uses counter currency. <br>
                   For example: if you're using ETH as counter currency, type in 10 for the cap to be a minimum of 10 Ethereum.</small>
              </div>
            </div>

            <br>
            <div class="row">
              <div class="col-6 form-group base">
                <label for="exampleInputEmail1">Counter Currency</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Current Counter Currency: ETH">
                <small id="emailHelp" class="form-text text-muted">The currency that the contract will accept, in exchange for tokens. <br> leave empty if you want it to accept ETH, or enter a token address you wish to accept.</small>
              </div>
              <div class="col-6 form-group base">
                <label for="exampleInputEmail1">Hard Cap <highlight>*</highlight></label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maximum">
                <small id="emailHelp" class="form-text text-muted">The maximum amount of Counter Currency that the contract will accept. <br>
                   For example: if you're using ETH as counter currency, type in 10 for the cap to be a maximum of 10 Ethereum.</small>
              </div>
            </div>

            <br>
            <div class="form-group base">
              <label for="exampleInputEmail1">Decimals <highlight>*</highlight></label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="8">
              <small id="emailHelp" class="form-text text-muted">Decimal number, example: 8 for Bitcoin or 18 for Ethereum.</small>
            </div>
            <br>
          </form>
          <highlight>*</highlight><small class="text-muted">Required</small>
          <hr>
          <div class="text-center">
          <button class="btn" type="button" name="button">Generate</button>
            <p class="py-2"><small class="text-muted">Good luck, Wolf of DexStreet.</small></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ICO'
}

</script>

<style scoped lang="scss">

$color-light: #ededee;
$color-gray: #a69ca1;
$color-yellow: #e6ae49;
$color-orange: #f89631;
$color-purple: #2f283a;
$color-purple2: #27212f;
$color-border: #342e3c;
$color-darkpurple: #1c1822;

.card {
border: 1px solid $color-border;
margin: 25px;
padding: 0;
border-radius: 10px;
border: 1px solid $color-border;
box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
background-color: $color-purple2;
  .card-header {
    background-color: $color-purple;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  input {
    background-color: $color-darkpurple;
    border: 1px solid $color-border;
    color: $color-orange;
    &:focus {
      background-color: $color-darkpurple;
      border-color: $color-yellow;
      color: $color-orange;
      outline-style:none;
      box-shadow:none;
    }
  }
  .base {
    width: 50%;
  }
}

highlight {
  color: $color-yellow;
}

</style>
