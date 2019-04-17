<template>
    <div class="caseAdd">
            <div class="add-top flex p-l">
                <p>设置</p>
                 <p><i class="el-icon-arrow-right"></i></p>
                <router-link to='/index/caseIndex' tag="a">案件模板</router-link>
                <p><i class="el-icon-arrow-right"></i></p>
                <p>编辑</p>
            </div>
             <div class="add-content flex">
                <div class="add-p flex">
                    <span @click="closeBox()" class="flex">
                   <i class="el-icon-close" ref="icon_right"></i>
                    </span>
                    </div>
               
                
                <div class="add-userinfo flex userInfo-demo">
             <p>
                 本协议书签约双方就协议书中所描述项目的研究开发、
                 投资融资、成果权益、收益分配、风险责任以及与之
                 相关的技术和法律等问题经平等协商，在真实、充分地
                 表达各自意愿的基础上，根据《中华人民共和国合同法》
                 之规定，达成如下协议，由签约双方共同恪守。</p>
                    
                   
                 </div>
                  <div class="add-userinfo flex userInfo-demo">
             
                    <p>
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议</p>
                   
                 </div>
                  <div class="add-userinfo flex userInfo-demo">
             
                    <p>
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议本协议本协议本
                    协议本协议</p>
                   
                 </div>
             </div>

             
    </div>
</template>
<script>
import qs from 'qs';
export default {
    data(){
        return{
             visible: false,
            textarea:'',
           
            userNameC:'',
            userNameE:'',
            province:'',
            address:'',
           
            laywerName:'',
            laywerJob:'',
            partyName:'',
            partyJob:'',

            dateName:'',
            payCount:'',
            describe:'',


            riskName:'',
            riskCount:'',
            riskCondition:'',

            nameJobName:'',
            nameJobJob:'',
            nameJobRate:'',


            text:'收起',
            showNum:0,
            arr:[],
            userInfo:[],
            PartyInfo:[],
            payDate:[],
            riskAcount:[],
            nameJob:[],

            options: [{
             value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: '选项1',
            value1: '选项2',
            value2: '选项3',
            // 案件律师信息input-model
            inputArr:[
            {laywerName:'',laywerJob:''}
            ],
            // 当事人信息input-model
            input1Arr:[
            {partyName:'',partyJob:''}
            ],
            // 付款方式之时间input-model
            timeArr:[
            {dateName:'',payCount:'',describe:''}
            ],
            // 付款方式之风险input-model
            riskArr:[
            {riskName:'',riskCount:'',riskCondition:''}
            ],
             // 付款方式之费率input-model
            nameJobArr:[
            {nameJobName:'',nameJobJob:'',nameJobRate:''}
            ],

            //数据检索
            search:'',
            list:[
                {name:'风老大',msg:'15696518682'},
                {name:'陈老二',msg:'1569515845'},
                {name:'刘骜三',msg:'1536852565'},
                {name:'马云',msg:'1569653256'},
                {name:'敖牛恩',msg:'1458541236'},
            ] ,
           
        }
    },
    methods:{
        // deleteLine(i){
        //     this.arr.splice(i,1)
        // },
        deleteLine(i,arr){
            arr.splice(i,1)
        },
        pushUserInfo(){
            this.userInfo.push(1)
            this.inputArr.push({laywerName:'',laywerJob:''})  
            console.log(this.inputArr)
        },
        pushPartyInfo(){
            this.PartyInfo.push(1)
            this.$store.dispatch('addParty')
            this.input1Arr.push({partyName:'',partyJob:''})  
        },
        addPayDate(){
            this.payDate.push(1)
            this.$store.dispatch('addDate')
            this.timeArr.push({dateName:'',payCount:'',describe:''})  
        },
         addRiskAcount(){
            this.riskAcount.push(1)
            this.$store.dispatch('addRisk')
            this.riskArr.push({riskName:'',riskCount:'',riskCondition:''})  
        },
         addNameJob(){
            this.nameJob.push(1)
            this.$store.dispatch('addNameJob')
            this.nameJobArr.push({nameJobName:'',nameJobJob:'',nameJobRate:''})  
        },
        closeBox(){
           this.$router.push('/index/caseIndex')
        },
        addAll(){
          var addJson = {
              'userNameC':this.userNameC,
              'userNameE':this.userNameE,
              'province':this.province,
              'address':this.address,
              'type':this.value,
              'suoshuhangye':this.value1,
              'job':this.value2,
              'laywerArr':this.inputArr,
              'partyArr':this.inputArr,
              'timeArr':this.timeArr,
              'riskArr':this.riskArr,
              'nameJobArr':this.nameJobArr,
              'textarea':this.textarea
          }
          addJson = JSON.stringify(addJson)
        var data = qs.stringify({
                str:addJson
                },{ indices: false });
          console.log(JSON.parse(addJson))
            // this.$http.post('',param).then(()=>{
            // })
        },
        getAlreadyName(name){
            this.search = name
            this.visible = false
        }
    },
    mounted(){
       
    },
    computed:{
        //数据检索
         items: function() {
            var _search = this.search;
            if (_search) {
                //不区分大小写处理
                var reg = new RegExp(_search, 'ig')
                //es6 filter过滤匹配，有则返回当前，无则返回所有
                return this.list.filter(function(e) {
                    //匹配所有字段
                    return Object.keys(e).some(function(key) {
                        return e[key].match(reg);
                    })
                    //匹配某个字段
                    //  return e.name.match(reg);
                })
            };
            return this.list;
        }
    },
}
</script>

<style lang="scss">
@import '../../assets/sass/caseAdd.scss';
.td-width{
    text-align: center;
    width:100px
}
.tr{
    cursor: pointer;
    height: 30px;
}
.tr:hover{
    background: #ccc;
}
.userInfo-first .el-input__inner{
    width: 200px;
    border-radius: 0px;
}
.userInfo-demo{
    padding-top:0px !important;
    margin-top:5px !important; 
    justify-content: flex-start !important;
    min-height: 150px;
    width: 80%;
    margin: auto;
}
.userInfo-demo p{
    font-size: 16px;
}
</style>

