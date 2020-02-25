import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '../utils/localstorage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: getItem('lang') ? getItem('lang') : 'zh-CN'
  },
  mutations: {
    // 更新本地语言
    updataLang (state, val) {
      state.lang = val
      setItem('lang', val)
    }
  },
  actions: {
  },
  modules: {
  }
})
