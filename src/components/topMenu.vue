<template>
<div id="topMenu" class="topMenu">


<div class="topMenu-head">
<el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
            <div class="logo">

            </div>
        </el-col>
  
        <el-col :span="6">
            <div class="userInfo">
                <el-row type="flex" class="row-bg" justify="end">
                    <div class="username flex">
                     
                            <img src="../assets/img/首页.png" alt="" class="username-hello">
                      
                        <span class="username-name">陈晓梅</span>
                    </div>
                    <div class="login-out">
                        <i class="el-icon-menu"></i>
                        <span>退出</span>
                    </div>
                </el-row>   
            </div>
        </el-col>
</el-row>
</div>

<div class="topMenu-nav">
    <ul class="flex">
            <router-link :to='v.url' class="flex"  tag="li"  v-for="(v,i) in arr"    @click="changeLi(i)"  :key="i">
                <div class="nav-icon el-icon-menu"></div>
                <a href="#">{{v.title}}</a>
            </router-link>
    
    </ul>

</div>
</div>


    
</template>
<script>
export default {
    data(){
        return{
            arr:[{title:'案件',url:'/index/caseIndex'},{title:'案件1',url:'/index/caseIndex'},{title:'案件2',url:'/index/caseIndex'},{title:'案件3',url:'/index/caseIndex'}],
            cur:0,
        }
    },
    methods:{
        changeLi(i){
            this.cur=i;
            console.log(i)
        }
    }
}
</script>

<style lang="sass" scoped>
 @import '../assets/sass/element.scss'
 @import '../assets/sass/topMenu.scss'
</style>



