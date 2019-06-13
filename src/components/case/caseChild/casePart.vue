<template>
    <div>
            <div class="case-child-end flex">
                    <div class="input flex">
                      <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input"/>
                          
                      <button class="case-button" @click="searchContent()"><i class="el-icon-search"></i></button>
                    
                    </div>
                      <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>新建案例</el-button>
                </div>
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

               <div class="case-state flex">
               <p>案件状态：</p> 
               <el-select v-model="value" placeholder="请选择" style="margin-left: 10px;" @change="changeStatus(value)"> 
               <el-option v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value"></el-option>
               </el-select>
               </div>          
              <div class="case-time flex">
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
              
                <button class="dingzhi" @click="downExcel1()"><i class="el-icon-download"></i>导出</button>
                <!-- <button class="dingzhi"><i class="el-icon-download"></i>不顶置</button> -->
                  <button class="dingzhi" @click="clear()">清空</button>
              </div>
                  <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Case_No" label="案件编号" width="100" sortable :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Case_Name" label="案件名称" width="" :show-overflow-tooltip="true"> </el-table-column>
                     <el-table-column prop="Customer_Name_Zh" label="客户名称" width="" :show-overflow-tooltip="true"> </el-table-column>
                      <el-table-column  label="案件类别" width="" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span>
                                {{scope.row.Category_Name}}一{{scope.row.Value}}
                            </span>
                        </template>
                      </el-table-column>
                       <el-table-column prop="Staff_Name" label="主办律师" width="" :show-overflow-tooltip="true"> </el-table-column>
                          <el-table-column  label="合同起止日期" width="120">
                                <template slot-scope="scope">
                                    <p  v-if="!scope.row.Contract_Date_From" style="color:#ccc">暂无</p>
                                    <p v-else>{{scope.row.Contract_Date_From | getTime}}</p>
                                    
                                </template>
                            
                             </el-table-column>
                             <el-table-column  label="立案日期" width="100" sortable prop="Filing_Date">
                                <template slot-scope="scope" >
                                    <p  v-if="!scope.row.Filing_Date" style="color:#ccc">暂无</p>
                                    <p v-else>{{scope.row.Filing_Date | getTime}}</p>
                                </template>
                               
                                </el-table-column>
                       
                        <el-table-column  label="立案状态">
                            <template slot-scope="scope">
                                <p v-if="scope.row.type == -2">{{scope.row.Status}}</p>
                                <p v-else> {{scope.row.Status}}</p>
                            </template>
                           </el-table-column>

                            <el-table-column  label="操作">
                            <template slot-scope="scope">
                                <p v-if="scope.row.type == -2" @click.stop="updateData(scope.row.Id,scope.row.Charging_Method)" style="cursor:pointer;color:red">返回修改</p>
                                <!-- <p v-if="scope.row.type == -1" @click.stop> {{scope.row.Status}}</p> -->
                                <p v-if="scope.row.type == 0" @click.stop> {{scope.row.Status}}</p>
                                <p v-if="scope.row.type == 1" style="cursor:pointer;color:blue" @click.stop="shangchun(scope.row.Id)">上传合同</p>
                                <p v-if="scope.row.type == 2" style="cursor:pointer;color:blue"  @click.stop="finishCase(scope.row.Id)">申请结案</p>
                                 <!-- <p v-if="scope.row.type == 3" style="cursor:pointer;color:blue" @click.stop="deleteCase(scope.row.Id)">作废案件</p> -->
                                  <p v-if="scope.row.type == 3">已结案</p>
                                <p v-if="scope.row.type == 4" @click.stop> {{scope.row.Status}}</p>
                            </template>
                           </el-table-column>

                </el-table>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[20,50,100]" :page-size="numPage"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                   </el-pagination>
                </div>
                 <el-dialog  :visible.sync="dialogFormVisible" :modal-append-to-body='false' :modal='false' top="300px" width="600px">
        <div class="dialogFormVisible flex">
          <div class="dialogFormVisivleInput flex">
              <p>文档名称</p><div class="dialogFormVisivleInput_right"><input type="text" class="common-input" v-model="fileName" readonly></div>
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
                    :limit="1"
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
</template>
<script>
export default {
    data(){
        return{
            Casevalue:[],
            currentPage:1,
            total:0,
            numPage:20,
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
         {value:0,label:'审核中'},{value:1,label:'已审核'},{value:2,label:'已签合同'},{value:3,label:'已结案'},{value:-2,label:'返回修改'},{value:4,label:'待结案'}
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
            allData:[],
        }
    },
    inject:["reload"],
    methods:{
        // 获取案件列表
        getCaseList(){ 
        var statusValue;
          if(this.value === '' || this.value === null){
                statusValue = -3;
          }else{
             statusValue = this.value
          }
         var userId = localStorage.getItem('userId')
        
         this.$http.get('/yongxu/Index/Show_Department_Case',{params:{
        //    sessionId:localStorage.getItem('sessionId'),
           UserId:userId,
           Dic_Id:this.Casevalue2,
           Status:statusValue,
           MaxTime:this.end,
           MinTime:this.start,
           VagueName:this.SearchInput,
           Display_Page_Number:this.numPage,
           PageNumber:this.currentPage,
         }}).then((res)=>{
           this.tableData = res.data.Department_Case
           this.tableData1 = res.data
           this.total = res.data.PageCount
           
        }).catch((err)=>{
        })
      },
    // 打开添加
        toAdd(){
             this.common.checkAuth({params:{url:'AddCases10',userid:localStorage.getItem('userId')}}).then((res)=>{
            if(res.data ==false){
             this.$message({
                message:'没有权限',
                type:'warning'
                });     
              return false
          }else{
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
       clear(){
        this.Casevalue = ''
         this.Casevalue2 = 0
        this.value = ''
        this.end=''
        this.start=''
        this.dateValue=''
        this.SearchInput=''
        this.Casevalue1 = ''
        console.log(this.Casevalue2)
        this.getCaseList() 
        
      },
    //进入详情
       lineCilck(row, event, column){
          this.$router.push({path:`/index/caseEdit/${row.Id}/${row.Charging_Method}`}) 
      },
      //编辑操作
         updateData(id,type_id){
         this.common.checkAuth({params:{url:'index/caseUpdate',userid:localStorage.getItem('userId')}}).then((res)=>{
            this.$router.push({path:`/index/caseUpdate/${id}/${type_id}`})
          //     if(res.data ==false){
          //    this.$message({
          //       message:'没有权限',
          //       type:'warning'
          //       }); 
          //    return false
          // }else{
             
          //     this.$router.push({path:`/index/caseUpdate/${id}/${type_id}`})
          // }
         })
         },
      //时间查询
         changeTime(value){
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
      },
      handleCurrentChange(val) {
        this.currentPage = val
        this.getCaseList()
      },
        //下载excel
     downExcel() {
        this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
                 //console.log(res)
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
                      const th = ['案件编号', '案件名称', '客户名称', '案件类别','承办律师','合同起止日期','立案日期','立案状态']
                      const filterVal = ['Case_No', 'Case_Name', 'Customer_Name_Zh','Value','Case_Lawyer_Name','Contract_Date_From','Creattime','Status']
                      const data = this.tableData.map(v => filterVal.map(k => v[k]))
                      const [fileName, fileType, sheetName] = ['测试下载', 'xlsx', '测试页']
                      this.$toExcel({th, data, fileName, fileType, sheetName})
                 }
              })
      },
       //排序
        sortChange(column){
        //console.log(column.order)
        if(column.order !== null && column.prop === 'Filing_Date'){
            var data = []
            for(let i = 0;i<this.tableData.length;i++){
             
                if(this.tableData[i].Filing_Date === null || this.tableData[i].Filing_Date === undefined){
                    //console.log('为空')
                    data.push(this.tableData[i])
                }else{
                   //console.log('不为空')
                  data.unshift(this.tableData[i])
                }
            }
            this.tableData = data
            //console.log(data)
        }
        if(column.order === null){
          this.tableData = this.tableData
        }
        this.sortRule.order = column.order
        this.sortRule.prop = column.prop
      },
    //获取二级菜单下拉
        changeTowValue(id){
             if(id == '' || id ==null){
          this.Casevalue2 = 0
      }else{
        this.Casevalue2 = id
      }
         this.getCaseList()
      },
      //状态查询
      changeStatus(id){
         this.statusValue = id
         this.getCaseList()
      },
      //搜索查询
      searchContent(){
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
         this.selectOneId = id
         this.$http.get('/yongxu/Index/GetBoxTwo',{params:{Id:this.selectOneId}}).then((res)=>{
          this.optionChildMenu = res.data  
          this.Casevalue1 =res.data[0].Id
           //this.Casevalue1 = res.data
        })
      },
        //合同上传
      shangchun(id){
       this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
                 //console.log(res)
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
                 }else{
                     this.common.checkAuth({params:{url:'Index/Upd_Case_Status2',userid:localStorage.getItem('userId')}}).then((res)=>{
                      this.Case_Id = id
                      this.dialogFormVisible =true
                      })
                 }
              })          
      },
        successFile(res){
            if(res.code == 200){
                    this.code = 200
                    this.File_Name = res.File_Name
                    this.Suffix_Name =res.Suffix_Name
                    this.fileName1 = res.fileName
                    this.size = res.size
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
             var json = file.name.split(".")
             var file_name =json[0];
             this.fileName = file_name
             this.nameData.File_Name = this.fileName
            
          },
            //保存上传文件
            saveDoc(){
            if(this.fileName != ''|| this.fileName !=null){
                  this.File_Name = this.nameData.File_Name
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
                    File_Name:this.File_Name,
                    fileName:this.fileName1,
                    size:this.size,
                    Suffix_Name:this.Suffix_Name,
                }).then((res)=>{
                    if(res.data == true){
                          this.$message({
                        message:'保存成功',
                        type:'success'
                    });
                     this.dialogFormVisible = false
                     this.reload()
                    this.changeState()
                    }
                    else{
                           this.$message({
                        message:'保存失败',
                        type:'warning'
                    });
                    }
                   
                }).catch((err)=>{
                     this.$message({
                        message:'服务器异常',
                        type:'warning'
                    });
                })
            },
              //申请结案
            finishCase(id){
               this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
                 //console.log(res)
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
                 }else{
                     this.common.checkAuth({params:{url:'Index/Upd_Case_Status4',userid:localStorage.getItem('userId')}}).then((res)=>{
                  this.$confirm('此操作将申请结案, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'success'
            }).then(() => {
           this.$http.get('/yongxu/Index/Upd_Case_Status',{params:{
                        Case_Id:id,
                        Status_Id:4
                    }}).then((res)=>{
                      this.$message({
                          message:'操作成功',
                          type:'success'
                          }); 
                      this.getCaseList()  
                    })
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });          
              });
              })
                 }
              })
               
            
            },
              checkLogin(){
          this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
                 //console.log(res)
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
              })
      },
              //作废合同
            deleteCase(id){
                 this.common.checkAuth({params:{url:'Index/Upd_Case_Status4',userid:localStorage.getItem('userId')}}).then((res)=>{
                this.$http.get('/yongxu/Index/Upd_Case_Status',{params:{
                        Case_Id:id,
                        Status_Id:-1
                    }}).then((res)=>{
                        this.$message({
                          message:'操作成功',
                          type:'success'
                          }); 
                      this.getCaseList()
                     
                    })
          //     if(res.data ==false){
          //    this.$message({
          //       message:'没有权限',
          //       type:'warning'
          //       }); 
          //    return false
          // }else{
          //         this.$http.get('/yongxu/Index/Upd_Case_Status',{params:{
          //               Case_Id:id,
          //               Status_Id:-1
          //           }}).then((res)=>{
          //               this.$message({
          //                 message:'操作成功',
          //                 type:'success'
          //                 }); 
          //             this.getCaseList()
                     
          //           })
          // }
         })
            
            },
            //更改状态上传
            changeState(){
              this.$http.get('/yongxu/Index/Upd_Case_Status',{params:{
                  Case_Id:this.Case_Id,
                  Status_Id:2
              }}).then((res)=>{
                this.getCaseList()
                this.dialogFormVisible = false
              })
            },
               //下载excel
     downExcel1:function() {
     this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
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
                      const th = ['合同编号', '案件名称', '客户名称','客户类型','行业类型','一级案件类别','二级案件类别','主办律师','承办律师','合同金额','标的额','地址','联系方式']
                      const filterVal = ['Contract_No', 'Case_Name','Customer_Type','Trade_Type','Customer_Name_Zh','One_Case_Type','Two_Case_Type','Staff_Name','Undertake_Name','Amount','Target','Detailed_Address','Contact_Party']
                      const data = this.allData.map(v => filterVal.map(k => v[k]))
                      const [fileName, fileType, sheetName] = ['测试下载', 'xlsx', '测试页']
                      this.$toExcel({th, data, fileName, fileType, sheetName})
                 }
              })
      },
         getAllDataList(){
              this.$http.post('/yongxu/Index/Export_Data',{User_Id:localStorage.getItem('userId'),sign:3}).then((res)=>{
               // console.log(JSON.stringify(res.data))
                this.allData = res.data
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
      this.getAllDataList()
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
@import '../../../assets/sass/main.css';
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

