<template>
  <div class="swiper-container" ref="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
        <img :src="carousel.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// 引入swiper
import Swiper from 'swiper';
export default {
  name: 'carousel',
  props: ['list'],
  watch: {
    list: {
      // 立即监听:不管数据有没有变化,上来立即监听一次
      // 为什么watch监听不到list:因为这个数据从来没有发生变化(数组是父组件给的,父组件给的时候就是一个对象,对象里面该有的数据都是有的)
      immediate: true,//immediate就是立即监听
      handler() {
        // 只能监听到数据已经有了,但是v-for动态渲染结构,我们还是没办法确定的,因此还是需要用nextTick
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.floor1Swiper, {
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        })
      }
    }
  }
}
</script>