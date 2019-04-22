<template>
    <div>
     <button @click="getPdf()">下载pdf</button>
    <div style="width:794px;margin:auto;padding-bottom:20px" ref="div" id="pdfDom">
        <div class="flex first">(2017[1])穗金鹏民字第[2]号</div>
        <p class="title11">民 事 委 托 代 理</p>
        <p class="height"></p>
        <p class="height">合</p>
        <p class="height"></p>
        <p class="height">同</p>
        <p class="height"></p>
        <p class="height">书</p>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
        <div class="input1 flex">
            <p class="input1-p">聘请方:</p><span class="input1-input" >{{name}}</span>
        </div>
         <div class="height"></div>
         <div class="input1 flex">
            <p class="input1-p">受聘聘方:</p><span class="input1-input">{{laywerName}}</span>
        </div>
        <p class=MsoNormal align=right style='text-align:right;line-height:22.0pt;
            mso-line-height-rule:exactly'><span lang=EN-US style='font-size:14.0pt;
            font-family:仿宋_GB2312;letter-spacing:.1pt'></span></p>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
<div class="WordSection1" style="layout-grid: 15.6pt;"  v-html="data"></div>
    </div>
      </div>     

</template>
<script>
import { setTimeout } from 'timers';
export default {
    
    data(){
        return{
            //聘请方
            htmlTitle: '页面导出PDF文件名',
            name:'陈永旭',
            //受聘
            laywerName:'广州金鹏律师事务所',
            div:'',
            //甲方
            Aname:'隔壁老王',
            Aleader:'法人',
            Aaddress:'广东省广州市天河区兴民路222号之三天盈广场东塔45楼',
            Atel:'110120114',
            Afax:'1231-124',
            Acode:'404000',
            //乙方
            Bname:'广州金鹏律师事务所',
            Baddress:'广东省广州市天河区兴民路222号之三天盈广场东塔45楼',
            Btel:'（020）38390333',
            Bfax:'020）38390218',
            Bcode:'510623',
            //
            text:'赵四',
            text1:'马化腾',
            text2:'马云',
            text3:'200',
            text4:'90',
            text5:'180',
            text6:'1',
            text7:'2019',
            text8:'8',
            text9:'10',
            text10:'十',
            text11:'',
            text12:'2019',
            text13:'4',
            text14:'19',
            text15:'2019',
            text16:'8',
            text17:'28',
           
           text18:'2019',
            text19:'8',
            text20:'29',
            custom_name:'委托人姓名',
            data:'',
                //逾期几日
                
        }
    },

    methods:{
      
        
    },
    created(){
  
    },
    mounted(){
         this.$http.get('/yongxu/Index/Contract_Template').then((res)=>{
                        // this.$refs.div.innerHTML=res.data.Content
                        this.data = res.data.Content                         
        }).then(()=>{
             document.getElementById('Aname').innerText = this.Aname
                                document.getElementById('Aleader').innerText = this.Aleader
                                document.getElementById('Aaddress').innerText = this.Aaddress
                                document.getElementById('Atel').innerText = this.Atel
                                document.getElementById('Afax').innerText = this.Afax
                                document.getElementById('Acode').innerText = this.Acode 
                                document.getElementById('Bname').innerText = this.Bname
                                document.getElementById('Baddress').innerText = this.Baddress
                                document.getElementById('Btel').innerText = this.Btel
                                document.getElementById('Bfax').innerText = this.Bfax
                                document.getElementById('Bcode').innerText = this.Bcode
        }).then(()=>{
            document.getElementById('text').innerText = this.text
           document.getElementById('text1').innerText = this.text1
           document.getElementById('text2').innerText = this.text2
           document.getElementById('text3').innerText = this.text3
           document.getElementById('text4').innerText = this.text4
           document.getElementById('text5').innerText = this.text5
           document.getElementById('text6').innerText = this.text6
           document.getElementById('text7').innerText = this.text7
           document.getElementById('text8').innerText = this.text8
           document.getElementById('text9').innerText = this.text9
            document.getElementById('custom_name').innerText = this.custom_name         
        }).then(()=>{         
          setTimeout(() => {
            document.getElementById('text12').innerText = this.text12
           document.getElementById('text13').innerText = this.text13
           document.getElementById('text14').innerText = this.text14
            document.getElementById('text15').innerText = this.text15
            document.getElementById('text16').innerText = this.text16
            document.getElementById('text17').innerText = this.text17
            document.getElementById('text18').innerText = this.text18
            document.getElementById('text19').innerText = this.text19
            document.getElementById('text20').innerText = this.text20
            document.getElementById('text10').innerText = this.text10
          }, 1000);
        })
    },
    components:{
        'setTimeout':setTimeout
    }

}
</script>
<style>
body{
     font-family:楷体_GB2312;
}
.row{
    flex-direction: row
}
.flex1{
    display: flex;
    justify-content: space-between;
}
.height{
    height:55px;
    text-align: center;
     font-size:36px;
      font-family:楷体_GB2312;
      font-weight: 600
}
.title11{
    text-align: center;
    font-size:36px;
    margin-top: 32px;
    font-family:楷体_GB2312;
    font-weight: 600
}
.first{
    justify-content: flex-end;
}
.input1{
    justify-content: center;
    width:80%;
    margin: auto;
}
.input1-p{
    font-size:24px;
    font-family:楷体_GB2312;
    font-weight: 600;
    margin-right: 10px;
}
.input1-input{
    border:none;
    border-bottom: 2px solid #000;
    flex: 1;
    text-align: center;
    font-size: 22px;
    letter-spacing:8px;
     
}
.MsoNormal{
    /* display: flex;
    flex-direction: row; */
}
.row-span{
    min-width: 200px;
    display: inline-block;
    font-size: 14pt; font-family: 仿宋_GB2312; letter-spacing: 0.1pt;
}
.col-flex{
    display: flex;
    flex-direction: column;
    min-width: 300px;
}

</style>


