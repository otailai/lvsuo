<template>
    <div class="caseAdd">
         <div class="add-top flex p-l">
                <p>所在位置：</p>
                <router-link to='/index/caseIndex' tag="a">案件管理</router-link>
                <p><i class="el-icon-arrow-right"></i></p>
                <p>客户信息修改</p>
            </div>
             <div class="add-content flex">
                <div class="add-p flex">
                    <span @click="closeBox()" class="flex">
                   <i class="el-icon-close" ref="icon_right"></i>
                    </span>
                    </div>
                     <div class="add-userinfo flex">
                    
                <p class="add-userinfo-p">客户基本信息</p>
                <div class="flex add-userinfo-index">
                <div class="add-userinfo-left flex sselct">
                <!-- <div class="flex"><p class="title">编号</p><input type="text" class="common-input" placeholder="*必填" v-model="customerNo"/></div> -->
                <div class="flex"><p class="title">客户类型</p> 
                  <el-select v-model="customValue" placeholder="*请选择" @change="changeCustomType()"><el-option v-for="item in customTypeArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option></el-select>
                        </div>
                        <div class="flex" slot="reference"><p class="title">客户名称(中)</p><input type="text" class="common-input" placeholder="*必填" v-model="search"  maxlength="30"/></div>
                     <div class="flex" v-show="customValue==3 || customValue==14"><p class="title">身份证号</p> <input type="text" class="common-input" placeholder="*必填" v-model="cardNo" maxlength="30"/></div>
                    <div class="flex" v-show="customValue!=3 && customValue!=14"><p class="title">纳税人编号</p> <input type="text" class="common-input" placeholder="*必填" v-model="cardNo" maxlength="30"/></div>
                    <div class="flex"><p class="title">省/市地区</p>  
                    <!-- <input type="text" class="common-input" placeholder="*必填" v-model="province"/> -->
                     <el-cascader
                         size="large"
                         :options="options"
                         v-model="selectedOptions"
                         @change="handleChange">
                    </el-cascader>
                    </div>
                    <!-- <div class="flex"><p class="title">详细地址</p> <input type="text" class="common-input" placeholder="*必填" v-model="address"/></div> -->

                </div>
                  <div class="add-userinfo-left selectInput flex userInfo-first sselct">
                        
                        <div class="flex" v-show="customValue!=3 && customValue!=14"><p class="title">所属行业</p>
                  <el-select v-model="suoshuValue" placeholder="*请选择"><el-option v-for="item in suoshuhangyeArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option></el-select>                        
                        </div>
                        <div class="flex" v-show="customValue!=3 && customValue!=14"><p class="title">职务</p>
                        <input type="text" class="common-input" placeholder="选填" v-model="value2"/>
                  <!-- <el-select v-model="JobListValue" placeholder="*请选择"><el-option v-for="item in JobListArr" :key="item.Id" :label="item.Value" :value="item.Id"></el-option></el-select>                         -->
                         </div> 
                    <div class="flex"><p class="title">联系电话</p> <input type="text" class="common-input" placeholder="*必填" v-model="tel"  maxlength="30"/></div>
                    
    
                    </div>
                    </div>
                   <div class="address">
                       <div class="flex"><p class="address-title">详细地址</p> <input type="text " class="common-input long-width" placeholder="*必填" v-model="address" maxlength="50"/></div>
                       </div> 
                 </div>
                 <div class="end-btn flex">
                     <button class="btn btn2" @click="updateData()">提交</button>
                </div>
             </div>
              
                 
    </div>
