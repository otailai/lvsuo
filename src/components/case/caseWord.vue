<template>
    <div>
     <button @click="getPdf()">下载pdf</button>
      <button @click="getDoc()">导出doc</button>
    <div style="width:794px;margin:auto;padding-bottom:20px" ref="div" id="pdfDom">
        <div class="flex first" style="text-align: right;color:#000000;">({{todayTime}}[1])穗金鹏民字第[2]号</div>
        <p class="title11" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">民 事 委 托 代 理</strong></p>
        <p class="height" ></p>
        <p class="height" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">合</strong></p>
        <p class="height"></p>
        <p class="height" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">同</strong></p>
        <p class="height"></p>
        <p class="height" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">书</strong></p>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
        <!-- <div class="input1 flex" style="text-align: center;"> -->
        <p style="width: 80%;
    margin: auto;"><strong style="font-size: 14.0pt;
    font-family: 仿宋_GB2312;
    letter-spacing: .1pt;    width: 110px;
    text-align: left;display:inline-block;color:#000000;">聘请方:</strong><span style="font-size: 14pt;font-family:仿宋_GB2312;padding-bottom: 0px;
    border-bottom: 2px solid #000000;width:525px;display:inline-block;text-align:center;font-weight:600;color:#000000">{{dataWord.Get_Customer_Information.Customer_Name_Zh}}</span></p>
        <!-- </div> -->
         <div class="height"></div>
                 <p style="width: 80%;
    margin: auto;"><strong style="font-size: 14.0pt;
    font-family: 仿宋_GB2312;
    letter-spacing: .1pt;    width: 110px;
    text-align: left;display:inline-block;color:#000000;">受聘聘方:</strong><span style="font-size: 14pt;font-family:仿宋_GB2312;padding-bottom: 0px;
    border-bottom: 2px solid #000000;width:525px;display:inline-block;text-align:center;font-weight:600;color:#000000">{{laywerName}}</span></p>
         <!-- <div class="input1 flex" style="text-align: center;">
            <p class="input1-p"><strong style="font-size: 14.0pt;
    font-family: 仿宋_GB2312;
    letter-spacing: .1pt;">受聘聘方:</strong></p><span class="input1-input" style="font-size: 14pt;font-family:仿宋_GB2312;">{{laywerName}}</span>
        </div> -->
        <p class=MsoNormal align=right style='text-align:right;line-height:22.0pt;
            mso-line-height-rule:exactly'><span lang=EN-US style='font-size:14.0pt;
            font-family:仿宋_GB2312;letter-spacing:.1pt'></span></p>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
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
 import saveAs from 'file-saver'
 import '../../../static/js/jquery.wordexport';
export default {
   
    data(){
        return{
            //聘请方
            htmlTitle: '合同mobanPDF',
            name:'陈永旭',
            //受聘
            laywerName:'广州金鹏律师事务所',
            div:'',
            //甲方
            // Aname:this.dataWord.Get_Customer_Information.Customer_Name_Zh,
            Aleader:this.dataWord.Get_Customer_Information.Customer_Name_Zh,
            Aaddress:this.dataWord.Get_Customer_Information.Detailed_Address,
            Atel:this.dataWord.Get_Customer_Information.Contact_Party,
            Afax:'1231-124',
            Acode:'404000',
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
            todayTime:'',
            toName:'',
            tocaseWhy:'',
            tocaseCompony:'',
            shejibiaode:'',
        }
    },
       props:['dataWord'],
        methods:{ 
            getDoc(){
                $('#pdfDom').wordExport('生成文档')
            }
        
    },
    created(){
  
    },
    mounted(){
         this.$http.get('/yongxu/Index/Contract_Template').then((res)=>{
                      console.log(res)
                        // this.$refs.div.innerHTML=res.data.Content
                        this.data = res.data.Content  
                         var date=new Date;
                        var year=date.getFullYear(); 
                        this.todayTime=  year         

                        var arr1 = []; 
                        for(var i =0;i< this.dataWord.Get_Lawyer_Information.length;i++){
                            arr1.push(this.dataWord.Get_Lawyer_Information[i].Rule_Name)
                        }
                        var index=arr1.indexOf('主办律师')
                        this.text1 = this.dataWord.Get_Lawyer_Information[index].Staff_Name
                        console.log(this.text1)    
        }).then(()=>{
            //  document.getElementById('Aname').innerText = this.Aname
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

                                //  document.getElementById('toName').innerText = this.toName
                                // document.getElementById('tocaseWhy').innerText = this.tocaseWhy
                                // document.getElementById('tocaseCompony').innerText = this.tocaseCompony
                                // document.getElementById('shejibiaode').innerText = this.shejibiaode
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
        'setTimeout':setTimeout,
        
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

</style>


