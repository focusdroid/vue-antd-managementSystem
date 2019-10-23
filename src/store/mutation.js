import { SETADDNAME } from './mutationTypes'

export default {
  [SETADDNAME] (state, arg) {
    console.log(state, arg)
    state.name = arg
  }
}
