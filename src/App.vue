<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示的，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
//引入
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  
  components:{
    Header,
    Footer
  },
  mounted(){
    // 通知Vuex发请求，获取的是商品分类的三级列表的数据，原本在TypeNav文件下，但是会有重复发请求的问题，放在根组件中可解决【因为根组件中的mounted只会执行一次】
    this.$store.dispatch('categoryList')
  }
}
</script>

<style scoped>

</style>
