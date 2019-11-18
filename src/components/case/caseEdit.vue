<template>
    <div class="caseAdd">
            <div class="add-top flex p-l">
                <p>所在位置：</p>
                <router-link to='/index/caseIndex' tag="a">案件管理</router-link>
                <p><i class="el-icon-arrow-right"></i></p>
                <p>案件详情</p>
            </div>
            
             <div class="add-content flex">
                <!-- <div class="add-p flex"><p class="add-p-p">收起</p><i class="el-icon-d-arrow-right"></i></div> -->
                 <div class="add-p flex">
                    <span @click="closeBox()" class="flex">
                   <i class="el-icon-close" ref="icon_right"></i>
                    </span>
                    </div>
                <div class="add-userinfo flex">
                <p class="add-userinfo-p">客户基本信息</p>
                <div class="flex add-userinfo-index">
                <div class="add-userinfo-left flex">
                        <div class="flex"><p class="title">客户编号</p>
                        <p>{{Customer_Number | hideData}}</p>
                         </div>
                    <div class="flex"><p class="title">客户名称(中)</p><p>{{Customer_Name_Zh}}</p></div>
                    <div class="flex"><p class="title">省/市地区</p><p>{{City}}</p></div>
                    <div class="flex"><p class="title">详细地址</p><p>{{Detailed_Address}}</p></div>
                </div>
                  <div class="add-userinfo-left flex">
                        <div class="flex"><p class="title">客户类型</p> 
                        <p>{{Customer_Type}}</p>
                        </div>
                        <div class="flex" v-show="Customer_Type_Id !=3 && Customer_Type_Id !=14 "><p class="title">所属行业</p>
                        <p>{{industry}}</p>
                        </div>
                        <div class="flex" v-show="Customer_Type_Id !=3 && Customer_Type_Id !=14 "><p class="title">职务</p>
                        <p>{{Position}}</p>
                         </div>
                           <div class="flex"><p class="title">联系方式</p>
                        <p>{{Contact_Party}}</p>
                         </div>
                      
                      
                    </div>
                    </div>
                 </div>
                 <div class="add-caseinfo add-userinfo flex">
                        <p class="add-userinfo-p">案件基本信息</p>
                <div class="flex add-userinfo-index">
                <div class="add-userinfo-left flex">
                    <div class="flex"><p class="title">案件类型</p><p>{{Case_type}}</p></div>
                    <div class="flex"><p class="title">案件名称</p><p>{{Case_Name}}</p></div>
                    <div class="flex"><p class="title">案由</p><p>{{Cause_Action}}</p></div>

                </div>
                  <div class="add-userinfo-left flex">
                        <div class="flex"><p class="title f-f">案情简介</p> 
                         <!-- <textarea name="" id="" cols="40" rows="8" class="textarea" v-model="introduce">

                         </textarea> -->
                        <div v-html="introduce"></div>
                        </div>
                    <div class="flex"><p class="title">对方当事人</p><p>{{Party_Name}}</p></div>
                    <div class="flex"><p class="title">受理机关</p><p>{{Receiving_Organ}}</p></div>
                     <div class="flex"><p class="title">标的额</p><p>{{biaodie}}</p></div>

                    </div>
                    </div>
                 </div>
                 
                <div class="add-lawyer-parent flex">
                <div class="add-lawyer  flex">
                <div class="add-lawyer-title flex"> 
                     <p class="add-userinfo-p">律师基本信息</p>
                  
                 </div>  
                <div class="flex  add-lawyer-index">
                    
                    <div class="flex">
                        <p class="title">姓名</p>
                         <p class="title">职务</p>
                           <p class="input-icon"></p>
                    </div>
                    <div class="flex info" v-for="(v,i) in layWerInfoArr" :key="i">
                     <p class="p">{{v.Staff_Name}}</p>
                       <p class="p">{{v.Rule_Name}}</p>
                        <p class="input-icon"></p>
                    </div>                    
                    </div>
                    </div>
                <div class="add-lawyer  lex">
                <div class="add-lawyer-title flex"> 
                     <p class="add-userinfo-p">服务内容</p>
                 </div>  
                <div class="flex  add-lawyer-index" style="width:90%;margin-top:10px;">
                        <!-- <textarea name="" id="" cols="40" rows="8" v-model="Service_Content" class="serve_content"></textarea> -->
                       <div v-html="Service_Content" style="margin-left: 32px;"></div>
                      <!-- <quill-editor v-model="Service_Content" ref="myQuillEditor"  @focus="onEditorFocus($event)" :options="editorOption" style="width:428px;" class="ql-editor"></quill-editor> -->

                        <!-- <quill-editor v-model="Service_Content" ref="myQuillEditor" :options="editorOption"></quill-editor> -->
                </div>
                </div>
                 </div>
                    

                 <div class="add-method flex">
                     <div class="add-method-index flex">
                    <p>收费方式</p>
                     <div class="select-input">
                     <el-input v-model="way" readonly="readonly"/>                   
                    
                     </div>
                     </div>
                     </div> 

                     <div class="add-Pay add-job" v-show="cur==9">

                    <div class="add-Pay-index flex">
                    <div class="add-Pay-index-child">

                    <div class="flex">
                        <p class="title">付款日期</p>
                        <p class="title">收费金额</p>
                        <p class="title">描述</p>
                         <p class="input-icon"></p>
                    </div>
                    <div class="flex" v-for="(v,i) in ChargeInfoArr" :key="i">
                        <p>{{v.Payment_Time}}</p>
                        <p>{{v.Charge_Amount}}</p>
                        <p>{{v.Describe}}</p>
                    <div class="input-icon"></div>
                    </div>
                  
                   </div>  
                
                 </div>
                </div>
                 

                    
                 <div class="add-Pay add-job" v-show="cur==10">
                    <div class="add-Pay-index flex">
                   <div class="add-Pay-index-child">
                    <div class="flex">
                        <p class="title">风险达成条件</p>
                         <p class="input-icon"></p>
                    </div>
                    <div class="flex" v-for="(v,i) in ChargeInfoArr" :key="i">
                     <p style="width:100%">{{v.Risk_Achievement}}</p>
                     <div class="input-icon"></div>
                    </div>
                    
                   </div>  
                    
                 </div>
              </div>
                
                <div class="add-Pay add-job" v-show="cur==8">
                    <div class="add-Pay-index flex">
                   <div class="add-Pay-index-child">
                    <div class="flex">
                        <p class="title">姓名</p>
                        <p class="title">职务</p>
                        <p class="title">费率</p>
                        <p class="input-icon"></p>
                    </div>
                      <div class="flex" v-for="(v,i) in ChargeInfoArr" :key="i">
                        <p>{{v.Staff_Name}}</p>
                        <p>{{v.Value}}</p>
                        <p>{{v.Rate}}  <span style="color:#999">RMB/小时</span> </p>
                    <div class="input-icon"></div>
                      </div>
                   </div>  
              
                 </div>
              </div>

              <div class="add-method flex">
                     <div class="add-method-index flex">
                    <p>选择合同类型</p>
                     <div class="select-input">
                     <el-input v-model="Source_Contract" readonly="readonly"/>                   
                    
                     </div>
                     </div>
                     </div> 

             </div>
                
               
              <div class="edit">
                    <div class="edit-table flex">
                     <div class="edit-title-line flex"> <p class="edit-title">案件文书</p>
                      <div>
                      <el-button type="danger" round @click.stop="finishCase()" v-if="Case_Status!=4 && Case_Status!=3 && Case_Status!=-2 && Case_Status!=-1">申请结案</el-button>
                      <el-button type="danger" round @click="toAdd(2)"><i class="el-icon-plus"></i>风控文档</el-button>
                      </div>
                      </div>

                       <el-table :data="tableData" border style="width: 100%;margin:auto"  @row-click="lineCilck">
                        <el-table-column prop="Id" label="Id" width=""></el-table-column>
                        <el-table-column prop="File_Name" label="文档名称" width="" :show-overflow-tooltip="true"> </el-table-column>
                        <el-table-column prop="Postfix" label="文件类型" width="" :show-overflow-tooltip="true"> </el-table-column>
                        <el-table-column prop="Date_Created" label="创建日期" width="180"> </el-table-column>
                        <el-table-column prop="Update_Date" label="更新日期" width="180"> </el-table-column>
                            <el-table-column  label="状态" width="">
                            
                                <template slot-scope="scope"> 
                                    <p v-if="scope.row.type == -1 && scope.row.Customer_contract == -1">查看合同</p>
                                    <p v-else-if="scope.row.Customer_contract==3">合同扫描件</p>
                                    <p v-else-if="scope.row.Customer_contract==4">判决书</p>
                                    <p v-else-if="scope.row.Customer_contract==5">发票</p>
                                     <p v-else-if="scope.row.Customer_contract==6">业务档案</p>
                                    <p v-else-if="scope.row.Customer_contract == 1">无</p>
                                    <p v-else-if="scope.row.Customer_contract == 7">其他文件</p>
                                    <p v-else>{{scope.row.state}}</p>
                                </template>
                            
                             </el-table-column>
                             <el-table-column  label="操作" width="160">
                                <template slot-scope="scope">
                                     <!-- <p  v-if="scope.row.type == 1 && scope.row.Customer_contract == 2 ">一级审核</p>
                                     <p v-if="scope.row.type == 2 && scope.row.Customer_contract == 2">二级审核</p> --> 
                                     <p v-if="scope.row.Customer_contract == 1 || scope.row.Customer_contract == 3 ||scope.row.Customer_contract == 4 ||scope.row.Customer_contract == 5 || scope.row.Customer_contract ==7 || scope.row.Customer_contract ==6"><a @click.stop="lookWordIframe(scope.row.File_Path)">预览</a><a :href="'/yongxu/Base/download?filename='+scope.row.File_Path" style="cursor: pointer;margin-left:5px;color:blue;">下载</a></p>
                                     <p  @click="openNewDoc(scope.row.Id)" v-if="scope.row.type == 4 && scope.row.Customer_contract ==2" style="cursor: pointer">更新</p>
                                      <a  target="_blank" v-if="scope.row.type == 3 && scope.row.Customer_contract == 2" :href="'/yongxu/Base/download?filename='+encodeURI(scope.row.File_Path)">下载</a>
                                      <p  v-if="scope.row.type == -1 && scope.row.Customer_contract == -1" @click="lookWord(`${{Type_Id }}`)">查看</p>
                                       <p  v-if="scope.row.type == 0 && scope.row.Customer_contract == 2"><span @click.stop="toRisk(scope.row.Id,1)" style="color:red;cursor: pointer">部门审核</span><span @click.stop="toRisk(scope.row.Id,2)" style="color:blue;cursor: pointer;margin-left:5px;">风控委审核</span> </p>
                                </template>
                                
                                </el-table-column>
                       
                </el-table>
                </div>
                <div class="flex btn_box_edit">
                    <el-button type="warning" @click.stop="toAdd(3)" v-show="Customer_contract_3==2">合同扫描件</el-button>
                    <el-button type="success" @click.stop="toAdd(4)" v-show="Customer_contract_4==2">判决书</el-button>
                     <el-button type="primary" @click.stop="toAdd(5)" v-show="Customer_contract_5==2">发票</el-button>
                     <el-button  @click.stop="toAdd(6)" type="info" v-show="Customer_contract_6==2">业务档案</el-button>   
                     <el-button  @click.stop="toAdd(7)">其他</el-button>   
 
                </div>    
                    <el-dialog  :visible.sync="word" :modal-append-to-body='false' :modal='false' width="1000px">
                      <!-- <iframe :src="word_path"   width='100%' height='1000px' frameborder='1'>
                                        This browser does not support PDFs. Please download the PDF to view it: <a :href="word_path">Download PDF</a>
                     </iframe> -->
                     <!-- <object  :src="word_path"  width="100%" height="100%">
                     This browser does not support PDFs. Please download the PDF to view it: <a :href="word_path">Download PDF</a>
                     </object> --> 
                          <iframe :src="'http://file.keking.cn/onlinePreview?url='+word_path" target="_blank" rel="nofollow" width='100%' height='1000px' frameborder='1'></iframe>                    
                     <!-- <iframe src="http://www.xdocin.com/xdoc?_func=to&amp;_format=html&amp;_cache=1&amp;_xdoc=http://www.xdocin.com/demo/demo.docx" target="_blank" rel="nofollow" width='100%' height='1000px' frameborder='1'></iframe> -->
               
                </el-dialog>                  
                 <el-dialog  :visible.sync="dialogFormVisibleWord" :modal-append-to-body='false' :modal='false' width="1000px">
                        <caseWord :dataWord='dataWord'></caseWord>
                        <!-- <caseWord1 :dataWord='dataWord'></caseWord1> -->
                          <!-- <caseWord2 :dataWord='dataWord'></caseWord2> -->
                          <!-- <caseWord3 :dataWord='dataWord'></caseWord3> -->
                          <!-- <caseWord4 :dataWord='dataWord'></caseWord4> -->

                </el-dialog>
                 <el-dialog  :visible.sync="dialogFormVisibleWord1" :modal-append-to-body='false' :modal='false' width="1000px">
                      
                        <caseWord1 :dataWord='dataWord'></caseWord1>
                        

                </el-dialog>
                 <el-dialog  :visible.sync="dialogFormVisibleWord2" :modal-append-to-body='false' :modal='false' width="1000px">
                     
                          <caseWord2 :dataWord='dataWord'></caseWord2>
                          

                </el-dialog>
                 <el-dialog  :visible.sync="dialogFormVisibleWord3" :modal-append-to-body='false' :modal='false' width="1000px">
                        
                          <caseWord3 :dataWord='dataWord'></caseWord3>

                </el-dialog>
                      <el-dialog  :visible.sync="dialogFormVisibleWord4" :modal-append-to-body='false' :modal='false' width="1000px">
                                         
                            <caseWord4 :dataWord='dataWord'></caseWord4>
                </el-dialog>
              </div>
              <!-- 对话框 -->
     <el-dialog  :visible.sync="dialogFormVisible" :modal-append-to-body='false' :modal='false' top="300px" width="600px">
        <div class="dialogFormVisible flex">
          <div class="dialogFormVisivleInput flex">
              <p>文档名称</p><div class="dialogFormVisivleInput_right"><input type="text" class="common-input" v-model="fileName" readonly></div>
          </div>
           <div class="dialogFormVisivleFile flex">
                  <el-upload
                    ref='upload'
                    class="upload-demo"
                    drag
                    action="/yongxu/Base/uploadRawFile"
                    :data='nameData'
                    :on-success="successFile"
                    :on-progress="progressFile"
                    :before-upload="beforeFile"
                    :on-error="errorFile"
                    :limit="1"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  </el-upload>
          </div>
          
      </div>
  
   <div slot="title" class="dialog-title">
        <div class="dialogFormVisivleHeader_left flex"></div>
  </div>
  <div slot="footer" class="dialog-footer">
    <div class="dialogFormVisivleFooter flex">
    <el-button type="primary"  @click="saveDoc()">保存</el-button>
    </div>
  </div>
