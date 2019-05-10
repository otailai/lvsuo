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
            <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="name" label="案件名称" width=""></el-table-column>
                    <el-table-column prop="name" label="主办律师" width=""> </el-table-column>
                     <el-table-column prop="name" label="客户名称" width=""> </el-table-column>
                      <el-table-column prop="name" label="案件类别" width=""> </el-table-column>
                       <el-table-column prop="name" label="申请日期" width=""> </el-table-column>
                          <el-table-column prop="date" label="合同" width=""> 
                                <template slot-scope="scope"> 
                               <span style="color:red">
                                 {{scope.row.name}}
                               </span>
                              </template>
                          </el-table-column>
                             <el-table-column prop="address" label="状态" width=""> 
                                    <template slot-scope="scope"> 
                                    <span v-if="scope.row.address == '立案'" style="color:red">
                                    {{scope.row.address}}
                                  </span>
                                  <span v-else style="color:blue">   {{scope.row.address}}</span>
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
            </div>
            </div>
            
       
          <div v-show="child_cur==1">
                      <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="name" label="案件名称" width=""></el-table-column>
                    <el-table-column prop="name" label="主办律师" width=""> </el-table-column>
                     <el-table-column prop="name" label="案件类别" width=""> </el-table-column>
                      <el-table-column prop="name" label="申请日期" width=""> </el-table-column>
                          <el-table-column prop="date" label="合同" width=""> 
                                <template slot-scope="scope"> 
                               <span style="color:red">
                                 {{scope.row.name}}
                               </span>
                              </template>
                          </el-table-column>
                            
                        <el-table-column  label="操作"> 
                          <template  slot-scope="scope">
                              <span @click="open2(scope.row.id)" style="cursor:pointer">错误</span>
                            <span @click="open2(scope.row.id)" style="cursor:pointer">正确</span>
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
            </div>
          </div>
        
          <div v-show="child_cur==2">
                      <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="FinancialAuditArr" border style="width: 100%"  @row-click="lineCilck">
                  <el-table-column prop="Case_Name" label="案件名称" width=""></el-table-column>
                  <el-table-column prop="Customer_Name_Zh" label="客户名称" width=""> </el-table-column>
                    <el-table-column prop="Value" label="案件类别" width=""> </el-table-column>
                      <el-table-column  label="合同起止日期" width="120"> 
                                <template slot-scope="scope" >
                     
                                    <p>{{scope.row.Contract_Date_From | getTime}}</p>
                                </template>
                      </el-table-column>
                       <el-table-column  label="立案日期" width="">
                          <template slot-scope="scope" >
                                    <p  v-if="!scope.row.Filing_Date">暂无</p>
                                    <p v-else>{{scope.row.Filing_Date | getTime}}</p>
                                </template>
                          </el-table-column>
                          <el-table-column prop="Status" label="案件状态" width=""> </el-table-column>
                             <el-table-column prop="Amount" label="合同金额" width=""> </el-table-column>
                                <el-table-column prop="Charge_Amount" label="已收金额" width=""> </el-table-column>
                         
                        <el-table-column  label="操作"> 
                          <template  slot-scope="scope">
                            <span class="btn-div">
                            <button @click="open2(scope.row.Id)" style="cursor:pointer" class="btn-caozuo">预览</button>
                            <button @click="openDialog(scope.row.Id)" style="cursor:pointer" class="btn-caozuo">收款</button>

                            </span>
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
            </div>

      <el-dialog  :visible.sync="dialogFormVisible"  :append-to-body='true'  top="300px" width="800px">
      <div class="dialogFormVisible flex">
         
           <div class="dialogFormVisivleFile flex">
             <el-table :data="makeCollectionsArr">
                <el-table-column property="Payment_Time" label="付款日期" width="" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column property="Charge_Amount" label="收费金额" width=""></el-table-column>
                <el-table-column property="Describe" label="描述" width="" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column   width="50"></el-table-column>
                <el-table-column  label="状态" width="200">
                  <template slot-scope="scope">
                        <span v-if="scope.row.State==1" style="color:red">未收款</span>
                        <span v-if="scope.row.State==2">已收款</span>
                        <button class="btn-ok"   v-if="scope.row.State==1" @click="getMonney(scope.row.id)">确认收款</button>
                  </template>
                </el-table-column>
               
              </el-table>
          </div>
      </div>
   <div slot="title" class="dialog-title">
        <div class="dialogFormVisivleHeader_left flex"> <p>收费方式-定额收费</p></div>
  </div>
  <div slot="footer" class="dialog-footer">
    <div class="dialogFormVisivleFooter flex">
    </div>
  </div>
</el-dialog>
          </div>
          
            <div v-show="child_cur==3">
                      <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="name" label="案件编号" width=""></el-table-column>
                    <el-table-column prop="name" label="案件名称" width=""> </el-table-column>
                     <el-table-column prop="name" label="客户名称" width=""> </el-table-column>
                      <el-table-column prop="name" label="案件类别" width=""> </el-table-column>
                       <el-table-column prop="name" label="承办律师" width=""> </el-table-column>
                        <el-table-column prop="name" label="合同起止日期" width="120"> </el-table-column>
                         <el-table-column prop="name" label="立案日期" width=""> </el-table-column>
                         
                            
                        <el-table-column  label="操作"> 
                          <template  slot-scope="scope">
                             
                              <button @click="open2(scope.row.id)" style="cursor:pointer"  class="btn-caozuo">结案</button>
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
            </div>
          </div>
        </el-tab-pane>
      
        <!-- <el-tab-pane label="利益检索" name="second">配置管理</el-tab-pane>-->
                
        </el-tabs> 
    </div>
</template>
<script>
import store from '../../vuex/store'
  export default {
    data() {
      return {
        // 财务审核
        FinancialAuditArr:[],
        dialogFormVisible:false,
        // 收款详情
        makeCollectionsArr:[],
        //
        child:0,
        child_cur:0,
        arr:[
            {"id":"9","title":"案件审核"}, {"id":"10","title":"风控审核"}, {"id":"11","title":"财务审核"}, {"id":"12","title":"结案审核"}
        ],
        arr1:[{title:'我的客户'},{title:'事务所客户'}],
        activeName: 'name0',
       currentPage4: 4,
        index:0,
          cur:0,
        
         input23: '',
          tableData: [{
          id:1,
          date: '2016-05-02',
          name: '王小虎',
          address: '立案'
        }, {
           id:2,
          date: '2016-05-04',
          name: '王小虎',
          address: '立案'
        }, {
           id:3,
          date: '2016-05-01',
          name: '王小虎',
          address: '立案'
        }, {
           id:4,
          date: '2016-05-03',
          name: '王小虎',
          address: '不立案'
        }],
         options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        value: '',
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: ''
      
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
      openDialog(id){
        this.dialogFormVisible = true
          this.$http.get('yongxu/Toexamine/Get_Make_Collections',{params:{Id:id}}).then((res)=>{
            console.log(res)
           this.makeCollectionsArr= res.data
        })    
      },
      getFinancialAudit(){
        this.$http.get('yongxu/Toexamine/Get_Financial_Audit').then((res)=>{
          console.log(res)
           this.FinancialAuditArr = res.data
        })    
      }
      
    },
    mounted(){
      // this.getChildMenu()
      this.getFinancialAudit()
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


