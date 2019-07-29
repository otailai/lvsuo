<template>
    <div>
           <div class="case-child-end1 flex">
           </div>
                                                <div class="showTab">
                                                <ul class="showTab-ul">
                                                <li class="showTab-li">
                                                <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                                                <el-table-column prop="Id" label="ID" width="" ></el-table-column>
                                                <el-table-column prop="Org_Name" label="名称"  width="" :show-overflow-tooltip="true"> </el-table-column>
                                                <el-table-column prop="Org_Type" label="类型" width="" :show-overflow-tooltip="true"> 
                                                    <template slot-scope="scope">
                                                          <p v-if="scope.row.Type==1">{{scope.row.Org_Type}}</p>
                                                           <p v-if="scope.row.Type==2">{{scope.row.Org_Type}}</p>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column label="操作" width="150">
                                                <template slot-scope="scope">
                                                <button class="btn-caozuo"  @click="getCaseTypeInfo(scope.row.Id,scope.row.Type)">编辑</button>
                                                <button class="btn-caozuo" @click="deleteCaseType(scope.row.Id,scope.row.Type)">删除</button>
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
                        <el-dialog  :visible.sync="dialogFormVisible" :append-to-body='true' top="300px" width="800px"> 
                         <div class="dialogFormVisible_box">
                          <div class="flex row margin_t">
                            <p class="flex_title">分所名称</p>
                         
                            <input type="text" class="this_input" v-model="name">
                         
                          </div>
                         </div>
                   
                        <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible = false">取 消</el-button>
                          <el-button type="primary" @click="updataCaseType()">确 定</el-button>
                        </div>
                         <div slot="title" class="dialog-title">
                     <div class="dialogFormVisivleHeader_left flex">添加案件类型</div>
                    </div>
                      </el-dialog>

                         <el-dialog  :visible.sync="dialogFormVisible1" :append-to-body='true' top="300px" width="800px"> 
                         <div class="dialogFormVisible_box">
                            <div class="flex row">
                            <p class="flex_title">上级分所</p>
                             <el-select v-model="update_value" placeholder="请选择" v-show="isReadonly==false">
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
                         
                            <input type="text" class="this_input" v-model="update_name">
                         
                          </div>
                         </div>
                   
                        <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                          <el-button type="primary" @click="updataCaseType()">确 定</el-button>
                        </div>
                         <div slot="title" class="dialog-title">
                     <div class="dialogFormVisivleHeader_left flex">修改案件类型</div>
                    </div>
                      </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData:[],
            numPage:20,
            currentPage:1,
            total:0,
            dialogFormVisible:false,
            dialogFormVisible1:false,
            options:[],
            update_options:[],
            name:'',
            value:0,
            update_name:'',
            update_value:0,
            type:'',
            Id:'',
            isReadonly:'',
        }
    },
    methods:{
          handleSizeChange(val) {
         this.numPage = val
         this.getBaseCaseTypeList()
         //console.log(`每页 ${ this.numPage} 条`);
      },
      handleCurrentChange(val) {
        //console.log(val)
        this.currentPage = val
        this.getBaseCaseTypeList()

        //console.log(`当前页: ${this.currentPage}`);
      },
      toAdd(){
        this.name =''
        this.value=0
        this.dialogFormVisible= true
      },
      lineCilck(row, event, column){
            //console.log(row, event, column)
      },
      getBaseCaseTypeList(){ 

         this.$http.get('/yongxu/Install/Show_Structure',{params:{
           Display_Page_Number:this.numPage,
           PageNumber:this.currentPage,
         }}).then((res)=>{
             console.log(res)
           this.tableData = res.data.list
           this.total = res.data.PageCount
           //console.log(res)
        })
      },
         handleClick(tab, event) {
        this.child_cur = tab.index
        // //console.log(tab.index)
        // //console.log(this.child_cur)
        // //console.log(tab,event);
      },
      //获取一级类型下拉
      getOneCaseType(){
        var _self =this
        this.$http.get('/yongxu/Install/Get_Branch').then((res)=>{
          console.log(res.data)
          let arr = res.data
          let arr1 =res.data
          this.update_options =arr1
          var arr2 =[]
          for(var i in arr){
              arr2.push(arr[i])
          }
        this.options = arr2
         
        })
      },
     
      //删除信息
      deleteCaseType(id,type){
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
           this.$http.get('/yongxu/Install/Del_Structure',{params:{Id:id,sign:type}}).then((res)=>{
                console.log(res)
               if(res.data.sign==5){
                    this.$message({
                        type: 'success',
                         message: res.data.str
                    });          
                    this.getBaseCaseTypeList()
                    this.getOneCaseType()
               }else if(res.data.sign==2){
                   this.$message({
                        type: 'success',
                         message: res.data.str
                    });          
                    this.getBaseCaseTypeList()
                    this.getOneCaseType()
               } else{
                     this.$message({
                         type: 'warning',
                            message: res.data.str
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
          }
            })
      },
      //修改案件类型
        updataCaseType(){
        console.log(this.Id)
        if(this.type == 1){
            if(this.name == '' || this.name == null){
             this.$message({
                message:'请输入分所名称',
                type:'warning'
                }); 
                return false
        }
           this.$http.get('/yongxu/Install/Upd_Structure_Details',{params:{Id:this.Id,Parent_Id:0,Org_Name:this.name}}).then((res)=>{         
               console.log(res)
                if(res.data.sign == 1){
                     this.getBaseCaseTypeList()
                      this.$message({
                      type: 'success',
                      message: res.data.str
                 });
                 this.dialogFormVisible = false
                }else{
                   this.$message({
                    type: 'warning',
                    message: res.data.str
                  });      
                 this.dialogFormVisible = false
                }
            })
        }else{
            if(this.update_name == '' || this.update_name == null){
             this.$message({
                message:'部门名称不能为空',
                type:'warning'
                }); 
                return false
        }
         if(this.update_value.length == 0){
             this.$message({
                message:'上级分所不能为空',
                type:'warning'
                }); 
                return false
        }
   this.$http.get('/yongxu/Install/Upd_Structure_Details',{params:{Id:this.Id,Parent_Id:this.update_value,Org_Name:this.update_name}}).then((res)=>{
       console.log(res)
                if(res.data.sign == 1){
                     this.getBaseCaseTypeList()
                      this.$message({
                      type: 'success',
                      message: res.data.str
                 });
                 this.dialogFormVisible1 = false
                }else{
                   this.$message({
                    type: 'warning',
                    message: res.data.str
                  });      
                 this.dialogFormVisible1 = false
                }
            })
        }
        
        },
        //查询案件类型详情
         getCaseTypeInfo(id,type){
             console.log(type)
              this.type = type
           this.Id =id
            if(type == 1){
           this.dialogFormVisible = true
          
           this.$http.get('/yongxu/Install/Get_Structure_Details',{params:{Id:id}}).then((res)=>{
               console.log(res)
               this.Parent_Id=0
               this.name = res.data.Org_Name
            })
            }else{
                 this.dialogFormVisible1 = true
                this.$http.get('/yongxu/Install/Get_Structure_Details',{params:{Id:id}}).then((res)=>{
                console.log(res)
                this.update_value = res.data.Parent_Id
                this.update_name = res.data.Org_Name
                })  
            }
        },
       
    },
    mounted(){
        this.getBaseCaseTypeList()
        this.getOneCaseType()
    }
}
</script>
<style scoped>
@import '../../../assets/sass/main.css';
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
.el-select{
  width: 500px;
}
</style>


