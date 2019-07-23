<template>
    <div>
     <button @click="getPdf()">pdf</button>
      <button @click="getDoc()">doc</button>
       <button @click="pdfDom()">打印</button>
    <div style="width:794px;margin:auto;padding-bottom:20px" ref="div" id="pdfDom">
        <div class="flex first" style="text-align: right;color:#000000;">{{dataWord.Get_Case_Information.Case_No}}</div>
        <p class="title11" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">聘 请 专 项 法 律 顾 问</strong></p>
        <p class="height" ></p>
        <p class="height" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">协</strong></p>
        <p class="height"></p>
        <p class="height" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">议</strong></p>
        <p class="height"></p>
        <p class="height" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">书</strong></p>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
        <!-- <div class="input1 flex" style="text-align: center;"> -->
        <p style="width: 80%;margin: auto;"><strong style="font-size: 14.0pt;font-family: 仿宋_GB2312;letter-spacing: .1pt;width:110px;text-align: left;display:inline-block;color:#000000;">聘请方:</strong><span style="font-size: 14pt;font-family:仿宋_GB2312;padding-bottom: 0px;border-bottom: 2px solid #000000;width:525px;display:inline-block;text-align:center;font-weight:600;color:#000000">{{dataWord.Get_Customer_Information.Customer_Name_Zh}}</span></p>
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

<p class=MsoBodyTextIndent2 style='line-height:29.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt'>根据《中华人民共和国合同法》、《中华人民共和国律师法》规定，聘请方与受聘方就聘请常年法律顾问事宜，订立协议如下：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:29.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>第一条：受聘方接受聘请方的聘请，指派<u>
<b><span lang=EN-US ><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='mso-spacerun:yes'>&nbsp;</span></span><span id="text1"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u>担任聘请方的常年法律顾问。<b><u><span
lang=EN-US></span></u></b></span></p>

