<template>
  <div class="sort-by">  <!-- назва класу може бути будь-яка -->
    <p class="sort-by__title">Сортування:</p>
    <button class="sort-by__btn"></button>
    <button class="sort-by__btn"></button>
    <form class="search">
      <input class="search__text" v-model="searchString" type="search" placeholder="Введіть назву піци"/>
      <input class="search__submit" type="submit" value="Знайти"/>
    </form>
  </div>
</template>

<script>
import ContentModule from "./ContentModule";
export default {
  name: 'SortModule',
  data () {
    return {
      searchString: ""
    }
  },
  computed: {

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
  .search {
    padding-left: 30px;
    &__text {
      &::placeholder {
        padding: 0 10px;
      }
    }
  }
</style>
