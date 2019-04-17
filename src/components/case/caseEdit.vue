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
                        <p class="add-userinfo-p">客户基本信息</p>
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
                     <p class="add-userinfo-p">客户基本信息</p>
                  
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
                    

                 <div class="add-method flex" v-show="cur==9">
                     <div class="add-method-index flex">
                    <p>收费方式</p>
                     <div class="select-input">
                     <el-input v-model="way"/>                   
                    
                     </div>
                     </div>
                     </div> 

                     <div class="add-Pay add-job">

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
                        <p>{{v.Rule_Name}}</p>
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
                      <el-button type="danger" round @click="toAdd()"><i class="el-icon-plus"></i>新建案例</el-button>
                      </div>
                       <el-table :data="tableData" border style="width: 100%;margin:auto"  @row-click="lineCilck">
                    <el-table-column prop="Case_No" label="序号" width=""></el-table-column>
                    <el-table-column prop="Case_Name" label="文档名称" width=""> </el-table-column>
                     <el-table-column prop="Customer_Name_Zh" label="文件类型" width=""> </el-table-column>
                      <el-table-column prop="Value" label="创建日期" width=""> </el-table-column>
                       <el-table-column prop="Case_Lawyer_Name" label="更新日期" width=""> </el-table-column>
                          <el-table-column  label="状态" width="">
                            
                                <template slot-scope="scope">
                                    <p>{{scope.row.Contract_Date_From}}{{scope.row.Contract_Date_From}}</p>
                                </template>
                            
                             </el-table-column>
                             <el-table-column  label="操作" width="">
                                <template slot-scope="scope">
                                    <p @click="goTO(scope.row.id)">风控审核</p>

                                </template>
                               
                                </el-table-column>
                       
                </el-table>
                </div>
              </div>
              <!-- 对话框 -->
                <el-dialog  :visible.sync="dialogFormVisible" :modal-append-to-body='false' :modal='false' top="300px" width="600px">
        <div class="dialogFormVisible flex">
          <div class="dialogFormVisivleInput flex">
              <p>文档名称</p><div class="dialogFormVisivleInput_right"><input type="text" class="common-input"></div>
          </div>
           <div class="dialogFormVisivleFile flex">
                  <el-upload
                  class="upload-demo"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip flex" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
          </div>
          
      </div>
  
   <div slot="title" class="dialog-title">
        <div class="dialogFormVisivleHeader_left flex"><p>案件文书</p>/<p>我的文档</p>/<p>新建文档</p></div>
  </div>
  <div slot="footer" class="dialog-footer">
    <div class="dialogFormVisivleFooter flex">
    <el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
    </div>
  </div>
</el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cur:'',
            arr:[1],
            value:'',
            options:[{lable:'123',value:1}],
            tableData:[{
                Case_No:'1',Case_Name:'文档名称',Customer_Name_Zh:'文件类型',Value:'123',Case_Lawyer_Name:'13245',Contract_Date_From:'2018-03-03',id:1
            }],
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

        },
        toAdd(){
            this.dialogFormVisible=true
        },
        getCaseEdit(){
            this.$http.get('/yongxu/Index/Case_Details',{params:{
                Id:3,
                Type_Id:10
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
</style>

