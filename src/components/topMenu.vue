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
                     
                            <img src="../assets/img/wujunxi.jpg" alt="" class="username-hello">
                      
                        <span class="username-name">陈晓梅</span>
                    </div>
                    <div class="login-out">
                        <i class=" iconfont icon-dingbudaohang-zhangh"></i>
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
                <div :class="'nav-icon iconfont '+' '+v.icon "></div>
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
            arr:[{title:'案件',url:'/index/caseIndex',icon:'icon-anjian'},
            {title:'客户',url:'/index/customerIndex',icon:'icon-kehu'},
            {title:'文书',url:'/index/documentIndex',icon:'icon-weimingming'},
            {title:'审核',url:'/index/auditingIndex',icon:'icon-bumenzhinenggongzuoshenhe'},
            {title:'统计',url:'/index/documentIndex',icon:'icon-tongji'},
            {title:'设置',url:'/index/auditingIndex',icon:'icon-icon_set_up'}],
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



