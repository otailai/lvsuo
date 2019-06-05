<template>
   <div id="case" class="case"> 
         <div class="flex">
                <p>所在位置：</p>
                <router-link to='/index/caseIndex' tag="a">日志</router-link>  
            </div>
      
            <div class="flex case-child" style="margin-top:40px;">  
            </div>
            <div class="showTab">
            <ul class="showTab-ul">
          
              <li class="showTab-li">
                       <div>
            <div class="case-child-end flex">
                    <!-- <div class="input flex">
                      <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input"/>
                          
                      <button class="case-button" @click="searchContent()"><i class="el-icon-search"></i></button>
                    
                    </div> -->
                     
                </div>
             <div class="selectMenu1 flex" style="margin-bottom:30px;">
               <div class="case-state flex">
               <p>案件状态：</p> 
               <el-select v-model="value" placeholder="请选择" style="margin-left: 10px;" @change="changeStatus(value)"> 
               <el-option v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value"></el-option>
               </el-select>
               </div>          
              <div class="case-time flex" style="margin-left:20px;">
               <p>起止时间：</p>
                <el-date-picker
                @change="changeTime"
                v-model="dateValue"
                type="datetimerange"
                :picker-options="pickerOptions2"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
                </el-date-picker>
                </div>
                <div class="input flex" style="margin-left:75px;">
                      <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input"/>
                          
                      <button class="case-button" @click="searchContent()"><i class="el-icon-search"></i></button>
                    
                    </div>
                      <button class="dingzhi" @click="clear()" style="margin-top:5px;"><i class="el-icon-download"></i>清空</button>
                <!-- <button class="dingzhi" @click="downExcel()"><i class="el-icon-download"></i>导出</button>
                <button class="dingzhi"><i class="el-icon-download"></i>顶置</button> -->
              </div>
                  <el-table :data="tableData" border style="width: 100%">
                    <el-table-column  label="审核日期" width="" sortable>
                                <template slot-scope="scope" >
                                    <p  v-if="!scope.row.Audit_Time" style="color:#ccc">暂无</p>
                                    <p v-else>{{scope.row.Audit_Time}}</p>
                                </template>
                               
                                </el-table-column>


                  
                    <el-table-column prop="Audit_Type" label="审核类型" width="" sortable :show-overflow-tooltip="true"></el-table-column>
                 
                    <el-table-column prop="Staff_Name" label="审核人" width="" :show-overflow-tooltip="true"> </el-table-column>
                   
                   
                     <el-table-column prop="Findings_Audit" label="审核状态" width="" :show-overflow-tooltip="true"> </el-table-column>
                   

                </el-table>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[1, 5, 10,15]" :page-size="numPage"  layout="total, sizes, prev, pager, next, jumper" :total="total1">
                   </el-pagination>
                </div>
                 <el-dialog  :visible.sync="dialogFormVisible" :modal-append-to-body='false' :modal='false' top="300px" width="600px">
        <div class="dialogFormVisible flex">
          <div class="dialogFormVisivleInput flex">
              <p>文档名称</p><div class="dialogFormVisivleInput_right"><input type="text" class="common-input" v-model="fileName"></div>
          </div>
           <div class="dialogFormVisivleFile flex">
                  <el-upload
                    class="upload-demo"
                    drag
                    action="/yongxu/Base/uploadRawFile"
                    :data='nameData'
                    :on-success="successFile"
                    :on-progress="progressFile"
                    :before-upload="beforeFile"
                    :on-error="errorFile"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  </el-upload>
          </div>
          
      </div>
  
   <div slot="title" class="dialog-title">
        <div class="dialogFormVisivleHeader_left flex"><p>案件文书</p>/<p>我的文档</p>/<p>新建文档</p></div>
  </div>
  <div slot="footer" class="dialog-footer">
    <div class="dialogFormVisivleFooter flex">
    <el-button type="primary"  @click="saveDoc()">保存</el-button>
    </div>
  </div>
