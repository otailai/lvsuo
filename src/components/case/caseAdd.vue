<template>
    <div class="caseAdd">
            <div class="add-top flex p-l">
                <p>所在位置：</p>
                <router-link to='/index/caseIndex' tag="a">案件管理</router-link>
                <p><i class="el-icon-arrow-right"></i></p>
                <p>案件添加</p>
            </div>
             <div class="add-content flex">
                <div class="add-p flex">
                    <span @click="closeBox()" class="flex">
                   <i class="el-icon-close" ref="icon_right"></i>
                    </span>
                    </div>
                <div class="add-userinfo flex" v-show="this.showNum==0">
                <p class="add-userinfo-p">客户基本信息</p>
                <div class="flex add-userinfo-index">
                <div class="add-userinfo-left flex sselct">
                <div class="flex"><p class="title">客户类型</p> 
                  <el-select v-model="customValue" placeholder="请选择" @change="changeCustomType()"><el-option v-for="item in customTypeArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option></el-select>
                        </div>
                      <el-popover placement="bottom" width="200" trigger="click" v-model="visible">
                        <div class="flex" slot="reference"><p class="title">客户名称(中)</p><input type="text" class="common-input" placeholder="请输入" v-model="search" @change="changeId()"/></div>
                            <div>
                                <table style="width:100%">
                                    <thead>
                                        <th >客户名称</th>  
                                           <th >联系方式</th>  
                                    </thead> 
                                    <tbody>
                                        <tr v-for="(item,index) in items" :key="index" @click="getAlreadyName(item.Id,item.Customer_Name_Zh)" class="tr">
                                             <td>{{item.Customer_Name_Zh}}</td> 
                                              <td>{{item.Contact_Party}}</td> 
                                           
                                        </tr>
                                    </tbody>
                                </table>
                           </div>
                        </el-popover>
                    <!-- <div class="flex"><p class="title">客户名称(英)</p><input type="text" class="common-input" placeholder="请输入" v-model="userNameE"/></div> -->
                     <div class="flex" v-show="customValue==3"><p class="title">身份证号</p> <input type="text" class="common-input" placeholder="请输入" v-model="cardNo"/></div>
                    <div class="flex" v-show="customValue==4"><p class="title">纳税人编号</p> <input type="text" class="common-input" placeholder="请输入" v-model="cardNo"/></div>
                    <div class="flex"><p class="title">省/市地区</p> <input type="text" class="common-input" placeholder="请输入" v-model="province"/></div>
                    <!-- <div class="flex"><p class="title">详细地址</p> <input type="text" class="common-input" placeholder="请输入" v-model="address"/></div> -->
 
                </div>
                  <div class="add-userinfo-left selectInput flex userInfo-first sselct">
                        
                        <div class="flex" v-show="customValue==4"><p class="title">所属行业</p>
                  <el-select v-model="suoshuValue" placeholder="请选择"><el-option v-for="item in suoshuhangyeArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option></el-select>                        
                        </div>
                        <div class="flex" v-show="customValue==4"><p class="title">职务</p>
                        <input type="text" class="common-input" placeholder="请输入"  v-model="value2"/>
                  <!-- <el-select v-model="JobListValue" placeholder="请选择"><el-option v-for="item in JobListArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option></el-select>                         -->
                         </div> 
                    <div class="flex"><p class="title">联系电话</p> <input type="text" class="common-input" placeholder="请输入" v-model="tel"/></div>
                    <div class="flex"><p class="title">是否常年客户</p>
                  <el-select v-model="isValue" placeholder="请选择"><el-option v-for="item in isValueArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option></el-select>                        
                        </div>
                   

                    </div>
                    </div>
                   <div class="address">
                       <div class="flex"><p class="address-title">详细地址</p> <input type="text " class="common-input long-width" placeholder="请输入" v-model="address"/></div>
                       </div> 
                 </div>
                 <div class="add-caseinfo add-userinfo flex">
                        <p class="add-userinfo-p">案件基本信息</p>
                <div class="flex add-userinfo-index">
                <div class="add-userinfo-left flex">
                    <div class="flex selectInput1" id="selectInput1">
                    <p class="title">选择案件类型</p>
                    <!-- <el-select  v-model="caseValue" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select> -->
                    <el-select v-model="caseValue" placeholder="请选择" @change="getSelectChildeMenu(caseValue)">
                    <el-option v-for="item in optionMenu" :key="item.Id" :label="item.Category_Name"  :value="item.Id"> </el-option>
                   </el-select>
                    <!-- <el-select  v-model="caseValue2" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select> -->
                    <el-select v-model="caseValue2" placeholder="请选择"> 
                  <el-option v-for="(item,index) in optionChildMenu" :key="index" :label="item.Value"  :value="item.Id"> </el-option>
                 </el-select>
                    </div>
                    <div class="flex"><p class="title">案件名称</p><input type="text" class="common-input" placeholder="请输入" v-model="caseName"/></div>
                    <div class="flex">
                        <p class="title">案由</p> 
                         <el-select v-model="caseWhy" placeholder="请选择">
                         <el-option v-for="(item,index) in CaseResonArr" :key="index" :label="item.Value"  :value="item.Id"> </el-option>
                         </el-select>
                    </div>
                   
                   
                    <div class="flex"><p class="title">受理机关</p> <input type="text" class="common-input" placeholder="请输入" v-model="compony"/></div>
                    <!-- <div class="flex"><p class="title">对方当事人</p> <input type="text" class="common-input" placeholder="请输入" v-model="oppositeParty"/></div> -->
                   
                    <!-- <div class="flex"><p class="title">详细地址</p> <input type="text" class="common-input" placeholder="请输入"/></div> -->
                </div>
                  <div class="add-userinfo-left flex">
                        <div class="flex"><p class="title f-f">案情简介</p> 
                        <textarea name="" id="" cols="40" rows="8" class="textarea" v-model="textarea"></textarea>
                        </div>
                        <!-- <div class="flex" style=" justify-content: flex-start;align-items: center;">
                             
                                <p class="title">对方当事人</p>
                                <input type="text" class="common-input" placeholder="请输入" v-model="oppositeParty[0].name"/>
                                 <span @click="addOppositeParty()" style="margin-left:20px;cursor: pointer;"><i class="el-icon-circle-plus" ></i> </span>
    
                        </div>
                         
                         <div class="flex" style=" justify-content: flex-start;align-items: center;" v-for="(v,i) in oppositePartyArr" :key="i">
                             
                                <p class="title">对方当事人</p>
                                <input type="text" class="common-input" placeholder="请输入" v-model="oppositeParty[i+1].name"/>
                                 <div class="input-icon" @click="deleteLine(i,oppositePartyArr)" style="margin-left:20px;cursor: pointer;"><i class="el-icon-remove"></i></div>
                             
                        </div> -->
                    <div class="flex"><p class="title">对方当事人</p> <input type="text" class="common-input" placeholder="请输入" v-model="oppositeParty"/></div>
                    <div class="flex"><p class="title">标的额</p> <input type="text" class="common-input" placeholder="请输入" v-model="biaodie"/></div>

                    </div>
                    </div>
                 </div>
                 
                <div class="add-lawyer-parent flex">
                <div class="add-lawyer  flex">
                <div class="add-lawyer-title flex"> 
                     <p class="add-userinfo-p">案件律师信息</p>
                     <span @click="pushUserInfo()"><i class="el-icon-circle-plus" ></i> 添加案件成员</span>
                 </div>  
                <div class="flex  add-lawyer-index">
                    
                    <div class="flex">
                        <p class="title">姓名</p>
                         <p class="title">职务</p>
                           <p class="input-icon"></p>
                    </div>
                    <div class="flex">
                        
                   <el-popover placement="bottom-start" width="200" trigger="click" v-model="inputArr[0].visible" >
                      
                        
                        
                        <input type="text" slot="reference" class="common-input lawyer-input" placeholder="请输入" v-model="inputArr[0].laywerName"  readonly="readonly">                      
                           <el-autocomplete
                            class="inline-input"
                            v-model="inputArr[0].laywerName1"
                            :fetch-suggestions="querySearch" 
                            placeholder="请输入内容"
                            @select="handleSelect"
                            @blur="blurInput()"
                             prefix-icon="el-icon-search"
                            > 
                             <i class="el-icon-edit el-input__icon" slot="suffix"></i>
                                <template slot-scope="{ item }">
                                    <p>姓名:{{ item.value }}</p><p>编号:{{ item.Staff_No }}</p>
                                </template>
                            </el-autocomplete>
                        </el-popover>

                         <el-select v-model="inputArr[0].laywerJob"  placeholder="请选择">
                         <el-option v-for="item in layerSelectArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option>
                        </el-select>   
                        <div class="input-icon"></div>
                    </div>
                      <div class="flex" v-for="(v,i) in userInfo" :key="i">
                        <!-- <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="inputArr[i+1].laywerName"/> -->
                        <el-popover placement="bottom-start" width="200" trigger="click" v-model="inputArr[i+1].visible" >
                        <input type="text" slot="reference" class="common-input lawyer-input" placeholder="请输入" v-model="inputArr[i+1].laywerName"  readonly="readonly">
                           <el-autocomplete
                            class="inline-input"
                            v-model="inputArr[i+1].laywerName1"
                            :fetch-suggestions="querySearch" 
                            placeholder="请输入内容"
                            @select="((item)=>handleSelect1(item,i))"
                             prefix-icon="el-icon-search"
                              @blur="blurInput1(i)"> 
                            <i class="el-icon-edit el-input__icon" slot="suffix"></i>
                                <template slot-scope="{ item }">
                                    <p>姓名:{{ item.value }}</p><p>编号:{{ item.Staff_No }}</p>
                                </template>
                           
                            </el-autocomplete>
                        </el-popover>
                        <el-select v-model="inputArr[i+1].laywerJob"  placeholder="请选择" style="height:30px;width:100px;margin-top: 10px;">
                         <el-option v-for="item in layerSelectArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option>
                        </el-select>  
                        <!-- <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="inputArr[i+1].laywerJob"/>   -->
                        <div class="input-icon" @click="deleteLine(i,userInfo,inputArr)"><i class="el-icon-remove"></i></div>
                    </div>
                     
                    </div>
                    </div>

              
                <!-- <div class="add-lawyer  lex">
                <div class="add-lawyer-title flex"> 
                     <p class="add-userinfo-p">当事人信息</p>
                     <span @click="pushPartyInfo()"><i class="el-icon-circle-plus"></i> 其他当事人</span>
                 </div>  
                <div class="flex  add-lawyer-index">
                  <div class="flex">
                        <p class="title">姓名</p>
                         <p class="title">类型</p>
                           <p class="input-icon"></p>
                    </div>
                    <div class="flex">
                        <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="input1Arr[0].partyName"/>
                    
                         <el-select v-model="input1Arr[0].partyJob"  placeholder="请选择" style="height:30px;width:100px;margin-top: 10px;">
                         <el-option v-for="item in partyJobSelectArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option>
                        </el-select>  
                        <div class="input-icon"></div>
                    </div>
                      <div class="flex" v-for="(v,i) in PartyInfo" :key="i">
                        <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="input1Arr[i+1].partyName"/>
                         <el-select v-model="input1Arr[i+1].partyJob"  placeholder="请选择" style="height:30px;width:100px;margin-top: 10px;">
                         <el-option v-for="item in partyJobSelectArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option>
                        </el-select>  
                    
                        <div class="input-icon" @click="deleteLine(i,PartyInfo)"><i class="el-icon-remove"></i></div>
                    </div>
                    </div>
                    </div>
                 </div> -->
                      <div class="add-lawyer  lex">
                        <div class="add-lawyer-title flex"> 
                            <p class="add-userinfo-p">服务内容</p>
                        </div>  
                     <div class="flex  add-lawyer-index" style="width:90%;margin-top:10px;">
                
                        <!-- <textarea name="" id="" cols="40" rows="8"  class="serve_content" @click="openEditor()" v-model="Service_Content"></textarea> -->
                        <!-- <div class="serve_content" @click="openEditor()" v-html="Service_Content">

                        </div> -->
                    <quill-editor v-model="Service_Content" ref="myQuillEditor" :options="editorOption" style="width:428px;"></quill-editor>

                    </div>
                    </div>
                 </div>
                    

                 <div class="add-method flex">
                     <div class="add-method-index flex">
                    <p>收费方式</p>
                     <div class="select-input">
                     <el-select v-model="costValue" placeholder="请选择" @change="changeCostWay(costValue)">
                         <el-option v-for="item in costWay" :key="item.Id" :label="item.Value" :value="item.Id"></el-option>
                    </el-select>                           
                     </div>
                     </div>
                     </div> 
                    <div class="add-Pay add-job" v-show="costId == 9">
                    <div class="add-Pay-index flex">
                   <div class="add-Pay-index-child">
                    <div class="flex">
                        <p class="title">付款日期</p>
                        <p class="title">收费金额</p>
                        <p class="title">描述</p>
                         <p class="input-icon"></p>
                    </div>
                    <div class="flex">
                    <!-- <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="timeArr[0].dateName"/> -->
                       <el-date-picker
                        v-model="timeArr[0].dateName"
                        type="datetime"
                         value-format="yyyy-MM-dd HH:mm:ss"
                        placeholder="选择日期时间">
                        </el-date-picker>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="timeArr[0].payCount"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="timeArr[0].describe"/>
                       <div class="input-icon"></div>
                    </div>
                    <div class="flex" v-for="(v,i) in payDate" :key="i">
                    <!-- <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="timeArr[i+1].dateName"/> -->
                      <el-date-picker
                          class="time_input"
                          v-model="timeArr[i+1].dateName"
                          value-format="yyyy-MM-dd HH:mm:ss"
                            type="datetime"
                            placeholder="选择日期时间">
                        </el-date-picker>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="timeArr[i+1].payCount"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="timeArr[i+1].describe"/>
                       <div class="input-icon" @click="deleteLine(i,payDate,timeArr)"><i class="el-icon-remove"></i></div>
                    </div>
                   </div>  
                    <div class="add-icon flex" @click="addPayDate()"><i class="el-icon-circle-plus"></i><p>添加</p></div>
                 </div>
                </div>
                 

                    
                 <div class="add-Pay add-job" v-show="costId == 10">
                    <div class="add-Pay-index flex">
                   <div class="add-Pay-index-child">
                    <div class="flex">
                        <!-- <p class="title">风险金额</p>
                        <p class="title">基本金额</p> -->
                        <p class="title">风险达成条件</p>
                         <p class="input-icon"></p>
                    </div>
                    <div class="flex">
                    <!-- <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="riskArr[0].riskName"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="riskArr[0].riskCount"/> -->
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="riskArr[0].riskCondition" style="width:700px"/>
                     <div class="input-icon"></div>
                    </div>
                    <div class="flex" v-for="(v,i) in riskAcount" :key="i">
                    <!-- <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="riskArr[i+1].riskName"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="riskArr[i+1].riskCount"/> -->
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="riskArr[i+1].riskCondition" style="width:700px"/>
                     <div class="input-icon" @click="deleteLine(i,riskAcount,riskArr)"><i class="el-icon-remove"></i></div>
                    </div>
                   </div>  
                    <div class="add-icon flex" @click="addRiskAcount()"><i class="el-icon-circle-plus"></i><p>添加</p></div>
                 </div>
              </div>
                
                 <div class="add-Pay add-job" v-show="costId == 8">
                    <div class="add-Pay-index flex">
                   <div class="add-Pay-index-child">
                    <div class="flex">
                        <p class="title">姓名</p>
                        <p class="title">职务</p>
                        <p class="title">费率</p>
                        <p class="input-icon"></p>
                    </div>
                    <div class="flex">
                    <!-- <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[0].nameJobName"/> -->
                  <el-popover placement="bottom-start" width="200" trigger="click" v-model="nameJobArr[0].visible" >
                    <input type="text" slot="reference" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[0].nameJobName"  readonly="readonly">                      
                       <el-autocomplete
                        class="inline-input"
                        v-model="nameJobArr[0].nameJobName1"
                        :fetch-suggestions="querySearch" 
                        placeholder="请输入内容"
                         @select="handleSelectNameArr"
                        @blur="blurInputNameArr()"
                         prefix-icon="el-icon-search"
                        > 
                         <i class="el-icon-edit el-input__icon" slot="suffix"></i>
                                <template slot-scope="{ item }">
                                    <p>姓名:{{ item.value }}</p><p>编号:{{ item.Staff_No }}</p>
                                </template>
                        </el-autocomplete>
                    </el-popover>

                  <el-select v-model="nameJobArr[0].nameJobJob" placeholder="请选择">
                      <el-option v-for="item in layerSelectArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option>
                  </el-select>                        
                    
                    <!-- <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[0].nameJobJob"/> -->
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[0].nameJobRate"/><span class="rmb">RMB/小时</span>
                     <div class="input-icon"></div>
                      
                    </div>
                    <div class="flex" v-for="(v,i) in nameJob" :key="i">
                    <!-- <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[i+1].nameJobName"/> -->
                <el-popover placement="bottom-start" width="200" trigger="click" v-model="nameJobArr[i+1].visible" >
                    <input type="text" slot="reference" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[i+1].nameJobName"  readonly="readonly">                      
                       <el-autocomplete
                        class="inline-input"
                        v-model="nameJobArr[i+1].nameJobName1"
                        :fetch-suggestions="querySearch" 
                        placeholder="请输入内容"
                          @select="((item)=>handleSelect1NameArr(item,i))"
                        prefix-icon="el-icon-search"
                        @blur="blurInput1NameArr(i)"
                     
                        > 
                        </el-autocomplete>
                    </el-popover>
                    <!-- <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[i+1].nameJobJob"/> -->
                    <el-select v-model="nameJobArr[i+1].nameJobJob" placeholder="请选择">
                      <el-option v-for="item in layerSelectArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option>
                  </el-select>    
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[i+1].nameJobRate"/><span class="rmb">RMB/小时</span>
                    <div class="input-icon" @click="deleteLine(i,nameJob,nameJobArr)"><i class="el-icon-remove"></i></div>
                    </div>
                   </div>  
                    <div class="add-icon flex" @click="addNameJob()"><i class="el-icon-circle-plus"></i><p>添加</p></div>
                 </div>
              </div>
                

                

                     <div class="add-method flex">
                     <div class="add-method-index flex">
                    <p>选择合同类型</p>
                     <div class="select-input">
                     <el-select v-model="fileType" placeholder="请选择" @change="changeCostWay(costValue)">
                         <el-option v-for="item in fileTypeArr" :key="item.Id" :label="item.value" :value="item.Id"></el-option>
                    </el-select>                           
                     </div>
                      <button class="shangchuan_btn" v-show="fileType == 2" @click="picUpload()">上传</button> 
                     </div>
                    
                     </div> 



                


                <div class="end-btn flex">
                    <button class="btn btn1" @click="lookContract()">预览合同</button> 
                    <button class="btn btn2" @click="addAll()">提交审核</button>
                </div>
                
                  
             </div>
               <!-- 对话框 -->
      <el-dialog  :visible.sync="dialogFormVisibleWord" :modal-append-to-body='false' :modal='false' width="1000px">
                        <caseWordAdd :dataWord='dataWord'></caseWordAdd>
     </el-dialog>
     <el-dialog  :visible.sync="dialogFormVisible1" :modal-append-to-body='false' :modal='false' top="300px" width="600px">
        <div class="dialogFormVisible flex">
          <div class="dialogFormVisivleInput flex">
              <p>文档名称</p><div class="dialogFormVisivleInput_right"><input type="text" class="common-input" v-model="fileName" readonly></div>
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
        <div class="dialogFormVisivleHeader_left flex"><p>案件添加</p>/<p>客户合同</p></div>
  </div>
  <div slot="footer" class="dialog-footer">
    <div class="dialogFormVisivleFooter flex">
    <!-- <el-button type="primary"  @click="saveDoc()">保存</el-button> -->
    </div>
  </div>
