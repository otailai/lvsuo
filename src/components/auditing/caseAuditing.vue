<template>
    <div>
          
             <div class="selectMenu flex">
              <div class="case-type flex"> 
                 <p>案件类型：</p>
                  <el-select v-model="Casevalue" placeholder="请选择"   @change="getSelectChildeMenu(Casevalue)">
                    <el-option v-for="item in optionMenu" :key="item.Id" :label="item.Category_Name"  :value="item.Id"> </el-option>
                  </el-select>

                  <el-select v-model="Casevalue1" placeholder="请选择" clearable  style="margin-left: 10px;" @change="changeTowValue(Casevalue1)">
                  <el-option v-for="(item,index) in optionChildMenu" :key="index" :label="item.Value"  :value="item.Id"> </el-option>
                 </el-select>
              </div> 

               <div class="case-state flex" style="margin-left:10px;">
               <p>案件状态：</p> 
               <el-select v-model="value" placeholder="请选择" style="margin-left: 10px;" @change="changeStatus(value)"> 
               <el-option v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value"></el-option>
               </el-select>
               </div>      
               <div class="input flex">
                      <input placeholder="请输入关键词搜索"  v-model="SearchInput" class="case-input"/>
                          
                      <button class="case-button" @click="searchContent()"><i class="el-icon-search"></i></button>
                    
                </div>    
                 <button class="dingzhi" @click="clear()">清空</button>
                 <img src="../../assets/img/shuaxin.png" alt="" @click="updateData()" class="shuaxin_btn">
              </div>
          <div class="flex case-child" ></div>
            <div class="showTab">
            <ul class="showTab-ul">
              <li class="showTab-li" v-show="cur==0">
                 <el-table :data="caseArr" border style="width: 100%"  @row-click="lineCilck" :header-cell-style="cellStyle">
                   
                    <el-table-column prop="Case_No" label="案件编号" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Case_Name" label="案件名称" width="" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="Staff_Name" label="主办律师" width="" :show-overflow-tooltip="true"> </el-table-column>
                     <el-table-column prop="Customer_Name_Zh" label="客户名称" width="" :show-overflow-tooltip="true"> </el-table-column>
                      <el-table-column prop="Value" label="案件类别" width="" :show-overflow-tooltip="true"> </el-table-column>
                       <el-table-column prop="Creattime" label="申请日期" width="110" :show-overflow-tooltip="true" sortable>
                        <template slot-scope="scope">
                             <span>{{scope.row.Creattime | getTime}}</span>    
                        </template>   
                                               </el-table-column> 
                          <el-table-column prop="date" label="合同" width="50"> 
                                <template slot-scope="scope"> 
                               <span style="color:red"   @click.stop="open3(scope.row.Id,scope.row.Charging_Method,scope.row.Category_Id)" v-if="scope.row.Source_Contract == 1">
                                 预览
                               </span>
                                 <span style="color:red"  @click.stop="look(scope.row.Id)" v-if="scope.row.Source_Contract == 2">
                                 预览
                               </span>
                              
                              </template>
                          </el-table-column>
    <el-table-column prop="Amount" label="合同金额" width="" :show-overflow-tooltip="true"> </el-table-column>
    <el-table-column prop="Charge_Amount" label="已收金额" width="" :show-overflow-tooltip="true"> </el-table-column>
                             <el-table-column  label="状态" width=""> 
                                    <template slot-scope="scope"> 
                                    <span v-if="scope.row.type == '0'" style="color:red;" @click.stop="jiansuo(scope.row.Party_Name,scope.row.Id,scope.row.Customer_Name_Zh,scope.row.type)">
                                        <!-- {{scope.row.Status}} -->
                                        利益检索
                                  </span>
                                  <span v-if="scope.row.type == '1'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '2'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '3'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '4'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '-2'">{{scope.row.Status}}</span>
                                  <span v-if="scope.row.type == '-1'">{{scope.row.Status}}</span>
                                  </template>
                             </el-table-column>
                        <!-- <el-table-column  label="操作"> 
                          <template  slot-scope="scope">
                              <span @click.stop="noPassCase(scope.row.Id,scope.row.type)" style="cursor:pointer"><i class="el-icon-close" style="font-size: 20px;font-weight: 600;"></i></span>
                              <span @click.stop="passCase(scope.row.Id,scope.row.type)" style="cursor:pointer"><i class="el-icon-check" style="font-size: 20px;font-weight: 600;"></i></span>
                          </template>
                        </el-table-column> -->
                        <el-table-column  label="财务操作" width=""> 
                            <template  slot-scope="scope">
                            <span class="btn-div">
                            <!-- <button @click="open2(scope.row.Id)" style="cursor:pointer" class="btn-caozuo">预览</button> -->
                            
                            <button @click.stop="openDialog(scope.row.Id,scope.row.Charging_Method)" style="cursor:pointer" class="btn-caozuo">收款</button>

                            </span>
                          </template>
                        </el-table-column>
                  </el-table>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                 :page-sizes="[20,50,100]" :page-size="pageNum"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                   </el-pagination>
                </div>
                </li>
                </ul>
            </div>
              <el-dialog  :visible.sync="dialogFormVisibleWord" :modal-append-to-body='false' :modal='false' width="1000px"> 
                          <!-- <iframe :src="'https://view.officeapps.live.com/op/view.aspx?src='+fileUrl"  width='100%' height='1000px' frameborder='1'>
                          </iframe>  -->
                           <iframe :src="'http://file.keking.cn/onlinePreview?url='+fileUrl"  width='100%' height='1000px' frameborder='1'>
                          </iframe> 
                         
              </el-dialog>
               <el-dialog  :visible.sync="dialogFormVisible"  :append-to-body='true'  top="300px" width="800px">
      <div class="dialogFormVisible flex">
         
           <div class="dialogFormVisivleFile flex">
             <el-table :data="makeCollectionsArr">
                <el-table-column property="Payment_Time" label="付款日期" width="" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column property="Charge_Amount" label="收费金额" width=""></el-table-column>
                <el-table-column property="Describe" label="描述" width="" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column   width="50"></el-table-column>
                <el-table-column  label="状态" width="200">
                  <template slot-scope="scope">
                        <span v-if="scope.row.State==1" style="color:red">未收款</span>
                        <span v-if="scope.row.State==2">已收款</span>
                        <button class="btn-ok"   v-if="scope.row.State==1" @click="getMonney(scope.row.Id,scope.row.Charging_Method)">确认收款</button>
                  </template>
                </el-table-column>
               
              </el-table>
          </div>
      </div>
      <div slot="title" class="dialog-title">
        <div class="dialogFormVisivleHeader_left flex"> <p>收费方式-定额收费</p></div>
      </div>
      <div slot="footer" class="dialog-footer">
        <div class="dialogFormVisivleFooter flex">
        </div>
      </div>
      </el-dialog>

  <el-dialog  :visible.sync="dialogFormVisible8"  :append-to-body='true'  top="300px" width="800px">
      <div class="dialogFormVisible flex">
         
           <div class="dialogFormVisivleFile flex">
             <el-table :data="makeCollectionsArr8">
                <el-table-column property="Case_Name" label="案件名称" width="" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column property="Staff_Name" label="律师姓名" width=""></el-table-column>
                <el-table-column property="Value" label="律师职务" width="" :show-overflow-tooltip="true"></el-table-column>
                  <el-table-column  label="费率" width="" :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                      {{scope.row.Rate}}RMB/h
                    </template>
                  </el-table-column>
                <el-table-column  label="状态" width="200">
                  <template slot-scope="scope">
                        <span v-if="scope.row.State==1" style="color:red">未收款</span>
                        <span v-if="scope.row.State==2">已收款</span>
                        <button class="btn-ok"   v-if="scope.row.State==1" @click="getMonney(scope.row.Id,scope.row.Charging_Method)">确认收款</button>
                  </template>
                </el-table-column>
               
              </el-table>
          </div>
      </div>
   <div slot="title" class="dialog-title">
        <div class="dialogFormVisivleHeader_left flex"> <p>收费方式-定时收费</p></div>
  </div>
  <div slot="footer" class="dialog-footer">
    <div class="dialogFormVisivleFooter flex">
    </div>
  </div>
