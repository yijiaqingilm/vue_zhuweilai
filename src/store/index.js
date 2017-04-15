/**
 * Created by admin on 2017/4/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VuxModule from './modules/vux'
Vue.use(Vuex);
console.log('这里注册了 模块');
console.log(VuxModule)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  // actions,
  // getters,
  modules: {VuxModule},
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
