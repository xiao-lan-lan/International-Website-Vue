<template>
  <div class="home">

      <!-- 顶部导航 -->
      <Header />

      <!-- 二级路由出口 -->
      <router-view />

      <!-- 底部导航 -->
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