<p class=MsoNormal style='text-indent:21.0pt;line-height:29.0pt;mso-line-height-rule:
exactly'><span style='font-size:14.0pt;font-family:仿宋_GB2312'>第二条：常年法律顾问的责任，是为聘请方提供法律帮助，维护聘请方的合法权益，工作范围如下：<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='margin-left:75.0pt;text-indent:-54.0pt;line-height:
29.0pt;mso-line-height-rule:exactly;mso-list:l0 level1 lfo2;tab-stops:list 75.0pt'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-bidi-font-family:
仿宋_GB2312'><span style='mso-list:Ignore'>（一）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><span style='font-size:14.0pt;font-family:仿宋_GB2312'>为聘请方经营、管理方面的重大决策提供法律意见。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='margin-left:75.0pt;text-indent:-54.0pt;line-height:
29.0pt;mso-line-height-rule:exactly;mso-list:l0 level1 lfo2;tab-stops:list 75.0pt'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-bidi-font-family:
仿宋_GB2312'><span style='mso-list:Ignore'>（二）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><span style='font-size:14.0pt;font-family:仿宋_GB2312'>协助审查聘请方有关法律事务方面的文书。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='margin-left:75.0pt;text-indent:-54.0pt;line-height:
29.0pt;mso-line-height-rule:exactly;mso-list:l0 level1 lfo2;tab-stops:list 75.0pt'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-bidi-font-family:
仿宋_GB2312'><span style='mso-list:Ignore'>（三）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><span style='font-size:14.0pt;font-family:仿宋_GB2312'>提供与企业活动有关的法律信息。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='margin-left:75.0pt;text-indent:-54.0pt;line-height:
29.0pt;mso-line-height-rule:exactly;mso-list:l0 level1 lfo2;tab-stops:list 75.0pt'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-bidi-font-family:
仿宋_GB2312'><span style='mso-list:Ignore'>（四）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><span style='font-size:14.0pt;font-family:仿宋_GB2312'>协助审查聘请方与国内外单位签订的经济合同。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='margin-left:75.0pt;text-indent:-54.0pt;line-height:
29.0pt;mso-line-height-rule:exactly;mso-list:l0 level1 lfo2;tab-stops:list 75.0pt'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-bidi-font-family:
仿宋_GB2312'><span style='mso-list:Ignore'>（五）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><span style='font-size:14.0pt;font-family:仿宋_GB2312'>参与经济项目的谈判、经济合同的拟定、修改及见证。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='margin-left:75.0pt;text-indent:-54.0pt;line-height:
29.0pt;mso-line-height-rule:exactly;mso-list:l0 level1 lfo2;tab-stops:list 75.0pt'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-bidi-font-family:
仿宋_GB2312'><span style='mso-list:Ignore'>（六）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><span style='font-size:14.0pt;font-family:仿宋_GB2312'>代理参加诉讼、非诉讼、仲裁活动。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='margin-left:75.0pt;text-indent:-54.0pt;line-height:
29.0pt;mso-line-height-rule:exactly;mso-list:l0 level1 lfo2;tab-stops:list 75.0pt'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-bidi-font-family:
仿宋_GB2312'><span style='mso-list:Ignore'>（七）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><span style='font-size:14.0pt;font-family:仿宋_GB2312'>代理进行商务活动。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='margin-left:75.0pt;text-indent:-54.0pt;line-height:
29.0pt;mso-line-height-rule:exactly;mso-list:l0 level1 lfo2;tab-stops:list 75.0pt'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-bidi-font-family:
仿宋_GB2312'><span style='mso-list:Ignore'>（八）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><span style='font-size:14.0pt;font-family:仿宋_GB2312'>参与处理企业尚未形成诉讼的民事、经济、行政争议或其他重大纠纷。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='margin-left:75.0pt;text-indent:-54.0pt;line-height:
29.0pt;mso-line-height-rule:exactly;mso-list:l0 level1 lfo2;tab-stops:list 75.0pt'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-bidi-font-family:
仿宋_GB2312'><span style='mso-list:Ignore'>（九）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><span style='font-size:14.0pt;font-family:仿宋_GB2312'>代办其他法律事务。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>属本条第（一）、（二）、（三）、（四）项，聘请方不必另办委托手续，除按本协议第八条支付法律顾问费外，不再交付费用；属第（五）、（六）、（七）、（八）、（九）项，须另行办理委托手续，并另行交费，受聘方应优先受理，并按规定的收费标准<b><u>
八 </u></b>折优惠收费。<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>第三条：为了使法律顾问能依法执行职务和更好地提供法律帮助，聘请方应向法律顾问真实地、详细地介绍有关情况，提供有关文件、材料和副本或影印件，需要法律顾问参加有关会议，研究合同或参加谈判时，聘请方应提早通知，并事先提交必要的材料，让法律顾问有充分的时间准备。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;'>第四条：受聘方指派担任法律顾问的律师如因故不能执行职务时（包括但不限于停止执业、转换执业机构等），受聘方应负责及时另派律师完成委托事项或由双方协商解决处理。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>第五条：受聘方指派担任顾问的律师应及时承办聘请方委托办理的有关法律事务，保证质量，讲求效率，认真履行律师职责。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>第六条：法律顾问律师对于聘请方的商业秘密，负有保守秘密的责任。<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>第七条：聘请方每年向受聘方支付法律顾问费如下（币种：人民币）：<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>大写金额：<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='mso-spacerun:yes'>&nbsp;</span></span>。（小写金额：<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span><span
style='mso-spacerun:yes'>&nbsp;&nbsp;</span><span
style='mso-spacerun:yes'>&nbsp;</span></span>。）<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>聘请方应于签订本合同后<b> <span
style='mso-spacerun:yes'>&nbsp;</span></b>日内支付。<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:23.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>乙方户名：广州金鹏律师事务所<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:23.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>开户行：</span><span
style='font-size:14.0pt;font-family:仿宋_GB2312;letter-spacing:.1pt'>招商银行股份有限公司广州盈隆广场支行</span><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:
宋体'></span></p>

<p class=MsoNormal style='text-indent:27.45pt;mso-char-indent-count:1.96;
line-height:23.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>账号：</span><span lang=EN-US
style='font-size:14.0pt;font-family:仿宋_GB2312;letter-spacing:.1pt'>1209 0600
7010 903</span></p>

