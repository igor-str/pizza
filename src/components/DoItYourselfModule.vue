<template>
  <div class="make-box">
    <div class="make">
      <div class="make__img">
        <img src="../assets/pizza-1.jpg" alt="" width="" height=""/>
      </div>
      <div class="make__settings">
        <h1>Pizza New York</h1>
        <div class="make__size">
          <p>Виберіть розмір піци:</p>
          <select id="size-pizza" v-model="selected">
            <option value="small">Малий - 30см</option>
            <option value="middle">Середній - 50см</option>
            <option value="large">Великий - 80см</option>
          </select>
          <span>Выбрано: {{ selected }}</span>
        </div>
        <ul class="make__desc">
          <li class="make__desc-item">Томатный соус</li>
          <li class="make__desc-item">Сыр моцарелла</li>
          <li class="make__desc-item">Ветчина</li>
          <li class="make__desc-item">Ананас</li>
        </ul>
        <div class="make__count">
          <button v-on:click.prevent="countPizzaAdd">Додати</button>
          <button v-on:click.prevent="countPizzaRemove">Забрати</button>
          <span class="make__count--result">{{ counter }} шт</span>
        </div>
        <div class="make__price">
          <span>До оплати :</span>
          <span>{{ getPizzaSize }} грн</span>
        </div>
      </div>
    </div>
    <div class="ingredients">
      <h2>Додайте до Вашої піци додаткові інгрідієнти, це буде смачно!</h2>
      <div class="ingredients__box">
        <div class="ingredient" v-for="ingridient in ingridients">
          <div class="ingredient__complete" v-show="showMarker">
            <svg id="Capa_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 288.579 288.579">
            <g><path style="fill:#42b983;" d="M283.127,57.184l-22.871-22.131c-7.101-6.874-18.438-6.683-25.311,0.424L113.442,161.085 c-6.88,7.107-19.404,8.879-27.985,3.962l-42.824-24.542c-8.568-4.917-19.512-1.951-24.428,6.629l-15.83,27.615 c-4.917,8.58-1.951,19.518,6.623,24.434c0,0,103.889,59.46,103.931,59.376c0.048-0.084,137.25-141.57,170.617-176.058 C290.419,75.389,290.228,64.052,283.127,57.184z"/></g>
            </svg>
          </div>
          <div class="ingredient__img-box">
            <img class="ingredient__img" v-bind:src="ingridient.img" v-bind:alt="ingridient.name" width="" height="">
          </div>
          <h3 class="ingredient__name">{{ ingridient.name }}</h3>
          <p class="ingredient__price">+ {{ ingridient.price }} грн</p>
          <button class="ingredient__button" v-on:click.prevent="countPizzaAdd" @click="addIngridient(ingridient)">Додати</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoItYourselfModule',
  data: function () {
    return {
      counter: 1,
      selected: 'small',
      ingridient: 0,
      showMarker: false,
      ingridients: [
        {
          "id": 1,
          "img": "../build/ingridient-hapenjo.png",
          "name": "Халапеньйо",
          "price": 7
        },
        {
          "id": 2,
          "img": "../build/ingridient-chiken.jpg",
          "name": "Курка",
          "price": 5
        },
        {
          "id": 3,
          "img": "../build/ingridient-becon.jpg",
          "name": "Бекон",
          "price": 6
        },
        {
          "id": 4,
          "img": "../build/ingridient-mozarella.jpg",
          "name": "Сир моцарелла",
          "price": 5
        },
        {
          "id": 5,
          "img": "../build/ingridient-mush.jpg",
          "name": "Гриби",
          "price": 4
        },
        {
          "id": 6,
          "img": "../build/ingridient-parmezan.jpg",
          "name": "Сир пармезан",
          "price": 5
        },
        {
          "id": 7,
          "img": "../build/ingridient-pineapple.jpg",
          "name": "Ананас",
          "price": 6
        },
        {
          "id": 8,
          "img": "../build/ingridient-sause.jpg",
          "name": "Соус фірмовий",
          "price": 3
        },
        {
          "id": 9,
          "img": "../build/ingridient-tommatto.jpg",
          "name": "Помідори",
          "price": 4
        }
      ]
    }
  },
  computed: {
    getPizzaSize (){
      let select = this.selected;
      let count = this.counter;
      if (select === 'small') {
        select = 10;
      }
      if (select === 'middle') {
        select = 20;
      }
      if (select === 'large') {
        select = 30;
      }
      return select * count
    }
  },
  methods: {
    countPizzaAdd: function () {
      if (this.counter > 0 && this.counter < 10) {
        this.counter ++
      }
    },
    countPizzaRemove: function () {
      if (this.counter > 1) {
        this.counter --
      }
    },
    addIngridient (ingridient) {
      let price = ingridient.price;
      console.log(price);
      this.showMarker = true;
      return price
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .make {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: #21212e url('../assets/bg-main.png');
  color: #ffffff;
  &__img {
    width: 440px;
    img {
      width: 100%;
      height: auto;
      max-width: 440px;
    }
  }
  &__settings {
    width: calc(100% - 440px);
    padding: 0 10%;
  }
  &__price {
    font-size: 22px;
    margin: 20px 0;
  }
  &__size {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin-right: 20px;
    }
  }
  &__desc {
    margin: 0;
    padding: 0;
    text-align: left;
  }
  &__count {
    margin: 10px 0;
    button {
      border: 2px solid #fff;
      border-radius: 20px;
      padding: 10px 25px;
      cursor: pointer;
      background-color: #ffba00;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      &:nth-child(1) {
        background-color: #42b983;
        margin-right: 20px;
      }
    }
    &--result {
      padding: 0 25px;
      font-size: 24px;
      vertical-align: middle;
      display: inline-block;
      background-color: red;
      border-radius: 50px;
      border: 2px solid #fff;
      line-height: 34px;
      margin-left: 20px;
    }
  }
  &__desc-item {
    line-height: 1.5em;
  }
}
  .ingredients {
    &__box {
      display: flex;
      justify-content: space-around;
      align-items: stretch;
      flex-wrap: wrap;
    }
  }
  .ingredient {
    margin: 5px;
    padding: 10px;
    width: 220px;
    border: 1px solid #42b983;
    border-radius: 5px;
    position: relative;
    &__complete {
      position: absolute;
      right: 10px;
      top: 0;
    }
    &__img-box {
      height: 100px;
    }
    &__button {
      border: 2px solid transparent;
      border-radius: 20px;
      padding: 10px 25px;
      cursor: pointer;
      background-color: #42b983;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      transition: 0.3s;
      &:hover {
        background-color: #03B939;
      }
    }
  }
</style>
