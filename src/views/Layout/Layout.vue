<template>
  <div class="home">
    <el-container>
      <el-header class="header">Header</el-header>
      <router-view />
      <el-footer class="footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {}
}
</script>

<style lang="less" scoped>
.header,.footer {
  width: 100%;
  height: 60px;
  background-color: #253237;
  color: #fff;
}
.header {
  position: fixed;
  top: 0;
}
.footer {
  position: fixed;
  bottom: 0;
}
</style>