</template>
<script>
import qs from 'qs';
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
export default {
    data(){
        return{
            customValue:'',
            search:'',
            suoshuValue:'',
            value2:'',
            /**客户类型 */
            customTypeArr:[],
            /**
             * 行业类型arr
             */
            suoshuhangyeArr:[],
            /**是否常年客户 */
            isValueArr:[
                {Id:1,Value:'是'},{Id:2,Value:'否'},
            ],
            /**选择客户类型 */
            identity:'',
            cardNo:'',
            //用户
            userNameC:'',
            province:'',
            address:'',
            tel:'',
            nameJobRate:'',
            custom_Id:'',
            Customer_Type:'',//客户类型
            options: regionData,
            selectedOptions:[],
            customerNo:'',
            province:'',
        }  
    },
    inject:["reload"],
    methods:{
        /**
         * 获取用户信息
         */
              getCustomInfo(){
             this.$http.get('/yongxu/Customer/Set_Customer_Details',{params:{Id:this.$route.params.id}}).then((res)=>{ 
                 console.log(res)
                  this.customValue = res.data.Customer_Type_Id
                  this.search = res.data.Customer_Name_Zh
                  this.tel=res.data.Contact_Party
                 // this.customerNo = res.data.Customer_Number

                    this.address = res.data.Detailed_Address
                 
                  this.suoshuValue = res.data.Trade_Type_Id
                  this.value2 = res.data.Position
                  this.customValue = res.data.Customer_Type_Id
                  this.cardNo =res.data.Customer_Number
                 // this.province=res.data.City
                  this.province=res.data.City
                  if(res.data.City ==undefined || res.data.City=="" || res.data.City=="无"){
                            res.data.City == ""
                            this.selectedOptions = []
                  }else{
                  var a = TextToCode[res.data.City.split('-')[0]].code
                  var b = TextToCode[res.data.City.split('-')[0]][res.data.City.split('-')[1]].code
                  var c = TextToCode[res.data.City.split('-')[0]][res.data.City.split('-')[1]][res.data.City.split('-')[2]].code
                  this.selectedOptions = [a,b,c]
                  }
        })
        },
        /**
         * 获取客户类型
         */
        getCustomerType(){
            this.$http.get('/yongxu/Customer/Set_Dropdown').then((res)=>{
                console.log(res)
                this.customTypeArr = res.data.category
                this.suoshuhangyeArr = res.data.industry
            }).then(()=>{
                this.getCustomInfo()
            })
        },
        
        /**change */
           /**改变客户类型 */
        changeCustomType(){
        },
        /**
         * 改变省市区
         */
        handleChange (value) {
            var province = ''
          //console.log(value)
          for(var i =0;i<value.length;i++){
              if(i<value.length-1){
                province += CodeToText[value[i]] + '-'
              }else{
               province += CodeToText[value[i]] 
              }
          }
            this.province = province
        },
        updateData(){
               if(this.customValue==""||this.customValue==null){
                this.$message({
                    message:'客户类型不能为空',
                    type:'warning'
                });
                return false
            }
            if(this.customValue ==3 ){
              
                if(this.cardNo == '' || this.cardNo == null) 
                { 
                     this.$message({
                        message:'身份证信息不能为空',
                         type:'warning'
                     });
                       return false  
                }
                 if(this.suoshuValue==""||this.suoshuValue==null){
                     this.suoshuValue = 0
                 }
            }
            if(this.customValue ==4 ){
               if(this.cardNo == '' || this.cardNo == null) 
                { 
                     this.$message({
                        message:'纳税人编号不能为空',
                         type:'warning'
                     });
                       return false  
                }

            if(this.suoshuValue===""||this.suoshuValue==null){
                this.$message({
                    message:'*请选择所属行业',
                    type:'warning'
                });
                return false
                        }
                }
              if(this.search==""||this.search==null){
                this.$message({
                    message:'客户名称不能为空',
                    type:'warning'
                });
                return false
            }
             if(this.address==""||this.address==null){
                this.$message({
                    message:'详细地址不能为空',
                    type:'warning'
                });
                return false
            }
           
             if(this.tel==""||this.tel==null){
                this.$message({
                    message:'联系电话不能为空',
                    type:'warning'
                });
                return false
            }
            if(this.province===''|| this.province=='无'){
                this.province = '无'
            }
            if(this.value2===''){
                    this.value2='无'
              }
            this.$http.post('/yongxu/Customer/Upd_Dropdown',{
                Customer_Name_Zh:this.search,
                Customer_Type_Id:this.customValue,
                City            :this.province,
                Detailed_Address:this.address,
                Position        :this.value2,
                Trade_Type_Id   :this.suoshuValue,
                Contact_Party   :this.tel,
                Customer_Number :this.cardNo,
                Id:this.$route.params.id
            }).then((res)=>{
                console.log(res)
                if(res.data == true){
                    this.$message({
                        message:'修改成功',
                        type:'success'
                    })
                      this.$router.go(-1);//返回上一层
                }else{
                     this.$message({
                        message:'修改失败',
                        type:'warning'
                    })
                }
            })
        },
        /**
         * 关闭
         */
        closeBox(){
             this.$router.go(-1);//返回上一层
        },
    },
    created(){
    },
    mounted(){
    this.getCustomerType()
    //this.getCustomInfo()
    //    this.getCustomSelect()

    //    this.getCustomType()
 
    //    this.getJobList()
    //    this.getSelectMenu()

       // this.getUpdateInfo()
       
    },
    computed:{
        //数据检索
         items: function() {
            var _search = this.search;
            if (_search) {
                //不区分大小写处理
                var reg = new RegExp(_search, 'ig')
                // //console.log(reg)
                // //console.log(this.list)
                //es6 filter过滤匹配，有则返回当前，无则返回所有
                return this.list.filter(function(e) {
                    //匹配所有字段
                    // return Object.keys(e).some(function(key) {
                    //     return e[key].match(reg);
                    // })
                    //匹配某个字段
                      return e.Customer_Name_Zh.match(reg);
                })
            };
            return this.list;
        },
    },
    components:{
        // 'caseWord':caseWord,
    },
}
</script>

