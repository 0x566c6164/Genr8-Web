<template lang="html">

  <v-container fluid>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active indicator"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" class="indicator"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" class="indicator"></li>
        </ol>
        <div class="carousel-inner" style="height: 350px;">
          <div class="carousel-item active">
            <img class="d-block w-100" style="width: 100%; height: 350px;" src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" alt="First slide">
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

      <v-layout row wrap>
        <v-flex v-for="i in 3" :key="`4${i}`" xs4>
        <v-card style="width: 100%;" dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      </v-layout>

      <br>

      <v-card class="table">
        <v-card-title>
          <div class="container">
            <div class="row">
              <div class="col-2"><v-btn flat >Favorites</v-btn></div>
              <div class="col-2"><v-btn flat >ETH</v-btn></div>
              <div class="col-2"><v-btn flat >Other</v-btn></div>
              <div class="col-6"><v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field></div>
            </div>
          </div>
          <v-spacer></v-spacer>

        </v-card-title>
    <v-data-table  :headers="headers" :items="desserts" :search="search">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
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
          {
            text: 'Contract',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Symbol', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
      }
    }
}
</script>

<style scoped lang="scss">

$color-light: #ededee;
$color-gray: #d9d9d9;
$color-yellow: #f89631;
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
    width: 45px;
    height: 5px;
    background-color: $color-gray;
  }
}

.table {
  border: 1px solid $color-gray;
  border-radius: 5px;
  box-shadow: none;
}

</style>
