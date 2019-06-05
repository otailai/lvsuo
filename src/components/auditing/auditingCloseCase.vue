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

                <div class="input flex" style="margin-left: 270px;">
                      <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input"/>
                          
                      <button class="case-button" @click="searchContent()"><i class="el-icon-search"></i></button>
                    
                    </div>   
                 <button class="dingzhi" @click="clear()"><i class=""></i>清空</button>

             
              </div>
            <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="closeCasekArr" border style="width: 100%"  @row-click="lineCilck">
                      <el-table-column prop="Case_No" label="案件编号" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Case_Name" label="案件名称" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Customer_Name_Zh" label="客户名称" width="" :show-overflow-tooltip="true"> </el-table-column>
                     <el-table-column prop="Value" label="案件类别" width="" :show-overflow-tooltip="true"> </el-table-column>
                      <el-table-column prop="staff_Name" label="主办律师" width="" :show-overflow-tooltip="true"> </el-table-column>
                      <el-table-column  label="合同起止日期" width="" :show-overflow-tooltip="true"> 
                           <template slot-scope="scope" >
                                   
                            <p  v-if="!scope.row.Contract_Date_From" style="color:#ccc">暂无</p>
                            <p v-else>{{scope.row.Contract_Date_From | getTime}}</p>
                                </template>
                             
                      </el-table-column>
                        <el-table-column  label="立案日期" width="" :show-overflow-tooltip="true"> 
                           <template slot-scope="scope" >
                                <p  v-if="!scope.row.Filing_Date" style="color:#ccc">暂无</p>
                            <p v-else>{{scope.row.Filing_Date | getTime}}</p>
                                    
                                </template>
                      </el-table-column>
                        <el-table-column  label="操作"> 
                          <template  slot-scope="scope">
                             <button  style="cursor:pointer" class="btn-caozuo" @click="closeCase(scope.row.Id)" >结案</button>
                          </template>
                        </el-table-column>
                  </el-table>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[1,5,10,15]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                   </el-pagination>
                </div>
                </li>
                </ul>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
                cur:0,
                closeCasekArr:[],
                //当前页
                currentPage:1,
                total:0,
                pageNum:10,
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
                {value:0,label:'制订中'},{value:1,label:'已审核'},{value:2,label:'已签合同'},{value:3,label:'已结案'}
                ],
        }
    },
    inject:["reload"],
    methods:{
         getCloseCasekArr(){
        this.$http.get('/yongxu/Toexamine/Show_Closing_Audit',{params:{
          PageNumber:this.currentPage,
          Display_Page_Number:this.pageNum,
          Dic_Id:this.Casevalue2,
          VagueName:this.SearchInput
        }}).then((res)=>{
            //console.log(res)
            this.closeCasekArr = res.data.Closing_Audit
            this.total = res.data.PageCount
        })
      },
         //获取二级菜单下拉
      changeTowValue(id){
      //console.log(id)
       this.Casevalue2 = id
       //console.log(this.Casevalue2)
       this.getCloseCasekArr()
      },
      //状态查询
      changeStatus(id){
        //console.log(id)
         this.statusValue = id
         this.getCloseCasekArr()
      },
      //搜索查询
      searchContent(){
       //console.log(this.SearchInput)
       this.getCloseCasekArr()
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
         //console.log(id)
         this.selectOneId = id
         this.$http.get('/yongxu/Index/GetBoxTwo',{params:{Id:this.selectOneId}}).then((res)=>{
          //console.log(res)
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
        this.getCloseCasekArr()
        
      },
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
        this.pageNum = val
         this.getCloseCasekArr()

      },
      handleCurrentChange(val) {
          this.currentPage = val
          this.getCloseCasekArr()
          //console.log(`当前页: ${val}`);
      },
     lineCilck(row, event, column){
            //console.log(row, event, column)
      },
      // 对话框,结案操作
       closeCase(id) {
        this.$confirm('此操作将此案件结案, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.get('/yongxu/Toexamine/Closing_Operation',{params:{Case_Id:id}}).then((res)=>{
            //console.log(res)
             if(res.data == true){
                this.$message({
                  type: 'success',
                  message: '结案操作成功!'
                });
                this.getCloseCasekArr()
                this.AuditLog(id,'结案审核',1)
             }else{
                this.$message({
                  type: 'warning',
                  message: '操作失败!'
                });
             }
          }).catch((err)=>{
              this.$message({
                  type: 'warning',
                  message: '服务器异常!'
                });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      },
      //添加日志
      AuditLog(id,type,Findings_Audit,){
        this.$http.get('/yongxu/Toexamine/Add_Audit_Log',{params:{Identification:id,Audit_Type:type,Findings_Audit:Findings_Audit,User_Id:localStorage.getItem('userId')}}).then((res)=>{
         
            if(res.data == true){
                   //console.log(res)
            }else{
              //console.log('日志添加失败')
            }
        })
      },
    },
    mounted(){
        this.getCloseCasekArr()
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


