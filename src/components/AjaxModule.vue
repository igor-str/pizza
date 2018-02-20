<template>
  <div>
    <h1> поля, які починаються на 'e', кількість: {{count}}</h1>
    <ul>
      <li v-for="item in items">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AjaxModule',
  data: function () {
    return {
      items: []
    }
  },
  computed: {
    count () { return this.items.filter(x => x.title[0] === 'e' ).length; },
  },
  methods: {

  },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then((data)=> {
      this.items = data;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
