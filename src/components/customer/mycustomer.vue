<template>
  
          <div>
             <div class="flex flex_end_cus">
             <div class="input flex">
                      <input placeholder="请输入关键词搜索"  v-model="Customer_Name" class="case-input"/>
                      <button class="case-button" @click="searchContent()"><i class="el-icon-search"></i></button>
            </div>
            </div>
              <div class="selectMenu flex">
               <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Customer_Name_Zh" label="客户名称" width="150" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Customer_Number" label="客户编号" width="100" :show-overflow-tooltip="true" sortable>
                      <template slot-scope="scope">
                          {{scope.row.Customer_Number|hideMiddle}} 
                          <span></span>
                      </template>
                    </el-table-column>
                      <!-- <el-table-column prop="Category_Name" label="行业类型" width="" :show-overflow-tooltip="true"> </el-table-column> -->
                      <el-table-column prop="Value" label="行业" width="" :show-overflow-tooltip="true"> </el-table-column>
                       <el-table-column prop="Customer_Type" label="客户类型" width="" :show-overflow-tooltip="true"> </el-table-column>
                   
                
                   <el-table-column  label="承办律师名称" width="110">
                      <template slot-scope="scope">
                       <el-popover trigger="hover" placement="top" popper-class="back_color">
                         <el-tag  v-for="(v,i) in laywerNameArr" :key="i">{{v}}</el-tag>
                          <div slot="reference" class="name-wrapper" @mouseover="showLaywer(scope.row.Id)">
                         <el-tag type="success"> <span> {{ scope.row.Staff_Name }}</span></el-tag>
                        </div>
                      </el-popover>
                      </template>
                      </el-table-column>
                
                     
                       <el-table-column  label="分所" width="100" :show-overflow-tooltip="true">
                                 <template slot-scope="scope">
                                <el-popover trigger="hover" placement="top" popper-class="back_color1">
                                  <p  v-for="(v,i) in branchNameArr" :key="i">{{v}}&nbsp;</p>
                                  <div slot="reference" class="name-wrapper">
                                     <span  @mouseover="showBranches(scope.row.Id)"> {{ scope.row.Org_Name }}</span>
                                 </div>
                             </el-popover> 
                              </template>
                        </el-table-column>

                       <el-table-column prop="City" label="地区" width="" :show-overflow-tooltip="true"> </el-table-column>
                       <el-table-column prop="Identification" label="是否常年客户" width="110"> </el-table-column>
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
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[20,50,100]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="PageCount">
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
        //列表查询
        Customer_Name:'',
        PageCount:0,
        pageNum:20,
        currentPage: 1,
      //事务所客户
      tableData1:[],
      Customer_Name1:'',
        PageCount1:0,
        pageNum1:20,
       currentPage1:1,

      title:'',
        child:0,
        child_cur:0,
        arr:[],
        arr1:[{title:'我的客户',url:'Customer/Show_My_Customers'},{title:'事务所客户',url:'Customer/Display_All_Customers'}],
        activeName: 'name0',

        index:0,
          cur:0,
          arr:[{title:'我的客户'},{title:'事务所客户'}],
         input23: '',
          tableData: [],
        value: '',
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: ''
      
      };
    },
    methods: {
      handleClick(tab, event) {
        //this.child_cur = tab.index
        //this.$store.child_id = tab.index
        this.$store.commit('changeChild',tab.index)
        this.child_cur = this.$store.child_id

      },
      changeLi(i,v){
          this.$http.get('/yongxu/Base/getUserJudge',{params:{userid:localStorage.getItem('userId'),url:v.url}}).then((res)=>{
              this.cur = i
              this.$store.commit('changeChild',i)
               console.log(this.$store.state.child_id)
              this.title = v.title
              if(i==1){
                this.getComponyList()
              }
      
        }).catch((res)=>{
            this.$message({
                message:'服务器异常',
                type:'warning'
                }); 
                return false
        })
      },
       handleSizeChange(val) {
         console.log(val)
        this.pageNum = val
        this.getMyList()
      },
      handleCurrentChange(val) {
        this.currentPage = val
          this.getMyList()
      },
        handleSizeChange1(val) {
        this.pageNum1 = val
        this.getComponyList()
      },
      handleCurrentChange1(val) {
        this.currentPage1 = val
        this.getComponyList()
      },
      toAdd(){
        this.$router.push({path:'/index/caseAdd'})
      },
      lineCilck(row, event, column){
         this.$router.push({path:`/index/customerEdit/${row.Id}`})
      },
      gotoUpdate(id){
           this.common.checkAuth({params:{url:'customer_myupdate',userid:localStorage.getItem('userId')}}).then((res)=>{
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
      getChildMenu(){
        this.$http.get('/api/data').then((res)=>{
        })
      },
      getMyList(){
        var _this =this
        this.$http.get('/yongxu/Customer/Show_My_Customers',{params:{
          User_Id:localStorage.getItem('userId'),
          Customer_Name:this.Customer_Name,
          Display_Page_Number:this.pageNum,
          PageNumber:this.currentPage
        }}).then((res)=>{
            //console.log(res)
            this.tableData = res.data.Customers
            this.PageCount = res.data.PageCount
        })   
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
      searchContent(){
        this.getMyList();
      },
  
    },
    mounted(){
      this.getMyList()
    },
    components:{
      
    },
    filters: {
        hideMiddle(val) { 
                    if(val =='无'){
                      return val
                    }else{
                      return `${val.substring(0,3)}****${val.substring(val.length-3)}`
                    }
                }
            }
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


