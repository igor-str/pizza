<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide class="slider">
      <a class="slider__link" href="#">
        <img src="../assets/slider-1.jpg" alt="" width="1920" height="600"/>
      </a>
    </swiper-slide>
    <swiper-slide class="slider">
      <a class="slider__link" href="#">
        <img src="../assets/slider-2.jpg" alt="" width="1920" height="600"/>
      </a>
    </swiper-slide>
  </swiper>

  <!--<swiper-slide>I'm Slide 2</swiper-slide>-->
  <!--<swiper-slide>I'm Slide 3</swiper-slide>-->
  <!--<swiper-slide>I'm Slide 4</swiper-slide>-->
  <!--<swiper-slide>I'm Slide 5</swiper-slide>-->
  <!--<swiper-slide>I'm Slide 6</swiper-slide>-->
  <!--<swiper-slide>I'm Slide 7</swiper-slide>-->

  <!--<div class="slider">-->
    <!--<a class="slider__link" href="#">-->
      <!--<img src="../assets/slider-2.jpg" alt="" width="1920" height="600"/>-->
    <!--</a>-->
  <!--</div>-->
</template>

<script>
  import 'swiper/dist/css/swiper.css'
//  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'SliderModule',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        zoom: {
          maxRatio: 5,
        },
        autoplay: true
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .slider {
    &__link {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