<style lang="scss">
@import '../../assets/sass/caseAdd.scss';
@import '../../assets/sass/main.css';
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
.address{
    width: 90%;
    margin: auto;
    margin-top: 20px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.address-title{
        font-size: 14px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: #333333;
    min-width: 110px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;

}
.long-width{
    width: 72.5%;
}
.rmb{
    margin-left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color:#999999;
}
.search_laywer_div{
    position: relative;
    width: 100%;
    
}
.search_laywer{
    border: 1px solid #999;
    border-radius: 25px;
    width: 100%;
    height: 30px;
   text-indent:40px;
}
.search_lawer_btn{
    position: absolute;
    left: 14px;
    top:9px; 
}
.inline-input{
      .el-input__inner{
                        border-radius: 50px;
                        outline: none;
                        position: relative;
                        height: 30px;
                        i{
                            position: absolute;
                            left: 14px;
                            top:9px; 
                        }
                        &:focus{
                            border-color:#ccc;
                        }
                    }
        .el-input__icon {
    height: 100%;
    width: 25px;
    text-align: center;
    -webkit-transition: all .3s;
    transition: all .3s;
    line-height: 30px;
}

}
.add-Pay-index-child .flex .el-input{
    width: 200px;
    height: 35px;
    line-height: 35px;
    input{
 border-radius: 0px;
  height: 35px;
    }
    .el-input__suffix{
    .el-input__suffix-inner{
            .el-input__icon{
                line-height: 25px !important;
            }
        }
    }
    .el-input__prefix{
        line-height: 25px;

        
        .el-icon-time{
             line-height: 25px !important;
        }
    }
}
.serve_content{
    border: 1px solid #ccc;
    margin-left: 7px;
    margin-top: 10px;
    font-size: 14px;
    font-size: 14.0pt;
    height: 100px;
    overflow: auto;
    text-overflow:ellipsis;
}
.shangchuan_btn{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    color: #FFF;
    background-color: #7E2C2E;
    border-color: #7E2C2E;
    margin-left: 43px;
}
.el-popover{
    max-height: 300px;
    overflow: auto;
    min-width:310px;
}
::-webkit-input-placeholder { /* WebKit browsers */
    color:    #d3d2d2;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color:    #d3d2d2;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
  color:    #d3d2d2;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
  color:    #d3d2d2;
}
.el-cascader .el-input, .el-cascader .el-input__inner{
    height: 35px;
    line-height: 35px;
     border-color: none;
}
.el-date-editor .el-input__prefix{
    top: 10px;
}
.el-date-editor .el-input__suffix{
 top: 10px;
}
.el-cascader{
    width: 200px;
    border: none;
    outline: none;
    height: 35px;
}
.el-cascader .el-input, .el-cascader .el-input__inner{
    height: 35px;
    line-height: 35px;
     border-color: none;
}
.el-cascader .el-input.is-active .el-input__inner, .el-input__inner:focus{
    outline: none;
       border-color: none;
}
.flex .el-cascader .el-input.is-focus .el-input__inner{
    border-color: none;
     outline: none;
}
.flex .el-input.is-active .el-input__inner, .el-input__inner:focus{
    border-color: none;
     outline: none;
}
</style>

