<template>
    <div>
        <div class="flex flex_end_cus">
             <div class="input flex">
                      <input placeholder="请输入关键词搜索"  v-model="Customer_Name1" class="case-input"/>
                      <button class="case-button" @click="searchContent1()"><i class="el-icon-search"></i></button>
        </div>
        </div>
          
              <div class="selectMenu flex">
                  <el-table :data="tableData1" border style="width: 100%">
                    <el-table-column prop="Customer_Name_Zh" label="客户名称" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Customer_Number" label="客户编号" width="" :show-overflow-tooltip="true" sortable>
                       <template slot-scope="scope">
                          {{scope.row.Customer_Number|hideMiddle}} 
                          <span></span>
                      </template>
                       </el-table-column>
                     <!-- <el-table-column prop="Category_Name" label="行业类型" width="" :show-overflow-tooltip="true"> </el-table-column> -->
                      <el-table-column prop="Value" label="行业" width=""> </el-table-column>
                       <el-table-column prop="Customer_Type" label="客户类型" width="" :show-overflow-tooltip="true"> </el-table-column>
                       <!-- <el-table-column prop="is" label="是否常年客户" width=""> </el-table-column> -->
                           <el-table-column  label="操作">
                            <template slot-scope="scope">
                              <div>
                                <p  @click.stop="gotoUpdate(scope.row.Id)" style="cursor:pointer;color:red">
                                  修改
                                </p>
                              </div>    
                            </template>
                           </el-table-column>
                </el-table> 
              </div>

                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange1" @current-change="handleCurrentChange1" :current-page="currentPage1"
                 :page-sizes="[20,50,100]" :page-size="pageNum1"  layout="total, sizes, prev, pager, next, jumper" :total="PageCount1">
                   </el-pagination>
                </div>
    </div>
</template>
<script>
import store from '../../vuex/store'
var _this = this
  export default {
    data() {
      return {
        //律师姓名
        laywerNameArr:[],
        //分所
        branchNameArr:[],
      //事务所客户
        tableData1:[],
        Customer_Name1:'',
        PageCount1:0,
        pageNum1:20,
       currentPage1:1,
      };
    },
    methods: {
    handleSizeChange1(val) {
        this.pageNum1 = val
        this.getComponyList()
      },
      handleCurrentChange1(val) {
        this.currentPage1 = val
        this.getComponyList()
      },
      lineCilck(row, event, column){
         this.$router.push({path:`/index/customerEdit/${row.Id}`})
      },
    showLaywer(id){
      var _this =this
       this.$http.get('/yongxu/Customer/Show_All_Lawyers',{params:{
         Id:id,
       }}).then((res)=>{
        this.laywerNameArr = res.data
       })
    },
    showBranches(id){
      this.$http.get('/yongxu/Customer/Show_All_Branches',{params:{
         Id:id,
       }}).then((res)=>{
        this.branchNameArr = res.data
       })
    },
    getComponyList(){
    this.$http.get('/yongxu/Customer/Display_All_Customers',{params:{
          User_Id:localStorage.getItem('userId'),
          Customer_Name:this.Customer_Name1,
          Display_Page_Number:this.pageNum1,
          PageNumber:this.currentPage1
        }}).then((res)=>{
          console.log(res)
            this.tableData1= res.data.list
            this.PageCount1 = res.data.PageCount
        })
      },
      /**
       * 跳转修改
       */
       gotoUpdate(id){
           this.common.checkAuth({params:{url:'customer_componyupdate',userid:localStorage.getItem('userId')}}).then((res)=>{
            if(res.data == false){
                this.$message({
                    message:'没有权限',
                    type:'warning'
                    });     
                return false
                }else{
                    this.$router.push({path:'/index/customerUpdate/'+id})
                }
           })
      },
      searchContent1(){
        this.getComponyList();
      }
    },
    mounted(){
      this.getComponyList()

    },
    components:{
      
    },
    filters: {
        hideMiddle(val) {
          console.log(val)
                  return `${val.substring(0,3)}****${val.substring(val.length-3)}`
                },
        hideData(data){
            return data.replace(data.slice(data.length-6,data.length),"******")
        }
      },
       
  };
</script>
<style>
@import '../../assets/sass/main.css';
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
.case-child-end2{
    flex-direction: row;
    justify-content:space-between;
}
.selectMenu{
    margin-top: 20px;
}
.export{
  width: 25px;
  height: 25px;
  background: #7E2C2E;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
}
.flex_end_cus{
    display: flex;
    justify-content: flex-end;
}
</style>