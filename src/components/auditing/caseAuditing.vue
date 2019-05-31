<template>
    <div>
          
             <div class="selectMenu flex">
              <div class="case-type flex"> 
                 <p>案件类型：</p>
                  <el-select v-model="Casevalue" placeholder="请选择"   @change="getSelectChildeMenu(Casevalue)">
                    <el-option v-for="item in optionMenu" :key="item.Id" :label="item.Category_Name"  :value="item.Id"> </el-option>
                  </el-select>

                  <el-select v-model="Casevalue1" placeholder="请选择" clearable  style="margin-left: 10px;" @change="changeTowValue(Casevalue1)">
                  <el-option v-for="(item,index) in optionChildMenu" :key="index" :label="item.Value"  :value="item.Id"> </el-option>
                 </el-select>
              </div>

               <div class="case-state flex" style="margin-left:10px;">
               <p>案件状态：</p> 
               <el-select v-model="value" placeholder="请选择" style="margin-left: 10px;" @change="changeStatus(value)"> 
               <el-option v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value"></el-option>
               </el-select>
               </div>      
               <div class="input flex">
                      <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input"/>
                          
                      <button class="case-button" @click="searchContent()"><i class="el-icon-search"></i></button>
                    
                </div>    
                 <button class="dingzhi" @click="clear()"><i class="el-icon-download"></i>清空</button>
              </div>
          <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="caseArr" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Case_Name" label="案件名称" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Staff_Name" label="主办律师" width="" :show-overflow-tooltip="true"> </el-table-column>
                     <el-table-column prop="Customer_Name_Zh" label="客户名称" width="" :show-overflow-tooltip="true"> </el-table-column>
                      <el-table-column prop="Value" label="案件类别" width="" :show-overflow-tooltip="true"> </el-table-column>
                       <el-table-column prop="Creattime" label="申请日期" width="" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                             <span>{{scope.row.Creattime | getTime}}</span>    
                        </template>   
                                               </el-table-column> 
                          <el-table-column prop="date" label="合同" width="60"> 
                                <template slot-scope="scope"> 
                               <span style="color:red" @click="look(scope.row.Id)">
                                 预览
                               </span>
                              </template>
                          </el-table-column>
    <el-table-column prop="Amount" label="合同金额" width="" :show-overflow-tooltip="true"> </el-table-column>
    <el-table-column prop="Charge_Amount" label="已收金额" width="" :show-overflow-tooltip="true"> </el-table-column>
                             <el-table-column  label="状态" width=""> 
                                    <template slot-scope="scope"> 
                                    <span v-if="scope.row.type == '0'" style="color:red;">
                                        {{scope.row.Status}}
                                  </span>
                                  <span v-if="scope.row.type == '1'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '2'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '3'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '4'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '-2'" style="color:blue;cursor:pointer">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '-1'">{{scope.row.Status}}</span>
                                  </template>
                             </el-table-column>
                        <el-table-column  label="操作"> 
                          <template  slot-scope="scope">
                              <span  @click="noPassCase(scope.row.Id,scope.row.type)" style="cursor:pointer"><i class="el-icon-close" style="font-size: 20px;font-weight: 600;"></i></span>
                            <span @click="passCase(scope.row.Id,scope.row.type)" style="cursor:pointer"><i class="el-icon-check" style="font-size: 20px;font-weight: 600;"></i></span>
                          </template>
                        </el-table-column>
                        <el-table-column  label="财务操作" width="105"> 
                            <template  slot-scope="scope">
                            <span class="btn-div">
                            <button @click="open2(scope.row.Id)" style="cursor:pointer" class="btn-caozuo">预览</button>
                            <button @click="openDialog(scope.row.Id,scope.row.Charging_Method)" style="cursor:pointer" class="btn-caozuo">收款</button>

                            </span>
                          </template>
                        </el-table-column>
                  </el-table>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[1,5,10,13]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                   </el-pagination>
                </div>
                </li>
                </ul>
            </div>
              <el-dialog  :visible.sync="dialogFormVisibleWord" :modal-append-to-body='false' :modal='false' width="1000px">
                          <iframe src='https://view.officeapps.live.com/op/view.aspx?src=http://haoren.gzbigbang.cn/cyx.docx' width='100%' height='1000px' frameborder='1'>

                          </iframe>
              </el-dialog>
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
                        <button class="btn-ok"   v-if="scope.row.State==1" @click="getMonney(scope.row.Id,scope.row.Charging_Method)">确认收款</button>
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

  <el-dialog  :visible.sync="dialogFormVisible8"  :append-to-body='true'  top="300px" width="800px">
      <div class="dialogFormVisible flex">
         
           <div class="dialogFormVisivleFile flex">
             <el-table :data="makeCollectionsArr8">
                <el-table-column property="Case_Name" label="案件名称" width="" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column property="Staff_Name" label="律师姓名" width=""></el-table-column>
                <el-table-column property="Value" label="律师职务" width="" :show-overflow-tooltip="true"></el-table-column>
                  <el-table-column  label="费率" width="" :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                      {{scope.row.Rate}}RMB/h
                    </template>
                  </el-table-column>
                <el-table-column  label="状态" width="200">
                  <template slot-scope="scope">
                        <span v-if="scope.row.State==1" style="color:red">未收款</span>
                        <span v-if="scope.row.State==2">已收款</span>
                        <button class="btn-ok"   v-if="scope.row.State==1" @click="getMonney(scope.row.Id,scope.row.Charging_Method)">确认收款</button>
                  </template>
                </el-table-column>
               
              </el-table>
          </div>
      </div>
   <div slot="title" class="dialog-title">
        <div class="dialogFormVisivleHeader_left flex"> <p>收费方式-定时收费</p></div>
  </div>
  <div slot="footer" class="dialog-footer">
    <div class="dialogFormVisivleFooter flex">
    </div>
  </div>
