<template>
    <div class="caseAdd">
            <div class="add-top flex p-l">
                <p>所在位置：</p>
                <p>案件管理</p>
                <p><i class="el-icon-arrow-right"></i></p>
                <p>案件详情</p>
            </div>
             <div class="add-content flex">
                <!-- <div class="add-p flex"><p class="add-p-p">收起</p><i class="el-icon-d-arrow-right"></i></div> -->
                <div class="add-userinfo flex">
                <p class="add-userinfo-p">客户基本信息</p>
                <div class="flex add-userinfo-index">
                <div class="add-userinfo-left flex">
                    <div class="flex"><p class="title">客户名称(中)</p><p>陈小明</p></div>
                    <div class="flex"><p class="title">客户名称(英)</p><p>chenxiaoming</p></div>
                    <div class="flex"><p class="title">省/市地区</p><p>广州省广州市</p></div>
                    <div class="flex"><p class="title">详细地址</p><p>海珠区客村江贝大道1号1栋4楼</p></div>
                </div>
                  <div class="add-userinfo-left flex">
                        <div class="flex"><p class="title">客户类型</p> 
                        <p>【诉讼】劳动仲裁</p>
                        </div>
                        <div class="flex"><p class="title">所属行业</p>
                        <p>矿产</p>
                        </div>
                        <div class="flex"><p class="title">职务</p>
                        <p>助理</p>
                         </div>
                           <div class="flex"><p class="title">联系方式</p>
                        <p>13800138000</p>
                         </div>
                       
                    </div>
                    </div>
                 </div>
                 <div class="add-caseinfo add-userinfo flex">
                        <p class="add-userinfo-p">客户基本信息</p>
                <div class="flex add-userinfo-index">
                <div class="add-userinfo-left flex">
                    <div class="flex"><p class="title">案件类型</p><p>诉讼——民事</p></div>
                    <div class="flex"><p class="title">案件名称</p><p>民事诉讼</p></div>
                    <div class="flex"><p class="title">案由</p><p>金钱纠纷</p></div>
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
                    <div class="flex info">
                     <p class="p">赵日天</p>
                       <p class="p">主办律师</p>
                        <p class="input-icon"></p>
                    </div>
                       <div class="flex info">
                     <p class="p">赵日天</p>
                       <p class="p">主办律师</p>
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
                         <p class="title">职务</p>
                           <p class="input-icon"></p>
                    </div>
                    <div class="flex info">
                     <p class="p">赵日天</p>
                       <p class="p">主办律师</p>
                        <p class="input-icon"></p>
                    </div>
                    </div>
                    </div>
                 </div>
                    

                 <div class="add-method flex">
                     <div class="add-method-index flex">
                    <p>收费方式</p>
                     <div class="select-input">
                     <el-select v-model="value" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>                           
                     </div>
                     </div>
                     </div> 

                     <div class="add-Pay add-job">

                    <div class="add-Pay-index flex">
                   <div class="add-Pay-index-child">
                    <div class="flex">
                        <p class="title">付款日期</p>
                        <p class="title">付款日期</p>
                        <p class="title">付款日期</p>
                         <p class="input-icon"></p>
                    </div>
                    <div class="flex">
                   <p>2019-04-40</p>
                    <p>2019-04-40</p>
                     <p>2019-04-40</p>
                    <div class="input-icon"></div>
                    </div>
                  
                   </div>  
                
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
                    <p>40000</p>
                    <p>40000</p>
                    <p>本费用与2019年3月31前支付</p>   
                     <div class="input-icon"></div>
                    </div>
                    
                   </div>  
                    
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
                  <p>赵日天</p>
                  <p>主办律师</p>
                  <p>1000RMB/小时</p>
                      <div class="input-icon"></div>
                    </div>
                 
                   </div>  
              
                 </div>
              </div>
                
                <div class="end-btn flex">
                 
                </div>
             </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[1]
            
        }
    },
    methods:{
        deleteLine(i){
               this.arr.splice(i,1)
        },
        pushLine(){
            this.arr.push(1)
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/sass/caseAdd.scss'
</style>

