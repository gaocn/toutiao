import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 为了防止刷新丢失state数据，需要将token持久化到本地存储
    user: getItem('TOUTIAO_USER')
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      setItem('TOUTIAO_USER', user)
    }
  },
  actions: {
  },
  modules: {
  }
})
