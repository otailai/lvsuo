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
          <el-table :data="riskArr" style="width: 100%">
          <el-table-column type="expand">
          <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand" v-if='props.row.Obtain_Audit_Notes'> 
          <el-form-item label="日期">
              <span v-if="props.row.Obtain_Audit_Notes"> {{props.row.Obtain_Audit_Notes.Audit_Time}}</span>
              <span v-if="!props.row.Obtain_Audit_Notes">暂无</span>
          </el-form-item>
       
          <el-form-item label="结果">
            <span v-if="props.row.Obtain_Audit_Notes"> {{props.row.Obtain_Audit_Notes.Findings_Audit}}</span>
              <span v-if="!props.row.Obtain_Audit_Notes">暂无</span>
          </el-form-item>
          <el-form-item label="审核人">
            <span v-if="props.row.Obtain_Audit_Notes"> {{props.row.Obtain_Audit_Notes.Staff_Name}}</span>
              <span v-if="!props.row.Obtain_Audit_Notes">暂无</span>
          </el-form-item>
             
             <el-form-item label="备注">
             <span v-if="props.row.Obtain_Audit_Notes" v-html="props.row.Obtain_Audit_Notes.Remarks"></span>
              <span v-if="!props.row.Obtain_Audit_Notes">暂无</span>
          </el-form-item>
        </el-form>

         <el-form label-position="left" inline class="demo-table-expand" v-if='!props.row.Obtain_Audit_Notes'> 
           <el-form-item label="">
              <span>暂无数据</span>
          </el-form-item>
        </el-form>
         
      </template>
    </el-table-column>
   
                      
                    <el-table-column prop="Case_No" label="案件编号" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Case_Name" label="案件名称" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="staff_Name" label="主办律师" width="" :show-overflow-tooltip="true"> </el-table-column>
                     <el-table-column prop="Value" label="案件类别" width="" :show-overflow-tooltip="true"> </el-table-column>
                      <el-table-column  label="申请日期" width="" :show-overflow-tooltip="true" prop="Date_Created" sortable> 
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

                          <el-table-column  label="审核人" width="" :show-overflow-tooltip="true"> 
                              <template slot-scope="scope"> 
                               <span>{{scope.row.Obtain_Audit_Notes | ifnull}}</span>
                              </template>
                          </el-table-column>  

                        <el-table-column  label="操作" width="180"> 
                          <template  slot-scope="scope">
                            <span v-show="scope.row.state == 1" @click="open(scope.row.Id)" style="cursor:pointer"><i class="el-icon-close" style="font-size: 20px;font-weight: 600;"></i></span>
                            <span v-show="scope.row.state == 1" @click="open1(scope.row.Id)" style="cursor:pointer"><i class="el-icon-check" style="font-size: 20px;font-weight: 600;"></i></span>
                              <span v-show="scope.row.state != 1">已审核</span>
                          </template>
                        </el-table-column>
  </el-table>



                 <!-- <el-table :data="riskArr" border style="width: 100%"  @row-click="lineCilck">
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
                  </el-table> -->
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[20,50,100]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                   </el-pagination>
                </div>
                </li>
                </ul>
            </div>
  <el-dialog title="此操作将不通过一级风控审核, 是否继续?" :visible.sync="dialogVisible"  :modal-append-to-body='false' :modal='false' top="300px" width="600px">
  <span>备注信息</span>
  <div style="margin-top:20px;">
     <quill-editor v-model="remark" ref="myQuillEditor" :options="editorOption" style="width:550px;"></quill-editor>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addRemarkButton">确 定</el-button>
  </span>
</el-dialog>

   <el-dialog title="此操作将通过一级风控审核, 是否继续?" :visible.sync="dialogVisible1"  :modal-append-to-body='false' :modal='false' top="300px" width="600px">
  <span>备注信息</span>
  <div style="margin-top:20px;">
     <quill-editor v-model="remark" ref="myQuillEditor" :options="editorOption" style="width:550px;"></quill-editor>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="addRemarOk()">确 定</el-button>
  </span>
