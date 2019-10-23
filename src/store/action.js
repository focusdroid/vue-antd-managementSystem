import { SETADDNAME } from './mutationTypes'

export default {
  setName (context, arg) {
    console.log(context, arg)
    context.commit(SETADDNAME, arg)
  }
}
