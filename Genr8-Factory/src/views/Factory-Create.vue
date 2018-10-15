<template>
  <div id="create">
    <h1>Choose your app</h1>
    <button @click="Basic" type="button" class="Basic btn-primary">Generate a basic app</button>
    <button @click="ICO" type="button" class="ICO btn-primary">Generate an ICO app</button>
    </p>
    <div id="basic-modal">
            <Basic/>
    </div>
    <div id="ico-modal" style="display: none;">
            <ICO/>
    </div>
  </div>

</template>


<script>
// TODO: Create templates for:
// [1] Main with 2 buttons asking you what you want to create
// [2] Modal to create basic contract
// [3] Modal to create ICO contract

import Basic from "@/components/Factory-Create-Basic.vue";
import ICO from "@/components/Factory-Create-ICO.vue";

export default {
  name: "factory-create",
  components: {
    Basic,
    ICO
  },
  methods: {
    Basic() {
      // Hides ICO div, and shows Basic Div.
    $('#basic-modal')[0].style.display = 'block';
    $('#ico-modal')[0].style.display = 'none';
    },
    ICO() {
      // Hides Basic div and shows ICO Div.
      $('#basic-modal')[0].style.display = 'none';
      $('#ico-modal')[0].style.display = 'block';
    }
  }
};

</script>

<style scoped lang="scss">
  button {
    margin: 20px;
    padding: 5px;
  }
</style>
