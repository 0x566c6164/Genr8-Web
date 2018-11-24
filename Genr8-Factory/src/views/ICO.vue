<template>
    <div class="row justify-content-center align-items-center">
      <div class="col-8 card text-left ">
        <h4 class="card-header">Initial Coin Offering Creation Form</h4>
        <div class="card-body">
          <form @submit.prevent="submit" autocomplete="off">
            <div class="row">
              <div class="col-6 form-group base">
                <label for="contract-name">Contract Name <highlight>* </highlight></label>
                <input v-model="form.name" type="text" class="form-control" id="contract-name" aria-describedby="contract-help" placeholder="Contract Name">
                <small id="contract-help" class="form-text text-muted">Contract name, words and numbers will do, example: Proof of Revenue.</small>
                <small v-if="!$v.form.name.maxLength" class="error-message">Maximum of 20 characters </small>
              </div>
              <div class="col-6 form-group base">
                <label for="time-cap">Time Cap <highlight>*</highlight></label>
                <input v-model="form.timecap" type="number" class="form-control" id="time-cap" aria-describedby="time-cap-help" placeholder="Block Height">
                <small id="time-cap-help" class="form-text text-muted">The block number past which the ICO can launch.</small>
              </div>
            </div>

            <br>

            <div class="row">
              <div class="col-6 form-group base">
                <label for="token-symbol">Token Symbol <highlight>*</highlight></label>
                <input v-model="form.symbol" type="text" class="form-control" id="token-symbol" aria-describedby="token-symbol-help" placeholder="Token Symbol">
                <small id="token-symbol-help" class="form-text text-muted">Token symbol, example: PR.</small>
                <small v-if="!$v.form.symbol.maxLength" class="error-message">Maximum of 5 characters </small>
                <small v-if="!$v.form.symbol.alphaNum" class="error-message">Enter only [a-z / A-Z] and [0-9]</small>
              </div>
              <div class="col-6 form-group base">
                <label for="soft-cap">Soft Cap <highlight>*</highlight></label>
                <input v-model="form.softcap" type="number" class="form-control" id="soft-cap" aria-describedby="soft-cap-help" placeholder="Minimum">
                <small id="soft-cap-help" class="form-text text-muted">The minimum investment cap for the ICO to launch, uses counter currency. <br>
                   For example: if you're using ETH as counter currency, type in 10 for the cap to be a minimum of 10 Ethereum.</small>
              </div>
            </div>

            <br>
            <div class="row">
              <div class="col-6 form-group base">
                <label for="counter-currency">Counter Currency</label>
                <input v-model="form.counter" type="text" class="form-control" id="counter-currency" aria-describedby="counter-help" placeholder="Current Counter Currency: ETH">
                <small id="counter-help" class="form-text text-muted">The currency that the contract will accept, in exchange for tokens. <br> leave empty if you want it to accept ETH, or enter a token address you wish to accept.</small>
                <small v-if="!$v.form.counter.alphaNum" class="error-message">Enter only [a-z / A-Z] and [0-9]</small>
              </div>
              <div class="col-6 form-group base">
                <label for="hard-cap">Hard Cap <highlight>*</highlight></label>
                <input v-model="form.hardcap" type="number" class="form-control" id="hard-cap" aria-describedby="hard-cap-help" placeholder="Maximum">
                <small id="hard-cap-help" class="form-text text-muted">The maximum amount of Counter Currency that the contract will accept. <br>
                   For example: if you're using ETH as counter currency, type in 10 for the cap to be a maximum of 10 Ethereum.</small>
              </div>
            </div>

            <br>
            <div class="form-group base">
              <label for="decimals">Decimals <highlight>*</highlight></label>
              <input v-model="form.decimals" type="number" class="form-control" id="decimals" aria-describedby="number-help" placeholder="8">
              <small id="number-help" class="form-text text-muted">Decimal number, example: 8 for Bitcoin or 18 for Ethereum.</small>
              <small v-if="!$v.form.decimals.between" class="error-message">Valid number range 2-18 </small>
            </div>
            <br>
            <highlight>*</highlight><small class="text-muted">Required</small>
            <hr>
            <div class="text-center">
            <button :disabled="submitStatus === 'PENDING'" class="btn" type="submit" name="button">Sumbit</button>
              <br>
              <br>
              <p class="success-message" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
              <p class="error-message" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
              <p class="error-message" v-if="submitStatus === 'CONTRACT-ERROR'">There was a problem with the Web3 provider.</p>
              <p class="pending-message" v-if="submitStatus === 'PENDING'">Generating...</p>
              <br>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import { required, minLength, maxLength, between, alphaNum, numeric } from 'vuelidate/lib/validators'

export default {

  name: 'ICO',

  data() {
    return {
      form: {
        name: '',
        symbol: '',
        counter: '0x0',
        decimals: 8,
        precision: 1000000 // not sure whats that for now
      },
      submitStatus: null
    }
  },
  validations: {
    form: {
      name: {
        required,
        maxLength: maxLength(20)
     },
     symbol: {
       required,
       alphaNum,
       maxLength: maxLength(5)
     },
     counter: {
       alphaNum,
       maxLength: maxLength(42)
     },
     decimals: {
       required,
       numeric,
       between: between(2, 18)
     },
     timecap: {
       required,
       numeric
     },
     softcap: {
       required,
       numeric
     },
     hardcap: {
       required,
       numeric
     }
    }
 },
 methods: {
   submit() {
      console.log('submit!')
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        console.log('Opening metamask transaction...')
        this.submitStatus = 'PENDING'
        // web3 logic... sending transaction
        basicContract.genr8(web3.toHex(this.form.name), web3.toHex(this.form.symbol), this.form.decimals, (this.form.counter == '0x0') ? '0x0000000000000000000000000000000000000000' : this.form.counter, this.form.precision , function(e,r) {
          if(e) {
            // failed
            this.submitStatus = 'CONTRACT-ERROR'
            console.log('error ' + e);
          } else {
            // success
            this.submitStatus = 'OK'
            console.log('success ' + r);
          }
        });
      }
    }
  }
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
  .base {
    width: 50%;
  }
}

highlight {color: $color-yellow;}

.success-message {color: $color-yellow;}
.error-message {color: red;}
.pending-message {color: $color-gray;}

</style>