</el-dialog>

      <el-dialog  :visible.sync="dialogFormVisibleUpdate" :modal-append-to-body='false' :modal='false' top="300px" width="600px">
        <div class="dialogFormVisible flex">
          <div class="dialogFormVisivleInput flex">
              <p>文档名称(更新)</p><div class="dialogFormVisivleInput_right"><input type="text" class="common-input" v-model="fileName"></div>
          </div>
           <div class="dialogFormVisivleFile flex">
                  <el-upload
                    ref="upload1"
                    class="upload-demo"
                    drag
                    action="/yongxu/Base/uploadRawFile"
                    :data='nameData'
                    :on-success="successFile"
                    :on-progress="progressFile"
                    :before-upload="beforeFile"
                    :on-error="errorFile"
                    :limit="1"
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
    <el-button type="primary"  @click="updateDoc()">保存</el-button>
    </div>
  </div>
</el-dialog>
    </div>
</template>
<script>
import caseWord from './caseWord'
import caseWord1 from './caseWord1'
import caseWord2 from './caseWord2'
import caseWord3 from './caseWord3'
import caseWord4 from './caseWord4'
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            time:false,
            code:'',
            Case_Id:'',
            fileName:'',
            nameData:{
                 File_Name:'',
            },
            updateId:'',
            File_Name:'',
            fileName1:'',
            Suffix_Name:'',
            size:'',
            cur:'',
            arr:[1],
            value:'',
            options:[{lable:'123',value:1}],
            tableData:[
               
                ],
            dialogFormVisible:false,
            dialogFormVisibleUpdate:false,
            //客户基本信息
            contact_status:'',
            Customer_Type_Id:'',
            Customer_Name_Zh:'',
             Customer_Type: "",
             Contact_Party: "",
             Detailed_Address: "",
             Position: "",
             Customer_Name_En: "",
             industry: "",
             Customer_Name_Zh: "",
             City: "",
            Customer_Number:'',
            // 案件基本信息
              Cause_Action: "",
              Case_Name: "",
              Case_type: "",
             introduce:'',
             Receiving_Organ:'',
             Type_Id:'',
            //律师信息
                layWerInfoArr:[],
                Rule_Name:'',
                Staff_Name:'',
            //当事人信息
                partyInfoArr:[],
                Party_Name:'',
                Party_Category:'',
            //收费方式信息
            way:'',
                //日期收费
            ChargeInfoArr:[],
                //风险收费

                //费率收费
            dialogFormVisibleWord:false,
            dialogFormVisibleWord1:false,
            dialogFormVisibleWord2:false,
            dialogFormVisibleWord3:false,
            dialogFormVisibleWord4:false,
            dataWord:{},
            zhubanlvshi:'',
            Service_Content:'',
            Source_Contract:'',
            ifClick:'',
            //富文本
            editorOption:{
                modules:{
                  
                },
                placeholder:'',
                theme:'snow'
            },
            //标的额
            biaodie:'',
            One_Type_Id:'',
            word_path:'',
            word:false,
            Customer_contract_5:2,
            Customer_contract_4:2,
            Customer_contract_3:2,
            Customer_contract_6:2,
            Case_Status:'',
        }
    },
    inject:["reload"],
    methods:{
        /**
         * 预览word
         */
        lookWordIframe(path){
           this.word_path = 'http://cms.kingpound.com:8081'+path
            

            this.word = true
        },
        //风控传
        toRisk(id,level){
        this.$confirm('此操作将提交'+level+'级审核, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.$http.get('/yongxu/Document/Upd_Document_Status',{params:{Id:id,Examine_Level:level}}).then((res)=>{
              //  console.log(res)
                if(res.data == true){
                        this.$message({
                            type:'success',
                            message:'提交成功'
                        })
                        this.getTableData()
                }else{
                        this.$message({
                            type:'warning',
                            message:'提交失败'
                        })
                        return false
                }
            }).catch((err)=>{
                 this.$message({
                            type:'warning',
                            message:'系统异常'
                        })
                        return false
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
          
        },
        deleteLine(i){
               this.arr.splice(i,1)
        },
        pushLine(){
            this.arr.push(1)
        },
        lineCilck(row){
            //console.log(row.File_Path)
        },
        toAdd(num){
            if(this.ifClick == false){
               this.$message({
                    type:'warning',
                    message:'案件审核暂无通过，无法上传',
                })
                return false
            }else{
             this.fileName = ''
             this.fileName1=''
             this.size=''
             this.Suffix_Name=''
             this.nameData.File_Name=''
             this.num = num
             this.dialogFormVisible=true

            }
        },
        getCaseEdit(){
           //  console.log(this.$route.params.id)
            this.$http.get('/yongxu/Index/Case_Details',{params:{
                Id:this.$route.params.id,
                Type_Id:this.$route.params.typeId
            }}).then((res)=>{
                // 客户信息
                console.log(res)
                let arr=res.data.Get_Customer_Information
                this.Customer_Name_Zh = arr.Customer_Name_Zh
                this.Customer_Type_Id = arr.Customer_Type_Id
                this.Customer_Type= arr.Customer_Type,
                this.Contact_Party= arr.Contact_Party,
                this.Detailed_Address= arr.Detailed_Address,
                this.Position= arr.Position,
                this.Customer_Name_En= arr.Customer_Name_En,
                this.industry= arr.industry,
                this.Customer_Name_Zh=arr.Customer_Name_Zh,
                this.City=arr.City
                this.Customer_Number =arr.Customer_Number
                //案件信息
                let caseInfo = res.data.Get_Case_Information
                this.Cause_Action = caseInfo.Cause_Action,
                this.Case_Name=caseInfo.Case_Name
                this.Case_Status= caseInfo.Status
                console.log(this.Case_Status)
                this.Case_type=caseInfo.Case_type
                this.introduce = caseInfo.Case_Introduction
                this.Case_Id = caseInfo.Id
              
                if(caseInfo.Receiving_Organ===undefined){
                      this.Receiving_Organ=''
                }else{
                    this.Receiving_Organ=caseInfo.Receiving_Organ
                }
                this.Party_Name = caseInfo.Party_Name
                this.Type_Id = caseInfo.Type_Id
                this.contact_status = caseInfo.Status
                this.biaodie = caseInfo.Target
                this.One_Type_Id = caseInfo.One_Type_Id
                if(this.Service_Content == ""){
                this.Service_Content = ""
                }else{
                this.Service_Content = caseInfo.Service_Content.replace(/\r\n/g,'<br/>').replace(/\n/g,'<br/>').replace(/\s/g,'&nbsp;');
                }
                if(caseInfo.Source_Contract == 1){
                        this.Source_Contract ='律所合同'
                }else{
                     this.Source_Contract ='其他合同'
                }
                //案件律师信息
               
                this.layWerInfoArr = res.data.Get_Lawyer_Information
                //当事人信息
                this.partyInfoArr = res.data.Get_Party
                //收费方式
                this.way = res.data.Value
                this.cur = res.data.Id
                    //小时收费
                this.ChargeInfoArr = res.data.Charge
                    //定额收费
                this.ChargeInfoArr = res.data.Charge
                    //风险收费
                this.ChargeInfoArr = res.data.Charge

                //传参
                this.dataWord = res.data
               // console.log(res)
              
            }).then((res)=>{
                 this.getTableData()
            }).then((e)=>{
                 this.time = true
            })
        },
          successFile(res){
         //   console.log(res)
            if(res.code == 200){
                    this.code = 200
                    this.File_Name = res.File_Name
                    this.Suffix_Name =res.Suffix_Name
                    this.fileName1 = res.fileName
                    this.size = res.size
                  //  console.log(this.fileName1)
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
         beforeFile(file){
             var type =file.name.substring(file.name.lastIndexOf(".")+1).toLowerCase()
            // console.log(type)
            if(type == 'bat' || type == 'exe'){
                this.$message({
                    message:'文件格式不正确',
                    type:'warning'
                    })
                    return false
            }
             var json = file.name.split(".")
             var file_name =json[0];
             this.fileName = file_name
             this.nameData.File_Name = this.fileName
          },
            //申请结案
            finishCase:function(id){
                if(this.ifClick == false){
                    this.$message({
                            type:'warning',
                            message:'案件审核暂无通过，无法进行操作',
                        })
                    return false
                }
                this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
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
                 }else{
                  this.common.checkAuth({params:{url:'Index/Upd_Case_Status4',userid:localStorage.getItem('userId')}}).then((res)=>{
                  this.$confirm('此操作将申请结案, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'info'
            }).then(() => {
           this.$http.get('/yongxu/Index/Upd_Closing',{params:{
                        Case_Id:this.Case_Id
                    }}).then((res)=>{
                       if(res.data.code==200){
                          this.$message({
                          message:'操作成功',
                          type:'success'
                          }); 
                      }else{
                           this.$message({
                          message:res.data.sign,
                          type:'warning'
                          }); 
                          return false
                      }
                      this.getTableData()  
                    })
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
          getTableData(){

              this.$http.get('/yongxu/Document/Display_Document',{params:{Case_Id:this.Case_Id}}).then((res)=>{
                  
                  this.tableData = res.data
                 console.log(this.tableData)
                 var arr =[]
                  for(var i = 0;i<this.tableData.length;i++){
                     arr[i]=this.tableData[i].Customer_contract
                  }
                console.log(arr)
                if(arr.indexOf(3)!=-1){
                    this.Customer_contract_3 = 1
                }
                if(arr.indexOf(4)!=-1){
                    this.Customer_contract_4 = 1
                }
                if(arr.indexOf(5)!=-1){
                    this.Customer_contract_5 = 1
                }
                if(arr.indexOf(6)!=-1){
                    this.Customer_contract_6 = 1
                }
              }).then(()=>{
                    this.$http.get('/yongxu/Index/Get_Case_Contract',{params:{Case_Id:this.Case_Id}}).then((res)=>{
                        console.log(res)
                            if(this.contact_status === 0){ 
                                this.ifClick = false
                            }else{
                                this.ifClick = true
                            }
                            if(res.data===''){
                                    return false
                            }else{
                             this.tableData.unshift(res.data)
                            }
                        })
              })
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
                this.$http.post('/yongxu/Document/Add_Document',{
                    User_Id: localStorage.getItem('userId'),
                    Case_Id:this.Case_Id,
                    File_Name:this.File_Name,
                    fileName:this.fileName1,
                    size:this.size,
                    Suffix_Name:this.Suffix_Name,
                    Customer_contract:this.num,
                }).then((res)=>{
                    if(res.data == true){
                          this.$message({
                        message:'保存成功',
                        type:'success'
                    });
                    this.dialogFormVisible = false
                    this.reload()
                    this.getTableData()
                    }
                    else{
                           this.$message({
                        message:'保存失败',
                        type:'warning'
                    });
                    }
                   
                }).catch((err)=>{
                 //   console.log(err)
                })
            },
            //更新文档
            openNewDoc(Id){
                this.updateId = Id
                   this.fileName = ''
                    this.fileName1=''
                    this.size=''
                    this.Suffix_Name=''
                    this.nameData.File_Name=''
                this.dialogFormVisibleUpdate = true
            },
            updateDoc(){
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
               this.$http.post('/yongxu/Document/Update_Document',{
                    Id:this.updateId,
                    Case_Id:this.Case_Id,
                    User_Id:localStorage.getItem('userId'),
                    File_Name:this.File_Name,
                    fileName:this.fileName1,
                    size:this.size,
                    Suffix_Name:this.Suffix_Name,
                    Customer_contract:2
                    }).then((res)=>{
                       // console.log(res)
                         if(res.data == true){
                          this.$message({
                        message:'更新成功',
                        type:'success'
                    });
                     this.dialogFormVisibleUpdate = false
                    this.getTableData()
                    }
                    else{
                           this.$message({
                        message:'更新失败',
                        type:'warning'
                    });
                    this.dialogFormVisibleUpdate = false
                    this.getTableData()
                    }
                }).catch((err)=>{
                       this.$message({
                        message:'更新失败',
                        type:'warning'
                    });
                })
            },
            lookWord(id){
               // console.log(this.One_Type_Id)
                if(this.One_Type_Id == 4){
                        this.dialogFormVisibleWord = true
                        return
                }
                  if(this.One_Type_Id == 10){
                        this.dialogFormVisibleWord1 = true
                         return
                }
                  if(this.One_Type_Id == 3){
                        this.dialogFormVisibleWord2 = true
                         return
                }
                  if(this.One_Type_Id == 1){
                        this.dialogFormVisibleWord4 = true
                         return
                }
                 if(this.One_Type_Id == 5){
                        this.dialogFormVisibleWord3 = true
                         return
                }
               
            },
            closeBox(){
                var _self = this
                if(this.time == true){
                    _self.$router.go(-1);//返回上一层
                }else{
                    this.$message({
                        message:'数据正在加载，请稍后关闭',
                        type:'warning'
                        
                    })
                }
                 
                //this.$router.push('/index/caseIndex')
            //    this.time  = setTimeout(function(){
                    
            //     },1500)
               
            }
    },
    mounted(){
        this.getCaseEdit()
    },
    beforeDestroy(){
        // clearTimeout(this.time)
    },
    components:{
        'caseWord':caseWord,
        'caseWord1':caseWord1,
        'caseWord2':caseWord2,
        'caseWord3':caseWord3,
        'caseWord4':caseWord4,
    },
    watch:{
        dialogFormVisible:function(newdata){
            if(newdata == false){
                this.$refs['upload'].clearFiles();
            }
        },
        dialogFormVisibleUpdate:function(newdata){
            if(newdata == false){
                this.$refs['upload1'].clearFiles();
            }
        }
    },
    filters:{
        hideData(data){
            console.log(data)
            return data.replace(data.slice(data.length-6,data.length),"******")
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/sass/caseAdd.scss';
.caseAdd .add-content .add-lawyer-parent .add-lawyer .add-lawyer-index .flex {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    width: 300px;
    height: 30px;
}
.caseAdd .add-content .add-Pay .add-Pay-index .add-Pay-index-child .flex:first-child{
       margin-top: 0px !important;
}
.caseAdd .add-content .add-Pay .add-Pay-index .add-Pay-index-child .flex {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
     margin-top: 10px;
}
.edit{
    margin: 20px auto;
    webkit-box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.3);
    padding-bottom:30px;
}
.edit-table{
    flex-direction: column;
    width: 92%;
    margin: auto;
}
.edit-table .edit-title{
    font-size: 18px;
    font-weight: 600;
}
.el-table--border td{
    border-right: none;
}
.el-table--border th{
    border-right: none;
}
.edit-title-line{
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 20px;
}
.dialogFormVisible{
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
.dialogFormVisivleInput{
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .dialogFormVisivleInput_right input{
    width: 300px;
    height: 30px;
    margin-left: 30px;
  }
  .dialogFormVisivleFile{
    justify-content: center;
    margin-top: 25px;
    width: 80%;
  }
   .dialogFormVisivleFooter{
    flex-direction: row;
    justify-content: center;
    margin-top: 25px;
  }
  .serve_content{
        border: 1px solid #ccc;
    margin-left: 7px;
    margin-top: 10px;
}
.textarea{
    // width: 240;
    // min-height: 150px;
    // border: 1px solid #ccc;
}
.btn_box_edit{
    width: 92%;
    margin: 15px auto;
}
</style>

