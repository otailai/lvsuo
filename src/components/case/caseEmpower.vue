 <template>
    <div class="">
        <div class="selectMenu flex">
         
                    <el-table :data="tableDataShouQuan" border style="width: 100%"  @row-click="lineCilck">
                            <el-table-column prop="Case_No" label="案件编号" width=""></el-table-column>
                            <el-table-column prop="Case_Name" label="案件名称" width=""> </el-table-column>
                            <el-table-column prop="Customer_Name_Zh" label="客户名称" width=""> </el-table-column>
                            <el-table-column prop="Value" label="案件类别" width=""> </el-table-column>
                            <el-table-column prop="Staff_Name" label="承办律师" width=""> </el-table-column>

                        <el-table-column  label="合同起止日期" width="">
                                <template slot-scope="scope">
                                    <p>{{scope.row.Contract_Date_From | getTime}}</p>
                                </template> 
                        </el-table-column>
                            <el-table-column  label="立案日期" width="">
                                <template slot-scope="scope">
                                    <p>{{scope.row.Creattime | getTime}}</p>
                                </template>
                            </el-table-column>
                       
                        <el-table-column  label="立案状态">
                            <template slot-scope="scope">
                                    <p> {{scope.row.Status}}</p>
                            </template>
                        </el-table-column>
                            </el-table>
              </div>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                 :page-sizes="[100, 200, 300, 400]" :page-size="100"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                </el-pagination>
                </div>
        </div> 
</template>
<script>
export default {
    data(){
        return{

        }
    },
    method:{
         //授权案件查询
      searchContent1(){
        this.getTableDataShouQuan()
      },
    getTableDataShouQuan(){
        //localStorage.getItem('userId')
        this.$http.get('/yongxu/Index/Authorized_Case',{params:{User_Id:3,Name:this.SearchInput1,Display_Page_Number:1,PageNumber:1}}).then((res)=>{
            console.log(res)
              console.log('123456')
           this.tableDataShouQuan=res.data.Get_Authorized
        })
      },
    },
    mounted(){
        this.getTableDataShouQuan()
    }
}
</script>
<style>
@import '../../assets/sass/main.css';
</style>


