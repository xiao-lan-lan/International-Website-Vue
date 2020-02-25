<template>
  <div class="header">
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
      <el-menu-item index="1">{{ $t("lang.首页") }}</el-menu-item>
      <el-menu-item index="2">{{ $t("lang.主网启动") }}</el-menu-item>
      <el-menu-item index="3">{{ $t("lang.经济与治理") }}</el-menu-item>
      <el-menu-item index="4">{{ $t("lang.开发者") }}</el-menu-item>
      <el-submenu index="5">
        <template slot="title">{{ $t("lang.工具产品") }}</template>
        <el-menu-item index="5-1">{{ $t("lang.浏览器") }}</el-menu-item>
        <el-menu-item index="5-2">{{ $t("lang.钱包APP") }}</el-menu-item>
        <el-menu-item index="5-3">{{ $t("lang.Web钱包") }}</el-menu-item>
        <el-menu-item index="5-4">{{ $t("lang.浏览器插件") }}</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">{{ $t("lang.测试网&配置设施") }}</el-menu-item>
      <el-menu-item index="7">{{ $t("lang.关于我们-团队") }}</el-menu-item>
      <el-select
        v-model="LangValue"
        placeholder="请选择"
        size="small"
        @change="checkoutLang"
      >
        <el-option
          v-for="item in LangOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      LangOptions: [
        {
          value: '简体中文',
          label: '简体中文'
        },
        {
          value: 'English',
          label: 'English'
        }
      ],
      LangValue: this.$store.state.lang === 'zh-CN' ? '简体中文' : 'English'
    }
  },
  methods: {
    // 选中菜单
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },

    // 切换语言
    checkoutLang (val) {
      this.LangValue = val
      const lang = this.$store.state.lang
      if (lang === 'zh-CN') {
        this.$i18n.locale = 'en-US' // 关键语句
        this.$store.commit('updataLang', 'en-US')
      } else {
        this.$i18n.locale = 'zh-CN' // 关键语句
        this.$store.commit('updataLang', 'zh-CN')
      }
    }
  }
}
</script>

<style lang="less">
.header {
  position: relative;
  height: 61px;
  line-height: 61px;
  .logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 52px;
    padding-left: 30px;
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
  .el-select {
    margin-left: 40px;
    width: 120px;
    .el-input__inner {
      background-color: #001529;
    }
  }
}
</style>
