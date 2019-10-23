import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

const state = {
  name: 'focusdroid',
  systemName: '健康服务支持鉴权系统',
  systemEnglishName: 'Health service support system',
  defaultOpenKeys: Number(localStorage.defaultOpenKeys) || 1, // leftMenu记住默认选择并且打开该列表
  listDefaultSelectKeys: Number(localStorage.listDefaultSelectKeys) || 11 // leftMenu记住默认选择
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
