<template>
    <div id="case" class="case">
          <div class="add-top flex">
                <p>所在位置：</p>
                <p>设置</p>  
                <p><i class="el-icon-arrow-right"></i></p>
                <p>组织架构</p>
            </div>
            <div>
              <div class="flex title-case"></div>
            <div class="flex case-child" >  
                <div class="case-child-end flex">
                     <el-button type="danger" round @click="newParty()"><i class="el-icon-plus"></i>新建部门</el-button>
                      <el-button type="danger" round @click="newMmber()"><i class="el-icon-plus"></i>添加成员</el-button>
                </div>
            </div>
            <div class="showTab">
              <div class="flex zuzhiBox">
                 <div class="input flex" style="margin-left:75px;">
                      <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input"/>
                          
                      <button class="case-button" @click="searchContent()"><i class="el-icon-search"></i></button>
                 </div>
                      <button class="dingzhi" style="margin-top:5px;" @click="clear()">清空</button>
              </div>
            
            <ul class="showTab-ul">
          
              <li class="showTab-li">
        
                 <el-table :data="tableData"  style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Staff_No" label="编号" width=""></el-table-column>
                    <el-table-column prop="Staff_Name" label="姓名" width=""></el-table-column>
                    <el-table-column prop="Position_Name" label="职务" width=""> </el-table-column>
                     <el-table-column prop="Org_Name" label="部门" width=""> </el-table-column>
                          <el-table-column  label="入职日期" width="" prop="Creattime" sortable> 
                            <template slot-scope="scope">
                              {{scope.row.Creattime | getTime}}
                            </template>
                          </el-table-column>
                        <el-table-column  label="状态"> 
                          <template slot-scope="scope">
                            <p v-if="scope.row.Status == 1">在职</p>
                            <p v-if="scope.row.Status === 0">离职</p>
                          </template>
                        </el-table-column>
                        <el-table-column  label="备注" width="160"> 
                            <template slot-scope="scope">
                              <input type="text" :placeholder="scope.row.Remarks" class="remarks-input" readonly="readonly">
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
            </div>

          <el-dialog  :visible.sync="dialogFormVisible" :modal-append-to-body='false' :modal='false' top="300px" width="600px">
          <div slot="title" class="dialog-title">
            <p>添加成员</p>
          </div>
                        <el-form :model="form" class="form-select">
                        <el-form-item label="姓名" :label-width="formLabelWidth">
                          <el-input v-model="form.name" autocomplete="off" class="el-select1"></el-input>
                        </el-form-item>
                      

                          <el-form-item label="职务" :label-width="formLabelWidth">
                        <el-select v-model="form.job" placeholder="请选择职务" class="el-select1">
                                <el-option :label="v.Position_Name"  :value="v.Id" v-for="(v,i) in jobArr" :key="i"></el-option> 
                        </el-select>
                         </el-form-item>
                      
                        <el-form-item label="分所" :label-width="formLabelWidth">
                        <el-select v-model="form.branch" placeholder="请选择分所" class="el-select1" @change="changeBranch(form.branch)">
                               <el-option :label="v.Org_Name"  :value="v.Id" v-for="(v,i) in branchArr" :key="i"></el-option> 
                        </el-select>
                         </el-form-item>

                      <el-form-item label="部门" :label-width="formLabelWidth">
                        <el-select v-model="form.party" placeholder="请选择部门" class="el-select1">
                               <el-option :label="v.Org_Name"  :value="v.Id" v-for="(v,i) in partyArr" :key="i"></el-option> 
                        </el-select>
                         </el-form-item>

                      
                      
                        <el-form-item label="手机" :label-width="formLabelWidth">
                          <el-input v-model="form.tel" autocomplete="off" class="el-select1" maxlength="11" show-word-limit type="text"></el-input>
                        </el-form-item>
                        
                        <!-- <el-form-item label="微信" :label-width="formLabelWidth">
                         <a href="#" style="color:red" @click="innerVisible = true">扫码绑定</a>
                        </el-form-item> -->

                          <el-form-item label="状态" :label-width="formLabelWidth">
                        <el-select v-model="form.state" placeholder="请选择状态" class="el-select1">
                          <el-option :label="v.name"  :value="v.Id" v-for="(v,i) in statusArr" :key="i"></el-option> 
                        </el-select>
                         </el-form-item>

                        <el-form-item label="备注" :label-width="formLabelWidth">
                          <el-input v-model="form.remark" autocomplete="off" class="el-select1"></el-input>
                        </el-form-item>
                         
                        <el-form-item label="角色" :label-width="formLabelWidth">
                        <el-select v-model="form.role" placeholder="请选择角色" class="el-select1">
                           <el-option :label="v.Rule_Name"  :value="v.Id" v-for="(v,i) in roleArr" :key="i"></el-option> 
                        </el-select>
                 
                         </el-form-item>
                   
                  </el-form>
          <div slot="footer" class="dialog-footer">
           <div class="flex dialogFormVisivleFooter">
              <el-button type="primary" @click="addMember()" :disabled="isDisabled">保存</el-button>
           </div>
          </div>
             <el-dialog
              width="20%"
              top="25%"
              :visible.sync="innerVisible"
              append-to-body>
              <div class="img-div">
                <img src="../../assets/img/erweima.png" alt="">
              </div>
            </el-dialog>
        </el-dialog>

         <el-dialog  :visible.sync="dialogFormVisible3" :modal-append-to-body='false' :modal='false' top="300px" width="600px">
          <div slot="title" class="dialog-title">
            <p>修改成员</p>
          </div>

                          <el-form :model="form" class="form-select">
                        <el-form-item label="编号" :label-width="formLabelWidth">
                          <el-input v-model="form.caseNum" autocomplete="off" class="el-select1" disabled="disabled"></el-input>
                        </el-form-item>

                       
                        <el-form-item label="姓名" :label-width="formLabelWidth">
                          <el-input v-model="form.update_name" autocomplete="off" class="el-select1"></el-input>
                        </el-form-item>
                      

                          <el-form-item label="职务" :label-width="formLabelWidth">
                        <el-select v-model="form.update_job" placeholder="请选择职务" class="el-select1">
                                <el-option :label="v.Position_Name"  :value="v.Id" v-for="(v,i) in jobArr" :key="i"></el-option> 
                        </el-select>
                         </el-form-item>
                      
                        <el-form-item label="分所" :label-width="formLabelWidth">
                        <el-select v-model="form.update_branch" placeholder="请选择分所" class="el-select1" @change="changeUpdateBranch(form.update_branch)">
                               <el-option :label="v.Org_Name"  :value="v.Id" v-for="(v,i) in branchArr" :key="i"></el-option> 
                        </el-select>
                         </el-form-item>

                      <el-form-item label="部门" :label-width="formLabelWidth">
                        <el-select v-model="form.update_party" placeholder="请选择部门" class="el-select1">
                               <el-option :label="v.Org_Name"  :value="v.Id" v-for="(v,i) in partyArr" :key="i"></el-option> 
                        </el-select>
                         </el-form-item>

                      
                      
                        <el-form-item label="手机" :label-width="formLabelWidth">
                          <el-input v-model="form.update_tel" autocomplete="off" class="el-select1" maxlength="11" show-word-limit type="text"></el-input>
                        </el-form-item>
                        
                        <!-- <el-form-item label="微信" :label-width="formLabelWidth">
                         <a href="#" style="color:red" @click="innerVisible = true">扫码绑定</a>
                        </el-form-item> -->

                          <el-form-item label="状态" :label-width="formLabelWidth">
                        <el-select v-model="form.update_state" placeholder="请选择状态" class="el-select1">
                          <el-option :label="v.name"  :value="v.Id" v-for="(v,i) in statusArr" :key="i"></el-option> 
                        </el-select>
                         </el-form-item>

                        <el-form-item label="备注" :label-width="formLabelWidth">
                          <el-input v-model="form.update_remark" autocomplete="off" class="el-select1"></el-input>
                        </el-form-item>
                         
                        <el-form-item label="角色" :label-width="formLabelWidth">
                        <el-select v-model="form.update_role" placeholder="请选择角色" class="el-select1">
                           <el-option :label="v.Rule_Name"  :value="v.Id" v-for="(v,i) in roleArr" :key="i"></el-option> 
                        </el-select>
                 
                         </el-form-item>
                   
                        <el-form-item label="重置密码" :label-width="formLabelWidth"> 
                         <el-button type="primary" @click="resetPass()">重置密码</el-button>
                        </el-form-item>
                  </el-form>
          <div slot="footer" class="dialog-footer">
           <div class="flex dialogFormVisivleFooter">
              <el-button type="primary" @click="update_Member()" :disabled="isDisabled1">保存</el-button>
           </div>
          </div>
             <el-dialog
              width="31%"
              top="25%"
              :visible.sync="innerVisible"
              append-to-body>
              <div class="img-div">
                <!-- <img src="../../assets/img/erweima.png" alt=""> -->
                   <wxlogin appid="wx0b5e209ee6a56c2f" id='img_box' scope="snsapi_login"  :redirect_uri="url"></wxlogin>
              </div>
            </el-dialog>
        </el-dialog>

      <el-dialog  :visible.sync="dialogFormVisible1" :append-to-body='true' top="300px" width="800px"> 
                         <div class="dialogFormVisible_box">
                            <div class="flex row">
                            <p class="flex_title">分所名称</p>
                         
                             <el-select v-model="value" placeholder="请选择" class="el-select2">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.Id"
                                      :label="item.Org_Name"
                                      :value="item.Id">
                                    </el-option>
                                    </el-select>
                         
                          </div>
                          <div class="flex row margin_t">
                            <p class="flex_title">部门名称</p>
                         
                            <input type="text" class="this_input" v-model="partyName">
                         
                          </div>
                         </div>
                   
                        <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                          <el-button type="primary" @click="addpartyName()" :disabled="isDisabled2">确 定</el-button>
                        </div>
                         <div slot="title" class="dialog-title">
                     <div class="dialogFormVisivleHeader_left flex">添加部门</div>
                    </div>
                      </el-dialog>

  
    </div>
