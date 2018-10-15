<template>
  <div id="icos">
    <h1>This is the ICOs {{ id }} page</h1>

    <ul id="icoWrapper" class="list-unstyled">
      <li>
        <h2>Ico Name</h2>
        <div id="progressBar">
          <div class="progress rounded-0 g-overflow-visible g-bg-gray-dark-v2 g-pa-3 g-mb-15">
            <div class="progress-bar u-progress-bar--sm g-pos-rel" role="progressbar" style="width: 56.7069%;" aria-valuenow="8789576" aria-valuemin="0" aria-valuemax="15500000">
              <div class="text-center u-progress__pointer-v3 g-font-size-11 g-color-white g-bg-primary g-px-5">$ 8 789 576</div>
            </div>
          </div>
          <h6 class="text-uppercase g-font-size-12 g-font-weight-600 g-letter-spacing-0_5">
            Soft Cap:
            <div class="pull-right">Goal:
              <span class="g-color-primary">50 ETH</span>
            </div>
          </h6>

          <div class="progress rounded-0 g-overflow-visible g-bg-gray-dark-v2 g-pa-3 g-mb-15">
            <div class="progress-bar u-progress-bar--sm g-pos-rel" role="progressbar" style="width: 56.7069%;" aria-valuenow="8789576" aria-valuemin="0" aria-valuemax="15500000">
              <div class="text-center u-progress__pointer-v3 g-font-size-11 g-color-white g-bg-primary g-px-5">$ 8 789 576</div>
            </div>
          </div>
          <h6 class="text-uppercase g-font-size-12 g-font-weight-600 g-letter-spacing-0_5">
            Hard Cap:
            <div class="pull-right">Goal:
              <span class="g-color-primary">200 ETH</span>
            </div>
          </h6>

          <div class="progress rounded-0 g-overflow-visible g-bg-gray-dark-v2 g-pa-3 g-mb-15">
            <div class="progress-bar u-progress-bar--sm g-pos-rel" role="progressbar" style="width: 50.7069%;" aria-valuenow="100000" aria-valuemin="0" aria-valuemax="210000">
              <div class="text-center u-progress__pointer-v3 g-font-size-11 g-color-white g-bg-primary g-px-5">100 000</div>
            </div>
          </div>
          <h6 class="text-uppercase g-font-size-12 g-font-weight-600 g-letter-spacing-0_5">
            Time Cap:
            <div class="pull-right">Block #:
              <span class="g-color-primary">210 000</span>
            </div>
          </h6>

          <button id="investID#" class="btn btn-md u-btn-3d u-btn-brown g-mr-10 g-mb-15">Invest</button>
          <button id="redeemID#" class="btn btn-md u-btn-3d u-btn-purple g-mr-10 g-mb-15">Redeem/Sell</button>

        </div>

      </li>

    </ul>

  </div>
</template>

<script>
export default {
  name: 'ICOs',
  data() {
    return {
      id: this.$route.params.id
    }
  }
}

</script>

<style scoped lang="scss">
  #icos {
    width: 80%;
    padding: 25px;
  }

  #icoWrapper {
    padding: 50px;
  }

  #progressBar {
    width: 350px;
  }
</style>
