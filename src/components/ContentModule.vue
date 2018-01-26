<template>
  <div class="main">  <!-- назва класу може бути будь-яка -->
    <product-module></product-module>
  </div>
</template>

<script>
  import ProductModule from "./ProductModule";
export default {
  components: {ProductModule},
  name: 'ContentModule',
  data () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .main {
    margin: 2px 0;
    background: #21212e url('../assets/bg-main.png');
    padding: 15px;
  }
</style>
