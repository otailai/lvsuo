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
                    <div class="login-out" @click="loginOut()">
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
            <router-link :to="v.Item_Path" class="flex"  tag="li"  v-for="(v,i) in arr"  @click="changeLi(i)"  :key="i">
            <div :class="'nav-icon iconfont '+' '+v.Icon "></div>
            <p>{{v.Item_Name}}</p>
            </router-link>
         
            <li class="flex" v-popover:popover2>
                     <div class='nav-icon iconfont icon-icon_set_up'></div>
                     <p>设置</p>
           </li>
                <el-popover ref="popover2" placement="bottom-end" trigger="click">
                    <div>
                      <ul class="flex">
                          <router-link v-for="(v,i) in arr1"    :to="v.Item_Path" tag="li" :key="i" style="margin-left:20px;" class="setting flex" >
                              <div :class="'nav-icon iconfont '+' '+v.Icon "></div>
                              <p>{{v.Item_Name}}</p>
                         </router-link>
                      </ul>
                 </div>
                </el-popover>
    </ul>
            
</div>
</div>


    
</template>
<script>
export default {
    data(){
        return{
            arr:[{Item_Name:'案件',Item_Path:'/index/caseIndex',Icon:'icon-anjian'},
            {Item_Name:'客户',Item_Path:'/index/customerIndex',Icon:'icon-kehu'},
            {Item_Name:'文书',Item_Path:'/index/documentIndex',Icon:'icon-weimingming'},
            {Item_Name:'审核',Item_Path:'/index/auditingIndex',Icon:'icon-bumenzhinenggongzuoshenhe'},
            {Item_Name:'统计',Item_Path:'/index/countIndex',Icon:'icon-tongji'},
            // {Item_Name:'设置',Item_Path:'/index/auditingIndex',Icon:'icon-icon_set_up'}
            ],
            arr1:[{Item_Name:'合同模板',Item_Path:'/index/setContract',Icon:'icon-anjian'},
            {Item_Name:'组织架构',Item_Path:'/index/setIndex',Icon:'icon-kehu'},
            {Item_Name:'权限管理',Item_Path:'/index/setPower',Icon:'icon-weimingming'},
            {Item_Name:'基础数据',Item_Path:'/index/setBase',Icon:'icon-bumenzhinenggongzuoshenhe'},
            ],
            cur:0,
        }
    },
    methods:{
        changeLi(i){
            this.cur=i;
            console.log(i)
        },
        loginOut(){
            localStorage.removeItem('userId')
            // localStorage.removeItem()
            this.$router.push('/')
        },
        getTopMenu(){
            this.$http.get('/myTest/getMenu').then((res)=>{
                console.log(res)
                 this.arr = res.data.message
            })
        },
         goTONew(menu){
             console.log(menu)
            this.$router.push(menu)
        }
       
    },
    mounted(){
        // this.getTopMenu()
    }
}
</script>

<style lang="sass" scoped>
 @import '../assets/sass/element.scss'
 @import '../assets/sass/topMenu.scss'

</style>



