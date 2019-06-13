<template>
    <div id="case" class="case">
        <div class="add-top flex">
                <p>所在位置：</p>
                <router-link to='/index/auditingIndex' tag="a">客户</router-link>
                <p><i class="el-icon-arrow-right"></i></p>
                <p>{{title}}</p>
            </div>
    
       <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
        
           <!-- <el-tab-pane :label="v.title" :name="'name'+i" v-for="(v,i) in arr" :key="i"> -->
         
            <div v-show="child_cur==0">
          
            <div class="flex case-child" >  
           
              <div class="case-child-first flex">
                <p  v-for="(v,i) in arr1" @click="changeLi(i,v)" :key="i"  :class="{'isactive':cur === i}">{{v.title}}</p>
              </div>
                
                <div class="case-child-end flex">
                    <div class="input flex" v-show="cur==0">
                      <input placeholder="请输入关键词搜索"  v-model="Customer_Name" class="case-input"/>
                      <button class="case-button" @click="searchContent()"><i class="el-icon-search"></i></button>
                    </div>
                     <div class="input flex" v-show="cur==1">
                      <input placeholder="请输入关键词搜索"  v-model="Customer_Name1" class="case-input"   />
                      <button class="case-button" @click="searchContent1()"><i class="el-icon-search"></i></button>
                    </div>
                      <!-- <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>新建案例</el-button> -->
                </div>

            </div>
            <div class="showTab">
            <ul class="showTab-ul">
          
              <li class="showTab-li" v-show="cur==0">
            
              <!-- <div class="selectMenu flex">
              <div class="case-type flex">
                 <p>案件类型：</p>
                  <el-select v-model="value" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label"  :value="item.value"> </el-option>
                  </el-select>
                  <el-select v-model="value" placeholder="请选择" style="margin-left: 10px;">
                  <el-option v-for="item in options" :key="item.value" :label="item.label"  :value="item.value"> </el-option>
                 </el-select>
              </div>

               <div class="case-state flex">
               <p>案件状态：</p> 
               <el-select v-model="value" placeholder="请选择" style="margin-left: 10px;">
               <el-option v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value"></el-option>
               </el-select>
               </div>          
              <div class="case-time flex">
               <p>起止时间：</p>
                <el-date-picker
                v-model="value5"
                type="datetimerange"
                :picker-options="pickerOptions2"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
                </el-date-picker>
                </div>
                <button class="dingzhi"><i class="el-icon-download"></i>不顶置</button>
              </div> -->
               <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Customer_Name_Zh" label="客户名称" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Customer_Number" label="客户编号" width="100" :show-overflow-tooltip="true" sortable>
                      <template slot-scope="scope">
                          {{scope.row.Customer_Number|hideMiddle}} 
                          <span></span>
                      </template>
                    </el-table-column>
                      <el-table-column prop="Category_Name" label="行业类型" width="" :show-overflow-tooltip="true"> </el-table-column>
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
                
                     
                       <el-table-column  label="分所" width="170" :show-overflow-tooltip="true">
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
                         
                </el-table>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[20,50,100]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="PageCount">
                   </el-pagination>
                </div>

         
                  </li>

                  <li class="showTab-li" v-show="cur==1">
              <div class="selectMenu flex">
                  <el-table :data="tableData1" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Customer_Name_Zh" label="客户名称" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Customer_Number" label="客户编号" width="" :show-overflow-tooltip="true" sortable> </el-table-column>
                     <el-table-column prop="Category_Name" label="行业类型" width="" :show-overflow-tooltip="true"> </el-table-column>
                     
                      <el-table-column prop="Value" label="行业" width=""> </el-table-column>
                       <el-table-column prop="Customer_Type" label="客户类型" width="" :show-overflow-tooltip="true"> </el-table-column>
                       <!-- <el-table-column prop="is" label="是否常年客户" width=""> </el-table-column> -->
                         
                </el-table>
              </div>

                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange1" :current-page="currentPage1"
                 :page-sizes="[20,50,100]" :page-size="pageNum1"  layout="total, sizes, prev, pager, next, jumper" :total="PageCount1">
                   </el-pagination>
                </div>
                  </li>
                </ul>
            </div>
            </div>
            
       
          <div v-show="child_cur==1">
            <div class="flex case-child2" v-show="child==0">
          
                    <div class="input-search flex">
                      <i class="el-icon-search"></i>
                      <input placeholder="请输入关键词搜索"  v-model="input23" class="case-input"/>
                    </div>
          
              <div class="btn"><button class="btn-search" @click="searchData()">搜索数据库</button></div>
            </div>

            <div class="flex case-child3" v-show="child==1">
                  <div class="search-div flex">
                    <div class="input-search flex">
                      <i class="el-icon-search ii"></i>
                     <input placeholder="请输入关键词搜索"  v-model="input23" class="case-input"/>
                      <button class="case-button"><i class="el-icon-search"></i></button>
                    </div>  
                  </div>               
                      <div class="search-table">
                      <div class="showNum">共检测到：3条结果</div>
                      <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                      <el-table-column prop="date" label="日期" width="180"></el-table-column>
                      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
                      <el-table-column prop="address" label="地址"> </el-table-column>
                      </el-table>
                    </div>
            </div>
          </div>
        
                
        </el-tabs> 
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
        //   if(res.data == true){
        //       this.cur = i
        //       this.$store.commit('changeChild',i)
        //        console.log(this.$store.state.child_id)
        //       this.title = v.title
        //       if(i==1){
        //         this.getComponyList()
        //       }
        //   }else{
        //       this.$message({
        //         message:'没有权限',
        //         type:'warning'
        //         }); 
        //         return false
        //   }
        }).catch((res)=>{
            this.$message({
                message:'服务器异常',
                type:'warning'
                }); 
                return false
        })
      },
       handleSizeChange(val) {
        this.pageNum = val
        this.getList()
      },
      handleCurrentChange(val) {
        this.currentPage = val
          this.getList()
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
      getChildMenu(){
        this.$http.get('/api/data').then((res)=>{
        // this.arr = res.data[0].children
        })
      },
      searchData(){
        this.child = 1
      },
      getMyList(){
        var _this =this
        this.$http.get('/yongxu/Customer/Show_My_Customers',{params:{
          User_Id:localStorage.getItem('userId'),
          Customer_Name:this.Customer_Name,
          Display_Page_Number:this.pageNum,
          PageNumber:this.currentPage
        }}).then((res)=>{
         // console.log(res)
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
    getComponyList(){
    this.$http.get('/yongxu/Customer/Display_All_Customers',{params:{
          User_Id:localStorage.getItem('userId'),
          Customer_Name:this.Customer_Name1,
          Display_Page_Number:this.pageNum1,
          PageNumber:this.currentPage1
        }}).then((res)=>{
            this.tableData1= res.data.list
            this.PageCount1 = res.data.PageCount
        })

      },
      searchContent(){
        // if(){
        //   var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]") 
        //   var rs = ""; 
        //   for (var i = 0; i < value.length; i++) {
        //   rs = rs+s.substr(i, 1).replace(pattern, ''); 
        //   } 
        // }
        this.getMyList();
      },
      searchContent1(){
        this.getComponyList();
      }
    },
    mounted(){
      
      //console.log(this.$store.state.child_id)
      this.title = this.arr1[this.$store.state.child_id].title
      this.cur = this.$store.state.child_id
      // this.getChildMenu()
      this.getMyList()
      this.getComponyList()

    },
    components:{
      
    },
    filters: {
        hideMiddle(val) {
                  return `${val.substring(0,3)}****${val.substring(val.length-3)}`
                }
            }
  };
</script>
<style>
@import '../../assets/sass/main.css';
.back_color{
  background: #f0f0f0;
}
.back_color1{
   background: #000000;
   color:#ffffff;
}
.back_color1 p{
  color:#ffffff;
}
</style>


