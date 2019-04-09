<template>
    <div id="case" class="case">
     
    
       <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
        
           <el-tab-pane :label="v.title" :name="'name'+i" v-for="(v,i) in arr" :key="i">
         
            <div v-show="child_cur==0">
          
            <div class="flex case-child" >  
           
              <div class="case-child-first flex">
                <p  v-for="(v,i) in arr1" @click="changeLi(i)" :key="i"  :class="{'isactive':cur === i}">{{v.title}}</p>
              </div>
                
                <div class="case-child-end flex">
                    <div class="input flex">
                      <input placeholder="请输入关键词搜索"  v-model="input23" class="case-input"/>
                      <button class="case-button"><i class="el-icon-search"></i></button>
                    </div>
                      <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>新建案例</el-button>
                </div>

            </div>
            <div class="showTab">
            <ul class="showTab-ul">
          
              <li class="showTab-li" v-show="cur==0">
            
              <div class="selectMenu flex">
              <div class="case-type flex">
                 <p>案件类型：</p>
                  <el-select v-model="value" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label"  :value="item.value"> </el-option>
                  </el-select>
                  <el-select v-model="value" placeholder="请选择" style="margin-left: 10px;">
                  <el-option v-for="item in options" :key="item.value" :label="item.label"  :value="item.value"> </el-option>
                 </el-select>
              </div>

               <div class="case-state flex">
               <p>案件状态：</p> 
               <el-select v-model="value" placeholder="请选择" style="margin-left: 10px;">
               <el-option v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value"></el-option>
               </el-select>
               </div>          
              <div class="case-time flex">
               <p>起止时间：</p>
                <el-date-picker
                v-model="value5"
                type="datetimerange"
                :picker-options="pickerOptions2"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
                </el-date-picker>
                </div>
                <button class="dingzhi"><i class="el-icon-download"></i>不顶置</button>
              </div>
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

                  <li class="showTab-li" v-show="cur==1">
              <div class="selectMenu flex">
                    <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
                    <el-table-column prop="address" label="地址"> </el-table-column>
                    </el-table>
              </div>

                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                 :page-sizes="[100, 200, 300, 400]" :page-size="100"  layout="total, sizes, prev, pager, next, jumper" :total="400">
                   </el-pagination>
                </div>
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
          
              <div class="btn"><button class="btn-search" @click="searchData()">搜索数据库</button></div>
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
                         <div class="showNum">共检测到：3条结果</div>
                      <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
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
  export default {
    data() {
      return {
        child:0,
        child_cur:0,
        arr:[],
        arr1:[{title:'所有案件'},{title:'授权案件'}],
        activeName: 'name0',
       currentPage4: 4,
        index:0,
          cur:0,
          arr:[{title:'所有案件'},{title:'授权案件'}],
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
        value5: ''
      
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
      },
      getChildMenu(){
        this.$http.get('/api/data').then((res)=>{
        this.arr = res.data[0].children
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
@import '../../assets/sass/main.css'
</style>


