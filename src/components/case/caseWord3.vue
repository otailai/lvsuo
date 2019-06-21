<template>
    <div>
     <button @click="getPdf()">pdf</button>
      <button @click="getDoc()">doc</button>
       <button @click="pdfDom()">打印</button>
    <div style="width:794px;margin:auto;padding-bottom:20px" ref="div" id="pdfDom">
<p class=MsoNormal align=center style='text-align:center'><b><span
style='font-size:22.0pt;mso-bidi-font-size:12.0pt;font-family:宋体'>广州金鹏律师事务所<span
lang=EN-US></span></span></b></p>

<p class=MsoNormal align=center style='text-align:center;margin-top:15px;'><b><span
style='font-size:22.0pt;mso-bidi-font-size:12.0pt;font-family:宋体'>所<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>函<span
lang=EN-US></span></span></b></p>

<p class=MsoNormal style='text-indent:395.0pt;mso-char-indent-count:16.0;margin-top:15px;'><span
style='font-size:14.0pt;mso-bidi-font-size:12.0pt;font-family:宋体'>穗金鹏律民字（<span
lang=EN-US>2018</span>）第<span lang=EN-US>2828</span>号<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:210.0pt;mso-char-indent-count:15.0;margin-top:15px;'><span
lang=EN-US style='font-size:14.0pt;mso-bidi-font-size:12.0pt;font-family:宋体'></span></p>

<p class=MsoNormal><span style='font-size:16.0pt;mso-bidi-font-size:12.0pt;margin-top:10px;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-weight:bold'>广州市番禺区人民法院<b>：<span
lang=EN-US></span></b></span></p>

<p class=MsoNormal style='text-indent:30.0pt;mso-char-indent-count:2.0;margin-top:10px;'><span
style='font-size:15.0pt;mso-bidi-font-size:12.0pt;font-family:仿宋_GB2312;
mso-hansi-font-family:宋体'>本所接受<b style='mso-bidi-font-weight:normal'>陈婉宁</b>委托，指派
刘其晖<b> </b>律师担任 <b style='mso-bidi-font-weight:normal'>其与中国工商银行股份有限公司广州华南支行金融借款合同</b>纠纷案<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp; </span></span><b>执行阶段 </b>代理人。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:30.0pt;mso-char-indent-count:2.0;margin-top:10px;'><span
style='font-size:15.0pt;mso-bidi-font-size:12.0pt;font-family:仿宋_GB2312;
mso-hansi-font-family:宋体'>专此函告。<span lang=EN-US></span></span></p>

<p class=MsoNormal><span lang=EN-US style='font-size:15.0pt;mso-bidi-font-size:
12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体;margin-top:10px;'></span></p>

<p class=MsoNormal><span lang=EN-US style='font-size:15.0pt;mso-bidi-font-size:
12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'></span></p>

<p class=MsoNormal><span lang=EN-US style='font-size:15.0pt;mso-bidi-font-size:
12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'></span></p>

<p class=MsoNormal style='text-indent:430.0pt;mso-char-indent-count:17.0;margin-top:100px;'><span
style='font-size:15.0pt;mso-bidi-font-size:12.0pt;font-family:仿宋_GB2312;
mso-hansi-font-family:宋体'>广州金鹏律师事务所<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:430.0pt;mso-char-indent-count:17.0'><span
style='font-size:15.0pt;mso-bidi-font-size:12.0pt;font-family:仿宋_GB2312;
mso-hansi-font-family:宋体'>二</span><span lang=EN-US style='font-size:15.0pt;
mso-bidi-font-size:12.0pt;font-family:宋体;mso-bidi-font-family:宋体'>O</span><span
style='font-size:15.0pt;mso-bidi-font-size:12.0pt;font-family:宋体;mso-bidi-font-family:
宋体'>一八</span><span style='font-size:15.0pt;mso-bidi-font-size:12.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:仿宋_GB2312;mso-bidi-font-family:
仿宋_GB2312'>年十月二十九</span><span style='font-size:15.0pt;mso-bidi-font-size:12.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>日<span lang=EN-US></span></span></p>

