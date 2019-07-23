<template>
       <div>
     <button @click="getPdf()">下载pdf</button>
      <button @click="getDoc()">导出doc</button>
       <button @click="pdfDom()">打印</button>
    <div style="width:794px;margin:auto;padding-bottom:20px" ref="div" id="pdfDom">
        <div class="flex first" style="text-align: right;color:#000000;"></div>
        <p class="title11" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">刑 事 辩 护 委 托</strong></p>
        <p class="height" ></p>
        <p class="height" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">协</strong></p>
        <p class="height"></p>
        <p class="height" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">议</strong></p>
        <p class="height"></p>
        <p class="height" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">书</strong></p>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
          <p style="width: 80%; 
    margin: auto;"><strong style="font-size: 14.0pt;
    font-family: 仿宋_GB2312;
    letter-spacing: .1pt;    width: 110px;
    text-align: left;display:inline-block;color:#000000;">聘请方:</strong><span style="font-size: 14pt;font-family:仿宋_GB2312;padding-bottom: 0px;
    border-bottom: 2px solid #000000;width:525px;display:inline-block;text-align:center;font-weight:600;color:#000000" id="Aleader"></span></p>
        <!-- </div> -->
         <div class="height"></div>
                 <p style="width: 80%;
    margin: auto;"><strong style="font-size: 14.0pt;
    font-family: 仿宋_GB2312;
    letter-spacing: .1pt;    width: 110px;
    text-align: left;display:inline-block;color:#000000;">受聘聘方:</strong><span style="font-size: 14pt;font-family:仿宋_GB2312;padding-bottom: 0px;
    border-bottom: 2px solid #000000;width:525px;display:inline-block;text-align:center;font-weight:600;color:#000000" id="laywerName"></span></p>
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
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">法定代表人： </span><span class="row-span" id="Aleader1"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">地址： </span><span class="row-span" id="Aaddress"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">电话：<span class="row-span" id="Atel"></span> 传真:<span class="row-span" id="Afax"></span> 邮编 ：<span class="row-span" id="Acode"></span></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>

<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong style="mso-bidi-font-weight: normal;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">乙方（受聘方）</span></strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">：</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; mso-hansi-font-family: 宋体;" id="Bname"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">地址： </span><span class="row-span" id="Baddress"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">电话：<span class="row-span" id="Btel"></span> 传真:<span class="row-span" id="Bfax"></span> 邮编 ：<span class="row-span" id="Bcode"></span></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>


