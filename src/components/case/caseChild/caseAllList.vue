<template>
    <div>
            <div class="case-child-end2 flex">
                    <div class="case-state flex">
                    <p>分所查询：</p>
                  <el-select v-model="branchValue" placeholder="请选择" @change="changeBranch(branchValue)"> 
                    <el-option v-for="item in branchList" :key="item.Id" :label="item.Org_Name"  :value="item.Id"> </el-option>
                  </el-select>
                    </div>          

                    <div class="flex row">
                    <div class="input flex">
                      <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input"/>
                          
                      <button class="case-button" @click="searchContent()"><i class="el-icon-search"></i></button>
                    </div>
                      <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>新建案件</el-button>
                    </div>
                  
                        <!-- <button class="dingzhi" @click="downExcel1()"><i class="el-icon-download"></i>导出</button> -->
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
                type="daterange"
                :picker-options="pickerOptions2"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
                </el-date-picker>
                </div>
              
                <button class="dingzhi" @click="downExcel1()"><i class="el-icon-download"></i>导出</button>
                <!-- <button class="dingzhi"><i class="el-icon-download"></i>顶置</button> -->
                <button class="dingzhi" @click="clear()">清空</button>
              </div>
                  <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck" :header-cell-style="cellStyle">
                    <el-table-column  label="案件编号" width="110" sortable  :show-overflow-tooltip="true" prop="Case_No" style="height:100%;width:100%" @click.stop>
                          <template slot-scope="scope">
                                  <span @click="copy" >{{scope.row.Case_No}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="Staff_Name" label="主办律师" width=""> </el-table-column>
                     <el-table-column prop="Customer_Name_Zh" label="客户名称" width="100" :show-overflow-tooltip="true"> </el-table-column>
                  
                    
                      <el-table-column  label="案件类别" width="150" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span>
                                {{scope.row.Category_Name}}一{{scope.row.Value}}
                            </span>
                        </template>
                      </el-table-column>
                         <el-table-column prop="Case_Name" label="案件名称" width="180" :show-overflow-tooltip="true"> </el-table-column>
                        
                             <el-table-column  label="立案日期" width="110" sortable prop="Filing_Date">
                                <template slot-scope="scope">
                                    <p  v-if="!scope.row.Filing_Date" style="color:#ccc">暂无</p>
                                    <p v-else>{{scope.row.Filing_Date | getTime}}</p>
                                </template>
                               
                                </el-table-column>
                       
                        <el-table-column  label="立案状态">
                            <template slot-scope="scope">
                                <p v-if="scope.row.type == -2"  style="cursor:pointer">{{scope.row.Status}}</p>
                                <p v-else> {{scope.row.Status}}</p>
                            </template>
                           </el-table-column>

                            <el-table-column  label="操作">
                            <template slot-scope="scope">
                              <div v-if="scope.row.type == -2" style="justify-content: space-between;display: flex;">
                                <p  @click.stop="updateData(scope.row.Id,scope.row.Charging_Method)" style="cursor:pointer;color:red">
                                  修改
                                </p>
                                 <p  style="cursor:pointer;color:#333333;" @click.stop="deleteCase(scope.row.Id)">
                                  作废
                                </p>
                              </div>
                                
                                <p v-if="scope.row.type == -1" @click.stop style="color:#999999;"> {{scope.row.Status}}</p>
                                <p v-if="scope.row.type == 0" @click.stop> {{scope.row.Status}}</p>
                                <p v-if="scope.row.type == 1" style="cursor:pointer;color:blue" @click.stop="shangchun(scope.row.Id)">上传合同</p>
                                <p v-if="scope.row.type == 2" style="cursor:pointer;color:blue"  @click.stop="finishCase(scope.row.Id)">申请结案</p>
                                 <p v-if="scope.row.type == 3">已结案</p>
                                <p v-if="scope.row.type == 4" @click.stop> {{scope.row.Status}}</p>

                            </template>
                           </el-table-column>

                </el-table>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[20,50,100]" :page-size="numPage"  layout="total, sizes, prev, pager, next, jumper" :total="total1">
                   </el-pagination>
                </div>
                 <el-dialog  :visible.sync="dialogFormVisible" :modal-append-to-body='false' :modal='false' top="300px" width="600px">
        <div class="dialogFormVisible flex">
          <div class="dialogFormVisivleInput flex">
              <p>文档名称</p><div class="dialogFormVisivleInput_right"><input type="text" class="common-input" v-model="fileName" readonly></div>
          </div>
           <div class="dialogFormVisivleFile flex">
                  <el-upload
                    ref='upload'
                    class="upload-demo"
                    drag
                    action="/yongxu/Base/uploadRawFile"
                    :data='nameData'
                    :on-success="successFile"
                    :on-progress="progressFile"
                    :before-upload="beforeFile"
                    :on-error="errorFile"
                    :on-exceed="overLimit"
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
import ClipboardJS from 'clipboard'
export default {
    data(){
        return{
            Casevalue:[],
            currentPage:1,
            total1:0,
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
        optionMenu:{},
        //2下拉菜单
        optionChildMenu:{},
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
            allData:[],
            branchList:[],
            branchValue:'',
            Orgid:0,
            Category_Id:0,
        }
    },
    inject:["reload"],
    methods:{
   copy(event) {   
         event.preventDefault(); 
         event.stopPropagation()
        },
       cellStyle() {
        return 'border-right: 1px solid #ebeef5'
     },
      /** 
       * 获取案件列表
       * 案件全部与后面三个接口一致参数有异，这里只写此页面注释
       * ==不识别0，故使用===
       * userId 用户Id
       * Casevalue2 二级案件类型
       * statusValue && value 案件状态
       * end 最大时间
       * start 最小时间
       * SearchInput 搜索内容
       * numPage 分页每页条数
       * currentPage 当前页
      */     
        getCaseList:function(){ 
        //  console.log(this.Casevalue)
        // console.log(this.Casevalue2)
        var statusValue;
          if(this.value === '' || this.value === null){
                statusValue = -3;
          }else{
             statusValue = this.value
          }
         var userId = localStorage.getItem('userId')
         this.$http.get('/yongxu/Index/Show_All_Cases',{params:{
         //sessionId:localStorage.getItem('sessionId'),
           UserId:userId,
           Dic_Id:this.Casevalue2,
           Status:statusValue,
           MaxTime:this.end,
           MinTime:this.start,
           VagueName:this.SearchInput,
           Display_Page_Number:this.numPage,
           PageNumber:this.currentPage,
           Orgid:this.Orgid,
           Category_Id:this.Category_Id,
         }}).then((res)=>{
           this.tableData = res.data.All_Cases
           this.total1 = res.data.PageCount
        }).catch((err)=>{
          
        })
      },
    // 打开添加
        toAdd:function(){
         this.common.checkAuth({params:{url:'AddCases8',userid:localStorage.getItem('userId')}}).then((res)=>{
            if(res.data == false){
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
      //清空
        clear:function(){
        this.Casevalue = ''
        this.Casevalue2 = 0
        this.value = ''
        this.end=''
        this.start=''
        this.dateValue=''
        this.SearchInput=''
        this.Casevalue1 = ''
        this.Orgid=0
        this.branchValue=''
        this.Category_Id=0
       // console.log(this.Casevalue2)
        this.getCaseList()  
      },
    //进入详情
       lineCilck:function(row, event, column){
        var timeRouter = true
        this.$router.push({path:`/index/caseEdit/${row.Id}/${row.Charging_Method}`})
       
      },
      //编辑操作
        updateData:function(id,type_id){
                     this.$router.push({path:`/index/caseUpdate/${id}/${type_id}`})
        //  this.common.checkAuth({params:{url:'Index/caseUpdate',userid:localStorage.getItem('userId')}}).then((res)=>{
        //       this.$router.push({path:`/index/caseUpdate/${id}/${type_id}`})
        //  })
      },
      //时间查询
         changeTime:function(value){
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

     handleSizeChange:function(val) {
         this.numPage = val

         this.getCaseList()
      },
      handleCurrentChange:function(val) {
        this.currentPage = val
        this.getCaseList()
      },
      /**
       * 获取分所下拉
       */
      getBranchList(){
         this.$http.get('/yongxu/Index/Get_Branch').then((res)=>{
           this.branchList = res.data
           console.log(res)
         })
      },
      /**
       * 选择分所下拉
       */
      changeBranch(id){
          this.Orgid = id
          this.getCaseList() 
      },
      //下载excel
     downExcel:function() {
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
                      const th = ['案件编号', '案件名称', '客户名称', '案件类别','承办律师','合同起止日期','立案日期','立案状态']
                      const filterVal = ['Case_No', 'Case_Name', 'Customer_Name_Zh','Value','Case_Lawyer_Name','Contract_Date_From','Creattime','Status']
                      const data = this.tableData.map(v => filterVal.map(k => v[k]))
                      const [fileName, fileType, sheetName] = ['律所案件', 'xlsx', '律所案件']
                      this.$toExcel({th, data, fileName, fileType, sheetName})
                 }
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
                      this.$http.post('/yongxu/Index/Export_Data',{User_Id:localStorage.getItem('userId'),sign:1}).then((res)=>{
                          this.allData = res.data
                      }).then(()=>{
                       const th = ['合同编号', '案件名称', '客户名称','客户类型','行业类型','一级案件类别','二级案件类别','主办律师','承办律师','合同金额','标的额','地址','联系方式']
                      const filterVal = ['Contract_No', 'Case_Name','Customer_Type','Trade_Type','Customer_Name_Zh','One_Case_Type','Two_Case_Type','Staff_Name','Undertake_Name','Amount','Target','Detailed_Address','Contact_Party']
                      const data = this.allData.map(v => filterVal.map(k => v[k]))
                      const [fileName, fileType, sheetName] = ['律所案件', 'xlsx', '律所案件']
                      this.$toExcel({th, data, fileName, fileType, sheetName})
                      })
                   
                      
                    
                 }
              })
      },
    //获取二级菜单下拉
        changeTowValue:function(id){
         // console.log(id)
            if(id == '' || id ==null){
                this.Casevalue2 = 0
            }else{
              this.Casevalue2 = id
            }
              this.getCaseList()
      },
      //状态查询
      changeStatus:function(id){
         this.getCaseList()
      },
      //搜索查询
      searchContent:function(){
       this.getCaseList()
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
                    this.selectOneId = id
                    this.$http.get('/yongxu/Index/GetBoxTwo',{params:{Id:this.selectOneId}}).then((res)=>{
                      //console.log(res)
                    this.optionChildMenu = res.data  
                    this.optionChildMenu.push({Id:0,Value:'全部',Category_Id:0})
                    this.Category_Id = this.Casevalue
                    if(res.data.length===0){
                        this.Casevalue1 = ''
                    }else{
                        this.Casevalue1 = 0
                    }
                    this.changeTowValue(this.Casevalue1)
         })
      },
      sortChange(column){
        if(column.order !== null && column.prop === 'Filing_Date'){
            var data = []
            for(let i = 0;i<this.tableData.length;i++){
             
                if(this.tableData[i].Filing_Date === null || this.tableData[i].Filing_Date === undefined){
                    data.push(this.tableData[i])
                }else{
                  data.unshift(this.tableData[i])
                }
            }
            this.tableData = data
        }
        if(column.order === null){
          this.tableData = this.tableData
        }
        this.sortRule.order = column.order
        this.sortRule.prop = column.prop
      },
        //合同上传
      shangchun:function(id){
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
                 }else{
                      this.common.checkAuth({params:{url:'Index/Upd_Case_Status2',userid:localStorage.getItem('userId')}}).then((res)=>{
                      this.Case_Id = id
                      this.fileName = ''
                      this.fileName1=''
                      this.size=''
                      this.Suffix_Name=''
                      this.nameData.File_Name=''
                      this.dialogFormVisible =true
                      })
                 }
              })          
      },
      /**
       * 上传成功回调
       * File_Name 文件名
       * Suffix_Name 后缀名
       * fileName1 文件路径
       * size 文件大小
       */
        successFile:function(res){
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
          
          errorFile:function(){
              this.$message({
                    message:'上传失败',
                    type:'warning'
                });  
          },
          progressFile:function(){
           
          },
          beforeFile:function(file){
             var json = file.name.split(".")
             var file_name =json[0];
             this.fileName = file_name
             this.nameData.File_Name = this.fileName 
          },
            //保存上传文件
            saveDoc:function(){
            // if(this.fileName != ''|| this.fileName !=null){
            //       this.File_Name = this.nameData.File_Name
            //   }
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
                this.$http.post('/yongxu/Document/Add_List_Document',{
                    User_Id: localStorage.getItem('userId'),
                    Case_Id:this.Case_Id,
                    File_Name:this.fileName,
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
                    //this.reload()
                     this.$refs['upload'].clearFiles();
                    this.changeState(2)
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
            finishCase:function(id){
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
                  message: '已取消操作'
                });          
              });
              })
                 }
              })
            },
            overLimit(files, fileList){
              console.log(files)
            },
              //作废合同
            deleteCase:function(id){
                this.$confirm('此操作将作废结案, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'info'
            }).then(() => {
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
             }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消作废'
                });          
              });
               
            },
          checkLogin(){
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
                 }else{
                     return true
                 }
              })
      },
            //更改状态上传
            changeState:function(id){
              this.$http.get('/yongxu/Index/Upd_Case_Status',{params:{
                Case_Id:this.Case_Id,
                Status_Id:id
              }}).then((res)=>{
                this.getCaseList()
                this.dialogFormVisible = false
              })
            },
            getAllDataList(){
             
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
      },
     
    },
    mounted:function(){
        this.getBranchList()
        this.getSelectMenu()
        this.getCaseList()
    },
    activated() {
       // this.getAllDataList()
        this.getSelectMenu()
        this.getCaseList()
    },
    watch:{
    // Casevalue:function(newV,oldV){
  
    //     this.getSelectChildeMenu(newV)
    // },
    dialogFormVisible:function(newData){
      if(newData == false){
          this.$refs['upload'].clearFiles();
      }
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
.case-child-end2{
    flex-direction: row;
    justify-content:space-between;
}
.selectMenu{
    margin-top: 20px;
}
</style>