</template>
<script>
import store from '../../vuex/store'
import wxlogin from 'vue-wxlogin';
import { fail } from 'assert';
  export default {
    data() {
      return {
        isDisabled:false,
        isDisabled1:false,
        isDisabled2:false,
        url:'http://192.168.0.110:8081/index/setIndex', 
        SearchInput:'',
        innerVisible:false,
        activeName: 'name0',
        currentPage: 1,
        total:0,
        pageNum:20,
        index:0,
        cur:0,
        arr:[{title:'我的客户'},{title:'事务所客户'}],
        input23: '',
        tableData: [],
        value: '',
        value5: '',
        dialogFormVisible:false,
        dialogFormVisible1:false,
        dialogFormVisible3:false,
        formLabelWidth:'',
        form: {
          name: '',
          job: '',
          tel:'',
          state:'',
          remark:'',
          role:'',
          party:'',
          branch:'',
          caseNum:'',

          update_Id:'',
          update_name: '',
          update_job: '',
          update_tel:'',
          update_state:'',
          update_remark:'',
          update_role:'',
          update_party:'',
          update_branch:'',
          update_User_Id:'',
          user_auth_Id:'',
        },
        partyArr:[],
        roleArr:[],
        branchArr:[],
        jobArr:[],
        statusArr:[{name:'在职',Id:1},{name:'离职',Id:0}],
        partyName:'',
        value:'',
        options:[],
        sortRule:{prop:'Creattime',order:'descending'},
      
      };
    },
    methods: {
      //获取下拉数组
      getSelectList(){
        this.$http.get('/yongxu/Install/Get_Dropdown').then((res)=>{
          this.branchArr = res.data.Get_Law_Firm
          this.jobArr =res.data.Get_Position
          this.roleArr = res.data.Get_Role
        })
      },
      changeBranch(id){
         this.partyArr = ''
         this.getPartyArr(id)  
      },
        changeUpdateBranch(id){
         this.partyArr = ''
         this.form.update_party = ''
         this.getPartyArr(id)  
      },
      getPartyArr(id){
          this.$http.get('/yongxu/Install/Get_Department',{params:{
            Parent_Id:id
          }}).then((res)=>{
           // console.log(res)
            this.partyArr = res.data
        })
      },
      /**
       * 重置密码
       */
      resetPass(){
         this.$confirm('此操作将重置此用户密码, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.get('/yongxu/Personal/Reset_Pwd',{params:{Id:this.form.update_User_Id}}).then((res)=>{
              if(res.data=true){
                this.$message({
                  message:'重置成功',
                  type:'success'
                })
                  this.dialogFormVisible3 = false
              }else{
                 this.$message({
                  message:'重置失败',
                  type:'warning'
                }) 
                return false
              }
         })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消重置'
          });          
        }); 
      },
       getBranchList(){
         this.$http.get('/yongxu/Install/Get_Law_Firm').then((res)=>{
           let arr = res.data
           let arr1 = res.data
             this.options = arr
             this.update_options =arr1
          var arr2 =[{Org_Name:'添加分所',Id:0}]
          for(var i in arr){
              arr2.push(arr[i])
          }
            //console.log(arr2)
            this.options = arr2
         })
     },
      getList(){
        this.$http.get('/yongxu/Install/Show_Organization',{params:{
          sarg:this.SearchInput,
          Display_Page_Number:this.pageNum,
          PageNumber:this.currentPage
        }}).then((res)=>{
          this.tableData = res.data.Show_Organization
          this.total = res.data.PageCount
        })
      },
      handleClick(tab, event) {
        this.child_cur = tab.index
        // //console.log(tab.index)
        // //console.log(this.child_cur)
        // //console.log(tab,event);
      },
      changeLi(i){
          this.cur = i
         
      },
       handleSizeChange(val) {
          this.pageNum = val
         this.getList()
        //console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
         this.currentPage = val
         this.getList()
        //console.log(`当前页: ${val}`);
      },
      toAdd(){
        this.$router.push({path:'/index/caseAdd'})
      },
      newParty(){
          this.common.checkAuth({params:{url:'Install/Add_Law_Aepartment',userid:localStorage.getItem('userId')}}).then((res)=>{
           //console.log(res)
            if(res.data ==false){
             this.$message({
                message:'没有权限',
                type:'warning'
                });     
              return false
          }else{
              this.dialogFormVisible1=true;
          }
         }).catch((err)=>{
            this.$message({
                message:'服务器异常',
                type:'warning'
                });     
              return false
         })
      },
      addpartyName(){
          this.isDisabled2 = true
          this.$http.get('/yongxu/Install/Add_Law_Aepartment',{params:{
            User_Id:localStorage.getItem('userId'),
            Parent_Id:this.value,
            Org_Name:this.partyName
          }}).then((res)=>{
            console.log(res)
              if(res.data.sign == 1){
                  this.$message({
                    message:res.data.str,
                    type:'success'
                  })
                  this.getList()
                  this.dialogFormVisible1 =false
              }else{
                 this.$message({
                    message:res.data.str,
                    type:'warning'
                  })
                    this.isDisabled2 = false
              }
          }).catch((res)=>{
                this.$message({
                    message:'服务器异常',
                    type:'warning'
                  })
          })
      },
      newMmber(){
          this.common.checkAuth({params:{url:'Install/Add_User_Information',userid:localStorage.getItem('userId')}}).then((res)=>{
           //console.log(res)
            if(res.data ==false){
             this.$message({
                message:'没有权限',
                type:'warning'
                });     
              return false
          }else{
              this.dialogFormVisible=true;

          }
         }).catch((err)=>{
            this.$message({
                message:'服务器异常',
                type:'warning'
                });     
              return false
         })
      },
      addMember(){
        if(this.form.name == ''||this.form.name==null){
            this.$message({
              message:'成员名称不可为空',
              type:'warning'
            })
            return false
        }
          if(this.form.name.length>16){
            this.$message({
              message:'成员名称格式不正确',
              type:'warning'
            })
            return false
        }
         if(this.form.job == ''||this.form.job==null){
            this.$message({
              message:'成员职务不可为空',
              type:'warning'
            })
            return false
        }
         if(this.form.branch == ''||this.form.branch==null){
            this.$message({
              message:'分所名称不可为空',
              type:'warning'
            })
            return false
        }
         if(this.form.party == ''||this.form.party==null){
            this.$message({
              message:'部门名称不可为空',
              type:'warning'
            })
            return false
        }
        //  if(this.form.tel == ''||this.form.tel==null){
        //     this.$message({
        //       message:'联系方式不可为空',
        //       type:'warning'
        //     })
        //     return false
        // }
         var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.form.tel) && this.form.tel!='') {
                  this.$message({
                    message:'请填写正确的手机号',
                    type:'warning'
                });
                return false;
            } 
         if(this.form.state === ''||this.form.state===null){
            this.$message({
              message:'状态不可为空',
              type:'warning'
            })
            return false
        }
        //    if(this.form.remark == ''||this.form.remark==null){
        //     this.$message({
        //       message:'备注不可为空',
        //       type:'warning'
        //     })
        //     return false
        // }
           if(this.form.role == ''||this.form.role==null){
            this.$message({
              message:'角色不可为空',
              type:'warning'
            })
            return false
        }
        this.isDisabled = true
        this.$http.post('/yongxu/Install/Add_User_Information',{
          User_Id:localStorage.getItem('userId'),
          Department:this.form.party,
          Position:this.form.job,
          Staff_Name:this.form.name,
          Status:this.form.state,
          Remarks:this.form.remark,
          Rule_Id:this.form.role,
          Orgid:this.form.branch,
          Contact_Information:this.form.tel,
          Password:'e10adc3949ba59abbe56e057f20f883e',
        }).then((res)=>{
            //console.log(res)
            if(res.data == true){
                    this.$message({
                    message:'添加成功',
                    type:'success'
                })
            this.form.party = ''
            this.form.job = ''
            this.form.name = ''
            this.form.state = ''
            this.form.remark = ''
            this.form.role = ''
            this.form.branch = ''
            this.form.tel = ''
            this.getList()
          this.dialogFormVisible = false
            }else{
               this.$message({
              message:'添加失败',
              type:'warning'
            })
            this.isDisabled = false

            }
        }).catch((err)=>{
             this.$message({
              message:'服务器异常',
              type:'warning'
            })
        })
      },
      lineCilck(row, event, column){
          //console.log(row.Id)
          this.$http.get('/yongxu/Install/Upd_Sel_Member',{params:{Id:row.Id}}).then((res)=>{
          console.log(res)
          this.form.update_name = res.data.Staff_Name
          this.form.update_job = res.data.Position
         
          if(res.data.Contact_Information==undefined){
            this.form.update_tel = ''
          }else{
            this.form.update_tel = res.data.Contact_Information
          }
          this.form.update_state = res.data.Status
          this.form.update_remark = res.data.Remarks
          this.form.update_role = res.data.Rule_Id
          this.form.update_party = res.data.Department
          this.form.update_branch = res.data.Orgid
          this.form.update_Id = res.data.staff_Id
          this.form.update_User_Id = res.data.User_Id
          this.form.user_auth_Id = res.data.user_auth_Id
          this.form.caseNum = res.data.Staff_No
           this.getPartyArr(this.form.update_branch)
            this.dialogFormVisible3 = true
         
          })
      },
      update_Member(){
        if(this.form.update_name == ''||this.form.update_name==null){
            this.$message({
              message:'成员名称不可为空',
              type:'warning'
            })
            return false
        }
          if(this.form.update_name.length>16){
            this.$message({
              message:'成员名称格式不正确',
              type:'warning'
            })
            return false
        }
         if(this.form.update_job == ''||this.form.update_job==null){
            this.$message({
              message:'成员职务不可为空',
              type:'warning'
            })
            return false
        }
         if(this.form.update_branch == ''||this.form.update_branch==null){
            this.$message({
              message:'分所名称不可为空',
              type:'warning'
            })
            return false
        }
         if(this.form.update_party == ''||this.form.update_party==null){
            this.$message({
              message:'部门名称不可为空',
              type:'warning'
            })
            return false
        }
        //  if(this.form.update_tel == ''||this.form.update_tel==null){
        //     this.$message({
        //       message:'联系方式不可为空',
        //       type:'warning'
        //     })
        //     return false
        // }
           var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
           if(!myreg.test(this.form.update_tel)  && this.form.update_tel!=''){
              this.$message({
                  message:'请填写正确的手机号',
                  type:'warning'
              })
              return false
          }  
         if(this.form.update_state === ''||this.form.update_state == null){
            this.$message({
              message:'状态不可为空',
              type:'warning'
            })
            return false
        }
           if(this.form.update_role == ''||this.form.update_role==null){
            this.$message({
              message:'角色不可为空',
              type:'warning'
            })
            return false
        }
        this.isDisabled1 = true
        this.$http.post('/yongxu/Install/Upd_Member',{
            userid:localStorage.getItem('userId'),
            user_auth_Id:this.form.user_auth_Id,
            staff_Id:this.form.update_Id,
            User_Id:this.form.update_User_Id,
            Staff_Name:this.form.update_name,
            Orgid:this.form.update_branch,
            Department:this.form.update_party,
            Position:this.form.update_job,
            Status:this.form.update_state,
            Remarks:this.form.update_remark,
            Contact_Information:this.form.update_tel,
            Rule_Id:this.form.update_role
        }).then((res)=>{
          //console.log(res)
          if(res.data == true){
             this.$message({
              message:'更新成功',
              type:'success'
            })
              this.getList()
              this.dialogFormVisible3 = false
          }else{
              this.$message({
              message:'更新失败',
              type:'warning'
            })
            this.isDisabled1 = false
            return false
          }
        }).catch((err)=>{
            this.$message({
              message:'服务器异常',
              type:'warning'
            })
          })  
      },
 
      searchData(){
        this.child = 1
      },
      searchContent(){
        this.getList()
      },
      clear(){
        this.currentPage = 1
        this.SearchInput = ''
        this.getList()
        
      }
    },
    mounted(){
      this.getList()
      this.getBranchList()
      this.getSelectList()
    },
   components:{
        wxlogin
    },
    filters:{
       getTime:function(time){
        if(time==''||time==null){
            return time
        }else{
          return time.substring(0,10)
        }
         
        
      }
    }
  };
</script>
<style>
@import '../../assets/sass/main.css';
.title-case{
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}
.el-select1{
  width: 80% !important;
}
.dialogFormVisivleFooter{
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
}
.img-div{
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.img-div img{
  width: 100%;
 height: 100%;
} 
.remarks-input{
  width: 140px;
  height: 30px;
  /* border: 1px solid #ccc; */
}
.dialogFormVisible_box{
  display: flex;
  flex-direction: column;
}
.margin_t{
  margin-top: 25px;
}
.flex_title{
  width: 150px;
  text-align: center;
  height: 31px;
  line-height: 31px;
}
.this_input{
    background-color: #FFF;
    background-image: none;
    /* border-radius: 4px; */
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 31px;
    line-height: 31px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 500px;
}
.el-select2{
  width: 500px !important;
}
.zuzhiBox{
  flex-direction: row;
  justify-content: flex-end;
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