</el-dialog>

  <el-dialog  :visible.sync="dialogFormVisible10"  :append-to-body='true'  top="300px" width="800px">
      <div class="dialogFormVisible flex">
         
           <div class="dialogFormVisivleFile flex">
             <el-table :data="makeCollectionsArr10">
                <el-table-column property="Case_Name" label="案件名称" width="" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column property="Risk_Achievement" label="风险达成条件" width=""></el-table-column>
                  
                <el-table-column  label="状态" width="200">
                  <template slot-scope="scope">
                        <span v-if="scope.row.State==1" style="color:red">未收款</span>
                        <span v-if="scope.row.State==2">已收款</span>
                        <button class="btn-ok"   v-if="scope.row.State==1" @click="getMonney(scope.row.Id,scope.row.Charging_Method)">确认收款</button>
                  </template>
                </el-table-column>
               
              </el-table>
          </div>
      </div>
   <div slot="title" class="dialog-title">
        <div class="dialogFormVisivleHeader_left flex"> <p>收费方式-风险收费</p></div>
  </div>
  <div slot="footer" class="dialog-footer">
    <div class="dialogFormVisivleFooter flex">
    </div>
  </div>
</el-dialog>
  <el-dialog  :visible.sync="dialogFormVisibleWord1" :modal-append-to-body='false' :modal='false' width="1000px">
                        <div v-if="Category_Id == 4">
                            <caseWord :dataWord='dataWord'></caseWord>
                        </div>
                        <div v-if="Category_Id == 1">
                            <caseWord4 :dataWord='dataWord'></caseWord4>
                        </div>
                        <div v-if="Category_Id == 8">
                            <caseWord4 :dataWord='dataWord'></caseWord4>
                        </div>
                      
                </el-dialog>
    </div>
