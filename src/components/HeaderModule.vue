<template>
  <header class="header">
    <a href="#">
      <img src="../assets/pizza-logo.png" alt="back to home" width="90" height="60"/>
    </a>
    <nav>
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Каталог</a></li>
        <li><a href="#">Зроби сам</a></li>
        <li><a href="#">Доставка</a></li>
        <li><a href="#">Контакти</a></li>
      </ul>
    </nav>
    <a class="phone" href="tel:+380980000000">+38(098)00-00-000</a>
  </header>
</template>

<script>
export default {
  name: 'HeaderModule',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 0 10px;
    border-bottom: 1px solid transparent;
    transition: 0.3s;
    &:hover {
      border-bottom: 1px solid #42b983;
    }
  }
}
a {
  color: #42b983;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
}
.phone {
  color: darkorange;
  min-width: 160px;
}
</style>