<p class=MsoNormal style='line-height:22.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:
宋体'><span style='mso-spacerun:yes'>&nbsp;&nbsp; </span><span
style='mso-spacerun:yes'>&nbsp;</span></span><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>鉴于，犯罪嫌疑人<span lang=EN-US>/</span>被告人<u><span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp; </span><span
style='mso-spacerun:yes' id="beigaoren"></span><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;</span></span></u>因涉嫌<u><span
lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="fanzui"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></u>罪，现案件已由公安机关立案侦查已<span lang=EN-US>/</span>将移送人民检察院审查起诉人民法院进行审理。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>鉴于，甲方愿意聘请乙方律师为犯罪嫌疑人<span
lang=EN-US>/</span>被告人<u><span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="beigaoren1"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></u>提供法律帮助担任审查起诉辩护人一审二审辩护人。<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>甲乙双方按照诚实信用原则，经协商一致，订立此合同，共同遵守。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><b><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>第一条<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp; </span></span>委托<span lang=EN-US></span></span></b></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>乙方接受甲方委托，指派<u><span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
style='mso-spacerun:yes'>&nbsp;&nbsp;<span id="zhubanlvshi">&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u>律师担任犯罪嫌疑人<span
lang=EN-US>/</span>被告人<u><span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;<span id="beigaoren2"></span>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></u>在侦查阶段提供法律帮助审查起诉一审二审辩护人。<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:25.75pt;mso-char-indent-count:1.96;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>甲方同意乙方律师指派其他律师助理配合完成辅助工作。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><b><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>第二条<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp; </span></span>双方的义务<span lang=EN-US></span></span></b></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（一）甲方的义务<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>1</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、真实、客观、全面向乙方律师介绍案情，为乙方律师办理案件提供力所能及的帮助；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>2</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、按期、足额向乙方支付律师律师费或调查取证费用；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>3</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、不得利用乙方提供的法律服务从事非法活动。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（二）乙方的义务<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:39.2pt;mso-char-indent-count:2.98;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>1</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、乙方律师接受委托后，根据法律规定及办案机关的安排，在侦查阶段应完成以下工作：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>1</span>）向侦查机关了解犯罪嫌疑人涉嫌的罪名；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>2</span>）会见犯罪嫌疑人，为犯罪嫌疑人提供法律咨询；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>3</span>）维护犯罪嫌疑人的合法权益，对侵犯犯罪嫌疑人合法权益的行为代理进行控告；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>4</span>）认为犯罪嫌疑人涉嫌的事实不成立的，向侦查机关提出申诉意见；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>5</span>）犯罪嫌疑人已被羁押，且符合《刑事诉讼法》第五十一条或者第六十条第二款、第七十五条的规定，律师可以代为其申请取保候审。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>2</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、乙方律师接受委托后，在人民检察院审查起诉阶段应当完成以下工作：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>1</span>）查阅、了解本案的诉讼文书、技术性鉴定材料；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='margin-right:-18.6pt;mso-para-margin-right:-1.93gd;
text-indent:26.3pt;mso-char-indent-count:2.0;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:
宋体'>（<span lang=EN-US>2</span>）根据法律规定会见犯罪嫌疑人；依法为犯罪嫌疑人提供法律咨询或者其他法律帮助；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>3</span>）如果认为犯罪嫌疑人有《刑事诉讼法》第十五条规定的情形之一的，应当在人民检察院听取意见时，向人民检察院反映意见；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>4</span>）根据犯罪嫌疑人提供的线索，尽可能调查可能证明其无罪、罪轻等各方面的证据。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>3</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、乙方律师接受委托后，在法院第一审阶段应当完成以下工作：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>1</span>）查阅、了解检察机关向人民法院移送的主要证据复印件和相关材料；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>2</span>）会见被告人，了解其本人对指控的意见及对案情的叙述；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>3</span>）按时出庭，依法为被告人进行辩护，维护被告人的合法权益；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>4</span>）根据犯罪嫌疑人提供的线索，尽可能调查可能证明其无罪、罪轻等方面的证据。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>4</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、乙方律师接受委托后，在法院第二审阶段应当完成以下工作：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>1</span>）查阅、了解本案的相关卷宗材料；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>2</span>）会见上诉人，了解其本人对一审判决的意见及对案情的叙述；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（<span lang=EN-US>3</span>）按时出庭，依法为上诉人进行辩护并提交书面辩护词，亦可能按照二审法庭书面审理的安排，向二审法院提交书面辩护意见。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>5</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、乙方辩护律师应按时出庭，无正当理由的，不得拒绝辩护；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>6</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、依法尽职、尽责为甲方进行辩护。依据事实和法律，提出证明甲方无罪、罪轻或者减轻、免除其刑事责任的材料和意见，维护甲方的合法权益；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>7</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、乙方应对因履行本合同所知悉的甲方商业秘密或甲方的个人隐私承担保密义务；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>8</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、乙方接受甲方委托后，非经甲方书面同意不得接受与本案有利害关系的其他当事人的委托并为其辩护。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>9</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、乙方律师应及时向甲方口头或书面报告委托法律事务的办理情况（公、检、法机关确定密级的案件材料除外）<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:29.25pt;line-height:23.0pt;mso-line-height-rule:
exactly'><span lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;
mso-hansi-font-family:宋体;'>10</span><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体;'>、</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;'>在合同履行期间，若当前委派律师因故不能履行委托人职责的（包括但不限于停止执业、转换执业机构等），乙方应另行委派其他律师完成委托事项或由双方协商解决处理。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><b><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>第三条<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp; </span></span>律师律师费及调查取证费<span lang=EN-US></span></span></b></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（一）根据本案的具体情况和复杂程度，双方约定：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>甲方向乙方支付律师费为：侦查阶段<u><span
lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></u>元、审查起诉阶段<u><span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></u>元、一审<u><span
lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></u>元，二审<u><span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></u>元，调查取证费<u><span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></u>元，共计人民币<u><span
lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></u>元。<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>（二）乙方律师办理甲方委托辩护事项所发生的下列工作费用，应当由甲方承担：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>1</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、相关行政、司法、鉴定、公证及其它专业顾问等部门收取的费用；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>2</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、广州市外（包括远郊县）发生的差旅费、食宿费及资料费、通讯费、翻译费等；<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>3</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、征得甲方同意后支付的其它费用。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:25.75pt;mso-char-indent-count:1.96;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>乙方律师应当本着节俭的原则合理使用工作费用。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><b><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>第四条<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp; </span></span>支付时间、地点<span lang=EN-US></span></span></b></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>律师费及调查取证费应于本协议签定之日给付，至迟不超过本协议签定后<u><span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span></u>日内给付（如遇法定节假日时，可顺延至法定节假日后的第一天）。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:23.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>乙方户名：广州金鹏律师事务所<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:23.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>开户行：</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;letter-spacing:.1pt'>招商银行股份有限公司广州盈隆广场支行</span><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:
宋体'></span></p>

