<template>
    <div id="case" class="case">
            <div class="flex title-case">
               <div class="add-top flex">
                <p>所在位置：</p>
                <p>设置</p>  
                <p><i class="el-icon-arrow-right"></i></p>
                <p>权限管理</p>
            </div>
            </div>
                        <div style="margin-top:30px;">
                            <!-- <ul class="case-ul">
                                <li class="case-li">
                                    <p>角色与权限设置</p>
                                </li>
                            </ul> -->
                          
                              <!-- <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab" id="nav-tab">
                              <el-tab-pane :label="v.title" :name="'name'+i" v-for="(v,i) in arr" :key="i"> -->

                              <div v-show="child_cur==0" class="bar">
                                                <div class="case-child-end1 flex">
                                                <div> <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>添加角色</el-button></div>
                                                </div>
                                                <div class="showTab">
                                                <ul class="showTab-ul">
                                                <li class="showTab-li">
                                                <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                                                <el-table-column prop="Id" label="ID" width="150"></el-table-column>
                                                <el-table-column prop="Rule_Name" label="名称" width="150"> </el-table-column>
                                                <el-table-column prop="Item_Name" label="权限" width="" :show-overflow-tooltip="true"> </el-table-column>
                                                <el-table-column label="操作" width="150">
                                                <template slot-scope="scope">
                                                <button @click="editInfo(scope.row.Id)" class="btn-caozuo">编辑</button>
                                                <button class="btn-caozuo" @click="deleteRole(scope.row.Id)"> 删除</button>
                                                </template>
                                                </el-table-column>    
                                            </el-table>
                                            <div class="block flex">
                                            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                                            :page-sizes="[20,50,100]" :page-size="numPage"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                                            </el-pagination>
                                            </div>
                                            </li>
                                            
                                            </ul>
                                        </div>

                        <el-dialog  :visible.sync="dialogFormVisible1" :append-to-body='true' top="300px" width="800px"> 
                         <div class="dialogFormVisible_box">
                            
                          <div class="flex row margin_t">
                            <p class="flex_title">角色名称</p>
                         
                            <input type="text" class="this_input" v-model="role_update_name">
                         
                          </div>

                           <div class="flex row margin_t">
                            <p class="flex_title">权限</p>
                         
                            <el-tree
                                  :data="data"
                                    show-checkbox
                                    
                                    node-key="Id"
                                    ref="tree"
                                    highlight-current  
                                    :props="defaultProps">
                                </el-tree>
                         
                          </div>
                         </div>
                   
                        <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                          <el-button type="primary" @click="tijiao()">确 定</el-button>
                        </div>
                         <div slot="title" class="dialog-title">
                     <div class="dialogFormVisivleHeader_left flex">添加角色权限</div>
                    </div>
                      </el-dialog>



                           <el-dialog  :visible.sync="dialogFormVisible2" :append-to-body='true' top="300px" width="800px"> 
                         <div class="dialogFormVisible_box">
                            
                          <div class="flex row margin_t">
                            <p class="flex_title">角色名称</p>
                         
                            <input type="text" class="this_input" v-model="role_name">
                         
                          </div>

                           <div class="flex row margin_t">
                            <p class="flex_title">权限</p>
                         
                            <el-tree
                                  :data="data"
                                    show-checkbox
                                    node-key="Id"
                                    ref="tree1"
                                    highlight-current
                                    :default-checked-keys="Items"
                                    :props="defaultProps">
                                </el-tree>
                         
                          </div>
                         </div>
                   
                        <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                          <el-button type="primary" @click="editRole()">确 定</el-button>
                        </div>
                         <div slot="title" class="dialog-title">
                     <div class="dialogFormVisivleHeader_left flex">修改角色权限</div>
                    </div>
                      </el-dialog>
                              </div>
                              <!-- </el-tab-pane>
                            </el-tabs>   -->
                         </div>
                     
            </div>

