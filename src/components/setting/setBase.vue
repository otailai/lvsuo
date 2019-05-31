<template>
    <div id="case" class="case">
            <div class="flex title-case">
                <p>所在位置：</p>
                <p>设置</p>  
                <p><i class="el-icon-arrow-right"></i></p>
                <p>基础数据</p>
                 <p><i class="el-icon-arrow-right"></i></p>
                <p v-show="child_cur == 0">案件类型</p>
                  <p v-show="child_cur == 1">客户类型</p>
                    <p v-show="child_cur == 2">所属行业</p>
                      <p v-show="child_cur == 3">案由</p>
                        <p v-show="child_cur == 4">职务</p>
                
            
              </div>
                        <div style="margin-top:30px;">
                             <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
                              <el-tab-pane :label="v.title" :name="'name'+i" v-for="(v,i) in arr" :key="i">
                                   <router-view></router-view>
                              <!-- <div v-show="child_cur==0" class="bar">
                                             <setBaseCaseType></setBaseCaseType>
                              </div> -->
                              <!-- cur = 1 -->
                              <!-- <div v-show="child_cur==1" class="bar">
                                   <customeCaseType> </customeCaseType>
                              </div> -->
                              <!-- cur = 2 -->
                                 <!-- <div v-show="child_cur==2" class="bar">
                                         <industryCaseType></industryCaseType>
                              </div> -->
                              <!-- cur =3 -->

                                 <!-- <div v-show="child_cur==3" class="bar">
                                         <causesCase></causesCase>
                              </div> -->
                              <!-- cur =4 -->
                                 <!-- <div v-show="child_cur==4" class="bar">
                                            <jobCase></jobCase>
                              </div> -->
                              </el-tab-pane>
                            </el-tabs>  
                         </div>
                     
            </div>

</template>
<script>
import store from '../../vuex/store'
import setBaseCaseType from './setBase/setBaseCaseType'
import customeCaseType from './setBase/customeCaseType'
import industryCaseType from './setBase/industryCaseType'
import causesCase from './setBase/causesCase'
import jobCase from './setBase/jobCase'
  export default {
    data() {
      return {
        activeName:'name0',
        selectOneId:1,
        numPage:10,
        currentPage4: 1,
        total:1,
        child:0,
        child_cur:0,
        tableData: [
        {id:1,name:'管理员',power:'权限'},
        {id:1,name:'管理员',power:'权限'},
        {id:1,name:'管理员',power:'权限'},
        {id:1,name:'管理员',power:'权限'},
        {id:1,name:'管理员',power:'权限'}
        ],
        arr:[
            {title:'案件类型',path:'setBase/setBaseCaseType'}, {title:'客户类型',path:'setBase/customeCaseType'},{title:'所属行业',path:'setBase/industryCaseType'},{title:'案由',path:'setBase/causesCase'},{title:'职务',path:'setBase/jobCase'},
        ],
        value: '',
        value5: '',
      };
    },
    methods: {
         handleClick(tab, event) {
        this.child_cur = tab.index
        this.$router.push('/index/'+this.arr[this.child_cur].path)
        },
        getActiveMenu(){
        this.activeName = 'name'+this.child_cur
        console.log(this.activeName)
        console.log(this.$route.path)
        var menuArr = []
        for(var i =0 ;i<this.arr.length;i++){
            menuArr[i] = '/index/'+this.arr[i].path
        }
        console.log(menuArr)
        var i =menuArr.indexOf(this.$route.path)
        this.activeName = 'name'+i
        
     },
    },
    mounted(){
        this.getActiveMenu()
    },
    components:{
      setBaseCaseType,
      customeCaseType,
      industryCaseType,
      causesCase,
      jobCase
    },
   　filters:{
      getTime(time){
          return time.substring(0,10)
      }
　　　　}
  };
</script>
<style>
@import '../../assets/sass/main.css';


.el-tabs__header{
            display: flex;
            flex-direction: row;
          
              /* border-bottom: 1px solid #ccc; */
                  height: 40px;
                    margin-top: 20px;
        }
        .el-tabs__nav-wrap{
              /* border-bottom: 1px solid #ccc; */

        }
     
</style>