</el-dialog>
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
                remark:'',
                expandRowKeys:[],
                dialogVisible:false,
                dialogVisible1:false,
                       //富文本
            editorOption:{
                modules:{
                  
                },
                placeholder:'选填',
                theme:'snow'
            },
            info:'',
            caseReMarkId:'',
             Category_Id:0, 
        }
    },
    inject:["reload"],
    methods:{
      updateData(){
        this.getRiskArr()
      },
         getRiskArr:function(){
        this.$http.get('/yongxu/Toexamine/Show_Noe_Risk',{params:{
          User_Id:localStorage.getItem('userId'),
          Display_Page_Number:this.pageNum,
          PageNumber:this.currentPage,
          Dic_Id:this.Casevalue2,
          VagueName:this.SearchInput,
          Category_Id:this.Category_Id,
        }}).then((res)=>{
            console.log(res) 
            this.riskArr = res.data.Noe_Risk
            this.total = res.data.PageCount
        })
      },
          sortChange(column){
       // console.log(column.order)
        if(column.order !== null && column.prop === 'Date_Created'){
            var data = []
            for(let i = 0;i<this.riskArr.length;i++){
             
                if(this.riskArr[i].Date_Created === null || this.riskArr[i].Date_Created === undefined){
                    data.push(this.riskArr[i])
                }else{
                  data.unshift(this.riskArr[i])
                }
            }
            this.riskArr = data
            console.log(data)
        }
        if(column.order === null){
          this.riskArr = this.riskArr
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
       this.getRiskArr()
      },
      //状态查询
      changeStatus:function(id){
        //console.log(id)
         this.statusValue = id
         this.getRiskArr()
      },
      //搜索查询
      searchContent:function(){
       //console.log(this.SearchInput)
       this.getRiskArr()
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
           this.optionChildMenu.push({Id:0,Value:'全部',Category_Id:0})
              this.Category_Id = this.Casevalue 
          if(res.data.length===0){
                        this.Casevalue1 = ''
                }else{
                    this.Casevalue1 =0
                    }
          this.changeTowValue(this.Casevalue1)
        })
      },
        clear:function(){
        this.SearchInput = ''
        this.Casevalue2 = 0
        this.value = ''
        this.Casevalue = ''
        this.Casevalue1 = ''
        this.Category_Id=0
        this.getRiskArr()
        
      },
      handleSizeChange:function(val) {
        //console.log(`每页 ${val} 条`);
        this.pageNum = val
         this.getRiskArr()

      },
      handleCurrentChange:function(val) {
          this.currentPage = val
          this.getRiskArr()
          //console.log(`当前页: ${val}`);
      },
     lineCilck:function(row, event, column){
            //console.log(row, event, column)
      },
      noPassCase:function(id,type){
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
      passCase:function(id,type){
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
      addRemarkButton(){
        this.$http.get('/yongxu/Toexamine/Submit_Action_Risk',{params:{Id:this.caseReMarkId,state:4}}).then((res)=>{
          console.log(res)
             if(res.data == true){
                this.$message({
                  type: 'success',
                  message: '操作成功!'
                });
                this.getRiskArr()
                this.AuditLog(this.caseReMarkId,2,2)
                this.dialogVisible =false
                // this.reload()
             }else{
                this.$message({
                  type: 'warning',
                  message: '日志操作失败!'
                });
             }
          })
      },
      // 对话框,审核不通过
       open:function(id) {
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
        this.caseReMarkId = id
        this.remark = ''
        this.dialogVisible = true
        return false
        //   this.$prompt('此操作将不通过风控审核, 是否继续?', '备注', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        //   // inputErrorMessage: '邮箱格式不正确'
        // }).then(({ value }) => {
        //   this.remark =  value
        //   this.$http.get('/yongxu/Toexamine/Submit_Action_Risk',{params:{Id:id,state:4}}).then((res)=>{
        //      if(res.data == true){
        //         this.$message({
        //           type: 'success',
        //           message: '操作成功!'
        //         });
        //         this.getRiskArr()
        //         this.AuditLog(id,2,2)
        //         // this.reload()
        //      }else{
        //         this.$message({
        //           type: 'warning',
        //           message: '操作失败!'
        //         });
        //      }
        //   })
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消操作'
        //   });          
        // });
                 }
          })

     
      },
      addRemarOk(){
            this.$http.get('/yongxu/Toexamine/Submit_Action_Risk',{params:{Id:this.caseReMarkId,state:3}}).then((res)=>{
            //console.log(res)
              if(res.data == true){
                 this.$message({
                type: 'success',
                message: '操作成功!'
              });
                this.getRiskArr()
                this.AuditLog(this.caseReMarkId,2,1)
                this.dialogVisible1=false
                // this.reload()
              }else{
                 this.$message({
                  type: 'warning',
                  message: '操作失败!'
                 });
              }
            })
      },

         // 对话框,审核通过
       open1:function(id) {
         this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
                // console.log(res)
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
         this.caseReMarkId = id
          this.remark = ''
          this.dialogVisible1 = true
      // this.$prompt('此操作将通过风控审核, 是否继续?', '备注', {
      // confirmButtonText: '确定',
      // cancelButtonText: '取消',
      //     // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      //     // inputErrorMessage: '邮箱格式不正确'
      //   }).then(({ value }) => {
      //     this.remark =  value
      //      this.$http.get('/yongxu/Toexamine/Submit_Action_Risk',{params:{Id:id,state:3}}).then((res)=>{
      //       //console.log(res)
      //         if(res.data == true){
      //            this.$message({
      //           type: 'success',
      //           message: '操作成功!'
      //         });

      //           this.getRiskArr()
      //           this.AuditLog(id,2,1)
      //           // this.reload()
      //         }else{
      //            this.$message({
      //             type: 'warning',
      //             message: '操作失败!'
      //            });
      //         }
      //       })
      //   }).catch(() => {
      //     this.$message({
      //       type: 'info',
      //       message: '取消输入'
      //     });       
      //   });
          }
         })

      },
         //添加日志
      AuditLog:function(id,type,Findings_Audit,){
        this.$http.get('/yongxu/Toexamine/Add_Audit_Log',{params:{Identification:id,Audit_Type:type,Findings_Audit:Findings_Audit,User_Id:localStorage.getItem('userId')}}).then((res)=>{
         // console.log('写入日志1级')
            if(res.data == true){
                   //console.log(res)
            }else{
              //console.log('日志添加失败')
            }
        }).then((res)=>{
           this.addRemark(id)
        })
      },
    //提交备注
    addRemark(id){
      this.$http.get('/yongxu/Toexamine/Add_Risk_Remarks',{params:{Remarks:this.remark,Identification:id}}).then((res)=>{
        //console.log(res)
      })
    }   
    },
    mounted:function(){
        this.getRiskArr()
        this.getSelectMenu()
        this.expandRowKeys.push(this.riskArr.Id)
    },
    activated(){
        this.getRiskArr()
        this.getSelectMenu()
        this.expandRowKeys.push(this.riskArr.Id)
    },
    destroyed:function(){
    
    },
     filters:{
          getTime:function(time){
        if(time==''||time==null){
            return time
        }else{
          return time.substring(0,10)
        }
        },
         ifnull:function(res){
          if(res == undefined || res == null || res == ''){
              return ''
          }else{
            return res.Staff_Name
          }
        }
    },
    //  watch:{
    // Casevalue:function(newV,oldV){
    //    this.getSelectChildeMenu(newV)
    // }
     //}
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

  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>




