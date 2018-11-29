<template lang="html">

  <v-container fluid>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active indicator"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" class="indicator"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" class="indicator"></li>
        </ol>
        <div class="carousel-inner" style="height: 300px;">
          <div class="carousel-item active">
            <img class="d-block w-100" style="width: 100%; height: 300px;" src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="container announcer">
        <div class="row">
          <div class="col-12 text-center">
            Announcement text (switching every few sec & clickable)
          </div>
        </div>
      </div>

      <h1>Fund Index</h1>

      <v-card class="table">
        <v-card-title class="table-header">
          <div class="container">
            <div class="row">
              <div class="col-2">
                <span class="text-muted align-center justify-center row fill-height counter">Counter Currency</span>
              </div>
              <div class="col-1 active-btn">
                  <a class=" button align-center justify-center row fill-height font-weight-regular subheading text-no-wrap">ETH</a>
              </div>
              <div class="col-1 active-btn">
                  <a class=" button align-center justify-center row fill-height font-weight-regular subheading text-no-wrap">Show All</a>
              </div>
              <div class="col-4"></div>
              <div class="col-4"><v-text-field class="search-bar" v-model="search" prepend-inner-icon="mdi-magnify" label="Search" single-line hide-details solo flat ></v-text-field></div>
            </div>
          </div>

        </v-card-title>
    <v-data-table  :headers="headers" :items="desserts" :search="search">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td  class="text-xs-left">{{ props.item.calories }}</td>
        <td class="text-xs-left">{{ props.item.fat }}</td>
        <td class="text-xs-left">{{ props.item.carbs }}</td>
        <td class="text-xs-left">{{ props.item.protein }}</td>
        <td class="text-xs-left">{{ props.item.iron }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
  </v-container>

</template>

<script>
export default {
  name: "home",
  data () {
      return {
        search: '',
        headers: [
          { text: 'Contract', value: 'name'},
          { text: 'Symbol', value: 'calories' },
          { text: 'Price', value: 'fat' },
          { text: 'Supply', value: 'carbs' },
          { text: 'Decimals', value: 'protein' },
          { text: 'Counter', value: 'iron' }
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat:1,
            carbs: 100000,
            protein: 8,
            iron: 'ETH'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat:1,
            carbs: 100000,
            protein: 8,
            iron: 'ETH'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 1,
            carbs: 100000,
            protein: 8,
            iron: 'ETH'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat:1,
            carbs: 100000,
            protein: 8,
            iron: 'ETH'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 1,
            carbs: 100000,
            protein: 8,
            iron: 'ETH'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat:1,
            carbs: 100000,
            protein: 8,
            iron: 'ETH'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat:1,
            carbs: 100000,
            protein: 8,
            iron: 'ETH'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat:1,
            carbs: 100000,
            protein: 8,
            iron: 'ETH'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 1,
            carbs: 100000,
            protein: 8,
            iron: 'ETH'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 1,
            carbs: 100000,
            protein: 8,
            iron: 'ETH'
          }
        ]
      }
    }
}
</script>

<style scoped lang="scss">

$color-light: #ededee;
$color-gray: #d9d9d9;
$color-yellow: #e6ae49;
$color-orange: #df5527;
$color-purple: #2f283a;
$color-purple2: #27212f;
$color-border: #342e3c;
$color-darkpurple: #1c1822;

.carousel-indicators {
  .indicator {
    width: 15px;
    height: 5px;
  }
  .active {
    transform: all 1.5s;
    width: 40px;
    height: 5px;
    background-color: $color-gray;
  }
}

.table {
  border: 1px solid $color-gray;
  border-radius: 5px;
  box-shadow: none;

  .table-header {
    padding: 0px;
    margin: 0px;
    height: 50px;
    .container {
      padding: 5px;
      margin: 0px;
    }
  }
}

.counter {
  border-right: 1px solid $color-light;
}
.search-bar {
  border-left: 1px solid $color-light;
  padding: 0px;
}

.button {
    &:hover {
      color: $color-yellow !important;
      transform: scale(1.05);
      transition: all 0.25s;
    }
}

.announcer {
  background-color: $color-light;
  margin-bottom: 25px;
  border-radius: 4px;
  height: 50px;
}

</style>
