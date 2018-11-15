<template lang="html">
  <div id="wrapper">
    <div class="row">
      <div id="factory-101" class="col-5 card text-left">
        <h4 class="card-header">Factory 101</h4>
        <div class="card-body">
          <h5 class="card-title">What can it do</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br>
            <p><i>Tell me more!</i></p>
            <br>
          <h5 class="card-title">Who is it for</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
             ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
             in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br>
            <p><i>Okay, what else?</i></p>
            <br>
          <h5 class="card-title">How to launch a successful contract</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
               ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
               in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <br>
          <hr>
          <div class="text-center">
          <button class="btn" type="button" name="button">Manual</button>
            <p class="py-2"><small class="text-muted">Still hungry for knowledge? Check out our Manual</small></p>
          </div>
        </div>
      </div>
      <div id="factory-102" class="col-5 card text-left">
        <h4 class="card-header">Factory 102</h4>
        <div class="card-body">
          <h5 class="card-title">Why do we even need to register?</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>


          <div class="card-group py-5">
            <div class="card">
              <img class="card-img-top" src="" alt="Tokens created">
              <div class="card-body">
                <h5 class="card-title">18</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="" alt="Revenue generated">
              <div class="card-body">
                <h5 class="card-title">$500,000</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="" alt="Something inetersting">
              <div class="card-body">
                <h5 class="card-title">???</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
            </div>
          </div>
  </div>

</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped lang="scss">

$color-light: #ededee;
$color-gray: #a69ca1;
$color-yellow: #f89631;
$color-orange: #df5527;
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
}

#factory-101 {
  max-width: 100%;
}

#factory-102 {
  height: 50%;
}

</style>
