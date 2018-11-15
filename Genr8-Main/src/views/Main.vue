<template>
  <div id="main">
    <nav class="navbar navbar-expand fixed-top" style="height: 75px;">
        <a href="#" class="navbar-brand">My Website</a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              <li>
                <h1>Welcome, user</h1>
              </li>
                <li class="navbar-item">
                    <a href="#" class="nav-link">Documentation</a>
                </li>
                <li class="navbar-item">
                    <a href="#" class="nav-link">Blog</a>
                </li>
                <li class="navbar-item">
                    <a href="#" class="nav-link">About Me</a>
                </li>
                <li class="navbar-item">
                    <a href="#" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
          <nav class="sidebar" style="width: 80px; margin-top: 75px;">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <router-link to="/">
                    <a class="nav-link text-center" style="font-size: 14px;">
                      <i class="fa fa-home fa-2x"></i>
                      <span>Home</span>
                    </a>
                  </router-link>

                </li>
                <li class="nav-item">
                  <router-link to="/create/">
                    <a class="nav-link text-center" style="font-size: 14px;">
                    <i class="fa fa-plus fa-2x"></i>
                      <span>Create</span>
                    </a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/manage/">
                    <a class="nav-link text-center" style="font-size: 14px;">
                      <i class="fa fa-cogs fa-2x"></i>
                      <span>Manage</span>
                    </a>
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" class="col-11">
            <!-- class="px-4 py-4" -->
            <router-view></router-view>
          </main>
        </div>
      </div>
  </div>



</template>

<script>

export default {
  name: "Homepage",
  methods: {
    toggleOff: function(){
            $()
          // some code to filter users
        }
  }
  // mounted() {
  //     let popper = document.createElement('script')
  //     popper.setAttribute('src', '../assets/vendor/popper.min.js')
  //     document.body.appendChild(popper)
  //     let tooltip = document.createElement('script')
  //     tooltip.setAttribute('src', '../assets/vendor/chartist-js-tooltip/chartist-plugin-tooltip.js')
  //     document.body.appendChild(tooltip)
  //
  //     console.log("mount successfull")
  //   }
};

</script>

<style lang="scss">
// #f89631

$color-light: #ededee;
$color-gray: #a69ca1;
$color-yellow: #e6ae49;
$color-orange: #f89631;
$color-purple: #2f283a;
$color-purple2: #27212f;
$color-border: #342e3c;
$color-darkpurple: #1c1822;

* {
  color: $color-light;
}

body {
  ::selection { background: $color-yellow;}
  ::-moz-selection { background: $color-yellow;}
  background-color: $color-darkpurple;
  a {color: $color-light;}
  a:hover {
    color: $color-yellow;
    text-decoration: none;
    transition: all 0.25s;
    transform: scale(1.1);
    cursor: pointer;
    i, span {color: $color-yellow;}
  }
  button {
    background-color: $color-orange;
    color: $color-darkpurple !important;
    font-weight: 700 !important;
    &:hover {
      transition: all 0.25s;
      transform: scale(1.1);
      cursor: pointer;
    }
    &:focus {
      outline-style:none;
      box-shadow:none;
    }
   }
}

.navbar {
  background-color: $color-purple;
  border: 1px solid $color-border;
}
.sidebar {
  background-color: $color-purple;
  border-right: 1px solid $color-border;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
}
main {
  margin-top: 85px;
  margin-left: 85px;
}


</style>