</el-dialog>
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
            Casevalue:[],
            currentPage:1,
            total1:0,
            numPage:10,
            tableData:[],
            //一级下拉
            Casevalue1:'',
            //二级下拉
            Casevalue2:0,
            //时间
            dateValue:'',
            //搜索
            SearchInput:'',
            //默认一级Id
             selectOneId:1,
             //案件状态
               value: '',
             //日期
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
        //状态
        options:[
         {value:1,label:'通过'},{value:2,label:'不通过'}
        ],
        //1下拉菜单
        optionMenu:[],
        //2下拉菜单
        optionChildMenu:[],
           //案件ID
            Case_Id:'',
             //案件状态
               value: '',
               //文档名称
               fileName:'',
                nameData:{
                 File_Name:'',
              },
              File_Name:'',
              code:'',
            File_Name:'',
            fileName1:'',
            Suffix_Name:'',
            size:'',
            dialogFormVisible:false,
            fileStatus:'',
        }
    },
    methods:{
        // 获取案件列表
        getCaseList(){ 
        var statusValue;
          if(this.value == '' || this.value == null){
                statusValue = 0;
          }else{
             statusValue = this.value
          }
         this.$http.get('/yongxu/Toexamine/Show_Audit_Log',{params:{
           Findings_Audit:statusValue,
           MaxTime:this.end,
           MinTime:this.start,
           VagueName:this.SearchInput,
           Display_Page_Number:this.numPage,
           PageNumber:this.currentPage,
         }}).then((res)=>{
           //console.log(res)
           //console.log('1231')
           this.tableData = res.data.Audit_Log
           this.total1 = res.data.PageCount
            //console.log(res.data)
        }).catch((err)=>{
          //console.log(err)
        })
      },
        clear(){
        this.end=''
        this.start=''
        this.SearchInput=''
        this.value = ''
        this.dateValue=''
        this.getCaseList()
        
      },
    // 打开添加
        toAdd(){
         this.common.checkAuth({params:{url:'AddCases8',userid:localStorage.getItem('userId')}}).then((res)=>{
           //console.log(res)
            if(res.data ==false){
             this.$message({
                message:'没有权限',
                type:'warning'
                });     
              return false
          }else{
               ////console.log('123456')
              this.$router.push({path:'/index/caseAdd'})
          }
         }).catch((err)=>{
            this.$message({
                message:'服务器异常',
                type:'warning'
                });     
              return false
         })
       
      },
    //进入详情
       lineCilck(row, event, column){
           ////console.log(row.Charging_Method)
          this.$router.push({path:`/Index/caseEdit/${row.Id}/${row.Charging_Method}`})
           //this.$router.push({name:'caseEdit',params:{id:row.Id,typeId:row.Charging_Method}})  
      },
      //编辑操作
        updateData(id,type_id){
         this.common.checkAuth({params:{url:'Index/caseUpdate',userid:localStorage.getItem('userId')}}).then((res)=>{
           //console.log(res)
            if(res.data ==false){
             this.$message({
                message:'没有权限',
                type:'warning'
                }); 
              this.$router.push({path:`/index/caseUpdate/${id}/${type_id}`})

            //  return false
          }else{
               ////console.log('123456')
              this.$router.push({path:`/index/caseUpdate/${id}/${type_id}`})
          }
         })
      },
      //时间查询
         changeTime(value){
             //console.log(value)
             if(value==null){
               this.start = '',
               this.end = '',
                this.getCaseList()
                return 
             }
              let value1= value[0]
              let value2= value[1]
              var start = new Date(value1);  
              var youWant1=start.getFullYear() + '-' + (start.getMonth() + 1) + '-' + start.getDate() + ' ' + start.getHours() + ':' + start.getMinutes() + ':' + start.getSeconds(); 
              var end = new Date(value2);  
              var youWant2=end.getFullYear() + '-' + (end.getMonth() + 1) + '-' + end.getDate() + ' ' + end.getHours() + ':' + end.getMinutes() + ':' + end.getSeconds(); 
              this.start = youWant1
              this.end = youWant2
              
             this.getCaseList()
      },

     handleSizeChange(val) {
         this.numPage = val
         this.getCaseList()
         //console.log(`每页 ${ this.numPage} 条`);
      },
      handleCurrentChange(val) {
        //console.log(val)
        this.currentPage = val
        this.getCaseList()

        //console.log(`当前页: ${this.currentPage}`);
      },
        //下载excel
     downExcel() {
      const th = ['案件编号', '案件名称', '客户名称', '案件类别','承办律师','合同起止日期','立案日期','立案状态']
      const filterVal = ['Case_No', 'Case_Name', 'Customer_Name_Zh','Value','Case_Lawyer_Name','Contract_Date_From','Creattime','Status']
      const data = this.tableData.map(v => filterVal.map(k => v[k]))
      const [fileName, fileType, sheetName] = ['测试下载', 'xlsx', '测试页']
      this.$toExcel({th, data, fileName, fileType, sheetName})
      },
    //获取二级菜单下拉
        changeTowValue(id){
        //console.log(id)
         this.Casevalue2 = id
         this.getCaseList()
      },
      //状态查询
      changeStatus(id){
        //console.log(id)
         this.statusValue = id
         this.getCaseList()
      },
      //搜索查询
      searchContent(){
       //console.log(this.SearchInput)

       this.getCaseList()
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
        //合同上传
      shangchun(id){
      this.common.checkAuth({params:{url:'Index/Upd_Case_Status2',userid:localStorage.getItem('userId')}}).then((res)=>{
        //console.log(res)
          if(res.data ==false){
             this.$message({
                message:'没有权限',
                type:'warning'
                }); 
             return false
          }else{
              this.Case_Id = id
               // //console.log(this.Case_Id)
                this.dialogFormVisible =true
          }
        })
      },
        successFile(res){
            //console.log(res)
            if(res.code == 200){
                    this.code = 200
                    this.File_Name = res.File_Name
                    this.Suffix_Name =res.Suffix_Name
                    this.fileName1 = res.fileName
                    this.size = res.size
                    //console.log(this.fileName1)
                   this.$message({
                    message:res.message,
                    type:'success'
                });  
            } 
          },
          errorFile(){
              this.$message({
                    message:'上传失败',
                    type:'warning'
                });  
          },
          progressFile(){
           
          },
          beforeFile(file){
            //console.log(file.name)
             var json = file.name.split(".")
             var file_name =json[0];
             this.fileName = file_name
             this.nameData.File_Name = this.fileName
            
          },
            //保存上传文件
            saveDoc(){
            if(this.fileName != ''|| this.fileName !=null){
                  this.File_Name = this.nameData.File_Name
                  //console.log(this.File_Name)
              }
             
                if(this.code != 200){
               this.$message({
                    message:'请先上传文件',
                    type:'warning'
                });
                return false  
                }
                
                let param  = new URLSearchParams()
                  param.append('User_Id',localStorage.getItem('userId'))
                  param.append('Case_Id',this.Case_Id)
                  param.append('File_Name',this.File_Name)
                  param.append('fileName',this.fileName1)
                  param.append('size',this.size)
                  param.append('Suffix_Name',this.Suffix_Name)
                this.$http.post('/yongxu/Document/Add_Document',{
                    User_Id: localStorage.getItem('userId'),
                    Case_Id:this.Case_Id,
                    File_Name:this.fileName,
                    fileName:this.fileName1,
                    size:this.size,
                    Suffix_Name:this.Suffix_Name,
                }).then((res)=>{
                    //console.log(res)
                    if(res.data == true){
                          this.$message({
                        message:'保存成功',
                        type:'success'
                    });
                     this.dialogFormVisible = false
                    this.changeState(2)
                    }
                    else{
                           this.$message({
                        message:'保存失败',
                        type:'warning'
                    });
                    }
                   
                }).catch((err)=>{
                    //console.log(err)
                })
            },
              //申请结案
            finishCase(id){
                 this.common.checkAuth({params:{url:'Index/Upd_Case_Status4',userid:localStorage.getItem('userId')}}).then((res)=>{
                //console.log(res)
               // return false
              if(res.data ==false){
             this.$message({
                message:'没有权限',
                type:'warning'
                }); 
             return false
          }else{
                  this.$http.get('/yongxu/Index/Upd_Case_Status',{params:{
                        Case_Id:id,
                        Status_Id:4
                    }}).then((res)=>{
                      //console.log(res)
                      this.$message({
                          message:'操作成功',
                          type:'success'
                          }); 
                      this.getCaseList()
                        
                    })
          }
         })
            
            },
              //作废合同
            deleteCase(id){
                 this.common.checkAuth({params:{url:'Index/Upd_Case_Status4',userid:localStorage.getItem('userId')}}).then((res)=>{
                //console.log(res)
               // return false
              if(res.data ==false){
             this.$message({
                message:'没有权限',
                type:'warning'
                }); 
             return false
          }else{
                  this.$http.get('/yongxu/Index/Upd_Case_Status',{params:{
                        Case_Id:id,
                        Status_Id:-1
                    }}).then((res)=>{
                      //console.log(res)
                        this.$message({
                          message:'操作成功',
                          type:'success'
                          }); 
                      this.getCaseList()
                       
                    })
          }
         })
            
            },
            //更改状态上传
            changeState(id){
              this.$http.get('/yongxu/Index/Upd_Case_Status',{params:{
                  Case_Id:this.Case_Id,
                  Status_Id:id
              }}).then((res)=>{
                //console.log(res)
                this.getCaseList()
                this.dialogFormVisible = false
              })
            }
    },
    components:{
         JsonExcel:'downloadExcel',
    },
    　filters:{
      getStatus:function(Status){
          if(Status == 1){
              return '启用'
          }else{
               return '禁用'
          }　
　　　　},
     
     getTime:function(time){
        if(time==''||time==null){
            return time
        }else{
          return time.substring(0,10)
        }
      }
    },
    mounted(){
        this.getSelectMenu()
        this.getCaseList()
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

