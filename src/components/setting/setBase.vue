<template>
    <div id="case" class="case">
            <div class="flex title-case"><i class="el-icon-service"></i><p>基础数据</p></div>
                        <div>
                             <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
                              <el-tab-pane :label="v.title" :name="'name'+i" v-for="(v,i) in arr" :key="i">
                             
                              <div v-show="child_cur==0" class="bar">
                                                <div class="case-child-end1 flex">
                                                <div> <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>新建案例</el-button></div>
                                                </div>
                                                <div class="showTab">
                                                <ul class="showTab-ul">
                                                <li class="showTab-li">
                                                <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                                                <el-table-column prop="id" label="id" width="150"></el-table-column>
                                                <el-table-column prop="name" label="名称" width="150"> </el-table-column>
                                                <el-table-column prop="power" label="power" width=""> </el-table-column>
                                                <el-table-column label="操作" width="150">
                                                <template slot-scope="scope">
                                                <span @click="editInfo(scope.row.id)" style="color:red;cursor:pointer">编辑</span>
                                                <span style="color:red;cursor:pointer"> 删除</span>
                                                </template>
                                                </el-table-column>    
                                            </el-table>
                                            <div class="block flex">
                                            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                                            :page-sizes="[1, 5, 10]" :page-size="numPage"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                                            </el-pagination>
                                            </div>
                                            </li>
                                            </ul>
                                        </div>
                              </div>
                              <!-- cur = 1 -->
                                 <div v-show="child_cur==1" class="bar">
                                                <div class="case-child-end1 flex">
                                                <div> <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>新建案例</el-button></div>
                                                </div>
                                                <div class="showTab">
                                                <ul class="showTab-ul">
                                                <li class="showTab-li">
                                                <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                                                <el-table-column prop="id" label="id" width="150"></el-table-column>
                                                <el-table-column prop="name" label="名称" width="150"> </el-table-column>
                                                <el-table-column prop="power" label="power" width=""> </el-table-column>
                                                <el-table-column label="操作" width="150">
                                                <template slot-scope="scope">
                                                <span @click="editInfo(scope.row.id)" style="color:red;cursor:pointer">编辑</span>
                                                <span style="color:red;cursor:pointer"> 删除</span>
                                                </template>
                                                </el-table-column>    
                                            </el-table>
                                            <div class="block flex">
                                            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                                            :page-sizes="[1, 5, 10]" :page-size="numPage"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                                            </el-pagination>
                                            </div>
                                            </li>
                                            </ul>
                                        </div>
                              </div>
                              <!-- cur = 2 -->
                                 <div v-show="child_cur==2" class="bar">
                                                <div class="case-child-end1 flex">
                                                <div> <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>新建案例</el-button></div>
                                                </div>
                                                <div class="showTab">
                                                <ul class="showTab-ul">
                                                <li class="showTab-li">
                                                <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                                                <el-table-column prop="id" label="id" width="150"></el-table-column>
                                                <el-table-column prop="name" label="名称" width="150"> </el-table-column>
                                                <el-table-column prop="power" label="power" width=""> </el-table-column>
                                                <el-table-column label="操作" width="150">
                                                <template slot-scope="scope">
                                                <span @click="editInfo(scope.row.id)" style="color:red;cursor:pointer">编辑</span>
                                                <span style="color:red;cursor:pointer"> 删除</span>
                                                </template>
                                                </el-table-column>    
                                            </el-table>
                                            <div class="block flex">
                                            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                                            :page-sizes="[1, 5, 10]" :page-size="numPage"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                                            </el-pagination>
                                            </div>
                                            </li>
                                            </ul>
                                        </div>
                              </div>
                              </el-tab-pane>
                            </el-tabs>  
                         </div>
                     
            </div>

</template>
<script>
import store from '../../vuex/store'
  export default {
    data() {
      return {
        activeName:'name0',
        selectOneId:1,
        numPage:10,
        currentPage4: 1,
        total:1,
        child:0,
        child_cur:0,
        tableData: [
        {id:1,name:'管理员',power:'权限'},
        {id:1,name:'管理员',power:'权限'},
        {id:1,name:'管理员',power:'权限'},
        {id:1,name:'管理员',power:'权限'},
        {id:1,name:'管理员',power:'权限'}
        ],
        arr:[
            {title:'角色与权限设置'}, {title:'角色与权限设置'},{title:'角色与权限设置'}
        ],
        value: '',
        value5: '',
      };
    },
    methods: {
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
      },
      editInfo(id){

      },
         handleClick(tab, event) {
        this.child_cur = tab.index
        // console.log(tab.index)
        // console.log(this.child_cur)
        // console.log(tab,event);
      },
    },
    mounted(){
      
    },
    components:{
      
    },
   　filters:{
      getTime(time){
          return time.substring(0,10)
      }
　　　　}
  };
</script>
<style>
@import '../../assets/sass/main.css';
.case-child-end1{
    justify-content: flex-end;
    margin-top: 20px;
}

.el-tabs__header{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
              border-bottom: 1px solid #ccc;
                  height: 40px;
                    margin-top: 20px;
        }
        .el-tabs__nav-wrap{
              border-bottom: 1px solid #ccc;

        }
     
</style>


