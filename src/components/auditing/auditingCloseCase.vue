<template>
    <div>
            <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="closeCasekArr" border style="width: 100%"  @row-click="lineCilck">
                      <el-table-column prop="Case_No" label="案件编号" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Case_Name" label="案件名称" width=""></el-table-column>
                    <el-table-column prop="Customer_Name_Zh" label="客户名称" width=""> </el-table-column>
                     <el-table-column prop="Value" label="案件类别" width=""> </el-table-column>
                      <el-table-column prop="staff_Name" label="承办律师" width=""> </el-table-column>
                      <el-table-column  label="合同起止日期" width="" :show-overflow-tooltip="true"> 
                           <template slot-scope="scope" >
                                   
                            <p  v-if="!scope.row.Contract_Date_From" style="color:#ccc">暂无</p>
                            <p v-else>{{scope.row.Contract_Date_From | getTime}}</p>
                                </template>
                             
                      </el-table-column>
                        <el-table-column  label="立案日期" width="" :show-overflow-tooltip="true"> 
                           <template slot-scope="scope" >
                                <p  v-if="!scope.row.Filing_Date" style="color:#ccc">暂无</p>
                            <p v-else>{{scope.row.Filing_Date | getTime}}</p>
                                    
                                </template>
                      </el-table-column>
                        <el-table-column  label="操作"> 
                          <template  slot-scope="scope">
                             <button  style="cursor:pointer" class="btn-caozuo" @click="closeCase(scope.row.Id)" >结案</button>
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
                closeCasekArr:[],
                //当前页
                currentPage:1,
                total:0,
                pageNum:5,
        }
    },
    inject:["reload"],
    methods:{
         getCloseCasekArr(){
        this.$http.get('/yongxu/windShow/junctionQuery',{params:{
          branch:this.currentPage,
          live:this.pageNum,
        }}).then((res)=>{
            console.log(res)
            this.closeCasekArr = res.data.table
            this.total = res.data.keep
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageNum = val
         this.getCloseCasekArr()

      },
      handleCurrentChange(val) {
          this.currentPage = val
          this.getCloseCasekArr()
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
      },
      // 对话框,结案操作
       closeCase(id) {
        this.$confirm('此操作将此案件结案, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.get('/yongxu/windShow/junctionCorrection',{params:{id:id,keep:3}}).then((res)=>{
             if(res.data == 1){
                this.$message({
                  type: 'success',
                  message: '结案操作成功!'
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
    },
    mounted(){
        this.getCloseCasekArr()
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


