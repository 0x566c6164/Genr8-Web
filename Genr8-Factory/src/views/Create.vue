<template>
  <div id="wrapper">
    <div class="row">
      <div class="col-12 header text-center">
        <h1 class="text-uppercase">Become an influencer today</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-5">
        <router-link to="/erc/">
          <div id="token" class="card spring-fever">
            <div class="title-content">
              <h3>ERC-20 TOKEN</h3>
              <hr />
              <div class="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div>
            </div><!-- /.title-content -->
            <div class="card-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
            </div><!-- /.card-info -->
            <!-- overlays -->
            <div class="gradient-overlay"></div>
            <div class="color-overlay"></div>
          </div><!-- /.card -->
        </router-link>
      </div>
      <div class="col-2 or d-flex justify-content-center align-items-center" >
        <h1>OR</h1>
      </div>
      <div class="col-5">
        <router-link to="/ico/">
          <div id="ico" class="card spring-fever">
            <div class="title-content">
              <h3>INITIAL COIN OFFERING</h3>
              <hr />
              <div class="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div>
            </div><!-- /.title-content -->
            <div class="card-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
            </div><!-- /.card-info -->
            <!-- overlays -->
            <div class="gradient-overlay"></div>
            <div class="color-overlay"></div>
          </div><!-- /.card -->
        </router-link>
      </div>
    </div>

  </div>
</template>

 <script>
 window.onload = function (){
   // setTimeout(displayContracts, 3000)
 }

 export default {
   name: "create",
   components: {
   },
   methods: {
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

$card-width:  350px;
$card-height: 450px;

  .header {
    padding: 25px;
    letter-spacing: 2px;
    margin-top: 25px;
  }

  .card{
    width: $card-width;
    height: $card-height;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid $color-border;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
    text-align: center;
    margin-top: 25px;

    &.spring-fever{
      background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg) no-repeat;
    }

    .color-overlay{
      /* Rectangle 11: */
      background: rgba(84,104,110,0.4);
      width: $card-width;
      height: $card-height;
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      transition: background .3s cubic-bezier(.33,.66,.66,1);
    }
    .gradient-overlay{
      /* bg-gradient: */
      background-image: -webkit-linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
      background-image: -moz-linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
      background-image: -o-linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
      background-image: linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
      width: $card-width;
      height: $card-height;
      position: absolute;
      top: 350px;
      left: 0;
      z-index: 15;
    }

    &:hover{
      cursor: pointer;
      .card-info{
        opacity: 1;
        bottom: 120px;
      }
      .color-overlay{
        background: rgba(84,104,110,0.8);
      }
    }
  }

  #token {
    margin-left: 50%;
  }
  #ico {
    margin-right: 50%;
  }

  .or {
    letter-spacing: 5px;
  }

  .title-content{
    text-align: center;
    margin: 70px 0 0 0;
    position: absolute;
    z-index: 20;
    width: 100%;
    top: 0;
    left: 0;
  }
  h3{
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    color: $color-yellow;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 0;
  }
  hr{
    width: 50px;
    height: 3px;
    margin: 20px auto;
    border: 0;
    background: $color-border;
  }
  .intro{
    width: 170px;
    margin: 0 auto;
    color: $color-light;
    font-family: 'Droid Serif', serif;
    font-size: 13px;
    font-style: italic;
    line-height: 18px;
  }
  .card-info{
    width: 100%;
    position: absolute;
    bottom: 100px;
    left: 0;
    margin: 0 auto;
    padding: 0 50px;
    color: $color-light;
    font-family: 'Droid Serif', serif;
    font-style: 16px;
    line-height: 24px;
    z-index: 20;
    opacity: 0;
    transition: bottom .3s, opacity .3s cubic-bezier(.33,.66,.66,1);
  }

  .utility-info{
    position: absolute;
    bottom: 0px;
    left: 0;
    z-index: 20;
  }
  .utility-list{
    list-style-type: none;
    margin: 0 0 30px 20px;
    padding: 0;
    width: 100%;
  }

//
//   #loading {
//     text-align: center;
//   }
//
//   // Table
//   .container {
//   	  text-align: left;
//   	  overflow: hidden;
//   	  width: 100%;
//   	  margin: 0 auto;
//       display: table;
//       padding: 0 0 8em 0;
//       box-shadow: 0 1px 8px 0;
//
//        th p {
//     	  font-weight: 600;
//     	  font-size: 9pt;
//         letter-spacing: 1px;
//         text-align: left;
//         color: #999999;
//         padding-top: 10px;
//         margin-bottom: 0;
//     }
//
//     td {
//     	  font-weight: normal;
//     	  font-size: 1em;
//     }
//
//     td, th {
//     	  padding-bottom: 1%;
//     	  padding-top: 1%;
//         padding-left:1%;
//     }
//
//     /* Background-color of the odd rows */
//     tr:nth-child(odd) {
//     	  background-color: #ffffff;
//         border: 1px solid #e6e6e6;
//     }
//
//     /* Background-color of the even rows */
//     tr:nth-child(even) {
//     	  background-color: #ffffff;
//     }
//
//      th {
//     	  background-color: #f9f9f9;
//     }
//
//      td:first-child {
//       color: #333333;
//       font-weight: 800;
//       text-align: left;
//      }
//
//      td:nth-child(2) {
//        color: #333333 !important;
//        font-size: 12pt;
//        font-weight: 600;
//       }
//
//      tr:hover {
//          background-color: #fdf7ec;
//       }
//   }
//
//   a {
//     text-decoration: none !important;
//   }
//
//   td a {
//       display:block;
//       width: 100%;
//       color: #1A1A1D;
//   }
//
// @media (max-width: 800px) {
// .container td:nth-child(4),
// .container th:nth-child(4) { display: none; }
// }
</style>
