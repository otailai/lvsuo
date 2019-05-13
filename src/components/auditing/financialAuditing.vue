<template>
    <div>
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
                 :page-sizes="[5,10,15,20]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="total">
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
         
</template>
<script>
export default {
    data(){
        return{
                cur:0,
             
                //当前页
                currentPage4:1,
                total:0,
                pageNum:5,
                 // 财务审核
                FinancialAuditArr:[],
                dialogFormVisible:false,
                // 收款详情
                makeCollectionsArr:[],
        }
    },
    inject:["reload"],
    methods:{
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
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageNum = val
         this.getFinancialAudit()

      },
      handleCurrentChange(val) {
          this.currentPage4 = val
          this.getFinancialAudit()
          console.log(`当前页: ${val}`);
      },
     lineCilck(row, event, column){
            console.log(row, event, column)
      },
    },
    mounted(){
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
</style>


