import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UserRouter from './userRouter'
import OtherRouter from './otherRouter'
import Visitor from './visitorRouter'
Vue.use(Router)
var routes = [{
  path: '/',
  redirect: '/welcome'
}].concat(UserRouter).concat(OtherRouter).concat(Visitor);
export default new Router({
  routes
});
