<template>
    <div>
      <button @click="getPdf()">pdf</button>
      <button @click="pdfDom()">打印</button>
      <p>案件条形码预览下载界面</p>
       <div class="printOrder_box"  ref="div" id="pdfDom">
            <p class="printOrder" v-for="(v,k) in list" :key="k">
             <barcode :value="v" :options="barcode_option" tag="svg" class="svg"></barcode>
            </p>
       </div>
        
    </div>
</template>
<script>
import barcode from '@xkeshi/vue-barcode'; //导入条形码插件
export default {
    data(){
        return{
        htmlTitle: '条形码PDF',
        barcode_option:{
        displayValue: true, //是否默认显示条形码数据
        //textPosition  :'top', //条形码数据显示的位置
        background: '#fff', //条形码背景颜色
        valid: function (valid) {
          console.log(valid)
        },
        width:'2px',//单个条形码的宽度
        height: '70px',
        fontSize: '14px' //字体大小
        },
        list:[],
        }
    
    },
    props:['codeList'],
    methods:{    
        getData(){
        this.list = this.codeList
        console.log(this.list)
        },
         pdfDom(){
            this.$print(this.$refs.div) // 使用
        },
        getDoc(){
                 $('#pdfDom1').wordExport('条形码')
        }, 
    },
    mounted(){
        this.getData()
    },
    components:{
        barcode
    },
     watch:{
        codeList:function(newValue,oldValue){
        this.getData();
        }
    }
}

</script>
<style>
.printOrder_box{
    width: 90%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    display: flex
}
.printOrder{
   width: 250px;
   margin-top: 20px;
}

</style>