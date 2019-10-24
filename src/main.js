/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 11:01:03
 * @LastEditTime: 2019-10-17 13:22:52
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import './style/default.less'
import './style/reset.css'
import echarts from 'echarts'
Vue.use(Antd)
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