<p class=MsoNormal><span lang=EN-US style='font-size:15.0pt;mso-bidi-font-size:
12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'></span></p>

<p class=MsoNormal><span lang=EN-US style='font-size:15.0pt;mso-bidi-font-size:
12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'></span></p>

<p class=MsoNormal style="margin-top:100px;"><span style='font-size:15.0pt;font-family:仿宋_GB2312;
mso-hansi-font-family:宋体'>本所地址：</span><span style='font-size:15.0pt;font-family:
宋体;mso-ascii-font-family:Arial;mso-hansi-font-family:Arial;mso-bidi-font-family:
Arial;color:#333333'>广州市天河区珠江新城兴民路</span><span lang=EN-US style='font-size:
15.0pt;font-family:"Arial","sans-serif";color:#333333'>222</span><span
style='font-size:15.0pt;font-family:宋体;mso-ascii-font-family:Arial;mso-hansi-font-family:
Arial;mso-bidi-font-family:Arial;color:#333333'>号之三天盈广场（东塔）</span><span
lang=EN-US style='font-size:15.0pt;font-family:"Arial","sans-serif";color:#333333'>45</span><span
style='font-size:15.0pt;font-family:宋体;mso-ascii-font-family:Arial;mso-hansi-font-family:
Arial;mso-bidi-font-family:Arial;color:#333333'>层</span><span lang=EN-US
style='font-size:15.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'></span></p>

<p class=MsoNormal><span style='font-size:15.0pt;mso-bidi-font-size:12.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>电话：<span lang=EN-US>020-38390333<span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span>传真：<span
lang=EN-US>020-38390218</span></span></p>

<p class=MsoNormal><span style='font-size:15.0pt;mso-bidi-font-size:12.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>邮政编码：<span lang=EN-US>510623</span></span></p>

<p class=MsoNormal><span lang=EN-US></span></p>

 </div>
      </div>      
</div>
</template>
<script>
import { setTimeout } from 'timers';
 import saveAs from 'file-saver'
 import '../../../static/js/jquery.wordexport';
