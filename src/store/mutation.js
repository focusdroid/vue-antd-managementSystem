import {
  SETADDNAME,
  SETSELECTKEYS,
  SETOPENKEYS
} from './mutationTypes'

export default {
  [SETADDNAME] (state, arg) {
    console.log(state, arg)
    state.name = arg
  },
  [SETOPENKEYS] (state, arg) {
    localStorage.defaultOpenKeys = arg // 使用本地存储记住选择leftMenu父菜单
    state.defaultOpenKeys = arg
  },
  [SETSELECTKEYS] (state, arg) {
    localStorage.listDefaultSelectKeys = arg // 使用本地存储记住选择leftMenu子菜单
    state.listDefaultSelectKeys = arg
  }
}