</el-dialog>

  <el-dialog  :visible.sync="dialogFormVisible10"  :append-to-body='true'  top="300px" width="800px">
      <div class="dialogFormVisible flex">
         
           <div class="dialogFormVisivleFile flex">
             <el-table :data="makeCollectionsArr10">
                <el-table-column property="Case_Name" label="案件名称" width="" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column property="Risk_Achievement" label="风险达成条件" width=""></el-table-column>
                  
                <el-table-column  label="状态" width="200">
                  <template slot-scope="scope">
                        <span v-if="scope.row.State==1" style="color:red">未收款</span>
                        <span v-if="scope.row.State==2">已收款</span>
                        <button class="btn-ok"   v-if="scope.row.State==1" @click="getMonney(scope.row.Id,scope.row.Charging_Method)">确认收款</button>
                  </template>
                </el-table-column>
               
              </el-table>
          </div>
      </div>
   <div slot="title" class="dialog-title">
        <div class="dialogFormVisivleHeader_left flex"> <p>收费方式-风险收费</p></div>
  </div>
  <div slot="footer" class="dialog-footer">
    <div class="dialogFormVisivleFooter flex">
    </div>
  </div>
</el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
                cur:0,
                caseArr:[],
                //当前页
                currentPage:1,
                total:0,
                pageNum:10,
                dialogFormVisibleWord:false,
                //搜索
                SearchInput:'',
                Casevalue:'',
                Casevalue1:'',
                Casevalue2:0,
                optionMenu:[],
                optionChildMenu:[],
                value:'',
                 //状态
                options:[
                {value:0,label:'制订中'},{value:1,label:'已审核'},{value:2,label:'已签合同'},{value:3,label:'已结案'},{value:-1,label:'已作废'}
                ],
                   // 财务审核
                FinancialAuditArr:[],
                dialogFormVisible:false,
                dialogFormVisible8:false,
                  dialogFormVisible10:false,
                // 收款详情
                makeCollectionsArr:[],//定额
                makeCollectionsArr8:[],//定时
                makeCollectionsArr10:[],//风险
                
        }
    },
    inject:["reload"],
    methods:{
            openDialog(id,Charging_Method){
          if(Charging_Method  == 9){
          this.dialogFormVisible = true
          this.$http.get('yongxu/Toexamine/Get_Make_Collections',{params:{Id:id,Charging_Method:Charging_Method}}).then((res)=>{
            console.log(res)
           this.makeCollectionsArr= res.data
          })    
          }
            if(Charging_Method  == 8){
          this.dialogFormVisible8 = true
          this.$http.get('yongxu/Toexamine/Get_Make_Collections',{params:{Id:id,Charging_Method:Charging_Method}}).then((res)=>{
            console.log(res)
           this.makeCollectionsArr8= res.data
          })    
          }
            if(Charging_Method  == 10){
          this.dialogFormVisible10 = true
          this.$http.get('yongxu/Toexamine/Get_Make_Collections',{params:{Id:id,Charging_Method:Charging_Method}}).then((res)=>{
            console.log(res)
           this.makeCollectionsArr10= res.data
          })    
          }
       
      },
      getMonney(id,Charging_Method){
          this.$http.post('/yongxu/Toexamine/Upd_Confirm_Receipt',
         
          {Id:id,Charging_Method:Charging_Method,Auditor_Id:localStorage.getItem('userId')}).then((res)=>{
            if(res.data == true){
                  this.$message({
                      message:'收款成功',
                      type:'success'
                  });
                  this.dialogFormVisible = false
                  this.dialogFormVisible8 = false
                  this.dialogFormVisible10 = false
                  this.getCaseArr()
                  this.AuditLog(id,'财务审核',1)
              }  else{
                 
                  this.$message({
                      message:'收款失败',
                      type:'warning'
                  });
              }
          })
      },
      //添加日志
      AuditLog(id,type,Findings_Audit,){
        this.$http.get('/yongxu/Toexamine/Add_Audit_Log',{params:{Identification:id,Audit_Type:type,Findings_Audit:Findings_Audit,User_Id:localStorage.getItem('userId')}}).then((res)=>{
         
            if(res.data == true){
                   console.log(res)
            }else{
              console.log('日志添加失败')
            }
        })
      },
         getCaseArr(){
          var statusValue;
          if(this.value == '' || this.value == null){
                statusValue = -3;
          }else{
             statusValue = this.value
          }
         var userId = localStorage.getItem('userId')
        this.$http.get('/yongxu/Toexamine/Get_Case_Audit',{params:{
          Display_Page_Number:this.pageNum,
          PageNumber:this.currentPage,
          Dic_Id:this.Casevalue2,
          Status:statusValue,
          VagueName:this.SearchInput,
        }}).then((res)=>{
            console.log(res)
            this.caseArr = res.data.Case_Audit
            this.total = res.data.PageCount

        })
      },
      //获取二级菜单下拉
      changeTowValue(id){
      console.log(id)
       this.Casevalue2 = id
       this.getCaseArr()
      },
      //状态查询
      changeStatus(id){
        console.log(id)
         this.statusValue = id
         this.getCaseArr()
      },
      //搜索查询
      searchContent(){
       console.log(this.SearchInput)
       this.getCaseArr()
      },
      //获取一级下拉
        getSelectMenu(){
         this.$http.get('/yongxu/Index/GetBoxOne').then((res)=>{
           this.optionMenu = res.data
        })
      },
      //下拉二级下拉查询
       getSelectChildeMenu(id){ 
         this.optionChildMenu = ''
         this.Casevalue1 =''
         console.log(id)
         this.selectOneId = id
         this.$http.get('/yongxu/Index/GetBoxTwo',{params:{Id:this.selectOneId}}).then((res)=>{
          console.log(res)
          this.optionChildMenu = res.data  
          this.Casevalue1 =res.data[0].Id
           //this.Casevalue1 = res.data
        })
      },
        clear(){
        this.SearchInput = ''
        this.Casevalue2 = 0
        this.value = ''
        this.Casevalue = ''
        this.Casevalue1 = ''
        this.getCaseArr()
        
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageNum = val
         this.getCaseArr()

      },
      handleCurrentChange(val) {
          this.currentPage = val
          this.getCaseArr()
          console.log(`当前页: ${val}`);
      },
     lineCilck(row, event, column){
            console.log(row, event, column)
      },
      noPassCase(id,type){
          if(type != 0){

            this.$message({
                 message:'操作失败，此案件状态不需操作',
                 type:'warning'
             });
            return false
          }
          this.$confirm('此操作将使此案件不通过, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.$http.get('/yongxu/Toexamine/Upd_Case_Auditfail',{params:{
                 User_Id:localStorage.getItem('userId'),
                 Id:id,
          }}).then((res)=>{
              if(res.data == true){
                    this.$message({
                    message:'操作成功,此案件审核不通过',
                    type:'success'
                });
                this.AuditLog(id,'案件审核',2)
                return false
              }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
          
      },
      look(id){
        this.dialogFormVisibleWord = true
      },
      passCase(id,type){
          if(type != 0){
               this.$message({
                    message:'操作失败，此案件状态不需操作',
                    type:'warning'
                });
            return false
          }
           this.$confirm('此操作将使此案件通过, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$http.get('/yongxu/Toexamine/Upd_Case_Aubitadopt',{params:{
                 User_Id:localStorage.getItem('userId'),
                 Id:id,
          }}).then((res)=>{
              if(res.data == true){
                    this.$message({
                    message:'操作成功，此案件审核通过',
                    type:'success'
                });
                this.AuditLog(id,'案件审核',1)
                this.reload()
                return false
              }
          }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
        })
        
      },
    
    },
    mounted(){
        this.getCaseArr()
        this.getSelectMenu()
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
     watch:{
    Casevalue1:function(newV,oldV){
        this.changeTowValue(newV)
    }
     }
    
}
</script>
<style>
@import '../../assets/sass/main.css';
.input{
    flex-direction: row;
    justify-content: flex-start;
    width: 250px;
    margin-right: 20px;
    border-radius: 45px;
    border: 1px solid #DDDDDD;
    
}
.case-input{
      width:  200px;
    height: 36px;
    /* border: 1px solid #DDDDDD; */
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
   
    padding-left: 21px;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    color: #4a4a4a;
    background-color: transparent;
}
.case-button{
    outline: none;
    width: 48px;
    height: 28px;
    border: none;
    border-radius: 36px 36px 36px 36px;
    background-color: #fefeff;
    margin-right: 4px;
    margin-top: 4px;
    cursor: pointer;
}
 .input:hover{
    border: 1px solid #7E2C2E;
}
.case-button:hover{
    background: #7E2C2E;
    color: #ffffff;
}
.case-child-end{
    flex-direction: row;
    justify-content: flex-end;
}
.selectMenu{
    margin-top: 20px;
}
</style>


