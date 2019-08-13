<template>
    <div id="case" class="case">
            <div class="flex title-case">
                <p>所在位置：</p>
                <p>设置</p>  
                <p><i class="el-icon-arrow-right"></i></p>
                <p>基础数据</p>
                 <p><i class="el-icon-arrow-right"></i></p>
                
                        <p v-show="child_cur == i" v-for="(v,i) in arr" :key="i">{{v.Item_Name}}</p>
              </div>
                        <div style="margin-top:30px;">
                             <!-- <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
                              <el-tab-pane :label="v.Item_Name" :name="'name'+i" v-for="(v,i) in arr" :key="i">
                                   <router-view></router-view>
                              </el-tab-pane>
                            </el-tabs>   -->
                            <ul class="flex_ul">
            <router-link  tag='li'   v-for="(v,i) in arr" :key="i"  :to="'/index/setBase/'+v.Item_Path" class="flex_li">
            <p>{{v.Item_Name}}</p>
            </router-link>
           </ul>
             <router-view></router-view>
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
import setTRee from './setBase/setTRee'
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
            // {title:'案件类型',path:'setBase/setBaseCaseType'}, {title:'客户类型',path:'setBase/customeCaseType'},{title:'所属行业',path:'setBase/industryCaseType'},{title:'案由',path:'setBase/causesCase'},{title:'职务',path:'setBase/jobCase'},
        ],
        value: '',
        value5: '',
        path_logo:false
      };
    },
    methods: {
      getmenu(){
        this.child_cur = this.$store.state.base.child_id
        this.$http.get('/yongxu/Base/Get_Basics',{params:{User_Id:localStorage.getItem('userId')}}).then((res)=>{
          console.log(res)
          this.arr = res.data
          this.$router.push('/index/setBase/'+this.arr[this.$store.state.base.child_id].Item_Path)
           this.getActiveMenu()
        })
          
        
      },
        handleClick(tab, event) {
         this.$store.commit('changeBaseChild',tab.index)
         this.child_cur = this.$store.state.base.child_id
         this.$router.push('/index/setBase/'+this.arr[this.child_cur].Item_Path)
        },
        getActiveMenu(){
        var menuArr = []
        for(var i =0 ;i<this.arr.length;i++){
            menuArr[i] = '/index/setBase/'+this.arr[i].Item_Path
        }
        // console.log(menuArr)
        var i =menuArr.indexOf(this.$route.path)
        this.activeName = 'name'+i 
       // console.log(i)

     
        
     },
    },
    mounted(){
        this.getmenu() 
    },
    activated() {
        this.getmenu() 
    },
    components:{
      setBaseCaseType,
      customeCaseType,
      industryCaseType,
      causesCase,
      jobCase,
      setTRee
    },
   　filters:{
      getTime(time){
          return time.substring(0,10)
      }
　　},
  watch:{
        $route(to,from){
           
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
.flex_ul{
  width: 100%;
  display: flex;
  flex: row;
  justify-content: center;
}
.flex_li{
  color: #333333;
  font-size: 14px;
  width:90px;
  justify-content: center;
  align-items: center;
}
.flex_li p{
   cursor: pointer;
}  
</style>


