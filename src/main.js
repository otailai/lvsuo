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
import store from './vuex/store'
import VueParticles from 'vue-particles'  
import toExcel from '@/excel/json2excel'
import htmlToPdf from './utils/ToPdf'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
Vue.component('ImgInputer', ImgInputer)
Vue.use(htmlToPdf)
Vue.prototype.$toExcel = toExcel
Vue.use(VueParticles)  
Vue.prototype.$jsEncrypt = JsEncrypt
Vue.prototype.$http = axios
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false




const router = new VueRouter({
  routes,
  linkActiveClass:"common-active",
})

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    if(localStorage.getItem('userId')){
      next()
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next();
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App }, 
  template: '<App/>'
})

