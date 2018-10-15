<template>
  <div id="wrapper">
    <h1>Welcome to Genr8</h1>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
    <h2>What's new this week</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <hr>
    <p>
      Embeded videos, blog posts, links, progress updates, anything worthwile can go here to keep the people coming back for more!
    </p>

  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "Homepage"
};
</script>

<style scoped lang="scss">

#wrapper {
  margin-top: 50px;
  padding-left: 250px;
  padding-right: 250px;
  text-align: center;
  // background-color: #eee2dc;

  hr {
    background-color: #fff;
  }

  h1, h2 {
    padding: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  p {
    // color: #e6ae49;
    letter-spacing: 1px;
    text-align: left;
  }
}

</style>