</el-dialog>
             <!-- 富文本编译器 -->
        <el-dialog  :visible.sync="dialogFormVisible2" :modal-append-to-body='false' :modal='false' top="300px" width="490px">
        <div class="dialogFormVisible flex">
          <!-- <div class="dialogFormVisivleInput flex">
              <p>服务内容</p><div class="dialogFormVisivleInput_right"><input type="text" class="common-input" v-model="fileName" readonly></div>
          </div> -->
          <quill-editor v-model="Service_Content" ref="myQuillEditor" :options="editorOption"></quill-editor>
          
      </div>
  
   <div slot="title" class="dialog-title">
        <div class="dialogFormVisivleHeader_left flex"><p>案件添加</p>/<p>服务内容</p></div>
  </div>
  <div slot="footer" class="dialog-footer">
    <div class="dialogFormVisivleFooter flex">
    <!-- <el-button type="primary"  @click="saveDoc()">保存</el-button> -->
    </div>
  </div>
</el-dialog>
    </div>
</template>
<script>
import qs from 'qs';
import caseWordAdd from './caseWordAdd'
import { constants } from 'zlib';
export default {
    data(){
        return{
            /**客户类型 */
            customTypeArr:[
                {Id:3,Value:'个人'},
                 {Id:4,Value:'企业'}
            ],
            restaurants: [],
            state1: false,
            /**搜索律师 */
            searchLaywer:'',
            /**律师姓名数组 */
            LawyerNameArr:[],
            visible1:false,
            /**是否常年客户 */
            isValueArr:[
                {Id:1,Value:'是'},{Id:2,Value:'否'},
            ],
            isValue:'',
            isValue:'',
            /**获取案由下拉 */
            CaseResonArr:[],
            /**选择客户类型 */
            identity:'',
            cardNo:'',
            /**一二级菜单案件类型 */
            optionMenu:[],
            optionChildMenu:[],
            Casevalue1:'',
            Casevalue:'',
            selectOneId:'',
            //对方当事人
            oppositePart:'',
            //受理机关
            compony:'',

            JobListValue:'',
            JobListArr:[],
            suoshuValue:'',
            suoshuhangyeArr:[],
            customValue:3,
            costValue:'',
            costId:'',
            customId:0,
            visible: false,
            textarea:'',
           
            userNameC:'',
            userNameE:'',
            province:'',
            address:'',
            tel:'',

            caseValue:'',
            caseValue2:'',
            caseName:'',
            caseWhy:'',
            textarea:'',

            laywerName:'',
            laywerJob:'',
            partyName:'',
            partyJob:'',

            dateName:'',
            payCount:'',
            describe:'',


            riskName:'',
            riskCount:'',
            riskCondition:'',

            nameJobName:'',
            nameJobJob:'',
            nameJobRate:'',


            text:'收起',
            showNum:0,
            arr:[],
            userInfo:[],
            PartyInfo:[],
            payDate:[],
            riskAcount:[],
            nameJob:[],

            options: [
                 {value: '1',label: '黄金糕'}
            ],
            value: '1',
            value1: '1',
            value2: '',
            // 案件律师信息input-model
            inputArr:[
            {laywerName:'',laywerJob:'',visible:false,laywerName1:'',Id:''}
            ],
            // 当事人信息input-model
            input1Arr:[
            {partyName:'',partyJob:''}
            ],
            partyJobSelectArr:[
                {Id:'1',Value:'当事人'}, {Id:'3',Value:'关联方'}
            ],//当事人类型下拉
            // 付款方式之时间input-model
            timeArr:[
            {dateName:'',payCount:'',describe:''}
            ],
            // 付款方式之风险input-model
            riskArr:[
            {riskName:'',riskCount:'',riskCondition:''}
            ],
             // 付款方式之费率input-model
            nameJobArr:[
            {nameJobName:'',nameJobJob:'',nameJobRate:'',visible:false,nameJobName1:'',Id:''}
            ],
            //对方当事人
            oppositeParty:'',
            oppositePartyArr:[],
            //数据检索
            search:'',
            list:[
                // {Customer_Name_Zh:'风老大',Contact_Party:'15696518682',Id:'1'},
                // {Customer_Name_Zh:'陈老二',Contact_Party:'1569515845',Id:'2'},
                // {Customer_Name_Zh:'刘骜三',Contact_Party:'1536852565',Id:'3'},
                // {Customer_Name_Zh:'马云',Contact_Party:'1569653256',Id:'4'},
                // {Customer_Name_Zh:'敖牛恩',Contact_Party:'1458541236',Id:'5'},
            ] ,
           dialogFormVisible:false,
           costWay:[],
            //律师下拉
            layerSelectArr:[],
            addData:{
                name:'永旭',
                laywerName:'广州金鹏律师事务所'

            },
            //服务内容
            Service_Content:'',
            //合同类型
            fileTypeArr:[{value:'律所合同',Id:1},{value:'客户合同',Id:2}],
            fileType:1,
            //合同上传
            dialogFormVisible1:false,
            dialogFormVisibleWord:false,
           
            Case_Id:'',
            fileName:'',
               nameData:{
                File_Name:'',
            },
            File_Name:'',
            code:'',
            File_Name:'',
            fileName1:'',
            Suffix_Name:'',
            size:'',
            dialogFormVisible:false,
            fileStatus:'',
            //富文本
            editorOption:{
                modules:{
                  
                },
                placeholder:'',
                theme:'snow'
            },
            dialogFormVisible2:false,
            dataWord:{},
            //标的额
            biaodie:'',
        }
    },
          
    methods:{
        openEditor(){
            this.dialogFormVisible2 = true
        },
        deleteLine(i,arr,arr1){
            arr.splice(i,1)
            arr1.splice(i+1,1)
            console.log(arr1)
        },
        pushUserInfo(){
            this.userInfo.push(1)
            this.inputArr.push({laywerName:'',laywerJob:'',visible:false,laywerName1:'',Id:''})  
            // console.log(this.inputArr)
        },
        pushPartyInfo(){
            this.PartyInfo.push(1)
            this.$store.dispatch('addParty')
            this.input1Arr.push({partyName:'',partyJob:''})  
        },
        addPayDate(){
            this.payDate.push(1)
            this.$store.dispatch('addDate')
            this.timeArr.push({dateName:'',payCount:'',describe:''})  
        },
         addRiskAcount(){
            this.riskAcount.push(1)
            this.$store.dispatch('addRisk')
            this.riskArr.push({riskName:'',riskCount:'',riskCondition:''})  
        },
         addNameJob(){
            this.nameJob.push(1)
            this.$store.dispatch('addNameJob')
            this.nameJobArr.push({nameJobName:'',nameJobJob:'',nameJobRate:'',visible:false,nameJobName1:'',Id:''})  
        },
        closeBox(){
           this.$router.push('/index/caseIndex')
        },
        lookContract(data){
              this.checkData()
            // console.log(this.checkData())
            if(this.checkData() == false){
                return false
            }
            var addJson={}
            if(this.costValue == ''||this.costValue == null){
                 this.$message({
                    message:'请选择收费方式',
                    type:'warning'
                });
                return false
            }
            if(this.customValue == 3){
                this.suoshuValue = 0
            }
            if(this.costValue == 8){
            addJson = {
              'userId':localStorage.getItem('userId'),
              'costId':this.customId,
              'userNameC':this.search,
            // 'userNameE':this.userNameE,
              'province':this.province,
              'address':this.address,
              'tel':this.tel,
              'type':this.customValue,
              'suoshuhangye':this.suoshuValue, 
              'job':this.value2,
              'is':this.isValue,
              'cardNo':this.cardNo,
              'compony':this.compony,
              'oppositePart':this.oppositeParty,
              'caseWhy':this.caseWhy,
                    //服务内容
              'Service_Content':this.Service_Content,
                //标的额
                'Target':this.biaodie,
              'caseValue':this.caseValue,
              'caseValue2':this.caseValue2,
              'caseName':this.caseName,
              'caseWay':this.caseWay,
              'textarea':this.textarea,
              'laywerArr':this.inputArr,
            //   'partyArr':this.input1Arr,
            //合同
            'File_Name':this.File_Name,
            'Suffix_Name':this.Suffix_Name,
            'fileName':this.fileName1,
            'size':this.size,
            'Source_Contract':this.fileType,

            "costValue":this.costValue,
            'nameJobArr':this.nameJobArr
              
                }
          }
            
            if(this.costValue == 9){
  addJson = {
              'userId':localStorage.getItem('userId'),
              'costId':this.customId,
             
             'userNameC':this.search,
            //   'userNameE':this.userNameE,
              'province':this.province,
              'address':this.address,
               'suoshuhangye':this.suoshuValue,
                'type':this.customValue,
                'tel':this.tel,
               'job':this.value2,
             
             //服务内容
                'Service_Content':this.Service_Content,
              //标的额
                'Target':this.biaodie,
                'is':this.isValue,
                'cardNo':this.cardNo,
                'compony':this.compony,
                'oppositePart':this.oppositeParty,
                'caseWhy':this.caseWhy,


                'caseValue':this.caseValue,
                'caseValue2':this.caseValue2,
                'caseName':this.caseName,
                'caseWay':this.caseWay,
                'textarea':this.textarea.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;'),


              'laywerArr':this.inputArr,
            //   'partyArr':this.input1Arr,
                'File_Name':this.File_Name,
                'Suffix_Name':this.Suffix_Name,
                'fileName':this.fileName1,
                'size':this.size,
                'Source_Contract':this.fileType,
                "costValue":this.costValue,
               'timeArr':this.timeArr,
            }
            }
            if(this.costValue == 10){
    addJson = {
              'userId':localStorage.getItem('userId'),
              'costId':this.customId,
              'userNameC':this.search,
            //   'userNameE':this.userNameE,
              'province':this.province,
              'address':this.address,
              'tel':this.tel,
              'type':this.customValue,
              'suoshuhangye':this.suoshuValue,
              'job':this.value2,


                    //服务内容
                'Service_Content':this.Service_Content,
                 //标的额
                'Target':this.biaodie,
              'is':this.isValue,
                'cardNo':this.cardNo,
                'compony':this.compony,
                'oppositePart':this.oppositeParty,
                'caseWhy':this.caseWhy,
                'Source_Contract':this.fileType,
                'caseValue':this.caseValue,
                'caseValue2':this.caseValue2,
                'caseName':this.caseName,
                'caseWay':this.caseWay,
                'textarea':this.textarea.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;'),


              'laywerArr':this.inputArr,
            //   'partyArr':this.input1Arr,
                'File_Name':this.File_Name,
                'Suffix_Name':this.Suffix_Name,
                'fileName':this.fileName1,
                'size':this.size,

              "costValue":this.costValue,
              'riskArr':this.riskArr, 
            }
            }
        addJson = JSON.stringify(addJson)
       
        this.dataWord = addJson
         console.log(this.dataWord)
        this.dialogFormVisibleWord =true
           

        },
        addAll(){
            this.checkData()
            // console.log(this.checkData())
            if(this.checkData() == false){
                return false
            }
            var addJson={}
            if(this.costValue == ''||this.costValue == null){
                 this.$message({
                    message:'请选择收费方式',
                    type:'warning'
                });
                return false
            }
            if(this.customValue == 3){
                this.suoshuValue = 0
            }
            if(this.costValue == 8){
            addJson = {
              'userId':localStorage.getItem('userId'),
              'costId':this.customId,
              'userNameC':this.search,
            // 'userNameE':this.userNameE,
              'province':this.province,
              'address':this.address,
              'tel':this.tel,
              'type':this.customValue,
              'suoshuhangye':this.suoshuValue, 
              'job':this.value2,
              'is':this.isValue,
              'cardNo':this.cardNo,
              'compony':this.compony,
              'oppositePart':this.oppositeParty,
              'caseWhy':this.caseWhy,
                    //服务内容
              'Service_Content':this.Service_Content,
               //标的额
                'Target':this.biaodie,

              'caseValue':this.caseValue,
              'caseValue2':this.caseValue2,
              'caseName':this.caseName,
              'caseWay':this.caseWay,
              'textarea':this.textarea,
              'laywerArr':this.inputArr,
            //   'partyArr':this.input1Arr,
            //合同
            'File_Name':this.File_Name,
            'Suffix_Name':this.Suffix_Name,
            'fileName':this.fileName1,
            'size':this.size,
            'Source_Contract':this.fileType,

            "costValue":this.costValue,
            'nameJobArr':this.nameJobArr
              
                }
          }
            
            if(this.costValue == 9){
  addJson = {
              'userId':localStorage.getItem('userId'),
              'costId':this.customId,
             
             'userNameC':this.search,
            //   'userNameE':this.userNameE,
              'province':this.province,
              'address':this.address,
               'suoshuhangye':this.suoshuValue,
                'type':this.customValue,
                'tel':this.tel,
               'job':this.value2,
             
             //服务内容
                'Service_Content':this.Service_Content,
                 //标的额
                'Target':this.biaodie,
             
                'is':this.isValue,
                'cardNo':this.cardNo,
                'compony':this.compony,
                'oppositePart':this.oppositeParty,
                'caseWhy':this.caseWhy,


                'caseValue':this.caseValue,
                'caseValue2':this.caseValue2,
                'caseName':this.caseName,
                'caseWay':this.caseWay,
                'textarea':this.textarea.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;'),


              'laywerArr':this.inputArr,
            //   'partyArr':this.input1Arr,
                'File_Name':this.File_Name,
                'Suffix_Name':this.Suffix_Name,
                'fileName':this.fileName1,
                'size':this.size,
                'Source_Contract':this.fileType,
                "costValue":this.costValue,
               'timeArr':this.timeArr,
            }
            }
            if(this.costValue == 10){
    addJson = {
              'userId':localStorage.getItem('userId'),
              'costId':this.customId,
              'userNameC':this.search,
            //   'userNameE':this.userNameE,
              'province':this.province,
              'address':this.address,
              'tel':this.tel,
              'type':this.customValue,
              'suoshuhangye':this.suoshuValue,
              'job':this.value2,


                    //服务内容
                'Service_Content':this.Service_Content,
                 //标的额
                'Target':this.biaodie,
              'is':this.isValue,
                'cardNo':this.cardNo,
                'compony':this.compony,
                'oppositePart':this.oppositeParty,
                'caseWhy':this.caseWhy,
                'Source_Contract':this.fileType,
                'caseValue':this.caseValue,
                'caseValue2':this.caseValue2,
                'caseName':this.caseName,
                'caseWay':this.caseWay,
                'textarea':this.textarea.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;'),


              'laywerArr':this.inputArr,
            //   'partyArr':this.input1Arr,
                'File_Name':this.File_Name,
                'Suffix_Name':this.Suffix_Name,
                'fileName':this.fileName1,
                'size':this.size,

              "costValue":this.costValue,
              'riskArr':this.riskArr, 
            }
            }
        addJson = JSON.stringify(addJson)
        console.log(addJson)
      
        //console.log(JSON.stringify(addJson))
       // return false
        this.$http.post('/yongxu/Index/AddCases',{
                map:addJson
            }).then((res)=>{
                //  console.log(res)
                if(res.data == true){
                this.$message({
                    message:'添加成功',
                    type:'warning'
                });
                return false
                }else{
                    this.$message({
                    message:'添加失败',
                    type:'warning'
                });
                return false
                }
               
            }).catch((err)=>{
                this.$message({
                    message:'服务器异常',
                    type:'warning'
                });
                return false
            })
        },
        /**验证提交表单 */
        checkData(){
              if(this.search==""||this.search==null){
                this.$message({
                    message:'客户名称不能为空',
                    type:'warning'
                });
                return false
            }
             if(this.customValue==""||this.customValue==null){
                this.$message({
                    message:'客户类型不能为空',
                    type:'warning'
                });
                return false
            }
            if(this.customValue ==3 ){
                 var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
                if(reg.test(this.cardNo) === false) 
                { 
                     this.$message({
                        message:'身份证输入不合法',
                         type:'warning'
                     });
                       return false  
                }
            }  
            if(this.customValue ==4 ){
                if(this.cardNo.length <6) 
                { 
                     this.$message({
                        message:'纳税人编号不合法',
                         type:'warning'
                     });
                       return false  
                }
                 if(this.value1==""||this.value1==null){
                this.$message({
                    message:'请选择所属行业',
                    type:'warning'
                });
                return false
            }
               if(this.value2==""||this.value2==null){
                this.$message({
                    message:'职务不能为空',
                    type:'warning'
                });
                return false
            }
            }
            
            if(this.province==""||this.province==null){
                this.$message({
                    message:'省市区信息不能为空',
                    type:'warning'
                });
                return false
            }
             if(this.address==""||this.address==null){
                this.$message({
                    message:'详细地址不能为空',
                    type:'warning'
                });
                return false
            }
          
             if(this.tel==""||this.tel==null){
                this.$message({
                    message:'联系电话不能为空',
                    type:'warning'
                });
                return false
            }
           
               if(this.isValue==""||this.isValue==null){
                this.$message({
                    message:'请选择是否常年客户',
                    type:'warning'
                });
                return false
            }

            if(this.caseValue==""||this.caseValue==null || this.caseValue2==""||this.caseValue2 ==null ){
                this.$message({
                    message:'请选择案件类型',
                    type:'warning'
                });
                return false
            }
            if(this.caseName==""||this.caseName==null){
                this.$message({
                    message:'案件名称不能为空',
                    type:'warning'
                });
                return false
            }
           if(this.caseWhy==""||this.caseWhy==null){
                this.$message({
                    message:'请选择案由',
                    type:'warning'
                });
                return false
            }
             if(this.compony==""||this.compony==null){
                this.$message({
                    message:'请填写受理机关',
                    type:'warning'
                });
                return false
            }
             if(this.textarea==""||this.textarea==null){
                this.$message({
                    message:'请填写案情简介',
                    type:'warning'
                });
                return false
            }
               if(this.oppositeParty==""||this.oppositeParty==null){
                this.$message({
                    message:'对方当事人不能为空',
                    type:'warning'
                });
                return false
            }
            var arr=[]
            for(var i in this.inputArr){
                arr.push(this.inputArr[i].Id)
            }
           
            //console.log(arr)
            if (arr.indexOf('') != -1){
                 this.$message({
                    message:'请选择律师姓名',
                    type:'warning'
                });
                return false
            }
            var nary=arr.sort();
            console.log(nary)
            for(var i=0;i<arr.length;i++){
                if (nary[i]==nary[i+1]){
                  this.$message({
                    message:'律师数据重复请重新选择',
                    type:'warning'
                    });
                    return false
                }
            }


             var arrJob=[]
            for(var i in this.inputArr){
                arrJob.push(this.inputArr[i].laywerJob)
            }
            if (arrJob.indexOf('') != -1){
                 this.$message({
                    message:'请选择律师职务',
                    type:'warning'
                });
                return false
            }
         
         var arrJob1=[]
            for(var i in this.inputArr){
                arrJob1.push(this.inputArr[i].laywerJob)
            }
            //console.log(arrJob1) //false
           if(arrJob1.indexOf(18) == -1){
                 this.$message({
                    message:'请至少填写一位主办律师',
                    type:'warning'
                });
                return false
            }
            
            //服务内容
              if(this.Service_Content==""||this.Service_Content==null){
                this.$message({
                    message:'服务内容不能为空',
                    type:'warning'
                });
                return false
            }
             //标的额
                if(this.biaodie ==""||this.biaodie==null){
                this.$message({
                    message:'服务内容不能为空',
                    type:'warning'
                });
                return false
            }
            
            // var arrParty=[]
            // for(var i in this.input1Arr){
            //     arrParty.push(this.input1Arr[i].partyName)
            // }
            // if (arrParty.indexOf('') != -1){
            //      this.$message({
            //         message:'当事人姓名不能为空',
            //         type:'warning'
            //     });
            //     return false
            // }

            // var arrPartyJob=[]
            // for(var i in this.input1Arr){
            //     arrPartyJob.push(this.input1Arr[i].partyJob)
            // }
            // if (arrPartyJob.indexOf('') != -1){
            //      this.$message({
            //         message:'请选择当事人类型',
            //         type:'warning'
            //     });
            //     return false
            // }

              if(this.costValue==""||this.costValue==null){
                this.$message({
                    message:'请选择收费方式',
                    type:'warning'
                });
                return false
            }
           
           if(this.costValue==8){

            var arrJobArr8=[]
            for(var i in this.nameJobArr){
                arrJobArr8.push(this.nameJobArr[i].nameJobName)
            }
            if (arrJobArr8.indexOf('') != -1){
                 this.$message({
                    message:'姓名不能为空',
                    type:'warning'
                });
                return false
            }
            var nary=arrJobArr8.sort();
            for(var i=0;i<arrJobArr8.length;i++){
                if (nary[i]==nary[i+1]){
                  this.$message({
                    message:'律师数据重复请重新选择',
                    type:'warning'
                    });
                    return false
                }
            }

            var arrJobArrJob8=[]
            for(var i in this.nameJobArr){
                arrJobArrJob8.push(this.nameJobArr[i].nameJobJob)
            }
            if (arrJobArrJob8.indexOf('') != -1){
                 this.$message({
                    message:'职务不能为空',
                    type:'warning'
                });
                return false
            }
        

             var arrJobJobRate8=[]
            for(var i in this.nameJobArr){
                arrJobJobRate8.push(this.nameJobArr[i].nameJobRate)
            }
            if (arrJobJobRate8.indexOf('') != -1){
                 this.$message({
                    message:'费率不能为空',
                    type:'warning'
                });
                return false
            }
        }

         if(this.costValue==9){
            var arr9=[]
            for(var i in this.timeArr){
                arr9.push(this.timeArr[i].dateName)
            }
            if (arr9.indexOf('') != -1){
                 this.$message({
                    message:'请选择付款日期',
                    type:'warning'
                });
                return false
            }

            var arrMoney=[]
            for(var i in this.timeArr){
                arrMoney.push(this.timeArr[i].payCount)
            }
            if (arrMoney.indexOf('') != -1){
                 this.$message({
                    message:'付款金额不能为空',
                    type:'warning'
                });
                return false
            }
        

             var arrdescribe=[]
            for(var i in this.timeArr){
                arrdescribe.push(this.timeArr[i].describe)
            }
            if (arrdescribe.indexOf('') != -1){
                 this.$message({
                    message:'请输入描述',
                    type:'warning'
                });
                return false
            }
        }

    if(this.costValue==10){
            var arr10=[]
            for(var i in this.riskArr){
                arr10.push(this.riskArr[i].riskCondition)
            }
            if (arr10.indexOf('') != -1){
                 this.$message({
                    message:'请填写描述',
                    type:'warning'
                });
                return false
            }
        }

          if(this.fileType==""||this.fileType==null){
                this.$message({
                    message:'请选择合同类型',
                    type:'warning'
                });
                return false
            }
          if(this.fileType==2){
            if(this.code != 200){
               this.$message({
                    message:'请先上传文件',
                    type:'warning'
                });
                return false  
                }
            }
                return true
        },
        getAlreadyName(id,name){
            this.search = name
            if(id == '' || id== null){
                id =0
            }
            this.customId = id
            this.getCustomInfo()
            this.visible = false
        },
        /** */
        getAlreadyLayerName(){
            this.searchLaywer = name
            if(id == '' || id== null){
                id =0
            }

            this.visible1 = false
        },
        /*获取已存在客户列表*/ 
        getCustomSelect(){
            this.$http.get('/yongxu/Index/Get_All_Customers').then((res) => {
                console.log(res)
                this.list = JSON.parse(JSON.stringify(res.data.Name))
            })
        },
        /**获取客户类型下拉 */
        getCustomType(){
              this.$http.get('/yongxu/Index/Get_All_Customers').then((res) => {
                   /**获取客户类型下拉 */
                //  this.customTypeArr = res.data.Types
                   /**获取所属行业下拉 */
                 this.suoshuhangyeArr = res.data.Industry
             })
        },
        /**获取职务下拉列表 */
        getJobList(){
             this.$http.get('/yongxu/Index/Get_Droplist').then((res) => {
                
                //  this.JobListArr = res.data.Post
                /**获取职务下拉列表 */
                 this.layerSelectArr = res.data.Post
                  /**获取案由下拉 */
                  this.CaseResonArr = res.data.Summary
                   /**获取收费方式下拉 */
                     this.costWay = res.data.AllCharging
                     /**获取律师数据 */
                     this.LawyerNameArr =res.data.Lawyer

                      for (let i = 0; i < this.LawyerNameArr.length; i += 1) {
                        this.LawyerNameArr[i].value =  this.LawyerNameArr[i].Staff_Name;      
                        this.LawyerNameArr[i].Staff_No =  this.LawyerNameArr[i].Staff_No;      
                        }
                     
             })
        },
       
        /**h获取案件类型 */
         getSelectMenu(){
         this.$http.get('/yongxu/Index/GetBoxOne').then((res)=>{
           this.optionMenu = res.data
        })
      },
       getSelectChildeMenu(id){
         this.optionChildMenu = ''
         this.Casevalue1 =''
        //  console.log(id)
         this.selectOneId = id
         this.$http.get('/yongxu/Index/GetBoxTwo',{params:{Id:this.selectOneId}}).then((res)=>{
          
           this.optionChildMenu = res.data  
        })
      },
        changeCostWay(id){
            this.costId = id
        },
        changeId(){
                 
                  this.customId = 0
                  this.userNameE=''
                  this.province=''
                  this.address = ''
                  this.tel=''
                  this.suoshuValue = ''
                  this.value2 = ''
                //   this.customValue = ''
                  this.cardNo=''
                  this.isValue=''
        },

        getCustomInfo(){
             this.$http.get('/yongxu/Index/Get_DetailsCustomer',{params:{Id:this.customId}}).then((res)=>{ 
                //  console.log(res)
                  this.userNameE=res.data.Customer_Name_En
                  this.province=res.data.City
                  this.address = res.data.Detailed_Address
                  this.tel=res.data.Contact_Party
                  this.suoshuValue = res.data.TradeId
                  this.value2 = res.data.Position
                  this.customValue = res.data.CustomerId
                  this.cardNo =res.data.Customer_Number
                  this.isValue=res.data.Identification
        })
           
        },
        /**默认律师姓名 */
        getInitName(){
            this.$http.get('/yongxu/Index/Get_Lawyer_Default',{params:{User_Id:localStorage.getItem('userId')}}).then((res)=>{
                // console.log(res)
                this.inputArr[0].laywerName=res.data.Staff_Name
                 this.inputArr[0].Id=res.data.Id
                 this.inputArr[0].laywerJob = 18
            })
        },
        /**改变客户类型 */
        changeCustomType(){
                this.customId = 0
                this.userNameE=''
                  this.province=''
                  this.address = ''
                  this.tel=''
                  this.suoshuValue = ''
                  this.value2 = ''
                //   this.search = ''
                  this.cardNo=''
                  this.isValue=''
        },
      /**律师姓名下拉查询 */
      querySearch(queryString, cb) {
        // console.log(this.LawyerNameArr)
        var restaurants =  this.LawyerNameArr
      
        // console.log(restaurants)
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
     
     /**选择律师姓名 */
      handleSelect(item) {
        this.inputArr[0].laywerName=item.value
        this.inputArr[0].Id=item.Id        
        this.inputArr[0].visible=false
        //查找制定元素在数组中的索引值
    //     console.log(this.LawyerNameArr)
    //     var arr =[]
    //     for(var i=0;i<this.LawyerNameArr.length;i++){
    //         arr.push(this.LawyerNameArr[i].value)
    //     }
        
    //    this.LawyerNameArr.splice(arr.indexOf(item.value),1)
    //     console.log(this.LawyerNameArr);
    //     console.log(item);
    //     const res = this.restaurants.filter((item) => { return item.value=== this.inputArr[0].laywerName;});
    //     console.log(res)
      },
      handleSelect1(item,i){
          console.log(i)
          console.log(item);
           this.inputArr[i+1].laywerName=item.value
           this.inputArr[i+1].Id=item.Id     
           this.inputArr[i+1].visible=false
    //         var arr =[]
    //     for(var i=0;i<this.LawyerNameArr.length;i++){
    //         arr.push(this.LawyerNameArr[i].value)
    //     }
        
    //    this.LawyerNameArr.splice(arr.indexOf(item.value),1)
    //     console.log(this.LawyerNameArr);
      },
      blurInput(){
         this.inputArr[0].laywerName1 = ''
      },
     blurInput1(i){
         this.inputArr[i+1].laywerName1 = ''
      },
       /**小时收费选择律师姓名 */
      handleSelectNameArr(item) {
        // console.log(item);
        this.nameJobArr[0].nameJobName=item.value
        this.nameJobArr[0].Id=item.Id        
        this.nameJobArr[0].visible=false
        // const res = this.restaurants.filter((item) => { return item.value=== this.inputArr[0].laywerName;});
        //console.log(res)
      },
      handleSelect1NameArr(item,i){
        //   console.log(i)
        //   console.log(item);
           this.nameJobArr[i+1].nameJobName=item.value
           this.nameJobArr[i+1].Id=item.Id     
           this.nameJobArr[i+1].visible=false
      },
      blurInputNameArr(){
         this.nameJobArr[0].nameJobName1 = ''
      },
      blurInput1NameArr(i){
         this.nameJobArr[i+1].nameJobName1 = ''
      },
    //文件上传
    picUpload(){
        this.dialogFormVisible1 = true
        this.nameData.File_Name = ''
        this.fileName = ''
    },
      //保存上传文件
            saveDoc(){
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
                }).then((res)=>{
                    console.log(res)
                    if(res.data == true){
                          this.$message({
                        message:'保存成功',
                        type:'success'
                    });
                     this.dialogFormVisible = false
                    this.changeState(2)
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
    //上传回调
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
                    this.dialogFormVisible1 = false
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
            console.log(file.name)
             var json = file.name.split(".")
             var file_name =json[0];
             this.fileName = file_name
             this.nameData.File_Name = this.fileName
            
          },
    },
    created(){
        this.customValue=3
    },
    mounted(){
       this.getCustomSelect()
    //    this.getDroplist()
       this.getCustomType()
     //  this.getSuoShuHangYeType()
       this.getJobList()
       this.getSelectMenu()
       this.getInitName()
    },
    computed:{
        //数据检索
         items: function() {
            var _search = this.search;
            if (_search) {
                //不区分大小写处理
                var reg = new RegExp(_search, 'ig')
                // console.log(reg)
                // console.log(this.list)
                //es6 filter过滤匹配，有则返回当前，无则返回所有
                return this.list.filter(function(e) {
                    //匹配所有字段
                    // return Object.keys(e).some(function(key) {
                    //     return e[key].match(reg);
                    // })
                    //匹配某个字段
                      return e.Customer_Name_Zh.match(reg);
                })
            };
            return this.list;
        },

    },
    components:{
        'caseWordAdd':caseWordAdd,
    },
}
</script>

<style lang="scss">
@import '../../assets/sass/caseAdd.scss';
@import '../../assets/sass/main.css';
.td-width{
    text-align: center;
    width:100px
}
.tr{
    cursor: pointer;
    height: 30px;
}
.tr:hover{
    background: #ccc;
}
.userInfo-first .el-input__inner{
    width: 200px;
    border-radius: 0px;
}
.address{
    width: 90%;
    margin: auto;
    margin-top: 20px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.address-title{
        font-size: 14px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: #333333;
    min-width: 110px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;

}
.long-width{
    width: 72.5%;
}
.rmb{
    margin-left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color:#999999;
}
.search_laywer_div{
    position: relative;
    width: 100%;
    
}
.search_laywer{
    border: 1px solid #999;
    border-radius: 25px;
    width: 100%;
    height: 30px;
   text-indent:40px;
}
.search_lawer_btn{
    position: absolute;
    left: 14px;
    top:9px; 
}
.inline-input{
      .el-input__inner{
                        border-radius: 50px;
                        outline: none;
                        position: relative;
                        height: 30px;
                        i{
                            position: absolute;
                            left: 14px;
                            top:9px; 
                        }
                        &:focus{
                            border-color:#ccc;
                        }
                    }
        .el-input__icon {
    height: 100%;
    width: 25px;
    text-align: center;
    -webkit-transition: all .3s;
    transition: all .3s;
    line-height: 30px;
}

}
.serve_content{
    border: 1px solid #ccc;
    margin-left: 7px;
    margin-top: 10px;
    font-size: 14px;
    font-size: 14.0pt;
    height: 100px;
    overflow: auto;
    text-overflow:ellipsis;
}
.el-autocomplete-suggestion li{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    p{
        color: #999;
    }
    &:hover{
        background: #000000;
        opacity: 0.8;
        color: #ffffff;
    }
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;
        display: flex;
      flex-direction: row;
      justify-content: space-between;
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
.shangchuan_btn{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    color: #FFF;
    background-color: #7E2C2E;
    border-color: #7E2C2E;
    margin-left: 43px;
}
</style>