<p class=MsoNormal style='text-indent:25.75pt;mso-char-indent-count:1.96;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>账号：</span><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;letter-spacing:.1pt'>1209 0600
7010 903</span></p>

<p class=MsoNormal style='text-indent:25.75pt;mso-char-indent-count:1.96;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>以上收费以到达上述账号并取得乙方发票为收讫。任何私人间的支付，乙方均不予承认。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:25.75pt;mso-char-indent-count:1.96;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>甲方逾期支付律师费或工作费用，乙方有权解除合同或暂停工作直至甲方自行纠正时止。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><b><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>第五条<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp; </span></span>责任<span lang=EN-US></span></span></b></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>如果乙方无合理的理由而不履行本协议，律师费、调查取证费全额退还甲方；如果甲方擅自终止本协议，律师费、工作费用不退还。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><b><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>第六条<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp; </span></span>合同的解除<span lang=EN-US></span></span></b></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>乙方接受委托后，如发现委托事项违法，委托人利用律师提供的服务从事违法活动或者隐瞒事实，或者委托人提出其他不合理要求，致使律师无法正常履行职务的，律师有权拒绝辩护。为此提前解除合同，已收律师费不予退还。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><b><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>第七条<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp; </span></span>协议有效期<span lang=EN-US></span></span></b></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>本协议有效期限，自生效之日起至本案终结止（侦查终结移送审查起诉判决裁定发回重审退回补充侦查撤回起诉）。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>如系全程的委托，本合同一份有效，但委托书应当每个阶段分别签署。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><b><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>第八条<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp; </span></span>争议的解决<span lang=EN-US></span></span></b></p>

<p class=MsoNormal style='text-indent:19.2pt;mso-char-indent-count:1.46;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>本合同适用中华人民共和国《合同法》、《律师法》、《刑事诉讼法》、《仲裁法》等法律。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:19.35pt;mso-char-indent-count:1.47;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>甲乙双方如果发生争议，应当友好协商解决。如协商不成，任何一方均有权将争议提交广州仲裁委员会，按照提交仲裁时该会现行有效的仲裁规则进行仲裁，仲裁裁决是终局的，对甲乙双方均有约束力。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><b><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>第九条<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp; </span></span>协议文本<span lang=EN-US></span></span></b></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>本协议一式叁份，双方各执壹份，一份经办律师随案存档。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><b><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>第十条 其他特别约定<span
lang=EN-US></span></span></b></p>

<p class=MsoNormal style='text-indent:26.3pt;mso-char-indent-count:2.0;
line-height:22.0pt;mso-line-height-rule:exactly'><u><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></u></p>



<p class=MsoNormal style='line-height:22.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:
宋体'></span></p>

<p class=MsoNormal style='line-height:22.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:
宋体'></span></p>

<p class=MsoNormal style='line-height:22.0pt;mso-line-height-rule:exactly;margin-top:40px;'><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>甲方：<span
lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span style='mso-spacerun:yes'>&nbsp;&nbsp;</span></span>乙方：广州金鹏律师事务所<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp; </span></span></span></p>

