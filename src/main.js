// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import "babel-polyfill"
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
import global from './common'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css' 
// import Print from 'vue-print-nb'
// Vue.use(Print); //注册
import Print from '@/plugs/print'
Vue.use(Print) // 注册
Vue.use(VueQuillEditor)
Vue.prototype.common = global
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
  mode: 'history',
  routes,
  linkActiveClass:"common-active",
 
})

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    // console.log(localStorage.getItem('openId'))
    if(localStorage.getItem('userId')||localStorage.getItem('openId')){
            if(to.path == '/'){
              next({
                path:'/index',
                query:{redirect:to.fullPath}
              })
            }else{
              next();
            }
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    console.log('11111111')
      next()
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



