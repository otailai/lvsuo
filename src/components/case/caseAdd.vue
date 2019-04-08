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
                    <span @click="showHide()" class="flex">
                    <p class="add-p-p">{{text}}</p><i class="el-icon-d-arrow-right" ref="icon_right"></i>
                    </span>
                    </div>
                <div class="add-userinfo flex" v-show="this.showNum==0">
                <p class="add-userinfo-p">客户基本信息</p>
                <div class="flex add-userinfo-index">
                <div class="add-userinfo-left flex">
                    <div class="flex"><p class="title">客户名称(中)</p><input type="text" class="common-input" placeholder="请输入"/></div>
                    <div class="flex"><p class="title">客户名称(英)</p><input type="text" class="common-input" placeholder="请输入"/></div>
                    <div class="flex"><p class="title">省/市地区</p> <input type="text" class="common-input" placeholder="请输入"/></div>
                    <div class="flex"><p class="title">详细地址</p> <input type="text" class="common-input" placeholder="请输入"/></div>
                </div>
                  <div class="add-userinfo-left flex">
                        <div class="flex"><p class="title">客户类型</p> 
                  <el-select v-model="value" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
                        </div>
                        <div class="flex"><p class="title">所属行业</p>
                  <el-select v-model="value" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>                        
                        </div>
                        <div class="flex"><p class="title">职务</p>
                  <el-select v-model="value" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>                        
                         </div>
                       
                    </div>
                    </div>
                 </div>
                 <div class="add-caseinfo add-userinfo flex">
                        <p class="add-userinfo-p">案件基本信息</p>
                <div class="flex add-userinfo-index">
                <div class="add-userinfo-left flex">
                    <div class="flex"><p class="title">选择案件类型</p><input type="text" class="common-input" placeholder="请输入"/></div>
                    <div class="flex"><p class="title">案件名称</p><input type="text" class="common-input" placeholder="请输入"/></div>
                    <div class="flex"><p class="title">案由</p> <input type="text" class="common-input" placeholder="请输入"/></div>
                    <!-- <div class="flex"><p class="title">详细地址</p> <input type="text" class="common-input" placeholder="请输入"/></div> -->
                </div>
                  <div class="add-userinfo-left flex">
                        <div class="flex"><p class="title f-f">案情简介</p> 
                        <textarea name="" id="" cols="40" rows="8" class="textarea"></textarea>
                        </div>
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
                        <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                        <input type="text" class="common-input lawyer-input" placeholder="请输入"/>  
                        <div class="input-icon"></div>
                    </div>
                      <div class="flex" v-for="(v,i) in userInfo" :key="i">
                        <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                        <input type="text" class="common-input lawyer-input" placeholder="请输入"/>  
                        <div class="input-icon" @click="deleteLine(i,userInfo)"><i class="el-icon-remove"></i></div>
                    </div>
                     
                    </div>
                    </div>

              
                <div class="add-lawyer  lex">
                <div class="add-lawyer-title flex"> 
                     <p class="add-userinfo-p">当事人信息</p>
                     <span @click="pushPartyInfo()"><i class="el-icon-circle-plus"></i> 其他当事人</span>
                 </div>  
                <div class="flex  add-lawyer-index">
             
                  <div class="flex">
                        <p class="title">姓名</p>
                         <p class="title">职务</p>
                           <p class="input-icon"></p>
                    </div>
                    <div class="flex">
                        <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                        <input type="text" class="common-input lawyer-input" placeholder="请输入"/>  
                        <div class="input-icon"></div>
                    </div>
                      <div class="flex" v-for="(v,i) in PartyInfo" :key="i">
                        <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                        <input type="text" class="common-input lawyer-input" placeholder="请输入"/>  
                        <div class="input-icon" @click="deleteLine(i,PartyInfo)"><i class="el-icon-remove"></i></div>
                    </div>
                    </div>
                    </div>
                 </div>
                    

                 <div class="add-method flex">
                     <div class="add-method-index flex">
                    <p>收费方式</p>
                     <div class="select-input">
                     <el-select v-model="value" placeholder="请选择">
                         <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                         </el-select>                           
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
                    <div class="flex">
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                       <div class="input-icon"></div>
                    </div>
                    <div class="flex" v-for="(v,i) in payDate" :key="i">
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                       <div class="input-icon" @click="deleteLine(i,payDate)"><i class="el-icon-remove"></i></div>
                    </div>
                   </div>  
                    <div class="add-icon flex" @click="addPayDate()"><i class="el-icon-circle-plus"></i><p>添加</p></div>
                 </div>
                </div>
                 

                    
                 <div class="add-Pay add-job">
                    <div class="add-Pay-index flex">
                   <div class="add-Pay-index-child">
                    <div class="flex">
                        <p class="title">风险金额</p>
                        <p class="title">基本金额</p>
                        <p class="title">风险达成条件</p>
                         <p class="input-icon"></p>
                    </div>
                    <div class="flex">
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                     <div class="input-icon"></div>
                    </div>
                    <div class="flex" v-for="(v,i) in riskAcount" :key="i">
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                     <div class="input-icon" @click="deleteLine(i,riskAcount)"><i class="el-icon-remove"></i></div>
                    </div>
                   </div>  
                    <div class="add-icon flex" @click="addRiskAcount()"><i class="el-icon-circle-plus"></i><p>添加</p></div>
                 </div>
              </div>
                
                          <div class="add-Pay add-job">
                    <div class="add-Pay-index flex">
                   <div class="add-Pay-index-child">
                    <div class="flex">
                        <p class="title">姓名</p>
                        <p class="title">职务</p>
                        <p class="title">费率</p>
                        <p class="input-icon"></p>
                    </div>
                    <div class="flex">
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                     <div class="input-icon"></div>
                      
                    </div>
                    <div class="flex" v-for="(v,i) in nameJob" :key="i">
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入"/>
                    <div class="input-icon" @click="deleteLine(i,nameJob)"><i class="el-icon-remove"></i></div>
                    </div>
                   </div>  
                    <div class="add-icon flex" @click="addNameJob()"><i class="el-icon-circle-plus"></i><p>添加</p></div>
                 </div>
              </div>
                
                <div class="end-btn flex">
                    <button class="btn btn1">预览合同</button> <button class="btn btn2">提交审核</button>
                </div>
             </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            text:'收起',
            showNum:0,
            arr:[],
            userInfo:[],
            PartyInfo:[],
            payDate:[],
            riskAcount:[],
            nameJob:[],
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
            value: ''
             
            
        }
    },
    methods:{
        // deleteLine(i){
        //     this.arr.splice(i,1)
        // },
        deleteLine(i,arr){
            arr.splice(i,1)
        },
        pushUserInfo(){
            this.userInfo.push(1)
        },
        pushPartyInfo(){
              this.PartyInfo.push(1)
        },
        addPayDate(){
              this.payDate.push(1)
        },
         addRiskAcount(){
              this.riskAcount.push(1)
        },
         addNameJob(){
              this.nameJob.push(1)
        },
        showHide(event){
            if( this.showNum==0 ){
                this.showNum=1
            this.$refs.icon_right.style.transform = "rotate(-90deg)"
            this.text="展开"
            }else{
            this.showNum=0
            this.$refs.icon_right.style.transform = "rotate(90deg)"
             this.text="收起"
            }
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/sass/caseAdd.scss'
</style>

