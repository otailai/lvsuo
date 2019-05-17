<template>
    <div id="case" class="case">
     <div class="add-top flex">
                <p>所在位置：</p>
                <router-link to='/index/auditingIndex' tag="a">文书</router-link>
                <p><i class="el-icon-arrow-right"></i></p>
                <p>资料库</p>
            </div>
    
       <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
        
           <!-- <el-tab-pane :label="v.title" :name="'name'+i" v-for="(v,i) in arr" :key="i"> -->
         
            <div v-show="child_cur==0">
          
            <div class="flex case-child" >  
           
              <div class="case-child-first flex">
                <p class="isactive">资料库</p>
              </div>
                
                <div class="case-child-end flex">
                    <div class="input flex">
                      <input placeholder="请输入关键词搜索"  v-model="searchInput" class="case-input"/>
                      <button class="case-button" @click="searchData"><i class="el-icon-search"></i></button>
                    </div>
                      <el-button type="danger" round @click="openNew()"><i class="el-icon-plus"></i>新建文档</el-button>
                </div>

            </div>
            <div class="showTab">
            <ul class="showTab-ul">
          
              <li class="showTab-li" v-show="cur==0">

                 <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                    <el-table-column prop="Id" label="序号" width=""></el-table-column>
                    <el-table-column prop="File_Name" label="文档名称" width=""> </el-table-column>
                     <el-table-column prop="Postfix" label="文档类型" width=""> </el-table-column>
                      <el-table-column prop="Staff_Name" label="更新人员" width=""> </el-table-column>
                       <el-table-column  label="创建日期" width="">
                           <template slot-scope="scope">
                              <p  v-if="!scope.row.Date_Created" style="color:#ccc">暂无</p>
                            <p v-else>{{scope.row.Date_Created | getTime}}</p>
                           </template>
                          </el-table-column>
                          <el-table-column  label="更新日期" width=""> 
                                <template slot-scope="scope">
                              <p  v-if="!scope.row.Update_Date" style="color:#ccc">暂无</p>
                            <p v-else>{{scope.row.Update_Date | getTime}}</p>
                           </template>
                          </el-table-column>
                             <el-table-column prop="Size" label="文件大小" width=""> </el-table-column>
                        <el-table-column label="操作"> 
                              <template slot-scope="scope">   
                             <a :href="'/yongxu//Base/download?filename='+scope.row.File_Path">下载</a>
                              </template>
                        </el-table-column>
                </el-table>
                 <div class="block flex">
                  <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                  :page-sizes="[5,10,15,20]" :page-size="numPage"  layout="total, sizes, prev, pager, next, jumper" :total="PageCount">
                   </el-pagination>
                </div>
                  </li>
                </ul>
            </div>
            </div>
            
       
      
        
        <!-- </el-tab-pane> -->
      
        <!-- <el-tab-pane label="利益检索" name="second">配置管理</el-tab-pane>-->
                
        </el-tabs> 
        <!-- 弹出对话框 -->
    <el-dialog  :visible.sync="dialogFormVisible" :modal-append-to-body='false' :modal='false' top="300px" width="600px">
      <div class="dialogFormVisible flex">
          <div class="dialogFormVisivleInput flex">
              <p>文档名称</p><div class="dialogFormVisivleInput_right"><input type="text" class="common-input" v-model="fileName"></div>
          </div>
           <div class="dialogFormVisivleFile flex">
              <!-- <div class="dialogFormVisivleFile1">
                 <img-inputer v-model="imgFile" theme="light" size="large" :on-change="chooseImg" type="file" accept="image/png,image/gif,image/jpeg" placeholder="将文件拖到此处，或点击上传,只能上传jpg/png文件，且不超过500kb"/>  
              </div> -->
                <el-upload
                    class="upload-demo"
                    drag
                    action="http://192.168.0.107:8080/Base/uploadRawFile"
                    :data='nameData'
                    :on-success="successFile"
                    :on-progress="progressFile"
                    :before-upload="beforeFile"
                    :on-error="errorFile"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    
                  </el-upload>
          </div>
          
      </div>
  
   <div slot="title" class="dialog-title">
        <div class="dialogFormVisivleHeader_left flex"><p>案件文书</p>/<p>我的文档</p>/<p>新建文档</p></div>
  </div>
  <div slot="footer" class="dialog-footer">
    <div class="dialogFormVisivleFooter flex">
    <el-button type="primary" @click="saveDoc()">保存</el-button>
    </div>
  </div>
</el-dialog>
    </div>
