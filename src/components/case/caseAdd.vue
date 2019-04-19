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
                <div class="add-userinfo-left flex">
   

                      <el-popover placement="bottom" width="200" trigger="click" v-model="visible">
                        <div class="flex" slot="reference"><p class="title">客户名称(中)</p><input type="text" class="common-input" placeholder="请输入" v-model="search" @change="changeId()"/></div>
                            <div>
                                <table style="width:100%">
                                    <thead>
                                        <th >客户名称</th>  
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,index) in items" :key="index" @click="getAlreadyName(item.Id,item.Customer_Name_Zh)" class="tr">
                                             <td>{{item.Customer_Name_Zh}}</td> 
                                        </tr>
                                       
                                    </tbody>
                                </table>
                           </div>
                        </el-popover>
                   
                     
                     


                    <div class="flex"><p class="title">客户名称(英)</p><input type="text" class="common-input" placeholder="请输入" v-model="userNameE"/></div>
                    <div class="flex"><p class="title">省/市地区</p> <input type="text" class="common-input" placeholder="请输入" v-model="province"/></div>
                    <div class="flex"><p class="title">详细地址</p> <input type="text" class="common-input" placeholder="请输入" v-model="address"/></div>
                </div>
                  <div class="add-userinfo-left selectInput flex userInfo-first">
                        <div class="flex"><p class="title">客户类型</p> 
                  <el-select v-model="value" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
                        </div>
                        <div class="flex"><p class="title">所属行业</p>
                  <el-select v-model="value1" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>                        
                        </div>
                        <div class="flex"><p class="title">职务</p>
                  <el-select v-model="value2" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>                        
                         </div>
                    <div class="flex"><p class="title">联系电话</p> <input type="text" class="common-input" placeholder="请输入" v-model="address"/></div>
                       
                    </div>
                    </div>
                 </div>
                 <div class="add-caseinfo add-userinfo flex">
                        <p class="add-userinfo-p">案件基本信息</p>
                <div class="flex add-userinfo-index">
                <div class="add-userinfo-left flex">
                    <div class="flex selectInput1" id="selectInput1">
                    <p class="title">选择案件类型</p>
                    <el-select  v-model="value2" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
                    <el-select  v-model="value2" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>

                    </div>
                    <div class="flex"><p class="title">案件名称</p><input type="text" class="common-input" placeholder="请输入"/></div>
                    <div class="flex"><p class="title">案由</p> <input type="text" class="common-input" placeholder="请输入"/></div>
                    <!-- <div class="flex"><p class="title">详细地址</p> <input type="text" class="common-input" placeholder="请输入"/></div> -->
                </div>
                  <div class="add-userinfo-left flex">
                        <div class="flex"><p class="title f-f">案情简介</p> 
                        <textarea name="" id="" cols="40" rows="8" class="textarea" v-model="textarea"></textarea>
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
                        <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="inputArr[0].laywerName"/>
                        <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="inputArr[0].laywerJob"/>  
                        <div class="input-icon"></div>
                    </div>
                      <div class="flex" v-for="(v,i) in userInfo" :key="i">
                        <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="inputArr[i+1].laywerName"/>
                        <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="inputArr[i+1].laywerJob"/>  
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
                        <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="input1Arr[0].partyName"/>
                        <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="input1Arr[0].partyJob"/>  
                        <div class="input-icon"></div>
                    </div>
                      <div class="flex" v-for="(v,i) in PartyInfo" :key="i">
                        <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="input1Arr[i+1].partyName"/>
                        <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="input1Arr[i+1].partyJob"/>  
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
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="timeArr[0].dateName"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="timeArr[0].payCount"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="timeArr[0].describe"/>
                       <div class="input-icon"></div>
                    </div>
                    <div class="flex" v-for="(v,i) in payDate" :key="i">
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="timeArr[i+1].dateName"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="timeArr[i+1].payCount"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="timeArr[i+1].describe"/>
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
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="riskArr[0].riskName"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="riskArr[0].riskCount"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="riskArr[0].riskCondition"/>
                     <div class="input-icon"></div>
                    </div>
                    <div class="flex" v-for="(v,i) in riskAcount" :key="i">
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="riskArr[i+1].riskName"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="riskArr[i+1].riskCount"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="riskArr[i+1].riskCondition"/>
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
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[0].nameJobName"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[0].nameJobJob"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[0].nameJobRate"/>
                     <div class="input-icon"></div>
                      
                    </div>
                    <div class="flex" v-for="(v,i) in nameJob" :key="i">
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[i+1].nameJobName"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[i+1].nameJobJob"/>
                    <input type="text" class="common-input lawyer-input" placeholder="请输入" v-model="nameJobArr[i+1].nameJobRate"/>
                    <div class="input-icon" @click="deleteLine(i,nameJob)"><i class="el-icon-remove"></i></div>
                    </div>
                   </div>  
                    <div class="add-icon flex" @click="addNameJob()"><i class="el-icon-circle-plus"></i><p>添加</p></div>
                 </div>
              </div>
                
                <div class="end-btn flex">
                    <button class="btn btn1">预览合同</button> <button class="btn btn2" @click="addAll()">提交审核</button>
                </div>
             </div>
    </div>
