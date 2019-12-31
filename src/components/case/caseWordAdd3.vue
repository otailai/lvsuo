<template>
    <div>
     <button @click="getPdf()">pdf</button>
      <button @click="getDoc()">doc</button>
      <button @click="pdfDom()">打印</button>
    <div style="width:794px;margin:auto;padding-bottom:20px" ref="div" id="pdfDom">
        <p class="title11" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">聘 请 专 项 法 律 顾 问</strong></p>
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
        <p style="width: 80%;margin: auto;"><strong style="font-size: 14.0pt;font-family: 仿宋_GB2312;letter-spacing: .1pt;width:110px;text-align: left;display:inline-block;color:#000000;">聘请方:</strong><span style="font-size: 14pt;font-family:仿宋_GB2312;padding-bottom: 0px;border-bottom: 2px solid #000000;width:525px;display:inline-block;text-align:center;font-weight:600;color:#000000">{{Customer_Name_Zh}}</span></p>
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
<div class="WordSection1" style="layout-grid: 15.6pt;width:90%;margin:auto;">
  
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong style="mso-bidi-font-weight: normal;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">甲方（聘请方）：<span class="row-span" id="Aname" style="mso-spacerun: yes;"></span> </span></strong></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">法定代表人： </span><span class="row-span" id="Aleader"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">地址： </span><span class="row-span" id="Aaddress"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">电话：<span class="row-span" id="Atel"></span> 传真:<span class="row-span" id="Afax"></span> 邮编 ：<span  id="Acode"></span></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>

<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong style="mso-bidi-font-weight: normal;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">乙方（受聘方）</span></strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">：</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; mso-hansi-font-family: 宋体;" id="Bname"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">地址： </span><span class="row-span" id="Baddress"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">电话：<span class="row-span" id="Btel"></span> 传真:<span class="row-span" id="Bfax"></span> 邮编 ：<span  id="Bcode"></span></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>


<p class=MsoNormal style='line-height:29.0pt;mso-line-height-rule:exactly'><span lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:25.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>根据《中华人民共和国律师法》、《中华人民共和国合同法》的规定，双方就甲方聘请乙方为其所进行<u><span
lang=EN-US id="caseName"><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u>项目的专项法律顾问事宜，订立如下合同条款：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='text-indent:29.25pt;line-height:23.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>一、乙方接受甲方委托，指派<u><span
lang=EN-US id="text1"><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></u>律师担任甲方与<u><span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></u>事务的专项法律顾问，甲方同意上述律师指派其他律师助理配合完成前述法律事务工作。<span>在合同履行期间，若前述委派律师因故不能履行委托人职责的（包括但不限于停止执业、转换执业机构等），乙方应另行委派其他律师完成委托事项或由双方协商解决处理。<span
lang=EN-US></span></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:25.0pt;mso-line-height-rule:
exactly'><span lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:25.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>二、乙方为甲方提供专项法律顾问，具体工作内容如下：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:23.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>（一）<u><span lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u></span></p>

<p class=MsoNormal style='line-height:23.0pt;mso-line-height-rule:exactly'><u><span lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:23.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>（二）<u><span lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u></span></p>

<p class=MsoNormal style='line-height:23.0pt;mso-line-height-rule:exactly'><u><span lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:23.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>（三）<u><span lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u></span></p>

<p class=MsoNormal style='line-height:23.0pt;mso-line-height-rule:exactly'><u><span lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:23.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>（四）<u><span lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u></span></p>

<p class=MsoNormal style='line-height:23.0pt;mso-line-height-rule:exactly'><u><span lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u></p>



<!-- <p class=MsoNormal style='text-indent:28.5pt;line-height:23.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>（二）<u><span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u></span></p>

<p class=MsoNormal style='line-height:23.0pt;mso-line-height-rule:exactly'><u><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></u></p>

<p class=MsoNormal style='line-height:23.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span><span
style='font-size:14.0pt;font-family:仿宋_GB2312'>（三）<u><span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u></span></p>

<p class=MsoNormal style='line-height:23.0pt;mso-line-height-rule:exactly'><u><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u></p>

<p class=MsoNormal style='line-height:23.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'><span
style='mso-spacerun:yes'>&nbsp;</span><span
style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span><span style='font-size:
14.0pt;font-family:仿宋_GB2312'>（四）<u><span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;</span></span></u></span></p> -->



<p class=MsoNormal style='text-indent:28.5pt;line-height:25.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>三、乙方应依照法律维护甲方的合法权益，所委派的律师如因故中途不能执行职务，应负责另行委派律师接替。<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:25.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>四、乙方委派的代理律师对其工作中接触到的商业秘密负有保密的责任。<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp; </span></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:25.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>五、甲方支付乙方的专项法律顾问费用如下（币种：<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>）：<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:25.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>大写金额：<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span>拾<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span>万<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span>仟<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span>佰<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>拾<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span>元<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span>角<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span>分<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:25.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>小写金额：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:25.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>上述费用甲方应在合同签订后<u><span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span></u>日内支付，如甲方未按期支付上述费用，则本合同自动中止。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:25.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>六、乙方律师办理甲方委托事项所发生的下列工作费用由甲方承担：<span
lang=EN-US></span></span></p>

<p class=MsoBodyTextIndent style='margin-left:27.0pt;text-indent:0cm;
line-height:25.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='mso-bidi-font-size:14.0pt;font-family:仿宋_GB2312'>1</span><span
style='mso-bidi-font-size:14.0pt;font-family:仿宋_GB2312'>、相关行政、司法、鉴定、评估、公证等部门收取的费用；<span
lang=EN-US></span></span></p>

