<template>
    <div>
        <div class="countHeader">
                <div class="child_count">
                    <div class="count_num">8</div>
                    <p class="count_title">案件合计</p>
                </div>
                <div class="child_count">
                    <div class="count_num">8</div>
                    <p class="count_title">已结案</p>
                </div>
                <div class="child_count">
                    <div class="count_num">8</div>
                    <p class="count_title">客户</p>
                </div>
                <div class="child_count">
                    <div class="count_num">{{200000|formatMoney}}</div>
                    <p class="count_title">金额合计</p>
                </div>
        </div>

        <div class="countCase">
            <div class="flex row">
                 <p class="countCase_title" style="margin-right:20px;">案件</p>
            <el-date-picker
                @change="changeTime"
                v-model="value2"
                type="monthrange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                :picker-options="pickerOptions">
                </el-date-picker>
            </div>
           
            <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
        </div>

          <div class="countCase">
            <p class="countCase_title">客户</p>
            <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart1"></div>
        </div>

          <div class="countCase">
            <p class="countCase_title">客户</p>
            <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart2"></div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    props: {
    className: {
      type: String,
      default: 'echartDiv'
    },
    id: {
      type: String,
      default: 'yourID'
    },
    width: {
      type: String,
      default: '850px'
    },
    height: {
      type: String,
      default: '500px'
    }
  },
    data(){
        
        return{
            chart: null,
            chart1: null,
            chart2: null,
            arr:[ {date:"1999-03",value:[500,100,200],name:"类型1"},{date:"1998-03",value:[400,105,200],name:"类型2"},{date:"1997-03",value:[250,150,20],name:"类型3"}],
            arr1:[],
            arr2:[],
            arr3:[],
             pickerOptions: {
          shortcuts: [{
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: '今年至今',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
        }
    },
    mounted(){
         this.initChart();
        this.initChart1();
        this.initChart2();
          
    },
     beforeDestroy() {
            // if (!this.chart) {
            // return
            // }
            // this.chart.dispose();
            // this.chart = null;

            //  if (!this.chart1) {
            // return
            // }
            // this.chart1.dispose();
            // this.chart1 = null;

            //       if (!this.chart2) {
            // return
            // }
            // this.chart1.dispose();
            // this.chart1 = null;
    },
    methods:{
        changeTime(v){
             var start = new Date(v[0]);  
            console.log(start.getFullYear()+'-'+(start.getMonth()+1))

        },
          initChart() {
              var _self =this
                for(var i = 0;i<this.arr.length;i++){
                this.arr1[i] = this.arr[i].name 
                this.arr2[i] =this.arr[i].date
                this.arr3[i] =this.arr[i].value
            }
            this.chart = echarts.init(this.$refs.myEchart);
                                        this.chart.setOption({
                                        title : {
                                        text: '案件类型统计',
                                        subtext: '数量'
                                    },
                                    tooltip : {
                                        trigger: 'axis'
                                    },
                                    legend: {
                                        data:this.arr1
                                    },
                                    toolbox: {
                                        show : true,
                                        feature : {
                                            mark : {show: true},
                                            dataView : {show: true, readOnly: false},
                                            magicType : {show: true, type: ['line', 'bar']},
                                            restore : {show: true},
                                            saveAsImage : {show: true}
                                        }
                                    },
                                    calculable : true,
                                    xAxis : [
                                        {
                                            type : 'category',
                                            boundaryGap : false,
                                            data : _self.arr2
                                        }
                                    ],
                                    yAxis : [
                                        {
                                            type : 'value',
                                            axisLabel : {
                                                formatter: '{value}'
                                            }
                                        }
                                    ],
                                    series : [
                                       {
                                            name:'a',
                                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                                            type: 'line'
                                       },
                                       {
                                            name:'b',
                                            data: [8, 92, 520, 111, 1245, 888, 333],
                                            type: 'line'
                                       }
                                        // {
                                        //     name:'最高气温',
                                        //     type:'line',
                                        //     data:[11, 11, 15, 13, 12, 13, 10],
                                        //     markPoint : {
                                        //         data : [
                                        //             {type : 'max', name: '最大值'},
                                        //             {type : 'min', name: '最小值'}
                                        //         ]
                                        //     },
                                        //     markLine : {
                                        //         data : [
                                        //             {type : 'average', name: '平均值'}
                                        //         ]
                                        //     }
                                        // },
                                        // {
                                        //     name:'最低气温',
                                        //     type:'line',
                                        //     data:[1, -2, 2, 5, 3, 2, 0],
                                        //     markPoint : {
                                        //         data : [
                                        //             {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                                        //         ]
                                        //     },
                                        //     markLine : {
                                        //         data : [
                                        //             {type : 'average', name : '平均值'}
                                        //         ]
                                        //     }
                                        // }
                                    ]
                                })
          
        },

        initChart1(){
            this.chart1 = echarts.init(this.$refs.myEchart1);
            this.chart1.setOption({
                title : {
                    text: '新增客户数量',
                    subtext: '数量'
                   },
                   tooltip : {
                       trigger: 'axis'
                   },
                   legend: {
                       data:['客户类型一','客户类型二']
                   },
                   toolbox: {
                       show : true,
                       feature : {
                           mark : {show: true},
                           dataView : {show: true, readOnly: false},
                           magicType : {show: true, type: ['line', 'bar']},
                           restore : {show: true},
                           saveAsImage : {show: true}
                       }
                   },
                   calculable : true,
                   xAxis : [
                       {
                           type : 'category',
                           data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                       }
                   ],
                   yAxis : [
                       {
                           type : 'value'
                       }
                   ],
                   series : [
                                        {
                                           name:'客户类型一',
                                           data: [820, 932, 901, 934, 1290, 1330, 1320],
                                           type: 'line'
                                       },
                                       {
                                            name:'客户类型二',
                                            data: [8, 92, 520, 111, 1245, 888, 333],
                                            type: 'line'
                                       }
                      ]
                  })
            },
    initChart2(){
    this.chart2 = echarts.init(this.$refs.myEchart2);
    this.chart2.setOption({
            title : {
        text: '客户行业类型统计',
        subtext: '数量',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['互联网','金融','房地产','餐饮','内容运营']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'互联网'},
                {value:310, name:'金融'},
                {value:234, name:'房地产'},
                {value:135, name:'餐饮'},
                {value:1548, name:'内容运营'}
            ]
        }
    ]
                                            })
                                       }
    
    
    
    
    },
    filters:{
                formatMoney(s, type) {  
                    if (/[^0-9\.]/.test(s))  
                        return "0";  
                    if (s == null || s == "")  
                        return "0";  
                    s = s.toString().replace(/^(\d*)$/, "$1.");  
                    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");  
                    s = s.replace(".", ",");  
                    var re = /(\d)(\d{3},)/;  
                    while (re.test(s))  
                        s = s.replace(re, "$1,$2");  
                    s = s.replace(/,(\d\d)$/, ".$1");  
                    if (type == 0) {// 不带小数位(默认是有小数位)  
                        var a = s.split(".");  
                        if (a[1] == "00") {  
                            s = a[0];  
                        }  
                    }  
                    return s;  
                }  
            }
}
</script>
<style>
.countHeader{
    display: flex;
    flex-direction: row;
    height: 80px;
    justify-content: space-between;
   
}
.child_count{
     margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    justify-content: center;
    align-items: center;
    border-left: 2px solid #999999;
    flex: 1;
    font-size: 18px;
}
.child_count:first-child{
     border-left: none;
}
.count_num{
   font-weight: 600;
}
.count_title{
    margin-top: 10px;
}
/*  */
.countCase{
    margin-top: 30px;
}
.countCase_title{
    margin-left: 30px;
}
.echartDiv{
    margin: 0 auto;
}

</style>