</template>
<script>
import qs from 'qs';
export default {
    data(){
        return{
            customId:'',
            visible: false,
            textarea:'',
           
            userNameC:'',
            userNameE:'',
            province:'',
            address:'',
           
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
            value2: '1',
            // 案件律师信息input-model
            inputArr:[
            {laywerName:'',laywerJob:''}
            ],
            // 当事人信息input-model
            input1Arr:[
            {partyName:'',partyJob:''}
            ],
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
            {nameJobName:'',nameJobJob:'',nameJobRate:''}
            ],

            //数据检索
            search:'',
            list:[
                {Customer_Name_Zh:'风老大',msg:'15696518682',Id:'1'},
                {Customer_Name_Zh:'陈老二',msg:'1569515845',Id:'1'},
                {Customer_Name_Zh:'刘骜三',msg:'1536852565',Id:'1'},
                {Customer_Name_Zh:'马云',msg:'1569653256',Id:'1'},
                {Customer_Name_Zh:'敖牛恩',msg:'1458541236',Id:'1'},
            ] ,
           
        }
    },
    methods:{
        deleteLine(i,arr){
            arr.splice(i,1)
        },
        pushUserInfo(){
            this.userInfo.push(1)
            this.inputArr.push({laywerName:'',laywerJob:''})  
            console.log(this.inputArr)
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
            this.nameJobArr.push({nameJobName:'',nameJobJob:'',nameJobRate:''})  
        },
        closeBox(){
           this.$router.push('/index/caseIndex')
        },
        addAll(){
          var addJson = {
              'userNameC':this.userNameC,
              'userNameE':this.userNameE,
              'province':this.province,
              'address':this.address,
              'type':this.value,
              'suoshuhangye':this.value1,
              'job':this.value2,
              'laywerArr':this.inputArr,
              'partyArr':this.inputArr,
              'timeArr':this.timeArr,
              'riskArr':this.riskArr,
              'nameJobArr':this.nameJobArr,
              'textarea':this.textarea
          }
          addJson = JSON.stringify(addJson)
            console.log(this.customId)
        var data = qs.stringify({
                str:addJson
                },{ indices: false });
          console.log(JSON.parse(addJson))
            // this.$http.post('',param).then(()=>{
            // })
        },
        getAlreadyName(id,name){
            this.search = name
            if(id == '' || id== null){
                id =0
            }
            this.customId = id
          
            this.visible = false
        },
        getCustomSelect(){
            // this.$http.get('/yongxu/Index/Get_All_Customers').then((res) => {
            //     console.log(res)
            //     this.list = res.data.Name
            // })
        },
        changeId(){
            this.customId = ''
        }
    },
    mounted(){
       this.getCustomSelect()
    },
    computed:{
        //数据检索
         items: function() {
            var _search = this.search;
            if (_search) {
                //不区分大小写处理
                var reg = new RegExp(_search, 'ig')
                //es6 filter过滤匹配，有则返回当前，无则返回所有
                return this.list.filter(function(e) {
                    //匹配所有字段
                    return Object.keys(e).some(function(key) {
                        return e[key].match(reg);
                    })
                    //匹配某个字段
                    //  return e.name.match(reg);
                })
            };
            return this.list;
        }
    },
}
</script>

<style lang="scss">
@import '../../assets/sass/caseAdd.scss';
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
</style>

