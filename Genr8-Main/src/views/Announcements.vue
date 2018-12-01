<template>
  <div>
    <h1>Announcements</h1>
    <div class="container">
        <div class="item-row">
          <a class="row col-12">
            <span class="col-11 name title">First Entry</span>
          <span class="col-1 date subheading">01/12/2018</span>
        </a>
        </div>
        <div class="item-row">
          <a class="row col-12">
            <span class="col-11 name title">Second Entry</span>
          <span class="col-1 date subheading">01/12/2018</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Announcements'
}
</script>

<style scoped lang="scss">

$color-gray: #d9d9d9;
$color-orange: #df5527;

h1 {
  margin-top: 25px;
}

.container {
  border: 1px solid $color-gray;
  border-radius: 4px;
  margin-top: 10px;

  .item-row {
    padding: 25px;
    border-bottom: 1px solid $color-gray;
    &:hover {
      color: $color-orange;
    }
  }
}

</style>