</template>
<script>
import caseWord from '../case/caseWord'
import caseWord4 from '../case/caseWord4'
export default {
    data(){
        return{
                //文件路径
                fileUrl:'',
                cur:0,
                caseArr:[],
                //当前页
                currentPage:1,
                total:0,
                pageNum:20,
                dialogFormVisibleWord:false,
                  dialogFormVisibleWord1:false,
                //搜索
                SearchInput:'',
                Casevalue:'',
                Casevalue1:'',
                Casevalue2:0,
                optionMenu:[],
                optionChildMenu:[],
                  dataWord:{},
                value:'',
                //状态
        options:[
         {value:0,label:'审核中'},{value:1,label:'已审核'},{value:2,label:'已签合同'},{value:3,label:'已结案'},{value:-2,label:'返回修改'},{value:4,label:'待结案'}
        ],
                   // 财务审核
                FinancialAuditArr:[],
                dialogFormVisible:false,
                dialogFormVisible8:false,
                  dialogFormVisible10:false,
                // 收款详情
                makeCollectionsArr:[],//定额
                makeCollectionsArr8:[],//定时
                makeCollectionsArr10:[],//风险
                // sortRule:{prop:'Creattime',order:null},
                //一级案件类型id
                Category_Id:0,

                
        }
    },
    inject:["reload"],
    created(){
      
    },
    methods:{
        cellStyle() {
        return 'border-right: 1px solid #ebeef5'
     },
      updateData:function(){
        this.getCaseArr()
      },
          jiansuo:function(partyname,Id,Customer_Name_Zh,type){
            console.log(Id)
            if(partyname == ''){
                partyname = '无'
            }
            this.$router.push({path:`/index/search1/${partyname}/${Id}/${Customer_Name_Zh}/${type}`})
          },
          openDialog:function(id,Charging_Method){
          if(Charging_Method  == 9){
          this.dialogFormVisible = true
          this.$http.get('/yongxu/Toexamine/Get_Make_Collections',{params:{Id:id,Charging_Method:Charging_Method}}).then((res)=>{
            console.log(res)
           this.makeCollectionsArr= res.data
          })    
          }
            if(Charging_Method  == 8){
          this.dialogFormVisible8 = true
          this.$http.get('/yongxu/Toexamine/Get_Make_Collections',{params:{Id:id,Charging_Method:Charging_Method}}).then((res)=>{
            console.log(res)
           this.makeCollectionsArr8= res.data
          })    
          }
            if(Charging_Method  == 10){
          this.dialogFormVisible10 = true
          this.$http.get('/yongxu/Toexamine/Get_Make_Collections',{params:{Id:id,Charging_Method:Charging_Method}}).then((res)=>{
            console.log(res)
           this.makeCollectionsArr10= res.data
          })    
          }
       
      },
      getMonney:function(id,Charging_Method){
          this.$confirm('此操作将确认收款, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.$http.post('/yongxu/Toexamine/Upd_Confirm_Receipt',
          {Id:id,Charging_Method:Charging_Method,Auditor_Id:localStorage.getItem('userId')}).then((res)=>{
            if(res.data == true){
                  this.$message({
                      message:'收款成功',
                      type:'success'
                  });
                  this.dialogFormVisible = false
                  this.dialogFormVisible8 = false
                  this.dialogFormVisible10 = false
                  this.getCaseArr()
                  this.AuditLog(id,5,1)
              }  else{ 
                  this.$message({
                      message:'收款失败',
                      type:'warning'
                  });
              }
          }).catch((err)=>{
             this.$message({
                      message:'服务器异常',
                      type:'warning'
                  });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        
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
         getCaseArr:function(){
          var statusValue;
          //console.log(this.value)
          if(this.value ===''|| this.value === null){
                statusValue = -3;
          }
         
          else{
              statusValue = this.value
          }
          //console.log(statusValue)
         var userId = localStorage.getItem('userId')
        this.$http.get('/yongxu/Toexamine/Get_Case_Audit',{params:{
          Display_Page_Number:this.pageNum,
          PageNumber:this.currentPage,
          Dic_Id:this.Casevalue2,
          Status:statusValue,
          VagueName:this.SearchInput,
          User_Id:localStorage.getItem('userId'),
          Category_Id:this.Category_Id,
        }}).then((res)=>{
            this.caseArr = res.data.Case_Audit
            this.total = res.data.PageCount
             
        })
      },
         sortChange(column){
       // console.log(column.order)
        if(column.order !== null && column.prop === 'Creattime'){
            var data = []
            for(let i = 0;i<this.caseArr.length;i++){
             
                if(this.caseArr[i].Creattime === null || this.caseArr[i].Creattime === undefined){
                    data.push(this.caseArr[i])
                }else{
                  data.unshift(this.caseArr[i])
                }
            }
            this.caseArr = data
            //console.log(data)
        }
        if(column.order === null){
          this.caseArr = this.caseArr
        }
        this.sortRule.order = column.order
        this.sortRule.prop = column.prop
      },
      //预览html合同
      open3:function(id,type,Category_Id){
        console.log(Category_Id)
        this.$http.get('/yongxu/Index/Case_Details',{params:{Id:id,Type_Id:type}}).then((res)=>{
             this.dataWord = res.data
             this.Category_Id = Category_Id
             this.dialogFormVisibleWord1 = true
        }).catch((err)=>{
          this.$message({
            message:'服务器异常',
            type:'warning'
          })
        })
      },
      //获取二级菜单下拉
      changeTowValue:function(id){
     
      if(id == '' || id ==null){
          this.Casevalue2 = 0
      }else{
        this.Casevalue2 = id
      }
      
       this.getCaseArr()
      },
      //状态查询
      changeStatus:function(id){
         //console.log(id)
         this.value = id
         this.getCaseArr()
      },
      //搜索查询
      searchContent:function(){
       //console.log(this.SearchInput)
       this.getCaseArr()
      },
      //获取一级下拉
        getSelectMenu:function(){
         this.$http.get('/yongxu/Index/GetBoxOne').then((res)=>{
           this.optionMenu = res.data
        })
      },
      //下拉二级下拉查询
       getSelectChildeMenu:function(id){ 
         this.optionChildMenu = ''
         this.Casevalue1 =''
         //console.log(id) 
         this.selectOneId = id
         this.$http.get('/yongxu/Index/GetBoxTwo',{params:{Id:this.selectOneId}}).then((res)=>{
          //console.log(res)
          this.optionChildMenu = res.data
          this.optionChildMenu.push({Id:0,Value:'全部',Category_Id:0})
          this.Category_Id = this.Casevalue
           if(res.data.length===0){
                        this.Casevalue1 = ''
                }else{
                    this.Casevalue1 =0
                    }
          this.changeTowValue(this.Casevalue1)
        })
      },
        clear:function(){
        this.SearchInput = ''
        this.Casevalue2 = 0
        this.value = ''
        this.Casevalue1 = ''
        this.Casevalue = ''
        this.getCaseArr()
        
      },
      handleSizeChange:function(val) {
        //console.log(`每页 ${val} 条`);
        this.pageNum = val
         this.getCaseArr()

      },
      handleCurrentChange:function(val) {
          this.currentPage = val
          this.getCaseArr()
          //console.log(`当前页: ${val}`);
      },
     lineCilck:function(row, event, column){
            //console.log(row, event, column)
               //console.log(row.Charging_Method)
                      this.$router.push({path:`/index/caseEdit/${row.Id}/${row.Charging_Method}`})
                       //this.$router.push({name:'caseEdit',params:{id:row.Id,typeId:row.Charging_Method}})  
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
              if(type != 0){
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
                 Id:id,
          }}).then((res)=>{
              if(res.data == true){
                    this.$message({
                    message:'操作成功,此案件审核不通过',
                    type:'success'
                });
                
                this.AuditLog(id,1,2)
                   this.getCaseArr()

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
      look:function(id){
        this.$http.get('/yongxu/Toexamine/Sel_Url',{params:{
          Case_Id:id
        }}).then((res)=>{
          console.log(res.data)
            this.fileUrl = 'http://cms.kingpound.com:8081'+res.data
        }).then((res)=>{
          this.dialogFormVisibleWord = true
        }).catch((err)=>{
          this.$message({
            message:'服务器异常',
            type:'warning'
          })
        })
      
      },
      passCase:function(id,type){
         this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
                // console.log(res)
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
                    if(type != 0){
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
                        Id:id,
                  }}).then((res)=>{
                      if(res.data == true){
                            this.$message({
                            message:'操作成功，此案件审核通过',
                            type:'success'
                        });
                        this.AuditLog(id,1,1)
                        this.getCaseArr()
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
    
    },
    mounted:function(){
        this.getCaseArr()
        this.getSelectMenu()
    },
    activated(){
       this.getCaseArr()
        this.getSelectMenu()
    },
     filters:{
          getTime:function(time){
        if(time==''||time==null){
            return time
        }else{
          return time.substring(0,10)
        }
          },
    },
     watch:{
    // Casevalue:function(newV,oldV){
    //    this.getSelectChildeMenu(newV)
    // }
     },
       components:{
        'caseWord':caseWord,
         'caseWord4':caseWord4,
    },
    
}
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
.case-child-end{
    flex-direction: row;
    justify-content: flex-end;
}
.selectMenu{
    margin-top: 20px;
}
.shuaxin_btn{
  cursor: pointer;
}
</style>


