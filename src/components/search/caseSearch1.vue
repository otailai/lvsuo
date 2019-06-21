 <template>
    <div id="case" class="case"> 
      <div class="flex">
                <p>所在位置：</p>
                <p>利益检索</p>
                 
            </div>
                 
            <!-- <div class="flex case-child2">
                    <div class="input-search flex">
                      <i class="el-icon-search"></i>
                      <input placeholder="请输入关键词搜索"   class="case-input"/>
                    </div>
            </div> -->

            <!-- <div class="flex case-child3" style="margin-top:30px;">
                  <div class="search-div flex">
                    <div class="input-search flex">
                      <i class="el-icon-search ii"></i>
                     <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input"/>
                      <button class="case-button" @click="getSeachList()"><i class="el-icon-search"></i></button>
                    </div>  
            </div>                -->
            
                      <div class="search-table">
                         <div class="showNum">共检测到：{{total}}条结果</div>
                             <div class="closeBox">
                                 <span @click="closeBox()" class="flex">
                                    <i class="el-icon-close" ref="icon_right"></i>
                         </span>
                        </div>
                      <el-table :data="searchList" border style="width: 100%"  @row-click="lineCilck">
                      <el-table-column prop="Case_No" label="案件编号" width=""></el-table-column>
                     
                      <el-table-column  label="案件名称" width="" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <!-- <span v-if="scope.row.Case_Name.indexOf(SearchInput) != -1" style="color:red">{{scope.row.Case_Name}}</span> -->
                            <span>{{scope.row.Case_Name}}</span>
                        </template>
                      </el-table-column>
                    <el-table-column  label="经办律师" width="" :show-overflow-tooltip="true"> 
                       <template slot-scope="scope">
                            <span v-if="scope.row.Staff_Name.indexOf($route.params.Staff_Name) != -1" style="color:red">{{scope.row.Staff_Name}}</span>
                            <span v-else>{{scope.row.Staff_Name}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="Staff_No" label="律师编号" width="" :show-overflow-tooltip="true">

                    </el-table-column>
                    <el-table-column  label="对方当事人姓名" width="130" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span v-if="scope.row.Party_Name.indexOf($route.params.partyname) != -1" style="color:red">{{scope.row.Party_Name}}</span>
                            <span v-else>{{scope.row.Party_Name}}</span>
                        </template>
                       </el-table-column>
                    <el-table-column  label="客户名称" width="" :show-overflow-tooltip="true"> 
                        <template slot-scope="scope">
                            <!-- <span v-if="scope.row.Customer_Name_Zh.indexOf(SearchInput) != -1" style="color:red">{{scope.row.Customer_Name_Zh}}</span> -->
                            <span>{{scope.row.Customer_Name_Zh}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="Customer_Number" label="客户编号" width="" :show-overflow-tooltip="true"> </el-table-column>
                     <el-table-column prop="Value" label="案件类别" width="" :show-overflow-tooltip="true"> </el-table-column>
                      </el-table>
                         <div class="btn_box11">  
                        <button class="search1_btn btn0" @click="passCase()">审核通过</button> <button class="search1_btn btn1" @click="noPassCase()">不通过</button>
                </div>
                    </div>
             
             <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[20,50,100]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                   </el-pagination>
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

      };
    },
    methods: {
      getSeachList(){
        // this.SearchInput = this.$store.state.search.searchInput
        this.$http.get('/yongxu/Retrieval/Show_Interest',{params:{
           Id:this.$route.params.Id, 
           Display_Page_Number:this.pageNum,
           PageNumber:this.currentPage,
           Staff_Name:this.$route.params.Staff_Name,
           Party_Name:this.$route.params.partyname,
        }}).then((res)=>{
            console.log(res)
            this.searchList = res.data.Show_Interest
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
        closeBox(){
                //this.$router.push('/index/caseIndex')
                this.$router.push({path:`/index/auditingIndex/caseAuditing`})
            },
              noPassCase:function(id,type){
         this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
                 //console.log(res)
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
              if(this.$route.params.type != 0){
                this.$message({
                     message:'操作失败，此案件状态不需操作', 
                     type:'warning'
                 });
                return false
            }
          this.$confirm('此操作将使此案件不通过, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            if(res.data != 2){
                done();
                return false
            }
           this.$http.get('/yongxu/Toexamine/Upd_Case_Auditfail',{params:{
                 User_Id:localStorage.getItem('userId'),
                 Id:this.$route.params.Id,
          }}).then((res)=>{
              if(res.data == true){
                    this.$message({
                    message:'操作成功,此案件审核不通过',
                    type:'success'
                });
                
                this.AuditLog(this.$route.params.Id,1,2)
                this.closeBox()
                return false
              }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
                 }
              })
      },
       passCase:function(){
         this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
                 console.log(res)
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
                      if(res.data != 2){
                          done();
                        return false
                      }
                    if(this.$route.params.type != 0){
                     this.$message({
                     message:'操作失败，此案件状态不需操作',
                     type:'warning'
                     });
                     return false
                      }
                  this.$confirm('此操作将使此案件通过, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                    this.$http.get('/yongxu/Toexamine/Upd_Case_Aubitadopt',{params:{
                        User_Id:localStorage.getItem('userId'),
                        Id:this.$route.params.Id,
                  }}).then((res)=>{
                      if(res.data == true){
                            this.$message({
                            message:'操作成功，此案件审核通过',
                            type:'success'
                        });
                        this.AuditLog(this.$route.params.Id,1,1)
                        this.closeBox()
                        return false
                      }
                  }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消操作'
                  });          
                });
                })
                
                        }
                      })
      },
        //添加日志
      AuditLog:function(id,type,Findings_Audit,){
        this.$http.get('/yongxu/Toexamine/Add_Audit_Log',{params:{Identification:id,Audit_Type:type,Findings_Audit:Findings_Audit,User_Id:localStorage.getItem('userId')}}).then((res)=>{
         
            if(res.data == true){
                   //console.log(res)
            }else{
              //console.log('日志添加失败')
            }
        })
      },
      searchData(){
      
        this.getSeachList();
      }
    },

    mounted(){
      this.getSeachList()
      
    },
    components:{
   
    },
    watch:{
      
    }
  };
</script>
<style>
@import '../../assets/sass/main.css';
.closeBox{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.closeBox i{
        font-size: 28px; 
        margin-right: 10px;
    }
.btn_box11{
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.btn_box11 .search1_btn{
  cursor: pointer;
  border-radius: 5px;
  margin-left: 20px;
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  outline: none;
  border:none;
}
.btn0{
    background: #7E2C2E;
}
.btn1{
  background: #A92A2E;
}
</style>


