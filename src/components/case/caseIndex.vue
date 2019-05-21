 <template>
    <div id="case" class="case"> 
       <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
           <el-tab-pane :label="v.Item_Name" :name="'name'+i" v-for="(v,i) in arr" :key="i">
          
            <div v-show="child_cur==0">
            <div class="flex case-child" >  
              <div class="case-child-first flex">
                <p  v-for="(v,i) in arr1" @click="changeLi(i,v.url)" :key="i"  :class="{'isactive':cur === i}">{{v.title}}</p>
              </div>
            </div>
            <div class="showTab">
            <ul class="showTab-ul">
          
              <li class="showTab-li" v-show="cur==0">
                    <caseAllList></caseAllList>
              </li>

              <li class="showTab-li" v-show="cur==1">
                  <casePart></casePart>
               </li>

                <li class="showTab-li" v-show="cur==2">
                  <caseMine></caseMine>
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
          
              <div class="btn-searchData"><button class="btn-search" @click="searchData()">搜索数据库</button></div>
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
                      <el-table :data="tableData" border style="width: 100%"  @row-click="1">
                      <el-table-column prop="date" label="日期" width="180"></el-table-column>
                      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
                      <el-table-column prop="address" label="地址"> </el-table-column>
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
import empower from './caseEmpower'
import caseAllList from './caseChild/caseAllList'
import casePart from './caseChild/casePart'
import caseMine from './caseChild/caseMine'
  export default {
    data() {
      return {
        //授权案件搜索
        SearchInput1:'',
        numPage1:1,
        currentPage1:1,
        total1:0,       
         //
        total:0,
        dateValue:[],
        Casevalue:'',
        Casevalue1:'',
        Casevalue2:0,
        SearchInput:'',
        selectOneId:1,
        numPage:10,
        currentPage4: 1,
        child:0,
        child_cur:0,
        arr1:[{title:'所有案件',url:'Index/Show_All_Cases'},{title:'部门案件',url:'Index/Show_Department_Case'},{title:'我的案件',url:'Index/Show_All_Case'}],
        activeName: 'name0',
        index:0,
        cur:2,
        arr:[{title:'案件'},{title:'利益检索'}], 
         input23: '',
        
        tableData: [],
        tableDataShouQuan:[],
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
        tableData1:[],
         excelData: [
        {
          name: '张三',
          birthday: new Date('1990-01-01'),
          sex: '男',
          age: 28
        },
        {
          name: '李四',
          birthday: new Date('1991-01-01'),
          sex: '女',
          age: 27
        }
      ]


      };
    },
    methods: {
      handleClick(tab, event) {
        this.child_cur = tab.index
      },
      changeLi(i,url){
        this.$http.get('/yongxu/Base/getUserJudge',{params:{userid:localStorage.getItem('userId'),url:url}}).then((res)=>{
          console.log(res)
          if(res.data == true){
              this.cur = i
          }else{
              this.$message({
                message:'没有权限',
                type:'warning'
                }); 
                return false
          }
        })  
      },
     getTwoMenu(){
       this.$http.get('/yongxu/Base/User_Two_Menu',{params:{Menu_Id:1}}).then((res)=>{
         console.log(res)
         this.arr = res.data
       })
     },
      searchData(){
        this.child = 1
      }
    },
    mounted(){
      this.getTwoMenu()
    },
    components:{
      caseAllList,
      caseMine,
      casePart
    },
  };
</script>
<style>
@import '../../assets/sass/main.css';
</style>


