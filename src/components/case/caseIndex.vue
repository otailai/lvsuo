 <template>
 
    <div id="case" class="case"> 
         <div class="flex">
                <p>所在位置：</p>
                <p>案件管理</p>
                <p><i class="el-icon-arrow-right"></i></p>
                <P v-for="(v,i) in arr" :key="i+'a'" v-show="$store.state.case.child_id  == i">
                    {{v.Item_Name}}
                </P>
                <!-- <p v-show="child_cur == 0">律所案件</p>
                 <p v-show="child_cur == 1">分所案件</p>
                  <p v-show="child_cur == 2">部门案件</p>
                   <p v-show="child_cur == 3">个人案件</p>
                   <p v-show="child_cur == 4">授权案件</p> -->
            </div>
       <!-- <el-tabs v-model="activeName" @tab-click="handleClick"> -->
           
            <!-- <transition-group tag="ul" name="slide" class="flex_ul"> -->
              <ul class="flex_ul">
            <router-link  tag='li'   v-for="(v,i) in arr" :key="i"  :to="'/index/caseIndex/'+v.Item_Path" class="flex_li" active-class="linkClass" @click.native="handleClick(i)">
            <p>{{v.Item_Name}}</p>
            <span></span>
            </router-link>
            </ul>
          <!-- </transition-group> -->
            <div class="flex case-child" >  
            </div>
            <div class="showTab">
            <ul class="showTab-ul">
              
              <li class="showTab-li">
                <!-- <transition mode="out-in"> -->
                <router-view></router-view>
                <!-- </transition> -->
                 </li>
              </ul>
            </div>
           
        
          
        <!-- </el-tabs>  -->
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
          path:'',
        SearchInput1:'',
        numPage1:1,
        currentPage1:1,
        total1:0,       
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
        arr1:[{title:'所有案件',url:'Index/Show_All_Cases',path:'/index/caseIndex/caseAllList'},{title:'部门案件',url:'Index/Show_Department_Case',path:'/index/caseIndex/caseAllList'},{title:'我的案件',url:'Index/Show_All_Case',path:'/index/caseIndex/caseAllList'}],
        activeName: 'name0',
        index:0,
        cur:2,
        arr:[], 
         input23: '',
        title_show:0,
        tableData: [],
        tableDataShouQuan:[],
        value: '',
        menu_i:0,
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
      ],
    


      };
    },
    methods: {
      handleClick(tab) {
        this.$store.commit('changeCaseChild',tab)
      },
      changeLi(i,url){
        this.$http.get('/yongxu/Base/getUserJudge',{params:{userid:localStorage.getItem('userId'),url:url}}).then((res)=>{
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
      getChildMenu(){
        this.$http.get('/yongxu/Base/User_Two_Menu',{params:{
          Menu_Id:1,
          User_Id:localStorage.getItem('userId')
        }}).then((res)=>{
          this.arr = res.data
          console.log(this.arr)
           var menuArr = []
          for(var i =0 ;i<this.arr.length;i++){
            menuArr[i] ='/index/caseIndex/'+this.arr[i].Item_Path
          }
           this.$router.push({path:'/index/caseIndex/'+this.arr[this.$store.state.case.child_id].Item_Path})
           this.getActiveMenu()
        })
      },
     getActiveMenu(){
        var menuArr = []
        for(var i =0 ;i<this.arr.length;i++){
            menuArr[i] ='/index/caseIndex/'+this.arr[i].Item_Path
        }
        var i =menuArr.indexOf(this.$route.path)
        this.menu_i = i
        this.activeName = 'name'+i
      
     },
      searchData(){
        this.child = 1
      },
    },
    mounted(){
      this.getChildMenu()
         
    },
    activated() {
     // this.getChildMenu()
    },
    watch:{
        
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
.flex_ul{
  width: 100%;
  display: flex;
  flex: row;
  justify-content: center;
  height: 40px;
  line-height: 40px;
}
.flex_li{
  display: flex;
  color: #333333;
  font-size: 14px;
  width:90px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

.flex_li p{
   cursor: pointer;
}

.linkClass{
      color: #7E2C2E;
}
.linkClass p {
      color: #7E2C2E;
      display: flex;
}
.linkClass  span{
  display: block;
  width: 70px;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: 3px;
  background: #7E2C2E;
}
   .v-enter,.v-leave-to{
            opacity:  0;/*透明度*/
            transform: translateX(150px);
        }
         /*入场(离场)动画的时间段   */
        .v-enter-active,.v-leave-active{
            transition: all 0.8s ease;

        }
        .my-enter,.my-leave-to{
            opacity:  0;/*透明度*/
            transform: translateY(70px);
        }
        .my-enter-active,.my-leave-active{
            transition: all 0.8s ease;

        }
</style>


