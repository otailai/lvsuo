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

               <!-- <div class="case-state flex" style="margin-left:10px;">
               <p>案件状态：</p> 
               <el-select v-model="value" placeholder="请选择" style="margin-left: 10px;" @change="changeStatus(value)"> 
               <el-option v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value"></el-option>
               </el-select>
               </div>        -->

                 <div class="input flex" style="margin-left: 270px;">
                      <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input"/>
                          
                      <button class="case-button" @click="searchContent()"><i class="el-icon-search"></i></button>
                    
                    </div>   
                 <button class="dingzhi" @click="clear()"><i class="el-icon-download"></i>清空</button>

              </div>
            <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="riskArr" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Case_Name" label="案件名称" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="staff_Name" label="主办律师" width="" :show-overflow-tooltip="true"> </el-table-column>
                     <el-table-column prop="Value" label="案件类别" width="" :show-overflow-tooltip="true"> </el-table-column>
                      <el-table-column  label="申请日期" width="" :show-overflow-tooltip="true"> 
                           <template slot-scope="scope" >
                                    <p>{{scope.row.Date_Created | getTime}}</p> 
                                </template>
                      </el-table-column>
                          <el-table-column  label="文件" width="" :show-overflow-tooltip="true"> 
                                <template slot-scope="scope"> 
                               <a style="color:red" :href="'/yongxu/Base/download?filename='+scope.row.File_Path">
                                   {{scope.row.File_Name}}
                               </a>
                              </template>
                          </el-table-column>
                            
                        <el-table-column  label="操作" width="180"> 
                          <template  slot-scope="scope">
                            <span @click="open(scope.row.Id)" style="cursor:pointer"><i class="el-icon-close" style="font-size: 20px;font-weight: 600;"></i></span>
                            <span @click="open1(scope.row.Id)" style="cursor:pointer"><i class="el-icon-check" style="font-size: 20px;font-weight: 600;"></i></span>
                          
                       
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
                riskArr:[],
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
         getRiskArr(){
        this.$http.get('/yongxu/Toexamine/Show_Noe_Risk',{params:{
          User_Id:localStorage.getItem('userId'),
          Display_Page_Number:this.pageNum,
          PageNumber:this.currentPage,
          Dic_Id:this.Casevalue2,
          VagueName:this.SearchInput,
        }}).then((res)=>{
            //console.log(res) 
            this.riskArr = res.data.Noe_Risk
            this.total = res.data.PageCount
        })
      },
        //获取二级菜单下拉
      changeTowValue(id){
      //console.log(id)
       this.Casevalue2 = id
       //console.log(this.Casevalue2)
       this.getRiskArr()
      },
      //状态查询
      changeStatus(id){
        //console.log(id)
         this.statusValue = id
         this.getRiskArr()
      },
      //搜索查询
      searchContent(){
       //console.log(this.SearchInput)
       this.getRiskArr()
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
        this.getRiskArr()
        
      },
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
        this.pageNum = val
         this.getRiskArr()

      },
      handleCurrentChange(val) {
          this.currentPage = val
          this.getRiskArr()
          //console.log(`当前页: ${val}`);
      },
     lineCilck(row, event, column){
            //console.log(row, event, column)
      },
      noPassCase(id,type){
          if(type != 0){
               this.$message({
                    message:'操作失败，此案件状态不需操作',
                    type:'warning'
                });
            return false
          }
          this.$confirm('此操作将使案件审核不通过, 是否继续?', '提示', {
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
                return false
              }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
         
      },
      passCase(id,type){
          if(type != 0){
               this.$message({
                    message:'操作失败，此案件状态不需操作',
                    type:'warning'
                });
            return false
          }
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
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
                this.reload()
                return false
              }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
         
      },
      // 对话框,审核不通过
       open(id) {
        this.$confirm('此操作将使风控审核不通过, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.get('/yongxu/Toexamine/Submit_Action_Risk',{params:{Id:id,state:4}}).then((res)=>{
             if(res.data == true){
                this.$message({
                  type: 'success',
                  message: '操作成功!'
                });
                this.getRiskArr()
                this.AuditLog(id,'一级风控审核',2)
             }else{
                this.$message({
                  type: 'warning',
                  message: '操作失败!'
                });
             }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      },
         // 对话框,审核通过
       open1(id) {
        this.$confirm('此操作将通过风控审核, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then((res) => {
          this.$http.get('/yongxu/Toexamine/Submit_Action_Risk',{params:{Id:id,state:3}}).then((res)=>{
            //console.log(res)
              if(res.data == true){
                 this.$message({
            type: 'success',
            message: '操作成功!'
          });
            this.getRiskArr()
                this.AuditLog(id,'一级风控审核',1)
              }else{
                 this.$message({
            type: 'warning',
            message: '操作失败!'
          });
              }
            }
          )
        
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
        this.getRiskArr()
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


