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
  },
  mounted(){
    
    
   
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
