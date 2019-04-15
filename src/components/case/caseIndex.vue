<template>
    <div id="case" class="case">
     
    
       <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
        
           <el-tab-pane :label="v.title" :name="'name'+i" v-for="(v,i) in arr" :key="i">
         
            <div v-show="child_cur==0">
          
            <div class="flex case-child" >  
           
              <div class="case-child-first flex">
                <p  v-for="(v,i) in arr1" @click="changeLi(i)" :key="i"  :class="{'isactive':cur === i}">{{v.title}}</p>
              </div>
                
                <div class="case-child-end flex">
                    <div class="input flex">
                      <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input" @click="searchContent()"/>
                      <button class="case-button"><i class="el-icon-search"></i></button>
                    </div>
                      <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>新建案例</el-button>
                </div>

            </div>
            <div class="showTab">
            <ul class="showTab-ul">
          
              <li class="showTab-li" v-show="cur==0">
            
              <div class="selectMenu flex">
              <div class="case-type flex">
                 <p>案件类型：</p>
                  <el-select v-model="Casevalue" placeholder="请选择" @change="getSelectChildeMenu(Casevalue)">
                    <el-option v-for="item in optionMenu" :key="item.Id" :label="item.Category_Name"  :value="item.Id"> </el-option>
                  </el-select>

                  <el-select v-model="Casevalue1" placeholder="请选择" style="margin-left: 10px;" @change="changeTowValue(Casevalue1)">
                  <el-option v-for="(item,index) in optionChildMenu" :key="index" :label="item.Value"  :value="item.Id"> </el-option>
                 </el-select>
              </div>

               <div class="case-state flex">
               <p>案件状态：</p> 
               <el-select v-model="value" placeholder="请选择" style="margin-left: 10px;" @change="changeStatus(value)"> 
               <el-option v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value"></el-option>
               </el-select>
               </div>          
              <div class="case-time flex">
               <p>起止时间：</p>
                <el-date-picker
                @change="changeTime"
                v-model="dateValue"
                type="datetimerange"
                :picker-options="pickerOptions2"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
                </el-date-picker>
                </div>
                <button class="dingzhi"><i class="el-icon-download"></i>导出</button>
                <button class="dingzhi"><i class="el-icon-download"></i>不顶置</button>
              </div>
                 <!-- <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Case_No" label="案件编号" width=""></el-table-column>
                    <el-table-column prop="Case_Name" label="案件名称" width=""> </el-table-column>
                     <el-table-column prop="Customer_Name_Zh" label="客户名称" width=""> </el-table-column>
                      <el-table-column prop="Value" label="案件类别" width=""> </el-table-column>
                       <el-table-column prop="Case_Lawyer_Name" label="承办律师" width=""> </el-table-column>
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
                       
                        <el-table-column  label="立案状态" prop="Status">
                          
                           </el-table-column>

                </el-table> -->
                  <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Case_No" label="案件编号" width=""></el-table-column>
                    <el-table-column prop="Case_Name" label="案件名称" width=""> </el-table-column>
                     <el-table-column prop="Customer_Name_Zh" label="客户名称" width=""> </el-table-column>
                      <el-table-column prop="Value" label="案件类别" width=""> </el-table-column>
                       <el-table-column prop="Case_Lawyer_Name" label="承办律师" width=""> </el-table-column>
                          <el-table-column  label="合同起止日期" width="">
                            
                                <template slot-scope="scope">
                                    <p>{{scope.row.Contract_Date_From | getTime}}{{scope.row.Contract_Date_From | getTime}}</p>
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
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                 :page-sizes="[1, 5, 10]" :page-size="numPage"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                   </el-pagination>
                </div>
                  </li>

                  <li class="showTab-li" v-show="cur==1">
              <div class="selectMenu flex">
                    <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
                    <el-table-column prop="address" label="地址"> </el-table-column>
                    </el-table>
              </div>

                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                 :page-sizes="[100, 200, 300, 400]" :page-size="100"  layout="total, sizes, prev, pager, next, jumper" :total="total">
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
                         <div class="showNum">共检测到：{{total}}条结果</div>
                      <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                      <el-table-column prop="date" label="日期" width="180"></el-table-column>
                      <!-- <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
                      <el-table-column prop="address" label="地址"> </el-table-column> -->
                      </el-table>
                    </div>
            </div>
          </div>
        
        </el-tab-pane>
      
        <!-- <el-tab-pane label="利益检索" name="second">配置管理</el-tab-pane>-->
                
        </el-tabs> 
    </div>