<p class=MsoNormal style='line-height:22.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:
宋体'><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span style='mso-spacerun:yes'>&nbsp;&nbsp;</span><span
style='mso-spacerun:yes'>&nbsp;</span></span></p>

<p class=MsoNormal style='text-indent:157.5pt;mso-char-indent-count:17.15;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>经办律师：<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></p>

<p class=MsoNormal style='line-height:22.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:
宋体'><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></p>

<p class=MsoNormal style='line-height:22.0pt;mso-line-height-rule:exactly'><span
style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>签约时间：<span
lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><span style='mso-spacerun:yes'>&nbsp;&nbsp;</span><span
style='mso-spacerun:yes'>&nbsp;</span></span>签约时间：<span lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:22.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:
宋体'></span></p>

<p class=MsoNormal align=center style='text-align:center;line-height:22.0pt;margin-top:50px;
mso-line-height-rule:exactly'>
<b style='mso-bidi-font-weight:normal'><span style='font-size:22.0pt;font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:"Times New Roman"'>
    委
    </span>
    </b>
    <b style='mso-bidi-font-weight:normal'><span style='font-size:22.0pt;font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:"Times New Roman"'>
    托
    </span>
    </b>
      <b style='mso-bidi-font-weight:normal'><span style='font-size:22.0pt;font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:"Times New Roman"'>
    人
    </span>
    </b>
      <b style='mso-bidi-font-weight:normal'><span style='font-size:22.0pt;font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:"Times New Roman"'>
    须
    </span>
    </b>
      <b style='mso-bidi-font-weight:normal'><span style='font-size:22.0pt;font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:"Times New Roman"'>
    知
    </span>
    </b>
</p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:22.0pt;mso-line-height-rule:
exactly;margin-top:30px;'><span lang=EN-US style='font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>为了保障委托人、律师事务所及律师各方的合法权益，依据《中华人民共和国律师法》及《律师职业道德和执业纪律规范》的有关规定，律师事务所与委托人签署委托合同前，承办律师应当告知委托人如下事项：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>一、律师执业必须遵守宪法和法律，恪守律师职业道德和执业纪律。律师执业必须以事实为依据，以法律为准绳。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>二、律师不得以与经办案件的法官、仲裁员、检察官、侦查人员或他们的上级相熟为理由或为前提承接委托人案件，亦不得以保证委托人案件必然胜诉或无罪为前提承接委托人的案件。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>委托人不得要求律师通过非正常途径与经办法官、仲裁员、检察官、侦查人员或他们的上级沟通。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>三、委托人的案件具有法律风险，委托人的主张及律师的法律意见部分或全部有不被采纳的可能，委托人的案件部分或全部有败诉的可能。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>四、委托人应当真实、客观、全面、及时地向承办律师介绍案件，提供与委托代理事项有关的证据、文件及其他实材料。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>五、律师办案的进程受到侦查、检察、审判、仲裁等机构及相关当事方的制约。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>六、律师承办业务，须由律师事务所与委托人签订书面委托合同，按有关规定收取律师费，并向委托人统一开具正式发票。律师不得私自接受委托，私自向委托人收取费用，收受委托人财物。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>七、委托人应当按照委托合同的约定，按时、足额支付律师费。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>八、承办律师在接受委托后，有违反《律师法》及《律师职业道德和执业纪律规范》有关规定行为的，委托人可以向承办律师所在律师事务所、律师协会及司法行政部门投诉。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.5pt;line-height:22.0pt;mso-line-height-rule:
exactly'><span lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='text-indent:25.75pt;mso-char-indent-count:1.96;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>委托人确认：<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:25.75pt;mso-char-indent-count:1.96;
line-height:22.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>律师已告知我上述事项，我方已了解告知书中所提示的内容。<span lang=EN-US></span></span></p>

