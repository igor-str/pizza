<template>
  <div class="main">
    <a class="product product-mod" href="#" v-for="product in filteredArticles">
      <img class="product__img"  v-bind:src="product.img" v-bind:alt="product.name" width="440" height="440"/>
      <!-- v-bind:src="data.img"    src="../assets/pizza-1.jpg" -->
      <h3 class="product__head">{{ product.name }}</h3>
      <div class="product__price">
        <span>Ціна :</span>
        <span>{{product.price}} грн</span>
      </div>
      <p class="product__desc">{{product.desc}}</p>
      <div class="product__aval">
        <span class="product__aval--yes">Є в наявності</span>
        <span class="product__aval--no">Немає в наявності</span>
      </div>
    </a>
  </div>
</template>

<script>
import SortModule from "./SortModule";
export default {
//  components: {ProductModule},
  name: 'ContentModule',
  data () {
    return {
      products: [
        {
          "id": 1,
          "img": "../build/pizza-1.jpg",
          "name": "Pizza Chili",
          "price": 120,
          "desc": "Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 2,
          "img": "../build/pizza-2.jpg",
          "name": "Pizza Margarita",
          "price": 110,
          "desc": "2 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 3,
          "img": "../build/pizza-3.jpg",
          "name": "Pizza Napoli",
          "price": 125,
          "desc": "3 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 4,
          "img": "../build/pizza-4.jpg",
          "name": "Pizza Bayern",
          "price": 100,
          "desc": "4 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 5,
          "img": "../build/pizza-5.jpg",
          "name": "Pizza Ukr",
          "price": 105,
          "desc": "5 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 6,
          "img": "../build/pizza-6.jpg",
          "name": "Pizza Americana",
          "price": 135,
          "desc": "6 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        }
      ]
    }
  },
  computed: {
    // Вычисленное свойство, которое содержит только те статьи, которые соответствуют searchString.
    filteredArticles: function () {
      var articles_array = this.products;
      var searchString = searchString;
      console.log(searchString);

      if(!searchString){
        return articles_array;
      }

      searchString = searchString.trim().toLowerCase();

      articles_array = articles_array.filter(function(item){
        if(item.name.toLowerCase().indexOf(searchString) !== -1){
          return item;
        }
      })

      // Возвращает массив с отфильтрованными данными.
      return articles_array;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .main {
    margin: 2px 0;
    background: #21212e url('../assets/bg-main.png');
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  .product {
    display: flex;
    flex-direction: column;
    border: 1px solid #cccccc;
    cursor: pointer;
    width: 300px;
    text-decoration: none;
    color: #000000;
    background-color: #ffffff;
    box-shadow: 0 0 5px 5px rgba(255,255,255,0);
    transition: 0.3s;
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
    &:hover {
      box-shadow: 0 0 5px 5px rgba(255,255,255,0.5);
    }
  }
  .product-mod {
    margin: 10px;
  }
</style>
