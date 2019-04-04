<template>
    <div class="caseAdd">
            <div class="add-top flex p-l">
                <p>所在位置：</p>
                <p>案件管理</p>
                <p><i class="el-icon-arrow-right"></i></p>
                <p>案件详情</p>
            </div>
             <div class="add-content flex">
                <div class="add-p flex"><p class="add-p-p">收起</p><i class="el-icon-d-arrow-right"></i></div>
                <div class="add-userinfo flex">
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
                        <p class="add-userinfo-p">客户基本信息</p>
                <div class="flex add-userinfo-index">
                <div class="add-userinfo-left flex">
                    <div class="flex"><p class="title">选择案件类型</p><input type="text" class="common-input" placeholder="请输入"/></div>
                    <div class="flex"><p class="title">案件名称</p><input type="text" class="common-input" placeholder="请输入"/></div>
                    <div class="flex"><p class="title">案由</p> <input type="text" class="common-input" placeholder="请输入"/></div>
                    <div class="flex"><p class="title">详细地址</p> <input type="text" class="common-input" placeholder="请输入"/></div>
                </div>
                  <div class="add-userinfo-left flex">
                        <div class="flex"><p class="title f-f">案情简介</p> 
                        <textarea name="" id="" cols="30" rows="10" class="textarea"></textarea>
                        </div>
                    </div>
                    </div>
                 </div>
                 <div class="add-lawyer "></div>       
                 <div class="add-method"></div> 
                 <div class="add-Pay"></div>
                 <div class="add-risk"></div>
                 <div class="add-job"></div>
             </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
@import '../../assets/sass/caseAdd.scss'
</style>

