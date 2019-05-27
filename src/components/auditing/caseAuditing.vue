<template>
    <div>
          <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="caseArr" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Case_Name" label="案件名称" width=""></el-table-column>
                    <el-table-column prop="Staff_Name" label="主办律师" width=""> </el-table-column>
                     <el-table-column prop="Customer_Name_Zh" label="客户名称" width=""> </el-table-column>
                      <el-table-column prop="Value" label="案件类别" width=""> </el-table-column>
                       <el-table-column prop="Creattime" label="申请日期" width="">
                        <template slot-scope="scope">
                             <span>{{scope.row.Creattime | getTime}}</span>    
                        </template>   
                                               </el-table-column>
                          <el-table-column prop="date" label="合同" width=""> 
                                <template slot-scope="scope"> 
                               <span style="color:red" @click="look(scope.row.Id)">
                                 预览
                               </span>
                              </template>
                          </el-table-column>
                             <el-table-column  label="状态" width=""> 
                                    <template slot-scope="scope"> 
                                    <span v-if="scope.row.type == '0'" style="color:red;">
                                        {{scope.row.Status}}
                                  </span>
                                  <span v-if="scope.row.type == '1'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '2'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '3'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '4'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '-2'" style="color:blue;cursor:pointer">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '-1'">{{scope.row.Status}}</span>
                                  </template>
                             </el-table-column>
                        <el-table-column  label="操作"> 
                          <template  slot-scope="scope">
                              <span  @click="noPassCase(scope.row.Id,scope.row.type)" style="cursor:pointer"><i class="el-icon-close" style="font-size: 20px;font-weight: 600;"></i></span>
                            <span @click="passCase(scope.row.Id,scope.row.type)" style="cursor:pointer"><i class="el-icon-check" style="font-size: 20px;font-weight: 600;"></i></span>
                          </template>
                        </el-table-column>
                  </el-table>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[1,5,10,13]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                   </el-pagination>
                </div>
                </li>
                </ul>
            </div>
              <el-dialog  :visible.sync="dialogFormVisibleWord" :modal-append-to-body='false' :modal='false' width="1000px">
                          <iframe src='https://view.officeapps.live.com/op/view.aspx?src=http://haoren.gzbigbang.cn/cyx.docx' width='100%' height='1000px' frameborder='1'>

                          </iframe>
              </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
                cur:0,
                caseArr:[],
                //当前页
                currentPage:1,
                total:0,
                pageNum:10,
                dialogFormVisibleWord:false,
        }
    },
    inject:["reload"],
    methods:{
         getCaseArr(){
        this.$http.get('/yongxu/Toexamine/Get_Case_Audit',{params:{
          Display_Page_Number:this.pageNum,
          PageNumber:this.currentPage,
        }}).then((res)=>{
            console.log(res)
            this.caseArr = res.data.Case_Audit
            this.total = res.data.PageCount
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageNum = val
         this.getCaseArr()

      },
      handleCurrentChange(val) {
          this.currentPage = val
          this.getCaseArr()
          console.log(`当前页: ${val}`);
      },
     lineCilck(row, event, column){
            console.log(row, event, column)
      },
      noPassCase(id,type){
          if(type != 0){

            this.$message({
                 message:'操作失败，此案件状态不需操作',
                 type:'warning'
             });
            return false
          }
          this.$confirm('此操作将使此案件不通过, 是否继续?', '提示', {
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
            message: '已取消操作'
          });          
        });
          
      },
      look(id){
        this.dialogFormVisibleWord = true
      },
      passCase(id,type){
          if(type != 0){
               this.$message({
                    message:'操作失败，此案件状态不需操作',
                    type:'warning'
                });
            return false
          }
           this.$confirm('此操作将使此案件通过, 是否继续?', '提示', {
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
          }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
        })
        
      }
    },
    mounted(){
        this.getCaseArr()
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
}
</script>
<style>
@import '../../assets/sass/main.css';
</style>


