<template lang="html">

  <v-container fluid>
    <v-layout align-center justify-center column fill-height>
      <v-carousel
        delimiter-icon="o" prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right">
        <v-carousel-item v-for="(item,i) in items":key="i":src="item.src"></v-carousel-item>
      </v-carousel>
      <v-layout row wrap>
        <v-flex v-for="i in 3" :key="`4${i}`" xs4>
        <v-card style="width: 100%;" dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      </v-layout>
    </v-layout>
    <v-layout align-center justify-center column fill-height>
      List of shares
    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: "home",
  data () {
     return {
       items: [
         {
           src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
         },
         {
           src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
         },
         {
           src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
         },
         {
           src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
         }
       ]
     }
   }
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
