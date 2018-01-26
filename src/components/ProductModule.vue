<template>
  <a class="product" href="#">
    <img class="product__img" src="../assets/pizza-1.jpg" alt="pizza 1" width="440" height="440"/>
    <h3 class="product__head">Pizza 1</h3>
    <div class="product__price">
      <span>Ціна :</span>
      <span>120 грн</span>
    </div>
    <p class="product__desc">Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.</p>
    <div class="product__aval">
      <span class="product__aval--yes">Є в наявності</span>
      <span class="product__aval--no">Немає в наявності</span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ProductModule',
  data () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .product {
    display: flex;
    flex-direction: column;
    border: 1px solid #cccccc;
    cursor: pointer;
    width: 300px;
    text-decoration: none;
    color: #000000;
    background-color: #ffffff;
    &__img {
      width: 100%;
      height: auto;
    }
    &__head {
      margin: 10px;
      font-size: 24px;
      color: #000000;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
    }
    &__desc {
      margin: 10px;
      font-size: 16px;
      text-align: center;
      color: #cccccc;
    }
    &__price {
      font-size: 18px;
    }
    &__aval {
      font-size: 18px;
      margin-bottom: 10px;
      &--yes {
        color: #42b983;
        text-align: center;
      }
      &--no {
        color: #ff8c00;
        text-align: center;
        display: none;
      }
    }
  }
</style>
