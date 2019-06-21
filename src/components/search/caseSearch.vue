 <template>
    <div id="case" class="case"> 
      <div class="flex">
                <p>所在位置：</p>
                <p>案件管理</p>
                <p><i class="el-icon-arrow-right"></i></p>
                <p>检索</p>
                 
            </div>
                 
            <div class="flex case-child2" style="margin-top:30px;" v-show="pageShow==1">
                    <div class="input-search flex">
                      <i class="el-icon-search"></i>
                      <input placeholder="请输入关键词搜索"   class="case-input" v-model="SearchInput"/>
                    </div>

                    <div type="text" class="btn_search_a" @click="getSeachList1()">搜索数据库</div>
            </div>

            <div class="flex case-child3" style="margin-top:30px;" v-show="pageShow==2">
                  <div class="search-div flex">
                    <div class="input-search flex">
                      <i class="el-icon-search ii"></i>
                     <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input"/>
                      <button class="case-button" @click="getSeachList()"><i class="el-icon-search"></i></button>
                      
                    </div>  
                  </div>               
                      <div class="search-table">
                         <div class="showNum">共检测到：{{total}}条结果</div>
                      <el-table :data="searchList" border style="width: 100%"  @row-click="lineCilck">
                      <el-table-column prop="Case_No" label="案件编号" width=""></el-table-column>
                     
                      <el-table-column  label="案件名称" width="" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span v-if="scope.row.Case_Name.indexOf(SearchInput) != -1" style="color:red">{{scope.row.Case_Name}}</span>
                            <span v-else>{{scope.row.Case_Name}}</span>
                        </template>
                      </el-table-column>
                    <el-table-column  label="经办律师" width="" :show-overflow-tooltip="true"> 
                       <template slot-scope="scope">
                            <span v-if="scope.row.Staff_Name.indexOf(SearchInput) != -1" style="color:red">{{scope.row.Staff_Name}}</span>
                            <span v-else>{{scope.row.Staff_Name}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="Staff_No" label="律师编号" width="" :show-overflow-tooltip="true">

                    </el-table-column>
                    <el-table-column  label="对方当事人姓名" width="130" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span v-if="scope.row.Party_Name.indexOf(SearchInput) != -1" style="color:red">{{scope.row.Party_Name}}</span>
                            <span v-else>{{scope.row.Party_Name}}</span>
                        </template>
                       </el-table-column>
                    <el-table-column  label="客户名称" width="" :show-overflow-tooltip="true"> 
                        <template slot-scope="scope">
                            <span v-if="scope.row.Customer_Name_Zh.indexOf(SearchInput) != -1" style="color:red">{{scope.row.Customer_Name_Zh}}</span>
                            <span v-else>{{scope.row.Customer_Name_Zh}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="Customer_Number" label="客户编号" width="" :show-overflow-tooltip="true"> </el-table-column>
                     <el-table-column prop="Value" label="案件类别" width="" :show-overflow-tooltip="true"> </el-table-column>
                      </el-table>
                    </div>
             <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[20,50,100]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                   </el-pagination>
                </div>
          </div>
   
    </div>
</template>
<script>
import store from '../../vuex/store'
  export default {
    data() {
      return {
        //授权案件搜索
        SearchInput:'',
        pageNum:20,
        currentPage:1,
        total:0,       
        searchList:[],
        pageShow:1,

      };
    },
    methods: {
      getSeachList(){
        // this.SearchInput = this.$store.state.search.searchInput
        this.$http.get('/yongxu/Retrieval/Show_Retrieval',{params:{
           Display_Page_Number:this.pageNum,
           PageNumber:this.currentPage,
           parameter:this.SearchInput
        }}).then((res)=>{
            this.searchList = res.data.Retrieval
            this.total = res.data.PageCount
        })
      },
      getSeachList1(){
        console.log('123')
        if(this.SearchInput == ""||this.SearchInput==null ){
          this.$message({
            message:"输入为空",
            type:"warning"
          })
            return false
        }
        this.pageShow = 2
        this.$http.get('/yongxu/Retrieval/Show_Retrieval',{params:{
           Display_Page_Number:this.pageNum,
           PageNumber:this.currentPage,
           parameter:this.SearchInput
        }}).then((res)=>{
            this.searchList = res.data.Retrieval
            this.total = res.data.PageCount
        })
      },
      handleSizeChange(val) {
        this.pageNum = val
         this.getSeachList()

      },
      handleCurrentChange(val) {
          this.currentPage = val
          this.getSeachList()
      },
     //进入详情
       lineCilck(row, event, column){
          this.$router.push({path:`/index/caseEdit/${row.Id}/${row.Charging_Method}`})
           //this.$router.push({name:'caseEdit',params:{id:row.Id,typeId:row.Charging_Method}})  
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
      searchData(){
        if(this.SearchInput == ""||this.SearchInput==null ){
          return false
        }else{
          this.getSeachList();
        }
       
      }
    },
    mounted(){ 
      //this.getSeachList()
    },
    components:{
   
    },
    watch:{
     
      SearchInput:function(newData,old){
         this.currentPage = 1
          if(newData == "" || newData==null){
            // console.log('2222222')
              this.searchList = []
              this.total = 0
          }else{
             this.getSeachList()
          }
      }
    }
  };
</script>
<style scoped>
@import '../../assets/sass/main.css';
.btn_search_a{
  width: 250px;
  height: 40px;
  border-radius: 25px;
  border: 1px solid #7E2C2E;
  margin-top: 50px;
  background: #7E2C2E;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
</style>