</template>
<script>
import store from '../../vuex/store'
  export default {
    data() {
      return {
        dateValue:[],
        Casevalue:'',
        Casevalue1:'',
        Casevalue2:0,
        SearchInput:'',
        selectOneId:1,
        numPage:10,
        currentPage4: 1,
        total:1,
        child:0,
        child_cur:0,
        arr:[],
        arr1:[{title:'所有案件'},{title:'授权案件'}],
        activeName: 'name0',
        index:0,
          cur:0,
          arr:[{title:'所有案件'},{title:'授权案件'}],
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
        value5: '',
        optionMenu:[],
        optionChildMenu:[],
        options:[
         {value:0,label:'制订中'},{value:1,label:'已审核'},{value:2,label:'已签合同'},{value:3,label:'已结案'},{value:-1,label:'已作废'}
        ],
      };
    },
    methods: {
      handleClick(tab, event) {
        this.child_cur = tab.index
        // console.log(tab.index)
        // console.log(this.child_cur)
        // console.log(tab,event);
      },
      changeLi(i){
          this.cur = i
      },
       handleSizeChange(val) {
         this.numPage = val
         this.getCaseList()
         console.log(`每页 ${ this.numPage} 条`);
      },
      handleCurrentChange(val) {
        console.log(val)
        this.currentPage4 = val
        this.getCaseList()

        console.log(`当前页: ${this.currentPage4}`);
      },
      toAdd(){
        this.$router.push({path:'/index/caseAdd'})
      },
      lineCilck(row, event, column){
            console.log(row, event, column)
      },
      searchData(){
        this.child = 1
      },
      changeTime(value){
            // console.log(value)
              let value1= value[0]
              let value2= value[1]
              var start = new Date(value1);  
              var youWant1=start.getFullYear() + '-' + (start.getMonth() + 1) + '-' + start.getDate() + ' ' + start.getHours() + ':' + start.getMinutes() + ':' + start.getSeconds(); 
              var end = new Date(value2);  
              var youWant2=end.getFullYear() + '-' + (end.getMonth() + 1) + '-' + end.getDate() + ' ' + end.getHours() + ':' + end.getMinutes() + ':' + end.getSeconds(); 
              this.start = youWant1
              this.end = youWant2

             this.getCaseList()
      },
      getCaseList(){ 
        var statusValue;
          if(this.value == '' || this.value == null){
                statusValue = -2;
          }else{
             statusValue = this.value
          }
         var userId = localStorage.getItem('userId')
         this.$http.get('/yongxu/Index/DisplayCase',{params:{
           UserId:userId,
           Dic_Id:this.Casevalue2,
           Status:statusValue,
           MaxTime:this.end,
           MinTime:this.start,
           VagueName:this.SearchInput,
           Display_Page_Number:this.numPage,
           PageNumber:this.currentPage4,
         }}).then((res)=>{
           this.tableData = res.data.GetCase
           this.total = res.data.PageCount
           console.log(res)
        })
        // this.$http.get('/myTest/getCaseList',{params:{page:this.currentPage4,numPage:this.numPage}}).then((res)=>{
        //   console.log(res)
        //   this.tableData = res.data.message
        // })
      },
      getSelectMenu(){
         this.$http.get('/yongxu/Index/GetBoxOne').then((res)=>{
           this.optionMenu = res.data
        })
      },
       getSelectChildeMenu(id){
         this.optionChildMenu = ''
         this.Casevalue1 =''
         console.log(id)
         this.selectOneId = id
         this.$http.get('/yongxu/Index/GetBoxTwo',{params:{Id:this.selectOneId}}).then((res)=>{
           console.log(this.optionChildMenu)
           this.optionChildMenu = res.data  
        })
      },
      changeTowValue(id){
        console.log(id)
         this.Casevalue2 = id
         this.getCaseList()
      },
      changeStatus(id){
        console.log(id)
         this.statusValue = id
         this.getCaseList()
      },
      searchContent(){
       this.getCaseList()
      }
    },
    mounted(){
      this.getCaseList()
      this.getSelectMenu()
    },
    components:{
      
    },
   　filters:{
      getStatus:function(Status){
          if(Status == 1){
              return '启用'
          }else{
               return '禁用'
          }　
　　　　　},
      getTime(time){
          return time.substring(0,10)
      }
　　　　}
  };
</script>
<style>
@import '../../assets/sass/main.css'
</style>


