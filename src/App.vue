<template>
  <div id="app">
      <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  provide:function() {
    return {
      reload:this.reload
    }
},
  data(){
    return{
      path:this.$route.path,
      isRouterAlive:true,
     
    }
  },
  methods:{
     reload:function(){
        this.isRouterAlive=false;
        this.$nextTick(function(){
            this.isRouterAlive=true
        })
    },
    _isMobile(){
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
     var ismobile = flag ? 1 : 0
     if (ismobile == 1) {
          window.location.href = 'http://192.168.0.108:8080'
        }
        },
  },
  mounted(){
    
   
  },
  created(){
    this._isMobile()
  },
  watch:{

  }
 
}
</script>

<style>

 @import "assets/icon/iconfont.css";
#app {
  width: 100%;
  height: 100%;
}

</style>
