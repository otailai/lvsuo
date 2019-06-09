<template>
    <div>
             <div class="selectMenu flex">
              <div class="case-type flex"> 
                 <p>案件类型：</p>
                  <el-select v-model="Casevalue" placeholder="请选择" @change="getSelectChildeMenu(Casevalue)">
                    <el-option v-for="item in optionMenu" :key="item.Id" :label="item.Category_Name"  :value="item.Id"> </el-option>
                  </el-select>

                  <el-select v-model="Casevalue1" placeholder="请选择" style="margin-left: 10px;" @change="changeTowValue(Casevalue1)">
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
              </div>
          <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="FinancialAuditArr" border style="width: 100%"  @row-click="lineCilck">
                  <el-table-column prop="Case_Name" label="案件名称" width=""></el-table-column>
                  <el-table-column prop="Customer_Name_Zh" label="客户名称" width=""> </el-table-column>
                    <el-table-column prop="Value" label="案件类别" width=""> </el-table-column>
                      <el-table-column  label="合同起止日期" width="110"> 
                                <template slot-scope="scope" >
                     
                                    <p>{{scope.row.Contract_Date_From | getTime}}</p>
                                </template>
                      </el-table-column>
                       <el-table-column  label="立案日期" width="110">
                          <template slot-scope="scope" >
                                    <p  v-if="!scope.row.Filing_Date" style="color:#ccc;">暂无</p>
                                    <p v-else>{{scope.row.Filing_Date | getTime}}</p> 
                                </template>
                          </el-table-column>
                          <el-table-column prop="Status" label="案件状态" width=""> </el-table-column>
                             <el-table-column prop="Amount" label="合同金额" width=""> </el-table-column>
                                <el-table-column prop="Charge_Amount" label="已收金额" width=""> </el-table-column>
                         
                        <el-table-column  label="操作" width="130"> 
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
                 :page-sizes="[20,50,100]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="total">
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
             
                //当前页
                currentPage:1,
                total:0,
                pageNum:20,
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
        openDialog:function(id,Charging_Method){
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
      getMonney:function(id,Charging_Method){
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
                  this.getFinancialAudit()
              }  else{
                 
                  this.$message({
                      message:'收款失败',
                      type:'warning'
                  });
              }
          })
      },
      getFinancialAudit:function(){
        this.$http.get('yongxu/Toexamine/Get_Financial_Audit',{params:{
          Display_Page_Number:this.pageNum,
          PageNumber:this.currentPage
        }}).then((res)=>{
          console.log(res)
           this.FinancialAuditArr = res.data.Get_Financial_Audit
           this.total = res.data.PageCount

        })    
      },
      handleSizeChange:function(val) {
        console.log(`每页 ${val} 条`);
        this.pageNum = val
         this.getFinancialAudit()

      },
      handleCurrentChange:function(val) {
          this.currentPage= val
          this.getFinancialAudit()
          console.log(`当前页: ${val}`);
      },
     lineCilck:function(row, event, column){
            console.log(row, event, column)
      },
    },
    mounted:function(){
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
}
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


