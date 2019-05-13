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
                 :page-sizes="[5,10,15,20]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                   </el-pagination>
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
                cur:0,
                caseArr:[],
                //当前页
                currentPage:1,
                total:0,
                pageNum:5,
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
      },
      passCase(id,type){
          if(type != 0){
               this.$message({
                    message:'操作失败，此案件状态不需操作',
                    type:'warning'
                });
            return false
          }
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


