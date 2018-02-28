<template>
  <div class="main-box">
    <div class="sort-by">
      <div class="sort-by__box">
        <p class="sort-by__title">Пошук піци:</p>
        <form class="search">
          <input class="search__text" v-model="searchString" type="search" placeholder="Введіть назву піци"/>
        </form>
        <select v-model="sort" class="select">
          <option value="" disabled selected>Сортування:</option>
          <option v-for="item in sortByArr" :label="item.label" :value="item.value"></option>
        </select>
      </div>
      <div class="bag-min">
        <svg version="1.1" id="Capa_2" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve" width="25px" height="25px" class=""><g><g>
        <path d="M59,16V2H1v14H0v37.259C0,55.873,2.127,58,4.742,58h50.517C57.873,58,60,55.873,60,53.259V16H59z M56.5,16l-5.18-6.906   L56.414,4H57v12H56.5z M11,16V9c0-0.024-0.012-0.046-0.014-0.07c-0.005-0.064-0.02-0.124-0.036-0.187   c-0.011-0.042-0.01-0.085-0.027-0.125c-0.009-0.022-0.027-0.039-0.037-0.061c-0.027-0.055-0.065-0.102-0.103-0.152   c-0.028-0.036-0.044-0.081-0.077-0.113L6.414,4h47.172l-4.292,4.292c-0.032,0.032-0.049,0.077-0.077,0.113   c-0.038,0.05-0.075,0.097-0.102,0.152c-0.011,0.022-0.028,0.038-0.038,0.061c-0.017,0.04-0.016,0.084-0.027,0.125   c-0.017,0.063-0.032,0.122-0.036,0.187C49.012,8.954,49,8.976,49,9v7H11z M6,16l3-4.001V16H6z M51,11.999L54,16h-3V11.999z M3,4   h0.586L8.68,9.094L3.5,16H3V4z M58,53.259C58,54.771,56.77,56,55.258,56H4.742C3.23,56,2,54.771,2,53.259V18h56V53.259z" data-original="#000000" class="active-path" data-old_color="##42b98fill:##42B98fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#42b983fill:#42B983fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000" fill="#ffffff"/>
        <path d="M42,24c-0.552,0-1,0.447-1,1v6c0,6.065-4.935,11-11,11s-11-4.935-11-11v-6c0-0.553-0.448-1-1-1s-1,0.447-1,1v6   c0,7.168,5.832,13,13,13s13-5.832,13-13v-6C43,24.447,42.552,24,42,24z" data-original="#000000" class="active-path" data-old_color="##42b98fill:##42B98fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#42b983fill:#42B983fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000" fill="#ffffff"/>
        <path d="M20,25c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.206-1.794-4-4-4s-4,1.794-4,4c0,0.553,0.448,1,1,1s1-0.447,1-1   c0-1.103,0.897-2,2-2S20,23.897,20,25z" data-original="#000000" class="active-path" data-old_color="##42b98fill:##42B98fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#42b983fill:#42B983fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000" fill="#ffffff"/>
        <path d="M42,21c-2.206,0-4,1.794-4,4c0,0.553,0.448,1,1,1s1-0.447,1-1c0-1.103,0.897-2,2-2s2,0.897,2,2c0,0.553,0.448,1,1,1   s1-0.447,1-1C46,22.794,44.206,21,42,21z" data-original="#000000" class="active-path" data-old_color="##42b98fill:##42B98fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#42b983fill:#42B983fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000fill:#000000" fill="#ffffff"/>
        </g></g>
        </svg>
        <button class="bag-min__btn" @click="showCart = !showCart" v-show="!verified">{{items.length}}</button>
        <div class="cart" v-show="showCart">
          <div class="cart__box" v-show="items.length > 0">
            <ul>
              <li v-for="item in items" transition="fade">
                <span>{{ item.quantity }} шт.</span>
                {{item.name}}
                <span class="cart__del" @click="removeFromCart(item)">
                  <svg version="1.1" id="Capa_32" x="0px" y="0px" width="16px" height="auto" viewBox="0 0 408.483 408.483" style="enable-background:new 0 0 408.483 408.483;" xml:space="preserve">
                    <g>
                      <g>
                        <path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316    H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293    c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329    c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355    c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356    c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z" fill="#42b983"/>
                        <path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916    c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z" fill="#42b983"/>
                      </g>
                    </g>
                  </svg>
                </span>
              </li>
            </ul>
            <div><button class="cart__enter" @click="verified = true, showCart = false">Перейти в корзину</button></div>
          </div>
          <div class="cart__empty" v-show="items.length === 0">
            <p>Ваша корзина пуста!</p>
          </div>
        </div>
        <div class="checkout" v-show="verified">
          <h3>Крозина</h3>
          <h5 v-for="item in items"><strong>{{ item.quantity }} шт. </strong>{{ item.name }}<span> | {{ item.price * item.quantity }} грн</span></h5>
          <hr/>
          <div class="checkout__result-box">
            <h4>Всього до оплати: <span>{{ total }} грн</span></h4>
            <button class="checkout__enter">Тут має бути ще якась дія</button>
          </div>
        </div>
      </div>
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
          <span class="product__add-bag--btn" @click="addToCart(product)">Додати в корзину</span>
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
      items: [],
      showCart: false,
      verified: false,
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
          "desc": "Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 2,
          "img": "../build/pizza-2.jpg",
          "name": "Pizza New York",
          "price": 110,
          "desc": "2 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 3,
          "img": "../build/pizza-3.jpg",
          "name": "Pizza Kebab",
          "price": 125,
          "desc": "3 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 4,
          "img": "../build/pizza-4.jpg",
          "name": "Pizza Bagel",
          "price": 100,
          "desc": "4 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 5,
          "img": "../build/pizza-5.jpg",
          "name": "Pizza Ukrainian",
          "price": 105,
          "desc": "5 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 6,
          "img": "../build/pizza-6.jpg",
          "name": "Pizza Americana",
          "price": 135,
          "desc": "6 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 7,
          "img": "../build/pizza-7.jpg",
          "name": "Pizza Lahma Bi Ajeen",
          "price": 154,
          "desc": "7 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 8,
          "img": "../build/pizza-8.jpg",
          "name": "Pizza Margherita",
          "price": 144,
          "desc": "8 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 9,
          "img": "../build/pizza-9.jpg",
          "name": "Pizza Calzone",
          "price": 180,
          "desc": "9 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 10,
          "img": "../build/pizza-10.jpg",
          "name": "Pizza Stromboli",
          "price": 150,
          "desc": "10 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 11,
          "img": "../build/pizza-11.jpg",
          "name": "Pizza Marinara",
          "price": 130,
          "desc": "11 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 12,
          "img": "../build/pizza-12.jpg",
          "name": "Pizza Neapolitan",
          "price": 137,
          "desc": "12 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 13,
          "img": "../build/pizza-13.jpg",
          "name": "Pizza Deep Dish",
          "price": 142,
          "desc": "13 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 14,
          "img": "../build/pizza-14.jpg",
          "name": "Pizza Mexican",
          "price": 112,
          "desc": "14 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
        },
        {
          "id": 15,
          "img": "../build/pizza-15.jpg",
          "name": "Pizza Tomato",
          "price": 165,
          "desc": "15 Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
          "quantity": 0
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
    },
    total() {
      var total = 0;
      for(var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    }
  },
  methods: {
    addToCart(product) {
      product.quantity += 1;
      console.log(product.quantity);
      this.items.push(product);
    },
    removeFromCart(product) {
      product.quantity -= 1;
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .bag-min {
    position: relative;
    margin-right: 30px;
    &__btn {
      position: absolute;
      width: 20px;
      height: 20px;
      line-height: 12px;
      border-radius: 50%;
      top: -5px;
      right: -10px;
      background: #ff8c00;
      font-size: 12px;
      border: none;
      padding: 0;
      outline: none;
      vertical-align: middle;
      text-align: center;
      color: #fff;
      cursor: pointer;
    }
  }
  .cart {
    z-index: 100;
    width: 30vw;
    padding: 20px;
    position: absolute;
    right: 25px;
    top: 25px;
    background-color: #fff;
    color: #000;
    box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
    &__empty {
      background-color: transparent;
      font-weight: 700;
    }
    &__box {
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        margin: 5px 0;
      }
    }
    &__del {
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      cursor: pointer;
    }
    &__enter {
      border: 2px solid #fff;
      border-radius: 20px;
      padding: 10px 25px;
      cursor: pointer;
      background-color: #42b983;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      outline: transparent;
      transition: 0.3s;
      &:hover {
        background-color: #ff8c00;
      }
    }
  }
  .checkout {
    z-index: 100;
    width: 30vw;
    padding: 20px;
    position: absolute;
    right: 25px;
    top: 25px;
    background-color: #fff;
    color: #000;
    box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
    &__enter {
      border: 2px solid #fff;
      border-radius: 20px;
      padding: 10px 25px;
      cursor: pointer;
      background-color: #42b983;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      outline: transparent;
      transition: 0.3s;
      &:hover {
        background-color: #ff8c00;
      }
    }
    h3 {
      margin-top: 0;
    }
  }
  .sort-by {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    color: #ffffff;
    background-color: #42b983;
    &__box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
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
