<template>
    <div id="case" class="case">
            <div class="flex title-case">
               <div class="add-top flex">
                <p>所在位置：</p>
                <p>设置</p>  
                <p><i class="el-icon-arrow-right"></i></p>
                <p>权限管理</p>
            </div>
            </div>
                        <div style="margin-top:30px;">
                            <!-- <ul class="case-ul">
                                <li class="case-li">
                                    <p>角色与权限设置</p>
                                </li>
                            </ul> -->
                             <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
                              <el-tab-pane :label="v.title" :name="'name'+i" v-for="(v,i) in arr" :key="i">

                              <div v-show="child_cur==0" class="bar">
                                                <div class="case-child-end1 flex">
                                                <div> <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>添加角色</el-button></div>
                                                </div>
                                                <div class="showTab">
                                                <ul class="showTab-ul">
                                                <li class="showTab-li">
                                                <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                                                <el-table-column prop="Id" label="ID" width="150"></el-table-column>
                                                <el-table-column prop="Rule_Name" label="名称" width="150"> </el-table-column>
                                                <el-table-column prop="Item_Name" label="权限" width="" :show-overflow-tooltip="true"> </el-table-column>
                                                <el-table-column label="操作" width="150">
                                                <template slot-scope="scope">
                                                <button @click="editInfo(scope.row.Id)" class="btn-caozuo">编辑</button>
                                                <button class="btn-caozuo" @click="editInfo(scope.row.Id)"> 删除</button>
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
                 <el-dialog  :visible.sync="dialogFormVisible" :append-to-body='true' top="300px" width="800px"> 
                     <div class="name_div flex row">
                            <p class="name_p">角色名称</p>
                            <input type="text" class="name_input"/>
                     </div>
                      <div class="check flex row">
                           <p class="check_name">权限</p>
                           <div class="check_box flex column">
                              <el-tree
                                    :data="data"
                                    show-checkbox
                                    node-key="id"
                                    :default-expanded-keys="[2, 3]"
                                    :default-checked-keys="[5]"
                                    :props="defaultProps">
                                </el-tree>

                                 
                                 
                           </div>
                     </div>
                        <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible = false">取 消</el-button>
                          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                        </div>
                         <div slot="title" class="dialog-title">
                     <div class="dialogFormVisivleHeader_left flex"></div>
                    </div>
                      </el-dialog>
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
        numPage:5,
        currentPage: 1,
        dialogFormVisible:false,
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
            {title:'角色与权限设置'}, {title:'角色与权限设置1'}
        ],
        value: '',
        value5: '',
        data: [
          {
          id: 1,
          label: '一级 1',
               children: [{
                   id: 4,
                   label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, 
                        {
                          id: 10,
                          label: '三级 1-1-2'
                        }]
                    }]
            },
            {
          id: 2,
          label: '一级 2',
          children: [
                {
                id: 5,
                label: '二级 2-1'
                },
              {
                id: 6,
                label: '二级 2-2'
              }
            ]
            },
             {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
         defaultProps: {
          children: 'children',
          label: 'label'
        }
        }

    },
    methods: {
       handleSizeChange(val) {
         this.numPage = val
         this.getPowerList()
         console.log(`每页 ${ this.numPage} 条`);
      },
      handleCurrentChange(val) {
        console.log(val)
        this.currentPage = val
        this.getPowerList()

        console.log(`当前页: ${this.currentPage}`);
      },
      toAdd(){
        this.dialogFormVisible = true
      },
      lineCilck(row, event, column){
            console.log(row, event, column)
      },
      getPowerList(){ 

         this.$http.get('/yongxu/Install/Show_Role_Permissions',{params:{
           Display_Page_Number:this.numPage,
           PageNumber:this.currentPage,
         }}).then((res)=>{
           this.tableData = res.data.Role_Information
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
      this.getPowerList()
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
    justify-content: flex-start;
    margin-top: 20px;
}
.flex{
  display: flex;
}
.row{
  flex-direction: row;
}
.column{
  flex-direction: column;
}

.el-tabs__header{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
              /* border-bottom: 1px solid #ccc; */
                  height: 40px;
                    margin-top: 20px;
        }
        .el-tabs__nav-wrap{
              /* border-bottom: 1px solid #ccc; */

        }
     
     
</style>


