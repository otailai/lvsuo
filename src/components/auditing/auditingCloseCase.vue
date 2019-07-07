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

                <div class="input flex" style="margin-left: 200px;">
                      <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input"/>
                          
                      <button class="case-button" @click="searchContent()"><i class="el-icon-search"></i></button>
                    
                    </div>   
                 <button class="dingzhi" @click="clear()">清空</button>
                  <img src="../../assets/img/shuaxin.png" alt="" @click="updateData()" class="shuaxin_btn" style="cursor: pointer;">
             
              </div>
            <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="closeCasekArr" border style="width: 100%"  @row-click="lineCilck">
                      <el-table-column prop="Case_No" label="案件编号" width="110" :show-overflow-tooltip="true" sortable></el-table-column>
                    <el-table-column prop="Case_Name" label="案件名称" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Customer_Name_Zh" label="客户名称" width="" :show-overflow-tooltip="true"> </el-table-column>
                     <el-table-column prop="Value" label="案件类别" width="" :show-overflow-tooltip="true"> </el-table-column>
                         <el-table-column prop="date" label="合同" width=""> 
                                <template slot-scope="scope"> 
                               <span style="color:red"   @click.stop="open3(scope.row.Id,scope.row.Charging_Method)" v-if="scope.row.Source_Contract == 1">
                                
                                 预览
                               </span>
                                 <span style="color:red"  @click.stop="look(scope.row.Id)" v-if="scope.row.Source_Contract == 2">
                                 预览
                               </span>
                              
                              </template>
                          </el-table-column>
                      <el-table-column prop="staff_Name" label="主办律师" width="" :show-overflow-tooltip="true"> </el-table-column>
                      <el-table-column  label="合同起止日期" width="110" :show-overflow-tooltip="true"> 
                           <template slot-scope="scope" >
                                   
                            <p  v-if="!scope.row.Contract_Date_From" style="color:#ccc">暂无</p>
                            <p v-else>{{scope.row.Contract_Date_From | getTime}}</p>
                                </template>
                             
                      </el-table-column>
                        <el-table-column  label="立案日期" width="110" :show-overflow-tooltip="true" prop="Filing_Date" sortable> 
                           <template slot-scope="scope" >
                                <p  v-if="!scope.row.Filing_Date" style="color:#ccc">暂无</p>
                            <p v-else>{{scope.row.Filing_Date | getTime}}</p>
                                    
                                </template>
                      </el-table-column>
                        <el-table-column  label="操作"> 
                          <template  slot-scope="scope">
                             <button  style="cursor:pointer" class="btn-caozuo" @click.stop="closeCase(scope.row.Id)" v-if="scope.row.Status == 4">结案</button>
                           <span v-if="scope.row.Status != 4">已结案</span>

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
             <el-dialog  :visible.sync="dialogFormVisibleWord1" :modal-append-to-body='false' :modal='false' width="1000px">
                        <caseWord :dataWord='dataWord'></caseWord>
                </el-dialog>
    </div>
