<template>
    <div id="case" class="case">
              <div class="flex title-case"><i class="el-icon-service"></i><p>组织架构</p></div>  
              <div class="contract">
                  <ul class="contract-ul flex">
                      <li class="contract-li">
                          <p>民事诉讼合同</p>
                      </li>
                      <li class="contract-li">
                           <p>民事诉讼合同</p>
                      </li>
                      <li class="contract-li">
                           <p>民事诉讼合同</p>
                      </li>
                      <li class="contract-li">
                           <p>民事诉讼合同</p>
                      </li>
                      <li class="contract-li add-li">
                                     <i class="el-icon-circle-plus-outline"></i>
                                <p>新增模板</p>
                      </li>
                  </ul>
              </div>

    </div>
</template>
<script>
import store from '../../vuex/store'
  export default {
    data() {
      return {
      
       
      
      };
    },
    methods: {
 
    },
    mounted(){
     
    },
    components:{
      
    }
  };
</script>
<style>
@import '../../assets/sass/main.css';
.contract-ul{
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.contract-li{
    width: 130px;
    height: 200px;
    /* background: #000; */
    margin-right: 50px;
     margin-top: 50px;
    border-radius: 5px;
    box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.contract-li:hover{
    cursor: pointer;
}
.add-li i{
    font-size: 18px;
}
</style>


