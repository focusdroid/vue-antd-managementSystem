import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

const state = {
  name: 'focusdroid',
  systemName: '健康服务支持鉴权系统',
  systemEnglishName: 'Health service support system'
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