</template>
<script>
import store from '../../vuex/store'
  export default {
    data() {
      return {
        activeName:'name0',
        selectOneId:1,
        numPage:20,
        currentPage: 1,
        dialogFormVisible1:false,
        dialogFormVisible2:false,
        total:1,
        child:0,
        child_cur:0,
        tableData: [
        {id:1,name:'管理员',power:'权限'},
        {id:1,name:'管理员',power:'权限'},
        {id:1,name:'管理员',power:'权限'},
        {id:1,name:'管理员',power:'权限'},
        {id:1,name:'管理员',power:'权限'}
        ],
        arr:[
            {title:'角色与权限设置'}
        ],
        value: '',
        value5: '',
        role_name:'',
        role_update_name:'',
        Id:'',
        data: [],
         defaultProps: {
          children: 'children',
          label: 'label'
        },
        branchList:[],
        Items:[],
        }

    },
  inject:["reload"],
    methods: {
        tijiao(){
           
            if(this.role_update_name == '' || this.role_update_name==null){
                  this.$message({
                        type:'warning',
                        message:'请先填写角色名称'
                    })
                    return false
            }
            var arr = []
            var arr1 =[]
            var arr2 = []
            var arr3 = []
            var arr4=[]
              this.$nextTick(function() {
                 //console.log(this.$refs.tree);
              
                //console.log(this.$refs.tree[0].getCheckedNodes());
             
                arr =  this.$refs.tree.getCheckedNodes()
                arr2 = this.$refs.tree.getHalfCheckedKeys()
              
                for(var i =0 ;i<arr.length;i++){
                   arr1[i] = arr[i].Id     
                   arr4[i] =arr[i].Id      
                }
                //console.log(arr2)
                //console.log(arr1)
               arr1 = arr1.concat(arr2)
               //console.log(arr4)
               if(arr1.length == 0){
                    this.$message({
                        type:'warning',
                        message:'请至少选择一种权限菜单'
                    })
                    return false
            }
           
            this.$http.post('/yongxu/Install/Add_Role',{User_Id:localStorage.getItem('userId'),Rule_Name:this.role_update_name,Items:arr1,Item:arr4}).then((res)=>{
                        //console.log(res)
                        if(res.data == true){
                            this.$message({
                                type:'success',
                                message:'添加成功'
                            })
                            this.dialogFormVisible1 = false
                            this.role_update_name = ''
                            this.$refs.tree.setCheckedNodes([])
                            this.getPowerList()
                            this.reload()
                        }else{
                                this.$message({
                                        type:'warning',
                                        message:'添加失败'
                                    })
                        }
            }).catch((res)=>{
                  this.$message({
                                type:'warning',
                                message:'服务器异常'
                            })
                    })
              }) 
         
            

        },
     handleCheckChange(data, checked,indeterminate ) {
        // //console.log(data);
        //  //console.log(checked);
        //   //console.log(indeterminate);
      this.$nextTick(function() {
            //console.log(this.$refs.tree.getCheckedNodes())
        })
        return false
    let res = this.$refs.tree.getCheckedNodes()
      let arr = []
      res.forEach((item) => {
        arr.push(item.id)
      })
        //console.log(arr)
      },
    
       handleSizeChange(val) {
         this.numPage = val
         this.getPowerList()
         //console.log(`每页 ${ this.numPage} 条`);
      },
      handleCurrentChange(val) {
        //console.log(val)
        this.currentPage = val
        this.getPowerList()

        //console.log(`当前页: ${this.currentPage}`);
      },
      toAdd(){
        this.dialogFormVisible1 = true
      },
      lineCilck(row, event, column){
            //console.log(row, event, column)
      },
    //   获取data
    getDataList(){
        this.$http.get('/yongxu/Install/Show_Permission_Item').then((res)=>{
            this.data = res.data
        })
    },
      getPowerList(){ 

         this.$http.get('/yongxu/Install/Show_Role_Permissions',{params:{
           Display_Page_Number:this.numPage,
           PageNumber:this.currentPage,
         }}).then((res)=>{
           this.tableData = res.data.Role_Information
           this.total = res.data.PageCount
           //console.log(res)
        })
      },
      deleteRole(id){
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
          this.$confirm('此操作将删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
             this.$http.get('/yongxu/Install/Del_Roles',{params:{Id:id}}).then((res)=>{
              //console.log(res)
              if(res.data == "删除成功"){
                  this.$message({
                      type:'success',
                      message:'删除成功'
                      })
                       this.reload()
                this.getPowerList()
              }else{
                     this.$message({
                      type:'warning',
                      message:'删除失败'
                      })
                      return false
              }
          }).catch((res)=>{
               this.$message({
                      type:'success',
                      message:'服务器异常'
                      })
                      return false
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
          }
            })
      },
      editInfo(id){
          this.Id = id
           this.dialogFormVisible2 = true
          this.$http.get('/yongxu/Install/Upd_Sel_Role',{params:{
              Id:this.Id
          }}).then((res)=>{
              console.log(this.$refs.tree1)
              this.role_name = res.data.Rule_Name
               this.$refs.tree1.setCheckedKeys(res.data.Item)
              //this.Items = res.data.Item
          }).catch((err)=>{
             this.$message({
                      type:'warning',
                      message:'服务器异常'
                      })
                      return false
            })
         
      },
      editRole(){
              if(this.role_name == '' || this.role_name==null){
                  this.$message({
                        type:'warning',
                        message:'请先填写角色名称'
                    })
                    return false
            }
            // //console.log(this.$refs.tree1[0].getCheckedNodes())
            // return false
            var    arr =  this.$refs.tree1.getCheckedNodes()
            var    arr2 = this.$refs.tree1.getHalfCheckedKeys()
            var arr1 = []
            var arr4 =[]
                for(var i =0 ;i<arr.length;i++){
                   arr1[i] = arr[i].Id   
                   arr4[i] = arr[i].Id      
                }
                  //console.log(arr2)
                   //console.log(arr1)
               arr1 = arr1.concat(arr2)
               //console.log(arr4)
            if(arr1.length == 0){
                    this.$message({
                        type:'warning',
                        message:'请至少选择一种权限菜单'
                    })
                    return false
            }
            this.$http.post('/yongxu/Install/Upd_Role',{
              Rule_Name:this.role_name,
              Items:arr1,
              Item:arr4,
              User_Id:localStorage.getItem('userId'),
              Id:this.Id
          }).then((res)=>{
              if(res.data == true){
                  this.$message({
                      type:'success',
                      message:'修改成功'
                  })
                  this.dialogFormVisible2 = false
                   this.reload()
                  this.getPowerList()
              }else{
                     this.$message({
                      type:'success',
                      message:'修改失败'
                  })
              }
          })
       
      },
         handleClick(tab, event) {
        this.child_cur = tab.index
        // //console.log(tab.index)
        // //console.log(this.child_cur)
        // //console.log(tab,event);
      },
    },
    mounted(){
      this.getPowerList()
      this.getDataList()
    },
    components:{
      
    },
   　filters:{
      getTime(time){
          return time.substring(0,10)
      }
　　　　}
  };
</script>
<style>
@import '../../assets/sass/main.css';
</style>
<style>
.case-child-end1{
    justify-content: flex-start;
    margin-top: 20px;
}
.flex{
  display: flex;
}
.row{
  flex-direction: row;
}
.column{
  flex-direction: column;
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
/* .el-select{
  width: 500px;
}    */

</style>