</template>
<script>
import caseWord from '../case/caseWord'
export default {
    data(){
        return{
                cur:0,
                closeCasekArr:[],
                //当前页
                currentPage:1,
                total:0,
                pageNum:20,
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
                dialogFormVisibleWord1:false,
                 dataWord:{},
        }
    },
    inject:["reload"],
    methods:{
           updateData(){
        this.getCloseCasekArr()
      },
         getCloseCasekArr:function(){
        this.$http.get('/yongxu/Toexamine/Show_Closing_Audit',{params:{
          PageNumber:this.currentPage,
          Display_Page_Number:this.pageNum,
          Dic_Id:this.Casevalue2,
          VagueName:this.SearchInput
        }}).then((res)=>{
      
            this.closeCasekArr = res.data.Closing_Audit
            this.total = res.data.PageCount
        })
      },
       sortChange(column){
    
        if(column.order !== null && column.prop === 'Filing_Date'){
            var data = []
            for(let i = 0;i<this.closeCasekArr.length;i++){
             
                if(this.closeCasekArr[i].Filing_Date === null || this.closeCasekArr[i].Filing_Date === undefined){
                    data.push(this.closeCasekArr[i])
                }else{
                  data.unshift(this.closeCasekArr[i])
                }
            }
            this.closeCasekArr = data
       
        }
        if(column.order === null){
          this.closeCasekArr = this.closeCasekArr
        }
        this.sortRule.order = column.order
        this.sortRule.prop = column.prop
      },
         //获取二级菜单下拉
      changeTowValue:function(id){
         if(id == '' || id ==null){
          this.Casevalue2 = 0
      }else{
        this.Casevalue2 = id
      }
      
      this.getCloseCasekArr()
      },
      //状态查询
      changeStatus:function(id){
        //console.log(id)
         this.statusValue = id
         this.getCloseCasekArr()
      },
      //搜索查询
      searchContent:function(){
       //console.log(this.SearchInput)
       this.getCloseCasekArr()
      },
      //获取一级下拉
        getSelectMenu:function(){
         this.$http.get('/yongxu/Index/GetBoxOne').then((res)=>{
           this.optionMenu = res.data
        })
      },
      //下拉二级下拉查询
       getSelectChildeMenu:function(id){ 
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
        clear:function(){
        this.SearchInput = ''
        this.Casevalue2 = 0
        this.value = ''
        this.Casevalue = ''
        this.Casevalue1 = ''
        this.getCloseCasekArr()
        
      },
      handleSizeChange:function(val) {
        //console.log(`每页 ${val} 条`);
        this.pageNum = val
         this.getCloseCasekArr()

      },
      handleCurrentChange:function(val) {
          this.currentPage = val
          this.getCloseCasekArr()
          //console.log(`当前页: ${val}`);
      },
     lineCilck:function(row, event, column){
                this.$router.push({path:`/index/caseEdit/${row.Id}/${row.Charging_Method}`})
      },
      // 对话框,结案操作
       closeCase:function(id) {
             this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
                 console.log(res)
                 if(res.data == 1){
                     this.$message({
                         message:'账号异地登陆 强制退出',
                         type:'warning'
                     })
                      localStorage.removeItem('userId')
                      localStorage.removeItem('sessionId')
                      localStorage.removeItem('Rule_Id')
                      localStorage.removeItem('Expiration_Date')
                      localStorage.removeItem('Username')
                      this.$router.push('/')
                     return false
                 }
                 if(res.data == 3){
                     this.$message({
                         message:'登录已过期',
                         type:'warning'
                     })
                      localStorage.removeItem('userId')
                      localStorage.removeItem('sessionId')
                      localStorage.removeItem('Rule_Id')
                      localStorage.removeItem('Expiration_Date')
                      localStorage.removeItem('Username')
                      this.$router.push('/')
                      return false
                  }
          else{
             if(res.data != 2){
                          done();
                        return false
                }
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
                this.AuditLog(id,4,1)
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
          }
             })
      },
      //添加日志
      AuditLog:function(id,type,Findings_Audit,){
        this.$http.get('/yongxu/Toexamine/Add_Audit_Log',{params:{Identification:id,Audit_Type:type,Findings_Audit:Findings_Audit,User_Id:localStorage.getItem('userId')}}).then((res)=>{
         
            if(res.data == true){
                   //console.log(res)
            }else{
              //console.log('日志添加失败')
            }
        })
      },
      //预览合同
        look:function(id){
        this.$http.get('/yongxu/Toexamine/Sel_Url',{params:{
          Case_Id:id
        }}).then((res)=>{
            this.fileUrl = res.data 
        }).then((res)=>{
          this.dialogFormVisibleWord = true
        }).catch((err)=>{
          this.$message({
            message:'服务器异常',
            type:'warning'
          })
        })
      
      },
      //预览html合同
      open3:function(id,type){
        this.$http.get('/yongxu/Index/Case_Details',{params:{Id:id,Type_Id:type}}).then((res)=>{
             this.dataWord = res.data
             this.dialogFormVisibleWord1 = true
        }).catch((err)=>{
          this.$message({
            message:'服务器异常',
            type:'warning'
          })
        })
      },
    },
    mounted:function(){
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
     },
      components:{
        'caseWord':caseWord,
    },
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


