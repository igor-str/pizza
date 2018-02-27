<template>
  <div class="container">
    <gmap-map :center="center" :zoom="13" style="width: 100%; height: 500px">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBwl57wEqd-gYLalEWE-Mz3ecuD7adbhzE',
    }
  });

  export default {
    name: 'MapsModule',
    data () {
      return {
        center: {lat: 49.431751, lng: 26.980456},
        markers: [{
          position: {lat: 49.431751, lng: 26.980456}
        }, {
          position: {lat: 49.428028, lng: 26.967487}
        }]
      }
    },
    computed: {

    },
    mounted: function () {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

</style>
