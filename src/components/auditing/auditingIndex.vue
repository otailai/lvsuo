<template>
    <div id="case" class="case">
      <div class="add-top flex">
                <p>所在位置：</p>
                <router-link to='/index/auditingIndex' tag="a">审核</router-link>
                <p><i class="el-icon-arrow-right"></i></p>
                <p v-if="child_cur==0">案件审核</p>
                 <p v-if="child_cur==1">风控审核</p>
                 <p v-else-if="child_cur==2">财务审核</p>
                  <p v-if="child_cur==3">风结案审核</p>
            </div>
       <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
           <el-tab-pane :label="v.title" :name="'name'+i" v-for="(v,i) in arr" :key="i">
         
            <div v-show="child_cur==0">
              <caseAditing></caseAditing>
            <!-- <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="caseArr" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Case_Name" label="案件名称" width=""></el-table-column>
                    <el-table-column prop="Staff_Name" label="主办律师" width=""> </el-table-column>
                     <el-table-column prop="Customer_Name_Zh" label="客户名称" width=""> </el-table-column>
                      <el-table-column prop="Value" label="案件类别" width=""> </el-table-column>
                       <el-table-column prop="Creattime" label="申请日期" width=""> </el-table-column>
                          <el-table-column prop="date" label="合同" width=""> 
                                <template slot-scope="scope"> 
                               <span style="color:red" @click="look(scope.row.Id)">
                                 预览
                               </span>
                              </template>
                          </el-table-column>
                             <el-table-column  label="状态" width=""> 
                                    <template slot-scope="scope"> 
                                    <span v-if="scope.row.address == '立案'" style="color:red">
                                    {{scope.row.address}}
                                  </span>
                                  <span v-else style="color:blue">{{scope.row.Status}}</span>
                                  </template>
                             </el-table-column>
                        <el-table-column  label="操作"> 
                          <template  slot-scope="scope">
                              <span @click="open2(scope.row.id)" style="cursor:pointer"><i class="el-icon-close" style="font-size: 20px;font-weight: 600;"></i></span>
                            <span @click="open2(scope.row.id)" style="cursor:pointer"><i class="el-icon-check" style="font-size: 20px;font-weight: 600;"></i></span>
                          </template>
                        </el-table-column>
                  </el-table>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                 :page-sizes="[100, 200, 300, 400]" :page-size="100"  layout="total, sizes, prev, pager, next, jumper" :total="400">
                   </el-pagination>
                </div>
                </li>
                </ul>
            </div> -->
            </div>
            
       
          <div v-show="child_cur==1">
            <auditingRisk></auditingRisk>
          </div>
        
          <div v-show="child_cur==2">
              <financialAuditing></financialAuditing>
          </div>
          
            <div v-show="child_cur==3">
              <auditingCloseCase></auditingCloseCase>
          </div>
        </el-tab-pane>
      
        <!-- <el-tab-pane label="利益检索" name="second">配置管理</el-tab-pane>-->
                
        </el-tabs> 
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
            {"id":"9","title":"案件审核"}, {"id":"10","title":"风控审核"}, {"id":"11","title":"财务审核"}, {"id":"12","title":"结案审核"}
        ],
        arr1:[{title:'我的客户'},{title:'事务所客户'}],
        activeName: 'name0',
        currentPage4: 1,
        index:0,
        cur:0,
        tableData:[{name:'123'}]
        
 

  
      
      };
    },
    methods: {
      handleClick(tab, event) {
        this.child_cur = tab.index
       
        // console.log(tab,event);
      },
      changeLi(i){
          this.cur = i
         
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      toAdd(){
        this.$router.push({path:'/index/caseAdd'})
      },
      lineCilck(row, event, column){
console.log(row, event, column)
      },
    getChildMenu(){
        this.$http.get('/api/data').then((res)=>{
        this.arr = res.data[3].children
        })
      },
      searchData(){
        this.child = 1
      },
       open2() {
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
    
     
      
    },
    mounted(){

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
</style>