<p class=MsoBodyTextIndent style='text-indent:28.0pt;mso-char-indent-count:
2.0;line-height:25.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='mso-bidi-font-size:14.0pt;font-family:仿宋_GB2312'>2</span><span
style='mso-bidi-font-size:14.0pt;font-family:仿宋_GB2312'>、办理委托事项所发生的差旅费、食宿费、复印费、长途通讯费、邮寄费等；<span
lang=EN-US></span></span></p>

<p class=MsoBodyTextIndent style='text-indent:28.0pt;mso-char-indent-count:
2.0;line-height:25.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='mso-bidi-font-size:14.0pt;font-family:仿宋_GB2312'>3</span><span
style='mso-bidi-font-size:14.0pt;font-family:仿宋_GB2312'>、征得甲方同意后支出的其他费用。<span
lang=EN-US></span></span></p>

<p class=MsoBodyTextIndent style='text-indent:28.0pt;mso-char-indent-count:
2.0;line-height:25.0pt;mso-line-height-rule:exactly'><span style='mso-bidi-font-size:
14.0pt;font-family:仿宋_GB2312'>七、甲方应当依照本合同的约定，按时、足额向乙方支付法律顾问费和工作费用。<span
lang=EN-US></span></span></p>

<p class=MsoBodyTextIndent style='text-indent:28.0pt;mso-char-indent-count:
2.0;line-height:25.0pt;mso-line-height-rule:exactly'><span style='mso-bidi-font-size:
14.0pt;font-family:仿宋_GB2312'>八、甲方必须及时地、真实地向律师提供相关资料，如甲方不能及时地、真实地提供相关资料，乙方有权终止代理，所收费用不予退还。<span
lang=EN-US></span></span></p>

<p class=MsoBodyTextIndent style='text-indent:28.0pt;mso-char-indent-count:
2.0;line-height:25.0pt;mso-line-height-rule:exactly'><span style='mso-bidi-font-size:
14.0pt;font-family:仿宋_GB2312'>九、甲方有权解除与乙方的委托关系，但甲方所交的律师费不予退还。<span lang=EN-US></span></span></p>

<p class=MsoBodyTextIndent style='text-indent:28.0pt;mso-char-indent-count:
2.0;line-height:25.0pt;mso-line-height-rule:exactly'><span style='mso-bidi-font-size:
14.0pt;font-family:仿宋_GB2312'>十、因履行本协议产生纠纷，双方应当友好协商解决；协商不成，任何一方均可向有管辖权的法院提起诉讼<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:25.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>十一、甲乙双方的特殊约定：<span lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:25.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>十二、本合同一式三份，甲方一份，乙方两份。本合同自签订之日起生效至<u><span
lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></u>终止。<span lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
style='font-size:14.0pt;font-family:仿宋_GB2312'>甲方：<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>（盖章）<span lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
style='font-size:14.0pt;font-family:仿宋_GB2312'>代表：<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>（签名）<span lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
style='font-size:14.0pt;font-family:仿宋_GB2312'>乙方：广州金鹏律师事务所<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>（盖章）<span lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
style='font-size:14.0pt;font-family:仿宋_GB2312'>承办律师：<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span style='mso-spacerun:yes'>&nbsp;</span></span>（签名）<span lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:25.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:14.0pt;font-family:仿宋_GB2312'>年<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>月<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>日<span
lang=EN-US></span></span></p>

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
            Customer_Name_Zh:'',
            //受聘
            laywerName:'广州金鹏律师事务所',
            div:'',
            //甲方
            Aname:'',
            Aleader:'',
            Aaddress:'',
            Atel:'',
            Afax:'',
            Acode:'',
            //乙方
            Bname:'广州金鹏律师事务所',
            Baddress:'广东省广州市天河区兴民路222号之三天盈广场东塔45楼',
            Btel:'(020)38390333',
            Bfax:'(020)38390218',
            Bcode:'510623',
            //
            text:'',
            text1:'',
            text2:'',
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
            Case_No:'',
            dataWordArr:[]
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
                        this.dataWordArr = JSON.parse(this.dataWord)
                        this.Customer_Name_Zh = this.dataWordArr.userNameC
                        var arr1 = []; 
                        for(var i =0;i< this.dataWordArr.laywerArr.length;i++){
                            arr1.push(this.dataWordArr.laywerArr[i].laywerJob) 
                        }
                        var index=arr1.indexOf(18)
                        var text1 = this.dataWordArr.laywerArr[index].laywerName
                        document.getElementById('text1').innerText = text1
                        // document.getElementById('text1').innerText = text1
                        document.getElementById('Aname').innerText = this.dataWordArr.userNameC
                      
                        //  document.getElementById('text').innerText = this.dataWord.Get_Case_Information.Case_Name
                         document.getElementById('Aleader').innerText = this.dataWordArr.userNameC
                         document.getElementById('Aaddress').innerText = this.dataWordArr.address
                         document.getElementById('Atel').innerText = this.dataWordArr.tel
                         document.getElementById('Afax').innerText = ''
                         document.getElementById('Acode').innerText = '' 
                           
        
                         document.getElementById('Bname').innerText = '广州金鹏律师事务所'
                         document.getElementById('Baddress').innerText = '广东省广州市天河区兴民路222号之三天盈广场东塔45楼'
                         document.getElementById('Btel').innerText = '(020)38390333'
                         document.getElementById('Bfax').innerText = '(020)38390218'
                         document.getElementById('Bcode').innerText = '510623' 

                          document.getElementById('caseName').innerText = this.dataWordArr.caseName
                          console.log(this.dataWordArr.caseName)
                              
  return

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


