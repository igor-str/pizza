<template>
  <div id="app">
    <!--<router-view/>-->
    <navigation-module></navigation-module>
    <slider-module></slider-module>
    <content-module></content-module>
    <footer-module></footer-module>
    <!--<img src="./assets/logo.png">-->
  </div>
</template>

<script>

  import NavigationModule from "./components/NavigationModule";
  import SliderModule from "./components/SliderModule";
  import ContentModule from "./components/ContentModule";
  import FooterModule from "./components/FooterModule";

  export default {
    components: {
      FooterModule,
      NavigationModule,
      ContentModule,
      SliderModule
    },
    name: 'app'
  }

</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}

</style>
