<template>
    <div id="case" class="case">
            <div>
              <div class="flex title-case"><i class="el-icon-service"></i><p>组织架构</p></div>
            <div class="flex case-child" >  
                <div class="case-child-end flex">
                     <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>新建部门</el-button>
                      <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>添加成员</el-button>
                </div>
            </div>
            
            <div class="showTab">
            <ul class="showTab-ul">
          
              <li class="showTab-li">
        
                 <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="name" label="案件编号" width=""></el-table-column>
                    <el-table-column prop="name" label="案件名称" width=""> </el-table-column>
                     <el-table-column prop="name" label="客户名称" width=""> </el-table-column>
                      <el-table-column prop="name" label="案件类别" width=""> </el-table-column>
                       <el-table-column prop="name" label="承办律师" width=""> </el-table-column>
                          <el-table-column prop="date" label="合同起止日期" width=""> </el-table-column>
                             <el-table-column prop="date" label="立案日期" width=""> </el-table-column>
                        <el-table-column prop="address" label="立案状态"> </el-table-column>
                </el-table>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                 :page-sizes="[100, 200, 300, 400]" :page-size="100"  layout="total, sizes, prev, pager, next, jumper" :total="400">
                   </el-pagination>
                </div>
                  </li>
                </ul>
            </div>
            </div>

          <el-dialog  :visible.sync="dialogFormVisible" :modal-append-to-body='false' :modal='false' top="100px">
          <div slot="title" class="dialog-title">
            <p>查看成员</p>
          </div>
                        <el-form :model="form">
                        <el-form-item label="姓名" :label-width="formLabelWidth">
                          <el-input v-model="form.name" autocomplete="off" class="el-select1"></el-input>
                        </el-form-item>
                        <el-form-item label="职务" :label-width="formLabelWidth">
                          <el-input v-model="form.name" autocomplete="off" class="el-select1"></el-input>
                        </el-form-item>
                      
                        <el-form-item label="部门" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域" class="el-select1">
                          <el-option label="区域一" value="shanghai"></el-option>
                          <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                         </el-form-item>
                      
                        <el-form-item label="手机" :label-width="formLabelWidth">
                          <el-input v-model="form.name" autocomplete="off" class="el-select1"></el-input>
                        </el-form-item>
                        
                        <el-form-item label="微信" :label-width="formLabelWidth">
                         <a href="#" style="color:red">扫码绑定</a>
                        </el-form-item>

                          <el-form-item label="状态" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域" class="el-select1">
                          <el-option label="区域一" value="shanghai"></el-option>
                          <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                         </el-form-item>

                        <el-form-item label="备注" :label-width="formLabelWidth">
                          <el-input v-model="form.name" autocomplete="off" class="el-select1"></el-input>
                        </el-form-item>
                         
                           <el-form-item label="角色" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域" class="el-select1">
                          <el-option label="区域一" value="shanghai"></el-option>
                          <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                         </el-form-item>
                   
                  </el-form>
          <div slot="footer" class="dialog-footer">
           <div class="flex dialogFormVisivleFooter">
              <el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
           </div>
          </div>
        </el-dialog>

    </div>
</template>
<script>
import store from '../../vuex/store'
import { fail } from 'assert';
  export default {
    data() {
      return {
        activeName: 'name0',
       currentPage4: 4,
        index:0,
          cur:0,
          arr:[{title:'我的客户'},{title:'事务所客户'}],
         input23: '',
          tableData: [{
          id:1,
          date: '2016-05-02',
          name: '王小虎',
          address: '立案'
        }, {
           id:2,
          date: '2016-05-04',
          name: '王小虎',
          address: '立案'
        }, {
           id:3,
          date: '2016-05-01',
          name: '王小虎',
          address: '立案'
        }, {
           id:4,
          date: '2016-05-03',
          name: '王小虎',
          address: '立案'
        }],
         options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value5: '',
        dialogFormVisible:false,
        formLabelWidth:'',
            form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
       
      
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
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      toAdd(){
        this.$router.push({path:'/index/caseAdd'})
      },
      lineCilck(row, event, column){
    console.log(row, event, column)
    this.dialogFormVisible=true;
      },
      getChildMenu(){
        this.$http.get('/api/data').then((res)=>{
        this.arr = res.data[3].children
        })
      },
      searchData(){
        this.child = 1
      }
    },
    mounted(){
      this.getChildMenu()
    },
    components:{
      
    }
  };
</script>
<style>
@import '../../assets/sass/main.css';
.title-case{
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}
.el-select1{
  width: 80%;
}
.dialogFormVisivleFooter{
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
}
</style>


