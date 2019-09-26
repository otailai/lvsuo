<template>
    <div>
        <div class="countHeader">
                <div class="child_count">
                    <div class="count_num">{{Case_Number}}</div>
                    <p class="count_title">案件合计</p>
                </div>
                <div class="child_count">
                    <div class="count_num">{{Closingcase_Number}}</div>
                    <p class="count_title">已结案</p>
                </div>
                <div class="child_count">
                    <div class="count_num">{{Customer_Number}}</div>
                    <p class="count_title">客户</p>
                </div>
                <div class="child_count">
                    <div class="count_num">{{Total_Amount|formatMoney}}</div>
                    <p class="count_title">金额合计</p>
                </div>
        </div>



        <div class="countCase">
            <div class="flex row row_center">
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
              <button class="dingzhi" style="margin-left:30px" v-for="(v,i) in twoMenu" :key="i" v-show="v.Path=='6_2'"><i class="el-icon-download"></i>
              <a :href="'/yongxu/Statistics/Export_Cases_Types?MinTime='+MinTime+'&MaxTime='+MaxTime" @click="downExcel1()">导出</a>              
              </button>
            </div>
           
            <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
        </div>

         <div class="countCase">
            <div class="flex row row_center">
            <p class="countCase_title" style="margin-right:20px;">案件</p>
            <el-date-picker
                @change="changeTime4"
                v-model="value6"
                type="monthrange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                :picker-options="pickerOptions4">
                </el-date-picker>
            </div>
           
            <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart4"></div>
        </div>

          <div class="countCase">
            <div class="flex row row_center">
            <p class="countCase_title" style="margin-right:20px;">客户</p>
            <el-date-picker
                @change="changeTime1"
                v-model="value3"
                type="monthrange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                :picker-options="pickerOptions1">
                </el-date-picker>
            </div>
            <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart1"></div>
        </div>

           <div class="countCase">
            <div class="flex row row_center">
            <p class="countCase_title" style="margin-right:20px;">客户</p>
            <el-date-picker
                @change="changeTime3"
                v-model="value5"
                type="monthrange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                :picker-options="pickerOptions3">
                </el-date-picker>
            </div>
            <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart3"></div>
        </div>

          <div class="countCase">
            <div class="flex row row_center">
            <p class="countCase_title" style="margin-right:20px;">客户</p>
            <el-date-picker
                @change="changeTime2"
                v-model="value4"
                type="monthrange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                :picker-options="pickerOptions2">
                </el-date-picker>
            </div>
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
             chart3: null,
              chart4: null,
            arr:[ 
                ],
            arr1:[],
            arr2:[],
            arr3:[],

            
            caseArr:[ 
                ],
            caseArr1:[],
            caseArr2:[],
            caseArr3:[],

            customerArr:[],
            customerArr1:[],
            customerArr2:[],
            customerArr3:[],
            
            jobArr:[],
            jobArr1:[],
            jobArr2:[],
            jobArr3:[],

            bingArr:[],
            bingArr1:[],
            bingArr2:[],
            bingArr3:[],

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
          }],
        },
        pickerOptions1: {
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
          }],
        },
          pickerOptions2: {
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
          }],
        },
         pickerOptions3: {
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
          }],
        },
         pickerOptions4: {
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
          }],
        },
          pickerOptions_excel: {
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
          }],
        },
        value1: '',
        value2: '',
        value3:'',
        value4:'',
        value5:'',
        value6:'',
        value_excel:'',
        MinTime:'',
        MaxTime:'',
        MinTime1:'',
        MaxTime1:'',
        MinTime2:'',
        MaxTime2:'',
        MinTime3:'',
        MaxTime3:'',
        MinTime4:'',
        MaxTime4:'',
        MinTime_excel:'',
        MaxTime_excel:'',
        Total_Amount: '',
        Case_Number: '',
        Customer_Number:'' ,
        Closingcase_Number: '',
        twoMenu:[],
        }
    },
    mounted(){
      this.getExportButton()
       this.getMounthDateExcel()
        this.getMounthDate()
        this.getMounthDate1()
        this.getMounthDate2()
        this.getMounthDate3()
         this.getMounthDate4()
         this.getInfo()
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
      /**
       * 获取二级按钮
       */
      getExportButton(){
         this.$http.get('/yongxu/Base/User_Two_Menu',{params:{
          Menu_Id:6,
          User_Id:localStorage.getItem('userId')
        }}).then((res)=>{
          this.twoMenu = res.data
          console.log(res)
        })
      },
       getInfo(){
          this.$http.get('/yongxu/Statistics/Amount_Number',{params:{User_Id:localStorage.getItem('userId')}}).then((res)=>{
                  console.log(res)
                  this.Total_Amount = res.data.Total_Amount
                  this.Case_Number = res.data.Case_Number
                  this.Customer_Number = res.data.Customer_Number
                  this.Closingcase_Number = res.data.Closingcase_Number
          })
      },
      //导出
      changeTimeExcel(v){
             console.log(v)
             if(v == null){
               this.getMounthDateExcel()
                return false
             }
             var start = new Date(v[0]);  
             var end = new Date(v[1])
             var strat1 = (start.getMonth()+1)
             var end1 = (end.getMonth()+1)
             if(strat1<10){
                 strat1 = '0'+strat1
             }else{
                 strat1 = strat1
             }
             if(end1<10){
                    end1 = '0'+end1
             }else{
                 end1 = end1
             }
             this.MinTime_excel = start.getFullYear()+'-'+strat1+'-01'
             this.MaxTime_excel = end.getFullYear()+'-'+end1+'-30'
             console.log(this.MinTime_excel)
      },
      downExcel1(){
        console.log('111111111')
           window.location = '/yongxu/'
      },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        changeTime(v){
          
             if(v == null){
                this.getMounthDate()
                return false
             }
             var start = new Date(v[0]);  
             var end = new Date(v[1])
             var strat1 = (start.getMonth()+1)
             var end1 = (end.getMonth()+1)
             if(strat1<10){
                 strat1 = '0'+strat1
             }else{
                 strat1 = strat1
             }
             if(end1<10){
                    end1 = '0'+end1
             }else{
                 end1 = end1
             }
             this.MinTime = start.getFullYear()+'-'+strat1+'-01'
             this.MaxTime = end.getFullYear()+'-'+end1+'-30'
            
             this.initChart()
        },
        changeTime1(v){
             
             if(v == null){
                this.getMounthDate1()
                return false
             }
             var start = new Date(v[0]);  
             var end = new Date(v[1])
             var strat1 = (start.getMonth()+1)
             var end1 = (end.getMonth()+1)
             if(strat1<10){
                 strat1 = '0'+strat1
             }else{
                 strat1 = strat1
             }
             if(end1<10){
                    end1 = '0'+end1
             }else{
                 end1 = end1
             }
             this.MinTime1 = start.getFullYear()+'-'+strat1+'-01'
             this.MaxTime1 = end.getFullYear()+'-'+end1+'-30'
             this.initChart1()
        },
          changeTime2(v){
           
             if(v == null){
                this.getMounthDate2()
                return false
             }
             var start = new Date(v[0]);  
             var end = new Date(v[1])
             var strat1 = (start.getMonth()+1)
             var end1 = (end.getMonth()+1)
             if(strat1<10){
                 strat1 = '0'+strat1
             }else{
                 strat1 = strat1
             }
             if(end1<10){
                    end1 = '0'+end1
             }else{
                 end1 = end1
             }
             this.MinTime2 = start.getFullYear()+'-'+strat1+'-01'
             this.MaxTime2 = end.getFullYear()+'-'+end1+'-30'
             this.initChart2()
        },
           changeTime3(v){
            
             if(v == null){
                this.getMounthDate3()
                return false
             }
             var start = new Date(v[0]);  
             var end = new Date(v[1])
             var strat1 = (start.getMonth()+1)
             var end1 = (end.getMonth()+1)
             if(strat1<10){
                 strat1 = '0'+strat1
             }else{
                 strat1 = strat1
             }
             if(end1<10){
                    end1 = '0'+end1
             }else{
                 end1 = end1
             }
             this.MinTime3 = start.getFullYear()+'-'+strat1+'-01'
             this.MaxTime3 = end.getFullYear()+'-'+end1+'-30'
             this.initChart3()
        },
          changeTime4(v){
            
             if(v == null){
                this.getMounthDate4()
                return false
             }
             var start = new Date(v[0]);  
             var end = new Date(v[1])
             var strat1 = (start.getMonth()+1)
             var end1 = (end.getMonth()+1)
             if(strat1<10){
                 strat1 = '0'+strat1
             }else{
                 strat1 = strat1
             }
             if(end1<10){
                    end1 = '0'+end1
             }else{
                 end1 = end1
             }
             this.MinTime4 = start.getFullYear()+'-'+strat1+'-01'
             this.MaxTime4 = end.getFullYear()+'-'+end1+'-30'
             this.initChart4()
        },
        //最近六个月
        getMounthDate(){
				//创建现在的时间
				var data=new Date();
				//获取年
				var year=data.getFullYear();
				//获取月
				var mon=data.getMonth()+1;
				var arry=new Array();
				for(var i=0;i<6;i++){
					mon=mon-1;
					if(mon<=0){
						year=year-1;
						mon=mon+12;
					}
					if(mon<10){
						mon="0"+mon;
					}
					arry[i]=year+"-"+mon;
                }
                this.MinTime = arry[5]+'-01'
                this.MaxTime = arry[0]+'-30';
                this.value2 = [this.MinTime,this.MaxTime]
                this.initChart();

				// console.log(arry)
				// return arry;
        },
          //最近六个月
        getMounthDate1(){
				//创建现在的时间
				var data=new Date();
				//获取年
				var year=data.getFullYear();
				//获取月
				var mon=data.getMonth()+1;
				var arry=new Array();
				for(var i=0;i<6;i++){
					mon=mon-1;
					if(mon<=0){
						year=year-1;
						mon=mon+12;
					}
					if(mon<10){
						mon="0"+mon;
					}
					arry[i]=year+"-"+mon;
                }
                this.MinTime1 = arry[5]+'-01'
                this.MaxTime1 = arry[0]+'-30';
                this.value3 = [this.MinTime1,this.MaxTime1]
                this.initChart1();
				// console.log(arry)
				// return arry;
        },
          //最近六个月
        getMounthDate2(){
				//创建现在的时间
				var data=new Date();
				//获取年
				var year=data.getFullYear();
				//获取月
				var mon=data.getMonth()+1;
				var arry=new Array();
				for(var i=0;i<6;i++){
					mon=mon-1;
					if(mon<=0){
						year=year-1;
						mon=mon+12;
					}
					if(mon<10){
						mon="0"+mon;
					}
					arry[i]=year+"-"+mon;
                }
                this.MinTime2 = arry[5]+'-01'
                this.MaxTime2 = arry[0]+'-30';
                this.value4 = [this.MinTime2,this.MaxTime2]
                this.initChart2();
				// console.log(arry)
				// return arry;
        },
             //最近六个月
        getMounthDate3(){
				//创建现在的时间
				var data=new Date();
				//获取年
				var year=data.getFullYear();
				//获取月
				var mon=data.getMonth()+1;
				var arry=new Array();
				for(var i=0;i<6;i++){
					mon=mon-1;
					if(mon<=0){
						year=year-1;
						mon=mon+12;
					}
					if(mon<10){
						mon="0"+mon;
					}
					arry[i]=year+"-"+mon;
                }
                this.MinTime3 = arry[5]+'-01'
                this.MaxTime3 = arry[0]+'-30';
                this.value5 = [this.MinTime3,this.MinTime3] 
                this.initChart3();
				// console.log(arry)
				// return arry;
        },
           //最近六个月
        getMounthDate4(){
				//创建现在的时间
				var data=new Date();
				//获取年
				var year=data.getFullYear();
				//获取月
				var mon=data.getMonth()+1;
				var arry=new Array();
				for(var i=0;i<6;i++){
					mon=mon-1;
					if(mon<=0){
						year=year-1;
						mon=mon+12;
					}
					if(mon<10){
						mon="0"+mon;
					}
					arry[i]=year+"-"+mon;
                }
                this.MinTime4 = arry[5]+'-01'
                this.MaxTime4 = arry[0]+'-30';
                this.value6 = [this.MinTime4,this.MaxTime4]
                this.initChart4();
				// console.log(arry)
				// return arry;
        },
         //最近六个月
        getMounthDateExcel(){
				//创建现在的时间
				var data=new Date();
				//获取年
				var year=data.getFullYear();
				//获取月
				var mon=data.getMonth()+1;
				var arry=new Array();
				for(var i=0;i<6;i++){
					mon=mon-1;
					if(mon<=0){
						year=year-1;
						mon=mon+12;
					}
					if(mon<10){
						mon="0"+mon;
					}
					arry[i]=year+"-"+mon;
          }
                this.MinTime_excel = arry[5]+'-01'
                this.MaxTime_excel = arry[0]+'-30';
                this.value_excel = [this.MinTime_excel,this.MaxTime_excel]
        },
          initChart(){
              var _self =this
              this.$http.get('/yongxu/Statistics/weekNumber',{params:{MinTime:this.MinTime,MaxTime:this.MaxTime,User_Id:localStorage.getItem('userId')}}).then((res)=>{
                  this.arr = res.data
                  console.log(res)
                for(var i = 0;i<this.arr.length;i++){
                    this.arr1[i] = this.arr[i].name.replace(/\r\n/g,"")
                    this.arr2 =this.arr[0].date
                    this.arr3[i] =this.arr[i].data
                 }
              }).then(()=>{
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
                                        data:this.arr1,
                                            type: 'scroll',
                                        bottom: 'bottom', 
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
                                    series :this.arr   
                                })
                             })
        },

        initChart1(){
              var _self =this
              this.$http.get('/yongxu/Statistics/Customer_Number',{params:{MinTime:this.MinTime1,MaxTime:this.MaxTime1,User_Id:localStorage.getItem('userId')}}).then((res)=>{
               
                  _self.customerArr = res.data
                for(var i = 0;i<this.customerArr.length;i++){
                    _self.customerArr1[i] = _self.customerArr[i].name.replace(/\r\n/g,"") 
                    _self.customerArr2 =_self.customerArr[0].date
                    _self.customerArr3[i] =_self.customerArr[i].data
                 }
                
              }).then(()=>{
            _self.chart1 = echarts.init(_self.$refs.myEchart1);
            _self.chart1.setOption({
                title : {
                    text: '新增客户数量',
                    subtext: '数量'
                   },
                   tooltip : {
                       trigger: 'axis'
                   },
                   legend: {
                       data:_self.customerArr1,
                        bottom: 'bottom', 
                         type: 'scroll',
                  
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
                           data : _self.customerArr2
                       }
                   ],
                   yAxis : [
                       {
                           type : 'value'
                       }
                   ],
                   series :_self.customerArr
                  })
                  })
            },
                initChart3(){
              var _self =this
              this.$http.get('/yongxu/Statistics/Industry_Number',{params:{MinTime:this.MinTime3,MaxTime:this.MaxTime3,User_Id:localStorage.getItem('userId')}}).then((res)=>{
                   console.log(res)
                  
                  this.jobArr = []
                  var jobArr = res.data
                for(var i = 0;i<jobArr.length;i++){ 
                    this.jobArr1[i] = jobArr[i].name.replace(/[\r\n]/g, "")
                    this.jobArr2 =jobArr[0].date
                    this.jobArr3[i] =jobArr[i].data
                    this.jobArr.push({name:jobArr[i].name.replace(/[\r\n]/g,""),date:jobArr[i].date,data:jobArr[i].data,type:jobArr[i].type})
                 }
                 console.log(this.jobArr)
              }).then(()=>{
      this.chart3 = echarts.init(this.$refs.myEchart3);
                                        this.chart3.setOption({
                                        title : {
                                        text: '客户行业类型统计',
                                        subtext: '数量',
                                     
                                    },
                                    tooltip : {
                                        trigger: 'axis'
                                    },
                                    legend: {
                                         
                                           type: 'scroll',
                                        bottom: 'bottom', 
                                        data:this.jobArr1
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
                                            data : _self.jobArr2
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
                                    series :this.jobArr   
                                })
                             })
        },

    initChart2(){
      this.$http.get('/yongxu/Statistics/Sel_Industry_Type',{params:{MinTime:this.MinTime2,MaxTime:this.MaxTime2,User_Id:localStorage.getItem('userId')}}).then((res)=>{
            var _self =this
                // console.log(this.MinTime2)
                //  console.log(this.MaxTime2)
                var bingArr = res.data
                // console.log(res)
                 _self.bingArr = []
                for(var i = 0;i<bingArr.length;i++){
                    _self.bingArr1[i] = bingArr[i].name.replace(/[\r\n]/g,"")
                    _self.bingArr3[i] = bingArr[i].value
                    _self.bingArr.push({name:bingArr[i].name.replace(/[\r\n]/g,""),value:bingArr[i].value})
                 }
      }).then(()=>{
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
        data:this.bingArr1,
        type: 'scroll',
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
            name:'系统统计',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:this.bingArr
        }
    ]
            })
                                       
      })
    },
     initChart4(){
      this.$http.get('/yongxu/Statistics/Sel_Cases_Pie',{params:{MinTime:this.MinTime4,MaxTime:this.MaxTime4,User_Id:localStorage.getItem('userId')}}).then((res)=>{
           console.log(res.data)
           var _self =this
                _self.caseArr = res.data
                for(var i = 0;i<_self.caseArr.length;i++){
                    _self.caseArr1[i] = _self.caseArr[i].name.replace(/[\r\n]/g, "")
                    _self.caseArr2[i] = _self.caseArr[i].value
                 }  
      }).then(()=>{
          this.chart4 = echarts.init(this.$refs.myEchart4);
    this.chart4.setOption({
            title : {
        text: '案件类型统计',
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
        data:this.caseArr1,
          type: 'scroll',
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
            name:'系统统计',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:this.caseArr
        }
    ]
            })
                                       
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
.row_center{
    /* justify-content: center; */
    align-items: center;
}
.dingzhi{
    width:75px;
    height:30px;
    background:rgba(255,255,255,1);
    border:2px solid rgba(126,44,46,1);
    cursor: pointer;
    font-weight: 600;
    color: #7E2C2E;
    outline: none;
}
</style>