<p class=MsoNormal style='margin-left:168.0pt;mso-para-margin-left:17.41gd;
text-indent:109.4pt;mso-char-indent-count:8.32;line-height:22.0pt;mso-line-height-rule:
exactly'><span lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='margin-left:168.0pt;mso-para-margin-left:17.41gd;
text-indent:48.0pt;mso-char-indent-count:3.65;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>委托人签署：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='margin-left:168.0pt;mso-para-margin-left:17.41gd;
text-indent:90.35pt;mso-char-indent-count:6.87;line-height:22.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>年<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>月<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>日</span></p>
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
            dataWordArr:[],

            //聘请方
            htmlTitle: '合同mobanPDF',
            name:'陈永旭',
            //受聘
            laywerName:'广州金鹏律师事务所',
            div:'',
            //甲方
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
            arr:[],
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
        this.getCaseType()
        this.getData()
        
    },
    methods:{
          pdfDom(){
            this.$print(this.$refs.div) // 使用
        },
        getData(){
   this.dataWordArr= JSON.parse(this.dataWord)
        this.laywerName = '广州金鹏律师事务所' 
        console.log(this.dataWordArr)
        var date=new Date;
        var year=date.getFullYear(); 
        this.todayTime=  year      
        var arr1 = [];  
        for(var i =0;i< this.dataWordArr.laywerArr.length;i++){
            arr1.push(this.dataWordArr.laywerArr[i].laywerJob)
        }
        var index=arr1.indexOf(18)
        var text1 = this.dataWordArr.laywerArr[index].laywerName
        
      
        document.getElementById('laywerName').innerText = '广州金鹏律师事务所'
       
        document.getElementById('Aname').innerText = this.dataWordArr.userNameC
        document.getElementById('Aaddress').innerText = this.dataWordArr.address
        document.getElementById('Atel').innerText = this.dataWordArr.tel
        document.getElementById('Afax').innerText = ''
        document.getElementById('Acode').innerText =  ''
        document.getElementById('Aleader').innerText = this.dataWordArr.userNameC
        document.getElementById('Aleader1').innerText = this.dataWordArr.userNameC
        document.getElementById('Bname').innerText = '广州金鹏律师事务所'
        document.getElementById('Baddress').innerText = '广东省广州市天河区兴民路222号之三天盈广场东塔45楼'
        document.getElementById('Btel').innerText = '(020)38390333'
        document.getElementById('Bfax').innerText = '(020)38390218'
        document.getElementById('Bcode').innerText = '510623'
         
       // document.getElementById('fanzui').innerText = this.arr[]
//          document.getElementById('text').innerText = this.dataWordArr.caseName
//          document.getElementById('toName').innerText = this.dataWordArr.oppositePart
//         document.getElementById('tocaseWhy').innerText = this.dataWordArr.caseWhy
//             document.getElementById('tocaseCompony').innerText = this.dataWordArr.compony
//             document.getElementById('shejibiaode').innerText = this.dataWordArr.Target
            document.getElementById('beigaoren').innerHTML = this.dataWordArr.oppositePart
             document.getElementById('beigaoren1').innerHTML = this.dataWordArr.oppositePart
                document.getElementById('beigaoren2').innerHTML = this.dataWordArr.oppositePart
                document.getElementById('fanzui').innerHTML =this.dataWordArr.caseName
             document.getElementById('zhubanlvshi').innerText = text1
//             document.getElementById('text2').innerText = this.dataWordArr.oppositePart
//              document.getElementById('text3').innerText = ''
//             document.getElementById('text4').innerText = ''
//             document.getElementById('text5').innerText = ''
//              document.getElementById('fuwuneirong').innerText = this.dataWordArr.Service_Content.replace(/<[^>]+>|&[^>]+;/g,"").trim();
//              console.log(this.dataWordArr.Service_Content)
//               document.getElementById('text6').innerText = ''
// // 逾期多少日
//                document.getElementById('text10').innerText = ''
//                //年月日
//                 var date=new Date;
//                 var year=date.getFullYear(); 
//                var month =date.getMonth()+1;
//                var day =date.getDate()    
//                 document.getElementById('todayTime').innerText = year
//                 document.getElementById('text7').innerText = year
//                     document.getElementById('text8').innerText = month
//                     document.getElementById('text9').innerText = day
        },
        getCaseType(){
            this.$http.get('/yongxu/Install/Sel_First_Class').then((res)=>{
                this.arr = res.data
            })
        }
    },
    components:{
        'setTimeout':setTimeout,
        
    },
     watch:{
    dataWord:function(newValue,oldValue){
        this.getData(); 
    },
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


