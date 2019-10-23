import {
  SETADDNAME,
  SETSELECTKEYS,
  SETOPENKEYS
} from './mutationTypes'

export default {
  setName (context, arg) {
    console.log(context, arg)
    context.commit(SETADDNAME, arg)
  },
  setSelectKeys (context, arg) {
    context.commit(SETSELECTKEYS, arg)
  },
  setOpenKeys (context, arg) {
    context.commit(SETOPENKEYS, arg)
  }
}