</template>
<script>
import store from '../../vuex/store'
import { constants } from 'fs';
  export default {
    data() {
      return {
        //分页
        PageCount:0,
        currentPage:1,
        numPage:5,
        //搜索
        searchInput:'',
        //上传
          code:'',
            fileName:'',
            nameData:{
                 File_Name:'',
            },
            File_Name:'',
            fileName1:'',
            Suffix_Name:'',
            size:'',
      //
        placeholder_text:'',
        imgFile:'',
          dialogFormVisible: false,
        child:0,
        child_cur:0,
        arr:[],
        arr1:[{title:'我的客户'},{title:'事务所客户'}],
        activeName: 'name0',
       currentPage4: 4,
        index:0,
          cur:0,
        //   arr:[{title:'我的客户'},{title:'事务所客户'}],
        //  input23: '',
        tableData:[],
        //   tableData: [{
        //   id:1,
        //   name:'XX文档',
        //   type:'XX类型',
        //   renyuan:'刘德华',
        //   date:'2018-04-05',
        //   size:'50K'

        // }],
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
         this.numPage = val
         this.getTableData()
         console.log(`每页 ${ this.numPage} 条`);
      },
      handleCurrentChange(val) {
        console.log(val)
        this.currentPage= val
        this.getTableData()

        console.log(`当前页: ${this.currentPage}`);
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
      },
      openNew(){
        this.dialogFormVisible = true
      },
      downLine(id){
        console.log(id)
      },
      // 图片上传
        chooseImg:function() {      
            let file = this.imgFile 
            console.log(file)
           if(file==null||file==undefined){
                this.$message({
                    message:'图片未上传',
                    type:'warning'
                });
                return false  
        }
         var data=new FormData();
          data.append("file",file);
          this.$http.post('/yongxu/Base/uploadRawFile',data,{
            headers:{'Content-Type':'multipart/form-data'}  
          }).then((res)=>{
            console.log(res)
          })
	          
          },
             successFile(res){
            console.log(res)
            if(res.code == 200){
                    this.code = 200
                    this.File_Name = res.File_Name
                    this.Suffix_Name =res.Suffix_Name
                    this.fileName1 = res.fileName
                    this.size = res.size
                    console.log(this.fileName1)
                   this.$message({
                    message:res.message,
                    type:'success'
                });  
            } 
          },
          errorFile(){
              this.$message({
                    message:'上传失败',
                    type:'warning'
                });  
          },
          progressFile(){
           
          },
          beforeFile(){
            if(this.fileName == ''|| this.fileName==null){
               this.$message({
                    message:'文档名称不允许为空',
                    type:'warning'
                });
                return false  
            }else{
              this.nameData.File_Name = this.fileName
            }
          },
          getTableData(){
            this.$http.get('/yongxu/Document/Inquiry_Document',
            {
              params:{
                  Parameter:this.searchInput,
              Display_Page_Number:this.numPage,
              PageNumber:this.currentPage
              }
            }).then((res)=>{
                 this.tableData = res.data.Document
                 this.PageCount = res.data.PageCount
                 console.log(res)
            })
          },
          searchData(){
             this.getTableData()
          },
            //保存上传文件
            saveDoc(){
            if(this.fileName == ''|| this.fileName==null){
               this.$message({
                    message:'文档名称不允许为空',
                    type:'warning'
                });
                return false  
                }
                  if(this.code != 200){
               this.$message({
                    message:'请先上传文件',
                    type:'warning'
                });
                return false  
                }
                
                let param  = new URLSearchParams()
                  param.append('User_Id',localStorage.getItem('userId'))
                  param.append('File_Name',this.File_Name)
                  param.append('fileName',this.fileName1)
                  param.append('size',this.size)
                  param.append('Suffix_Name',this.Suffix_Name)
                this.$http.post('/yongxu/Document/Add_Instrument',{
                    User_Id: localStorage.getItem('userId'),
                    File_Name:this.File_Name,
                    fileName:this.fileName1,
                    size:this.size,
                    Suffix_Name:this.Suffix_Name,
                }).then((res)=>{
                    console.log(res)
                    if(res.data == true){
                          this.$message({
                        message:'保存成功',
                        type:'success'
                    });
                     this.dialogFormVisible = false
                    this.getTableData()
                    }
                    else{
                           this.$message({
                        message:'保存失败',
                        type:'warning'
                    });
                    }
                   
                }).catch((err)=>{
                    console.log(err)
                })
            },
         
    },
    mounted(){
      this.getChildMenu()
      this.getTableData()
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
    components:{
      
    }
  };
</script>
<style>
@import '../../assets/sass/main.css';
</style>


