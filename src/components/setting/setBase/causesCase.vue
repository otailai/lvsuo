<template>
    <div>
           <div class="case-child-end1 flex">
                                                <div> <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>添加案由</el-button></div>
                                                </div>
                                                <div class="showTab">
                                                <ul class="showTab-ul">
                                                <li class="showTab-li">
                                                <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                                                <el-table-column prop="Id" label="ID" width=""></el-table-column>
                                                <el-table-column prop="Value" label="案由" width=""> </el-table-column>
                                                <!-- <el-table-column prop="type" label="级别" width="430"> 
                                                    <template slot-scope="scope">
                                                          <p v-if="scope.row.type==1">一级类型</p>
                                                           <p v-if="scope.row.type==2">二级类型</p>
                                                    </template>
                                                </el-table-column> -->
                                                <el-table-column label="操作" width="">
                                                <template slot-scope="scope">
                                                <button class="btn-caozuo"  @click="getCauseTypeInfo(scope.row.Id)">编辑</button>
                                                <button class="btn-caozuo" @click="deleteCauseType(scope.row.Id)">删除</button>
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
                            <p class="flex_title">案由名称</p>
                         
                            <input type="text" class="this_input" v-model="name">
                         
                          </div>
                         </div>
                   
                        <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible = false">取 消</el-button>
                          <el-button type="primary" @click="addCauseType()">确 定</el-button>
                        </div>
                         <div slot="title" class="dialog-title">
                     <div class="dialogFormVisivleHeader_left flex">添加案由名称</div>
                    </div>
                      </el-dialog>

                         <el-dialog  :visible.sync="dialogFormVisible1" :append-to-body='true' top="300px" width="800px"> 
                         <div class="dialogFormVisible_box">
                          
                          <div class="flex row margin_t">
                            <p class="flex_title">案由名称</p>
                         
                            <input type="text" class="this_input" v-model="update_name">
                         
                          </div>
                         </div>
                   
                        <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                          <el-button type="primary" @click="updataCauseType()">确 定</el-button>
                        </div>
                         <div slot="title" class="dialog-title">
                     <div class="dialogFormVisivleHeader_left flex">修改案由名称</div>
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
         this.getCauseTypeList()
         //console.log(`每页 ${ this.numPage} 条`);
      },
      handleCurrentChange(val) {
        //console.log(val)
        this.currentPage = val
        this.getCauseTypeList()

        //console.log(`当前页: ${this.currentPage}`);
      },
      toAdd(){
        this.name = '',
        this.value = 0
        this.dialogFormVisible= true
      },
      lineCilck(row, event, column){
            //console.log(row, event, column)
      },
      getCauseTypeList(){ 

         this.$http.get('/yongxu/Install/Show_Cause_Action',{params:{
           Display_Page_Number:this.numPage,
           PageNumber:this.currentPage,
         }}).then((res)=>{
           this.tableData = res.data.Cause_Action
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
  
      //添加
      addCauseType(){
        if(this.name == '' || this.name == null){
             this.$message({
                message:'分类名称不能为空',
                type:'warning'
                }); 
                return false
        }
        this.$http.get('/yongxu/Install/Add_Aummary',{params:{User_Id:localStorage.getItem('userId'),Value:this.name}}).then((res)=>{
            //console.log(res)
            if(res.data == true){
               this.$message({
                            message:'添加成功',
                            type:'success'
                        }); 
                        this.getCauseTypeList()
                        this.dialogFormVisible = false
                         return false
            }else{
               this.$message({
                            message:'添加失败',
                            type:'warning'
                        }); 
                        this.dialogFormVisible = false
                         return false
            }
        })
      },
      //删除案件编号
      deleteCauseType(id){
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
           this.$http.get('/yongxu/Install/Del_Cause_Action',{params:{Id:id,User_Id:localStorage.getItem('userId')}}).then((res)=>{
             //console.log(res)
              if(res.data == 1 ){
              this.$message({
                      type: 'warning',
                      message: '案由占用无法删除！'
                 });
                  return false
              }
              if(res.data == 3 ){
              this.$message({
                      type: 'warning',
                      message: '删除失败!'
                 });
                  return false
              }
                if(res.data == 2 ){
                     this.getCauseTypeList()
                      this.$message({
                      type: 'success',
                      message: '删除成功!'
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
        updataCauseType(id){
        if(this.update_name == '' || this.update_name == null){
             this.$message({
                message:'分类名称不能为空',
                type:'warning'
                }); 
                return false
        }
           this.$http.get('/yongxu/Install/Upd_Customer_Type',{params:{User_Id:localStorage.getItem('userId'),Id:this.Id,Value:this.update_name}}).then((res)=>{         
                if(res.data == true){
                     this.getCauseTypeList()
                      this.$message({
                      type: 'success',
                      message: '修改成功!'
                 });
                 this.dialogFormVisible1 = false
                }else{
                   this.$message({
                    type: 'warning',
                    message: '修改失败'
                  });      
                 this.dialogFormVisible1 = false
                }
            })
        },
        //查询案件类型详情
         getCauseTypeInfo(id){
           this.Id = id
           this.dialogFormVisible1 = true
           this.$http.get('/yongxu/Install/Upd_Sel_Cause_Action',{params:{Id:id}}).then((res)=>{
                   this.update_name = res.data.Value
            })
        },
       
    },
    mounted(){
        this.getCauseTypeList()

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