<p class=MsoNormal style='text-indent:27.45pt;mso-char-indent-count:1.96;
line-height:23.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>以上收费以到达上述账号并取得乙方发票为收讫。任何私人间的支付，乙方均不予承认。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:27.45pt;mso-char-indent-count:1.96;
line-height:23.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>聘请方逾期支付律师费或工作费用，受聘方有权解除合同或暂停工作直至聘请方交纳全部约定费用时止。</span><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312;letter-spacing:.1pt'></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>聘请方如不按时支付法律顾问费，则本协议自动中止。<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>第八条：应聘请方的要求，法律顾问到市外进行项目谈判、调查、非诉讼、仲裁或诉讼等活动时，差旅费由聘请方承担。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>第九条：因履行本协议产生纠纷，双方应当友好协商解决；协商不成，任何一方均可向有管辖权的法院提起诉讼。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>第十条：本协议书有效期限为一年，从<span lang=EN-US id=""><span
style='mso-spacerun:yes'>&nbsp; </span></span>年<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp; </span></span>月<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>日起至<span lang=EN-US id=""><span
style='mso-spacerun:yes'>&nbsp; </span></span>年<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp; </span></span>月<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>日止。协议书期满，双方如未提出异议，则本协议书有效期顺延一年，也可重新修订协议或终止协议。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>第十一条：聘请方与受聘方的特殊约定：<span lang=EN-US></span></span></p>

<p class=MsoNormal style='text-indent:28.0pt;mso-char-indent-count:2.0;
line-height:29.0pt;mso-line-height-rule:exactly'><span style='font-size:14.0pt;
font-family:仿宋_GB2312'>第十二条：本协议书一式三份，聘请方、受聘方各存一份，顾问律师存档一份，自双方盖章之日起生效。<span
lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:29.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:29.0pt;mso-line-height-rule:exactly'><span
style='font-size:14.0pt;font-family:仿宋_GB2312'>甲<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span>方：<span
lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>（盖章）<span lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:29.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:29.0pt;mso-line-height-rule:exactly'><span
style='font-size:14.0pt;font-family:仿宋_GB2312'>法定代表人：<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>（签名）<span lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:29.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:29.0pt;mso-line-height-rule:exactly'><span
style='font-size:14.0pt;font-family:仿宋_GB2312'>乙<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span>方：广州金鹏律师事务所<span
lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>（盖章）<span lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:29.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'></span></p>

<p class=MsoNormal style='line-height:29.0pt;mso-line-height-rule:exactly'><span
style='font-size:14.0pt;font-family:仿宋_GB2312'>承办律师：<span lang=EN-US><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>（签名）<span lang=EN-US></span></span></p>

<p class=MsoNormal style='line-height:29.0pt;mso-line-height-rule:exactly'><span
lang=EN-US style='font-size:14.0pt;font-family:仿宋_GB2312'><span
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:14.0pt;font-family:仿宋_GB2312'>年<span
lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>月<span lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>日<span lang=EN-US></span></span></p>


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
            Case_No:'',
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
                       this.Case_No = this.dataWord.Get_Case_Information.Case_No 
                         var arr1 = []; 
                        for(var i =0;i< this.dataWord.Get_Lawyer_Information.length;i++){
                            arr1.push(this.dataWord.Get_Lawyer_Information[i].Rule_Name)
                        }
                        var index=arr1.indexOf('主办律师')
                        var text1 = this.dataWord.Get_Lawyer_Information[index].Staff_Name
                        document.getElementById('text1').innerText = text1
                         document.getElementById('Aname').innerText = this.dataWord.Get_Customer_Information.Customer_Name_Zh
                        //  document.getElementById('text').innerText = this.dataWord.Get_Case_Information.Case_Name
                         document.getElementById('Aleader').innerText = this.dataWord.Get_Customer_Information.Customer_Name_Zh
                         document.getElementById('Aaddress').innerText = this.dataWord.Get_Customer_Information.Detailed_Address
                         document.getElementById('Atel').innerText = this.dataWord.Get_Customer_Information.Contact_Party
                         document.getElementById('Afax').innerText = ''
                         document.getElementById('Acode').innerText = '' 
                           
        
                         document.getElementById('Bname').innerText = '广州金鹏律师事务所'
                         document.getElementById('Baddress').innerText = '广东省广州市天河区兴民路222号之三天盈广场东塔45楼'
                         document.getElementById('Btel').innerText = '(020)38390333'
                         document.getElementById('Bfax').innerText = '(020)38390218'
                         document.getElementById('Bcode').innerText = '510623' 


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


