<template>
    <div>
            <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="riskArr" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Case_Name" label="案件名称" width=""></el-table-column>
                    <el-table-column prop="staff_Name" label="主办律师" width=""> </el-table-column>
                     <el-table-column prop="Value" label="案件类别" width=""> </el-table-column>
                      <el-table-column  label="申请日期" width="" :show-overflow-tooltip="true"> 
                           <template slot-scope="scope" >
                                    <p>{{scope.row.Date_Created | getTime}}</p> 
                                </template>
                      </el-table-column>
                          <el-table-column  label="合同" width=""> 
                                <template slot-scope="scope"> 
                               <a style="color:red" :href="'/yongxu//Base/download?filename='+scope.row.File_Path">
                                   {{scope.row.File_Name}}
                               </a>
                              </template>
                          </el-table-column>
                            
                        <el-table-column  label="操作" width="180"> 
                          <template  slot-scope="scope">
                            <span @click="open(scope.row.Id)" style="cursor:pointer"><i class="el-icon-close" style="font-size: 20px;font-weight: 600;"></i></span>
                            <span @click="open1(scope.row.Id)" style="cursor:pointer"><i class="el-icon-check" style="font-size: 20px;font-weight: 600;"></i></span>
                            <span @click="open1(scope.row.Id)" style="cursor:pointer"><i class="el-icon-check" style="font-size: 20px;font-weight: 600;"></i></span>
                          
                       
                          </template>
                        </el-table-column>
                  </el-table>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[1,5,10,15]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="total">
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
                riskArr:[],
                //当前页
                currentPage:1,
                total:0,
                pageNum:5,
        }
    },
    inject:["reload"],
    methods:{
         getRiskArr(){
        this.$http.get('/yongxu/windShow/windQuery',{params:{
          branch:this.currentPage,
          live:this.pageNum,
        }}).then((res)=>{
            console.log(res)
            this.riskArr = res.data.table
            this.total = res.data.keep
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageNum = val
         this.getRiskArr()

      },
      handleCurrentChange(val) {
          this.currentPage = val
          this.getRiskArr()
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
      passCase(id,type){
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
      // 对话框,审核不通过
       open(id) {
        this.$confirm('此操作将使风控审核不通过, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.get('/yongxu/windShow/windCorrection',{params:{id:id,keep:4}}).then((res)=>{
             if(res.data == 1){
                this.$message({
                  type: 'success',
                  message: '操作成功!'
                });
             }else{
                this.$message({
                  type: 'warning',
                  message: '操作失败!'
                });
             }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      },
         // 对话框,审核通过
       open1(id) {
        this.$confirm('此操作将通过风控审核, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.get('/yongxu/windShow/windCorrection',{params:{id:id,keep:3}}).then(
            (res)=>{
              if(res.data == 1){
                 this.$message({
            type: 'success',
            message: '操作成功!'
          });
              }else{
                 this.$message({
            type: 'warning',
            message: '操作失败!'
          });
              }
            }
          )
        
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      }
    },
    mounted(){
        this.getRiskArr()
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


