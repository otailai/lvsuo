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
                <div class="add-userinfo flex">
                <p class="add-userinfo-p">客户基本信息</p>
                <div class="flex add-userinfo-index">
                <div class="add-userinfo-left flex">
                    <div class="flex"><p class="title">客户名称(中)</p><p>{{Customer_Name_Zh}}</p></div>
                    <div class="flex"><p class="title">客户名称(英)</p><p>{{Customer_Name_En}}</p></div>
                    <div class="flex"><p class="title">省/市地区</p><p>{{City}}</p></div>
                    <div class="flex"><p class="title">详细地址</p><p>{{Detailed_Address}}</p></div>
                </div>
                  <div class="add-userinfo-left flex">
                        <div class="flex"><p class="title">客户类型</p> 
                        <p>{{Customer_Type}}</p>
                        </div>
                        <div class="flex"><p class="title">所属行业</p>
                        <p>{{industry}}</p>
                        </div>
                        <div class="flex"><p class="title">职务</p>
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
                        <p>
                            本协议书签约双方就协议书中所描述项目的研究开发、投资
                            融资、成果权益、收益分配、风险责任以及与之相关的技术
                            和法律等问题经平
                        </p>
                        </div>
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
                     <p class="add-userinfo-p">当事人信息</p>
                 </div>  
                <div class="flex  add-lawyer-index">
             
                  <div class="flex">
                        <p class="title">姓名</p>
                         <p class="title">类别</p>
                           <p class="input-icon"></p>
                    </div>
                    <div class="flex info" v-for="(v,i) in partyInfoArr" :key="i">
                     <p class="p">{{v.Party_Name}}</p>
                       <p class="p">{{v.Party_Category}}</p>
                        <p class="input-icon"></p>
                    </div>
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
                   <p>{{v.Risk_Achievement}}</p>
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
                        <p>{{v.Rate}}</p>
                    <div class="input-icon"></div>
                      </div>
                   </div>  
              
                 </div>
              </div>
             </div>
                
               
              <div class="edit">
                    <div class="edit-table flex">
                     <div class="edit-title-line flex"> <p class="edit-title">案件文书</p>
                      <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>新建文档</el-button>
                      </div>
                       <el-table :data="tableData" border style="width: 100%;margin:auto"  @row-click="lineCilck">
                    <el-table-column prop="Id" label="Id" width=""></el-table-column>
                    <el-table-column prop="File_Name" label="文档名称" width=""> </el-table-column>
                     <el-table-column prop="Postfix" label="文件类型" width=""> </el-table-column>
                      <el-table-column prop="Date _Created" label="创建日期" width="180"> </el-table-column>
                       <el-table-column prop="Update_Date" label="更新日期" width="180"> </el-table-column>
                          <el-table-column  label="状态" width="">
                            
                                <template slot-scope="scope">
                                    <p>{{scope.row.state}}</p>
                                </template>
                            
                             </el-table-column>
                             <el-table-column  label="操作" width="">
                                <template slot-scope="scope">
                                    <p @click="goTO(scope.row.Id) " v-if="scope.row.type == 1">风控审核</p>
                                     <p @click="goTO(scope.row.Id) " v-if="scope.row.type == 2">更新</p>
                                      <a  v-if="scope.row.type == 3" :href="'/yongxu//Base/download?filename='+scope.row.File_Path">下载</a>

                                </template>
                               
                                </el-table-column>
                       
                </el-table>
                </div>
              </div>
              <!-- 对话框 -->
                <el-dialog  :visible.sync="dialogFormVisible" :modal-append-to-body='false' :modal='false' top="300px" width="600px">
        <div class="dialogFormVisible flex">
          <div class="dialogFormVisivleInput flex">
              <p>文档名称</p><div class="dialogFormVisivleInput_right"><input type="text" class="common-input" v-model="fileName"></div>
          </div>
           <div class="dialogFormVisivleFile flex">
                  <el-upload
                    class="upload-demo"
                    drag
                    action="/yongxu/Base/uploadRawFile"
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
    <el-button type="primary"  @click="saveDoc()">保存</el-button>
    </div>
  </div>
</el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            code:'',
            Case_Id:'',
            fileName:'',
            nameData:{
                 File_Name:'',
            },
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
            //客户基本信息
            Customer_Name_Zh:'',
             Customer_Type: "",
             Contact_Party: "",
             Detailed_Address: "",
             Position: "",
             Customer_Name_En: "",
             industry: "",
             Customer_Name_Zh: "",
             City: "",

            // 案件基本信息
              Cause_Action: "",
              Case_Name: "",
              Case_type: "",

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

        }
    },
    methods:{
        deleteLine(i){
               this.arr.splice(i,1)
        },
        pushLine(){
            this.arr.push(1)
        },
        lineCilck(row){
            //console.log(row.File_Path)
        },
        toAdd(){
            this.dialogFormVisible=true
        },
        getCaseEdit(){
             console.log(this.$route.params.id)
            this.$http.get('/yongxu/Index/Case_Details',{params:{
                Id:this.$route.params.id,
                Type_Id:this.$route.params.typeId
            }}).then((res)=>{
                // 客户信息
                let arr=res.data.Get_Customer_Information
                this.Customer_Name_Zh = arr.Customer_Name_Zh
                this.Customer_Type= arr.Customer_Type,
                this.Contact_Party= arr.Contact_Party,
                this.Detailed_Address= arr.Detailed_Address,
                this.Position= arr.Position,
                this.Customer_Name_En= arr.Customer_Name_En,
                this.industry= arr.industry,
                this.Customer_Name_Zh=arr.Customer_Name_Zh,
                this.City=arr.City
                //案件信息
                let caseInfo = res.data.Get_Case_Information
                this.Cause_Action = caseInfo.Cause_Action,
                this.Case_Name=caseInfo.Case_Name
                this.Case_type=caseInfo.Case_type
                this.Case_Id = caseInfo.Id
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

                console.log(res)
            }).then((res)=>{
                 this.getTableData()
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
              console.log(this.Case_Id)
              this.$http.get('/yongxu//Document/Display_Document',{params:{Case_Id:this.Case_Id}}).then((res)=>{
                  console.log(res)
                this.tableData = res.data
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
                
                let param  = new URLSearchParams()
                  param.append('User_Id',localStorage.getItem('userId'))
                  param.append('Case_Id',this.Case_Id)
                  param.append('File_Name',this.File_Name)
                  param.append('fileName',this.fileName1)
                  param.append('size',this.size)
                  param.append('Suffix_Name',this.Suffix_Name)
                this.$http.post('/yongxu/Document/Add_Document',{
                    User_Id: localStorage.getItem('userId'),
                    Case_Id:this.Case_Id,
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
            //下载
            downLoadWord(filename){
                console.log(filename)
                this.$http.post('/yongxu/Base/download',{
                    filename:filename
                },{emulateJSON:true}).then((res)=>{
                    console.log(res)
                })
            }

    },
    mounted(){
       
        this.getCaseEdit()
       
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
</style>

