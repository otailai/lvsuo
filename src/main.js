// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/sass/common.css'
import routes from './router.config'
import VueRouter from 'vue-router'
import axios from 'axios'
import JsEncrypt from 'jsencrypt/bin/jsencrypt'
import Vuex from 'vuex'
Vue.prototype.$jsEncrypt = JsEncrypt
Vue.prototype.$http = axios
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false
const router = new VueRouter({
  routes,
  linkActiveClass:"common-active",
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
