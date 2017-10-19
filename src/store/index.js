/**
 * 入口文件
 */
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
// createLogger的作用是：我们每次修改store里面的数据时，会在控制台打印，搞事修改之前是什么样，修改后是什么样
Vue.use(Vuex)

// 开发环境为true
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
