<template>
    <div>
        <div class="flex flex_end_cus1">
          <div class="flex flex_end_cus1_box">
             <div class="case-state flex" style="margin-right:10px;">
               <p>客户行业:</p> 
               <el-select v-model="industryValue" placeholder="请选择" style="margin-left: 10px;" @change="changeIndustry(industryValue)"> 
               <el-option v-for="item in industryArr"  :key="item.Id"  :label="item.Value" :value="item.Id"></el-option>
               </el-select>
              </div>      
               <div class="case-state flex" style="margin-right:10px;">
               <p>客户类型:</p> 
               <el-select v-model="customValue" placeholder="请选择" style="margin-left: 10px;" @change="changeCustom(customValue)"> 
               <el-option v-for="item in customTypeArr"  :key="item.Id"  :label="item.Value" :value="item.Id"></el-option>
               </el-select>
               </div>      
          </div>
            <div class="flex flex_end_cus1_box">
               <div class="input flex">
                      <input placeholder="请输入关键词搜索"  v-model="Customer_Name1" class="case-input"/>
                      <button class="case-button" @click="searchContent1()"><i class="el-icon-search"></i></button>
              </div>
                <button class="dingzhi" @click="downExcel1()" style="margin-right:15px;"><i class="el-icon-download"></i>导出</button>
                 <button class="dingzhi" @click="clear()">清空</button>
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
        //客户类型
        customTypeArr:[],
        //行业下拉
        industryArr:[],
      //事务所客户
        tableData1:[],
        Customer_Name1:'',
        PageCount1:0,
        pageNum1:20,
       currentPage1:1,
       industryValue:'',
       customValue:'',
       allData:[], 
      };
    },
    methods: {
    /**
     *获取客户类型
     */
     getCustomerList(){
            this.$http.get('/yongxu/Customer/Set_Dropdown').then((res)=>{
                console.log(res)
                this.customTypeArr = res.data.category
                this.industryArr = res.data.industry
            })
        },
        /**
         * 改变行业
         */
        changeIndustry(val){
          this.industryValue = val
          this.getComponyList()
        },
        /**
         * 改变客户类型
         */
        changeCustom(val){
          this.customValue = val
          this.getComponyList()

        },
        /**
         * 清空
         */
         clear:function(){
          this.Customer_Name1 = ''
          this.industryValue = ''
          this.customValue = ''
        this.getComponyList()
        
      },
      /**
       * 下载
       */
               //下载excel
     downExcel1:function() { 
     this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
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
                    this.common.checkAuth({params:{url:'custome_export',userid:localStorage.getItem('userId')}}).then((res)=>{
                      if(res.data ==false){
                            this.$message({
                            message:'没有权限',
                            type:'warning'
                            });     
                          return false
                        }else{
                          var customValue,industryValue
                            if(this.customValue == ''){
                                customValue = -1
                            }else{
                              customValue = this.customValue
                            }
                            if(this.industryValue == ''){
                              industryValue=-1
                            }else{
                              industryValue = this.industryValue
                            }
                           this.$http.get('/yongxu/Customer/Details_Export',{
                             params:{
                                Customer_Name:this.Customer_Name1,
                                Trade_Type:industryValue,
                                Customer_Type:customValue
                             }
                           }).then((res)=>{
                             console.log(res)
                             this.allData = res.data 
                           }).then(()=>{
                      const th = ['客户编号', '客户名称','客户类型','联系方式','省市区','是否常年客户','详细地址']
                      const filterVal = ['Customer_Number', 'Customer_Name_Zh','Value','Contact_Party','City','Identification','Detailed_Address']
                      const data = this.allData.map(v => filterVal.map(k => v[k]))
                      const [fileName, fileType, sheetName] = ['事务所客户', 'xlsx', '事务所客户']
                      this.$toExcel({th, data, fileName, fileType, sheetName})
                      })

                        }
                    })
                 }
                })
               
                  
      },
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
      var customValue,industryValue
      if(this.customValue == ''){
          customValue = -1
      }else{
        customValue = this.customValue
      }
      if(this.industryValue == ''){
        industryValue=-1
      }else{
        industryValue = this.industryValue
      }
    this.$http.get('/yongxu/Customer/Display_All_Customers',{params:{
          User_Id:localStorage.getItem('userId'),
          Customer_Name:this.Customer_Name1,
          Display_Page_Number:this.pageNum1,
          PageNumber:this.currentPage1,
           Trade_Type:industryValue,
           Customer_Type:customValue
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
      this.getCustomerList()

    },
    components:{
      
    },
    filters: {
        hideMiddle(val) {
       //   console.log(val)
                  if(val =='无'){
                      return val
                    }else{
                      return `${val.substring(0,3)}****${val.substring(val.length-3)}`
                    }
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
.flex_end_cus1{
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
}
.flex_end_cus1_box{
  align-items: center;
}
</style>