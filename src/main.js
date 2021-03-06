// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('@/res/js/flex.js');
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import vueResoure from 'vue-resource'
import router from './router'
import store from './store'
// import Constant from '@/res/js/constant.js'
Vue.use(vueResoure);
Vue.http.options.emulateJSON = true;

FastClick.attach(document.body)

Vue.config.productionTip = false

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      store.commit('updateDirection', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false});
})

/* eslint-disable no-new */
var app = new Vue({
  el: '#app-box',
  router,
  store,
  template: '<div><App/></div>',
  components: {App},
  data () {
    return {}
  },
  methods: {
    showLoading: function () {
      this.loadingStatus = true;
    },
    hideLoading: function () {
      this.loadingStatus = false;
    }

  }
});
