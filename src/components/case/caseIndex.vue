<template>
    <div id="case" class="case">
       <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
          <el-tab-pane label="案例" name="first">
            <div class="flex case-child">  
              <div class="case-child-first flex">
                <p  v-for="(v,i) in arr" @click="changeLi(i)" :key="i"  :class="{'isactive':cur === i}">{{v.title}}</p>
               
              </div>
                <div class="case-child-end flex">
                    <div class="input flex">
                      <input placeholder="请输入内容"  v-model="input23" class="case-input"/>
                      <button class="case-button"><i class="el-icon-search"></i></button>

                    </div>
                      <el-button type="danger" round><i class="el-icon-plus"></i>新建案例</el-button>
                </div>
            </div>

            <div class="selectMenu flex">
             
              <div class="case-type flex">
                 <p>案件类型：</p>
                   <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                 </el-select>
                  <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
               </el-select>
              </div>
               <div class="case-state flex">
               <p>案件状态：</p> 
               <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
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
            <div class="showTab">
                <ul class="showTab-ul">
                  <li class="showTab-li" v-show="cur==0">
                    <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                  </el-table-column>

                  <el-table-column
                    prop="address"
                    label="地址">
                  </el-table-column>
                </el-table>
                 <div class="block flex">
                  <el-pagination
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400">
                </el-pagination>
                
                </div>
                  </li>

                  <li v-show="cur==1">
                    21231
                  </li>
                </ul>
            </div>

          
     
        </el-tab-pane>
        <el-tab-pane label="利益检索" name="second">配置管理</el-tab-pane>
                
        </el-tabs>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
       currentPage4: 4,
        index:0,
          cur:0,
          arr:[{title:'所有案件'},{title:'授权案件'}],
         input23: '',
          tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
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
        console.log(tab, event);
      },
      changeLi(i){
          this.cur = i
         
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  };
</script>
<style>
@import '../../assets/sass/main.css'
</style>


