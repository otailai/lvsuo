<template>
   <div id="index" class="index">
       <div class="container">
           <topMenu></topMenu>
           <div class="main">
               <router-view></router-view>
           </div>
        </div>
       <div class="footer">
           <div class="container">
            Copyright 2006 广州金鹏律师事务所 版权所有 粤ICP备14003815号
           </div>
            
           
       </div>
    </div> 
</template>
<script>
import topMenu from './topMenu'

export default {
    data(){
        return{

        }
        
    },
    methods:{},
    components:{
        topMenu
    }

    
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/index.scss'
</style>


