<template>
  <div id="app">
      <!-- <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#333333"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles> -->
      <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  provide :function() {
    return {
      reload:this.reload
    }
},
  data(){
    return{
      path:this.$route.path,
      isRouterAlive:true
    }
  },
  methods:{
     reload:function(){
        this.isRouterAlive=false;
        this.$nextTick(function(){
            this.isRouterAlive=true
        })
    }
  },
  mounted(){
    
    
   
  },
}
</script>

<style>

 @import "assets/icon/iconfont.css";
#app {
  width: 100%;
  height: 100%;
}

</style>
