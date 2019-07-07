<template>
    <div>
           <div class="case-child-end1 flex">
                                                <div> <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>添加案由</el-button></div>
                                                </div>
                                                <div class="showTab">
                                                <ul class="showTab-ul">
                                                <li class="showTab-li">
                                                <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                                                <el-table-column prop="Id" label="ID" width="100"></el-table-column>
                                                <el-table-column prop="Category_Name" label="案由" width="500"> </el-table-column>
                                                 <el-table-column  label="案由类型" width=""> 
                                                   <template slot-scope="scope">
                                                      <span v-if="scope.row.type == 1">
                                                          一级类型
                                                      </span>
                                                         <span v-if="scope.row.type == 2">
                                                              二级类型
                                                      </span>
                                                   </template>
                                                 </el-table-column>
                                                <!-- <el-table-column prop="type" label="级别" width="430"> 
                                                    <template slot-scope="scope">
                                                          <p v-if="scope.row.type==1">一级类型</p>
                                                           <p v-if="scope.row.type==2">二级类型</p>
                                                    </template>
                                                </el-table-column> -->
                                                <el-table-column label="操作" width="">
                                                <template slot-scope="scope">
                                                <button class="btn-caozuo"  @click="getCauseTypeInfo(scope.row.Id,scope.row.type)">编辑</button>
                                                <button class="btn-caozuo" @click="deleteCauseType(scope.row.Id,scope.row.type)">删除</button>
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
                              <div class="flex row">
                            <p class="flex_title">案件类型</p>
                            <el-select v-model="value" placeholder="请选择"  @change="changeOneCaseType(value)">
                                    <el-option
                                     
                                      v-for="item in oneList"
                                      :key="item.Id"
                                      :label="item.Category_Name"
                                      :value="item.Id">
                                    </el-option>
                                    </el-select>
                          </div>
                              <div class="flex row margin_t">
                            <p class="flex_title">一级案由类型</p>
                             <el-select v-model="oneValue" placeholder="请选择">
                                    <el-option
                                      v-for="item in oneResonArr"
                                      :key="item.Id"
                                      :label="item.Category_Name"
                                      :value="item.Id">
                                    </el-option>
                                    </el-select>
                          </div>
                          <div class="flex row margin_t" v-show="oneValue!==''">
                            <p class="flex_title" v-if="oneValue==0">一级案由名称</p>
                             <p class="flex_title" v-else>二级案由名称</p>
                            <input type="text" class="this_input" v-model="name">
                          </div>
                         </div>
                   
                        <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible = false">取 消</el-button>
                          <el-button type="primary" @click="addCauseType()">确 定</el-button>
                        </div>
                         <div slot="title" class="dialog-title">
                     <div class="dialogFormVisivleHeader_left flex">添加案由</div>
                    </div>
                      </el-dialog>

                         <el-dialog  :visible.sync="dialogFormVisible1" :append-to-body='true' top="300px" width="800px"> 
                         <div class="dialogFormVisible_box">
                             <div class="flex row">
                            <p class="flex_title">案件类型</p>
                            <el-select v-model="update_value" placeholder="请选择"  @change="changeOneCaseType(update_value)"  v-if="sign==2" disabled>
                                    <el-option
                                      v-for="item in oneList"
                                      :key="item.Id"
                                      :label="item.Category_Name"
                                      :value="item.Id">
                                    </el-option>
                                    </el-select>
                         <el-select v-model="update_value" placeholder="请选择"  @change="changeOneCaseType1(update_value)"  v-else>
                                    <el-option
                                      v-for="item in oneList"
                                      :key="item.Id"
                                      :label="item.Category_Name"
                                      :value="item.Id">
                                    </el-option>
                                    </el-select>
                                    
                          </div>
                              <div class="flex row margin_t">
                            <p class="flex_title">一级案由类型</p>
                             <el-select v-model="update_oneValue" placeholder="请选择" v-show="sign ==1" disabled>
                                    <el-option
                                      v-for="item in oneResonArr"
                                      :key="item.Id"
                                      :label="item.Category_Name"
                                      :value="item.Id">
                                    </el-option>
                                    </el-select>

                                     <el-select v-model="update_oneValue" placeholder="请选择" v-show="sign ==2" @change="changeTwoCase(update_oneValue)">
                                    <el-option
                                      v-for="item in oneResonArr1"
                                      :key="item.Id"
                                      :label="item.Category_Name"
                                      :value="item.Id">
                                    </el-option>
                                    </el-select>
                                    
                             </div>
                          <div class="flex row margin_t">
                             <p class="flex_title" v-if="sign==1">一级案由名称</p>
                             <p class="flex_title" v-else>二级案由名称</p>
                            <input type="text" class="this_input" v-model="update_name">
                          </div>
                         </div>

                        <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                          <el-button type="primary" @click="updataCauseType()">确 定</el-button>
                        </div>
                         <div slot="title" class="dialog-title">
                     <div class="dialogFormVisivleHeader_left flex">修改案由</div>
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
            value:"",
            update_name:'',
            update_value:'',
            type:'',
            Id:'',
            isReadonly:'',
            oneList:[],
            oneResonArr:[],
            oneResonArr1:[],
            oneValue:"",
            update_oneValue:'',
            twoResonArr:[],
            twoValue:"",
            update_twoValue:'',
            sign:"",
            Category_Id:"",
            id:''
        }
    },
    methods:{
      /**改变一级案件 */
      changeOneCaseType(val){
      //  console.log(val)
        this.getOneCaseRenson(val)
      },
      changeOneCaseType1(val){
          this.Category_Id = val
      },
      changeTwoCase(val){
        this.Category_Id = val
      },
      /**获取一级案件 */
      getOneSelectList(){
        this.$http.get('/yongxu/Install/Sel_First_Class').then((res)=>{
          this.oneList = res.data
          //console.log(this.oneList)
         // this.getOneCaseRenson(this.value)
        })
      },
      /**获取一级案由接口根据案件 */
      getOneCaseRenson(id){
        this.$http.get('/yongxu/Index/Get_Cause_Case',{params:{Id:id}}).then((res)=>{
          var arr =res.data
          var arr1 = res.data
            var arr2 =[{Category_Name:'添加案由类型(默认添加一级案由类型)',Id:0}]
             for(var i in arr){
              arr2.push(arr[i])
            }
            
            this.oneResonArr = arr2
            this.oneResonArr1 = arr1
        })
      },
     
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
        this.name = ''
        this.value = ""
        this.oneValue=""
        this.oneResonArr=[]
        this.dialogFormVisible= true
      },
      lineCilck(row, event, column){
            //console.log(row, event, column)
      },
      getCauseTypeList(){ 

         this.$http.get('/yongxu/Install/Show_Cause',{params:{
           Display_Page_Number:this.numPage,
           PageNumber:this.currentPage,
         }}).then((res)=>{
           this.tableData = res.data.Cause
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
  
       /**添加一级案由 */
      addCauseType(){
        console.log(this.oneValue)
        if(this.name == '' || this.name == null){
             this.$message({
                message:'案由名称不能为空',
                type:'warning'
                }); 
                return false
        }
         if(this.oneValue === '' || this.oneValue === null){
             this.$message({
                message:'请选择一级案由',
                type:'warning'
                }); 
                return false
        }
        if(this.oneValue === 0){
                this.$http.post('/yongxu/Install/Add_Cause',{sign:1,Category_Name:this.name,Superior_Id:this.value}).then((res)=>{
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
        }else{
           this.$http.post('/yongxu/Install/Add_Cause',{sign:2,Value:this.name,Category_Id:this.oneValue}).then((res)=>{
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
        }
       
      },
      //删除案件编号
      deleteCauseType(id,sign){
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
           this.$http.get('/yongxu/Install/Del_Cause',{params:{Id:id,sign:sign}}).then((res)=>{
           //  console.log(res)
              if(res.data == 4 ){
              this.$message({
                      type: 'warning',
                      message: '案由占用无法删除！'
                 });
                  return false
              }
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
        updataCauseType(id,sign){
          console.log(this.Category_Id)
        if(this.update_name == '' || this.update_name == null){
             this.$message({
                message:'案由名称不能为空',
                type:'warning'
                }); 
                return false
        }
        if(this.update_oneValue === '' || this.update_oneValue === null){
             this.$message({
                message:'请选择一级案由',
                type:'warning'
                }); 
                return false
        }
           this.$http.get('/yongxu/Install/Upd_Cause',{params:{sign:this.sign,Id:this.id,Value:this.update_name,Category_Id:this.Category_Id}}).then((res)=>{         
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
         getCauseTypeInfo(id,sign){
           this.Id = id
           this.dialogFormVisible1 = true
           this.$http.get('/yongxu/Install/Upd_Sel_Cause',{params:{Id:id,sign:sign}}).then((res)=>{
           //  console.log(res)
            if(sign==1){
                  //    console.log(res)
                      this.sign = sign
                      this.getOneSelectList(res.data.Superior_Id)
                      this.getOneCaseRenson(res.data.Superior_Id)
                      this.update_name = res.data.Category_Name
                      this.update_oneValue =0
                      this.update_value = res.data.Superior_Id 
                      this.Category_Id = res.data.Superior_Id 
                      this.id = res.data.Id
             }else{
                      this.sign = sign
                      this.getOneSelectList(res.data.Cases_Id)
                      this.getOneCaseRenson(res.data.Cases_Id)
                      this.update_value = res.data.Cases_Id
                      this.Category_Id = res.data.Superior_Id 
                      this.update_name = res.data.Category_Name
                      this.update_oneValue = res.data.Superior_Id 
                      this.id = res.data.Id
             }
                   
            })
        },
       
    },
    mounted(){
        this.getCauseTypeList()
        this.getOneSelectList()

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


