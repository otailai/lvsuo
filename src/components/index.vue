<template>
   <div id="index" class="index">
       <div class="container">
           <topMenu></topMenu>
           <div class="main">
               <router-view></router-view>
           </div>
        </div>
       <div class="footer">
            <footer></footer>
       </div>
    </div> 
</template>
<script>
import topMenu from './topMenu'
import footer from './footer'
export default {
    data(){
        return{

        }
        
    },
    methods:{},
    components:{
        topMenu,footer
    }

    
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/index.scss'
</style>


