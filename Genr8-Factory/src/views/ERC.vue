<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-6 card text-left ">
      <h4 class="card-header">ERC-20 Creation Form</h4>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="contract-name">Contract Name <highlight>*</highlight></label>
            <input type="text" class="form-control" id="contract-name" aria-describedby="contract-help" placeholder="Contract Name">
            <small id="contract-help" class="form-text text-muted">Contract name, words and numbers will do, example: Proof of Revenue.</small>
          </div>
          <br>
          <div class="form-group">
            <label for="token-symbol">Token Symbol <highlight>*</highlight></label>
            <input type="text" class="form-control" id="token-symbol" aria-describedby="token-symbol-help" placeholder="Token Symbol">
            <small id="token-symbol-help" class="form-text text-muted">Token symbol, example: PR.</small>
          </div>
          <br>
          <div class="form-group">
            <label for="counter-currency">Counter Currency</label>
            <input type="text" class="form-control" id="counter-currency" aria-describedby="counter-help" placeholder="Current Counter Currency: ETH">
            <small id="counter-help" class="form-text text-muted">The currency that the contract will accept, in exchange for tokens. <br> leave empty if you want it to accept ETH, or enter a token address you wish to accept.</small>
          </div>
          <br>
          <div class="form-group">
            <label for="hard-cap">Hard Cap <highlight>*</highlight></label>
            <input type="number" class="form-control" id="hard-cap" aria-describedby="hard-cap-help" placeholder="Maximum">
            <small id="hard-cap-help" class="form-text text-muted">The maximum amount of Counter Currency that the contract will accept. <br>
               For example: if you're using ETH as counter currency, type in 10 for the cap to be a maximum of 10 Ethereum.</small>
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
// @ is an alias to /src

export default {
  name: "ERC"
};
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
}

highlight {
  color: $color-yellow;
}

</style>
