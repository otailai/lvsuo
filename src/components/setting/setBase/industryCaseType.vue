<template>
    <div>
           <div class="case-child-end1 flex">
                                                <div> <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>添加类型</el-button></div>
                                                </div>
                                                <div class="showTab">
                                                <ul class="showTab-ul">
                                                <li class="showTab-li">
                                                <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                                                <el-table-column prop="Id" label="ID" width="150"></el-table-column>
                                                <el-table-column prop="Category_Name" label="名称" width="150"> </el-table-column>
                                                <el-table-column prop="type" label="级别" width="430"> 
                                                    <template slot-scope="scope">
                                                          <p v-if="scope.row.type==1">一级类型</p>
                                                           <p v-if="scope.row.type==2">二级类型</p>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column label="操作" width="150">
                                                <template slot-scope="scope">
                                                <button @click="editInfo(scope.row.Id)" class="btn-caozuo">编辑</button>
                                                <button class="btn-caozuo"> 删除</button>
                                                </template>
                                                </el-table-column>    
                                            </el-table>
                                            <div class="block flex">
                                            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                                            :page-sizes="[1, 5, 10]" :page-size="numPage"  layout="total, sizes, prev, pager, next, jumper" :total="total">
                                            </el-pagination>
                                            </div>
                                            </li>
                                            </ul>
                                        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData:[],
            numPage:5,
            currentPage:1,
            total:0,
        }
    },
    methods:{
          handleSizeChange(val) {
         this.numPage = val
         this.getBaseCaseTypeList()
         console.log(`每页 ${ this.numPage} 条`);
      },
      handleCurrentChange(val) {
        console.log(val)
        this.currentPage = val
        this.getBaseCaseTypeList()

        console.log(`当前页: ${this.currentPage}`);
      },
      toAdd(){
        this.$router.push({path:'/index/caseAdd'})
      },
      lineCilck(row, event, column){
            console.log(row, event, column)
      },
      getBaseCaseTypeList(){ 

         this.$http.get('/yongxu/Install/Case_Type',{params:{
           Display_Page_Number:this.numPage,
           PageNumber:this.currentPage,
         }}).then((res)=>{
           this.tableData = res.data.Get_Case_Type
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
        this.getBaseCaseTypeList()
    }
}
</script>
<style>
@import '../../../assets/sass/main.css';
</style>


