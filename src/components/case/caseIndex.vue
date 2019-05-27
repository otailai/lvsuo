 <template>
    <div id="case" class="case"> 
       <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
           <el-tab-pane :label="v.Item_Name" :name="'name'+i" v-for="(v,i) in arr" :key="i">
          
            <div v-show="child_cur==0">
            <div class="flex case-child" >  
            </div>
            <div class="showTab">
            <ul class="showTab-ul">
          
              <li class="showTab-li">
                    <caseAllList></caseAllList>
              </li>

                </ul>
            </div>
            </div>
            
       
          <div v-show="child_cur==1">
             <div class="flex case-child" >  
            </div>
            <div class="showTab">
            <ul class="showTab-ul">
          
             

              <li class="showTab-li">
                  <caseBranch></caseBranch>
               </li>

                </ul>
            </div>
          </div>
        

         <div v-show="child_cur==2">
             <div class="flex case-child" >  
            </div>
            <div class="showTab">
            <ul class="showTab-ul">
                <li class="showTab-li">
                  <casePart></casePart>
               </li>
                </ul>
            </div>
          </div>


           <div v-show="child_cur==3">
             <div class="flex case-child" >  
            </div>
            <div class="showTab">
            <ul class="showTab-ul">
                <li class="showTab-li">
                  <caseMine></caseMine>
               </li>
                </ul>
            </div>
          </div>

           <div v-show="child_cur==4">
             <div class="flex case-child" >  
            </div>
            <div class="showTab">
            <ul class="showTab-ul">
                <li class="showTab-li">
                  <empower></empower>
               </li>
                </ul>
            </div>
          </div>
        </el-tab-pane>
      
        <!-- <el-tab-pane label="利益检索" name="second">配置管理</el-tab-pane>-->
                
        </el-tabs> 
    </div>

</template>
<script>
import store from '../../vuex/store'
import empower from './caseChild/caseEmpower'
import caseAllList from './caseChild/caseAllList'
import casePart from './caseChild/casePart'
import caseMine from './caseChild/caseMine'
import caseBranch from './caseChild/caseBranch'
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
        arr:[{Item_Name:'所有案件'},{Item_Name:'分所案件'},{Item_Name:'部门案件'},{Item_Name:'我的案件'},{Item_Name:'授权案件'}], 
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
        //  console.log(res)
        //  this.arr = res.data
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
      casePart,
      empower,
      caseBranch
    },
  };
</script>
<style>
@import '../../assets/sass/main.css';
</style>


