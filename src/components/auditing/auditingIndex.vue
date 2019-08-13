<template>
    <div id="case" class="case">
      <div class="add-top flex">
                <p>所在位置：</p>
                <p>审核</p>
                <p><i class="el-icon-arrow-right"></i></p>
                 <P v-for="(v,i) in arr" :key="i+'a'" v-show="$store.state.audit.child_id  == i">
                    {{v.Item_Name}}
                </P>
            </div>

           <ul class="flex_ul">
            <router-link  tag='li'   v-for="(v,i) in arr" :key="i"  :to="'/index/auditingIndex/'+v.Item_Path" class="flex_li">
            <p>{{v.Item_Name}}</p>
            </router-link>
           </ul>
             <router-view></router-view>
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
           <el-tab-pane :label="v.Item_Name" :name="'name'+i" v-for="(v,i) in arr" :key="i">
           <router-view></router-view>
        </el-tab-pane>   
        </el-tabs>  -->
    </div>
</template>
<script>
import store from '../../vuex/store'
import caseAditing from './caseAuditing'
import financialAuditing from './financialAuditing'
import auditingRisk from './auditingRisk'
import auditingCloseCase from './auditingCloseCase'
  export default {
    data() {
      return {
        //案件审核
        caseArr:[],
        //
        child:0,
        child_cur:0,
        arr:[
           
        ],
        
        activeName: 'name0',
        currentPage4: 1,
        index:0,
        cur:0,
        tableData:[{name:'123'}]
        
 

  
      
      };
    },
    methods: {
      handleClick:function(tab, event) { 
        this.$router.push('/index/auditingIndex/'+this.arr[tab.index].Item_Path)
         this.$store.commit('changeAuditChild',tab.index)
         this.child_cur = this.$store.state.audit.child_id
      },
      changeLi:function(i){
          this.cur = i
         
      },
       handleSizeChange:function(val) {
        //console.log(`每页 ${val} 条`);
      },
      handleCurrentChange:function(val) {
        //console.log(`当前页: ${val}`);
      },
      toAdd:function(){
        this.$router.push({path:'/index/caseAdd'})
      },
      lineCilck:function(row, event, column){
          //console.log(row, event, column)
      },
    getChildMenu:function(){
        this.$http.get('/yongxu/Base/User_Two_Menu',{params:{
          Menu_Id:5,
          User_Id:localStorage.getItem('userId')
        }}).then((res)=>{
        //  console.log(res)
          this.arr = res.data
          this.$router.push('/index/auditingIndex/'+this.arr[this.$store.state.audit.child_id].Item_Path)
         // console.log(this.$store.state.audit.child_id)
          this.getActiveMenu()
        })
      },
      searchData:function(){
        this.child = 1
      },
       open2:function() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
       getActiveMenu:function(){
        var menuArr = []
        for(var i =0 ;i<this.arr.length;i++){
            menuArr[i] = '/index/auditingIndex/'+this.arr[i].Item_Path
        }
        var i =menuArr.indexOf(this.$route.path)
        this.activeName = 'name'+i
        
     },
     
      
    },

    mounted:function(){
      this.getChildMenu()
    },
     activated() {
        this.getChildMenu()
    },
    beforeDestroy(){
       
    },
    filters:{
          getTime:function(time){
        if(time==''||time==null){
            return time
        }else{
          return time.substring(0,10)
        }
          },
    },
    components:{
      caseAditing,
      financialAuditing,
      auditingRisk,
      auditingCloseCase
    },
      watch:{
        $route(to,from){
          //   var menuArr = []
          //        for(var i =0 ;i<this.arr.length;i++){
          //              menuArr[i] ='/index/auditingIndex/'+this.arr[i].Item_Path
          //          }
          //  var path1 = to.path.split('/')[3]
          //   var path = to.path
          //  if(path1 == this.arr[0].Item_Path){
          //        this.$router.push('/index/auditingIndex/'+this.arr[0].Item_Path)
          //         var i =menuArr.indexOf(path)
          //         this.activeName = 'name'+i
          //            this.$store.commit('changeAuditChild',0)
          //             this.child_cur = this.$store.state.audit.child_id
          //  }
        }
      }
              
        
  };
</script>
<style>
@import '../../assets/sass/main.css';
.dialogFormVisible{
  flex-direction: column;
}
.dialogFormVisibleHeader{
  flex-direction: row;
  justify-content: space-between;
}
/* .dialogFormVisivleFile table td{
  border:none; 
}
.dialogFormVisivleFile table th,td{
  min-width:180px; 
} */
.dialogFormVisivleHeader_left p{
  font-size: 18px;
  font-weight: 600;
}

.dialogFormVisivleHeader_left{
  flex-direction: row;
  align-items: center;
}
.dialogFormVisivleFooter{
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
}
.dialogFormVisivleInput{
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.dialogFormVisivleInput_right input{
  width: 300px;
  height: 30px;
  margin-left: 30px;
}
.dialogFormVisivleFile{
  justify-content: space-between;
  margin-top: 25px;
}
.width-th{
  width: 150px;
  border: none;
}
.width-tr{
  height: 50px;
  border-bottom: 1px solid #ccc;
}

.upload-demo{
  width: 100%;
}
.el-upload{
  width: 100%;
}
.el-upload-dragger{
  width: 100%;
}
.el-upload__tip{
  justify-content: center;
}
.el-dialog{
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.3);
}
.el-dialog__body {
    padding: 10px 20px;
    color: #606266;
    font-size: 14px;
}
.btn-ok{
  cursor: pointer;
  border:  #7E2C2E;
  background: #7E2C2E;
  color: #fff;
  font-size: 8px;
  outline: none;
  height: 25px;
  margin-left: 30px;
}
.btn-div{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
}
.btn-caozuo{
  cursor: pointer;
  border:  #7E2C2E;
  background: #7E2C2E;
  color: #fff;
  font-size: 8px;
  outline: none;
  height: 25px;
  margin-left: 2px;

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