export default {
   
    data(){
        return{
            //聘请方
            htmlTitle: '合同模板PDF',
            name:'',
            //受聘
            laywerName:'广州金鹏律师事务所',
            div:'',
            //甲方
            Aname:this.dataWord.Get_Customer_Information.Customer_Name_Zh,
            Aleader:this.dataWord.Get_Customer_Information.Customer_Name_Zh,
            Aaddress:this.dataWord.Get_Customer_Information.Detailed_Address,
            Atel:this.dataWord.Get_Customer_Information.Contact_Party,
            Afax:'',
            Acode:'',
            //乙方
            Bname:'广州金鹏律师事务所',
            Baddress:'广东省广州市天河区兴民路222号之三天盈广场东塔45楼',
            Btel:'(020)38390333',
            Bfax:'(020)38390218',
            Bcode:'510623',
            //
            text:this.dataWord.Get_Case_Information.Case_Name,
            text1:'',
            text2:this.dataWord.Get_Case_Information.Party_Name,
            // 第五条
            text3:'',
            text4:'',
            text5:'',
          
            text6:'',
            //日期
            text7:'',
            text8:'',
            text9:'',
            //逾期
            text10:'十',
            text11:'',
            //日期
            text12:'',
            text13:'',
            text14:'',
            text15:'',
            text16:'',
            text17:'',
           
           text18:'',
            text19:'',
            text20:'',
            custom_name:'',
            data:'',
                //逾期几日
            todayTime:'',
            toName:'',
            tocaseWhy:'',
            tocaseCompony:'',
            shejibiaode:'',
        }
    },
       props:['dataWord'],
       
    created(){
  
    },
    mounted(){
        console.log(this.dataWord)
        this.getData()
    },
    methods:{
          pdfDom(){
            this.$print(this.$refs.div) // 使用
        },
          getDoc(){
                console.log('***************')
                 $('#pdfDom').wordExport('生成文档')
            },
        getData(){
                        

                    //     var date=new Date;
                    //     var year=date.getFullYear(); 
                    //     this.todayTime=  year    
                    //     var month = date.getMonth()+1
                    //     var day = date.getDate()  
                    //     document.getElementById('text7').innerText =  year
                    //     document.getElementById('text8').innerText = month 
                    //     document.getElementById('text9').innerText = day    
                        //  var arr1 = []; 
                        // for(var i =0;i< this.dataWord.Get_Lawyer_Information.length;i++){
                        //     arr1.push(this.dataWord.Get_Lawyer_Information[i].Rule_Name)
                        // }
                        // var index=arr1.indexOf('主办律师')
                        // var text1 = this.dataWord.Get_Lawyer_Information[index].Staff_Name
                        //  document.getElementById('text1').innerText = text1
                        //  document.getElementById('Aname').innerText = this.dataWord.Get_Customer_Information.Customer_Name_Zh
                        //  document.getElementById('text').innerText = this.dataWord.Get_Case_Information.Case_Name
                        //  document.getElementById('Aleader').innerText = this.dataWord.Get_Customer_Information.Customer_Name_Zh
                        //  document.getElementById('Aaddress').innerText = this.dataWord.Get_Customer_Information.Detailed_Address
                        //  document.getElementById('Atel').innerText = this.dataWord.Get_Customer_Information.Contact_Party
                        //  document.getElementById('Afax').innerText = ''
                        //  document.getElementById('Acode').innerText = '' 
                           
        
                        //  document.getElementById('Bname').innerText = '广州金鹏律师事务所'
                        //  document.getElementById('Baddress').innerText = '广东省广州市天河区兴民路222号之三天盈广场东塔45楼'
                        //  document.getElementById('Btel').innerText = '(020)38390333'
                        //  document.getElementById('Bfax').innerText = '(020)38390218'
                        //  document.getElementById('Bcode').innerText = '510623' 


                    //     document.getElementById('toName').innerText = this.dataWord.Get_Case_Information.Party_Name
                    //     document.getElementById('tocasWhy').innerText = this.dataWord.Get_Case_Information.Cause_Action
                    //     document.getElementById('toCompony').innerText = this.dataWord.Get_Case_Information.Receiving_Organ
                    //     document.getElementById('shejibiaode').innerText = ''
                      

                    //    var arr1 = []; 
                    //     for(var i =0;i< this.dataWord.Get_Lawyer_Information.length;i++){
                    //         arr1.push(this.dataWord.Get_Lawyer_Information[i].Rule_Name)
                    //     }
                    //     var index=arr1.indexOf('主办律师')
                    //     var text1 = this.dataWord.Get_Lawyer_Information[index].Staff_Name
                    //     document.getElementById('text1').innerText = text1
                        
                    //      document.getElementById('text2').innerText = this.dataWord.Get_Case_Information.Party_Name
                    //      document.getElementById('fuwuneirong').innerText = this.dataWord.Get_Case_Information.Service_Content.replace(/<[^>]+>|&[^>]+;/g,"").trim();
         
                       
        },
    },
    components:{
        'setTimeout':setTimeout,
        
    },
    watch:{
    dataWord:function(newValue,oldValue){
        this.getData();
    }
    }

}
</script>
<style scoped>
body{
     font-family:楷体_GB2312;
}
.row{
    flex-direction: row
}
span{
    color: #000000;
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
    width: 110px;
    text-align: left;
}
.input1-input{
    color: #000000;
    border:none;
    border-bottom: 2px solid #000;
    /* flex: 1; */
    display: inline-block;
    width: 515px;
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
    font-size: 14pt; 
    font-family: 仿宋_GB2312; 
    letter-spacing: 0.1pt;
}
.col-flex{
    display: flex;
    flex-direction: column;
    min-width: 300px;
}
.WordSection1{

}
</style>


