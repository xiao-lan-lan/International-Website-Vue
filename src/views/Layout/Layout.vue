<template>
  <div class="home">
    <div class="container">
      <!-- logo图片 -->
      <div class="logo">
        <img src="../../assets/img/logo.png" alt="" srcset="" />
      </div>

      <!-- 顶部导航 -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#001529"
        text-color="#98a0a8"
        active-text-color="#fff"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">主网启动</el-menu-item>
        <el-menu-item index="3">经济与治理</el-menu-item>
        <el-menu-item index="4">开发者</el-menu-item>
        <el-submenu index="5">
          <template slot="title">工具产品</template>
          <el-menu-item index="5-1">浏览器</el-menu-item>
          <el-menu-item index="5-2">钱包APP</el-menu-item>
          <el-menu-item index="5-3">Web钱包</el-menu-item>
          <el-menu-item index="5-4">浏览器插件</el-menu-item>
        </el-submenu>
        <el-menu-item index="6">测试网&配置设施</el-menu-item>
        <el-menu-item index="7">关于我们-团队</el-menu-item>
      </el-menu>

      <!-- 二级路由出口 -->
      <router-view />

      <!-- 底部导航 -->
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  padding-top: 61px;
}
.logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 51px;
  text-align: center;
  padding-top: 10px;
  background-color: #001529;
  img {
    background-color: #001529;
    width: 40px;
  }
}
.el-menu {
  position: absolute;
  top: 0;
  margin-left: 100px;
  width: calc(100% - 100px);
}

.footer {
  position: fixed;
  bottom: 0;
  height: 100px;
  background-color: #001529;
  color: #fff;
  width: 100%;
}
</style>
