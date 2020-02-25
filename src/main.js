import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/normal.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-CN', // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale
  messages: {
    'zh-CN': require('./assets/lang/zh.js'), // 中文语言包
    'en-US': require('./assets/lang/en') // 英文语言包
  }
})

new Vue({
  router,
  store,
  i18n, // 最后
  render: h => h(App)
}).$mount('#app')
