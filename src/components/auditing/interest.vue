<template>
    <div class="case">
           <div class="add-top flex">
                <p>所在位置：</p>
                <router-link to='/index/auditingIndex' tag="a">审核</router-link>
                <p><i class="el-icon-arrow-right"></i></p>
                <p>利益检索</p>

            </div>
            <div class="flex closeX"><i class="el-icon-close" @click="closeX()"></i></div>
            <div class="flex case-child3">
                  <div class="search-div flex">
                    <div class="input-search flex">
                      <i class="el-icon-search ii"></i>
                     <input placeholder="请输入关键词搜索"  v-model="input1" class="case-input"/>
                      <button class="case-button"><i class="el-icon-search"></i></button>
                    </div>  
                  </div>               
                      <div class="search-table">
                         <div class="showNum">共检测到：3条结果</div>
                      <el-table :data="tableData" border style="width: 100%"  @row-click="lineCilck">
                      <el-table-column prop="date" label="案件名称" width="180"></el-table-column>
                      <el-table-column prop="name" label="客户名称" width="180"> </el-table-column>
                      <el-table-column prop="title" label="当事人"> </el-table-column>
                      <el-table-column prop="title" label="对方当事人"> </el-table-column>
                      <el-table-column prop="title" label="经办律师"> </el-table-column>
                      <el-table-column prop="title" label="收案日期"> </el-table-column>
                      </el-table>
                    </div>
            </div>
            <div class="flex footer"><el-button class="red">返回修改</el-button><el-button class="red1">审核通过</el-button></div>
    </div>
</template>
<script>
import auditingIndexVue from './auditingIndex.vue';
export default {
    data(){
        return{
            input:'',
            input1:'',
            tableData:[{date:'123',name:'23132',title:'2132132133'},{date:'123',name:'23132',title:'2132132133'},{date:'123',name:'23132',title:'2132132133'},{date:'123',name:'23132',title:'2132132133'},]
        }
    },
    methods:{
        closeX(){
            this.$router.push('./auditingIndex')
        }
    }
}
</script>
<style>
@import '../../assets/sass/main.css';
.closeX{
    flex-direction: row;
    justify-content: flex-end;
}
.closeX i {
    font-size: 18px;
    cursor: pointer;
}
.footer{
    margin-top: 50px;
    justify-content: center;
}
.red{
    background: #A92A2E;
    color: #fff;
    border-radius: 0px;

}
.el-button:hover {
    color: #fff;
    border-color: #A92A2E;
    background-color: #A92A2E;
}
.red1{
    background: #7E2C2E;
    color: #fff;
    border-radius: 0px;
}
</style>


