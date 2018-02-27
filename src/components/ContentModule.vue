<template>
  <div class="main-box">
    <div class="sort-by">
      <p class="sort-by__title">Пошук піци:</p>
      <form class="search">
        <input class="search__text" v-model="searchString" type="search" placeholder="Введіть назву піци"/>
      </form>
      <select v-model="sort" class="select">
        <option value="" disabled selected>Сортування:</option>
        <option v-for="item in sortByArr" :label="item.label" :value="item.value"></option>
      </select>
    </div>
    <div class="main">
      <a class="product product-mod" href="#" v-for="product in sortProducts">
        <img class="product__img"  v-bind:src="product.img" v-bind:alt="product.name" width="440" height="440"/>
        <h3 class="product__head">{{ product.name }}</h3>
        <div class="product__price">
          <span>Ціна :</span>
          <span>{{product.price}} грн</span>
        </div>
        <p class="product__desc">{{product.desc}}</p>
        <div class="product__add-bag">
          <span class="product__add-bag--btn">Додати в корзину</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'ContentModule',
  data: function () {
    return {
      searchString: '',
      sort: '',
      sortByArr: [
        { label: 'За замовчуванням', value: 'none' },
        { label: 'По назві', value: 'name' },
        { label: 'По ціні', value: 'price' }
      ],
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
          "name": "Pizza New York",
          "price": 110,
          "desc": "2 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 3,
          "img": "../build/pizza-3.jpg",
          "name": "Pizza Kebab",
          "price": 125,
          "desc": "3 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 4,
          "img": "../build/pizza-4.jpg",
          "name": "Pizza Bagel",
          "price": 100,
          "desc": "4 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 5,
          "img": "../build/pizza-5.jpg",
          "name": "Pizza Ukrainian",
          "price": 105,
          "desc": "5 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 6,
          "img": "../build/pizza-6.jpg",
          "name": "Pizza Americana",
          "price": 135,
          "desc": "6 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 7,
          "img": "../build/pizza-7.jpg",
          "name": "Pizza Lahma Bi Ajeen",
          "price": 154,
          "desc": "7 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 8,
          "img": "../build/pizza-8.jpg",
          "name": "Pizza Margherita",
          "price": 144,
          "desc": "8 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 9,
          "img": "../build/pizza-9.jpg",
          "name": "Pizza Calzone",
          "price": 180,
          "desc": "9 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 10,
          "img": "../build/pizza-10.jpg",
          "name": "Pizza Stromboli",
          "price": 150,
          "desc": "10 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 11,
          "img": "../build/pizza-11.jpg",
          "name": "Pizza Marinara",
          "price": 130,
          "desc": "11 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 12,
          "img": "../build/pizza-12.jpg",
          "name": "Pizza Neapolitan",
          "price": 137,
          "desc": "12 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 13,
          "img": "../build/pizza-13.jpg",
          "name": "Pizza Deep Dish",
          "price": 142,
          "desc": "13 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 14,
          "img": "../build/pizza-14.jpg",
          "name": "Pizza Mexican",
          "price": 112,
          "desc": "14 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        },
        {
          "id": 15,
          "img": "../build/pizza-15.jpg",
          "name": "Pizza Tomato",
          "price": 165,
          "desc": "15 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments."
        }
      ]
    }
  },
  computed: {
    // old search into name
    // Вычисленное свойство, которое содержит только те статьи, которые соответствуют searchString.
    // filteredProducts() {
    //   let articles_array = this.products;
    //   let searchString = this.searchString;
    //   if(!searchString){
    //     return articles_array;
    //   }
    //   searchString = searchString.trim().toLowerCase();
    //   articles_array = articles_array.filter(function(item){
    //     if(item.name.toLowerCase().indexOf(searchString) !== -1){
    //       return item;
    //     }
    //   });
    //   // Возвращает массив с отфильтрованными данными.
    //   return articles_array;
    // },
    sortProducts() {
      let products = this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.searchString.toLowerCase());
      });
      if (this.sort == 'name') {
        return products.sort(function(a, b) {
          return (a.name > b.name) ? 1 : -1 // sort by name
        });
      } else if (this.sort == 'price') {
        return products.sort(function(a, b) {
          return a.price - b.price // sort by price
        });
      } else {
        return products;
      }
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .sort-by {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 0;
    color: #ffffff;
    background-color: #42b983;
    &__item {
      margin: 0 15px;
      cursor: pointer;
    }
    &__title {
      margin: 0 30px;
    }
    &__btn {
      background-color: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 5px;
      width: 16px;
      height: 16px;
      background-image: url("../assets/down-arrow.svg");
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      &:nth-child(odd) {
        margin-left: 5px;
        transform: rotate(180deg);
      }
    }
  }
  option[value=""][disabled] {
    display: none;
  }
  .search {
    &__text {
      padding: 4px 10px;
      outline: none;
      border: 1px solid #42b983;
      border-radius: 15px;
      color: #000;
      &::placeholder {
        color: #000;
      }
      &:focus {
        border: 1px solid #00f385;
      }
    }
  }
  .select {
    margin-left: 30px;
    border-radius: 15px;
    padding: 3px 10px;
    color: #000;
    outline: none;
    border: 1px solid #42b983;
  }
  .main {
    min-height: 552px;
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
    &__add-bag {
      font-size: 18px;
      margin-bottom: 10px;
      color: #42b983;
      text-align: center;
      &--btn {
        display: inline-flex;
        border: 1px solid #42b983;
        padding: 5px 15px;
        transition: 0.3s;
        &:hover {
          border: 1px solid #ff8c00;
          color: #ff8c00;
          background-color: #f3e6d8;
        }
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
