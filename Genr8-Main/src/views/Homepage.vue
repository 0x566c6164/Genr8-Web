<template>
  <div id="dashboard">
    <!-- Header -->
    <header id="js-header" class="u-header u-header--sticky-top">
      <div class="u-header__section u-header__section--admin-dark g-min-height-65">
        <nav class="navbar no-gutters g-pa-0">
          <div class="col-auto d-flex flex-nowrap u-header-logo-toggler g-py-12">
            <!-- Logo -->
            <a href="#" class="navbar-brand d-flex align-self-center g-hidden-xs-down g-line-height-1 py-0 g-mt-5">
              <img class="u-header-logo" src="../../public/assets/img/n_copy.png" alt="" style="width: 132px; height: 104px;">
            </a>
            <!-- End Logo -->

            <!-- Sidebar Toggler -->
            <a class="js-side-nav u-header__nav-toggler d-flex align-self-center ml-auto" href="#" data-hssm-class="u-side-nav--mini u-sidebar-navigation-v1--mini" data-hssm-body-class="u-side-nav-mini" data-hssm-is-close-all-except-this="true" data-hssm-target="#sideNav">
              <i class="hs-admin-align-left"></i>
            </a>
            <!-- End Sidebar Toggler -->
          </div>
          </nav>
        </div>
    </header>
    <!-- End Header -->


    <main class="container-fluid px-0 g-pt-65">
      <div class="row no-gutters g-pos-rel g-overflow-x-hidden">
        <!-- Sidebar Nav -->
        <div id="sideNav" class="col-auto u-sidebar-navigation-v1 u-sidebar-navigation--dark">
          <ul id="sideNavMenu" class="u-sidebar-navigation-v1-menu u-side-nav--top-level-menu g-min-height-100vh mb-0">
            <!-- Dashboards -->
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--has-sub-menu u-side-nav--top-level-menu-item">
                <router-link to="/" class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12 active" data-hssm-target="#subMenu1">
                  <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18 ">
                  <i class="hs-admin-server"></i>
                  </span>
                  <span class="media-body align-self-center">Home</span>
                  <span class="d-flex align-self-center u-side-nav--control-icon"></span>
                  <span class="u-side-nav--has-sub-menu__indicator"></span>
              </router-link>

            </li>
            <!-- End Home -->

            <!-- App Views -->
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--has-sub-menu u-side-nav--top-level-menu-item">
              <router-link to="/apps/" class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" data-hssm-target="#subMenu4">
                <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
                <i class="hs-admin-layers"></i>
                </span>
                <span class="media-body align-self-center">Apps</span>
                <span class="d-flex align-self-center u-side-nav--control-icon"></span>
                <span class="u-side-nav--has-sub-menu__indicator"></span>
              </router-link>
            </li>
            <!-- End Apps -->

            <!-- Tables -->
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--has-sub-menu u-side-nav--top-level-menu-item">
              <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="#!" data-hssm-target="#subMenu8">
                <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
                <i class="hs-admin-layout-grid-3"></i>
                </span>
                <span class="media-body align-self-center">ICO Explorer</span>
                <span class="d-flex align-self-center u-side-nav--control-icon">
                <i class="hs-admin-angle-right"></i>
                </span>
                <span class="u-side-nav--has-sub-menu__indicator"></span>
              </a>

              <!-- Tables: Submenu-1 -->
              <ul id="subMenu8" class="u-sidebar-navigation-v1-menu u-side-nav--second-level-menu mb-0">
                <!-- Basic Tables -->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="tables/tables-basic.html">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                    <i class="hs-admin-layout-list-thumb"></i>
                    </span>
                    <span class="media-body align-self-center">Live ICO's</span>
                  </a>
                </li>
                <!-- End Basic Tables -->

                <!-- Table Designs -->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="tables/tables-complex.html">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                    <i class="hs-admin-layout-media-overlay-alt-2"></i>
                    </span>
                    <span class="media-body align-self-center">Ready to Launch</span>
                  </a>
                </li>
              </ul>
              <!-- End Tables: Submenu-1 -->
            </li>
            <!-- End Tables -->

            <!-- Casino -->
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--has-sub-menu u-side-nav--top-level-menu-item">
              <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="#!" data-hssm-target="#subMenu6">
                <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
                <i class="hs-admin-layout-media-center-alt"></i>
                </span>
                <span class="media-body align-self-center">Casino</span>
                <span class="d-flex align-self-center u-side-nav--control-icon">
              </span>
                <span class="u-side-nav--has-sub-menu__indicator"></span>
              </a>

            <!-- Packages -->
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--top-level-menu-item">
              <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="packages.html">
                <span class="d-flex align-self-center g-font-size-18 g-mr-18">
                <i class="hs-admin-medall"></i>
                </span>
                <span class="media-body align-self-center">Traders Lounge</span>
              </a>
            </li>
            <!-- End Packages -->
          </ul>
        </div>
        <!-- End Sidebar Nav -->


        <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
          <!-- Footer -->
          <footer id="footer" class="u-footer--bottom-sticky g-bg-white g-color-gray-dark-v6 g-brd-top g-brd-gray-light-v7 g-pa-20">
            <div class="row align-items-center">
              <!-- Footer Nav -->
              <div class="col-md-4 g-mb-10 g-mb-0--md">
                <ul class="list-inline text-center text-md-left mb-0">
                  <li class="list-inline-item">
                    <a class="g-color-gray-dark-v6 g-color-secondary--hover" href="#">FAQ</a>
                  </li>
                  <li class="list-inline-item">
                    <span class="g-color-gray-dark-v6">|</span>
                  </li>
                  <li class="list-inline-item">
                    <a class="g-color-gray-dark-v6 g-color-secondary--hover" href="#">Support</a>
                  </li>
                  <li class="list-inline-item">
                    <span class="g-color-gray-dark-v6">|</span>
                  </li>
                  <li class="list-inline-item">
                    <a class="g-color-gray-dark-v6 g-color-secondary--hover" href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <!-- End Footer Nav -->

              <!-- Footer Socials -->
              <div class="col-md-4 g-mb-10 g-mb-0--md">
                <ul class="list-inline g-font-size-16 text-center mb-0">
                  <li class="list-inline-item g-mx-10">
                    <a href="#!" class="g-color-facebook g-color-secondary--hover">
                      <i class="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li class="list-inline-item g-mx-10">
                    <a href="#!" class="g-color-google-plus g-color-secondary--hover">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li class="list-inline-item g-mx-10">
                    <a href="#!" class="g-color-black g-color-secondary--hover">
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                  <li class="list-inline-item g-mx-10">
                    <a href="#!" class="g-color-twitter g-color-secondary--hover">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- End Footer Socials -->

              <!-- Footer Copyrights -->
              <div class="col-md-4 text-center text-md-right">
                <small class="d-block g-font-size-default">&copy; 2018 Htmlstream. All Rights Reserved.</small>
              </div>
              <!-- End Footer Copyrights -->
            </div>
          </footer>
          <!-- End Footer -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Homepage"
};
</script>

<style scoped lang="scss">

</style>
