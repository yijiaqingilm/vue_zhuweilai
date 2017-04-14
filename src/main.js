// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('@/res/js/flex.js');
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import vueResoure from 'vue-resource'
import router from './router'
// import Constant from '@/res/js/constant.js'
Vue.use(vueResoure);
Vue.http.options.emulateJSON = true;

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
  el: '#app-box',
  router,
  template: '<div><App/></div>',
  components: {App},
  data () {
    return {
      loadingStatus: false
    }
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
